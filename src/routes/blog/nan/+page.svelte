<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";
</script>
<Document>
  <Header/> 
  <LineText>nan</LineText>
  <br/>
  <LineText><strong>A proposal to replace rock paper scissors</strong></LineText>
  <br/>
  <LineText>Rock paper scissors is a game between N players with a random result determining some victors, requiring only hands.</LineText>
  <br/>
  <LineText>How many times have you tied rock paper scissors in total?</LineText>
  <br/>
  <LineText>\\insertVideoOrGifOrComicOfTyingRockPaperScissorAndFrustrationEnsued</LineText>
  <br/>
  <LineText>Countless, if you&apos;ve ever played the game.</LineText>
  <LineText>You are expected to tie 0.5 times each game with another player.</LineText>
  <br/>
  <LineText>That sounds ok but that&apos;s only at 2 players, when the number of players is 4, select 1 victor,</LineText>
  <LineText>The tie count expected is even higher, at ~1.36</LineText>
  <br/>
  <LineText>And double the player count again, the tie count expected is 9.34</LineText>
  <LineText>Yes, for just 8 players, you are expected to tie 9 times</LineText>
  <br/>
  <LineText><Link href="/blog/nan/proof">Click here</Link> for proof</LineText>
  <br/>
  <LineText>That is not great, knowing the whole world runs on rock paper, and scissors. From who goes first in a board game to the decision of a U.S court case and selection of Christie&apos;s or Sotheby&apos;s Auction house (https://en.wikipedia.org/wiki/Rock_paper_scissors#American_court_case)</LineText>
  <br/>
  <LineText>Rock paper scissors are so commonplace that time saved from needlessly tying can be an unmeasurable long-term cost saving for the whole world.</LineText>
  <br/>
  <LineText>A proposal is coin flipping, this game has an extremely low tie rate of 1/6000 (https://ui.adsabs.harvard.edu/abs/1993PhRvE..48.2547M/abstract#:~:text=Extrapolations%20based%20on%20the%20model,approximately%201%20in%206000%20tosses. ) and requires around ceil(log2(n)) rounds for n players. But it requires a physical object that we don&quot;t always have, time to take in and out the object, fails at 3 players, and needs to organize who is face and tails. This method is used in Futbol game decisions and is only good for 2 players.</LineText>
  <br/>
  <LineText>A better idea is a random number generator (RNG). This is a class of solution that uses a physical wheel or dice or more commonly, a digital one to generate a random number within certain requirements. The disadvantages are organizing who gets which number, and acquiring some physical object to perform RNG, although easier to find. For frequent games with the same players, a list of names or other forms of ID could be put in a digital wheel/randomizer.</LineText>
  <br/>
  <LineText>But now, I propose a better system that does the same with RNG but only requires hands. Someone has likely proposed something similar before, given the simplicity of tacking rock paper scissors weaknesses.</LineText>
  <br/>
  <LineText>I name it “Nan”, an easy-to-pronounce name regardless of language.</LineText>
  <br/>
  <LineText>The player proposing the game or (if the proposer is an outsider) initiating the game will say &ldquo;Start(in your language) Nan”, then all players will form a circle, with the initiator being 0 and the player number increasing by 1 each player clockwise from the initiator.</LineText>
  <LineText>The initiator and only them will count 0,1 in their language, during this time:</LineText>
  <LineText>Each player chooses a number from 0 to N-1. The number should be in binary, with the pinky finger representing the 2^0 and values increasing to the thumb. (This caps the number of players to 32 on one hand, but both hands can go up to 1024 players (left-hand contains 2^0). Also, be realistic, you don&quot;t need that many players)</LineText>
  <LineText>Binary conversion is very easy, especially at low numbers</LineText>
  <LineText>Then all players play their number on the 3rd beat, after the 0 and 1 beats.</LineText>
  <LineText>The initiator and the one directly next to them clockwise quickly count the sum of the numbers while the other players check their neighbors for cheating. The sum is divided by the number of players and the remainder is the winning player.</LineText>
  <br/>
  <LineText>The weakness of this system is that it requires basic algebra, which prevents babies from playing with one another. Also, I&quot;ve assumed people have hands, but some don&quot;t. Also, this requires a circular or somewhat morphologically linear arraignment of players, this is not always possible (if you are playing “nan” floating in space, you could say “start nan age” and it will be ranked by age instead, default is increasing starting from the initiator and looping back once N is reached). RNG is still more efficient when you have a large number of players, like 32+, since addition and cross-checking time goes up linearly.</LineText>
  <br/>
  <LineText>I find this system better due to the low severity of its problems and the fit for most common uses of rock paper scissors.</LineText>
  <br/>
  <LineText>Feel free to reach out if you want to critique/discuss my idea or help plan the world expansion of “nan”</LineText>
</Document>
