<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/project_astro_fest_1.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { Indent, Link, LineText } from '@legitminh/keyflow';
  import Video from "$lib/components/Video.svelte";

</script>

   
  <LineText>{t("astro fest 1: update of astro fest")}</LineText>
  <Video href="/videos/Astrofest1.mp4"></Video>
  <LineText>{t("objective: eliminate all opponents, the more damaged a ship is, the more transparent it is! ")}</LineText>
  <LineText>{t("read the screen for control. the dropdown is to select number of players. ")}</LineText>
  <LineText>{t("6 to return to main menu. ")}</LineText>
  <LineText>{t("buttons are to turn left, shoot, and turn right in order from top to bottom. ")}</LineText>
  <LineText>{t("screen can be maximized for better experience. ")}</LineText>
  <LineText>{t("powerups:")}</LineText>
  <Indent>
  <LineText>{t("red = bomb ")}</LineText>
  <LineText>{t("blue = lazer ")}</LineText>
  <LineText>{t("green = heal, if full hp then it is shield. ")}</LineText>
  <LineText>{t("yellow = triple gun ")}</LineText>
  <LineText>{t("cyan = scatter shot ")}</LineText>
  <LineText>{t("magenta = homing missle ")}</LineText>
  </Indent>
  <LineText>{t("multiplayer fast-paced shooting game, inspired by astro party.")}</LineText>
  <LineText>{t("future updates include art, turrets, maps, sound effect, online multiplayer, and more...")}</LineText>
  
  <LineText>{t("thank you for checking this out.")}</LineText>
  <LineText>{t("if you want to support me and/or download the game, check out the ")}<Link href="https://minhn.itch.io/astrofest">{t("itch page")}</Link>.</LineText>


