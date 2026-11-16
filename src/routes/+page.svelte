<script lang="ts">
  import { LineText, min_box, lockstep_scrolling, ButtonPositional, ThemeToggle, Link, Document } from '@legitminh/keyflow';
  import Grid from '$lib/components/Grid.svelte';
  import ScreenBrowser from '$lib/components/ScreenBrowser.svelte';
  import type { ScreenId } from '$lib/data/screens';
  let active = $state<ScreenId | null>(null);
</script>
<Document>
  {#if !active}
  <div class="content">
    <LineText> <h1>minh.website</h1> </LineText>
    <nav class="home-nav" aria-label="main navigation">
    <LineText><Link href="#about">about</Link></LineText>
    <LineText><Link href="#list.project">list.project</Link></LineText>
    <LineText><Link href="#blog">blog</Link></LineText>
    <LineText><Link href="#list.setting">list.setting</Link></LineText>
    </nav>
  </div>
  <div id="list.project">
    <LineText><h2>list.project</h2></LineText>
  </div>
  {/if}
  <ScreenBrowser bind:active />
  {#if !active}
  <div id="list.setting">
    <LineText><h2>list.setting</h2></LineText>
    <LineText><ThemeToggle></ThemeToggle></LineText>

    <LineText><ButtonPositional on_close={() => {
      lockstep_scrolling.set(!lockstep_scrolling.enabled);
    }}>{lockstep_scrolling.enabled ? 'deactivate' : 'activate'} mouse lockstep scroll</ButtonPositional></LineText>

    <LineText><ButtonPositional on_close={() => {
      min_box.set(min_box.value * 0.8);
    }}>zoom out</ButtonPositional></LineText>

    <LineText><ButtonPositional on_close={() => {
      min_box.set(min_box.value * 1.25);
    }}>zoom in</ButtonPositional></LineText>
  </div>
  {/if}
</Document>
{#if !active}<Grid />{/if}
<style>
  .content {
    display: flex;
    flex-direction: column;
  }
  .home-nav { display: flex; flex-wrap: wrap; }
</style>
