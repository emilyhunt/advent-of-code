<script>
    import RunnerPart from "./RunnerPart.svelte";
    import GetUserData from "./GetUserData.svelte";

    export let part1;
    export let part2;
    export let preprocessor;

</script>

<h3>Part 1</h3>
<RunnerPart part={part1} preprocessor={preprocessor}/>


<h3>Part 2</h3>
<RunnerPart part={part2} preprocessor={preprocessor}/>

<br>
<br>
<GetUserData/>
