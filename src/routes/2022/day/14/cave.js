/* Cave class that can be initialised with 2022.14 puzzle input and has methods to solve the puzzle with. */
import { Coords2D } from "./coords2d";
import { GridSpec } from "./gridspec";


const SAND_INPUT = new Coords2D(500, 0);


/**
 * Calculates the required shape of a grid that could hold all paths within rockPaths _and_ be large enough to fit
 * the sand input at the top.
 * @param {array} rockPaths array of paths, where each path is an array of Coords2D objects
 * @returns {GridSpec} required grid parameters
 */
export function getInputShape(rockPaths) {
    // Search each line, looking for best/worst case sizes
    let lowestXCoord = SAND_INPUT.x;
    let highestXCoord = SAND_INPUT.x;
    let highestYCoord = SAND_INPUT.y;

    for (const path of rockPaths) {
        for (const point of path) {
            if (point.y > highestYCoord) {
                highestYCoord = point.y;
            }
            if (point.x < lowestXCoord) {
                lowestXCoord = point.x;
            } else if (point.x > highestXCoord) {
                highestXCoord = point.x;
            }
        }
    }

    return new GridSpec(lowestXCoord, highestXCoord, SAND_INPUT.y, highestYCoord);
}


/**
 * 
 * @param {number} rows number of rows
 * @param {number} columns number of columns
 * @param {number} value value to fill with
 * @returns {array}
 */
function create2DArray(rows, columns, value) {
    return Array.from(Array(rows), _ => Array(columns).fill(value));
}


export class Cave {
    /**
     * Creates a class representation of a cave for the puzzle. Try adding sand!
     * @param {array} paths 
     * @param {GridSpec} shape 
     * @param {boolean=} hasInfiniteFloor
     */
    constructor(paths, shape, hasInfiniteFloor) {
        // Intialise the grid spec
        // Modify the gridspec for part 2
        this.gridSpec = shape;
        this.hasInfiniteFloor = false;

        if (hasInfiniteFloor === true) {
            // Modify the gridspec so the grid is large enough to contain all of our values. 
            let [xMin, xMax, yMin, yMax] = [shape.xMin, shape.xMax, shape.yMin, shape.yMax];
            
            // Firstly, needs to have a floor 2 below the max value
            yMax += 2;

            // Needs to be able to fit a pyramid around the sand input
            xMin = Math.min(SAND_INPUT.x - yMax - 1, xMin);
            xMax = Math.max(SAND_INPUT.x + yMax + 1, xMax);

            this.gridSpec = new GridSpec(xMin, xMax, yMin, yMax);
            this.hasInfiniteFloor = true;
        }

        // Actually create it!
        this.sandInput = this.gridSpec.transformCoords2D(SAND_INPUT);
        this.grid = create2DArray(this.gridSpec.yLength, this.gridSpec.xLength, 0);
        this.addRockPaths(paths);

        // Add an infinite floor if desired
        if (this.hasInfiniteFloor) {
            this.grid[this.gridSpec.yMaxGrid] = new Array(this.gridSpec.xLength).fill(1);
        }

        // Add sand marker
        this.grid[this.sandInput.y][this.sandInput.x] = -1;

        // Other variables
        this.sandCount = 0;
        
    }

    /**
     * Adds a single line of rocks from start to end
     * @param {Coords2D} start 
     * @param {Coords2D} end 
     */
    addRockLine(start, end) {
        // x equality
        if (start.x === end.x) {
            const yStart = Math.min(start.y, end.y);
            const yEnd = Math.max(start.y, end.y);

            for (let y = yStart; y <= yEnd; y++) {
                this.grid[y][start.x] = 1;
            }

        // y equality
        } else if (start.y === end.y) {
            const xStart = Math.min(start.x, end.x);
            const xEnd = Math.max(start.x, end.x);

            for (let x = xStart; x <= xEnd; x++) {
                this.grid[start.y][x] = 1;
            }

        // Otherwise idfk what the input is
        } else {
            throw "Unexpected input! Unable to add diagonal line of rocks.";
        }
    }

    /**
     * Searches through input and calculates shape of necessary grid to store it all
     * @param {array} rockPaths 
     */
    addRockPaths(paths) {
        // Transform all paths to the grid values
        paths = paths
            .map(x => x.map(
                coord => this.gridSpec.transformCoords2D(coord)
                )
            );

        // Cycle over all paths, adding rock lines
        for (const path of paths) {
            for (let i = 1; i < path.length; i++) {
                this.addRockLine(path[i - 1], path[i]);
            }
        }
    }

    /**
     * Converts a numerical grid value to a user-defined string.
     * @param {number} value 
     * @returns {string}
     */
    stringRepresentationOfValue(value) {
        if (value === 0) {
            return ".";
        } else if (value === 1) {
            return "#";
        } else if (value === 2) {
            return "o";
        } else if (value === -1) {
            return "+";
        } else {
            throw `Value '${value} not recognised`;
        }
    }

    /**
     * Creates a string representation of the current grid.
     * @returns {string}
     */
    gridToString() {
        const gridString = this.grid
            .map(row => row.map(
                x => this.stringRepresentationOfValue(x)).join("")
            ).join("\n");
        return gridString;
    }

    /**
     * Attempts to move sand to next new location. Returns a string specifying the result of the attempt.
     * @param {array} currentCoords 
     * @returns {string}
     */
    moveSand(currentCoords) {

        // Firstly, try below
        if (currentCoords.y + 1 > this.gridSpec.yMaxGrid) {
            return "void";
        }
        if (this.grid[currentCoords.y + 1][currentCoords.x] === 0) {
            currentCoords.y += 1;
            return "moved";
        }

        // Next, try bottom left
        if (currentCoords.x - 1 < this.gridSpec.xMinGrid) {
            return "void";
        }
        if (this.grid[currentCoords.y + 1][currentCoords.x - 1] === 0) {
            currentCoords.x -= 1;
            currentCoords.y += 1;
            return "moved";
        }

        // Finally, try bottom right
        if (currentCoords.x + 1 > this.gridSpec.xMaxGrid) {
            return "void";
        }
        if (this.grid[currentCoords.y + 1][currentCoords.x + 1] === 0) {
            currentCoords.x += 1;
            currentCoords.y += 1;
            return "moved";
        }

        // Otherwise, the sand has stopped! Add it to the grid!
        this.grid[currentCoords.y][currentCoords.x] = 2;
        this.sandCount += 1

        // Check for if the sand input is now blocked
        if (currentCoords.x === this.sandInput.x && currentCoords.y === this.sandInput.y) {
            return "blocked";
        }

        return "stopped";

    }

    /**
     * Adds a sand, starting at sandInput until either a) sand is stopped or b) sand is outside of range
     * @returns {boolean} true if able to add sand, false if not
     */
    tryToAddSand() {
        const newSand = this.sandInput.copy();

        while (true) {
            const result = this.moveSand(newSand);

            if (result === "void" || result === "blocked") {
                return false;
            } else if (result === "stopped") {
                return true;
            }
        }

    }

    /**
     * Iteratively adds sand to the cave until no more sand can be added without filling the void.
     * @returns {number}
     */
    addSandUntilFull() {
        while (this.tryToAddSand()) {}
        return this.sandCount;
    }
}