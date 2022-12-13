/* Primary functions for solving the puzzle live here. */
import { checkPackets, comparePackets, parsePacketString } from "./packet";

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
    // Split into an array of arrays of pairs of packets
    preprocessedData = preprocessedData.split("\n\n").map(x => x.split("\n"));

    // Get indices of correct packets (ONE-INDEXED!)
    const packetsInRightOrder = checkPackets(preprocessedData);

    // Sum values and return
    return packetsInRightOrder.reduce((a, b) => a + b, 0);
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    // Split into an array of packets (1D) and add distress packets
    const distress1 = "[[2]]";
    const distress2 = "[[6]]";
    const preprocessedDataAdded = preprocessedData + `\n${distress1}\n${distress2}`;
    let packetsArray = preprocessedDataAdded
        .replace("\n\n", "\n")
        .split("\n")
        .filter(x => x.length > 0)
        .map(x => parsePacketString(x));

    // Sort it
    packetsArray = packetsArray
        .sort(comparePackets)
        .map(x => JSON.stringify(x));

    const index1 = packetsArray.indexOf(distress1) + 1;
    const index2 = packetsArray.indexOf(distress2) + 1;

    console.log(index1, index2);

    return index1 * index2;
};