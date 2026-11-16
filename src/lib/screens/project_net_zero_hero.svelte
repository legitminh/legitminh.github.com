<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/project_net_zero_hero.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText } from '@legitminh/keyflow';
  import Video from "$lib/components/Video.svelte";

</script>

   
  <Video href="/videos/NetZeroHero.mp4"></Video>
  
  <LineText>{t("an unpolished game i did in a few hours for hackgwinnett gamejam. the polished game will be released in 2024.")}</LineText>
