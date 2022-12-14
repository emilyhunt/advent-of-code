/* Class for specifying a 2D grid. */

export class GridSpec {
    /**
     * Creates a grid specifictation defined by params. Offers convenience functions to transform between original
     * specification and a grid defined as an array would be with min value 0,0 instead of (xMin, yMin).
     * @param {number} xMin 
     * @param {numbr} xMax 
     * @param {number} yMin 
     * @param {number} yMax 
     */
    constructor(xMin, xMax, yMin, yMax) {
        this.xMin = xMin;
        this.xMax = xMax;
        this.yMin = yMin;
        this.yMax = yMax;

        this.xMinGrid = 0;
        this.xMaxGrid = this.xMax - this.xMin;

        this.yMinGrid = 0;
        this.yMaxGrid = this.yMax - this.yMin;

        this.xLength = this.xMaxGrid + 1;
        this.yLength = this.yMaxGrid + 1;
    }

    /**
     * Transforms a Coords2D to a grid based on a minimum x value of 0 instead of xMin
     * @param {Coords2D} coord 
     */
    transformCoords2D(coord) {
        const newCoord = coord.copy();
        newCoord.x -= this.xMin;
        newCoord.y -= this.yMin;
        return newCoord;
    }

    /**
     * Reverse of transformCoord
     * @param {Coords2D} coord 
     */
    transformCoords2DReverse(coord) {
        const newCoord = coord.copy();
        newCoord.x += this.xMin;
        newCoord.y += this.yMin;
        return newCoord;
    }
}
