<script>
    import { getPages } from "$lib/pages";
    import { page } from "$app/stores"

    const url = $page.url.pathname + "/";
    const childPages = import.meta.glob("./day/[!template]*/+page.svelte");

    const pages = getPages(url, childPages);
</script>

<p>
  Oh no! We've only got 25 days until Christmas and Santa's reindeer need enough star fruit snacks to help them deliver 
  presents. Can we explore the jungle and retrieve enough star fruit snacks to save Christmas?!?
</p>

<img src="https://i.giphy.com/media/DGRFeXQGFeDf0tBOuv/giphy-downsized-large.gif" alt="A Christmas star!" height=200>

<p>Below are all attempted solutions for 2022.</p>

<ul>
    {#each pages as page}
      <li>
        <a href={page}>[{page.slice(6).replace("/", " ")}]</a>
      </li>
    {/each}
</ul>
