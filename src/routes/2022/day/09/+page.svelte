<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Rope Bridge",
        day: "09",  // Day, as string
        year: "2022",  // Year, as string
        description: "We need to cross a rope bridge by understanding rope physics! A cool puzzle all about moving "
                     + "things by using a few basic rules.",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Number of unique locations tail visited",  // Text to display part 1 result with
        result2: "Number of unique locations tail visited",  // Text to display part 2 result with
        keywords: ["arrays", "objects", "for..of", "while", "coordinates", "movement"],  // General keywords about code
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
        // Split moves up and into direction & distance
        data = data.split("\n").map(x => x.split(" "));
        for (let i = 0; i < data.length; i++) {
            const move = {direction: data[i][0], distance: Number(data[i][1])};
            data[i] = move;
        }
        return data;
    };

    /**
     * Checks if headCoordinates and tailCoordinates are touching. Returns true if yes, false if not.
     * @param headCoordinates
     * @param tailCoordinates
     */
    function checkIfHeadTailTouching (headCoordinates, tailCoordinates) {
        const xDifference = Math.abs(headCoordinates[0] - tailCoordinates[0]);
        const yDifference = Math.abs(headCoordinates[1] - tailCoordinates[1]);

        // We know they must be touching if the x and y coords are different by a maximum of 1, meaning the tail must
        // be somewhere in the ring surrounding the head
        if (xDifference <= 1 && yDifference <= 1) {
            return true;
        }
        return false;
    }

    /**
     * Moves the head of the rope 1 in the direction specified by move.direction.
     * @param move
     * @param headCoordinates
     */
    function moveHead (move, headCoordinates) {

        if (move.direction === "D") {
            headCoordinates[1] -= 1;
        } else if (move.direction === "U") {
            headCoordinates[1] += 1;
        } else if (move.direction === "R") {
            headCoordinates[0] += 1;
        } else if (move.direction === "L") {
            headCoordinates[0] -= 1;
        } else {
            throw `Move in direction '${move.direction}' (with distance '${move.distance}') not recognised!`;
        }

        return headCoordinates;
    }

    /**
     * Moves tailCoordinates 1 closer to headCoordinates in direction specified by index.
     * @param headCoordinates
     * @param tailCoordinates
     * @param index
     */
    function moveTailInDirection(headCoordinates, tailCoordinates, index) {
        tailCoordinates[index] += Math.sign(headCoordinates[index] - tailCoordinates[index]);
        return tailCoordinates;
    }

    /**
     * Move the tail one step closer to the head. Important: function assumes tail needs to be moved at all!
     * @param headCoordinates
     * @param singleTailCoordinates
     */
    function moveOneTail (headCoordinates, singleTailCoordinates) {

        // Only move if the two aren't touching!
        if (!checkIfHeadTailTouching(headCoordinates, singleTailCoordinates)) {
            // Same column - add or subtract 1 from row
            if (singleTailCoordinates[0] === headCoordinates[0]) {
                singleTailCoordinates = moveTailInDirection(headCoordinates, singleTailCoordinates, 1);
            }
            // Same row - again, add or subtract 1, but from column
            else if (singleTailCoordinates[1] === headCoordinates[1]) {
                singleTailCoordinates = moveTailInDirection(headCoordinates, singleTailCoordinates, 0);
            }
            // Otherwise, we have to move diagonally. SIGH.
            else {
                singleTailCoordinates = moveTailInDirection(headCoordinates, singleTailCoordinates, 0);
                singleTailCoordinates = moveTailInDirection(headCoordinates, singleTailCoordinates, 1);
            }
        }

        return singleTailCoordinates;
    }

    /**
     * Moves all tails in the rope.
     * @param headCoordinates
     * @param tailCoordinates
     */
    function moveTails (headCoordinates, tailCoordinates) {
        // Move the first tail segment
        tailCoordinates[0] = moveOneTail(headCoordinates, tailCoordinates[0]);

        // Move other segments (this only happens in part two)
        for (let i = 0; i < tailCoordinates.length - 1; i++) {
            tailCoordinates[i + 1] = moveOneTail(tailCoordinates[i], tailCoordinates[i + 1]);
        }

        return tailCoordinates;
    }

    /**
     * Processes a single move in direction move.direction and of distance move.distance. Repeats single moves
     * move.distance times until done.
     * @param move
     * @param headCoordinates
     * @param tailCoordinates
     * @param tailLocations
     */
    function processMove(move, headCoordinates, tailCoordinates, tailLocations) {
        // Repeat move until we've moved `distance` steps
        let distanceToMove = move.distance;

        while (distanceToMove > 0) {
            headCoordinates = moveHead(move, headCoordinates);
            distanceToMove -= 1;

            // Move all tails in response to the head
            tailCoordinates = moveTails(headCoordinates, tailCoordinates);

            // Add to the set of unique end locations
            const lastTail = tailCoordinates[tailCoordinates.length - 1];
            tailLocations.add(`${lastTail[0]},${lastTail[1]}`)
        }
        return headCoordinates, tailCoordinates;
    }

    /**
     * Primary function for today's puzzle. Initialises a tail of size tailLength and cycles over all moves. Returns
     * a set of unique tail locations as comma-separated strings.
     * @param moves
     * @param tailLength
     */
    function getUniqueTailLocations (moves, tailLength) {
        const tailLocations = new Set();
        tailLocations.add("0,0") // Starting position!
        let headCoordinates = [0, 0];

        // Initialise the tail
        let tailCoordinates = [];
        for (let i = 0; i < tailLength; i++) {
            tailCoordinates.push([0, 0]);
        }

        // Cycle over all moves!
        for (const move of moves) {
            headCoordinates, tailCoordinates = processMove(move, headCoordinates, tailCoordinates, tailLocations);
        }

        return tailLocations;

    }

    /**
     * Takes preprocessed data as an argument and returns answer for part 1.
     * 
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part1 (data) {
        return getUniqueTailLocations(data, 1).size;
    };

    /**
     * Takes preprocessed data as an argument and returns answer for part 2.
     * 
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part2 (data) {
        return getUniqueTailLocations(data, 9).size;
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
