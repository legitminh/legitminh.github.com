<script lang="ts">

  let { children } =  $props();
</script>
<div style="padding-left: var(--min-box)">
  {@render children?.()}
</div>