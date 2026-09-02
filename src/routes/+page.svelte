<script lang="ts">
  import LineText from '$lib/components/LineText.svelte';
  import { min_box } from '$lib/stores/layout.svelte';
  import ButtonPositional from '$lib/components/ButtonPositional.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import Link from '$lib/components/Link.svelte';
  import Grid from '$lib/components/Grid.svelte';
  import Document from '$lib/components/scroll/vertical/Document.svelte';
  import Indent from '$lib/components/Indent.svelte';
</script>
<Document>
  <div class="content">
    <span>
      minh.website
    </span>
    <div style="flex-direction: column; display: flex;">
    <LineText>settings</LineText>
    <Indent>
      <LineText><ThemeToggle></ThemeToggle></LineText>

      <LineText><ButtonPositional on_close={() => {
        min_box.set(min_box.value * 0.8);
      }}>zoom out</ButtonPositional></LineText>

      <LineText><ButtonPositional on_close={() => {
        min_box.set(min_box.value * 1.25);
      }}>zoom in</ButtonPositional></LineText>
    </Indent>
    <Link href="/about">about</Link>

    <Link href="/project">project</Link>

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