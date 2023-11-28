<script>
    import { currentDefaultData, currentExampleData, currentUserData, currentUserInput, runOnUserData, 
        userDataHasChanged, hashedUserInput, hashedPreviousUserInput } from "$lib/stores";
    import RenderedError from "./RenderedError.svelte";

    // Functions set by user that we run here
    export let part;
    export let preprocessor;
    
    // Metadata prop passed down from page
    export let resultText = "Result";

    // Result and runtime in seconds
    export let result = "";
    export let displayResult = true;
    export let runtimeMilliseconds = -1;
    let runtimeToDisplay = "";
    let error = null;

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
        error = "";
        const startTime = Date.now();
        try {
            result = part(currentData);
        }
        catch (e) {
            error = e;
            console.error(e);
        }
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
        {#if error}
            <RenderedError error={error}/>
        {:else if displayResult}
            <p>{resultText} = {result}</p>
            <p>(ran in {runtimeToDisplay})</p>
        {:else}
            <p>(ran in {runtimeToDisplay})</p>
            <p>{resultText}:</p>
        {/if}
        
    </div>
    <!-- <br> -->
{/if}

<style>
    .inline-button{
        width: 160px;
        /* margin: 0 20px; */
        display:inline-block;
    }
</style>


