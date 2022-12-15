/* Utilities for part 2. */
import { Coords2DManhattan } from "./coords2d";

/**
 * Calculates tuning frequency of given point.
 * @param {Coords2DManhattan} point 
 * @returns 
 */
export function tuningFrequency(point) {
    return point.x * 4000000 + point.y;
}


/**
 * Reduces the points to check array to only contain points within correct range and not within a sensor's range.
 * @param {*} pointsToCheck 
 * @param {*} maxValue 
 * @param {*} sensors 
 * @param {*} beacons 
 * @returns 
 */
export function reducePointsArray(pointsToCheck, maxValue, sensors, beacons) {
    // Limit to only those within defined range
    let pointsToCheckArray = Array
        .from(pointsToCheck)
        .map(point => Coords2DManhattan.fromString(point))
        .filter(point => point.x > 0 && point.x <= maxValue && point.y > 0 && point.y <= maxValue);

    // Cycle over every sensor, removing points if they're within its range
    for (const sensor of sensors) {
        pointsToCheckArray = pointsToCheckArray.filter(point => !sensor.pointWithinSensor(point));
    }

    // Cycle over every beacon, removing points
    for (const beacon of beacons) {
        pointsToCheckArray = pointsToCheckArray.filter(point => point.x !== beacon.x || point.y !== beacon.y);
    }
    return pointsToCheckArray;
}
