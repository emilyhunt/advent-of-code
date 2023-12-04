/* Primary functions for solving the puzzle live here. */

function getID(string) {
	return Number(string.split(' ').slice(-1)[0])
}

function getNumbers(string) {
	return string
		.trim()
		.split(' ')
		.filter((n) => n !== '')
		.map((n) => Number(n));
}


function scratchcardStringToObject(string) {
	const [idPart, scratchcardPart] = string.split(':');
	const [myNumbers, winningNumbers] = scratchcardPart.split('|');
	return {
		id: getID(idPart),
		numbers: getNumbers(myNumbers),
		winningNumbers: new Set(getNumbers(winningNumbers))
	};
}


/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	const lines = data.trim().split('\n');
	return lines.map((card) => scratchcardStringToObject(card));
}

function sum(array, start = 0) {
	return array.reduce((partialSum, a) => partialSum + a, start);
}

function calculateNumberOfMatches(preprocessedData) {
	return preprocessedData.map((card) =>
		sum(card.numbers.map((number) => card.winningNumbers.has(number)))
	);
}

function matchesToPointsPart1(matches) {
	return matches === 0 ? 0 : 2 ** (matches - 1);
}

function pointValuePart1(numberOfMatches) {
	return sum(numberOfMatches.map((matches) => matchesToPointsPart1(matches)));
}

function pointValuePart2(numberOfMatches) {
	// Cycle backwards over the numberOfMatches array, summing the point score of all
	// cards that that card also profits from, plus the value of the card itself (1). 
	// These cards are always below the current card, so going backwards means we can 
	// use the already-calculated card scores to calculate the current one. It's a bit 
	// like a backwards graph search!
	const cardScores = [];
	for (const numMatches of numberOfMatches.toReversed()) {
		cardScores.unshift(sum(cardScores.slice(0, numMatches)) + 1);
	}
	return sum(cardScores);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	const numberOfMatches = calculateNumberOfMatches(preprocessedData);
	return pointValuePart1(numberOfMatches);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	const numberOfMatches = calculateNumberOfMatches(preprocessedData);
	return pointValuePart2(numberOfMatches);
}
