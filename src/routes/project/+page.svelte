<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Header from "$lib/components/Header.svelte";
  import Document from "$lib/components/scroll/vertical/Document.svelte";
</script>
<Document>
  <Header/> 
  <div class="cards">
    <div class="interior">
      <Card href="https://legitminh.github.io/archive.legitminh.github.com/" name="previous personal site" />
      <Card href="https://github.com/legitminh/FocusFlow" name="focus flow" />
      <Card href="https://minhn.itch.io/journeytothenest" name="journey to the nest" visualization="/images/projects/journey_to_the_nest.cover.png" />
      <Card href="https://github.com/legitminh/BeyondHope" name="beyond hope" />
      <Card href="/project/astro_fest_1" name="astro fest 1" visualization="/images/projects/astro-fest.png" />
      <Card href="/project/audio_player" name="audio player" visualization="/images/youtube.webp" />
      <Card href="/project/pep_website" name="pep website" visualization="/images/projects/acba.webp" />
      <Card href="/project/net_zero_hero" name="net zero hero" visualization="/images/projects/net_zero_hero.cover.png" />
      <Card href="/project/youtube_randomize" name="youtube randomize" visualization="/images/youtube.webp" />
      <Card href="/project/piano_game" name="piano game" visualization="/images/projects/TypingPiano.png" />
      <Card href="https://minhn.itch.io/rsasteinography" name="rsa steinography" />
      <Card href="/project/astrofest" name="astrofest" visualization="/images/projects/astro-fest.png" />
      <Card href="https://minhn.itch.io/thirteen" name="thirteen" visualization="/images/projects/thirteen-beta.png" />
      <Card href="https://minhn.itch.io/mazegame" name="maze game" visualization="/images/projects/maze-game.png" />
      <Card href="https://minhn.itch.io/projectilemotioncalculator" name="projectile motion calculator" visualization="/images/projects/projectile-calculator.jpg" />
      <Card href="https://minhn.itch.io/minesweeper" name="minesweeper" visualization="/images/projects/mine-sweeper.png" />
      <Card href="https://minhn.itch.io/tetris" name="tetris" visualization="/images/projects/tetris.png" />
      <Card href="https://minhn.itch.io/conway" name="conway's game of life" visualization="/images/projects/conway-game-of-life.png" />
      <Card href="https://minhn.itch.io/space-colonizer" name="space colonizer" visualization="/images/projects/space-colonizer.png" />
    </div>
  </div>

</Document>
<style>
  .cards {
    display: block;
    width: 100%;
    box-sizing: border-box;
    /* ensure left and right spacing from viewport are exactly the desired value */
    padding-left: calc(var(--min-box) / 4);
    padding-right: calc(var(--min-box) / 4);
    padding-top: calc(var(--min-box) / 4);
  }
  .interior {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--min-box) / 2);
    /* let content flow from the padded left edge; do not constrain width so rightmost card sits before padding-right */
    align-items: flex-start;
  }
</style>