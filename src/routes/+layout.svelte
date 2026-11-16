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

<Keyflow options={{ storagePrefix: '', keys: key_presets.alphanumeric }}>
  {@render children()}
</Keyflow>
