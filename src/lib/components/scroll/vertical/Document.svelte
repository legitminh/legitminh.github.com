<script lang="ts">
  import ScrollIndicator from "./ScrollIndicator.svelte";
  import Camera from "./Camera.svelte";
  let { children } = $props();
</script>
<Camera>
  {@render children()}
</Camera>
<ScrollIndicator />