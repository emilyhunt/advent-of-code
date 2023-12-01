<script>
    import { pageName } from "$lib/stores";
    import PuzzleList from "$lib/PuzzleList.svelte";

    $pageName = "2023";
</script>

<p>Oh no! Something is wrong with global snow production, and we need to get launched into the sky (?!) to go and fix it!</p>

<img src="https://i.giphy.com/media/J5AXZK4PpCLkwHTclt/giphy.webp" alt="Ho ho ho, where is all the snow???" height=300>

<p>Below are all attempted puzzles for 2023.</p>

<PuzzleList yearFilter={"2023"} format={"day title"}/>
