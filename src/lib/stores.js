import { writable, derived } from 'svelte/store';

// Metadata set by a page and passed up to its layout
// TODO: this should just be in some metadta json really
export let pageTitle = writable('undefined');
export let longRuntime = writable(false);

// Current default data
export let currentDefaultData = writable("");

// Current value in the user custom input box and a safe value we can modify
export let currentUserInput = writable("");
export let currentUserData = writable("");

// Boolean set in GetUserData.svelte specifying whether or not we should run on user data
export let runOnUserData = writable(false);

// Derived store that increments by one every time currentUserData is changed
export let userDataChanges = derived(currentUserInput, $currentUserInput => userDataChanges + 1, 0);

// This store is set to the same as userDataChanges whenever currentUserData is preprocessed. This normally happens in
// RunnerPart.svelte.
export let userDataPreprocessed = writable(-1);
