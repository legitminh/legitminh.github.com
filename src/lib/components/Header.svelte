<script lang="ts">
  import LineText from "./LineText.svelte";
  import Link from "./Link.svelte";
</script>
<div class = "header">
<LineText> <Link href="/"> Home</Link> </LineText>
</div>
<style>
  .header {
    margin-top: calc(var(--min-box) / 4);
  }
</style>