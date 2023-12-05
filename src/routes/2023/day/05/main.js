/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    const splitUp = data.trim().split("\n\n");
    const seeds = splitUp[0].split(" ").slice(1).map(n => Number(n));
    const maps = splitUp.slice(1).map((m) => m.split("\n").slice(1).map((n) => n.split(" ").map((o) => Number(o))).map(((n) => ({start: n[1], end: n[1] + n[2], destination: n[0]}))));
    return {seeds: seeds, maps: maps}
};


function applyMap(value, map) {
    for (const range of map) {
        if (value >= range.start && value < range.end) {
            return value - range.start + range.destination;
        }
    }
    return value;
}


function applyAllMaps(seed, maps) {
    for (const map of maps) {
        seed = applyMap(seed, map)
    }
    return seed
}


/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    let minimumLocation = 100000000000000
    for (let seed of preprocessedData.seeds) {
        const location = applyAllMaps(seed, preprocessedData.maps);
        if (location < minimumLocation) {
            minimumLocation = location;
        }
    }
    return minimumLocation;
};


function getRange(value, map) {
    for (let i = 0; i < map.length; i++) {
        const range = map[i]
        if (value >= range.start && value < range.end) {
            return i;
        }
    }
    return -1;
}


function applyRange(value, range) {
    return value - range.start + range.destination;
}


function applyRangeToRange(lower, upper, map, rangeID) {
    if (rangeID === -1) {
        return [lower, upper]
    }
    return [applyRange(lower, map[rangeID]), applyRange(upper, map[rangeID])];
}


function applyMapToSeedRanges(seedRanges, map) {
    const mappedSeedRanges = []
    const minimumRangeStart = Math.min(...map.map((range) => range.start))
    let i = 0;
    while (seedRanges.length > 0) {
        const seedRange = seedRanges.shift()
        const lowerRange = getRange(seedRange[0], map)
        const upperRange = getRange(seedRange[1], map)

        // console.log(lowerRange, upperRange)

        if (lowerRange === upperRange) {
            mappedSeedRanges.push(applyRangeToRange(seedRange[0], seedRange[1], map, lowerRange))
        } else {
            if (lowerRange === -1) {
                mappedSeedRanges.push(applyRangeToRange(seedRange[0], minimumRangeStart - 1, map, lowerRange))
                seedRanges.push([minimumRangeStart, seedRange[1]])
            } else {
                mappedSeedRanges.push(applyRangeToRange(seedRange[0], map[lowerRange].end - 1, map, lowerRange))
                seedRanges.push([map[lowerRange].end, seedRange[1]])
            }
            // console.log(seedRange, seedRanges.slice(-1))
        }
        if (i > 1000) {
            throw "broken"
        }
        i++
    }
    return mappedSeedRanges
}


/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    let seedRanges = []
    for (let i = 0; i < preprocessedData.seeds.length; i += 2) {
        seedRanges.push([preprocessedData.seeds[0], preprocessedData.seeds[0] + preprocessedData.seeds[1] - 1])
    }

    for (const map of preprocessedData.maps) {
        seedRanges = applyMapToSeedRanges(seedRanges, map)
    }
    return Math.min(...seedRanges.map((range) => range[0]));
};