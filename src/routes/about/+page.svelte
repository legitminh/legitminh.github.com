<script lang="ts">
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";
  import Card from "$lib/components/Card.svelte";

</script>
<Document>
  <Header/>
  <LineText>
    I am a person with interdisciplinary interest centered around learning reality through a unified language (math/CS). I play piano, pingpong, badminton, chess, Go, Magic the Gathering, DnD, and open-world gacha games. I also draw, make digital art, and karaoke. Moreover, I enjoy reading, writing, and debating philosophy. My entertainment centers around the tenets of intellectual exploration (mastering systems, uncovering narratives) and socialization. I also approach academics in a collaborative manner and hope to converse with strong thinkers with contrasting perspectives.
  </LineText>
  <LineText>contacts</LineText>
  <div class="cards">
    <div class="interior">
      <Card href="https://minhn.itch.io/" name="itch.io" visualization="/images/itchio.png" />
      <Card href="https://discord.gg/gwGQM5MjmY" name="discord server" visualization="/images/discord1.webp" />
      <Card href="https://www.instagram.com/legitminh/" name="instagram" visualization="/images/instagram1.webp" />
    </div>
  </div>
</Document>
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