<script lang="ts">
  import { Indent, Link, LineText } from '@legitminh/keyflow';

</script>

   
  <LineText>rock paper scissor expected rounds</LineText>
  <br/>
  <LineText>given p players</LineText>
  <LineText>r is remaining players</LineText>
  <LineText>the probability c for r to remain given p after one round is:</LineText>
  <Indent>
    <LineText>if p = 1: 0 because the game ends</LineText>
    <LineText>if r = 0: 0 because its impossible</LineText>
    <LineText>if r = p: (3^p - 3*(2^p-2) )/3^p</LineText>
    <Indent>
      <LineText>explanation: there are 3^p total possible player option (rock, paper, or scissor for each player). the round ties (r=p) if all players play the same or all three options utilized. the number of ways the players only uses two options is 3*(2^p-2) because two options restriction gives 2^p ways for players to choose, in which we need to exclude 2 cases when the all pick the same in the two options. therefore there are 3^p - (2^p-2) ways to tie out of 3^p total options.</LineText>
    </Indent>
  </Indent>
  <LineText>e is the expected number of rounds for x players</LineText>
  <Indent>
    <LineText>it is not feasible to simulate infinite rounds, so a certain number of rounds is tracked (l)</LineText>
    <LineText>there are 2 scenarios in one round, either tie or decreased number of player</LineText>
    <LineText>if tie:</LineText>
    <Indent>
      <LineText>the expected value is 1 + e(x, l-1)</LineText>
    </Indent>
    <LineText>if decreased number of player</LineText>
    <Indent>
      <LineText>for each resulting player (n) from 1 to x-1 inclusive, the expected value is e(n, l-1)</LineText>
    </Indent>
    <LineText>thus, the expected value e is (1 + e(x, l-1)) * c(x,x) - summation(n=1,x-1, e(n, l-1) * c(x,n))</LineText>
    <LineText>which can be simplified to c(x,x) - summation(n=1,x, e(n, l-1) * c(x,n))</LineText>
    <LineText>as e is recursively defined, one must define base case of e(x,0), where the expected value is 0</LineText>
    <LineText>e(x,bignumber) should be a good estimation</LineText>
  </Indent>
  <LineText><Link href="https://www.desmos.com/calculator/kqkkvhzolz">desmos link</Link></LineText>

