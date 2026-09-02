<!-- A summary card with name and visualization -->
<script lang="ts">
  let {name, href, visualization} = $props();
  import Link from "$lib/components/Link.svelte";
  import LineText from "./LineText.svelte";
</script>
<div class="card">
  <LineText><Link href={href}>{name}</Link></LineText>
  <img src={visualization} alt={name}/>
</div>

<style>
  img {
    width: calc(3 * var(--min-box));
    height: calc(3 * var(--min-box));
    object-fit: contain;
  }
</style>