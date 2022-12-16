<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Puzzle Title",
        day: "16",  // Day, as string
        year: "2022",  // Year, as string
        description: "The cave is about to fill up with lava! Which valves should we open to reduce pressure, and how "
                     + "much pressure will that release? (by FAR my slowest code yet, ouch. Could be optimised by: 1. compressing graph into just start & valves with flow > 0; 2. pre-finding the shortest paths between nodes using e.g. Djikstra's and storing this as a mapping; 3. guesstimating best path and running first; 4. brute force between all remaining paths, using some sort of permutation iterator; 5. pre-culling all paths that can't possibly be better than the current best (if this helps? may do for part 2); 6. using lookup table of how much flow a given valve will contribute given different opening times; 7. pre-culling paths that can't possibly visit as many nodes as the current best did; 8. using BFS and culling all potential routes that are invalid even in best case.)",
        longRuntime: true,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Total flow with best solution",  // Text to display part 1 result with
        result2: "Total flow with best two-worker solution",  // Text to display part 2 result with
        keywords: ["TODO: OPTIMISE",],  // General keywords about the code used
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
