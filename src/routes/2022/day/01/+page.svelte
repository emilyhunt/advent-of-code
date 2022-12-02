<script context="module">
    export const myMetadata = {
        title: "Calorie Counting",
        day: "01",  // Day, as string
        year: "2022",  // Year, as string
        description: "Let's count how many calories of food the Elves have!",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Highest calorie count",  // Text to display part 1 result with
        result2: "Sum of three highest",  // Text to display part 2 result with
        keywords: ["arrays", "summing", "sorting", "for..of"],
        visible: true,  // Whether or not to display in menus
    };
</script>

<script>
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte"
    
    /****************************** ADD CODE HERE!!!! *****************************/
    // Preprocessor applied to all data.
    function preprocessData (data) {
        // Split first by double line breaks and then by further line breaks, creating an array of arrays containing
        // numerical amounts of Elf snackage quantity
        data = data
            .split("\n\n")
            .map(s => s.split("\n").map(t => Number(t)));
        return data;
    };

    function part1 (data) {
        // Loop over each array, summing the value of each sub-array and finding the maximum
        let maximumValue = 0;
        let sum;

        for (const subdata of data) {

            // Sum values
            // See https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
            // holy fuck JS why is this not a library function lol
            sum = subdata.reduce((partialSum, a) => partialSum + a, 0);

            // Record value if it's highest
            if (sum > maximumValue) {
                maximumValue = sum;
            }
        }

        return maximumValue;
    };

    function part2 (data) {
        // Loop over each array, summing the value of each sub-array and finding the maximum
        let sumValues = [];

        for (const subdata of data) {
            // As in Part 1, we sum all values, except this time we append them to an array
            sumValues.push(subdata.reduce((partialSum, a) => partialSum + a, 0));
        }

        // Sort values
        // see https://www.w3schools.com/js/js_array_sort.asp
        // JS WHY WHAT THE FUCK
        sumValues.sort(function(a, b){return b - a});

        return sumValues[0] + sumValues[1] + sumValues[2];
    };

    /******************************                   *****************************/

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

</script>

<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
