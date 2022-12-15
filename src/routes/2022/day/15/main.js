/* Primary functions for solving the puzzle live here. */

import { createSensorsAndBeacons } from "./sensor";
import { RangeCollection } from "./range";
import { tuningFrequency, reducePointsArray } from "./utilPart2";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    return data.trim().split("\n").map(x => x.split(":"));
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    // Create all sensors and beacons
    const { sensors, beacons } = createSensorsAndBeacons(preprocessedData);

    // Guess the requisite y value in the most sketchy fucking way possible as I have no way to get it from a data file
    // TODO: this could be an input field.
    let yValue;
    if (preprocessedData.length === 14) {
        yValue = 10;
    } else {
        yValue = 2000000;
    }

    // Loop over sensors, seeing if they can detect this row
    const ranges = new RangeCollection(yValue);

    for (const sensor of sensors) {
        const result = sensor.getXRangeDetectableOnRow(yValue);

        if (result.detectable) {
            ranges.addRange(result.xMin, result.xMax);
        }
    }

    // Return sum of range unique values
    const sum = ranges.sumRanges(beacons);
    return sum;
};


/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {

    // Create all sensors and beacons
    const { sensors, beacons } = createSensorsAndBeacons(preprocessedData);

    // Guess the requisite y value in the most sketchy fucking way possible as I have no way to get it from a data file
    // TODO: this could be an input field.
    let maxValue;
    if (preprocessedData.length === 14) {
        maxValue = 20;
    } else {
        maxValue = 4000000;
    }

    // Loop over all sensors, getting relevant points into a unique set of points to check. We do this by finding
    // a cloud of points around the intersection between the fields of every sensor to every other sensor. This is 
    // intended to be as safe as possible, and returns far more points than necessary. These points can then later be 
    // checked to see if they're within any others.
    const pointsToCheck = new Set();

    for (let i = 0; i < sensors.length; i++) {
        for (let j = 0; j < i; j++) {
            const result = sensors[i].getIntersectionPoints(sensors[j]);
            result.forEach(point => pointsToCheck.add(point));
        }
    }

    // Reduce the number of points based on those within good ranges and not coincident with sensor ranges or other
    // beacons
    const pointsToCheckArray = reducePointsArray(pointsToCheck, maxValue, sensors, beacons);

    // There should only be one point left!
    if (pointsToCheckArray.length !== 1) {
        throw `Expected to find only one valid point, instead found ${pointsToCheckArray.length} points`;
    }
    
    // If so, then calculate the tuning frequency for this point and return.
    return tuningFrequency(pointsToCheckArray[0]);
};
