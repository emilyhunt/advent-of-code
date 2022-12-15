/* Class for keeping track of multiple intersecting and non-intersecting ranges. */


class Range {
    /**
     * Defines a 2D range between min and max.
     * @param {Number} min 
     * @param {Number} max 
     */
    constructor(min, max) {
        this.min; 
        this.max; 
        this.size;
        this.update(min, max);
        this.valid = true;
    }

    /**
     * Identifies if this range overlaps with range. Updates each range to avoid having the two ranges overlap at all.
     * @param {Range} range 
     * @returns 
     */
    containsRange(range) {
        // Calling range is entirely within our range
        if (range.min >= this.min && range.max <= this.max) {
            range.valid = false;
            return "destroyTest";
        }
        // Calling range entirely contains our range
        if (range.min <= this.min && range.max >= this.max) {
            this.valid = false;
            return "destroyThis";
        }
        // Calling range partially covers lower end of this range
        if (range.min <= this.min  && range.max < this.max && range.max >= this.min) {
            range.update(range.min, this.min - 1);
            return "coversLower"
        }
        // Calling range partially covers upper end of this range
        if (range.max >= this.max && range.min > this.min && range.min <= this.max) {
            range.update(this.max + 1, range.max);
            return "coversUpper";
        }

        // Otherwise, nothing in common.
        return "noIntersection";
    }

    /**
     * Returns true if value within range; false if not.
     * @param {number} value 
     * @returns 
     */
    containsValue(value) {
        if (value >= this.min && value <= this.max) {
            return true;
        }
        return false;
    }

    /**
     * Updates range to be defined between min and max. Also updates the range's size and whether or not it's valid.
     * @param {number} min 
     * @param {number} max 
     */
    update(min, max) {
        this.min = min;
        this.max = max;
        this.size = max - min + 1;

        if (this.size <= 0) {
            this.valid = false;
        } else {
            this.valid = true;
        }
    }

    /**
     * Returns a copy of the current range.
     * @returns {Range}
     */
    copy() {
        return new Range(this.min, this.max);
    }
}


export class RangeCollection {
    /**
     * Collection of ranges for handling part 1 of the puzzle.
     * @param {*} yValue 
     */
    constructor(yValue) {
        this.yValue = yValue;
        this.ranges = [];
    }
    
    /**
     * Adds a range to the internal store.
     * @param {number} xMin 
     * @param {number} xMax 
     */
    addRange(xMin, xMax) {
        this.ranges.push( new Range(xMin, xMax) );
    }

    /**
     * Returns a count of x values (optionally excluding beaconsToSubtract) that the current ranges cover.
     * @param {array} beaconsToSubtract 
     * @returns 
     */
    sumRanges(beaconsToSubtract) {
        // Ensure we're acting on copies, because this WILL get messy :D 
        // We also sort into largest range first; this should help us numerically later, as the big ones are the most
        // likely to be split.
        let rangesToSum = this.ranges.map(range => range.copy()).sort((a, b) => b.size - a.size);

        // Cycle over all beacons, summing their contribution to the overall ranges
        for (let indexTest = 0; indexTest < rangesToSum.length; indexTest++) {
            const rangeTest = rangesToSum[indexTest];

            // Cycle over previous ranges, updating the current range to not intersect with the comparison range.
            this.checkTestRange(rangeTest, rangesToSum, indexTest);
        }

        let sum = rangesToSum.filter(range => range.valid).reduce((partialSum, a) => partialSum + a.size, 0);

        // Optionally also subtract beacons
        if (beaconsToSubtract !== undefined) {
            sum = this.subtractBeaconsFromSum(beaconsToSubtract, rangesToSum, sum);
        }

        return sum;
    }

    /**
     * Checks if a range is contained within all others tested so far.
     * @param {*} rangeTest 
     * @param {*} rangesToSum 
     * @param {*} indexTest 
     */
    checkTestRange(rangeTest, rangesToSum, indexTest) {
        for (const rangeComparison of rangesToSum.slice(0, indexTest).filter(range => range.valid)) {
            if (!rangeTest.valid) {
                break;
            }
            rangeComparison.containsRange(rangeTest);
        }
    }

    /**
     * Subtracts beacons from the range count.
     * @param {*} beaconsToSubtract 
     * @param {*} rangesToSum 
     * @param {*} sum 
     * @returns 
     */
    subtractBeaconsFromSum(beaconsToSubtract, rangesToSum, sum) {
        // Only consider beacons with correct y value
        const validBeacons = beaconsToSubtract.filter(beacon => beacon.y === this.yValue);

        // Cycle over all valid beacons
        for (const beacon of validBeacons) {

            // Cycle over all ranges
            for (const range of rangesToSum.filter(range => range.valid)) {
                // If the beacon is in the range, we decrement the sum and stop comparing (no need to double count)
                if (range.containsValue(beacon.x)) {
                    sum -= 1;
                    break;
                }
            }
        }
        return sum;
    }
}