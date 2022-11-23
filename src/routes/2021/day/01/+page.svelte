<script context="module">
    // @ts-ignore
    export async function load({ stuff }) { return { props: stuff }; }
</script>

<script>
    import { pageTitle, longRuntime } from '$lib/stores';
    import { page } from '$app/stores';

    // Page settings
    $pageTitle = "Sonar Sweep";  // Add title for page here
    $longRuntime = false;  // Warning for if the page takes a while to run (> 5 seconds)

    // Fetch data
    export let defaultInput;

    // Define code runners
    function part1 () {};

    function part2 () {};
</script>

<p>{defaultInput}</p>