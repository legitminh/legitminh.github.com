<script lang="ts">
  import { LineText, min_box, lockstep_scrolling, ButtonPositional, SubKeyframe, themes, state_theme, set_theme_id, Link, Document, KeypathToggle } from '@legitminh/keyflow';
  import { t, language, setLanguage } from '$lib/i18n.svelte';
  import Grid from '$lib/components/Grid.svelte';
  import ScreenBrowser from '$lib/components/ScreenBrowser.svelte';
  import SettingsLink from '$lib/components/SettingsLink.svelte';
  import type { ScreenId } from '$lib/data/screens';
  let active = $state<ScreenId | null>(null);
  let themeName = $derived(state_theme.theme_id === 'system' ? 'system' : themes[state_theme.theme_id]?.colorScheme ?? 'system');
  function toggleTheme() {
    const current = state_theme.theme_id;
    set_theme_id(current === 'system' ? 0 : current + 1 < themes.length ? current + 1 : 'system');
  }
</script>
<Document>
  {#if !active}
  <div class="content">
    <LineText> <h1>minh.website</h1> </LineText>
    <nav class="home-nav" aria-label={t("main navigation")}>
    <LineText><Link href="#about">{t("about")}</Link></LineText>
    <LineText><Link href="#list.project">{t("list.project")}</Link></LineText>
    <LineText><Link href="#blog">{t("blog")}</Link></LineText>
    <LineText><SettingsLink /></LineText>
    </nav>
  </div>
  <div id="list.project">
    <LineText><h2>{t("list.project")}</h2></LineText>
  </div>
  {/if}
  <ScreenBrowser bind:active />
  {#if !active}
  <div id="list.setting">
    <LineText><h2 aria-label={t('settings')}>⚙</h2></LineText>
    <LineText><div class="language-selector"><SubKeyframe
      label={`${t('language')}: ${language.current === 'vi' ? 'tiếng việt' : 'english'} ▾`}
      backLabel={t('back')}
      items={[
        { id: 'en', label: 'english', on_select: () => setLanguage('en') },
        { id: 'vi', label: 'tiếng việt', on_select: () => setLanguage('vi') }
      ]}
    >
      {#snippet itemDisplay(item)}
        <span lang={item.id} aria-current={language.current === item.id ? 'true' : undefined}>{item.label}{language.current === item.id ? ' ✓' : ''}</span>
      {/snippet}
    </SubKeyframe></div></LineText>
    <LineText><p aria-live="polite">{t('choose the site language. your choice is saved on this device.')}</p></LineText>
    <LineText><ButtonPositional on_close={toggleTheme}>{t('theme')}: {t(themeName)}</ButtonPositional></LineText>

    <LineText><KeypathToggle shown_label={t('hide key labels')} hidden_label={t('show key labels')} /></LineText>

    <LineText><ButtonPositional on_close={() => {
      lockstep_scrolling.set(!lockstep_scrolling.enabled);
    }}>{t(lockstep_scrolling.enabled ? 'deactivate mouse lockstep scroll' : 'activate mouse lockstep scroll')}</ButtonPositional></LineText>

    <LineText><ButtonPositional on_close={() => {
      min_box.set(min_box.value * 0.8);
    }}>{t("zoom out")}</ButtonPositional></LineText>

    <LineText><ButtonPositional on_close={() => {
      min_box.set(min_box.value * 1.25);
    }}>{t("zoom in")}</ButtonPositional></LineText>
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
  .language-selector :global(.subkeyframe-panel) {
    position: absolute;
    z-index: 2;
    box-sizing: border-box;
    min-width: 100%;
    max-width: calc(100vw - var(--min-box) / 2);
  }
</style>
