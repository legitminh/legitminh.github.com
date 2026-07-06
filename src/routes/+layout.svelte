<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    import "../app.css";
    let { children } = $props();
    // import { onMount } from "svelte";
    import { set_min_box } from "$lib/stores/layout";
    import { set_theme_id } from "$lib/stores/theme";
    set_min_box(48);
    set_theme_id(1);

    console.log("layout.svelte");
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
