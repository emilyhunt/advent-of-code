/* Class for specifying a 2D coordinate. */

import { Coords2DManhattan } from "./coords2d";


/**
 * 
 * @param {string} sensorString 
 * @returns 
 */
export function getCoordsFromString(sensorString) {
    // Check input
    if (sensorString.includes(":")) {
        throw "Sensor and beacon strings must be split before passing to this function";
    }
    
    // Get index of everything interesting
    const indexOfX = sensorString.indexOf("x=");
    const indexOfComma = sensorString.indexOf(",");
    const indexOfY = sensorString.indexOf("y=");

    // Check that that worked
    if (indexOfX === -1) {
        throw `Unable to find X value in string: ${sensorString}`;
    }
    if (indexOfComma === -1) {
        throw `Unable to find ',' in string: ${sensorString}`;
    }
    if (indexOfY === -1) {
        throw `Unable to find Y value in string: ${sensorString}`;
    }

    // Make coords and return!
    const xNumber = Number(sensorString.slice(indexOfX + 2, indexOfComma).trim());
    const yNumber = Number(sensorString.slice(indexOfY + 2).trim());

    return new Coords2DManhattan(xNumber, yNumber);
}


/**
 * Convenience function for creating sensors and beacons from puzzle input.
 * @param {*} preprocessedData 
 * @returns 
 */
export function createSensorsAndBeacons(preprocessedData) {
    const sensors = [];
    const beacons = [];
    const uniqueBeacons = new Set();

    for (const row of preprocessedData) {
        const newBeacon = getCoordsFromString(row[1]);
        sensors.push(
            new Sensor(
                row[0], 
                newBeacon)
        );

        // Check that beacon not already detected
        const beaconString = `${newBeacon.x},${newBeacon.y}`;
        if (!uniqueBeacons.has(beaconString)) {
            uniqueBeacons.add(beaconString);
            beacons.push(newBeacon);
        }
    }
    return {sensors: sensors, beacons: beacons};
}

/**
 * Calculates determinants of line intersections.
 * See https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line
 * @param {*} point1 
 * @param {*} point2 
 * @param {*} point3 
 * @param {*} point4 
 */
function calculateDeterminants(point1, point2, point3, point4) {
    return {
        PxUpper: 
            (point1.x * point2.y - point1.y * point2.x) * (point3.x - point4.x) 
            - (point1.x - point2.x) * (point3.x * point4.y - point3.y * point4.x),
        PyUpper: 
            (point1.x * point2.y - point1.y * point2.x) * (point3.y - point4.y) 
            - (point1.y - point2.y) * (point3.x * point4.y - point3.y * point4.x),
        denominator: (point1.x - point2.x) * (point3.y - point4.y) - (point1.y - point2.y) * (point3.x - point4.x),
    }
}


/**
 * Convenience function for creating a cloud of points around a given one.
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function createCoordinatesCloud(x, y) {
    return [
        new Coords2DManhattan(x - 1, y),
        new Coords2DManhattan(x, y + 1),
        new Coords2DManhattan(x + 1, y),
        new Coords2DManhattan(x, y - 1),
    ];
}


/**
 * Calculates intersection between line1 defined from (point1 => point2) and line2 defined from (point3 => point4.)
 * Uses https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line
 * @param {*} point1 
 * @param {*} point2 
 * @param {*} point3 
 * @param {*} point4 
 * @returns 
 */
function calculateLineIntersection(point1, point2, point3, point4) {
    const { PxUpper, PyUpper, denominator } = calculateDeterminants(point1, point2, point3, point4);

    // If lines not parallel, then we have valid intersections and only need to check those
    if (denominator !== 0) {
        const x = PxUpper / denominator;
        const y = PyUpper / denominator;

        const xFloor = Math.floor(x);
        const xCeil = Math.ceil(x);
        const yFloor = Math.floor(y);
        const yCeil = Math.ceil(y);

        if (xFloor === xCeil && yFloor === yCeil) {
            return [`${x},${y}`];
        } else {
            return [
                `${xFloor},${yFloor}`,
                `${xFloor},${yCeil}`,
                `${xCeil},${yFloor}`,
                `${xCeil},${yCeil}`
            ]
        }
    }
    return undefined;
}


export class Sensor {
    /**
     * Creates a class representation of a sensor from the puzzle.
     */
    constructor(sensorString, beaconCoords) {
        this.coords = getCoordsFromString(sensorString);
        this.nearestBeacon = beaconCoords;
        this.manhattanRange = this.coords.manhattanDistance(beaconCoords);

        this.vertices = [
            new Coords2DManhattan(this.coords.x - this.manhattanRange, this.coords.y),  // Left
            new Coords2DManhattan(this.coords.x, this.coords.y + this.manhattanRange),  // Up
            new Coords2DManhattan(this.coords.x + this.manhattanRange, this.coords.y),  // Right
            new Coords2DManhattan(this.coords.x, this.coords.y - this.manhattanRange)   // Down
        ];
    }

    /**
     * Checks to see if this sensor would ever be able to detect a beacon on a row that's yDistance away.
     * @param {Number} yDistance 
     * @returns 
     */
    rowIsDetectable(yDistance) {
        if (yDistance <= this.manhattanRange) {
            return true;
        }
        return false;
    }

    /**
     * Returns a range of X values for which this sensor is able to detect them.
     * @param {*} rowYValue 
     */
    getXRangeDetectableOnRow(rowYValue) {
        const yDistance = Math.abs(this.coords.y - rowYValue);

        if (this.rowIsDetectable(yDistance)) {
            const rowRelativeRadius = this.manhattanRange - yDistance;
            return {
                detectable: true, 
                xMin: this.coords.x - rowRelativeRadius, 
                xMax: this.coords.x + rowRelativeRadius
            };
        }
        return {detectable: false};
    }

    /**
     * Returns boolean true or false if a point is within the range of this sensor.
     * @param {*} point 
     * @returns 
     */
    pointWithinSensor(point) {
        const manhattanDistanceFromThis = point.manhattanDistance(this.coords);

        if (manhattanDistanceFromThis > this.manhattanRange) {
            return false;
        }
        return true;
    }

    /**
     * Exhaustively calculates all intersection points between this sensor and another. Returns a cloud of points
     * around each intersection and the vertices of each sensor's range. Intended to return way more points than 
     * @param {*} otherSensor 
     * @returns 
     */
    getIntersectionPoints(otherSensor) {

        const intersectionPoints = new Set();

        // Cycle over all vertices in this sensor
        for (let i = 0; i < 4; i++) {
            // Check against opposing lines in the other sensor
            for (let j = 0; j < 4; j++) {
                const result = calculateLineIntersection(
                    this.vertices[i % 4], 
                    this.vertices[(i + 1) % 4], 
                    otherSensor.vertices[j % 4], 
                    otherSensor.vertices[(j + 1) % 4]
                );
                if (result !== undefined) {
                    result.forEach(point => intersectionPoints.add(point));
                }
            }
            
            // Also make sure we're adding all vertices in the sensor, in the case of coincident lines these need
            // checking too.
            intersectionPoints.add(`${this.vertices[i].x},${this.vertices[i].y}`);
            intersectionPoints.add(`${otherSensor.vertices[i].x},${otherSensor.vertices[i].y}`);
        }

        // Convert all values into a points cloud
        const cloudPoints = new Set();

        for (const point of intersectionPoints) {
            // Create coordinates cloud and filter out the many points that are within one of the current sensors
            const result = createCoordinatesCloud(...point.split(",").map(x => Number(x)))
                .filter(p => !this.pointWithinSensor(p) && !otherSensor.pointWithinSensor(p))
                .map(p => `${p.x},${p.y}`);
            
            // Add to the set of unique points!
            result.forEach(p => cloudPoints.add(p));
        }

        return cloudPoints;
    }
}
