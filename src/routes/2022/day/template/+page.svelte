<script context="module">
    export const metadata = {
        title: "Puzzle Title",
        day: "00",  // Day, as string
        year: "2022",  // Year, as string
        description: "Puzzle description",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Result",  // Text to display part 1 result with
        result2: "Result",  // Text to display part 2 result with
        keywords: ["",],  // General keywords about the code used
        visible: true,  // Whether or not to display in menus
    };
</script>

<script>
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte";
    
    /****************************** ADD CODE HERE!!!! *****************************/
    // Preprocessor applied to all data. E.g.: you may want an array without 
    function preprocessData (data) {
        return data;
    };

    function part1 (data) {
        return 0;
    };

    function part2 (data) {
        return 0;
    };

    /******************************                   *****************************/

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

</script>

<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={metadata}/>
