<script lang="ts">
  import Indent from "$lib/components/Indent.svelte";
  import Link from "$lib/components/Link.svelte";
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Video from "$lib/components/Video.svelte";
  import Header from "$lib/components/Header.svelte";
</script>
<Document>
  <Header/> 
  <LineText>astro fest 1: update of astro fest</LineText>
  <Video href="/videos/Astrofest1.mp4"></Video>
  <LineText>objective: Eliminate all opponents, the more damaged a ship is, the more transparent it is! </LineText>
  <LineText>read the screen for control. The dropdown is to select number of players. </LineText>
  <LineText>6 to return to main menu. </LineText>
  <LineText>buttons are to turn left, shoot, and turn right in order from top to bottom. </LineText>
  <LineText>screen can be maximized for better experience. </LineText>
  <LineText>powerups:</LineText>
  <Indent>
  <LineText>red = bomb </LineText>
  <LineText>blue = lazer </LineText>
  <LineText>green = heal, if full hp then it is shield. </LineText>
  <LineText>yellow = triple gun </LineText>
  <LineText>cyan = scatter shot </LineText>
  <LineText>magenta = homing missle </LineText>
  </Indent>
  <LineText>multiplayer fast-paced shooting game, inspired by astro party.</LineText>
  <LineText>future updates include art, turrets, maps, sound effect, online multiplayer, and more...</LineText>
  <div class="game">
    <iframe title="astro fest" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" frameborder="0" allowfullscreen scrolling="no" src="https://html-classic.itch.zone/html/7383859/Astronomia/index.html"></iframe>
  </div>
  <LineText>thank you for checking this out.</LineText>
  <LineText>if you want to support me and/or download the game, check out the <Link href="https://minhn.itch.io/astrofest">itch page</Link>.</LineText>
</Document>
<style>
  .game {
    width: 84vw;
    height: 56vw;
    margin: calc(var(--min-box) / 4) auto;
    border: 1px solid var(--primary);
    overflow: clip;
  }
  .game iframe {
    width: 100%;
    height: 100%;
  }
</style>
