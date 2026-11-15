<script lang="ts">
  import { LineText, min_box, lockstep_scrolling, ButtonPositional, ThemeToggle, Link, Document } from '@legitminh/keyflow';
  import Grid from '$lib/components/Grid.svelte';
  import ProjectBrowser from '$lib/components/ProjectBrowser.svelte';
  import type { ProjectId } from '$lib/data/projects';
  let active = $state<ProjectId | null>(null);
</script>
<Document>
  {#if !active}
  <div class="content">
    <LineText> <h1>minh.website</h1> </LineText>
    <nav class="home-nav" aria-label="Main navigation">
    <LineText><Link href="/about">about</Link></LineText>
    <LineText><Link href="#list.project">list.project</Link></LineText>
    <LineText><Link href="/blog">blog</Link></LineText>
    <LineText><Link href="#list.setting">list.setting</Link></LineText>
    </nav>
  </div>
  <div id="list.project">
    <LineText><h2>list.project</h2></LineText>
  </div>
  {/if}
  <ProjectBrowser bind:active />
  {#if !active}
  <div id="list.setting">
    <LineText><h2>list.setting</h2></LineText>
    <LineText><ThemeToggle></ThemeToggle></LineText>

    <LineText><ButtonPositional on_close={() => {
      lockstep_scrolling.set(!lockstep_scrolling.enabled);
    }}>{lockstep_scrolling.enabled ? 'deactivate' : 'activate'} lockstep scroll</ButtonPositional></LineText>

    <LineText><ButtonPositional on_close={() => {
      min_box.set(min_box.value * 0.8);
    }}>zoom out</ButtonPositional></LineText>

    <LineText><ButtonPositional on_close={() => {
      min_box.set(min_box.value * 1.25);
    }}>zoom in</ButtonPositional></LineText>
  </div>
  {/if}
</Document>
<Grid />
<style>
  .content {
    display: flex;
    flex-direction: column;
  }
  .home-nav { display: flex; flex-wrap: wrap; }
  .content :global(h1) { font-size: clamp(32px, 7vw, 76px); line-height: 1.2; letter-spacing: -.05em; }
  @media (max-width: 600px) {
    .home-nav :global(button) { font-size: 18px; line-height: 32px; }
    :global(#list.project h2) { font-size: 30px; line-height: 1.3; }
  }
</style>
