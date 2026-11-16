<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/project_piano_game.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText } from '@legitminh/keyflow';
  import Video from "$lib/components/Video.svelte";

</script>

   
  <Video href="/videos/RushE.mp4"></Video>
  <LineText>{t("any song can be played, including rush e! that is, as long as you have the midi file.")}</LineText>

