/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    const split = data.split("\n");
    let [times, distances] = [split[0], split[1]];
    times = times.slice(5).split(" ").filter((s) => s !== "");
    distances = distances.slice(9).split(" ").filter((s) => s !== "");
    return times.map((t, i) => ({time: t, distanceRecord: distances[i]}));
};


function distanceMoved(waitTime, totalTime) {
    // d = <speed> * (totalTime - waitTime)
    // <speed> = waitTime
    // hence...
    return waitTime * (totalTime - waitTime)
}

function countRaceWinPossibilities(race) {
    let wins = 0;
    for (let i = 0; i < race.time; i++) {
        if (distanceMoved(i, race.time) > race.distanceRecord) {
            wins += 1
        }
    }
    return wins;
}


/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    return preprocessedData.map((race) => countRaceWinPossibilities(race)).reduce((partialProduct, a) => partialProduct * a, 1);
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    return 0;
};