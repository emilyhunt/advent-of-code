<script>
    let count = 0;

    function handleClick() {
        count += 1;
    }
</script>


<h1>Emily's Advent of Code site</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation.</p>

<br>

<button on:click={handleClick}>
	Interactivity test: Click me!
</button>

<p>You have pressed the button {count} {count === 1 ? 'time' : 'times'}.</p>

<style>
    h1 {
        font-family: 'Source Code Pro', monospace;
        font-size: 40pt;
    }
    p {
       font-family: 'Source Code Pro', monospace; 
       font-size: 15pt;
    }
    button {
        font-family: 'Source Code Pro', monospace; 
        font-size: 16pt;
    }
</style>
