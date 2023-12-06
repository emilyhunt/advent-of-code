/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	const split = data.split('\n');
	let [times, distances] = [split[0], split[1]];
	times = times
		.slice(5)
		.split(' ')
		.filter((s) => s !== '');
	distances = distances
		.slice(9)
		.split(' ')
		.filter((s) => s !== '');
	return [times, distances];
}

function timesAndDistancesToRaces(preprocessedData) {
	const [times, distances] = preprocessedData;
	return times.map((t, i) => ({ time: Number(t), distanceRecord: Number(distances[i]) }));
}

function timesAndDistancesToBigRace(preprocessedData) {
	const [times, distances] = preprocessedData;
	return { time: Number(times.join('')), distanceRecord: Number(distances.join('')) };
}

/**
 * Uses the quadratic equation to get roots of a race.
 */
function raceWinEquationRoots(race) {
	// Check if we have complex roots (this should never happen)
	let squareRootPart = race.time ** 2 - 4 * race.distanceRecord;
	if (squareRootPart <= 0) {
		throw (
			`Race with time=${race.time}, distance=${race.distanceRecord} has complex` +
			'roots and cannot be solved.'
		);
	}

	// If not, return roots =)
	squareRootPart = squareRootPart ** 0.5;
	return [(race.time - squareRootPart) / 2, (race.time + squareRootPart) / 2];
}

function roundUpOrPlusOne(number) {
	return Number.isInteger(number) ? number + 1 : Math.ceil(number);
}

function roundDownOrMinusOne(number) {
	return Number.isInteger(number) ? number - 1 : Math.floor(number);
}

function calculateRaceWinPossibilities(race) {
	const [lowerRoot, upperRoot] = raceWinEquationRoots(race);
	return roundDownOrMinusOne(upperRoot) - roundUpOrPlusOne(lowerRoot) + 1;
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	const races = timesAndDistancesToRaces(preprocessedData);
	return races
		.map((race) => calculateRaceWinPossibilities(race))
		.reduce((partialProduct, a) => partialProduct * a, 1);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	const bigRace = timesAndDistancesToBigRace(preprocessedData);
	return calculateRaceWinPossibilities(bigRace);
}
