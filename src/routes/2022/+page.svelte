<script>
    import { pageName } from "$lib/stores";
    import PuzzleList from "$lib/PuzzleList.svelte";

    $pageName = "2022";
</script>

<p>
  Oh no! We've only got 25 days until Christmas and Santa's reindeer need enough star fruit snacks to help them deliver 
  presents. Can we explore the jungle and retrieve enough star fruit snacks to save Christmas?!?
</p>

<img src="https://i.giphy.com/media/DGRFeXQGFeDf0tBOuv/giphy-downsized-large.gif" alt="A Christmas star!" height=200>

<p>Below are all attempted solutions for 2022.</p>

<PuzzleList yearFilter={"2022"} format={"day title"}/>
