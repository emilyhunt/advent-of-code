/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	const lines = data.trim().split('\n');
	let cards = [];

	for (const card of lines) {
		let [ID, cardInfo] = card.split(':');
		ID = Number(ID.split(' ').slice(-1)[0]);
		let [myNumbers, winningNumbers] = cardInfo.split('|');
		myNumbers = myNumbers
			.trim()
			.split(' ')
			.filter((n) => n !== '')
			.map((n) => Number(n));
		winningNumbers = new Set(
			winningNumbers
				.trim()
				.split(' ')
				.filter((n) => n !== '')
				.map((n) => Number(n))
		);
		cards.push({
			id: ID,
			numbers: myNumbers,
			winningNumbers: winningNumbers
		});
	}
	return cards;
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	const numberOfMatches = preprocessedData.map((card) =>
		card.numbers
			.map((number) => card.winningNumbers.has(number))
			.reduce((partialSum, a) => partialSum + a, 0)
	);
	const pointValue = numberOfMatches.map((matches) => (matches === 0 ? 0 : 2 ** (matches - 1)));
	return pointValue.reduce((partialSum, a) => partialSum + a, 0);
}

function range(size, startAt = 0) {
	return [...Array(size).keys()].map((i) => i + startAt);
}

function getNewCards(index, numberOfMatches) {
	const cardsToAdd = numberOfMatches[index];
	return range(cardsToAdd, index + 1).filter((x) => x < numberOfMatches.length);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	const numberOfMatches = preprocessedData.map((card) =>
		card.numbers
			.map((number) => card.winningNumbers.has(number))
			.reduce((partialSum, a) => partialSum + a, 0)
	);
	let totalCards = numberOfMatches.length;
	let cardsToProcess = [];

	// Initialise by making all the cards our initial set gets us
	for (let i = 0; i < numberOfMatches.length; i++) {
		cardsToProcess.push(...getNewCards(i, numberOfMatches));
	}

	// Keep processing cards until we don't have any more!
	while (cardsToProcess.length > 0) {
		cardsToProcess.push(...getNewCards(cardsToProcess.shift(), numberOfMatches));
		totalCards += 1;
	}

	return totalCards;
}
