/* Functions for testing how many faces of a set of cubes are reachable from the outside */
import { cubeToArray, getAllStringsFromCubeArray, getAllStringsFromCubeString } from "./cubeSet";

export function getUnblockedFaces(cubeSet) {
    // Object containing every unblocked "face" (actually a cube next to a face) and how many other unblocked faces
    // border it.
    const unblockedFaces = {};

    for (const cube of cubeSet) {
        const allCubesToCheck = getAllStringsFromCubeString(cube);
    
        for (const face of allCubesToCheck) {
            testFace(cubeSet, face, unblockedFaces);
        }
    }

    return unblockedFaces;
}

function testFace(cubeSet, face, unblockedFaces) {
    if (cubeSet.has(face)) {
        return;
    }
    
    if (unblockedFaces.hasOwnProperty(face)) {
        unblockedFaces[face] += 1;
    } else {
        unblockedFaces[face] = 1;
    }
}


function getScoreForReachableFaces(reachableFaces, unblockedFaces) {
    let reachableFacesCount = 0;
    reachableFaces.forEach(face => reachableFacesCount = unblockedFaces[face] + reachableFacesCount);
    return reachableFacesCount;
}


function testIfCubeHasEscapaed(cubeArray, metadata) {
    if (cubeArray[0] < metadata.xMin 
        || cubeArray[0] > metadata.xMax
        || cubeArray[1] < metadata.yMin
        || cubeArray[1] > metadata.yMax
        || cubeArray[2] < metadata.zMin
        || cubeArray[2] > metadata.zMax) {
            return true;
        }
    return false;
}


function testIfFaceIsReachable(face, cubeSet, metadata) {
    // Instant return if we've already calculated it as 
    if (metadata.allReachable.has(face)) {
        return true;
    } else if (metadata.allBlocked.has(face)) {
        return false;
    }

    // Otherwise, it's actual loop time...
    // Keep a set of all faces to trial
    const facesToTrial = [face];
    const trialedFaces = new Set();

    // Cycle over every trial face
    while (facesToTrial.length > 0) {
        const trialFace = facesToTrial.pop();
        trialedFaces.add(trialFace);
        const trialFaceArray = cubeToArray(trialFace);

        // Happy ending - this cube can escape
        if (testIfCubeHasEscapaed(trialFaceArray, metadata) || metadata.allReachable.has(trialFace)) {
            // Add the current trial face, all trialed faces (since they're connected) and all faces remaining to trial
            // connected to this one to the set of all faces that are externally reachable
            metadata.allReachable.add(...trialedFaces, ...facesToTrial);
            return true;
        }

        // Otherwise, continue
        // We find all faces around this face and add them to the array of trialed faces if they're valid
        // Also restrict to faces that aren't a cube and aren't already trialed
        const facesToAdd = getAllStringsFromCubeArray(...trialFaceArray)
                               .filter(f => !cubeSet.has(f) && !trialedFaces.has(f));

        // Check to see if any of these are known blocked faces
        if (facesToAdd.length > 0 && facesToAdd.some(f => metadata.allBlocked.has(f))) {
            break;
        }

        // Otherwise, add to the set of next faces to trial
        facesToTrial.push(...facesToAdd);
        
    }

    // Otherwise, if we ran out of cubes/found a blocked face, then I guess it's hometime...
    metadata.allBlocked.add(...trialedFaces)
    return false;
}


/**
 * Counts the number of faces that are externally reachable by doing a breadth-first search for routes that reach
 * the egde of the grid.
 * @param {set} cubeSet 
 * @param {set} unblockedFaces 
 * @param {object} minMaxValues 
 * @returns 
 */
export function countReachableFaces(cubeSet, unblockedFaces, minMaxValues) {
    const reachableFaces = new Set();

    // Collection of metadata about the problem that we can keep track of to help us solve it faster
    const metadata = minMaxValues;
    metadata.allReachable = new Set();
    metadata.allBlocked = new Set();

    // Cycle over every unblocked face, trying to see if it can reach the air outside. While doing this, we also
    // record the results of the checking to other sets, hopefully allowing future checks to be processed easily.
    for (const face in unblockedFaces) {
        if (testIfFaceIsReachable(face, cubeSet, metadata)) {
            reachableFaces.add(face);
        }
    }

    // Score each reachable face (since some are actually bordered by multiple cubes!) and return
    return getScoreForReachableFaces(reachableFaces, unblockedFaces);
}

