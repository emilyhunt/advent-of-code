class Path {
    constructor(x, y, length, history) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.history = history;
    }

    static atStart() {
        return new Path(0, [], 0, -1);
    }

    recordMove(str) {
        this.history.push(str);
        this.length += 1;
    }

    moveUp() {
        this.y -= 1;
        this.recordMove("^");
    }

    moveRight() {
        this.x += 1;
        this.recordMove(">");
    }

    moveDown() {
        this.y += 1;
        this.recordMove("v");
    }

    moveLeft() {
        this.x -= 1;
        this.recordMove("<");
    }

    wait() {
        this.recordMove("w");
    }

    copy() {
        return new Path(this.x, this.y, this.length, [...this.history]);
    }
}


function newCoordIsStart(x, y) {
    if (x === 0 && y === -1) {
        return true;
    }
    return false;
}


function newCoordIsEnd(x, y, endX, endY) {
    if (x === endX && y === endY) {
        return true;
    }
    return false;
}


function newCoordIsValid(x, y, height, width, newState) {
    if (x >= 0 && x < width && y >= 0 && y < height) {
        if (newState[y][x]) {
            return true;
        }
    }
    return false;
}


export function findShortestPath(allStates) {
    // Basic things we need
    const cycleLength = allStates.length + 1;
    const height = allStates.length;
    const width = allStates[0].length;
    const endX = width - 1;
    const endY = height - 1;

    let paths = [Path.atStart()];

    // Mutate paths in all directions they can travel in
    let currentState = 0;
    while (currentState < 100) {
        currentState++;
        const nextState = allStates[currentState + 1 % cycleLength];

        // For each path, check all locations around it
        const newPaths = [];
        for (const path of paths) {
            // Try waiting
            if (newCoordIsStart(path.x, path.y) || !nextState[path.y][path.x]) {
                const newPath = path.copy();
                newPath.wait();
                newPaths.push(newPath)
            }

            // Try going up
            if (newCoordIsStart(path.x, path.y) || newCoordIsValid(path.x, path.y - 1, height, width, nextState)) {
                const newPath = path.copy();
                newPath.moveUp();
                newPaths.push(newPath)
            }

            // Try going right
            if (newCoordIsValid(path.x + 1, path.y, height, width, nextState)) {
                const newPath = path.copy();
                newPath.moveRight();
                newPaths.push(newPath)
            }

            // Try going down
            if (newCoordIsEnd(path.x, path.y + 1, endX, endY) || newCoordIsValid(path.x, path.y + 1, height, width, nextState)) {
                const newPath = path.copy();
                newPath.moveDown();
                newPaths.push(newPath)
            }

            // Try going left
            if (newCoordIsValid(path.x - 1, path.y, height, width, nextState)) {
                const newPath = path.copy();
                newPath.moveLeft();
                newPaths.push(newPath)
            }
        }

        // Assign the new paths to the paths array
        paths = newPaths;

        // Check if any paths are at the end already
        for (const path of paths) {
            if (path.x === endX && path.y === endY) {

            }
        }

    }


}