<script lang="ts">
  import { onMount } from 'svelte';
  import { min_box } from '$lib/stores/layout';

  let viewport_width = $state(0);
  let viewport_height = $state(0);

  const updateViewport = () => {
    if (typeof window === 'undefined') {
      return;
    }

    viewport_width = window.innerWidth;
    viewport_height = window.innerHeight;
  };

  onMount(() => {
    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  });

  let box = $derived(Math.max(1, $min_box || 1));
  let columns = $derived(Math.max(1, Math.floor(viewport_width / box)));
  let rows = $derived(Math.max(1, Math.floor(viewport_height / box)));
  let cells = $derived(Array.from({ length: columns * rows }, (_, index) => index + 1));
</script>

<div class="grid-layer" aria-hidden="true">
  {#each cells as value, index (value)}
    {@const column = index % columns}
    {@const row = Math.floor(index / columns)}
    <div
      class="grid-cell"
      style={`width:${box}px;height:${box}px;left:${column * box}px;top:${row * box}px;font-size:${Math.max(10, box * 0.24)}px;`}
    >
      {value}
    </div>
  {/each}
</div>

<style>
  .grid-layer {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .grid-cell {
    position: absolute;
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
