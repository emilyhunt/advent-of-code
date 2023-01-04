import { Elf } from "./elf";

export function coordinateToString(x, y) {
    return `${x},${y}`;
}


export function stringToCoordinate(str) {
    return str.split(",").map(x => Number(x));
}


function create2DArray(rows, columns, value) {
    return Array.from(Array(rows), _ => Array(columns).fill(value));
}


function getSurroundingCoordinates(elf) {
    const surroundings = [
        [elf.x, elf.y + 1],     // North
        [elf.x + 1, elf.y + 1], // North-east
        [elf.x + 1, elf.y],     // East
        [elf.x + 1, elf.y - 1], // South-east
        [elf.x, elf.y - 1],     // South
        [elf.x - 1, elf.y - 1], // South-west
        [elf.x - 1, elf.y],     // West
        [elf.x - 1, elf.y + 1]  // North-west
    ];
    return surroundings.map(value => coordinateToString(value[0], value[1]));
}


export class ElfShelf {
    constructor(preprocessedData) {
        // Initialise the elves
        this.elfLocations = new Set();
        this.elves = [];
        this.addInitialElves(preprocessedData);

        // Various class things
        this.proposedMoves = new Set();
        this.proposedMoveDuplicates = new Set();
        this.directionCheckOrder = ["N", "S", "W", "E"];
    }

    /**
     * Loops over initial configuration of elves and adds them to the ElfShelf.
     * @param {array} preprocessedData 
     */
    addInitialElves(preprocessedData) {
        for (let j = 0; j < preprocessedData.length; j++) {
        // for (let y = preprocessedData.length - 1; y >= 0; y--) {
            for (let i = 0; i < preprocessedData[0].length; i++) {
                if (preprocessedData[j][i] === "#") {
                    this.newElf(i, preprocessedData.length - j - 1);
                }
            }
        }
    }

    newElf(x, y) {
        const coordinate = coordinateToString(x, y);
        this.elfLocations.add(coordinate);
        this.elves.push(new Elf(this.elves.length, x, y));
    }

    directionContainsElf(direction, neighborIsElf) {
        if (direction === "N") {
            return {
                containsElf: neighborIsElf[7] || neighborIsElf[0] || neighborIsElf[1],
                coordsIndex: 0
            };
        } else if (direction === "E") {
            return {
                containsElf: neighborIsElf[1] || neighborIsElf[2] || neighborIsElf[3],
                coordsIndex: 2
            };
        } else if (direction === "S") {
            return {
                containsElf: neighborIsElf[3] || neighborIsElf[4] || neighborIsElf[5],
                coordsIndex: 4
            };
        } else if (direction === "W") {
            return {
                containsElf: neighborIsElf[5] || neighborIsElf[6] || neighborIsElf[7],
                coordsIndex: 6
            };
        } else {
            throw `Direction ${direction} not recognised!`;
        }
    }

    considerMovesOneElf(elf) {
        // Check all directions around the elf, getting an array of elf locations
        const neighborCoordinates = getSurroundingCoordinates(elf);
        const neighborIsElf = neighborCoordinates.map(c => this.elfLocations.has(c));

        // Firstly, the elf must have at least one neighbor.
        if (!neighborIsElf.some(x => x === true)) {
            elf.canMove = false;
            elf.newLocation = "NO_NEIGHBORS";
            return;
        }

        // Secondly, we look over all move directions and see if any are valid
        for (const direction of this.directionCheckOrder) {
            const result = this.directionContainsElf(direction, neighborIsElf);

            if (!result.containsElf) {
                // Assign the elf as movable
                elf.canMove = true;
                elf.newLocation = neighborCoordinates[result.coordsIndex];

                // Record this as a location at least one elf wants to go towards
                if (this.proposedMoves.has(elf.newLocation)) {
                    this.proposedMoveDuplicates.add(elf.newLocation);
                } else {
                    this.proposedMoves.add(elf.newLocation);
                }

                return;
            }
        }

        // Otherwise, if none were valid, then this elf aint goin nowhere
        elf.newLocation = "FULL_NEIGHBORS";
        elf.canMove = false;
    }

    considerMoves() {
        for (const elf of this.elves) {
            this.considerMovesOneElf(elf);
        }
    }

    performMoves() {
        let elvesMoved = 0;
        for (const elf of this.elves.filter(x => x.canMove)) {
            if (!this.proposedMoveDuplicates.has(elf.newLocation)) {
                this.elfLocations.delete(elf.currentLocation);
                elf.moveToNewLocation();
                elvesMoved++;
                this.elfLocations.add(elf.currentLocation);
            }
        }
        return elvesMoved;
    }

    shiftPriorityDirection() {
        this.directionCheckOrder.push(this.directionCheckOrder.shift());
    }

    wipeElfMoveSets() {
        this.proposedMoves = new Set();
        this.proposedMoveDuplicates = new Set();
    }

    moveElves(rounds, debug) {
        // Handle input
        let moveUntilEnd = rounds === "until end";
        if (moveUntilEnd) {
            rounds = 1000000;  // Theoretical max number of rounds to go for
        }

        // Print initial state if desired
        this.sendDebuggingOutput("start", debug);

        // Cycle over the requested number of rounds
        let i;
        for (i = 1; i <= rounds; i++) {
            this.considerMoves();
            const elvesMoved = this.performMoves();
            this.shiftPriorityDirection();
            this.wipeElfMoveSets();

            this.sendDebuggingOutput(i, debug);

            // Special exit condition if the user has requested we go until all elves stop moving
            if (moveUntilEnd && elvesMoved === 0) {
                return i;
            }
        }
        return i;
    }

    sendDebuggingOutput(message, debug) {
        if (!debug || debug === undefined || debug < 1) {
            return;
        }
        
        // Log the message if we're at debug level 1
        console.log(message);

        // At debug level 2, we also print the change in the elf grid (expensive)
        if (debug > 1) {
            console.log(this.toString());
            console.log(JSON.parse(JSON.stringify(this.elves)));
        }
    }

    getXYLimits() {
        const xValues = this.elves.map(elf => elf.x);
        const yValues = this.elves.map(elf => elf.y);

        const limits = {
            xMin: Math.min(...xValues),
            xMax: Math.max(...xValues),
            yMin: Math.min(...yValues),
            yMax: Math.max(...yValues)
        }
        limits.width = limits.xMax - limits.xMin + 1;
        limits.height = limits.yMax - limits.yMin + 1;

        return limits;
    }

    getFreeElfRectangleAmount() {
        const limits = this.getXYLimits();
        return limits.width * limits.height - this.elves.length;
    }

    toString() {
        const limits = this.getXYLimits();
        let grid = create2DArray(limits.height, limits.width, 0);

        for (const elf of this.elves) {
            grid[elf.y - limits.yMin][elf.x - limits.xMin] += 1;
        }

        // Join up the rows and map values to their new ones
        grid = grid.map(
            row => row.map(value => value === 0 ? "." : value === 1 ? "#" : value)
        );

        // Flip the grid for display purposes
        grid = grid.reverse();
        
        // Add some numbers too! Firstly: x values
        // Make x values as strings to work out how much bigger the grid needs to be
        const xStrings = [];
        for (let x = limits.xMin; x <= limits.xMax; x++) {
            xStrings.push(x.toString());
        }
        const maxLength = Math.max(...xStrings.map(s => s.length));

        // Create blank spots on the grid
        grid.unshift([" "]);
        //grid.unshift(new Array(grid[1].length).fill("_"));
        // grid.unshift([" "]);

        for (let i = 0; i < maxLength; i++) {
            grid.unshift(new Array(grid[0].length).fill(" "));
        }

        // Cycle over every x string, adding it to the blank spots
        for (let indexX = 0; indexX < xStrings.length; indexX++) {
            const lengthDifference = maxLength - xStrings[indexX].length;
            for (let indexY = maxLength - 1; indexY >= 0; indexY--) {
                grid[indexY][indexX] = xStrings[indexX][indexY - lengthDifference];
            }
        }

        // Now also add Y values on the right (WAY easier to format lol)
        let height = limits.yMin;
        for (let i = grid.length - 1; i > grid.length - 1 - limits.height; i--) {
            grid[i].push(`  ${height}`);
            height++;
        }

        // Join into one big string and return
        return grid.map(row => row.join("")).join("\n");
    }
}