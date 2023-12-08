/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs.
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData(data) {
	const split = data.trim().split('\n\n');
	const mapping = { L: 0, R: 1 };
	const allDirections = split[0].split('').map((c) => mapping[c]);
	let allNodes = split[1]
		.replaceAll('(', '')
		.replaceAll(')', '')
		.split('\n')
		.map((row) => row.split(' = '));
	const allNodesObject = {};
	for (const row of allNodes) {
		allNodesObject[row[0]] = row[1].split(', ');
	}
	return { directions: allDirections, nodes: allNodesObject };
}

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1(preprocessedData) {
	const totalDirections = preprocessedData.directions.length;
	let steps = 0;
	let node = 'AAA';
	do {
		node = preprocessedData.nodes[node][preprocessedData.directions[steps % totalDirections]];
		steps++;
	} while (node !== 'ZZZ');
	return steps;
}

function nodeVisitsAfterPoint(visits, startPoint) {
	const allVisitsInCycle = [];
	for (const node in visits) {
		allVisitsInCycle.push(...visits[node].filter((visit) => visit[1] >= startPoint));
	}
	return allVisitsInCycle;
}

function findCycle(node, preprocessedData) {
	let steps = 0;
	let visits = {};
	while (true) {
		const directionIndex = steps % preprocessedData.directions.length;
		node = preprocessedData.nodes[node][preprocessedData.directions[directionIndex]];
		steps++;

		// See if we're on a cycle!
		if (node.endsWith('Z')) {
			if (!(node in visits)) {
				// First ever visit (pog)
				visits[node] = [];
			}
			// Look for when we might have visited in the past
			visits[node].push([directionIndex, steps]);
			const matchingVisits = visits[node].filter((visit) => visit[0] === directionIndex);

			if (matchingVisits.length > 1) {
				if (matchingVisits.length !== 2) {
					throw 'Not a valid cycle.';
				}
				const cycleStart = matchingVisits[0][1];
				return nodeVisitsAfterPoint(visits, cycleStart);
			}
		}
	}
}

/**
 * Stolen from https://stackoverflow.com/questions/39899072/how-can-i-find-the-prime-factors-of-an-integer-in-javascript
 */
function calculatePrimeFactors(n) {
	const factors = [];
	let divisor = 2;

	while (n >= 2) {
		if (n % divisor == 0) {
			factors.push(divisor);
			n = n / divisor;
		} else {
			divisor++;
		}
	}
	return factors;
}

function leastCommonDenominator(primeFactors) {
    const factors = [];
    const numbersToConsider = new Set();

    for (const factor of primeFactors) {
        factor.forEach((f) => numbersToConsider.add(f))
    }

    const numbers = [...numbersToConsider];
    
    while (numbers.length > 0) {
        const number = numbers[0]
        const includes = primeFactors.map(factors => factors.includes(number))
        const numberIncluded = sum(includes);

        // If this number doesn't appear anymore
        if (numberIncluded === 0) {
            numbers.shift()
            continue
        }

        // Otherwise...
        factors.push(number)

        // Remove one instance of the number from all prime factor arrays
        for (const factor of primeFactors) {
            const index = factor.indexOf(number)
            if (index > -1) {
                factor.splice(index, 1);
            }
        }
    }
    return factors.reduce((partial, a) => partial * a, 1);
}

function getIntervals(cycles) {
	const intervals = [];
	for (let i_cycle = 0; i_cycle < cycles.length; i_cycle++) {
        const cycleIntervals = []
		for (let i = 0; i < cycles[i_cycle].length - 1; i++) {
			cycleIntervals.push(cycles[i_cycle][i + 1][1] - cycles[i_cycle][i][1]);
		}
        intervals.push(cycleIntervals)
	}
    return intervals;
}

function getIntervals1D(cycles) {
	const intervals = getIntervals(cycles);
    return intervals.map(interval => interval[0]);
}

function sum(array, start = 0) {
	return array.reduce((partialSum, a) => partialSum + a, start);
}

function findMainCyclePrimeFactor(cycles) {
	const cycleIntervals = getIntervals1D(cycles);
    const primeFactors = cycleIntervals.map((interval) => calculatePrimeFactors(interval));
    return leastCommonDenominator(primeFactors);
}

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2(preprocessedData) {
	let nodes = Object.keys(preprocessedData.nodes).filter((key) => key.endsWith('A'));
	const cycles = [];
	for (const node of nodes) {
		cycles.push(findCycle(node, preprocessedData));
	}
	return findMainCyclePrimeFactor(cycles);
}
