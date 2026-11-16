<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/about.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText } from '@legitminh/keyflow';

  import Card from "$lib/components/Card.svelte";

</script>

  
  <LineText>{t("\n    i am a person with interdisciplinary interest centered around learning reality through a unified language (math/cs). i play piano, pingpong, badminton, chess, go, magic the gathering, dnd, and open-world gacha games. i also draw, make digital art, and karaoke. moreover, i enjoy reading, writing, and debating philosophy. my entertainment centers around the tenets of intellectual exploration (mastering systems, uncovering narratives) and socialization. i also approach academics in a collaborative manner and hope to converse with strong thinkers with contrasting perspectives.\n  ")}</LineText>
  <LineText>{t("contacts")}</LineText>
  <div class="cards">
    <div class="interior">
      <Card href="https://github.com/" name="github" visualization="/images/github.png" />
      <Card href="https://minhn.itch.io/" name="itch.io" visualization="/images/itchio.png" />
      <Card href="https://discord.gg/gwGQM5MjmY" name="discord server" visualization="/images/discord1.webp" />
      <Card href="https://www.instagram.com/legitminh/" name="instagram" visualization="/images/instagram1.webp" />
    </div>
  </div>

<style>
  .cards {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding-left: calc(var(--min-box) / 4);
    padding-right: calc(var(--min-box) / 4);
    padding-top: calc(var(--min-box) / 4);
  }
  .interior {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--min-box) / 2);
    align-items: flex-start;
  }
</style>
