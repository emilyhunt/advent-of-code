<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Not Enough Minerals",
        day: "19",  // Day, as string
        year: "2022",  // Year, as string
        description: "It's time to play Elf-Factorio and mine some geodes by making ore robots, which make clay "
                     + "robots, which make obsidian robots, which make... etc etc. I tried to do this with a depth-"
                     + "first search first (and regretted it big time), my pruned BFS below is a tad slow but gets the "
                     + "right answer at least.",
        longRuntime: true,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Sum of quality levels",  // Text to display part 1 result with
        result2: "Product of geode amounts",  // Text to display part 2 result with
        keywords: ["breadth-first search", "TODO: OPTIMISE", "TODO: COMMENT", "classes", "arrays", "object-oriented"],  // General keywords about the code used
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
