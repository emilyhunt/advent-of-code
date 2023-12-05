/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	const splitUp = data.trim().split('\n\n');
	const seeds = splitUp[0]
		.split(' ')
		.slice(1)
		.map((n) => Number(n));
	const maps = splitUp.slice(1).map((m) =>
		m
			.split('\n')
			.slice(1)
			.map((n) => n.split(' ').map((o) => Number(o)))
			.map((n) => ({ start: n[1], end: n[1] + n[2], destination: n[0] }))
			.sort((a, b) => a.start - b.start)
	);
	return { seeds: seeds, maps: maps };
}

function valueInRange(value, range) {
	return value >= range.start && value < range.end;
}

function applyMap(value, map) {
	for (const range of map) {
		if (valueInRange(value, range)) {
			return applyRangeValue(value, range);
		}
	}
	return value;
}

function applyAllMaps(seed, maps) {
	return maps.reduce((previousValue, map) => applyMap(previousValue, map), seed);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	return Math.min(
		...preprocessedData.seeds.map((seed) => applyAllMaps(seed, preprocessedData.maps))
	);
}

function getMatchingRange(value, map) {
	for (let i = 0; i < map.length; i++) {
		if (valueInRange(value, map[i])) {
			return i;
		}
	}
	return -1;
}

function matchSeedRangeToRange(seedRange, map) {
	return [getMatchingRange(seedRange[0], map), getMatchingRange(seedRange[1], map)];
}

function applyRangeValue(value, range) {
	return value - range.start + range.destination;
}

function applyRangeTwoValues(lower, upper, map, rangeID) {
	if (rangeID === -1) {
		return [lower, upper];
	}
	return [applyRangeValue(lower, map[rangeID]), applyRangeValue(upper, map[rangeID])];
}

function getSplit(indexLow, indexHigh, seedRange, map) {
	// When no split needed - just return top of range
	if (indexLow === indexHigh) {
		return [false, seedRange[1]];
	}

	// When a split is needed and the low index isn't within a range. Look in the
	// ASSUMED SORTED array of maps for the next map above this range.
	if (indexLow === -1) {
		return [true, map.filter((m) => m.start > seedRange[0])[0].start - 1];
	}
	// Otherwise, simply return the end of the current map.
	return [true, map[indexLow].end - 1];
}

function applyMapToSeedRanges(seedRanges, map) {
	const mappedSeedRanges = [];
	while (seedRanges.length > 0) {
		const seedRange = seedRanges.shift();
		const [indexLow, indexHigh] = matchSeedRangeToRange(seedRange, map);
		const [split, newUpperValue] = getSplit(indexLow, indexHigh, seedRange, map);
		if (split) {
			seedRanges.push([newUpperValue + 1, seedRange[1]]);
		}
		mappedSeedRanges.push(applyRangeTwoValues(seedRange[0], newUpperValue, map, indexLow));
	}
	return mappedSeedRanges;
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	let seedRanges = [];
	for (let i = 0; i < preprocessedData.seeds.length - 1; i += 2) {
		seedRanges.push([
			preprocessedData.seeds[i],
			preprocessedData.seeds[i] + preprocessedData.seeds[i + 1] - 1
		]);
	}
    seedRanges = preprocessedData.maps.reduce((currentRange, map) => applyMapToSeedRanges(currentRange, map), seedRanges);
	return Math.min(...seedRanges.map((range) => range[0]));
}
