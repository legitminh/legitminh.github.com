<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    let { children } = $props();
    // import { onMount } from "svelte";
    // import { set_min_box } from "$lib/stores/layout";

    // function update() {
    //     set_min_box(Math.min(window.innerWidth, window.innerHeight) / 40);
    // }

    // onMount(() => {
    //     update();

    //     window.addEventListener("resize", update);

    //     return () => window.removeEventListener("resize", update);
    // });
</script>

<svelte:head>
<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
