/* Functions for testing how many faces of a set of cubes are reachable from the outside */
import { cubeStringToArray, getAllNeighbors, getAllNeighborsFromString } from "./cube";


/**
 * Cycles over all cubes in cubeSet and returns an object, where each key is an empty space that could have a cube and
 * each value is how many cubes have faces that border that cube.
 * @param {set} cubeSet 
 * @returns {object}
 */
export function getExposedFaces(cubeSet) {
    // Object containing every unblocked "face" (actually a cube next to a face) and how many other unblocked faces
    // border it.
    const exposedFaces = {};

    for (const cube of cubeSet) {
        const allCubesToCheck = getAllNeighborsFromString(cube);
    
        for (const face of allCubesToCheck) {
            testIfFaceIsUnblocked(cubeSet, face, exposedFaces);
        }
    }

    return exposedFaces;
}


/**
 * Tests a given face to see if it is adjacent to a free space.
 * @param {set} cubeSet 
 * @param {string} face 
 * @param {object} unblockedFaces 
 * @returns {undefined}
 */
function testIfFaceIsUnblocked(cubeSet, face, unblockedFaces) {
    if (cubeSet.has(face)) {
        return;
    }
    
    if (unblockedFaces.hasOwnProperty(face)) {
        unblockedFaces[face] += 1;
    } else {
        unblockedFaces[face] = 1;
    }
}


/**
 * Calculates how many times a given adjacent air block appears in the original lava shape and uses this to calculate
 * a total score. Each face is represented by the cube it is adjacent to, but one of said cubes could have upto 6 faces
 * against it.
 * @param {set} reachableFaces 
 * @param {object} unblockedFaces 
 * @returns {number}
 */
function getScoreForReachableFaces(reachableFaces, unblockedFaces) {
    let reachableFacesCount = 0;
    reachableFaces.forEach(face => reachableFacesCount = unblockedFaces[face] + reachableFacesCount);
    return reachableFacesCount;
}


/**
 * Tests if a given location on the 3D grid is outside of the range of the total shape of the cube. If yes, then that
 * means it (and all cubes connected to it) are reachable externally.
 * @param {array} cubeArray 
 * @param {object} metadata 
 * @returns {boolean}
 */
function testIfLocationOutsideMinMaxRange(cubeArray, metadata) {
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


/**
 * Tests if a given face (represented by the cube it is adjacent to) is reachable externally. Assigns results from 
 * runtime to sets in metadata (which should speed up future runs.)
 * @param {string} face 
 * @param {set} cubeSet 
 * @param {object} metadata 
 * @returns {bool}
 */
function testIfFaceIsReachable(face, cubeSet, metadata) {
    // Instant return if we've already calculated it as being reachable or not
    if (metadata.allReachable.has(face)) {
        return true;
    } 
    if (metadata.allBlocked.has(face)) {
        return false;
    }

    // Also an instant return if it has 6 faces connected to it (means it cannot be reachable under any circumstance!)
    if (metadata.exposedFaces[face] === 6) {
        metadata.allBlocked.add(face);
        return false;
    }

    // Otherwise, it's actual loop time...
    // Keep an array of faces to trial and a set of all we've done. If the array ever reduces to length zero then it's
    // obvious that we've tried all possible locations within a given void and can stop the loop.
    const facesToTrial = [face];
    const trialedFaces = new Set();

    // Cycle over every trial face
    while (facesToTrial.length > 0) {
        const trialFace = facesToTrial.pop();
        const trialFacePosition = cubeStringToArray(trialFace);
        trialedFaces.add(trialFace);

        // Happy ending - if this position can be reached from the outside
        if (testIfLocationOutsideMinMaxRange(trialFacePosition, metadata) || metadata.allReachable.has(trialFace)) {
            // Add the current trial face, all trialed faces (since they're connected) and all faces remaining to trial
            // connected to this one to the set of all faces that are externally reachable
            metadata.allReachable.add(...trialedFaces, ...facesToTrial);
            return true;
        }

        // Otherwise, continue
        // We find all faces around this face and add them to the array of trialed faces if they're valid
        // Also restrict to faces that aren't a cube and aren't already trialed
        const facesToAdd = getAllNeighbors(...trialFacePosition)
                               .filter(f => !cubeSet.has(f) && !trialedFaces.has(f));

        // Check to see if any of these are known blocked faces. If yes, then that means we're definitely in a void
        // region and can stop!
        if (facesToAdd.length > 0 && facesToAdd.some(f => metadata.allBlocked.has(f))) {
            break;
        }

        // Otherwise, add to the faces we just found to the set of next faces to trial
        facesToTrial.push(...facesToAdd);
        
    }

    // Otherwise, if we ran out of cubes/found a blocked face, then I guess it's hometime...
    metadata.allBlocked.add(...trialedFaces)
    return false;
}


/**
 * Counts the number of faces that are externally reachable by doing a breadth-first search for routes that reach
 * the egde of the grid.
 * 
 * This approach is fun because instead of starting externally, we start at every face and try to find a route out for
 * each one. It's kind of like an inside-out BFS. To optimise the code, we keep all locations known to be connected to
 * reachable and blocked locations inside of sets. The first few loops take a bit longer while later ones are almost
 * entirely just using optimisations from the sets of locations that have already been calculated. Yay!
 * 
 * @param {set} cubeSet 
 * @param {set} exposedFaces 
 * @param {object} minMaxValues 
 * @returns {number}
 */
export function countReachableFaces(cubeSet, exposedFaces, minMaxValues) {
    const reachableFaces = new Set();

    // Collection of metadata about the problem that we can keep track of to help us solve it faster
    const metadata = minMaxValues;
    metadata.allReachable = new Set();  // All known reachable cubes in the 3D grid
    metadata.allBlocked = new Set();  // All known unreachable cubes in the 3D grid
    metadata.exposedFaces = exposedFaces;  // All faces (or rather, their adjacent cubes) that are exposed

    // Cycle over every unblocked face, trying to see if it can reach the air outside. While doing this, we also
    // record the results of the checking to other sets, hopefully allowing future checks to be processed easily.
    for (const face in metadata.exposedFaces) {
        if (testIfFaceIsReachable(face, cubeSet, metadata)) {
            reachableFaces.add(face);
        }
    }

    // Score each reachable face (since some are actually bordered by multiple cubes!) and return
    return getScoreForReachableFaces(reachableFaces, metadata.exposedFaces);
}
