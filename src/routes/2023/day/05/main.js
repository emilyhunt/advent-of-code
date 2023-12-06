/* Primary functions for solving the puzzle live here. */
import { Range, passThroughRange } from './range';

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
			.map((n, index) => new Range(index, n[1], n[1] + n[2], n[0]))
			.sort((a, b) => a.start - b.start)
	);
	return { seeds: seeds, maps: maps };
}

function seedValuesToSeedRanges(preprocessedData) {
	// Turn the 1D array of "seed values" into seed ranges, like:
	// [[start, end], [start, end]... etc]
	let seedRanges = [];
	for (let i = 0; i < preprocessedData.seeds.length - 1; i += 2) {
		seedRanges.push([
			preprocessedData.seeds[i],
			preprocessedData.seeds[i] + preprocessedData.seeds[i + 1] - 1
		]);
	}
	return seedRanges;
}

function applyAllMapsToValue(seed, maps) {
	return maps.reduce((previousValue, map) => applyMatchingRange(previousValue, map), seed);
}

function getMatchingRange(value, map) {
	for (const range of map) {
		if (range.contains(value)) {
			return range;
		}
	}
	return passThroughRange;
}

function getMatchingRanges(values, map) {
	return values.map((value) => getMatchingRange(value, map));
}

function applyMatchingRange(value, map) {
	return getMatchingRange(value, map).apply(value);
}

function getSplit(rangeLow, rangeHigh, seedRange, map) {
	// When no split needed - just return top of range
	if (rangeLow.is(rangeHigh)) {
		return [false, seedRange[1]];
	}

	// When a split is needed and the low index isn't within a range. Look in the
	// ASSUMED SORTED array of maps for the next map above this range.
	if (rangeLow.is(passThroughRange)) {
		return [true, map.filter((m) => m.start > seedRange[0])[0].start - 1];
	}

	// Otherwise, simply return the end of the current map.
	return [true, rangeLow.end - 1];
}


function applyMatchingRanges(ranges, map, seedRange, mappedSeedRanges) {
    // See if we need to split
    const [rangeLow, rangeHigh] = ranges;
    const [split, newUpperValue] = getSplit(rangeLow, rangeHigh, seedRange, map);

    // Add the lowest limit upto the split to mappedSeedRanges
    mappedSeedRanges.push(rangeLow.applyRange(seedRange[0], newUpperValue));

    // Update seedRange if a split is needed
    if (split) {
        seedRange = [newUpperValue + 1, seedRange[1]];
    }
    return [split, seedRange];
}


function applyMapToSeedRange(seedRange, map, mappedSeedRanges) {
    let split;
    do {
        const ranges = getMatchingRanges(seedRange, map);
        [split, seedRange] = applyMatchingRanges(ranges, map, seedRange, mappedSeedRanges);
    } while (split);
}


function applyMapToSeedRanges(seedRanges, map) {
	const mappedSeedRanges = [];
	for (let seedRange of seedRanges) {
        applyMapToSeedRange(seedRange, map, mappedSeedRanges)
    }
	return mappedSeedRanges;
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	// Apply all maps to every seed value and get the eventual minimum value
	return Math.min(
		...preprocessedData.seeds.map((seed) => applyAllMapsToValue(seed, preprocessedData.maps))
	);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	let seedRanges = seedValuesToSeedRanges(preprocessedData);

	// Apply every level of the maps to each seed range
	seedRanges = preprocessedData.maps.reduce(
		(currentRange, map) => applyMapToSeedRanges(currentRange, map),
		seedRanges
	);
	return Math.min(...seedRanges.map((range) => range[0]));
}
