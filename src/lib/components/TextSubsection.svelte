<!-- a titled section whose content is indented behind a left border -->
<script lang="ts">
  let { children, title } = $props();
  import LineText from "./LineText.svelte";
</script>
<div id={title}>
  <LineText><strong>{title}</strong></LineText>
  <div class="content">
    {@render children?.()}
  </div>
</div>
<style>
  .content {
    margin-left: calc(var(--min-box) / 4);
    padding-left: calc(var(--min-box) * 3 / 4);
    border-left: 1px solid var(--primary);
  }
</style>
