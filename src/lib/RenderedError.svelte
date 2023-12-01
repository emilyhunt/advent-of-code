<script>
    import { runOnUserData } from "$lib/stores";

    export let error;

    function formatErrorHeader(error) {
        return `${error.name}: ${error.message}`;
    }
    
    function formatErrorTrace(error) {
        return error
            .stack
            .split("\n")
            .slice(0, 8)  // limits how much we print
            .map((x) => [x.split("@").at(0).split(".").at(-1).split("*").at(-1), x.split("/").at(-1).replace(/\?.*?(?=\:)/, "")]);
    }
</script>


<!-- <div style="background-color: #8c5050;"> -->

<p>Exception encountered during run:</p>

{#if $runOnUserData === true}
    <div style="color:red">
        <p>Check that your custom data has been correctly copied into the form.</p>
        <p>It should be *exactly* the same as given on the Advent of Code website.</p>
    </div>
{/if}

<table class=table style="background-color: #2e2e2e;">
    <tr>
        <td colspan="2" style="color: red">{formatErrorHeader(error)}</td>
    </tr>

    {#each formatErrorTrace(error) as line}
        <tr>
            <td class="error-class">&nbsp&nbsp&nbsp&nbsp{line[0]}</td>
            <td class="error-location">{line[1]}</td>
        </tr>
    {/each}

    <tr>
        <td colspan="2" style="color: grey">(full stack continued in console)</td>
    </tr>
</table>
<!-- </div> -->


<style>
    .table {
        padding-left: 10px;
        padding-right: 10px;
    }

    .error-class {
        color: white;
        /* text-align: right; */
    }

    .error-location {
        padding-left: 20px;
        color: grey;
    }
</style>