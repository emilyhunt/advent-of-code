<script context="module">
    // Edit these values!
    export const metadata = {
        title: "Sonar Sweep",
        day: "01",  // Day, as string
        year: "2021",  // Year, as string
        description: "How much does the terrain change below the ship?",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Result",  // Text to display part 1 result with
        result2: "Result",  // Text to display part 2 result with
        keywords: ["",],
        visible: true,  // Whether or not to display in menus
    };
</script>

<script>
    import { pageTitle, longRuntime, currentDefaultData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte"

    // Page settings
    $pageTitle = "Sonar Sweep";  // Add title for page here
    $longRuntime = false;  // Warning for if the page takes a while to run (> 5 seconds)
    
    /****************************** ADD CODE HERE!!!! *****************************/
    // Preprocessor applied to all data. E.g.: you may want an array without 
    function preprocessData (data) {
        // Coerce into array of numbers
        data = data.split("\n").map(s => Number(s));
        return data;
    };

    function part1 (data) {
        // Count how many measurements in data are larger than the previous one.
        let n = 0
        for (let i = 1; i < data.length; i++) {
            if (data[i] > data[i-1]) {
                n += 1;
            }
        }
        return n;
    };

    function part2 (data) {
        // Make three-measurement sums of each answer
        let n = 0;
        let sum = 0;
        let previousSum = data[0] + data[1] + data[2];
        for (let i = 3; i < data.length; i++) {
            sum = data[i] + data[i-1] + data[i-2];
            if (sum > previousSum) {
                n += 1;
            }
            previousSum = sum;
        }
        return n;
    };

    /******************************                   *****************************/

    // Fetch data
    import data from "./data.txt?raw"
    currentDefaultData.set(preprocessData(data));

    // TODO: needs example data!

</script>

<Runner part1={part1} part2={part2} preprocessor={preprocessData}/>
