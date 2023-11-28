<script context="module">
    import * as _info from "./_info.json";
    export const myMetadata = _info;
</script>

<script>
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte";
    
    /****************************** ADD CODE HERE!!!! *****************************/

    /**
     * Returns an array of arrays, where every subarray is the starting configuration of the column. Does lots of
     * data reading for you. I hate this data format so much.
     */
    function getStartingColumns(startingPosition) {
        // Split into all input rows
        let startingRows = startingPosition.split("\n");
        
        // Use the final line of column numbers to work out where column data is stored
        let columnNumbersString = startingRows[startingRows.length - 1];
        let columnPositions = [];
        for (let i = 0; i < columnNumbersString.length; i++) {
            if (columnNumbersString[i] != " ") {
                columnPositions.push(i);
            }
        }

        // Initialise a columns object with empty arrays
        let columns = [];
        for (let i = 0; i < columnPositions.length; i++) {
            columns.push([]);
        }

        // Cycle over all rows, reading in all data for that row
        for (const row of startingRows.slice(0, -1)) {

            // For each row, cycle over all possible data locations
            for (let i = 0; i < columnPositions.length; i++) {
                
                // Only store values in columns if the value isn't whitespace (happens at the top)
                if (row[columnPositions[i]] != " ") {
                    columns[i].push(row[columnPositions[i]]);
                }

            }

        }

        // Reverse column order for consistency with the puzzle
        return columns.map(x => x.reverse());
    }

    /**
     * Get moves from raw input of lines
     */
    function getMoves(moves) {
        // Split into rows and turn those into objects
        let movesProcessed = [];
        let splitRow;
        for (const row of moves.split("\n")) {
            // We split each row by whitespace
            splitRow = row.split(" ");

            // & add the correct whitespace parts to the new move object, which has the properties:
            // quantity: number of crates to move
            // origin: where to move crates from (0-indexed, UNLIKE the puzzle)
            // destination: where to move them to (again, 0-indexed, UNLIKE the puzzle)
            movesProcessed.push(
                {
                    quantity: Number(splitRow[1]), 
                    origin: Number(splitRow[3]) - 1, 
                    destination: Number(splitRow[5]) - 1
                }
            );
        }
        
        return movesProcessed;
    }

    // Preprocessor applied to all data. E.g.: you may want an array without 
    function preprocessData (data) {
        // Split into both halves - first half contains the starting position, second half moves one row at a time
        data = data.split("\n\n");

        // FIRSTLY, read in the starting position
        const columns = getStartingColumns(data[0]);
        
        // SECONDLY, let's read in the moves into a neater format
        const movesProcessed = getMoves(data[1]);
        

        return [columns, movesProcessed];
    };

    /**
     * Applies moves
     * @param columns - array of arrays of columns
     * @param movesToApply - array of move objects, where each move has the properties quantity, origin and destination
     * @param reversed - whether or not crates are moved one by one, which reverses their order through the move
     */
    function applyMoves (columns, movesToApply, reversed) {
        // Create a copy of columns (since I don't want to mess with the original data once we get going)
        columns = JSON.parse(JSON.stringify(columns));

        // Cycle over every move, doin the moves... !!!
        let cratesToMove;

        for (const move of movesToApply) {
            // Move objects from origin to dest
            cratesToMove = columns[move.origin].slice(-move.quantity);

            // Order is reversed if crates are moved one at a time, otherwise not
            if (reversed) {
                cratesToMove = cratesToMove.reverse();
            }

            columns[move.destination].push(...cratesToMove);

            // Remove original objects
            columns[move.origin] = columns[move.origin].slice(0, -move.quantity + columns[move.origin].length);
        }

        return columns;
    }

    /**
     * Gets the top value of all columns as a string
     * @param columns - the columns array of arrays
     */
    function getTopValue(columns) {
        return columns.map(x => x[x.length - 1]).join("");
    }

    function part1 (data) {
        // Calculate final column order moving one at a time
        const columns = applyMoves(data[0], data[1], true);
        return getTopValue(columns);
    };

    function part2 (data) {
        // Calculate final column order moving multiple at a time
        const columns = applyMoves(data[0], data[1], false);
        return getTopValue(columns);
    };

    /******************************                   *****************************/

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

</script>

<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
