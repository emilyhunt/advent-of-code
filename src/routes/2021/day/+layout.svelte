<script>
    import { pageTitle, longRuntime } from '$lib/stores';
    import { page } from '$app/stores';

    function getDayYearFromPath(basePath) {
        return [
            Number(basePath.slice(-2)),  // Day, as number
            Number(basePath.slice(1, 5)),  // Year, as number
            basePath.slice(0, 5)  // Year with a / in front
        ];
    };

    function getNextPreviousDays(day) {
        return [
            String(day - 1).padStart(2, "0"),  // Previous day as string
            String(day + 1).padStart(2, "0")   // Next day as string
        ];
    };
    
    const numberOfPages = Object.keys(import.meta.glob("./**/+page.svelte")).length;

    let day = 2;
    let year = 2021;
    let yearPath = '/2021'; 
    let previousDay = '01'; 
    let nextDay = '03';

    // Various page formatting things
    $: {
        [day, year, yearPath] = getDayYearFromPath($page.url.pathname);
        [previousDay, nextDay] = getNextPreviousDays(day);
    }

</script>

<h2>day {String(day).padStart(2, '0')}: {$pageTitle}</h2>

{#if $longRuntime}
    <p style="color:red;">WARNING! This solution can take a while to run.</p>
{/if}

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