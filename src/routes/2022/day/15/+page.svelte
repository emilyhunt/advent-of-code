<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Beacon Exclusion Zone",
        day: "15",  // Day, as string
        year: "2022",  // Year, as string
        description: "Our sensors are picking up multiple beacons, but none of them are the beacon that we're looking "
                     + "for. Can we find the only valid location? (This one was HARD.)",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Number of full slots on row",  // Text to display part 1 result with
        result2: "Tuning frequency",  // Text to display part 2 result with
        keywords: ["sets", "classes", "arrays", "geometry", "ranges", "difficult"],  // General keywords about the code used
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
