<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { t, localizedImage } from '$lib/i18n.svelte';
  import { ButtonPositional, StaticButton, LineText, Link, Image, state_viewport, scroll_to, scroll_to_hash } from '@legitminh/keyflow';
  import Project from './Project.svelte';
  import GuideSection from './GuideSection.svelte';
  import ReleaseDownloads from './ReleaseDownloads.svelte';
  import SettingsLink from './SettingsLink.svelte';
  import { contentScreens, isContentScreen, type ScreenId } from '$lib/data/screens';
  import { noteworkRelease } from '$lib/data/releases';
  import {
    projects, platforms, pwaInstallation, nativeInstallation, discreteInstallation, noteworkInstallation,
    type ProjectId, type GuideTab, type Platform
  } from '$lib/data/projects';

  let { active = $bindable(null) }: { active?: ScreenId | null } = $props();
  let tab = $state<GuideTab>('usage');
  let platform = $state<Platform>('macos');
  let project = $derived(projects.find(p => p.id === active));
  let contentScreen = $derived(active && isContentScreen(active) ? contentScreens[active] : null);
  let heading = $state<HTMLHeadingElement>();
  let count = $state(0);
  let currentHash = '';
  let listScroll = 0;
  const scrollPositions = new Map<string, number>();

  function detectPlatform(): Platform {
    const ua = navigator.userAgent;
    if (/Android/i.test(ua)) return 'android';
    if (/iPhone|iPad|iPod/i.test(ua) || (/Mac/i.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
    if (/Win/i.test(ua)) return 'windows';
    if (/Linux/i.test(ua)) return 'linux';
    return 'macos';
  }

  async function readHash(initial = false) {
    const hash = window.location.hash;
    const match = hash.match(/^#project\/(notework|keyflow|discrete)(?:\/(usage|configuration|installation))?(?:\/(macos|windows|linux|ios|android))?$/);
    const wasActive = active;
    const contentId = hash.slice(1);
    const nextActive = match ? match[1] as ProjectId : isContentScreen(contentId) ? contentId : null;
    if (currentHash !== hash && !initial) scrollPositions.set(currentHash, state_viewport.y);
    if (!wasActive && nextActive) listScroll = state_viewport.y;
    active = nextActive;
    tab = match?.[2] as GuideTab || 'usage';
    if (match?.[3]) platform = match[3] as Platform;
    const changed = currentHash !== hash;
    currentHash = hash;
    if (!changed && !initial) return;
    if (contentScreen) await contentScreen.load().catch(() => {});
    if (currentHash !== hash) return;
    await tick();
    // Restore screen positions through the shared Keyflow scrolling API.
    if (!active && hash === '#list.setting') {
      scroll_to_hash();
      return;
    }
    if (active || wasActive) {
      const y = scrollPositions.get(hash) ?? (active ? 0 : listScroll);
      scroll_to(y, 'instant');
      heading?.focus({ preventScroll: true });
      if (!active) document.querySelector<HTMLButtonElement>(`[data-project="${wasActive}"] button`)?.focus({ preventScroll: true });
    }
  }

  function open(id: ProjectId) {
    window.location.hash = `project/${id}/usage`;
  }

  function back() {
    window.location.hash = contentScreen ? contentScreen.parent : 'list.project';
  }

  onMount(() => {
    platform = detectPlatform();
    void readHash(true);
    const handleHash = () => { void readHash(); };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  });

</script>

<svelte:head>
  <title>{project ? `${t(project.name)} · ${t(tab)} · minh.website` : contentScreen ? `${t(contentScreen.name)} · minh.website` : 'minh.website'}</title>
  <meta name="description" content={t(project?.goal ?? contentScreen?.name ?? 'projects by minh: notework, siêu việt, keyflow, discrete, and more.')} />
</svelte:head>

{#if project}
  <article class="project-screen">
    <LineText><StaticButton keys="esc" on_close={back}>← {t("all projects")}</StaticButton><SettingsLink /></LineText>
    <header>
      <LineText><h1 bind:this={heading} tabindex="-1">{project.name}</h1></LineText>
      <LineText><p>{t(project.goal)}</p></LineText>
      <LineText><div class="project-actions">
        {#if project.app}<Link href={project.app}>{t("open")} {project.name} ↗</Link>{/if}
        <Link href={project.github}>github ↗</Link>
      </div></LineText>
    </header>

    <LineText><nav class="guide-nav" aria-label={`${project.name} · ${t("guide")}`}>
      {#each ['usage', 'configuration', 'installation'] as item}
        <span class:current={tab === item} aria-current={tab === item ? 'page' : undefined}><Link href={`#project/${project.id}/${item}`}>{t(item)}</Link></span>
      {/each}
    </nav></LineText>

    <div class="guide-content">
      {#if tab === 'installation'}
        {#if project.id === 'discrete'}
          {#each discreteInstallation as section}<GuideSection {section} />{/each}
        {:else if project.id === 'keyflow'}
          <GuideSection section={{
            title: 'install in a svelte 5 project',
            text: 'keyflow is a developer library, not an app to install on a phone. use the same package on macos, windows, or linux. it is distributed through github releases, not the npm registry.',
            steps: [
              'create or open a svelte 5 project. for the repository demo, use node 24 and pnpm.',
              'install the release archive with the command below.',
              'follow usage to mount the root and add a button. configuration covers defaults and input frames.'
            ],
            code: 'pnpm add https://github.com/legitminh/keyflow/releases/download/v0.9.0/legitminh-keyflow-0.9.0.tgz',
            link: { label: 'current releases', href: `${project.github}/releases` }
          }} />
        {:else}
          <LineText><p>{t(project.id === 'notework' ? 'download the app for your system, or use the web app in any browser.' : 'choose your system. builds are distributed through github releases.')}</p></LineText>
          <LineText><nav class="platform-nav" aria-label={t("operating system")}>
            {#each platforms as system}
              <span class:current={platform === system.id} aria-current={platform === system.id ? 'page' : undefined}><Link href={`#project/${project.id}/installation/${system.id}`}>{t(system.label)}</Link></span>
            {/each}
          </nav></LineText>
          {#if project.id === 'notework'}
            {#if platform === 'ios' || platform === 'android'}
              <LineText><div class="store-buttons">
                <ButtonPositional disabled>{t(platform === 'ios' ? 'app store · coming soon' : 'google play · coming soon')}</ButtonPositional>
              </div></LineText>
            {:else}
              <ReleaseDownloads {platform} repo="notework" fallback={noteworkRelease} />
            {/if}
            <GuideSection section={noteworkInstallation[platform]} />
            <LineText><h2 id="notework-web-app">{t("web app")}</h2></LineText>
            <LineText><p>{t("no download needed. open notework in a browser, or install it as a web app (pwa) with the steps below.")}</p></LineText>
            <LineText><Link href={project.app!}>{t("open the notework web app")} ↗</Link></LineText>
            <GuideSection section={pwaInstallation[platform]} />
            <GuideSection section={{ title: 'first launch and offline use', text: 'let the app load once online. afterward, browser-stored notes can be created and edited offline; github sync needs a connection. installed apps may use separate browser storage, so set up notes in the app you plan to use. if installation is unavailable, use the same url in a regular browser tab.' }} />
          {:else}
            <ReleaseDownloads {platform} />
            <GuideSection section={nativeInstallation[platform]} />
          {/if}
        {/if}
      {:else}
        {#if tab === 'usage' && project.image}
          <figure>
            <Image href={localizedImage(project.image.src)} alt={t(project.image.alt)} width="100%" maxWidth="100%" />
            <LineText><figcaption>{t(project.image.caption)}</figcaption></LineText>
          </figure>
        {/if}
        {#each project[tab] as section, index}
          <GuideSection {section} />
          {#if project.id === 'keyflow' && tab === 'usage' && index === 0}
            <LineText><div class="try-control">
              <ButtonPositional on_close={() => count++}>{t("try keyflow · count")}: {count}</ButtonPositional>
              <p aria-live="polite">{count === 0 ? t('click, tap, or use the displayed shortcut.') : `${count} ${t(count === 1 ? 'activation' : 'activations')}.`}</p>
            </div></LineText>
          {/if}
        {/each}
      {/if}
    </div>
  </article>
{:else if contentScreen}
  <article class="content-screen">
    <LineText><StaticButton keys="esc" on_close={back}>← {t(contentScreen.parent === 'list.project' ? 'all projects' : contentScreen.parent === 'blog/nan' ? 'nan' : contentScreen.parent || 'home')}</StaticButton></LineText>
    <LineText><h1 bind:this={heading} tabindex="-1">{t(contentScreen.name)}</h1></LineText>
    {#await contentScreen.load()}
      <LineText><p role="status">{t("loading…")}</p></LineText>
    {:then module}
      {@const Screen = module.default}
      <Screen />
    {:catch}
      <LineText><p>{t("this screen could not be loaded.")}</p><ButtonPositional on_close={() => window.location.reload()}>{t("retry")}</ButtonPositional></LineText>
    {/await}
  </article>
{:else}
  <Project onselect={open} />
{/if}

<style>
  .project-screen, .content-screen { padding-bottom: var(--min-box); }
  h1:focus { outline: none; }
  .project-actions, .guide-nav, .platform-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0 calc(var(--min-box) / 4);
  }
  .guide-nav, .platform-nav { margin-block: calc(var(--min-box) / 2); }
  .current { text-decoration: underline; text-underline-offset: .2em; }
  figure {
    max-width: calc(var(--min-box) * 20);
    margin: var(--min-box) calc(var(--min-box) / 4);
  }
</style>
