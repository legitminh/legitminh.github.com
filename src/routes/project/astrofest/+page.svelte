<script lang="ts">
  import Indent from "$lib/components/Indent.svelte";
  import Link from "$lib/components/Link.svelte";
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Video from "$lib/components/Video.svelte";
  
</script>
<Document>
  <Link href="/">
    home
  </Link>
  <LineText>Objective: Eliminate all opponents, the more damaged a ship is, the more transparent it is! </LineText>
  <LineText>Read the screen for control. The dropdown is to select number of players. </LineText>
  <LineText>6 to return to main menu. </LineText>
  <LineText>Buttons are to turn left, shoot, and turn right in order from top to bottom. </LineText>
  <LineText>Screen can be maximized for better experience. </LineText>
  <LineText>Powerups:</LineText>
  <Indent>
  <LineText>Red = Bomb </LineText>
  <LineText>Blue = Lazer </LineText>
  <LineText>Green = Heal, if full hp then it is shield. </LineText>
  <LineText>Yellow = Triple gun </LineText>
  <LineText>Cyan = Scatter shot </LineText>
  <LineText>Magenta = Homing missle </LineText>
  </Indent>
  <LineText>Multiplayer fast-paced shooting game, inspired by Astro party.</LineText>
  <LineText>Future updates include art, turrets, maps, sound effect, online multiplayer, and more...</LineText>
  <LineText>Thank you for checking this out.</LineText>
  <LineText>If you want to support me and/or download the game, check out the <Link href="https://minhn.itch.io/astrofest2">itch page</Link>.</LineText>
  <Video href="/videos/Astrofest1.mp4"></Video>
</Document>