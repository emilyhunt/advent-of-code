import { metadata } from "./stores";

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

export async function loadPageMetadata(year, day) {
    let { metadata } = await import(`./../routes/20${year}/day/${day}/+page.svelte`);
    //let { metadata } = await import(`../routes/2021/01/+page.svelte`);
    return metadata;
};

/**
 * Generates a metadata object covering all valid puzzles to display in menus, etc.
 */
export async function generateMetadata () {
    
    //const yearPages = import.meta.glob("../routes/20*/+page.svelte");
    const allPuzzles = import.meta.glob("../routes/20*/day/[!template]*/+page.svelte");

    //const yearPageLinks = getPages("", yearPages);
    const allPuzzleLinks = getPages("", allPuzzles);

    // console.log("yp", yearPages);
    // console.log("ap", allPuzzles);
    // console.log("ypl", yearPageLinks);
    // console.log("apl", allPuzzleLinks);

    let metadataToWrite = {};
    let miniMetadata;

    for (const puzzleLink of allPuzzleLinks) {
        miniMetadata = await loadPageMetadata(puzzleLink.slice(3, 5), puzzleLink.slice(-2));
        //{ metadata } = await import(puzzleLink);
        // console.log(miniMetadata);
        metadataToWrite[miniMetadata.year + miniMetadata.day] = miniMetadata;
    }

    // console.log(metadata);
    metadata.set(metadataToWrite);

}