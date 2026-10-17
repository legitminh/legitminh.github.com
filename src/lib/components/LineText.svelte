<script lang="ts">
  import { must_view } from "$lib/actions/must_view";

  let { children } =  $props();
</script>
<div class="line" use:must_view>
  {@render children?.()}
</div>
<style>
  .line{
    max-width: calc(var(--min-box) * 32); 
    margin-left: calc(var(--min-box) / 4);
    margin-right: calc(var(--min-box) / 4);
  }
</style>
