<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { ButtonPositional, StaticButton, LineText, Link, Image, state_viewport, y_pixels, update_viewport, lockstep_scrolling } from '@legitminh/keyflow';
  import Project from './Project.svelte';
  import GuideSection from './GuideSection.svelte';
  import ReleaseDownloads from './ReleaseDownloads.svelte';
  import { contentScreens, isContentScreen, type ScreenId } from '$lib/data/screens';
  import {
    projects, platforms, pwaInstallation, nativeInstallation, discreteInstallation,
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
    const match = hash.match(/^#project\/(notework|sieuviet|keyflow|discrete)(?:\/(usage|configuration|installation))?(?:\/(macos|windows|linux|ios|android))?$/);
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
    // Keyflow uses a transformed camera for lockstep scrolling. Reset both the
    // camera and native offset when swapping screens; restore the card list on Back.
    if (active || wasActive) {
      update_viewport();
      const y = scrollPositions.get(hash) ?? (active ? 0 : listScroll);
      state_viewport.y = y;
      await y_pixels.set(y, { duration: 0 });
      if (state_viewport.viewport) state_viewport.viewport.scrollTop = lockstep_scrolling.enabled ? 0 : y;
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
  <title>{project ? `${project.name} · ${tab} · minh.website` : contentScreen ? `${contentScreen.name} · minh.website` : 'minh.website'}</title>
  <meta name="description" content={project?.goal ?? contentScreen?.name ?? 'projects by minh: notework, siêu việt, keyflow, discrete, and more.'} />
</svelte:head>

{#if project}
  <article class="project-screen">
    <LineText><StaticButton keys="esc" on_close={back}>← all projects</StaticButton></LineText>
    <header>
      <LineText><h1 bind:this={heading} tabindex="-1">{project.name}</h1></LineText>
      <LineText><p>{project.goal}</p></LineText>
      <LineText><div class="project-actions">
        {#if project.app}<Link href={project.app}>open {project.name} ↗</Link>{/if}
        <Link href={project.github}>github ↗</Link>
      </div></LineText>
    </header>

    <LineText><nav class="guide-nav" aria-label={`${project.name} guide`}>
      {#each ['usage', 'configuration', 'installation'] as item}
        <span class:current={tab === item} aria-current={tab === item ? 'page' : undefined}><Link href={`#project/${project.id}/${item}`}>{item}</Link></span>
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
            code: 'pnpm add https://github.com/legitminh/keyflow/releases/download/v0.8.3/legitminh-keyflow-0.8.3.tgz',
            link: { label: 'current releases', href: `${project.github}/releases` }
          }} />
        {:else}
          <LineText><p>{project.id === 'notework' ? 'install from your browser. no app-store download or account required.' : 'choose your system. builds are distributed through github releases.'}</p></LineText>
          <LineText><nav class="platform-nav" aria-label="operating system">
            {#each platforms as system}
              <span class:current={platform === system.id} aria-current={platform === system.id ? 'page' : undefined}><Link href={`#project/${project.id}/installation/${system.id}`}>{system.label}</Link></span>
            {/each}
          </nav></LineText>
          {#if project.id === 'notework'}
            <LineText><Link href={project.app!}>open notework to install ↗</Link></LineText>
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
            <Image href={project.image.src} alt={project.image.alt} width="100%" maxWidth="100%" />
            <LineText><figcaption>{project.image.caption}</figcaption></LineText>
          </figure>
        {/if}
        {#each project[tab] as section, index}
          <GuideSection {section} />
          {#if project.id === 'keyflow' && tab === 'usage' && index === 0}
            <LineText><div class="try-control">
              <ButtonPositional on_close={() => count++}>try keyflow · count: {count}</ButtonPositional>
              <p aria-live="polite">{count === 0 ? 'click, tap, or use the displayed shortcut.' : `${count} ${count === 1 ? 'activation' : 'activations'}.`}</p>
            </div></LineText>
          {/if}
        {/each}
      {/if}
    </div>
  </article>
{:else if contentScreen}
  <article class="content-screen">
    <LineText><StaticButton keys="esc" on_close={back}>← {contentScreen.parent === 'list.project' ? 'all projects' : contentScreen.parent === 'blog/nan' ? 'nan' : contentScreen.parent || 'home'}</StaticButton></LineText>
    <LineText><h1 bind:this={heading} tabindex="-1">{contentScreen.name}</h1></LineText>
    {#await contentScreen.load()}
      <LineText><p role="status">loading…</p></LineText>
    {:then module}
      {@const Screen = module.default}
      <Screen />
    {:catch}
      <LineText><p>this screen could not be loaded.</p><ButtonPositional on_close={() => window.location.reload()}>retry</ButtonPositional></LineText>
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
