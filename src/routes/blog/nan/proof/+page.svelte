<script lang="ts">
  import Indent from "$lib/components/Indent.svelte";
  import Link from "$lib/components/Link.svelte";
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";
</script>
<Document>
  <Header/> 
  <LineText>rock paper scissor expected rounds</LineText>
  <br/>
  <LineText>Given p players</LineText>
  <LineText>r is remaining players</LineText>
  <LineText>The probability c for r to remain given p after one round is:</LineText>
  <Indent>
    <LineText>If p = 1: 0 because the game ends</LineText>
    <LineText>If r = 0: 0 because its impossible</LineText>
    <LineText>If r = p: (3^p - 3*(2^p-2) )/3^p</LineText>
    <Indent>
      <LineText>Explanation: There are 3^p total possible player option (rock, paper, or scissor for each player). The round ties (r=p) if all players play the same or all three options utilized. The number of ways the players only uses two options is 3*(2^p-2) because two options restriction gives 2^p ways for players to choose, in which we need to exclude 2 cases when the all pick the same in the two options. Therefore there are 3^p - (2^p-2) ways to tie out of 3^p total options.</LineText>
    </Indent>
  </Indent>
  <LineText>e is the expected number of rounds for x players</LineText>
  <Indent>
    <LineText>It is not feasible to simulate infinite rounds, so a certain number of rounds is tracked (l)</LineText>
    <LineText>There are 2 scenarios in one round, either tie or decreased number of player</LineText>
    <LineText>If tie:</LineText>
    <Indent>
      <LineText>The expected value is 1 + e(x, l-1)</LineText>
    </Indent>
    <LineText>If decreased number of player</LineText>
    <Indent>
      <LineText>For each resulting player (n) from 1 to x-1 inclusive, the expected value is e(n, l-1)</LineText>
    </Indent>
    <LineText>Thus, the expected value e is (1 + e(x, l-1)) * c(x,x) - summation(n=1,x-1, e(n, l-1) * c(x,n))</LineText>
    <LineText>Which can be simplified to c(x,x) - summation(n=1,x, e(n, l-1) * c(x,n))</LineText>
    <LineText>As e is recursively defined, one must define base case of e(x,0), where the expected value is 0</LineText>
    <LineText>e(x,bigNumber) should be a good estimation</LineText>
  </Indent>
  <LineText><Link href="https://www.desmos.com/calculator/kqkkvhzolz">Desmos link</Link></LineText>
</Document>
