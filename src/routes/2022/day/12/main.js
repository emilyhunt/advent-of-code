/* Primary functions for solving the puzzle live here. */
import { Graph } from "./node";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    data = data.trim().split("\n");
    const columns = data[0].length;
    const rows = data.length;
    return {data: data, columns: columns, rows: rows};
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    const graph = new Graph(preprocessedData);
    const { path } = graph.getShortestPath(
        graph.idStart, 
        graph.idEnd, 
        (callerHeight, testerHeight) => callerHeight + 1 < testerHeight
    );
    return path.length - 1;
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    const graph = new Graph(preprocessedData);
    const { path } = graph.getShortestPath(
        graph.idEnd, 
        "lowest", 
        (callerHeight, testerHeight) => callerHeight - 1 > testerHeight
    );
    return path.length - 1;
};