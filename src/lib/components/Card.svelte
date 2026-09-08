<!-- A summary card with name and visualization -->
<script lang="ts">
  let {name, href, visualization = null} = $props();
  import Link from "$lib/components/Link.svelte";
</script>
<!-- <a href={href} > -->
<div class="card">
  {#if visualization}
  <img src={visualization} alt={name}/>
  {/if}
  <div class="label">
    <Link href={href}>{name}</Link>
  </div>
</div>
<!-- </a> -->

<style>
  img {
    grid-area: 1 / 1;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    z-index: 0;
  }
  .card {
    position: relative;
    display: grid;
    width: min(calc(6 * var(--min-box)), 100%);
    height: fit-content;
    overflow: hidden;
    box-sizing: border-box;
  }
  .label {
    grid-area: 1 / 1;
    z-index: 1;
    width: 100%;
    background: hsl(from var(--background) h s l / 0.75);
  }
</style>