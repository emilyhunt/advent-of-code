<script>
    import Switch from "./Switch.svelte";

    export let part1;
    export let part2;
    export let preprocess;
    export let defaultData;

    let part1Result = "";
    let part2Result = "";

    let userData = "Add your data here!";

    let runOnUserData = false;

    function default1 () {
        let currentData = defaultData; 
        if (runOnUserData) {
            currentData = preprocess(userData);
        }
        part1Result = part1(currentData);
    };

    function default2 () {
        let currentData = defaultData; 
        if (runOnUserData) {
            currentData = preprocess(userData);
        }
        part2Result = part2(currentData);
    };

    function handleUserInput() {

    };

</script>

<h3>Part 1</h3>

<p>Result = {part1Result}</p>

<button on:click={default1}>
    Run {runOnUserData ? "on user data" : ""}
</button>


<h3>Part 2</h3>

<p>Result = {part2Result}</p>

<button on:click={default2} >
    Run {runOnUserData ? "on user data" : ""}
</button>

<br>
<br>

<Switch bind:checked={runOnUserData} label="Run on custom data" design="slider" fontSize={20}/>

{#if runOnUserData}
    <textarea type="text" bind:value={userData} style="margin-top: 20px"/>
{/if}

<style>
    textarea {
        width: 400px;
        height: 100px;
    }
</style>
