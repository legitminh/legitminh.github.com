<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/project_youtube_randomize.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText } from '@legitminh/keyflow';

</script>

   
  <iframe title={t("youtube randomize")} src="https://legitminh.github.io/audioPlayer1/"></iframe>
  <LineText>{t("update 2024: new embed source.")}</LineText>

<style>
  iframe {
    display: block;
    width: 100%;
    height: 64rem;
    border: none;
  }
</style>
