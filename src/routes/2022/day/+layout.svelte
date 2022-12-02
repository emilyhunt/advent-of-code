<script>
    import { metadata, initMetadata } from '$lib/stores';
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
    let metadataKey = "202101";

    // Various page formatting things
    $: {
        if ($page.url.pathname.includes("template") !== true) {
            [day, year, yearPath] = getDayYearFromPath($page.url.pathname);
            [previousDay, nextDay] = getNextPreviousDays(day);
            metadataKey = year + day;
        } else {
            day = "01";
            year = "2021";
            metadataKey = year + day;
        }
    }

</script>

<!-- Get page metadata -->
<!-- Using https://stackoverflow.com/questions/71804119/initializing-a-custom-svelte-store-asynchronously -->
{#await initMetadata()}
    <p>fetching page metadata...</p>
{:then}


<!-- Content goes here -->
<h2>day {$metadata[metadataKey].day}: {$metadata[metadataKey].title}</h2>

<p>{$metadata[metadataKey].description}</p>

<p class="keywords">Keywords: {$metadata[metadataKey].keywords.sort()}</p>

{#if $metadata[metadataKey].longRuntime}
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


<!-- Error handling -->
{:catch error}
    <p>Failed to fetch page metadata! Error: {error.message}</p>
{/await}

<style>
    .keywords {
        color:#7e7e7e;
        font-size: small;
        margin-top: -10px;
    }
</style>