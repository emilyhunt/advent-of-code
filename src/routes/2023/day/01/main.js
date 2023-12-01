/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	return data.trim().split('\n');
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	let numbersOnly = preprocessedData.map((s) => s.split("").filter((c) => !isNaN(c)).join(""))
	let numbers = numbersOnly.map((s) => Number(s.slice(0, 1) + s.slice(-1)))
    return numbers.reduce((partialSum, a) => partialSum + a, 0);
}

export function searchForSubstring(string, substring, reversed) {
    if (reversed === true) {
        return string.lastIndexOf(substring);
    }
    return string.indexOf(substring);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
    const mapping = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
    }
    let sum = 0
    for (const line of preprocessedData) {
        let lowIndex = 1000;
        let highIndex = -1;
        let lowNumber = 0;
        let highNumber = 0;

        for (const number of Object.values(mapping)) {
            const low = searchForSubstring(line, number);
            if (low < lowIndex && low !== -1) {
                lowIndex = low;
                lowNumber = number;
            }
            const high = searchForSubstring(line, number, true);
            if (high > highIndex && high !== -1) {
                highIndex = high;
                highNumber = number;
            }
        }

        for (const number in mapping) {
            const low = searchForSubstring(line, number);
            if (low < lowIndex && low !== -1) {
                lowIndex = low;
                lowNumber = mapping[number];
            }
            const high = searchForSubstring(line, number, true);
            if (high > highIndex && high !== -1) {
                highIndex = high;
                highNumber = mapping[number];
            }
        }
        const num = Number(lowNumber + highNumber);
        console.log(line, lowNumber, highNumber, num);
        sum += num;
    }
	return sum;
}
