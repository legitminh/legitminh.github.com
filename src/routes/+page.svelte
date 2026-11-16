<script lang="ts">
  import { LineText, min_box, lockstep_scrolling, ButtonPositional, themes, state_theme, set_theme_id, Link, Document } from '@legitminh/keyflow';
  import { t, language, setLanguage } from '$lib/i18n.svelte';
  import Grid from '$lib/components/Grid.svelte';
  import ScreenBrowser from '$lib/components/ScreenBrowser.svelte';
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
    <LineText><Link href="#list.setting">{t("list.setting")}</Link></LineText>
    </nav>
  </div>
  <div id="list.project">
    <LineText><h2>{t("list.project")}</h2></LineText>
  </div>
  {/if}
  <ScreenBrowser bind:active />
  {#if !active}
  <div id="list.setting">
    <LineText><h2>{t("list.setting")}</h2></LineText>
    <LineText><ButtonPositional on_close={() => setLanguage(language.current === 'vi' ? 'en' : 'vi')}>{t('language')}: {language.current === 'vi' ? 'tiếng việt → english' : 'english → tiếng việt'}</ButtonPositional></LineText>
    <LineText><p aria-live="polite">{t('choose the site language. your choice is saved on this device.')}</p></LineText>
    <LineText><ButtonPositional on_close={toggleTheme}>{t('theme')}: {t(themeName)}</ButtonPositional></LineText>

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
</style>
