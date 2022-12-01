<script>
    import RunnerPart from "./RunnerPart.svelte";
    import GetUserData from "./GetUserData.svelte";

    export let part1;
    export let part2;
    export let preprocessor;
    export let metadata = {
        result1: "Result",
        result2: "Result",
    };

</script>

<h3>Part 1</h3>
<RunnerPart part={part1} preprocessor={preprocessor} resultText={metadata.result1}/>


<h3>Part 2</h3>
<RunnerPart part={part2} preprocessor={preprocessor} resultText={metadata.result2}/>

<br>
<br>
<GetUserData/>
