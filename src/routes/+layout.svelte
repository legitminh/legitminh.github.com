<script lang="ts">
  import { tick, onMount } from 'svelte';
  import { language, initializeLanguage } from '$lib/i18n.svelte';
  import { afterNavigate } from '$app/navigation';
  import { Keyflow, key_presets, scroll_to_hash } from '@legitminh/keyflow';
  import '@legitminh/keyflow/styles.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
  onMount(initializeLanguage);
  $effect(() => { document.documentElement.lang = language.current; });

  // Router integration belongs to the host; Keyflow also supports plain Svelte apps.
  afterNavigate(async () => {
    await tick();
    scroll_to_hash();
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Keyflow options={{ storagePrefix: '', keys: key_presets.alphanumeric, keypathVisible: 'auto' }}>
  {@render children()}
</Keyflow>

<style>
  /* Headings inherit the body's one-box line-height, which is shorter than their
     font size, so wrapped lines overlap. Give them two boxes per line and take the
     extra half box off each margin, so a one-line heading sits exactly where it did. */
  :global(h1) {
    line-height: calc(var(--min-box) * 2);
    margin-block: calc(0.67em - var(--min-box) / 2);
  }
  :global(h2) {
    line-height: calc(var(--min-box) * 2);
    margin-block: calc(0.83em - var(--min-box) / 2);
  }
</style>
