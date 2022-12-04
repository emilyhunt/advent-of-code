<script context="module">
    export const myMetadata = {
        title: "Camp Cleanup",
        day: "04",  // Day, as string
        year: "2022",  // Year, as string
        description: "The Elves' campsite needs cleaning up, but some of their work has been duplicated.",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Pairs that fully overlap their partner",  // Text to display part 1 result with
        result2: "Pairs that partly overlap their partner",  // Text to display part 2 result with
        keywords: ["comparison", "for..of", "logic", "map", "split"],  // General keywords about the code used
        visible: true,  // Whether or not to display in menus
    };
</script>

<script>
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte";
    
    /****************************** ADD CODE HERE!!!! *****************************/
    // Preprocessor applied to all data. E.g.: you may want an array without 
    function preprocessData (data) {
        // Split by line break, then split each pair into min/max values and cast these to numbers
        data = data
            .split("\n")
            .map(s => s.split(",")
                .map(t => t.split("-")
                    .map(x => Number(x))));
        return data;
    };

    function checkIfContained(range1, range2) {
        if (range1[0] <= range2[0] && range1[1] >= range2[1]) {
            return 1;
        } else if (range2[0] <= range1[0] && range2[1] >= range1[1]) {
            return 1;
        } else {
            return 0;
        }
    }

    function part1 (data) {
        // Loop over every entry, checking if its values are contained within the other's
        var numberContained = 0;
        for (const ranges of data) {
            numberContained += checkIfContained(ranges[0], ranges[1]) 
        }
        return numberContained;
    };

    function checkIfOverlapping(range1, range2) {
        if (range1[1] >= range2[0] && range1[0] <= range2[1]) {
            return 1;
        } else {
            return 0;
        }
    }

    function part2 (data) {
        // Loop over every entry, checking if its values are contained within the other's
        var numberOverlapping = 0;
        for (const ranges of data) {
            numberOverlapping += checkIfOverlapping(ranges[0], ranges[1]) 
        }
        return numberOverlapping;
    };

    /******************************                   *****************************/

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

</script>

<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
