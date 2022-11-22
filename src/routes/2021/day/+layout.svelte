<script>
    import { page } from '$app/stores';
    const numberOfPages = Object.keys(import.meta.glob("./**/+page.svelte")).length;
    $: basePath = $page.url.pathname;
    $: day = Number(basePath.slice(-2));
    $: yearPath = basePath.slice(0, -2).replace("/day/", "");
    $: previousDay = String(day - 1).padStart(2, "0");
    $: nextDay = String(day + 1).padStart(2, "0");
</script>

<h2>day {String(day).padStart(2, '0')}</h2>

<slot></slot>

<footer style="margin-top: 2em;">
    {#if day > 1}
    <a href="{previousDay}">[previous]</a> 
    {/if}

    <a href="{yearPath}">[{yearPath.slice(1)}]</a>

    {#if day < numberOfPages}
    <a href="{nextDay}">[next]</a> 
    {/if}
</footer>