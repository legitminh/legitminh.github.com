<script lang="ts">
  import { onMount } from 'svelte';
  import { LineText, Link } from '@legitminh/keyflow';
  import { plannedBuilds, platforms, type Platform } from '$lib/data/projects';
  import { platformAssets, releasesUrl, type Release } from '$lib/data/releases';

  let { platform }: { platform: Platform } = $props();
  let releases = $state<Release[]>([]);
  let status = $state<'loading' | 'ready' | 'unavailable'>('loading');
  let builds = $derived(platformAssets(releases, platform));
  let label = $derived(platforms.find(p => p.id === platform)!.label);

  onMount(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    void fetch('https://api.github.com/repos/legitminh/vietmoi/releases?per_page=30', {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' }
    }).then(async response => {
      if (!response.ok) throw new Error('Release list unavailable');
      const data: unknown = await response.json();
      if (!Array.isArray(data)) throw new Error('Invalid release list');
      releases = data.filter((r): r is Release =>
        r && typeof r.tag_name === 'string' && Array.isArray(r.assets) &&
        r.assets.every((a: Release['assets'][number]) =>
          typeof a.name === 'string' && typeof a.browser_download_url === 'string')
      );
      status = 'ready';
    }).catch(() => { status = 'unavailable'; }).finally(() => clearTimeout(timer));
    return () => { clearTimeout(timer); controller.abort(); };
  });
</script>

<aside class="release-downloads" aria-label={`${label} downloads`}>
  {#if builds}
    <LineText><p>{builds.release.tag_name.toLowerCase()}{builds.release.prerelease ? ' · preview' : ''}</p></LineText>
    {#each builds.assets as asset}
      <LineText><Link href={asset.browser_download_url}>download {asset.name.toLowerCase()} ↓</Link></LineText>
    {/each}
    <LineText><Link href={builds.release.html_url}>release notes ↗</Link></LineText>
  {:else}
    <LineText><p role="status">
      {status === 'loading' ? 'checking github releases…' : status === 'unavailable' ? 'release list unavailable · provisional link' : 'release upload pending'}
    </p></LineText>
    <LineText><Link href={`${releasesUrl}/latest/download/${plannedBuilds[platform]}`}>planned {label} download ↓</Link></LineText>
    <LineText><p>provisional filename: <code>{plannedBuilds[platform]}</code>. this link will work after the build is published. published assets replace it automatically.</p></LineText>
    <LineText><Link href={releasesUrl}>all github releases ↗</Link></LineText>
  {/if}
</aside>
