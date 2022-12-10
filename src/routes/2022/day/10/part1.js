export class Screen {
    constructor(inputs) {
        this.inputs = inputs;  // N.b. this is ZERO indexed
        this.valueX = [1];  // N.b. this is ONE indexed (value 0 is the start val)
        this.cycle = 1;  // Starting cycle
        this.skipNextCopy = false;
    }

    copyCycleValue() {
        // Only copies a value over if this value hasn't already been set (e.g. by handleAdd)
        if (!this.skipNextCopy) {
            this.valueX.push(this.valueX[this.cycle - 1]);
        }
        this.cycle += 1;
        this.skipNextCopy = false;
    }

    /**
     * noop command. Takes one cycle. Does nothing, we simply increment the cycle by one.
     */
    handleNoOutput() {
        this.copyCycleValue();
    }

    /**
     * Add command. Takes two cycles. Adds `amount` to X in the cycle of execution that comes *after* its second.
     * @param amount - amount to add to X
     */
    handleAdd(amount) {
        this.copyCycleValue();
        this.copyCycleValue();
        this.valueX.push(this.valueX[this.cycle - 1] + Number(amount));
        this.skipNextCopy = true;
    }

    /**
     * Processes one line of input.
     * @param {String} line 
     */
    processInput(line) {
        const inputSeparated = line.split(" ");
            
        // All the different cases
        if (inputSeparated[0] === "noop") {
            this.handleNoOutput();
        } else if (inputSeparated[0] === "addx") {
            this.handleAdd(inputSeparated[1]);
        } else {
            throw `input ${input} not recognised!`
        }
    }

    /**
     * Cycle over all inputs specified at construction and process them.
     */
    processInputs() {
        for (const input of this.inputs) {
            this.processInput(input);
        }
    }

    /**
     * Sums all signal strengths, starting at a value and incrementing until the end of the X values array is reached.
     * @param {Number} startCycle index to start summing at
     * @param {Number} cycleInterval how many cycles to skip between values
     * @returns {Number} the summed values
     */
    sumSignalStrengths(startCycle, cycleInterval) {
        let i = startCycle;
        let sum = 0;
        while (i < this.valueX.length) {
            sum += i * this.valueX[i];
            i += cycleInterval;
        }
        return sum;
    }

    /**
     * Checks if the sprite defined internally by X values is visible on `cycle`.
     * @param {Number} cycle 
     * @param {Number} screenWidth 
     * @returns a bool, true if the sprite is visible and false if not
     */
    checkIfSpriteVisible (cycle, screenWidth) {
        // Get the current pixel the CRT is looking at, which is ZERO-INDEXED because this puzzle is fucking annoying
        const currentPixel = cycle - screenWidth * Math.floor(cycle / screenWidth) - 1;

        // If the absolute difference between the current pixel and the sprite's central position is 1 or 0, then the 
        // 3-wide sprite must be visible!
        return Math.abs(currentPixel - this.valueX[cycle]) <= 1;
    }

    /**
     * Renders the image by treating valueX as that of a sprite.
     * @returns a string showing the output of the screen.
     */
    render() {
        const spaceCharacter = "-";
        const displayCharacter = "#";
        const screenWidth = 40;
        const screenOutput = new Array(this.valueX.length - 1).fill(spaceCharacter);

        for (let cycle = 1; cycle < this.valueX.length; cycle++) {
            // Add a display character at position cycle-1 if the sprite is in the right spot 
            if (this.checkIfSpriteVisible(cycle, screenWidth)) {
                screenOutput[cycle - 1] = displayCharacter;
            }

            // Add a line break if we're at the end of the line
            if (cycle % screenWidth === 0) {
                screenOutput[cycle - 1] += "\n";
            }
        }
        return screenOutput.join("");
    }
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * 
 * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
 */
export function part1 (data) {
    const screen = new Screen(data);
    screen.processInputs();
    return screen.sumSignalStrengths(20, 40);
};