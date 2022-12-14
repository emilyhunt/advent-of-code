/* Primary functions for solving the puzzle live here. */
import { Coords2D } from "./coords2d";
import { getInputShape, Cave } from "./cave";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    data = data
        .trim()
        .split("\n")
        .map(x => x.trim().split(" -> ")
            .map(y => Coords2D.fromString(y))
        );
    const inputShape = getInputShape(data);
    return {paths: data, shape: inputShape};
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    const cave = new Cave(preprocessedData.paths, preprocessedData.shape);
    return cave.addSandUntilFull();
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    const cave = new Cave(preprocessedData.paths, preprocessedData.shape, true);
    return cave.addSandUntilFull();
};