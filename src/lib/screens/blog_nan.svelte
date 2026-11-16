<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/blog_nan.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { Link, LineText } from '@legitminh/keyflow';

</script>

   
  
  <br/>
  <LineText><strong>{t("a proposal to replace rock paper scissors")}</strong></LineText>
  <br/>
  <LineText>{t("rock paper scissors is a game between n players with a random result determining some victors, requiring only hands.")}</LineText>
  <br/>
  <LineText>{t("how many times have you tied rock paper scissors in total?")}</LineText>
  <br/>
  <LineText>{t("\\\\insertvideoorgiforcomicoftyingrockpaperscissorandfrustrationensued")}</LineText>
  <br/>
  <LineText>{t("countless, if you've ever played the game.")}</LineText>
  <LineText>{t("you are expected to tie 0.5 times each game with another player.")}</LineText>
  <br/>
  <LineText>{t("that sounds ok but that's only at 2 players, when the number of players is 4, select 1 victor,")}</LineText>
  <LineText>{t("the tie count expected is even higher, at ~1.36")}</LineText>
  <br/>
  <LineText>{t("and double the player count again, the tie count expected is 9.34")}</LineText>
  <LineText>{t("yes, for just 8 players, you are expected to tie 9 times")}</LineText>
  <br/>
  <LineText><Link href="#blog/nan/proof">{t("click here")}</Link>{t(" for proof")}</LineText>
  <br/>
  <LineText>{t("that is not great, knowing the whole world runs on rock paper, and scissors. from who goes first in a board game to the decision of a u.s court case and selection of christie's or sotheby's auction house (https://en.wikipedia.org/wiki/rock_paper_scissors#american_court_case)")}</LineText>
  <br/>
  <LineText>{t("rock paper scissors are so commonplace that time saved from needlessly tying can be an unmeasurable long-term cost saving for the whole world.")}</LineText>
  <br/>
  <LineText>{t("a proposal is coin flipping, this game has an extremely low tie rate of 1/6000 (https://ui.adsabs.harvard.edu/abs/1993phrve..48.2547m/abstract#:~:text=extrapolations%20based%20on%20the%20model,approximately%201%20in%206000%20tosses. ) and requires around ceil(log2(n)) rounds for n players. but it requires a physical object that we don\"t always have, time to take in and out the object, fails at 3 players, and needs to organize who is face and tails. this method is used in futbol game decisions and is only good for 2 players.")}</LineText>
  <br/>
  <LineText>{t("a better idea is a random number generator (rng). this is a class of solution that uses a physical wheel or dice or more commonly, a digital one to generate a random number within certain requirements. the disadvantages are organizing who gets which number, and acquiring some physical object to perform rng, although easier to find. for frequent games with the same players, a list of names or other forms of id could be put in a digital wheel/randomizer.")}</LineText>
  <br/>
  <LineText>{t("but now, i propose a better system that does the same with rng but only requires hands. someone has likely proposed something similar before, given the simplicity of tacking rock paper scissors weaknesses.")}</LineText>
  <br/>
  <LineText>{t("i name it “nan”, an easy-to-pronounce name regardless of language.")}</LineText>
  <br/>
  <LineText>{t("the player proposing the game or (if the proposer is an outsider) initiating the game will say “start(in your language) nan”, then all players will form a circle, with the initiator being 0 and the player number increasing by 1 each player clockwise from the initiator.")}</LineText>
  <LineText>{t("the initiator and only them will count 0,1 in their language, during this time:")}</LineText>
  <LineText>{t("each player chooses a number from 0 to n-1. the number should be in binary, with the pinky finger representing the 2^0 and values increasing to the thumb. (this caps the number of players to 32 on one hand, but both hands can go up to 1024 players (left-hand contains 2^0). also, be realistic, you don\"t need that many players)")}</LineText>
  <LineText>{t("binary conversion is very easy, especially at low numbers")}</LineText>
  <LineText>{t("then all players play their number on the 3rd beat, after the 0 and 1 beats.")}</LineText>
  <LineText>{t("the initiator and the one directly next to them clockwise quickly count the sum of the numbers while the other players check their neighbors for cheating. the sum is divided by the number of players and the remainder is the winning player.")}</LineText>
  <br/>
  <LineText>{t("the weakness of this system is that it requires basic algebra, which prevents babies from playing with one another. also, i\"ve assumed people have hands, but some don\"t. also, this requires a circular or somewhat morphologically linear arraignment of players, this is not always possible (if you are playing “nan” floating in space, you could say “start nan age” and it will be ranked by age instead, default is increasing starting from the initiator and looping back once n is reached). rng is still more efficient when you have a large number of players, like 32+, since addition and cross-checking time goes up linearly.")}</LineText>
  <br/>
  <LineText>{t("i find this system better due to the low severity of its problems and the fit for most common uses of rock paper scissors.")}</LineText>
  <br/>
  <LineText>{t("feel free to reach out if you want to critique/discuss my idea or help plan the world expansion of “nan”")}</LineText>

