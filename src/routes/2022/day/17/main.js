/* Primary functions for solving the puzzle live here. */

import { DEFAULT_ROCKS, PyroclasticFlow } from "./PyroclasticFlow";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    return data.trim();
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    const flow = new PyroclasticFlow(preprocessedData);
    const maxHeight = flow.dropRocks(2022);
    return maxHeight;
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    const flow = new PyroclasticFlow(preprocessedData);
    const maxHeight = flow.dropRocksCyclical(1000000000000);
    return maxHeight;
};