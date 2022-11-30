<script>
    import { currentDefaultData, currentUserData, currentUserInput, runOnUserData, 
        userDataChanges, userDataPreprocessed } from "$lib/stores";

    // Functions set by user that we run here
    export let part;
    export let preprocessor;

    // Result and runtime in seconds, can optionally be bound to
    export let result = "";
    export let runtimeSeconds = "-1";

    
    /*
    Handles data logic by looking at stores and seeing which data to use, if it needs preprocessing, etc
    */
    function getData () {
        // See if we need to run on user data
        if ($runOnUserData) {
            
            // See if we need to preprocess the data first
            if ($userDataChanges !== $userDataPreprocessed) {
                currentUserData.set(preprocessor($currentUserInput));
                userDataPreprocessed.set($userDataChanges);
            }
            return $currentUserData;

        // Otherwise, use the default data
        } else {
            return $currentDefaultData;
        }
    }

    /*
    Main function in this component; runs function part
    */
    function defaultTask () {
        let currentData = getData();

        const startTime = Date.now();
        result = part(currentData);
        runtimeSeconds = ((Date.now() - startTime) / 1000).toFixed(3);
    };

</script>


<button on:click={defaultTask}>
    Run {$runOnUserData ? "(on user data)" : ""}
</button>


<!-- Only display the runtime if we've ran at least once!-->
{#if runtimeSeconds !== "-1"}
    <p class="result">Result = {result}</p>
    <p class="result">(ran in {runtimeSeconds} s)</p>
    <!-- <br> -->
{/if}

<style>
    .result {
        color: #5bbdda;
    }
</style>


