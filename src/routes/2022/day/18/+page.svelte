<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Boiling Boulders",
        day: "18",  // Day, as string
        year: "2022",  // Year, as string
        description: "There's lava and it's flowing! But how much surface area does it have? I did a really cool "
                     + "solution with sets! (Though I should try using integers instead of strings for speed)",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Total surface area",  // Text to display part 1 result with
        result2: "Total exposed surface area",  // Text to display part 2 result with
        keywords: ["sets", "functional", "3D", "voxels", "BFS",],  // General keywords about the code used
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
