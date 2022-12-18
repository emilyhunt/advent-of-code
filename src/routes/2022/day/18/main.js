/* Primary functions for solving the puzzle live here. */

import { countFreeFaces, createCubeSet, getMinMaxValues } from "./cubeSet";
import { getUnblockedFaces, countReachableFaces } from "./reachableFaces";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    return data.trim().split("\n").sort((a, b) => Number(a.split(",")[2]) - Number(b.split(",")[2]));
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    const cubeSet = createCubeSet(preprocessedData);
    return countFreeFaces(cubeSet);
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    // Make a new Set() of cubes and calculate the minimum/maximum dimensions of the set
    const cubeSet = createCubeSet(preprocessedData);
    const minMaxValues = getMinMaxValues(cubeSet);

    // Find all reachable faces - these are the ones we need to test!
    const unblockedFaces = getUnblockedFaces(cubeSet);

    return countReachableFaces(cubeSet, unblockedFaces, minMaxValues);
};