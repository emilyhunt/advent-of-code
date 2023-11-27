<script>
    import { metadata } from '$lib/stores';
    import { onMount } from 'svelte';

    export let yearFilter = null;
    //export let day = "";
    export let keywordsFilter = null;
    export let renderOnlyVisible = true;
    export let dateAscending = true;
    export let format = "year day title";
    let pagesToList = Object();

    function listFormatter (key) {
        if (format === "year day title") {
            return `[${pagesToList[key].year} - day ${pagesToList[key].day}] ${pagesToList[key].title}`;
        } else if (format === "day title") {
            return `[day ${pagesToList[key].day}] ${pagesToList[key].title}`;
        } else {
            throw `Specified list entry format ${format} not recognised!`;
        }
    }

    function populateList() {
        // Ensure the metadata store has been setup and get a list of all possible puzzles
        // await initMetadata();
        console.log("hi")
        

        // We can take a shortcut if a year is specified
        if (yearFilter !== null) {
            pagesToList = metadata[yearFilter];
        } else {
            // Otherwise, flatten into single object containing all pages
            for (const year in metadata) {
                for (const day in metadata[year]) {
                    pagesToList[year + day] = metadata[year][day]
                }
            }
        }

        // Render only visible pages
        if (renderOnlyVisible) {
            for (const key in pagesToList) {
                if (!pagesToList[key].visible) {
                    delete pagesToList[key];
                }
            }
        }

        // Also filter by keyword!
        if (keywordsFilter !== null) {
            let keywordInArray = false;

            for (const key in pagesToList) {
                // Check if any keywords in the page's keywords array exist
                keywordInArray = pagesToList[key].keywords.some(x => keywordsFilter.includes(x));
                if (!keywordInArray) {
                    delete pagesToList[key];
                }
            }
        }

        let pagesOrder = Object.keys(pagesToList);
        if (!dateAscending) {
            pagesOrder = pagesOrder.reverse();
        }
        return pagesOrder;
    }

    // onMount( async () => {
    //     populateList()
    // });

</script>

<!-- Get page metadata -->
<!-- Using https://stackoverflow.com/questions/71804119/initializing-a-custom-svelte-store-asynchronously -->
<!-- {#await populateList()}
    <p>Generating list of puzzles...</p>
{:then} -->

<!-- Content goes here -->
<!-- {#if pagesOrder === undefined}
    <p>ERROR: pagesOrder not defined</p>
{:else if pagesOrder.length > 0} -->
<ul>
    {#each populateList() as key}
        <li>
            <a href={pagesToList[key].href}>
                {listFormatter(key)}
            </a>
        </li>
    {/each}
</ul>
<!-- {:else}
    <p>ERROR: no valid pages found matching filters year={yearFilter}, keywords={keywordsFilter}</p>
{/if} -->



<!-- Error handling -->
<!-- {:catch error}
    <p>Failed to fetch page metadata! Error: {error.message}</p> -->
<!-- {/await} -->