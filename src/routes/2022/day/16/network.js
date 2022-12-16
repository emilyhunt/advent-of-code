/* Defines a network of tunnels and valves. */

import { Valve } from "./valve";


/**
 * Generate all possible combinations of values from m arrays
 * uses https://stackoverflow.com/questions/15298912/javascript-generating-combinations-from-n-arrays-with-m-elements
 * 
 * i have literally no fucking clue what this is doing
 * 
 * @param  {...array} args 
 * @returns 
 */
function cartesianCombination(...args) {
    let combinations = [], max = args.length-1;

    function helper(arr, i) {
        for (let j=0, l=args[i].length; j<l; j++) {
            let a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i==max) {
                combinations.push(a);
            } else {
                helper(a, i+1);
            }
        }
    }
    helper([], 0);
    return combinations;
}


export class ValveNetwork {
    constructor(preprocessedData) {
        // Initialise all valves
        this.nodes = {};
        this.initialiseNodes(preprocessedData);

        this.startingNode = "AA";

        this.allPaths = [];
        this.allPathScores = [];
        this.bestPath;
        this.bestPathScore = 0;
        this.meanScore = 0;
        this.currentMaxScore = 0;

        this.pruningMetadata = {cycles: 0, zeros: 0, scoreLow: 0};

        // Calculate which nodes are worth visiting - i.e., those that have a positive flow rate.
        this.nodesWorthVisiting = [];
        for (const nodeName in this.nodes) {
            if (this.nodes[nodeName].hasNonzeroFlow) {
                this.nodesWorthVisiting.push(nodeName);
            }
        }

    }

    initialiseNodes(preprocessedData) {
        // Make all the valves
        for (const line of preprocessedData) {
            const newValve = new Valve(line);
            this.nodes[newValve.name] = newValve
        }
    }

    calculateAllPaths(maxLength, workers, pruningOnCycle) {
        if (maxLength === undefined) {
            maxLength = 30;
        }
        if (workers === undefined) {
            workers = 1;
        }
        if (pruningOnCycle === undefined) {
            pruningOnCycle = 6;
        }

        // At first, we use an object containing arrays to store all possible paths
        let allPossiblePaths = [{path: [], openNodes: [], score: 0, goodPath: true, hasEnded: false}];

        for (let i = 0; i < workers; i++) {
            const startArray = [this.startingNode];
            allPossiblePaths[0].path.push(startArray);
        }
        
        // Loop over all minutes, processing paths
        for (let minute = 1; minute <= maxLength; minute++) {
            // Cycle over every path, adding new ones where appropriate.
            this.checkAllPaths(allPossiblePaths, minute, pruningOnCycle, workers);
            
            // Remove bad paths
            allPossiblePaths = allPossiblePaths.filter(p => p.goodPath);

            // Score the current paths
            this.scorePaths(allPossiblePaths, minute);

            console.log(minute, Object.keys(allPossiblePaths).length, this.meanScore, this.pruningMetadata);

            // console.log("ended:", allPossiblePaths.filter(p => p.hasEnded));
        }

        // Add all of these paths to the all paths list!
        this.allPaths = allPossiblePaths;

        // Quick error check
        if (!this.allPaths.every(path => path.path[0].length === maxLength + 1)) {
            throw "Some paths have incorrect length";
        }

    }

    checkAllPaths(allPossiblePaths, minute, pruningOnCycle, workers) {
        const nPaths = allPossiblePaths.length;
        for (let i = 0; i < nPaths; i++) {
            const path = allPossiblePaths[i];

            // Work out if path should even be continued. 
            // If we've already visited all possible locations, then we
            // can put our feet up and wait until the end
            this.decideIfPathHasEnded(path, workers);

            // Work out if we should prune the path
            this.decideToPrunePath(allPossiblePaths, minute, pruningOnCycle, path, workers);

            // Extend the path if desired
            if (!path.hasEnded && path.goodPath) {
                this.addNeighbors(path, allPossiblePaths, workers);
            }
        }
    }

    scorePaths(allPossiblePaths) {
        const allScores = [];

        for (const path of allPossiblePaths) {
            if (path.openNodes.length > 0) {
                // Sum flow rates of all currently open nodes
                path.score += path.openNodes
                    .map(p => this.nodes[p].flowRate)
                    .reduce((partialSum, a) => partialSum + a, 0);
            }
            allScores.push(path.score);
        }

        this.meanScore = allScores.reduce((partialSum, a) => partialSum + a, 0) / allScores.length;
        this.currentMaxScore = Math.max(...allScores);
    }

    decideIfPathHasEnded(path, workers) {
        // This path doesn't need updating anymore if all possible nodes are already open.
        if (path.hasEnded || path.openNodes.length === this.nodesWorthVisiting.length) {
            const iStop = path.path[0].length - 1
            for (let i = 0; i < workers; i++) {
                path.path[i].push(path.path[i][iStop]);
            }
            path.hasEnded = true;
        }
    }

    decideToPrunePath(allPossiblePaths, minute, pruningOnCycle, path, workers) {
        // Value used to decide how much of difference between max score and mean score to add to mean score when
        // deciding which values to prune.
        const penalisationBoost = 1 / 3;

        // Prune obviously cyclical paths
        if (!path.hasEnded && minute > 3) {
            const iEnd = path.path[0].length - 1;

            for (let i = 0; i < workers; i++) {
                if (path.path[i][iEnd] === path.path[i][iEnd - 2] 
                        && path.path[i][iEnd - 1] === path.path[i][iEnd - 3]) {
                    path.goodPath = false;
                    this.pruningMetadata.cycles += 1;
                    break;
                }
            }
        }

        // Prune paths with current score below some threshold
        if (!path.hasEnded && minute > pruningOnCycle && path.goodPath) {
            if (path.score === 0) {
                path.goodPath = false;
                this.pruningMetadata.zeros += 1;
            }

            // Penalise
            const penaltyScore = this.meanScore + penalisationBoost * (this.currentMaxScore - this.meanScore);
            if (path.score < penaltyScore && allPossiblePaths.length > 5000 * workers) {
                path.goodPath = false;
                this.pruningMetadata.scoreLow += 1;
            }
        }
    }

    addNeighbors(path, allPossiblePaths, workers) {
        // If the current node has a nonzero flow rate, then maybe we'd like to spend a minute opening it?
        // If so, then ensure a path including a stop here is added
        const iEnd = path.path[0].length - 1;

        const allDestinations = [];

        for (let i = 0; i < workers; i++) {
            allDestinations.push([]);
            const currentNodeHasNonzeroFlow = this.nodes[path.path[i][iEnd]].hasNonzeroFlow;
            const currentNodeIsStop = path.path[i][iEnd] === path.path[i][iEnd - 1];
            let currentNodeIsOpen = path.openNodes.includes(path.path[i][iEnd]);

            // If the node can be opened, then mark it so!
            if (currentNodeHasNonzeroFlow && currentNodeIsStop && !currentNodeIsOpen) {
                path.openNodes.push(path.path[i][iEnd]);
                currentNodeIsOpen = true;
            }

            // If the current node _could_ be opened if we waited one more turn, add self as a destination
            if (currentNodeHasNonzeroFlow && !currentNodeIsOpen) {
                allDestinations[i].push(path.path[i][iEnd]);
            }

            // Add neighbors, for if we move
            allDestinations[i].push(...this.nodes[path.path[i][iEnd]].neighbors);
        }

        // Now, cycle over all possible combinations of destinations, adding them as paths
        const allDestinationCombinations = cartesianCombination(...allDestinations);

        for (const combo of allDestinationCombinations) {
            // Create copy
            const newPath = JSON.parse(JSON.stringify(path.path));

            for (let i = 0; i < workers; i++) {
                newPath[i].push(combo[i]);
            }

            allPossiblePaths.push({
                path: newPath, 
                score: path.score, 
                openNodes: [...path.openNodes],
                goodPath: true,
                hasEnded: path.hasEnded
            });
        }
        
        // The current path we were modifying is now one too short. Mark it for deletion.
        path.goodPath = false;
    }

    getBestScore() {
        for (const path of this.allPaths) {
            if (path.score > this.bestPathScore) {
                this.bestPathScore = path.score;
                this.bestPath = path;
            }
        }

        console.log(this.bestPath);
        return this.bestPathScore;
    }
}
