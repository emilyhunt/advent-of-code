//import { metadata } from "./stores";

/**
 * Returns relative paths to child modules.
 * SEE: https://github.com/sveltejs/kit/issues/923#issuecomment-1190322586
 */
 export const getPages = (/** @type {String} */ url, /** @type {{}} */ childPages) => {

    const directory = url.replace(/(.*?)\/src\/routes\//, '/')
        .replace(/(.*?)\/immutable\/pages\//, '/')
        .replace(/(.*?)\/var\/task\//, '/') // Vercel
        .replace(/\/([^/])*.svelte.*/, '/');

    const paths = Object.keys(childPages)
        // Remove any routes
        .map((path) => path.replace("../routes", ""))
        // Convert relative path to absolute path
        .map((path) => path.replace(/^(.\/)/, directory))
        // Filter private modules (default regular expression in SvelteKit)
        .filter((path) => !/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(path))
        // Filter paths with dynamic parameters (e.g. /blog/[slug].svelte)
        .filter((path) => !/\[.*\]/.test(path))
        // Remove '/index', layout name (@___), and file extension (.svelte)
        .map((path) => path.replace(/(\/\+page)?(@.*)?.svelte/, ''))
        // Set empty path string to '/' ('./index.svelte' is converted to '')
        .map((path) => path || '/')
        .sort();

    return paths;
}

async function loadPageMetadata(year, day) {
    //console.log(year, day);
    let { myMetadata } = await import(`./../routes/20${year}/day/${day}/+page.svelte`);
    // let myMetadata = await import(`./../routes/20${year}/day/${day}/_info.json`, {assert: { type: "json" }});
    //let { metadata } = await import(`../routes/2021/01/+page.svelte`);
    //console.log(year, day, "done");
    return myMetadata;
};


async function getMetadataArray (allPuzzleLinks) {
    return await Promise.all(allPuzzleLinks.map(x => loadPageMetadata(x.slice(3, 5), x.slice(-2))));
}


/**
 * Generates a metadata object covering all valid puzzles to display in menus, etc.
 */
export function generateMetadata () {
    
    const allPuzzles = import.meta.glob("../routes/20*/day/[!template]*/+page.svelte");
    const allPuzzleLinks = getPages("", allPuzzles);
    
    // Grab all metadata!
    // See https://stackoverflow.com/questions/35612428/call-async-await-functions-in-parallel
    let metadataArray = getMetadataArray(allPuzzleLinks);
    
    // Add href values and write
    let metadataToWrite = {};

    const awaitStuff = async () => {
        let finalMetadata = await metadataArray;
        for (let miniMetadata of finalMetadata) {
            // Add more information
            const href = `/${miniMetadata.year}/day/${miniMetadata.day}`
    
            // Save to the main metadata object
            if (!(miniMetadata.year in metadataToWrite)) { metadataToWrite[miniMetadata.year] = {}; }
            metadataToWrite[miniMetadata.year][miniMetadata.day] = JSON.parse(JSON.stringify(miniMetadata));
            metadataToWrite[miniMetadata.year][miniMetadata.day]["href"] = href;
        }
    };
    awaitStuff();

    return metadataToWrite;

}

export const metadata = generateMetadata();
console.log(metadata)

// export function getMetadata () {
//     console.log("generated", metadata);
//     // if (!($metadata).generated) {
//     //     generateMetadata();
//     // }
//     return metadata
// }