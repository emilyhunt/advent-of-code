import { writable, derived, readable } from 'svelte/store';
import { cyrb53 } from '$lib/hash'
import { generateMetadata } from './pages';

// Metadata set by a page and passed up to its layout
export let pageName = writable("none");

// export let metadata = writable({generated: false});
// export let metadata = readable(
//     new Object(), 
//     function start(set) {
//         set(generateMetadata());
//         return function stop() {};
//     }
// );

let metadataGenerated = false;
export let metadata = generateMetadata();
metadataGenerated = true;
// export let metadata = writable(Object());
// let metadataGenerated = false;

export async function initMetadata() {};

// export async function initMetadata() {
//     if (!metadataGenerated) {
//         console.log("Initialising metadata...")
//         let metadataToWrite = await generateMetadata();
//         metadata.set(metadataToWrite);
//         // console.log("- fetch completed");
//         // console.log(metadataToWrite);
//     }
// };

// Current default data
export let currentDefaultData = writable("");
export let currentExampleData = writable("");

// Current value in the user custom input box and a safe value we can modify
export let currentUserInput = writable("");
// export let previousUserInput = writable("");
export let currentUserData = writable("");

export let hashedUserInput = derived(currentUserInput, $currentUserInput => cyrb53($currentUserInput));
export let hashedPreviousUserInput = writable("");

// Boolean set in GetUserData.svelte specifying whether or not we should run on user data
export let runOnUserData = writable(false);

// This store is set to the same as userDataChanges whenever currentUserData is preprocessed. This normally happens in
// RunnerPart.svelte.
//export let userDataPreprocessed = writable(true);

// Derived store that detects if currentUserInput has changed
export let userDataHasChanged = derived(
    [hashedUserInput, hashedPreviousUserInput], 
    ([$hashedUserInput, $hashedPreviousUserInput]) => {
        if ($hashedUserInput !== $hashedPreviousUserInput) {
            return true;
        } else {
            return false;
        }
    });
