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
        // Split by line break, then split each pair into min/max values and cast these to numbers
        // So, we have an array of N pairs, where each entry is a length-2 array containing each Elf's assignment, with
        // each assignment being a length-2 array with a minimum and maximum value. Like:
        // [ [[min1, max1], [min2, max2]], [[min3, max3], [min4, max4]], ... , [[minN, maxN], [minN, maxN]]]
        // Bit complex but at least it's fast af to access later =)
        data = data
            .split("\n")
            .map(s => s.split(",")
                .map(t => t.split("-")
                    .map(x => Number(x))));
        return data;
    };

    function checkIfContained(range1, range2) {
        // Check if one of the ranges of values fully contains the other
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
        // Check if any of the values in the two ranges overlap one another
        if (range1[1] >= range2[0] && range1[0] <= range2[1]) {
            return 1;
        } else {
            return 0;
        }
    }

    function part2 (data) {
        // Loop over every entry, checking if any of its values overlap the others
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
