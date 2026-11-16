<!-- A summary card with name and visualization -->
<script lang="ts">
  let {name, href = '', visualization = null, onselect, projectId}: {
    name: string; href?: string; visualization?: string | null;
    onselect?: () => void; projectId?: string;
  } = $props();
  import { Link, ButtonPositional, must_view } from '@legitminh/keyflow';
</script>
<div class="card" data-project={projectId} use:must_view>
  {#if visualization}
  <img src={visualization} alt={name}/>
  {/if}
  <div class="label">
    {#if onselect}
      <ButtonPositional on_close={onselect}>{name}</ButtonPositional>
    {:else}
      <Link href={href}>{name}</Link>
    {/if}
  </div>
</div>

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
