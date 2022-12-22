/* Primary functions for solving the puzzle live here. */

import { getGroveCoordinates, decryptArray } from "./encrypt";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    return data.trim().split("\n").map(x => Number(x));
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    const decryptedArray = decryptArray(preprocessedData);
    const coords = getGroveCoordinates(decryptedArray);
    return coords.reduce((partialSum, a) => partialSum + a, 0);
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    const decryptedArray = decryptArray(preprocessedData, 811589153, 10);
    const coords = getGroveCoordinates(decryptedArray);
    console.log(coords);
    return coords.reduce((partialSum, a) => partialSum + a, 0);
};