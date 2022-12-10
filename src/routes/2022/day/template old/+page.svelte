<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
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
    /****************************** Add all custom code below *****************************/
    
    /**
     * Preprocessor applied to all possible inputs. 
     * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
     * 
     * @param {string} data - raw input from the file
     */
    function preprocessData (data) {
        return data;
    };

    /**
     * Takes preprocessed data as an argument and returns answer for part 1.
     * 
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part1 (data) {
        return 0;
    };

    /**
     * Takes preprocessed data as an argument and returns answer for part 2.
     * 
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part2 (data) {
        return 0;
    };

    /****************************** - - - - - - - - - - - - - *****************************/

    // Required imports - don't modify!
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte";

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

    // console.log($currentExampleData);
    // console.log($currentDefaultData);
</script>

<!-- Component that provides UI to interact with functions defined above. -->
<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
