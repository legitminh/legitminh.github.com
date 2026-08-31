<script lang="ts">

  let { children } =  $props();
</script>
<div style="max-width: calc(var(--min-box) * 32);">
  {@render children?.()}
</div>
