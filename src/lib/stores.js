import { writable } from 'svelte/store';

export let pageTitle = writable('undefined');
export let longRuntime = writable(false);
