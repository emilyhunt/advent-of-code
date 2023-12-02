/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	const split = data.trim().split('\n');
	let gamesObject = {};
	for (const row of split) {
		const splitRow = row.split(':');
		gamesObject[Number(splitRow[0].slice(5))] = splitRow[1].split(';').map((x) => x.trim());
	}
	return gamesObject;
}

/**
 * Checks if a draw within a game is compatible with the defined limits for all games.
 * @param {*} draw - string containing current draw as comma-separated list,
 *                   e.g. "5 red, 3 green".
 * @param {*} limits - limits for the overall game in an object,
 *                     e.g. {red: 5, green: 3, blue: 1}
 * @returns Returns true if compatible; false if not.
 */
function checkDraw(draw, limits) {
	const drawSplit = draw.split(',').map((x) => x.trim());
	for (const cubeDraw of drawSplit) {
		const [number, color] = cubeDraw.split(' ');
		if (limits[color] < Number(number)) {
			return false;
		}
	}
	return true;
}

/**
 * Checks if a game is compatible with limits.
 * @param {*} game - full string of a game.
 * @param {*} limits - limits for the overall game in an object,
 *                     e.g. {red: 5, green: 3, blue: 1}
 * @returns true if yes; false if not.
 */
function checkGame(game, limits) {
	for (const draw of game) {
		if (!checkDraw(draw, limits)) {
			return false;
		}
	}
	return true;
}

/**
 * Sums the IDs of all games with cubes never exceeding amounts defined in limits.
 * @param {*} games - all games, in format from preprocessedData.
 * @param {*} limits - limits for the overall game in an object,
 *                     e.g. {red: 5, green: 3, blue: 1}
 * @returns int representing the sum.
 */
function sumIDsOfValidGames(games, limits) {
	let sum = 0;
	for (const gameID in games) {
		if (checkGame(games[gameID], limits)) {
			sum += Number(gameID);
		}
	}
	return sum;
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	const limits = { red: 12, green: 13, blue: 14 };
	return sumIDsOfValidGames(preprocessedData, limits);
}

/**
 * Cycles over all cube counts in a draw within a game and updates the
 * @param {string} draw
 * @param {object} maxCubeCount
 */
function addToCount(draw, maxCubeCount) {
	const drawSplit = draw.split(',').map((x) => x.trim());
	for (const cubeDraw of drawSplit) {
		let [number, color] = cubeDraw.split(' ');
		number = Number(number);
		if (maxCubeCount[color] < number) {
			maxCubeCount[color] = number;
		}
	}
}

/**
 * Calculates power of a game based on its cube counts.
 * @param {object} maxCubeCount 
 * @returns {int}
 */
function calculateGamePower(maxCubeCount) {
	return maxCubeCount['red'] * maxCubeCount['green'] * maxCubeCount['blue'];
}

/**
 * Works out the cube counts of a game and converts this into a power.
 * @param {*} game 
 * @returns 
 */
function powerOfGame(game) {
	let maxCubeCount = { red: 0, green: 0, blue: 0 };
	for (const draw of game) {
		addToCount(draw, maxCubeCount);
	}
	return calculateGamePower(maxCubeCount);
}

function sumPowerOfAllGames(games) {
	let power = 0;
	for (const gameID in games) {
		power += powerOfGame(games[gameID]);
	}
	return power;
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	return sumPowerOfAllGames(preprocessedData);
}
