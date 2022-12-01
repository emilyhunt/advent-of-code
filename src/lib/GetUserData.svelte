<script>
    import { runOnUserData, currentUserInput } from "$lib/stores";
    import Switch from "./Switch.svelte";

    // This line resets user input on every page, or rather, every time a new Runner component is made
    runOnUserData.set(false)
    currentUserInput.set("Add your custom input here!")
</script>


<Switch bind:checked={$runOnUserData} label="Custom data input" design="slider" fontSize={20}/>

{#if $runOnUserData}
    <textarea type="text" bind:value={$currentUserInput} style="margin-top: 20px"/>
{/if}

<style>
    textarea {
        width: 400px;
        height: 100px;
    }
</style>