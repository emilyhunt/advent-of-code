export class Item {
    constructor (worry) {
        this.worry = worry;
    }

    /**
     * Tests if an item is divisible by value and returns true or false
     * @param {number} value 
     * @returns {boolean}
     */
    divisibleBy (value) {
        if (this.worry % value === 0) {
            return true;
        }
        return false;
    }

    /**
     * Happens every time the monkey doesn't destroy an item
     */
    reduceWorry () {
        this.worry = Math.floor(this.worry / 3);
    }

    reduceByDivisor (divisor) {
        this.worry %= divisor;
    }

    /**
     * Applies an operation and updates the worry level.
     */
    applyOperation(operation) {
        this.worry = operation.apply(this.worry);
    }

    getWorry() {
        return this.worry;
    }
}