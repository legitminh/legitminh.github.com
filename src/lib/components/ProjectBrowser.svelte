<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { ButtonPositional, state_viewport, y_pixels, update_viewport, lockstep_scrolling } from '@legitminh/keyflow';
  import Project from './Project.svelte';
  import GuideSection from './GuideSection.svelte';
  import ReleaseDownloads from './ReleaseDownloads.svelte';
  import {
    projects, platforms, pwaInstallation, nativeInstallation, discreteInstallation,
    type ProjectId, type GuideTab, type Platform
  } from '$lib/data/projects';

  let { active = $bindable(null) }: { active?: ProjectId | null } = $props();
  let tab = $state<GuideTab>('usage');
  let platform = $state<Platform>('macos');
  let project = $derived(projects.find(p => p.id === active));
  let heading = $state<HTMLHeadingElement>();
  let count = $state(0);
  let currentHash = '';
  let listScroll = 0;

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
    if (!wasActive && match) listScroll = state_viewport.y;
    active = match ? match[1] as ProjectId : null;
    tab = match?.[2] as GuideTab || 'usage';
    if (match?.[3]) platform = match[3] as Platform;
    const changed = currentHash !== hash;
    currentHash = hash;
    if (!changed && !initial) return;
    await tick();
    // Keyflow uses a transformed camera for lockstep scrolling. Reset both the
    // camera and native offset when swapping screens; restore the card list on Back.
    if (active || wasActive) {
      update_viewport();
      const y = active ? 0 : listScroll;
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
    window.location.hash = 'list.project';
  }

  onMount(() => {
    platform = detectPlatform();
    void readHash(true);
    const handleHash = () => { void readHash(); };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  });

  function escape(event: KeyboardEvent) {
    if (!active || event.key !== 'Escape' || event.altKey || event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    if (tab !== 'usage') window.location.hash = `project/${active}/usage`;
    else back();
  }
</script>

<svelte:window onkeydown={escape} />
<svelte:head>
  <title>{project ? `${project.name} · ${tab} · minh.website` : 'minh.website'}</title>
  <meta name="description" content={project?.goal ?? 'Projects by Minh: Notework, siêu việt, Keyflow, Discrete, and more.'} />
</svelte:head>

{#if project}
  <article class="project-screen">
    <div class="back-control"><ButtonPositional on_close={back}>← all projects</ButtonPositional></div>
    <header>
      <p class="eyebrow">{project.kind}</p>
      <h1 bind:this={heading} tabindex="-1">{project.name}</h1>
      <p class="goal">{project.goal}</p>
      <div class="project-actions">
        {#if project.app}<a class="action primary" href={project.app} target="_blank" rel="noreferrer">Open {project.name} ↗</a>{/if}
        <a class="action" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </header>

    <nav class="guide-nav" aria-label={`${project.name} guide`}>
      {#each ['usage', 'configuration', 'installation'] as item}
        <a href={`#project/${project.id}/${item}`} aria-current={tab === item ? 'page' : undefined}>{item}</a>
      {/each}
    </nav>

    <div class="guide-content">
      {#if tab === 'installation'}
        {#if project.id === 'discrete'}
          {#each discreteInstallation as section}<GuideSection {section} />{/each}
        {:else if project.id === 'keyflow'}
          <GuideSection section={{
            title: 'Install in a Svelte 5 project',
            text: 'Keyflow is a developer library, not an app to install on a phone. Use the same package on macOS, Windows, or Linux. It is distributed through GitHub Releases, not the npm registry.',
            steps: [
              'Create or open a Svelte 5 project. For the repository demo, use Node 24 and pnpm.',
              'Install the release archive with the command below.',
              'Follow Usage to mount the root and add a button. Configuration covers defaults and input frames.'
            ],
            code: 'pnpm add https://github.com/legitminh/keyflow/releases/download/v0.8.0/legitminh-keyflow-0.8.0.tgz',
            link: { label: 'Current releases', href: `${project.github}/releases` }
          }} />
        {:else}
          <p class="intro">{project.id === 'notework' ? 'Install from your browser. No app-store download or account required.' : 'Choose your system. Builds are distributed through GitHub Releases.'}</p>
          <nav class="platform-nav" aria-label="Operating system">
            {#each platforms as system}
              <a href={`#project/${project.id}/installation/${system.id}`} aria-current={platform === system.id ? 'page' : undefined}>{system.label}</a>
            {/each}
          </nav>
          {#if project.id === 'notework'}
            <a class="action primary" href={project.app} target="_blank" rel="noreferrer">Open Notework to install ↗</a>
            <GuideSection section={pwaInstallation[platform]} />
            <GuideSection section={{ title: 'First launch and offline use', text: 'Let the app load once online. Afterward, browser-stored notes can be created and edited offline; GitHub sync needs a connection. Installed apps may use separate browser storage, so set up notes in the app you plan to use. If installation is unavailable, use the same URL in a regular browser tab.' }} />
          {:else}
            <ReleaseDownloads {platform} />
            <GuideSection section={nativeInstallation[platform]} />
          {/if}
        {/if}
      {:else}
        {#if tab === 'usage' && project.image}
          <figure>
            <img src={project.image.src} alt={project.image.alt} width="880" height={project.id === 'sieuviet' ? 240 : 280} />
            <figcaption>{project.image.caption}</figcaption>
          </figure>
        {/if}
        {#each project[tab] as section, index}
          <GuideSection {section} />
          {#if project.id === 'keyflow' && tab === 'usage' && index === 0}
            <div class="try-control">
              <ButtonPositional on_close={() => count++}>Try Keyflow · count: {count}</ButtonPositional>
              <p aria-live="polite">{count === 0 ? 'Click, tap, or use the displayed shortcut.' : `${count} ${count === 1 ? 'activation' : 'activations'}.`}</p>
            </div>
          {/if}
        {/each}
      {/if}
    </div>
    <footer><a href="#list.project">← all projects</a><span>Esc {tab === 'usage' ? 'returns to projects' : 'returns to usage'}</span></footer>
  </article>
{:else}
  <Project onselect={open} />
{/if}

<style>
  .project-screen {
    width: min(100%, 960px);
    box-sizing: border-box;
    padding: 24px clamp(16px, 4vw, 48px) 80px;
    margin: 0 auto;
    background: var(--background);
    font-size: clamp(15px, calc(var(--min-box) * .38), 21px);
    line-height: 1.65;
  }
  .project-screen :global(*) { box-sizing: border-box; }
  .project-screen :global(a) { color: inherit; text-underline-offset: .22em; overflow-wrap: anywhere; }
  .project-screen :global(a:hover) { text-decoration-thickness: 2px; }
  .project-screen :global(:focus-visible) { outline: 2px solid var(--primary); outline-offset: 5px; }
  .project-screen :global(button) { font-size: inherit; line-height: inherit; }
  .back-control { margin-bottom: 48px; }
  .back-control :global(button) { padding: 4px 0; }
  .eyebrow { margin: 0 0 8px; font-size: .8em; color: var(--tertiary); }
  h1 { font-size: clamp(36px, 7vw, 64px); font-weight: 500; line-height: 1.15; letter-spacing: -.055em; margin: 0 0 24px; }
  h1:focus { outline: none; }
  .goal { max-width: 64ch; margin: 0; }
  .project-actions { display: flex; flex-wrap: wrap; gap: 12px; margin: 24px 0 36px; }
  .project-screen :global(.action) { display: inline-block; border: 1px solid var(--primary); padding: 9px 15px; font-size: .9em; text-decoration: none; }
  .project-screen :global(.action:hover) { background: color-mix(in srgb, var(--primary) 8%, var(--background)); }
  .primary { background: var(--primary); color: var(--background) !important; }
  .project-screen :global(.primary:hover) { background: var(--primary); opacity: .8; }
  .guide-nav { display: flex; flex-wrap: wrap; gap: 0 28px; border-bottom: 1px solid var(--tertiary); }
  .guide-nav a { padding: 12px 0; text-decoration: none; border-bottom: 3px solid transparent; }
  .guide-nav a[aria-current] { border-color: var(--primary); font-weight: 700; }
  .guide-content { padding: 16px 0 0; }
  .project-screen :global(.guide-section) { margin: 32px 0; }
  .project-screen :global(h2) { font-size: 1.1em; line-height: 1.4; margin: 0 0 12px; font-weight: 650; letter-spacing: -.02em; }
  .project-screen :global(p) { margin-top: 0; }
  .project-screen :global(li) { padding-left: 6px; margin-bottom: 12px; }
  .project-screen :global(ol), .project-screen :global(ul) { padding-left: 24px; margin: 0; }
  .project-screen :global(pre) { border: 1px solid var(--tertiary); padding: 18px; overflow-x: auto; font-size: .85em; line-height: 1.7; tab-size: 2; white-space: pre; }
  .project-screen :global(code) { font-family: inherit; overflow-wrap: anywhere; }
  figure { margin: 20px 0 36px; }
  figure img { display: block; width: 100%; height: auto; background: #fff; border: 1px solid var(--tertiary); }
  figcaption { margin-top: 10px; font-size: .8em; }
  .intro { margin: 12px 0; }
  .platform-nav { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0; }
  .platform-nav a { border: 1px solid var(--tertiary); text-decoration: none; padding: 6px 12px; font-size: .85em; }
  .platform-nav a[aria-current] { background: var(--primary); color: var(--background); border-color: var(--primary); }
  .project-screen :global(.release-downloads), .try-control { border: 1px solid var(--tertiary); padding: 20px; margin: 24px 0; }
  .project-screen :global(.release-status) { font-size: .8em; margin-bottom: 12px; }
  .project-screen :global(.release-detail) { font-size: .8em; margin: 14px 0; }
  .project-screen :global(.release-notes) { display: block; margin-top: 12px; }
  .try-control p { font-size: .8em; margin: 12px 0 0; }
  footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px; border-top: 1px solid var(--tertiary); padding-top: 24px; margin-top: 48px; font-size: .8em; }
  footer span { color: var(--tertiary); }
  @media (max-width: 500px) {
    .back-control { margin-bottom: 32px; }
    .guide-nav { gap: 0 18px; font-size: .85em; }
    .project-screen :global(pre) { padding: 12px; }
  }
</style>
