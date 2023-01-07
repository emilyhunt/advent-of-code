/* Primary functions for solving the puzzle live here. */

import { BlizzardSolver } from "./blizzard_solver";
import { findShortestPath } from "./path";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    return data
        .trim()  // Remove leading/trailing whitespace
        .replaceAll("\r", "")
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
    // Get all possible states of the blizzard, for later use
    const blizzardSolver = new BlizzardSolver(preprocessedData);
    // const allStates = blizzardSolver.getAllStates(true);  // Useful for debugging, can output all states to console

    // Find length of shortest path between start and end
    const coordinates = {
        startX: 0, 
        startY: -1, 
        endX: blizzardSolver.width - 1, 
        endY: blizzardSolver.height, 
    };

    return findShortestPath(coordinates, blizzardSolver, {debug: false});
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    // Get all possible states of the blizzard, for later use
    const blizzardSolver = new BlizzardSolver(preprocessedData);

    // Find length of shortest path between start and end, then end and start, then start and end... you get the picture
    const coordinates = {
        startX: 0, 
        startY: -1, 
        endX: blizzardSolver.width - 1, 
        endY: blizzardSolver.height, 
    };

    const debug = false;
    const pathLength1 = findShortestPath(coordinates, blizzardSolver, {debug: debug});
    const pathLength2 = findShortestPath(coordinates, blizzardSolver, {debug: debug, reversed: true});
    const pathLength3 = findShortestPath(coordinates, blizzardSolver, {debug: debug});

    return pathLength1 + pathLength2 + pathLength3;
};