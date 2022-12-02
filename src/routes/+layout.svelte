<header>
    <h1 style="color: #e3e3e3; margin-bottom: 0.2em; margin-top: 0.2em;">Emily's Advent of Code Attempts</h1>

    <a href="/">[home]</a> <a href="{repo_link}">[repo]</a> <a href="{source_link}">[page source code]</a>
</header>

<slot></slot>

<script>
    import { page } from '$app/stores';
    // import { generateMetadata } from '$lib/pages';
    const repo_link = 'https://github.com/emilyhunt/aoc.emilydoesastro.com';
    $: source_link = repo_link + '/tree/main/src/routes' + $page.url.pathname + "/%2Bpage.svelte";

    // Whenever the main layout is called, we ensure that the metadata object gets generated
    // console.log("origin", $page.url.origin);
    // console.log("pathname", $page.url.pathname);
    // generateMetadata();
</script>
