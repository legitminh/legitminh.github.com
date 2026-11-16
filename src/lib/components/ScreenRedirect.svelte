<script lang="ts">
  import { t } from '$lib/i18n.svelte';
  import { onMount } from 'svelte';
  import { Document, LineText, Link } from '@legitminh/keyflow';
  let { screen }: { screen: string } = $props();
  const destination = $derived(`/#${screen}`);
  onMount(() => { window.location.replace(destination); });
</script>

<svelte:head>
  <meta http-equiv="refresh" content={`0;url=${destination}`} />
  <link rel="canonical" href="/" />
</svelte:head>

<Document><LineText><Link href={destination}>{t("open this screen on the home page")}</Link></LineText></Document>
