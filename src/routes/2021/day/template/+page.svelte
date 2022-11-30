<script>
    import { pageTitle, longRuntime, currentDefaultData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte"

    // Page settings
    $pageTitle = "Puzzle Title";  // Add title for page here
    $longRuntime = false;  // Warning for if the page takes a while to run (> 5 seconds)
    
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
    import data from "./data.txt?raw"
    currentDefaultData.set(preprocessData(data));

</script>

<Runner part1={part1} part2={part2} preprocessor={preprocessData}/>
