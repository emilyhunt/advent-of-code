/* Primary functions for solving the puzzle live here. */
import { Hand } from './hand';

/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	return data.trim().split('\n');
}

function getHands(preprocessedData, joker) {
	return preprocessedData.map((line) => new Hand(line, joker));
}

function getWinnings(preprocessedData, joker) {
	const hands = getHands(preprocessedData, joker);
	hands.sort((a, b) => a.difference(b));
	hands.forEach((hand, index) => hand.setRank(index + 1));
	return hands.reduce((sum, hand) => sum + hand.score(), 0);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	return getWinnings(preprocessedData);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	return getWinnings(preprocessedData, true);
}
