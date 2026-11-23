<script lang="ts">
  import { onMount } from 'svelte';
  import { LineText, Link } from '@legitminh/keyflow';
  import { t } from '$lib/i18n.svelte';
  import { platforms, type Platform } from '$lib/data/projects';
  import { platformAssets, publishedRelease, releasesUrlFor, type Release } from '$lib/data/releases';

  let { platform, repo = 'vietmoi', fallback = publishedRelease }: { platform: Platform; repo?: string; fallback?: Release } = $props();
  let releasesUrl = $derived(releasesUrlFor(repo));
  let releases = $state<Release[]>([]);
  let status = $state<'loading' | 'ready' | 'unavailable'>('loading');
  let builds = $derived(platformAssets(releases, platform, repo) ?? platformAssets([fallback], platform, repo));
  let label = $derived(platforms.find(p => p.id === platform)!.label);

  onMount(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    void fetch(`https://api.github.com/repos/legitminh/${repo}/releases?per_page=30`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' }
    }).then(async response => {
      if (!response.ok) throw new Error('Release list unavailable');
      const data: unknown = await response.json();
      if (!Array.isArray(data)) throw new Error('Invalid release list');
      releases = data.filter((r): r is Release =>
        r && typeof r.tag_name === 'string' && typeof r.html_url === 'string' &&
        r.html_url.startsWith(`${releasesUrl}/tag/`) && Array.isArray(r.assets) &&
        r.assets.every((a: Release['assets'][number]) =>
          typeof a.name === 'string' && typeof a.browser_download_url === 'string')
      );
      status = 'ready';
    }).catch(() => { status = 'unavailable'; }).finally(() => clearTimeout(timer));
    return () => { clearTimeout(timer); controller.abort(); };
  });
</script>

<aside class="release-downloads" aria-label={`${t(label)} · ${t('downloads')}`}>
  {#if builds}
    <LineText><p>{builds.release.tag_name.toLowerCase()}{builds.release.prerelease ? ` · ${t('development release')}` : ''}</p></LineText>
    {#each builds.assets as asset}
      <LineText><Link href={asset.browser_download_url}>{t('download')} {asset.name.toLowerCase()} ↓</Link></LineText>
    {/each}
    <LineText><Link href={builds.release.html_url}>{t('release notes')} ↗</Link></LineText>
  {/if}
  {#if status === 'loading'}<LineText><p role="status">{t('checking github releases…')}</p></LineText>{/if}
  {#if status === 'unavailable'}<LineText><p role="status">{t('the release list is unavailable. verified download links remain available here.')}</p></LineText>{/if}
  <LineText><Link href={releasesUrl}>{t('all github releases')} ↗</Link></LineText>
</aside>
