<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/project_pep_website.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText } from '@legitminh/keyflow';

</script>

   
  <LineText>{t("website i am making for passion exploration project, a non-profit organization based in gwinnett county.")}</LineText>
  <iframe title={t("pep website")} src="https://www.pepgeorgia.org/"></iframe>

<style>
  iframe {
    display: block;
    width: 100%;
    height: 500px;
    border: 1px solid var(--primary);
    box-sizing: border-box;
  }
</style>
