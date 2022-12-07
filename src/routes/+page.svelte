<script>
    import { pageName } from "$lib/stores";
    import PuzzleList from "$lib/PuzzleList.svelte";

    // Set page name
    $pageName = "none";

</script>

<p>
    Welcome to my attempts at solving <a href="https://adventofcode.com/">Advent of Code</a> puzzles using Javascript
    and <a href="https://svelte.dev/">Svelte</a>.
</p>

<p>These puzzles run entirely in your web browser. Static code is hosted using GitHub Pages.</p>

<img src="https://i.giphy.com/media/RdzzVrtvfqnM4/giphy.webp" alt="Cats wearing Christmas Hats" width=300>


<h2>Puzzles by year</h2>

<ul>
    <li><a href="/2021">[2021] - Find the Lost Sleigh Keys</a></li>
    <li><a href="/2022">[2022] - The Magic Star Expedition</a></li>
</ul>


<h2>All completed puzzles</h2>

<PuzzleList dateAscending={false}/>
