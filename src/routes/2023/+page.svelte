<script>
    import { pageName } from "$lib/stores";
    import PuzzleList from "$lib/PuzzleList.svelte";

    $pageName = "2023";
</script>

<h2>Ho Ho Ho... But Where Is All The Snow?!</h2>

<p>Oh no! Something is wrong with global snow production, and we need to get launched into the sky (?!) to go and fix it!</p>

<img src="https://i.giphy.com/media/J5AXZK4PpCLkwHTclt/giphy.webp" alt="Ho ho ho, where is all the snow???" height=300>

<h2>Goals</h2>

<p>This year, I want to focus a little more on code style. I'm going to try and avoid common pitfalls in my own code, like...</p>
<ul>
    <li>Nesting too much</li>
    <li>Magic numbers everywhere</li>
    <li>Over-complicated functions</li>
    <li>Repeating myself</li>
    <li>Using arrays too much (a.k.a. 'numpy brain')</li>
</ul>

<p>We'll see how well I do at those goals by the end of the AoC season...</p>

<h2>Puzzles</h2>

<p>Below are all attempted puzzles for 2023.</p>

<PuzzleList yearFilter={"2023"} format={"day title"}/>
