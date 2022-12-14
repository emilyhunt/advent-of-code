/* Primary functions for solving the puzzle live here. */

import { solveMonkeyJobs } from "./monkeys";
import { solveSimultaneousEquation } from "./simultaneousEqn";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    return data.trim().split("\n").map(x => x.split(" "));
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    return solveMonkeyJobs(preprocessedData);
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    const equation = solveMonkeyJobs(preprocessedData, true);
    console.log("equation", equation);
    return solveSimultaneousEquation(equation);
};