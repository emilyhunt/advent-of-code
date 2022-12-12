<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Hill Climbing Algorithm",
        day: "12",  // Day, as string
        year: "2022",  // Year, as string
        description: "We need to find the shortest path up the hill to get the best signal for our communicator! "
                     + "It took me SO LONG to implement Djikstra's algorithm for this one, honestly I should have just "
                     + "brute forced it. But oh well, it was fun =) I feel I understand JS classes better now.",
        longRuntime: true,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Length of shortest path to highest point",  // Text to display part 1 result with
        result2: "Length of shortest path from lowest point to highest",  // Text to display part 2 result with
        keywords: ["TODO: OPTIMISE", "sets", "arrays", "classes", "Djikstra's algorithm", "pathfinding"],  // General keywords about the code used
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
