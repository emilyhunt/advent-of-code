import { BlizzardSolver } from "./blizzard_solver";

class Path {
    constructor(x, y, length, history) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.history = history;
        this.distanceFromEnd = undefined;
    }

    static atStart(coordinates, debug) {
        if (debug) {
            return new Path(coordinates.startX, coordinates.startY, 0, ["S"]);
        }
        return new Path(coordinates.startX, coordinates.startY, 0);
    }

    recordMove(str) {
        this.length += 1;

        // Only record history if it has been set (i.e. if the user wants this, as it's a bit harder to do)
        if (this.history !== undefined) {
            this.history.push(str);
        }
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

    move(direction) {
        const newPath = this.copy();
        if (direction === "^") {
            newPath.moveUp();
        } else if (direction === ">") {
            newPath.moveRight();
        } else if (direction === "v") {
            newPath.moveDown();
        } else if (direction === "<") {
            newPath.moveLeft();
        } else if (direction === "w") {
            newPath.wait();
        } else {
            throw `Direction '${direction}' not recognised!`;
        }
        return newPath;
    }

    copy() {
        if (this.history !== undefined) {
            return new Path(this.x, this.y, this.length, [...this.history]);
        }
        return new Path(this.x, this.y, this.length);
    }

    calculateDistanceFromEnd(coordinates) {
        this.distanceFromEnd = Math.abs(this.y - coordinates.endY) + Math.abs(this.x - coordinates.endX);
    }
}


function coordIsStart(x, y, coordinates) {
    return x === coordinates.startX && y === coordinates.startY;
}


function coordIsEnd(x, y, coordinates) {
    return x === coordinates.endX && y === coordinates.endY;
}


function coordInBoundaries(x, y, coordinates) {
    return x >= 0 && x < coordinates.width && y >= 0 && y < coordinates.height;
}


function coordSafeFromBlizzard(x, y, blizzardState) {
    return !blizzardState[y][x];
}


function coordIsValid(x, y, coordinates, blizzardState) {

    if (coordIsStart(x, y, coordinates)) {
        return true;
    }

    if (coordIsEnd(x, y, coordinates)) {
        return true;
    }

    if (coordInBoundaries(x, y, coordinates)) {
        if (coordSafeFromBlizzard(x, y, blizzardState)) {
            return true;
        }
    }
    return false;
}


function sendFailureDebugOutput(settings, paths, coordinates) {
    if (settings.debug) {
        console.log("FAILED TO FIND BEST PATH! Info on current paths:");
        paths.forEach(path => path.calculateDistanceFromEnd(coordinates));
        paths.sort((a, b) => a.distanceFromEnd - b.distanceFromEnd);

        console.log("Paths:", paths.length);
        console.log("Best path:", paths[0]);
        console.log("All paths:", paths);
    }
}


function pruneBadPaths(paths, coordinates, settings) {
    if (paths.length > settings.maxPaths) {
        console.log("Pruned:", paths.length - settings.maxPaths);
        paths.forEach(path => path.calculateDistanceFromEnd(coordinates));
        paths.sort((a, b) => a.distanceFromEnd - b.distanceFromEnd);
        paths = paths.slice(0, maxPaths);
    }
    return paths;
}


function checkForPathAtEnd(paths, coordinates, settings) {
    for (const path of paths) {
        if (coordIsEnd(path.x, path.y, coordinates)) {
            if (settings.debug) {
                console.log("Final path:", path);
                console.log("Total paths at end:", paths.length);
            }
            return path;
        }
    }

    return undefined;
}


function removeDuplicatePaths(paths, coordinates, settings) {
    const existingPaths = new Set();
    for (const path of paths) {
        const coordValue = path.x + path.y * coordinates.width;
        if (existingPaths.has(coordValue)) {
            path.length = -1; // Set length to -1 to indicate later removal
        } else {
            existingPaths.add(coordValue);
        }
    }
    if (settings.debug) {
        console.log("Duplicates:", paths.length - existingPaths.size);
    }
    paths = paths.filter(path => path.length !== -1);
    return paths;
}


function generateNewPaths(paths, coordinates, blizzardSolver, settings) {
    const nextBlizzardState = blizzardSolver.getNextState();

    // For each path, check all locations around it
    const newPaths = [];
    for (const path of paths) {
        // Try waiting
        if (coordIsValid(path.x, path.y, coordinates, nextBlizzardState)) {
            newPaths.push(path.move("w"));
        }

        // Try going up
        if (coordIsValid(path.x, path.y - 1, coordinates, nextBlizzardState)) {
            newPaths.push(path.move("^"));
        }

        // Try going right
        if (coordIsValid(path.x + 1, path.y, coordinates, nextBlizzardState)) {
            newPaths.push(path.move(">"));
        }

        // Try going down
        if (coordIsValid(path.x, path.y + 1, coordinates, nextBlizzardState)) {
            newPaths.push(path.move("v"));
        }

        // Try going left
        if (coordIsValid(path.x - 1, path.y, coordinates, nextBlizzardState)) {
            newPaths.push(path.move("<"));
        }
    }

    if (settings.debug) {
        console.log(`Paths after step ${blizzardSolver.currentState}: ${paths.length}`);
    }

    return newPaths;
}


function swapStartAndEnd(coordinates) {
    coordinates = JSON.parse(JSON.stringify(coordinates));
    [coordinates.startX, coordinates.startY, coordinates.endX, coordinates.endY] = [
        coordinates.endX, coordinates.endY, coordinates.startX, coordinates.startY
    ];
    return coordinates;
}


const DEFAULT_PATH_SETTINGS = {
    maxPaths: 1000,  // Before pruning kicks in!
    maxStates: 5000,  // Maximum number of timesteps before execution stops  (typically needed ~300 on my input)
    debug: false,
    reversed: false,
}


/**
 * Finds shortest point between start and end coordinates defined within coordinates, given a blizzard solution provided
 * by blizzardSolver.
 * @param {object} coordinates 
 * @param {BlizzardSolver} blizzardSolver 
 * @param {object} userSettings 
 * @returns 
 */
export function findShortestPath(coordinates, blizzardSolver, userSettings) {
    // Handle any user settings that override defaults
    let settings = DEFAULT_PATH_SETTINGS;
    if (userSettings !== undefined) {
        settings = JSON.parse(JSON.stringify(settings));
        settings = Object.assign(settings, userSettings);
    }
    if (settings.reversed) {
        coordinates = swapStartAndEnd(coordinates);
    }

    // Basic setup
    let paths = [Path.atStart(coordinates, settings.debug)];
    [coordinates.height, coordinates.width] = [blizzardSolver.height, blizzardSolver.width];
    const initialState = blizzardSolver.currentState;

    // Cycle blizzard until a valid path from the start to the end is found
    while (blizzardSolver.currentState < settings.maxStates + initialState) {

        // Mutate all paths and find all new paths
        paths = generateNewPaths(paths, coordinates, blizzardSolver, settings);

        // Remove duplicates, since paths at the same x,y in a given timestep don't matter. 
        // It's only path length we care about, not path route!
        paths = removeDuplicatePaths(paths, coordinates, settings);

        // Check if any paths are at the end already
        const finalPath = checkForPathAtEnd(paths, coordinates, settings);
        if (finalPath !== undefined) {
            return finalPath.length;
        }

        // Prune paths, if desired 
        // (in practice, this code never seemed to be needed on my input once duplicates were removed)
        paths = pruneBadPaths(paths, coordinates, settings);

    }

    sendFailureDebugOutput(settings, paths, coordinates);
    throw "No solution found within time limit settings.maxStates!";
}
