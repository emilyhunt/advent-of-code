/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	let trimmedData = data.trim().split('\n');
	let dataObject = {
		data: trimmedData,
		width: trimmedData[0].length,
		height: trimmedData.length,
		maxX: trimmedData[0].length - 1,
		maxY: trimmedData.length - 1
	};
	return dataObject;
}

function isDigit(character) {
	return !isNaN(character);
}

function isSymbol(character) {
	return !isDigit(character) && character !== '.';
}

function stringContainsSymbol(string) {
	return string.split('').some((character) => isSymbol(character));
}

function rowContainsSymbol(data, y, xStart, xEnd) {
	return stringContainsSymbol(data.data[y].slice(xStart, xEnd + 1));
}

class PartNumber {
	constructor(partNumber, x, y) {
		this.number = Number(partNumber);
		this.x = x;
		this.y = y;
		this.length = partNumber.length;
	}

	appendDigit(additionalDigit) {
		this.number = Number(String(this.number) + additionalDigit);
		this.length += 1;
	}

	pointIsAdjacent(point) {
		// Check y coord
		if (this.y < point.y - 1 || this.y > point.y + 1) {
			return false;
		}
		// Check x coord
		if (this.x - 1 > point.x || this.x + this.length < point.x) {
			return false;
		}
		return true;
	}

	/**
	 * Checks if anywhere in the grid adjacent to this part number contains a symbol.
	 */
	hasAdjacentSymbol(data) {
		// Ensure that we can find things that are diagonal by extending search range 1
		// in either direction, if possible
		const xStart = this.x > 0 ? this.x - 1 : 0;
		const xEnd = this.x + this.length < data.maxX ? this.x + this.length : this.x + this.length - 1;

		// Upper row
		if (this.y > 0 && rowContainsSymbol(data, this.y - 1, xStart, xEnd)) {
			return true;
		}
		// Lower row
		if (this.y < data.maxY && rowContainsSymbol(data, this.y + 1, xStart, xEnd)) {
			return true;
		}
		// Values either side
		if (isSymbol(data.data[this.y][xStart]) || isSymbol(data.data[this.y][xEnd])) {
			return true;
		}
		return false;
	}
}

class Gear {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

/**
 * Checks to see if currentCharacter is a digit. If yes, it either makes a new PartNumber
 * or updates the current one with this new digit. If no - and we do have a current
 * PartNumber - it saves it to the partNumbers array & sets currentPartNumber to undefined.
 * @param {*} currentCharacter
 * @param {*} currentPartNumber
 * @param {*} x
 * @param {*} y
 * @param {*} partNumbers
 * @returns
 */
function updateCurrentPartNumber(currentCharacter, currentPartNumber, x, y, maxX, partNumbers) {
	const atEndOfRow = x === maxX;

    // If the current character is a digit, then we should create/update a part number
	if (isDigit(currentCharacter)) {
		// Make one if we don't have one already
		if (!currentPartNumber) {
			return new PartNumber(currentCharacter, x, y);
		}
		// Otherwise, update the existing one
		currentPartNumber.appendDigit(currentCharacter);

        if (!atEndOfRow) {
            return currentPartNumber;
        }
	}

	// Saves current part number in the event that isDigit was false above, or we're at
    // the end of the row.
	if (currentPartNumber) {
		partNumbers.push(currentPartNumber);
	}
	return undefined;
}

function updateGears(gears, currentCharacter, x, y) {
	if (currentCharacter === '*') {
		gears.push(new Gear(x, y));
	}
}

function getPartNumbers(data, returnGears) {
	let partNumbers = [];
	let gears = [];
	let currentPartNumber;
	for (let y = 0; y < data.height; y++) {
		for (let x = 0; x < data.width; x++) {
			const currentCharacter = data.data[y][x];
			currentPartNumber = updateCurrentPartNumber(
				currentCharacter,
				currentPartNumber,
				x,
				y,
				data.maxX,
				partNumbers
			);

			// Optionally, also search for gears at the same time for Part 2
			if (returnGears) {
				updateGears(gears, currentCharacter, x, y);
			}
		}
	}
	if (returnGears) {
		return [partNumbers, gears];
	}
	return partNumbers;
}

function sumValidNumbers(data, partNumbers) {
	// Filters to only parts that have a symbol adjacent to them and sums all part
	// numbers
	return partNumbers
		.filter((part) => part.hasAdjacentSymbol(data))
		.reduce((partialSum, part) => partialSum + part.number, 0);
}

function sumGearRatios(gears, partNumbers) {
	let totalGearRatio = 0;
	for (const gear of gears) {
		const validParts = partNumbers.filter((part) => part.pointIsAdjacent(gear));
		if (validParts.length == 2) {
			totalGearRatio += validParts[0].number * validParts[1].number;
		}
	}
	return totalGearRatio;
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	const partNumbers = getPartNumbers(preprocessedData, false);
	return sumValidNumbers(preprocessedData, partNumbers);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	const [partNumbers, gears] = getPartNumbers(preprocessedData, true);
	return sumGearRatios(gears, partNumbers);
}
