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
