<!-- Camera.svelte 
Unlocks scrollability for content within the world
-->

<script lang="ts">
  let { children } = $props();

  import { update_viewport, sync_native_scroll, scroll_to_hash, state_viewport, y_pixels } from "$lib/stores/camera.svelte";
  import { afterNavigate } from '$app/navigation';
  import { onMount, tick } from "svelte";
  import { min_box } from "$lib/stores/layout.svelte";

  afterNavigate(async () => {
    await tick(); // wait for the initial layout (including the saved zoom)
    scroll_to_hash();
  });
  
  $effect(() => {
    void min_box.value; // dependency tracking
    update_viewport();
  });

  onMount(() => {
    update_viewport();
    window.addEventListener('resize', update_viewport);
    return () => {
      window.removeEventListener('resize', update_viewport);
    };
  });
</script>

<div 
    bind:this={state_viewport.viewport}
    onscroll={sync_native_scroll}
    class="viewport">
  <div
    bind:this={state_viewport.world}
    class="world"
    style:transform={`translateY(-${y_pixels.current}px)`}
  >
    {@render children()}
  </div>
</div>

<style>
  .world {
    position: relative;
    z-index: 1;
  }
  .viewport {
    flex-grow: 1;
    overflow: hidden;
  }
</style>
