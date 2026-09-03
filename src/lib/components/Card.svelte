<!-- A summary card with name and visualization -->
<script lang="ts">
  let {name, href, visualization} = $props();
  import Link from "$lib/components/Link.svelte";
</script>
<div class="card">
  <Link href={href}>{name}</Link>
  <img src={visualization} alt={name}/>
</div>

<style>
  img {
    /* constraining to the card's width, not the viewport */
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  .card {
    display: flex;
    flex-direction: column;
    /* keep a reasonable max-width for cards, measured in multiples of --min-box */
    max-width: calc(var(--min-box) * 6);
    box-sizing: border-box;
  }
</style>