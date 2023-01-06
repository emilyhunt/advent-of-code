<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Blizzard Basin",
        day: "24",  // Day, as string
        year: "2022",  // Year, as string
        description: "We need to get through a blizzard to get to the extraction point! This was yet another fun adventure in searches. My solution could probably be a bit quicker if it was less object-oriented, though I really like how readable that makes it.",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Shortest route to end",  // Text to display part 1 result with
        result2: "Shortest route from start, to end, to start",  // Text to display part 2 result with
        keywords: ["TODO: COMMENT", "TODO: OPTIMISE", "object oriented", "bfs", "cyclical"],  // General keywords about the code used
        visible: true,  // Whether or not to display in menus
    };
</script>

<script>
    // Required imports - don't modify!
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import { preprocessData, part1, part2 } from './main';
    import Runner from "$lib/Runner.svelte";

    // Fetch data
    import data from "./_data/data.txt?raw";
    import exampleData from "./_data/exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

    // console.log($currentExampleData);
    // console.log($currentDefaultData);
</script>

<!-- Component that provides UI to interact with functions defined above. -->
<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
