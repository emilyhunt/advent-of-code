/* Functions for creating a set of cube locations */

export function createCubeSet(preprocessedData) {
    const cubeSet = new Set();
    
    for (const line of preprocessedData) {
        cubeSet.add(line);
    }

    return cubeSet;
}


export function cubeToArray(cubeString) {
    return cubeString.split(",").map(value => Number(value));
}


export function getAllStringsFromCubeString(cubeString) {
    return getAllStringsFromCubeArray(...cubeToArray(cubeString));
}


export function getAllStringsFromCubeArray(x, y, z) {
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
 * Counts the number of free faces in CubeSet
 * @param {set} cubeSet 
 * @returns 
 */
export function countFreeFaces(cubeSet) {
    // Cycle over every cube, checking to see if cubes around it exist
    let freeFaces = 0;

    for (const cube of cubeSet) {
        const allCubesToCheck = getAllStringsFromCubeString(cube);

        for (const face of allCubesToCheck) {
            if (!cubeSet.has(face)) {
                freeFaces += 1;
            }
        }
    }

    return freeFaces;
}


/**
 * Calculates minimum and maximum values of all cubes in cubeSet and returns as an object.
 * @param {set} cubeSet 
 * @returns 
 */
export function getMinMaxValues(cubeSet) {
    let numericalValues = [];

    for (const cube of cubeSet) {
        numericalValues.push(cubeToArray(cube));
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