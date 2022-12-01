<script>
    import { currentDefaultData, currentExampleData, currentUserData, currentUserInput, runOnUserData, 
        userDataHasChanged, hashedUserInput, hashedPreviousUserInput } from "$lib/stores";

    // Functions set by user that we run here
    export let part;
    export let preprocessor;
    
    // Metadata prop passed down from page
    export let resultText = "Result";

    // Result and runtime in seconds
    export let result = "";
    export let runtimeMilliseconds = -1;
    let runtimeSeconds = -1;
    let runtimeToDisplay = "";
    // $: runtimeSeconds = runtimeMilliseconds / 1000;
    $: runtimeToDisplay = runtimeMilliseconds >= 1000 
        ? `${(runtimeMilliseconds / 1000).toFixed(3)} s` 
        : (runtimeMilliseconds === 0 ? "less than 1 ms" : `${runtimeMilliseconds} ms`);

    
    /*
    Handles data logic by looking at stores and seeing which data to use, if it needs preprocessing, etc
    */
    function getUserData () {            
        // See if we need to preprocess the data first
        if ($userDataHasChanged === true) {
            currentUserData.set(preprocessor($currentUserInput));
            hashedPreviousUserInput.set($hashedUserInput);
        }

        return $currentUserData;
    }

    function onExampleData () {
        defaultTask($currentExampleData);
    }

    function onDefaultData () {
        defaultTask($currentDefaultData);
    }

    function onUserData () {
        defaultTask(getUserData());
    }

    /*
    Main function in this component; runs function part
    */
    function defaultTask (currentData) {
        const startTime = Date.now();
        result = part(currentData);
        runtimeMilliseconds = Date.now() - startTime;
    }

</script>

<div class="row">
    <button on:click={onExampleData} class="inline-button"> Example </button>
    <button on:click={onDefaultData} class="inline-button"> My data </button>
    {#if $runOnUserData === true}
        <button on:click={onUserData} class="inline-button"> Custom data </button>
    {/if}
</div>


<!-- Only display the runtime if we've ran at least once!-->
{#if runtimeMilliseconds !== -1}
    <div class="result">
        <p>{resultText} = {result}</p>
        <p>(ran in {runtimeToDisplay})</p>
    </div>
    <!-- <br> -->
{/if}

<style>
    .inline-button{
        width: 160px;
        /* margin: 0 20px; */
        display:inline-block;
    }

    .result {
        color: #5bbdda;
    }

</style>


