

<script>
    import { pageTitle, longRuntime } from '$lib/stores';
    import { page } from '$app/stores';

    // Page settings
    $pageTitle = "Sonar Sweep";  // Add title for page here
    $longRuntime = false;  // Warning for if the page takes a while to run (> 5 seconds)

    // Fetch data
    import data from "./data.txt?raw"

    // Define code runners
    function part1 () {};

    function part2 () {};
</script>

<p>{data}</p>