<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Monkey in the Middle",
        day: "11",  // Day, as string
        year: "2022",  // Year, as string
        description: "Some monkeys have stolen our stuff! Can we get it back? This puzzle was ROUGH. It took me so "
                     + "long to see how to solve part 2, and I had soooo many JS issues because I'm new to JS classes. "
                     + "Arrghh.",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Monkey Business score",  // Text to display part 1 result with
        result2: "Monkey Business score",  // Text to display part 2 result with
        keywords: ["TODO: COMMENT CODE",],  // General keywords about the code used
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
