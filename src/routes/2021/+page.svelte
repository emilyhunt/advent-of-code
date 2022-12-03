<script>
    import { getPages } from "$lib/pages";
    import { pageName } from "$lib/stores";
    import { page } from "$app/stores"

    const url = $page.url.pathname + "/";
    const childPages = import.meta.glob("./day/[!template]*/+page.svelte");

    const pages = getPages(url, childPages);

    $pageName = "2021";
</script>

<p>Oh no! The sleigh keys have gone overboard. Can we save Christmas by recovering the sleigh keys with a submarine?!?</p>  

<img src="https://i.giphy.com/media/dNhCpFWksNtbMLsFpX/giphy.webp" alt="A submarine!" height=200>

<p>All attempted solutions for 2021 are below.</p>

<ul>
    {#each pages as page}
      <li>
        <a href={page}>[{page.slice(6).replace("/", " ")}]</a>
      </li>
    {/each}
</ul>
