<script lang="ts">
  import { min_box } from '$lib/stores/layout.svelte';
  import { state_viewport } from '$lib/stores/camera.svelte';

  let columns = $derived(state_viewport.viewport_width);
  let rows = $derived(state_viewport.viewport_height);
  let cells = $derived(
    Array.from({ length: columns * rows }, (_, index) => index + 1)
  );
</script>

<div class="grid-layer" aria-hidden="true">
  {#each cells as value, index (value)}
    {@const column = index % columns}
    {@const row = Math.floor(index / columns)}
    <div
      class="grid-cell"
      style={`width:${min_box.value}px;height:${min_box.value}px;left:${column * min_box.value}px;top:${row * min_box.value}px;font-size:${Math.max(10, min_box.value * 0.24)}px;`}
    >
      {value}
    </div>
  {/each}
</div>

<style>
  .grid-layer {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .grid-cell {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid color-mix(in srgb, var(--primary) 16%, transparent);
    box-sizing: border-box;
    color: color-mix(in srgb, var(--primary) 14%, transparent);
    opacity: 0.9;
    line-height: 1;
  }
</style>
