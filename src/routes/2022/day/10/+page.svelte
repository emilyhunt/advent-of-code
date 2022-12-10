<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "Cathode-Ray Tube",
        day: "10",  // Day, as string
        year: "2022",  // Year, as string
        description: "The screen on our communicator is broken! Let's fix it. This was my first time using classes in "
                     + "Javascript! I used 'self' instead of 'this' SO MANY TIMES.",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Sum of all signal strengths",  // Text to display part 1 result with
        result2: "Screen output",  // Text to display part 2 result with
        keywords: ["arrays", "classes", "custom output", "for", "while"],  // General keywords about the code used
        visible: true,  // Whether or not to display in menus
    };
</script>

<script>
    // Required imports - don't modify!
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import { preprocessData } from "./preprocess";
    import { part1 } from "./part1";
    import { part2 } from "./part2";

    // Specials added to process part2 input manually, we decompose the Runner component so the part 2 result can be
    // displayed
    import RunnerPart from "$lib/RunnerPart.svelte";
    import GetUserData from "$lib/GetUserData.svelte";

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

    // Customs
    let result2 = "";
    let resultLines = [""];
    $: resultLines = result2.split("\n");
</script>

<h3>Part 1</h3>
<RunnerPart part={part1} preprocessor={preprocessData} resultText={myMetadata.result1}/>


<h3>Part 2</h3>
<RunnerPart 
    part={part2} 
    preprocessor={preprocessData} 
    resultText={myMetadata.result2} 
    bind:result={result2} 
    displayResult={false}
/>

{#each resultLines as line}
    <p class="result2">{line}</p>
{/each}

<br>
<br>
<GetUserData/>

<style>
    /* Custom style for screen result output that puts paragraph elements on top of one another */
    .result2 {
        color: #5bbdda;
        margin-top: -0.5em ;
        margin-bottom: 0em ;
    }
</style>
