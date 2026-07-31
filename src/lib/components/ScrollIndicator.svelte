<script lang="ts">
  import { page_down, page_up, state_viewport } from "$lib/stores/camera.svelte";
  import { onMount } from "svelte";
  import Interactable from "./Interactable.svelte";

  onMount(() => {
     // #region mouse events
    window.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        page_down();
      } else {
        page_up();
      }
    }, { passive: false });
  });
</script>
{#if (state_viewport.world_height !== 1)}
<div class="scroll">
  <Interactable on_close={page_down} priority={-2}>
    &downarrow;
  </Interactable>
  <Interactable on_close={page_up} priority={-1}>
    &uparrow;
  </Interactable>
</div>
{/if}

<style>
  .scroll {
    height: calc(var(--min-box));
  }
</style>