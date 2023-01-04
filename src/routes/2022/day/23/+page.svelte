<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Unstable Diffusion",
        day: "23",  // Day, as string
        year: "2022",  // Year, as string
        description: "The Elves need to plant some star fruit plants ASAP! How long will it take them to move out? "
                     + "This puzzle gave me serious undergrad C++ diffusion coursework vibes. (Except JS is slower)",
        longRuntime: true,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Number of empty spaces in square after 10 rounds",  // Text to display part 1 result with
        result2: "Number of rounds",  // Text to display part 2 result with
        keywords: ["TODO: OPTIMISE", "diffusion", "simulation", "object oriented",],  // General keywords about the code used
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
