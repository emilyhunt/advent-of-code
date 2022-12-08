<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Treetop Tree House",
        day: "08",  // Day, as string
        year: "2022",  // Year, as string
        description: "The Tree Elves want a treetop tree house that they can then be treated to. "
                     + "Therefore, this test tries to think of the best tree for a treetop tree house!",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Number of trees visible from an edge",  // Text to display part 1 result with
        result2: "Best scenic score of any tree",  // Text to display part 2 result with
        keywords: ["while", "for", "arrays (2D)", "iteration"],  // General keywords about the code used
        visible: true,  // Whether or not to display in menus
    };
</script>

<script>
    /****************************** Add all custom code below *****************************/
    
    /**
     * Preprocessor applied to all possible inputs. 
     * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
     * 
     * @param {string} data - raw input from the file
     */
    function preprocessData (data) {
        // Split into a 2D array of first rows, then characters - which are then cast as numbers
        data = data
            .split("\n")
            .map(x => x.split('')
                .map(y => Number(y))
                );
        return data;
    };

    /**
     * Tests a 1D array of trees to see how many values are higher than the others relative to the edge values.
    */
    function testTreeVisibilityFromEdge1D (arrayOfTrees) {
        let treeIsVisible = new Array(arrayOfTrees.length).fill(false);

        // Trees on edges are always visible
        treeIsVisible[0] = true;
        treeIsVisible[treeIsVisible.length - 1] = true;

        // Go left to right
        let maxValue = arrayOfTrees[0];
        for (let i = 1; i < arrayOfTrees.length - 1; i++) {
            if (arrayOfTrees[i] > maxValue) {
                treeIsVisible[i] = true;
                maxValue = arrayOfTrees[i];
            }
        }

        // Go right to left
        maxValue = arrayOfTrees[arrayOfTrees.length - 1];
        for (let i = arrayOfTrees.length - 2; i > 0; i--) {
            if (arrayOfTrees[i] > maxValue) {
                treeIsVisible[i] = true;
                maxValue = arrayOfTrees[i];
            }
        }

        return treeIsVisible;

    }

    /**
     * Function that cycles over all possible configurations and tries to see if trees are visible from the edge of
     * the forest.
     * @param data
     */
    function getTreeVisibilityFromEdgesMap (data) {
        // Initialisation steps
        const rowCount = data.length;
        const columnCount = data[0].length;

        let visibilityMap = new Array(rowCount).fill(0).map(() => new Array(columnCount).fill(false));

        // Cycle over all rows, working out which trees are visible (easy step)
        for (let i = 0; i < rowCount; i++) {
            visibilityMap[i] = testTreeVisibilityFromEdge1D(data[i]);
        }

        // Cycle over all columns, again working out which trees are visible (slightly harder)
        for (let j = 0; j < columnCount; j++) {
            const columnMap = testTreeVisibilityFromEdge1D(data.map(row => row[j]));

            for (let i = 0; i < rowCount; i++) {
                visibilityMap[i][j] = visibilityMap[i][j] || columnMap[i];
            }
        }

        return visibilityMap;
    }

    /**
     * Function that takes a visibility map (as a 2D array of bools) and sums all true values.
     * @param visibilityMap
     */
    function countTotalVisibleTrees (visibilityMap) {
        let sum = 0;
        for (let i = 0; i < visibilityMap.length; i++) {
            for (let j = 0; j < visibilityMap[0].length; j++) {
                if (visibilityMap[i][j]) {
                    sum++;
                }
            }
        }
        return sum;
    }

    /**
     * Calculate scenic score as defined in the puzzle, given all four directions.
     * @param up
     * @param left
     * @param down
     * @param right
     */
    function calculateScenicScore(up, left, down, right) {
        return up * left * down * right;
    }

    /**
     * Handles logic for moving a test tree at (i, j) in some direction
     * @param i
     * @param j
     * @param direction
     */
    function moveTestTree(i, j, direction) {
        if (direction === "i--") { i--; } 
        else if (direction === "i++") { i++; } 
        else if (direction === "j++") { j++; } 
        else if (direction === "j--") { j--; } 
        else { throw "Direction not recognised"; }
        return [i, j];
    }

    /**
     * Checks if a tree exists at i, j, returning false if not or true if it does
     * @param data
     * @param i
     * @param j
     */
    function checkValidSpot(data, i, j) {
        if (i < 0 || j < 0 || i >= data.length || j >= data[0].length) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Calculates the number of trees visible at (i, j) in the direction specified by direction
     * @param data
     * @param i
     * @param j
     * @param direction
     */
    function getTreesVisibleOneDirection (data, i, j, direction) {
        let treesVisible = 0;
        const originTreeHeight = data[i][j];

        while (true) {
            // Move our test tree in some direction
            [i, j] = moveTestTree(i, j, direction);

            // Break if the spot isn't valid
            if (!checkValidSpot(data, i, j)) {
                break;
            }

            // But if it is there, then it means there's a tree there, that we can see!
            treesVisible++;

            // See if any trees behind it will be visible
            if (data[i][j] >= originTreeHeight) {
                break;
            }
        }
        return treesVisible;
    }

    /**
     * Gets the scenic score at a given point (i, j) in the data, looping over all directions to look in
     * @param data
     * @param i
     * @param j
     */
    function getScenicScore (data, i, j) {
        // Shortcut: if i or j are on an edge, the scenic score will always be 0, so we can return
        if (i === 0 || j === 0 || i === data.length - 1 || j === data[0].length - 1) {
            return 0;
        }

        // Otherwise, let's cycle over all directions 
        const directions = ["i--", "j--", "i++", "j++"];
        const visibleCount = [];

        for (const dir of directions) {
            visibleCount.push(getTreesVisibleOneDirection(data, i, j, dir));
        }

        // And calc a scenic score with all four vals and return
        return calculateScenicScore(...visibleCount);
    }

    /**
     * Calculates the maximum scenic score for any tree within data, looping over them all and recording the best value
     * @param data
     */
    function getMaxScenicScore (data) {
        let bestScenicScore = 0;

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                const scenicScore = getScenicScore(data, i, j);
                if (scenicScore > bestScenicScore) {
                    bestScenicScore = scenicScore;
                }
            }
        }

        return bestScenicScore;
    }

    /**
     * Takes preprocessed data as an argument and returns answer for part 1.
     * 
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part1 (data) {
        return countTotalVisibleTrees(getTreeVisibilityFromEdgesMap(data));
    };

    /**
     * Takes preprocessed data as an argument and returns answer for part 2.
     * 
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part2 (data) {
        return getMaxScenicScore(data);
    };

    /****************************** - - - - - - - - - - - - - *****************************/

    // Required imports - don't modify!
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte";

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

    // console.log($currentExampleData);
    // console.log($currentDefaultData);
</script>

<!-- Component that provides UI to interact with functions defined above. -->
<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
