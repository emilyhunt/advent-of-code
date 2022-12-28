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
        for (let y = 0; y < preprocessedData.length; y++) {
            for (let x = 0; x < preprocessedData[0].length; x++) {
                if (preprocessedData[y][x] === "#") {
                    this.newElf(x, y);
                }
            }
        }
    }

    newElf(x, y) {
        const coordinate = coordinateToString(x, y);
        this.elfLocations.add(coordinate);
        this.elves.push(new Elf(x, y));
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
        for (const elf of this.elves.filter(x => x.canMove)) {
            if (!this.proposedMoveDuplicates.has(elf.newLocation)) {
                this.elfLocations.delete(elf.currentLocation);
                elf.moveToNewLocation();
                this.elfLocations.add(elf.currentLocation);
            }
        }
    }

    shiftPriorityDirection() {
        this.directionCheckOrder.push(this.directionCheckOrder.shift());
    }

    wipeElfMoveSets() {
        this.proposedMoves = new Set();
        this.proposedMoveDuplicates = new Set();
    }

    moveElves(rounds) {
        // console.log("start");
        // console.log(this.toString());

        for (let i = 0; i < rounds; i++) {
            this.considerMoves();
            this.performMoves();
            this.shiftPriorityDirection();
            this.wipeElfMoveSets();

            // console.log(i);
            // console.log(this.toString());
        }

        return this.getFreeElfRectangleAmount();
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
        const grid = create2DArray(limits.height, limits.width, 0);

        for (const elf of this.elves) {
            grid[elf.y - limits.yMin][elf.x - limits.xMin] += 1;
        }

        return grid
            .map(row => row.map(
                value => value === 0 ? "." : value === 1 ? "#" : value)
                .join(""))
            .join("\n");
    }
}