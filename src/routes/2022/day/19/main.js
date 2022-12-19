/* Primary functions for solving the puzzle live here. */

import { testBlueprint } from "./blueprint";

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    return data.trim().split("\n");
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    const qualityLevels = [];
    for (const blueprintString of preprocessedData) {
        const bestBlueprints = testBlueprint(blueprintString, 24, 10000);
        qualityLevels.push(Math.max(...bestBlueprints.map(x => x.calculateQuality())));
    }
    return qualityLevels.reduce((partialSum, a) => partialSum + a, 0);
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    let geodeMultiplier = 1;
    let stringToReturn = "geode amounts: "
    for (const blueprintString of preprocessedData.slice(0, 3)) {
        if (geodeMultiplier !== 1) {
            stringToReturn += ", ";
        }

        const bestBlueprints = testBlueprint(blueprintString, 32, 20000);
        const maxGeodes = Math.max(...bestBlueprints.map(x => x.resources.geode));

        console.log(maxGeodes);

        geodeMultiplier *= maxGeodes;
        stringToReturn += `${maxGeodes}`
    }

    stringToReturn += `. multiplied together: ${geodeMultiplier}`

    return stringToReturn;
};