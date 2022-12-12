/* lmao node.js 
   this file is not the node you were looking for
   lol
*/

class Node {
    /**
     * Class representing a single node of a graph, constructed using its height with heightString.
     * @param {string} heightString height of the graph - a to z or S for start, E for end
     * @param {number} rowIndex 
     * @param {number} columnIndex 
     * @param {number} nRows 
     * @param {number} nColumns 
     */
    constructor(heightString, rowIndex, columnIndex, nRows, nColumns) {

        this.neighbors = [];
        this.distance = 1e100;
        this.nearestNode = -1;

        this.isStart = false;
        this.isEnd = false;
        this.height = this.calculateHeight(heightString);

        [this.id, this.neighborIDs] = this.calculateNeighborIDs(rowIndex, columnIndex, nRows, nColumns);
        this.stringValue = heightString;

        this.visited = false;
    }

    /**
     * Calculates the height of the current node based on its string and returns its height numerically.
     * @param {string} heightString 
     * @returns {number} height of the current point
     */
    calculateHeight(heightString) {

        // Special cases if the string is the start or end marker
        if (heightString === "S") {
            this.isStart = true;
            return 1;
        }
        if (heightString === "E") {
            this.isEnd = true;
            return 26;
        }

        // Get ASCII character code and return as height
        const height = Number(heightString.charCodeAt(0)) - 96;
        if (height < 1 || height > 26) {
            throw `Character ${heightString} out of bounds`;
        }
        return height;
    }

    /**
     * Calculates the ID of the current node and its neighbours.
     * @param {number} rowIndex 
     * @param {number} columnIndex 
     * @param {number} nRows 
     * @param {number} nColumns 
     * @returns {array} id of current node and IDs of its neighbours as array
     */
    calculateNeighborIDs(rowIndex, columnIndex, nRows, nColumns) {
        // Get the id of this node
        const id = columnIndex + rowIndex * nColumns;

        // Go over all possible neighbors
        let neighbors = [];
        
        // Left
        if (columnIndex > 0) {
            neighbors.push(id - 1);
        }
        // Right
        if (columnIndex < nColumns - 1) {
            neighbors.push(id + 1);
        }
        // Above
        if (rowIndex > 0) {
            neighbors.push(id - nColumns);
        }
        // Below
        if (rowIndex < nRows - 1) {
            neighbors.push(id + nColumns);
        }

        return [id, neighbors];
    }

    /**
     * Assigns references to the actual Node objects of this node's neighbors to this node.
     * @param {array} allNodesArray 
     */
    setNeighbors(allNodesArray) {
        for (const id of this.neighborIDs) {
            this.neighbors.push(allNodesArray[id]);
        }

        if (this.neighbors.length < 2) {
            throw `Current node id '${this.id}' has fewer than 2 neighbors. That should be impossible on a grid.`
        }
    }

    /**
     * Tests if current node is reachable FROM the calling node callingNode. If yes, update our distance if the path
     * running via the calling node is shorter.
     * @param {Node} callingNode reference to calling node
     * @param {function} testFunction function that takes args (callingNode.height, this.height) and returns true if
     *  the node is reachable, false if not
     */
    testDistance(callingNode, testFunction) {
        const edgeWeight = 1;  // Could in theory be variable

        // If the node is unreachable, then it doesn't affect us
        if (testFunction(callingNode.height, this.height)) {
            return;
        }

        // Otherwise, we can see if its distance would work
        const newDistance = callingNode.distance + edgeWeight;

        // Update our own distance if this one is better!
        if (newDistance < this.distance) {
            this.distance = newDistance;
            this.nearestNode = callingNode.id;
        }
    }

    /**
     * Visits the neighbors of the current node.
     * @param {array} allNodesArray 
     * @param {function} testFunction 
     */
    visit(allNodesArray, testFunction) {
        // Set up our neighbors to visit
        this.setNeighbors(allNodesArray);

        // Visit all unvisited neighbors!
        for (const node of this.neighbors) {
            if (!node.visited) {
                node.testDistance(this, testFunction);
            }
        }

        // Visitation is complete! You may now return =)
        this.visited = true;
    }

    getDistance() {
        return this.distance;
    }

    getPath() {
        return this.nearestNode;
    }
}

export class Graph {
    /**
     * Generic graph object for solving Day 12 Parts 1 and 2. 
     * @param {object} preprocessedData 
     */
    constructor (preprocessedData) {
        this.nColumns = preprocessedData.columns;
        this.nRows = preprocessedData.rows;

        this.nodes = [];
        this.unvisitedNodeIDs = new Set();
        this.testedNodeIDs = new Set();
        this.idStart = -1;
        this.idEnd = -1;
        this.bestPath = [];
        this.bestPathEdges = [];
        this.initialiseNodes(preprocessedData.data);
    }

    /**
     * Initialises a node given its location in the grid and its string-height representation.
     * @param {*} heightString 
     * @param {*} indexRow 
     * @param {*} indexColumn 
     */
    initialiseNode(heightString, indexRow, indexColumn) {
        const newNode = new Node(heightString, indexRow, indexColumn, this.nRows, this.nColumns);

        if (newNode.isStart) {
            this.idStart = newNode.id;
        }
        if (newNode.isEnd) {
            this.idEnd = newNode.id;
        }
        this.nodes.push(newNode);
        this.unvisitedNodeIDs.add(newNode.id);
    }

    /**
     * Initialises all nodes based on the grid.
     * @param {*} nodeMap 
     */
    initialiseNodes(nodeMap) {
        // Cycle over all nodes in the data and initialise them all into our nodes array
        for (let indexRow = 0; indexRow < this.nRows; indexRow++) {
            for (let indexColumn = 0; indexColumn < this.nColumns; indexColumn++) {
                this.initialiseNode(nodeMap[indexRow][indexColumn], indexRow, indexColumn);
            }
        }

        // Some checks to make sure this worked
        if (this.idStart === -1) {
            throw "Unable to find starting node during graph construction"
        }
        if (this.idEnd === -1) {
            throw "Unable to find ending node during graph construction"
        }
    }

    /**
     * Gets the next unvisited node with the lowest distance value.
     * @returns ID of the next best node to visit.
     */
    getNextNodeToVisit() {
        // Find the intersection between the set of all unvisited nodes and the set of all nodes that have at least been
        // tested (since untested nodes are unreachable and we can ignore them until later)
        const nodesToCheck = new Set(
            [...this.testedNodeIDs].filter(x => this.unvisitedNodeIDs.has(x))
        );

        // Error check if there are no nodes left
        if (nodesToCheck.size === 0) {
            throw "No valid visitable nodes were found";
        }

        // Cycle over all unvisited tested nodes and get whoever has the lowest distance
        let minimumDistance = 1e100;
        let bestID = -1;
        for (const nodeID of nodesToCheck) {
            const distance = this.nodes[nodeID].getDistance();
            if (distance < minimumDistance) {
                minimumDistance = distance;
                bestID = nodeID;
            }
        }

        if (bestID === -1) {
            throw "Unable to find a new node to visit with a finite distance";
        }
        return bestID;

    }

    /**
     * Visits a node and applies testFunction to its neighbors.
     * @param {*} idToVisit 
     * @param {*} testFunction 
     */
    visitNode(idToVisit, testFunction) {
        this.nodes[idToVisit].visit(this.nodes, testFunction);
        this.unvisitedNodeIDs.delete(idToVisit);
        this.testedNodeIDs.delete(idToVisit);
        this.nodes[idToVisit].neighborIDs.map(id => this.testedNodeIDs.add(id));
    }

    /**
     * Walks through the graph and evaluates Djikstra's algorithm to find the shortest path from the start to the end.
     * See: https://en.wikipedia.org/wiki/Dijkstra's_algorithm
     */
    evaluateGraphDjikstra(idStart, stoppingConditionCallback, testFunction) {
        // Visit the starting node
        this.nodes[idStart].distance = 0;
        this.visitNode(idStart, testFunction);
        let nextNodeToVisit = this.getNextNodeToVisit();

        // Cycle over all nodes, visiting them until the end node is the next unvisited node with the lowest distance!
        while (!stoppingConditionCallback(nextNodeToVisit)) {
            this.visitNode(nextNodeToVisit, testFunction);
            nextNodeToVisit = this.getNextNodeToVisit();
        }
        return nextNodeToVisit;
    }

    /**
     * Evaluates the shortest path from idStart to the node that satisfies stoppingFunctionCallback. The reachability
     * of one node to another is defined by testFunction.
     * @param {*} idStart 
     * @param {*} stoppingConditionCallback 
     * @param {*} testFunction 
     * @returns 
     */
    evaluateShortestPathDjikstra(idStart, stoppingConditionCallback, testFunction) {
        // Evaluate the graph
        const idEnd = this.evaluateGraphDjikstra(idStart, stoppingConditionCallback, testFunction);

        // Step back from the end node, finding the best path
        let idNodeToCheck = idEnd;
        let bestPath = [];
        let bestPathEdges = []
        
        while (true) {
            bestPath.push(idNodeToCheck);
            bestPathEdges.push(this.nodes[idNodeToCheck].distance);

            if (idNodeToCheck === idStart) {
                break;
            }

            idNodeToCheck = this.nodes[idNodeToCheck].nearestNode;
        }

        // Reverse both since we went end to start
        bestPath.reverse();
        bestPathEdges.reverse();

        // Convert bestPathEdges into edge weights, atm it's cumulative
        for (let i = 1; i < bestPathEdges.length; i++) {
            bestPathEdges[i] = bestPathEdges[i] - bestPathEdges[i - 1];
        }
        return [bestPath, bestPathEdges];
    }

    /**
     * Evaluates the shortest path from start to end. The reachability of one node to another is defined by 
     * testFunction.
     * @param {*} start 
     * @param {*} end 
     * @param {*} testFunction 
     * @returns {object} object containing the shortest path and the edges of that path.
     */
    getShortestPath(start, end, testFunction) {
        let stoppingConditionCallback;
        if (end === "lowest") {
            stoppingConditionCallback = (id) => this.nodes[id].height === 1;
        } else {
            stoppingConditionCallback = (id) => id === end;
        }

        const [path, edges] = this.evaluateShortestPathDjikstra(start, stoppingConditionCallback, testFunction);

        return {path: path, edges: edges};
    }
}