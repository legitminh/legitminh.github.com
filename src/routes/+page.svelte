<script lang="ts">
  import { min_box } from '$lib/stores/layout.svelte';
  import ButtonPositional from '$lib/components/ButtonPositional.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import Link from '$lib/components/Link.svelte';
  import Grid from '$lib/components/Grid.svelte';
  import Document from '$lib/components/scroll/vertical/Document.svelte';
</script>
<Document>
  <div class="content">
    <span>
      website under construction.
    </span>
    <div style="flex-direction: column; display: flex;">
    <Link href="/about">about</Link>

    <ButtonPositional on_close={() => {
      min_box.set(min_box.value * 0.8);
    }}>zoom out</ButtonPositional>

    <ButtonPositional on_close={() => {
      min_box.set(min_box.value * 1.25);
    }}>zoom in</ButtonPositional>

    <ThemeToggle></ThemeToggle>
    </div>
  </div>
</Document>
<Grid />
<style>
  .content {
    display: flex;
    flex-direction: column;
  }
</style>