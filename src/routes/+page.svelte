<script>
    import { getPages } from "$lib/pages";
    const { url } = import.meta;
    const childPages = import.meta.glob("./*/+page.svelte");
    const allChildPages = import.meta.glob("./*/day/*/+page.svelte");

    const pages = getPages(url, childPages);
    const allPages = getPages(url, allChildPages);
</script>

<p>Welcome to my attempts at solving <a href="https://adventofcode.com/">Advent of Code</a> puzzles using Javascript and <a href="https://svelte.dev/">Svelte</a>.</p>

<p>These puzzles run entirely in your web browser. Static code is hosted using GitHub Pages.</p>

<h2>Attempts by year</h2>

<ul>
    {#each pages as page}
      <li>
        <a href={page}>[{page.slice(1)}]</a>
      </li>
    {/each}
</ul>

<h2>All attempted puzzles</h2>

<ul>
    {#each allPages as page}
        <li>
        <a href={page}>[{page.slice(1, 5)} // {page.slice(6).replace("/", " ")}]</a>
        </li>
    {/each}
</ul>