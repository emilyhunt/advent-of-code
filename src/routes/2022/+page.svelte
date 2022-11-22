<script>
  import { getPages } from "$lib/pages";
  import { page } from "$app/stores"

  const url = $page.url.pathname + "/";
  const childPages = import.meta.glob("./day/*/+page.svelte");

  const pages = getPages(url, childPages);
</script>

<p>All attempted solutions for 2022.</p>

<ul>
    {#each pages as page}
      <li>
        <a href={page}>[{page.slice(6).replace("/", " ")}]</a>
      </li>
    {/each}
</ul>
