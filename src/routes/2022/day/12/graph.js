import { Node } from "./node";


export class Graph {
    /**
     * Generic graph object for solving Day 12 Parts 1 and 2. 
     * @param {object} preprocessedData 
     */
    constructor (preprocessedData) {
        this.nColumns = preprocessedData.columns;
        this.nRows = preprocessedData.rows;

        this.nodes = [];
        this.visitedNodeIDs = new Set();
        this.possibleNextNodes = new Set();
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
        // Error check if there are no nodes left
        if (this.possibleNextNodes.size === 0) {
            throw "No valid visitable nodes were found";
        }

        // Cycle over all unvisited tested nodes and get whoever has the lowest distance
        let minimumDistance = 1e100;
        let bestID = -1;
        for (const nodeID of this.possibleNextNodes) {
            if (this.nodes[nodeID].distance < minimumDistance) {
                minimumDistance = this.nodes[nodeID].distance;
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
        this.visitedNodeIDs.add(idToVisit);
        this.possibleNextNodes.delete(idToVisit);

        // Add unvisited nodes that have a valid distance to the set of potentially visitable nodes
        for (const node of this.nodes[idToVisit].neighbors) {
            if (node.distance < 1e100 && !this.visitedNodeIDs.has(node.id)) {
                this.possibleNextNodes.add(node.id);
            }
        }
    }

    /**
     * Walks through the graph and evaluates Djikstra's algorithm to find the shortest path from the start to the end.
     * See: https://en.wikipedia.org/wiki/Dijkstra's_algorithm
     */
    evaluateGraphDjikstra(idStart, stoppingConditionCallback, testFunction) {
        // Visit the starting node
        this.nodes[idStart].distance = 0;
        this.visitNode(idStart, testFunction);

        // Cycle over all nodes, visiting them until the end node is the next unvisited node with the lowest distance!
        let nextNodeToVisit = this.getNextNodeToVisit();

        while (!stoppingConditionCallback(nextNodeToVisit)) {
            this.visitNode(nextNodeToVisit, testFunction);
            nextNodeToVisit = this.getNextNodeToVisit();
        }

        return nextNodeToVisit;
    }

    /**
     * Finds the best path through the graph once it has already been evaluated
     * @param {*} idStart 
     * @param {*} idEnd 
     * @returns 
     */
    findBestPath(idStart, idEnd) {
        // Step back from the end node, making a list of all best paths
        let idNodeToCheck = idEnd;
        let bestPath = [];
        let bestPathEdges = [];

        while (true) {
            bestPath.push(idNodeToCheck);
            bestPathEdges.push(this.nodes[idNodeToCheck].distance);

            if (idNodeToCheck === idStart) {
                break;
            }

            idNodeToCheck = this.nodes[idNodeToCheck].nearestNode;
        }

        // Reverse both the path and the edges since we went end to start
        bestPath.reverse();
        bestPathEdges.reverse();

        // Convert bestPathEdges into edge weights, atm it's cumulative
        for (let i = 1; i < bestPathEdges.length; i++) {
            bestPathEdges[i] = bestPathEdges[i] - bestPathEdges[i - 1];
        }

        return { path: bestPath, edges: bestPathEdges };
    }

    /**
     * Evaluates the shortest path from start to end. The reachability of one node to another is defined by 
     * testFunction.
     * @param {*} idStart 
     * @param {*} end 
     * @param {*} testFunction 
     * @returns {object} object containing the shortest path and the edges of that path.
     */
    getShortestPath(idStart, end, testFunction) {
        // Handle user input
        let stoppingConditionCallback;

        if (end === "lowest") {
            stoppingConditionCallback = (id) => this.nodes[id].height === 1;
        } else {
            stoppingConditionCallback = (id) => id === end;
        }

        // Evaluate the graph
        const idEnd = this.evaluateGraphDjikstra(idStart, stoppingConditionCallback, testFunction);

        // Find the best path from idStart to idEnd and return
        return this.findBestPath(idStart, idEnd);
    }
}
