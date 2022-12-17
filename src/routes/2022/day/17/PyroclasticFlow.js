/* Class for simulating a ~~Tetris game~~ Pyroclastic flow */

import { Rock } from "./Rock";


export const DEFAULT_ROCKS = [
    "####",
    ".#.\n###\n.#.",
    "..#\n..#\n###",
    "#\n#\n#\n#",
    "##\n##",
]


function booleanArrayToNumber(arrayOfBools) {
    const binaryString = arrayOfBools.map(item => item ? 1 : 0).join("");
    return parseInt(binaryString, 2);
}


export class PyroclasticFlow {

    constructor(moveOrder, rocks) {
        
        // Save our move order
        this.moveOrder = moveOrder;

        // Process the rockz
        if (rocks === undefined) {
            this.rocks = DEFAULT_ROCKS.map(x => new Rock(x));
        }

        // Class stuff that other functions need later
        this.cave = [...Array(100)].map(e => Array(7).fill(false));
        this.currentOrigin = 0;
        this.highestOccupiedSpace = -1;  // The floor is at -1! 0-indexing yay!

        this.totalRocksDropped = 0;
        this.indexHorizontalMove = 0;
    }

    shiftCave() {
        if (this.highestOccupiedSpace > this.cave.length - 10) {
            const shiftAmount = 20;
            const newSpace = [...Array(shiftAmount)].map(e => Array(7).fill(false));
            this.cave = this.cave.slice(shiftAmount);
            this.cave.push(...newSpace);
            this.currentOrigin += shiftAmount;
            this.highestOccupiedSpace -= shiftAmount;
        }
    }

    findHighestOccupiedSpace() {
        // Cycle over all values backwards, returning first value with true
        for (let y = this.cave.length - 1; y >= 0; y++) {
            if (this.cave[y].some(x => x === true)) {
                this.highestOccupiedSpace = y;
                return this.highestOccupiedSpace;
            }
        }
        // Otherwise, we must just have a floor here
        this.highestOccupiedSpace = -1;
        return this.highestOccupiedSpace;
    }

    getNextHorizontalMove() {
        const move = this.moveOrder[this.indexHorizontalMove % this.moveOrder.length];
        this.indexHorizontalMove += 1;
        return move;
    }

    checkForCollisions(rock) {
        for (const coord of rock.coords) {
            if (this.cave[coord.y][coord.x]) {
                rock.undoLastMove();
                return true;
            }
        }
        return false;
    }

    addRockToCave(rock) {
        // Add the rock by setting all boolean values to true at the cave location
        for (const coord of rock.coords) {
            this.cave[coord.y][coord.x] = true;
        }

        // Set the highest occupied space to the new value
        this.highestOccupiedSpace = Math.max(this.highestOccupiedSpace, ...rock.coords.map(coord => coord.y));
    }

    dropOneRock(indexRock) {
        const rockToDrop = this.rocks[indexRock];
        rockToDrop.reset(this.highestOccupiedSpace + 4);

        while (true) {
            // Try and move horizontally. Check for collisions if move was succesful
            const rockHitAWall = rockToDrop.moveHorizontally(this.getNextHorizontalMove());
            if (!rockHitAWall) {
                this.checkForCollisions(rockToDrop);
            }

            // Try and move down. If this fails then we stop!
            const rockHitTheFloor = rockToDrop.moveDown();
            if (rockHitTheFloor) {
                break;
            }
            if (this.checkForCollisions(rockToDrop)) {
                break;
            }
        }

        // Add current rock in current pos to the cave system
        this.addRockToCave(rockToDrop)

    }

    dropRocks(numberToDrop) {
        let index = 0;
        while (index < numberToDrop) {
            this.dropOneRock(this.totalRocksDropped % this.rocks.length);
            this.shiftCave();
            index += 1;
            this.totalRocksDropped += 1;
        }
        return this.highestOccupiedSpace + this.currentOrigin + 1;
    }

    renderCaveAsString() {
        const caveString = [];

        // Cycle backwards over every 
        for (let y = this.cave.length - 1; y >= 0; y--) {
            let startString;
            if (y + this.currentOrigin === this.highestOccupiedSpace) {
                startString = ">|";
            } else {
                startString = " |";
            }

            const endString = `| ${y + this.currentOrigin}`;
            caveString.push(startString + this.cave[y].map(x => x === true ? "#" : ".").join("") + endString);
        }
        caveString.push(` +-------+ ${this.currentOrigin - 1} max: ${this.currentOrigin + this.highestOccupiedSpace}`);

        return caveString.join("\n");
    }

    getCaveState(linesToRecord, index) {
        const caveState = [];
        for (let y = this.highestOccupiedSpace; y > this.highestOccupiedSpace - linesToRecord; y--) {
            caveState.push(booleanArrayToNumber(this.cave[y]));
        }
        return {
            rocks: this.totalRocksDropped,
            height: this.currentOrigin + this.highestOccupiedSpace + 1,
            state: caveState.join("-"),
            index: index
        };
    }

    compareToStates(allStates, newState) {
        let indexLastMatch = -1;
        let currentIndex = 0;
        for (const state of allStates) {
            if (newState.state === state.state) {
                indexLastMatch = currentIndex;
            }
            currentIndex += 1;
        }
        return indexLastMatch;
    }

    dropRocksCyclical(targetRocks) {
        const burnInCycles = 2;
        const stateLength = 20;
        const minimumCycleLength = this.rocks.length * this.moveOrder.length;

        // Do some burn-ins with the cave flow, accounting for how the very start is flat
        this.dropRocks(minimumCycleLength * burnInCycles);
        
        // Drop rocks at a rate of minimumCycleLength, looking for cycles
        const allStates = [this.getCaveState(stateLength, 0)];
        let currentState;
        let indexMatch = -1;

        // Look for a case where a state matches a previous one
        while (true) {
            this.dropRocks(minimumCycleLength);
            currentState = this.getCaveState(stateLength, allStates.length);
            indexMatch = this.compareToStates(allStates, currentState);
            if (indexMatch !== -1) {
                break
            }
            allStates.push(currentState);

            if (currentState.length > 20) {
                throw `Unable to find a cycle after ${currentState.length} tries!`;
            }
        }

        // Do some math to work out how many more cycles are needed
        // How many rocks were dropped in all burn-in phase
        const matchedState = allStates[indexMatch];
        const burnInRocks = matchedState.rocks;
        const totalBurnInHeight = matchedState.height;

        console.log(matchedState);
        console.log(currentState);

        // How many rocks each cycle drops
        const cycleRocks = currentState.rocks - matchedState.rocks;
        const cycleHeight = currentState.height - matchedState.height;

        // How many cycles it takes to get less than one cycle away from the target rock amount
        const cyclesToApproachTarget = Math.floor((targetRocks - burnInRocks) / cycleRocks)
        const totalCycleHeight = cycleHeight * cyclesToApproachTarget;

        // Make up for the remaining amount and calculate the height gain in this case
        const remainingRocks = targetRocks - burnInRocks - cyclesToApproachTarget * cycleRocks;
        this.dropRocks(remainingRocks);
        const totalRemainderHeight = this.currentOrigin + this.highestOccupiedSpace + 1 - currentState.height;

        return totalBurnInHeight + totalCycleHeight + totalRemainderHeight;
    }

}