<script>
    import { metadata, initMetadata } from '$lib/stores';

    export let yearFilter = null;
    //export let day = "";
    export let keywordsFilter = null;
    export let renderOnlyVisible = true;
    let pagesToList = Object();

    async function populateList() {
        // Ensure the metadata store has been setup and get a list of all possible puzzles
        await initMetadata();

        // We can take a shortcut if a year is specified
        if (yearFilter !== null) {
            pagesToList = $metadata[yearFilter];
        } else {
            // Otherwise, flatten into single object containing all pages
            for (const year in $metadata) {
                Object.assign($metadata[year], pagesToList);
            }
        }

        // Render only visible pages
        if (renderOnlyVisible) {
            for (const day in pagesToList) {
                if (!pagesToList[day].visible) {
                    delete pagesToList[day];
                }
            }
        }

        // Also filter by keyword!
        if (keywordsFilter !== null) {
            let keywordInArray = false;

            for (const day in pagesToList) {
                // Check if any keywords in the page's keywords array exist
                keywordInArray = pagesToList[day].keywords.some(x => keywordsFilter.includes(x));
                if (!keywordInArray) {
                    delete pagesToList[day];
                }
            }
        }
    }

</script>

<!-- Get page metadata -->
<!-- Using https://stackoverflow.com/questions/71804119/initializing-a-custom-svelte-store-asynchronously -->
{#await populateList()}
    <p></p>
{:then}

<!-- Content goes here -->
{#if Object.keys(pagesToList).length > 0}
    {#each Object.keys(pagesToList) as dayKey}
        <li>
            <a href={pagesToList[dayKey].href}>
                [{pagesToList[dayKey].year} - day {pagesToList[dayKey].day}] 
                {pagesToList[dayKey].title}
            </a>
        </li>
    {/each}
{:else}
    <p>ERROR: no valid pages found matching filters year={yearFilter}, keywords={keywordsFilter}</p>
{/if}



<!-- Error handling -->
{:catch error}
    <p>Failed to fetch page metadata! Error: {error.message}</p>
{/await}