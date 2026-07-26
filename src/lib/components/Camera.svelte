<!-- Camera.svelte -->
<script lang="ts">
  export const {children} = $props();

  import { update_viewport, state_viewport, page_down, page_up, y_pixels } from "$lib/stores/camera.svelte";
  import { onMount } from "svelte";
  import Interactable from "./Interactable.svelte";

  
  onMount(() => {
    update_viewport();
    window.addEventListener('resize', update_viewport);
    return () => {
      window.removeEventListener('resize', update_viewport);
    };
  });
</script>

<div class="viewport">
    <div
      bind:this={state_viewport.world}
        class="world"
        style:transform={`translateY(-${y_pixels()}px)`}
    >
      <Interactable on_close={page_down} priority={-2}>
        &rightarrow;
      </Interactable>
      <Interactable on_close={page_up} priority={-1}>
        &leftarrow;
      </Interactable>
      {@render children()}
    </div>
</div>

<style>
  .world {
    position: relative;
    z-index: 1;
  }
</style>