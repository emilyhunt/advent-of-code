/* Primary functions for solving the puzzle live here. */

import { BlizzardSolver } from "./blizzard_solver";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    return data
        .trim()  // Remove leading/trailing whitespace
        .split("\n")
        .slice(1, -1)  // Remove first and last lines (not useful)
        .map(x => x.replaceAll("#", ""));  // Remove walls (I know where they are, not useful)
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {

    const blizzardSolver = new BlizzardSolver(preprocessedData);
    const allStates = blizzardSolver.getAllStates();

    

    return 0;
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    return 0;
};