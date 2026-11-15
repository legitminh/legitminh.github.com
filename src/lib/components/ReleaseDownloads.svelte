<script lang="ts">
  import { onMount } from 'svelte';
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
    <p class="release-status">{builds.release.tag_name}{builds.release.prerelease ? ' · preview' : ''}</p>
    {#each builds.assets as asset}
      <a class="action" href={asset.browser_download_url}>Download {asset.name} ↓</a>
    {/each}
    <a class="release-notes" href={builds.release.html_url} target="_blank" rel="noreferrer">Release notes ↗</a>
  {:else}
    <p class="release-status" role="status">
      {status === 'loading' ? 'Checking GitHub Releases…' : status === 'unavailable' ? 'Release list unavailable · provisional link' : 'Release upload pending'}
    </p>
    <a class="action" href={`${releasesUrl}/latest/download/${plannedBuilds[platform]}`}>Planned {label} download ↓</a>
    <p class="release-detail">Provisional filename: <code>{plannedBuilds[platform]}</code>. This link will work after the build is published. Published assets replace it automatically.</p>
    <a href={releasesUrl} target="_blank" rel="noreferrer">All GitHub releases ↗</a>
  {/if}
</aside>
