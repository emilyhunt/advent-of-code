<script context="module">
    import * as _info from "./_info.json";
    export const myMetadata = _info;
</script>

<script>
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte";
    
    /****************************** ADD CODE HERE!!!! *****************************/
    // Preprocessor applied to all data. E.g.: you may want an array without 
    function preprocessData (data) {
        // Split into an array of rounds and then each round into a subarray of <your move, their move>
        data = data
            .replaceAll("A", "r")
            .replaceAll("B", "p")
            .replaceAll("C", "s")
            .replaceAll("X", "r")
            .replaceAll("Y", "p")
            .replaceAll("Z", "s")
            .split("\n")
            .map(s => s.split(" "));

        //data = data.map(s => new Object(theirMove=s[0], myMove=s[1]));
        return data;
    };

    function part1 (data) {
        // Loop over all results, calculating the score
        let score = 0;
        let possibleMoves = ["r", "p", "s"];
        let idMyMove, idTheirMove;

        for (const [theirMove, myMove] of data) {
            // Firstly, add to score based on how valuable our object choice is
            idMyMove = possibleMoves.findIndex(x => x === myMove);
            idTheirMove = possibleMoves.findIndex(x => x === idTheirMove);
            score += idMyMove + 1;

            // Add to score based on whether or not we won

            // It's a draw if they're the same
            if (theirMove === myMove) {
                score += 3;

            // It's a win if (idMyMove - idTheirMove) % 2 === 0
            } else if ((myMove === "r" && theirMove === "s") 
                    || (myMove === "p" && theirMove === "r") 
                    || (myMove === "s" && theirMove === "p")) {
                score += 6;
            }
            // It's a loss otherwise (do nothing)
        }

        return score;
    };

    function part2 (data) {
        // Loop over all results, calculating the score
        let score = 0;
        let possibleMoves = ["r", "p", "s"];
        let idMyMove, idTheirMove;

        for (const [theirMove, requiredResult] of data) {
            // EXCEPT, this time, r means I need to lose, p means I need to draw, and s means I need to win!
            idTheirMove = possibleMoves.findIndex(x => x === theirMove);

            // It's a draw if they're the same
            if (requiredResult === "p") {
                score += 3;
                idMyMove = idTheirMove;

            // It's a win
            } else if (requiredResult === "s") {
                score += 6;

                if (theirMove === "r") {
                    idMyMove = 1;
                } else if (theirMove === "p") {
                    idMyMove = 2;
                } else { // theirMove === "s"
                    idMyMove = 0;
                }

            // It's a loss
            } else {
                // score += 0;  // implied
                if (theirMove === "r") {  // 0
                    idMyMove = 2;
                } else if (theirMove === "p") {  // 1
                    idMyMove = 0;
                } else { // theirMove === "s"  // 2
                    idMyMove = 1;
                }
            }

            score += idMyMove + 1;
        };

        return score;
    };

    /******************************                   *****************************/

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));
</script>

<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
