/* lmao node.js 
   this file is not the node you were looking for
   lol
*/

export class Node {
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
