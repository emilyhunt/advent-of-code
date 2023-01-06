function create2DArray(rows, columns, value) {
    return Array.from(Array(rows), _ => Array(columns).fill(value));
}


class BlizzardPoint {
    constructor(up, right, down, left) {
        this.up = up;
        this.right = right;
        this.down = down;
        this.left = left;
    }

    hasBlizzard() {
        return this.up || this.right || this.down || this.left;
    }

    static fromInputData(value) {
        const blizzard = BlizzardPoint.newEmptyPoint();

        if (value === "^") {
            blizzard.up = true;
        } else if (value === ">") {
            blizzard.right = true;
        } else if (value === "v") {
            blizzard.down = true;
        } else if (value === "<") {
            blizzard.left = true;
        } else if (value !== ".") {
            throw `Input blizzard direction '${value}' not recognised!`;
        }

        return blizzard;
    }

    static newEmptyPoint() {
        return new BlizzardPoint(false, false, false, false);
    }

    copy() {
        return new BlizzardPoint(this.up, this.right, this.down, this.left);
    }
}


export class BlizzardSolver {
    constructor(preprocessedData) {
        // Basic initialisation
        this.height = preprocessedData.length;
        this.width = preprocessedData[0].length;
        this.cycleLength = this.width * this.height;
        this.state = [];
        this.currentState = 0;

        // Add the data values at every point
        for (let y = 0; y < this.height; y++) {
            this.state.push([]);
            for (let x = 0; x < this.width; x++) {
                this.state[y].push(BlizzardPoint.fromInputData(preprocessedData[y][x]));
            }
        }

        // Other class things
        // Initialise the array of boolean states
        this.solvedStates = [];
        this.convertStateToBoolean();
    }

    convertStateToBoolean() {
        const booleanState = this.state.map(row => row.map(point => point.hasBlizzard()));
        this.solvedStates.push(booleanState);
    }

    calculateNextState() {
        // Create a blank new state with the same shape as the existing one where every point is
        // an empty Blizzard (i.e. all directions are false)
        const nextState = this.state.map(row => row.map(s => BlizzardPoint.newEmptyPoint()));

        // Cycle over all points that could hold a blizzard
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.moveBlizzardAtPoint(y, x, nextState);
            }
        }

        // Wipe the old state. It's gone now! Now it's time for the new state!
        this.state = nextState;
    }

    moveBlizzardAtPoint(y, x, nextState) {
        const blizzard = this.state[y][x];

        if (blizzard.up) {
            let newY = y - 1;
            if (newY < 0) {
                newY = this.height - 1;
            }
            nextState[newY][x].up = true;
        }

        if (blizzard.down) {
            let newY = y + 1;
            if (newY >= this.height) {
                newY = 0;
            }
            nextState[newY][x].down = true;
        }

        if (blizzard.right) {
            let newX = x + 1;
            if (newX >= this.width) {
                newX = 0;
            }
            nextState[y][newX].right = true;
        }

        if (blizzard.left) {
            let newX = x - 1;
            if (newX < 0) {
                newX = this.width - 1;
            }
            nextState[y][newX].left = true;
        }
    }

    getNextState() {
        this.currentState++;

        // Return this state easily if we already calculated it before
        if (this.currentState >= this.cycleLength) {
            return this.solvedStates[this.currentState % this.cycleLength];
        }

        // Otherwise, calculate a new one!
        this.calculateNextState();
        this.convertStateToBoolean();

        return this.solvedStates[this.currentState];
    }

    getAllStates(debug) {
        if (debug) {
            console.log("DEBUGGING MODE")
            console.log("Total number of cycles:", this.cycleLength);
            console.log("Initial state:");
            console.log(this.currentStateToString());
        }

        // Cycle over all states in the cycle
        let currentState = 1
        while (currentState <= this.cycleLength) {
            this.calculateNextState();
            this.convertStateToBoolean();

            if (debug) {
                console.log(`State ${currentState}:`);
                console.log(this.currentStateToString());
            }

            currentState++;
        }

        // Check that the start is the same as the end (if not, then this isn't cyclical)
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if (this.solvedStates[0][y][x] !== this.solvedStates[this.cycleLength][y][x]) {
                    throw `Initial state is not equal to theoretical next cycle state at ${x},${y}!`;
                }
            }
        }

        // If it is, then we can return the list of all states (removing the duplicate at the end)
        return this.solvedStates.slice(0, -1);
    }

    currentStateToString() {
        const grid = create2DArray(this.height, this.width, ".");

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.height; x++) {
                const blizzard = this.state[y][x];
                const numberOfBlizzards = blizzard.up + blizzard.right + blizzard.down + blizzard.left;

                if (numberOfBlizzards > 1) {
                    grid[y][x] = numberOfBlizzards;
                } else if (numberOfBlizzards === 1) {
                    grid[y][x] = blizzard.up ? "^" : blizzard.right ? ">" : blizzard.down ? "v" : "<";
                }
            }
        }

        return grid.map(row => row.join("")).join("\n");
    }
}