/* Functions for creating a set of cube locations */

/**
 * Turns input array of lines into a set of cube location strings.
 * @param {array} preprocessedData 
 * @returns {set}
 */
export function createCubeSet(preprocessedData) {
    const cubeSet = new Set();
    
    for (const line of preprocessedData) {
        cubeSet.add(line);
    }

    return cubeSet;
}


/**
 * Convers a cube location string into a numerical array.
 * @param {string} cubeString 
 * @returns {array}
 */
export function cubeStringToArray(cubeString) {
    return cubeString.split(",").map(value => Number(value));
}


/**
 * Returns all 6 adjacent neighbors of a given cube location string as an array of cube location strings.
 * @param {string} cubeString 
 * @returns {array}
 */
export function getAllNeighborsFromString(cubeString) {
    return getAllNeighbors(...cubeStringToArray(cubeString));
}


/**
 * Returns all 6 adjacent neighbors of a given cube location string as an array of cube location strings.
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @returns 
 */
export function getAllNeighbors(x, y, z) {
    return [
        `${x},${y},${z - 1}`,
        `${x},${y},${z + 1}`,
        `${x},${y - 1},${z}`,
        `${x},${y + 1},${z}`,
        `${x - 1},${y},${z}`,
        `${x + 1},${y},${z}`,
    ];
}


/**
 * Counts the number of free faces in cubeSet, i.e. those with no immediate neighbor.
 * @param {set} cubeSet 
 * @returns {number}
 */
export function countFreeFaces(cubeSet) {
    // Cycle over every cube, checking to see if cubes around it exist
    let freeFaces = 0;

    for (const cube of cubeSet) {
        const allCubesToCheck = getAllNeighborsFromString(cube);

        // Every adjacent possible cube that has no cube there means the current cube's face is free!
        for (const face of allCubesToCheck) {
            if (!cubeSet.has(face)) {
                freeFaces += 1;
            }
        }
    }

    return freeFaces;
}


/**
 * Calculates minimum and maximum values of all cubes in cubeSet and returns this as an object.
 * @param {set} cubeSet 
 * @returns {object}
 */
export function getMinMaxValues(cubeSet) {
    let numericalValues = [];

    for (const cube of cubeSet) {
        numericalValues.push(cubeStringToArray(cube));
    }

    const xValues = numericalValues.map(a => a[0]);
    const yValues = numericalValues.map(a => a[1]);
    const zValues = numericalValues.map(a => a[2]);

    const minMaxValues = {
        xMin: Math.min(...xValues),
        xMax: Math.max(...xValues),
        yMin: Math.min(...yValues), 
        yMax: Math.max(...yValues),
        zMin: Math.min(...zValues),
        zMax: Math.max(...zValues)
    }

    return minMaxValues;
}
