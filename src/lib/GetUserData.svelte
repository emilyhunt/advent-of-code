<script>
    import { runOnUserData, currentUserInput } from "$lib/stores";
    import Switch from "./Switch.svelte";
</script>


<Switch bind:checked={$runOnUserData} label="Run on custom data" design="slider" fontSize={20}/>

{#if $runOnUserData}
    <textarea type="text" bind:value={$currentUserInput} style="margin-top: 20px"/>
{/if}

<style>
    textarea {
        width: 400px;
        height: 100px;
    }
</style>