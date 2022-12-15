/* Class for specifying a 2D coordinate. */


export class Coords2DManhattan {
    /**
     * Creates a new coordinate object with properties x and y. Defined to use manhattan geometry.
     * @param {any} x 
     * @param {any} y 
     */
    constructor(x, y) {
        this.x = Number(x);
        this.y = Number(y);
    }

    /**
     * Creates a new Coords2D object from a comma-separated list of two numbers.
     * @param {string} str 
     * @returns {Coords2D}
     */
    static fromString(str) {
        return new Coords2DManhattan(...str.trim().split(","));
    }

    /**
     * Creates a copy of the current Coords2D object.
     * @returns {Coords2D} a new coords2D object.
     */
    copy() {
        return new Coords2DManhattan(this.x, this.y);
    }

    manhattanDistance(other) {
        return Math.abs(this.x - other.x) + Math.abs(this.y - other.y);
    }
    
}
