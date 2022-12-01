<script>
    import { metadata } from '$lib/stores';
    import { page } from '$app/stores';

    function getDayYearFromPath(basePath) {
        return [
            basePath.slice(-2),  // Day, as str
            basePath.slice(1, 5),  // Year, as str
            basePath.slice(0, 5)  // Year with a / in front
        ];
    };

    function getNextPreviousDays(day) {
        const dayNumber = Number(day);
        return [
            String(dayNumber - 1).padStart(2, "0"),  // Previous day as string
            String(dayNumber + 1).padStart(2, "0")   // Next day as string
        ];
    };
    
    // Todo replace with solution that uses metadata
    const numberOfPages = Object.keys(import.meta.glob("./[!template]**/+page.svelte")).length;

    let day = "02";
    let year = "2021";
    let yearPath = '/2021'; 
    let previousDay = '01'; 
    let nextDay = '03';
    let pageMetadata = {
        title: "Metadata undefined",
        day: "00",
        year: "2022",
        description: "Metadata undefined",
        longRuntime: false,
        result1: "Result",
        result2: "Result",
        keywords: ["",],
        visible: true,
    };

    // Various page formatting things
    $: {
        if ($page.url.pathname.includes("template") !== true) {
            [day, year, yearPath] = getDayYearFromPath($page.url.pathname);
            [previousDay, nextDay] = getNextPreviousDays(day);
            pageMetadata = $metadata[year + day];
        }
    }

</script>

<h2>day {pageMetadata.day}: {pageMetadata.title}</h2>

<p>{pageMetadata.description}</p>

{#if pageMetadata.longRuntime}
    <p style="color:red;">WARNING! This solution can take a while to run.</p>
{/if}

<slot></slot>

<footer style="margin-top: 2em;">
    {#if Number(day) > 1}
    <a href="{previousDay}">[previous]</a> 
    {/if}

    <a href="{yearPath}">[{yearPath.slice(1)}]</a>

    {#if Number(day) < numberOfPages}
    <a href="{nextDay}">[next]</a> 
    {/if}
</footer>