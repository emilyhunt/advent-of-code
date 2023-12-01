/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	return data.trim();
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	let numbersOnly = preprocessedData.split('\n').map((s) =>
		s
			.split('')
			.filter((c) => !isNaN(c))
			.join('')
	);
	let numbers = numbersOnly.map((s) => Number(s.slice(0, 1) + s.slice(-1)));
	return numbers.reduce((partialSum, a) => partialSum + a, 0);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	const mapping = {
		'one': 'o1e',
		'two': 't2o',
		'three': 't3e',
		'four': 'f4r',
		'five': 'f5e',
		'six': 's6x',
		'seven': 's7n',
		'eight': 'e8t',
		'nine': 'n9e'
	};
    let replaced = preprocessedData;
    for (const number in mapping) {
        replaced = replaced.replaceAll(number, mapping[number])
    }
	return part1(replaced);
}
