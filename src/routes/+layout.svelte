<script>
    import { page } from '$app/stores';
    import { pageName } from '$lib/stores';
    import { dev } from '$app/environment';
    
    // Repo base link and link to the source code
    const repo_link = 'https://github.com/emilyhunt/advent-of-code';
    $: source_link = (repo_link + '/tree/main/src/routes' + $page.url.pathname).replaceAll("//", "/"); // + "/%2Bpage.svelte";
    $: website_link = ("https://aoc.emilydoesastro.com/" + $page.url.pathname).replaceAll("//", "/");

    // Set document title
    $: title = $pageName === "none" ? "Emily's Advent of Code" : `${$pageName} - Emily's Advent of Code`;
    //$: {document.title = title};

</script>

<!-- Further setting of document title -->
<svelte:head>
    <title>{title}</title>
</svelte:head>

<!-- Header common to all pages -->
<header>
    <h1 style="color: #e3e3e3; margin-bottom: 0.2em; margin-top: 0.2em;">Emily's Advent of Code</h1>

    <a href="/">[home]</a> <a data-sveltekit-reload href="{repo_link}">[repo]</a> <a data-sveltekit-reload href="{source_link}">[page source code]</a> {#if dev} <a rel="external" href="{website_link}" style="color: red">[DEV: view on site]</a> {/if}
</header>

<slot></slot>
