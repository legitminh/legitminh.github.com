<script lang="ts">

  let { children } =  $props();
</script>
<div class="line">
  {@render children?.()}
</div>
<style>
  .line{
    max-width: calc(var(--min-box) * 32); 
    margin-left: calc(var(--min-box) / 4);
    margin-right: calc(var(--min-box) / 4);
  }
</style>
