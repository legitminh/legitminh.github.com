<script lang="ts">
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";
  import Indent from "$lib/components/Indent.svelte";
</script>
<Document>
  <Header/> 
  <LineText>hag</LineText>
  <br/>
  <LineText><strong>A 4 dimensional chess game</strong></LineText>
  <LineText><strong>Setup</strong></LineText>
  <Indent>
    <LineText>Player 0 could be determined via Nan or coin flip, if use Nan, who wins is player 0</LineText>
    <LineText><strong>Restrictive setup</strong></LineText>
    <Indent>
      <LineText>Player 0 setup their pieces any way they want in their closest line of the board</LineText>
      <LineText>Player 1 setup their pieces any way they want in their closest line of the board</LineText>
      <LineText>Player 0 goes first</LineText>
    </Indent>
    <LineText><strong>Freedom setup</strong></LineText>
    <Indent>
      <LineText>Player 0 setup their pieces any way they want in their closest 4 squares of the board</LineText>
      <LineText>Player 1 setup their pieces any way they want in their closest 4 squares of the board</LineText>
      <LineText>Player 0 goes first</LineText>
    </Indent>
    <LineText><strong>Chaotic setup</strong></LineText>
    <Indent>
      <LineText>Player 0 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down</LineText>
      <LineText>Player 1 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down</LineText>
      <LineText>Player 0 goes first</LineText>
    </Indent>
    <LineText><strong>Other variations</strong></LineText>
    <Indent>
      <LineText>Variations may change the board size, placements of pieces and the number of pieces, perhaps even changing the number of moves per turn</LineText>
    </Indent>
  </Indent>
  <LineText><strong>The board</strong></LineText>
  <Indent>
    <LineText>The board is a 4x4 nodes hypercube</LineText>
    <LineText><strong>Flattened into 2d</strong></LineText>
    <Indent>
      <LineText>Axis 0,1,2,3 refer to x,y,z,w</LineText>
      <LineText>The horizontal axis represents axis 0 and 2</LineText>
      <LineText>The vertical axis represents axis 1 and 3</LineText>
      <LineText>In other words</LineText>
      <LineText>The board is composed of 16 4x4 squares, each have 16 points/cells</LineText>
      <LineText>The squares are horizontally axis 0 and vertically axis 1 (the line connecting 2 players)</LineText>
      <LineText>The 4x4 squares changes in axis 3 going horizontally (there are 4 squares of lowest, middle and top layer)</LineText>
      <LineText>The 4x4 squares changes in axis 4 going vertically (there are 4 squares of lowest, middle and top layer)</LineText>
      <LineText>INSERT ANNOTATED IMAGE OF BOARD</LineText>
      <LineText>Overall, there are 256 points where pieces can be</LineText>
    </Indent>
  </Indent>
  <LineText><strong>Pieces</strong></LineText>
  <Indent>
    <LineText>There are 9 pieces</LineText>
    <LineText>1 king, which move 1 unit in one dimension</LineText>
    <LineText>Each piece is assigned 1 weakness numbers in &lt;0,1,2,3&gt;</LineText>
    <LineText>Each piece only move in an uninterrupted straight line along its non weak dimensions (like a rook)</LineText>
    <LineText>They can also move 1 unit in the weak dimension</LineText>
    <LineText>Movement toward an opponent piece&apos;s location is a capture</LineText>
  </Indent>
  <LineText><strong>Turns</strong></LineText>
  <Indent>
    <LineText>Each turn each player can either: move 1 piece, or flip - modifying a weakness of a piece</LineText>
  </Indent>
  <LineText><strong>Winning</strong></LineText>
  <Indent>
    <LineText>Capture the opponent&apos;s king</LineText>
  </Indent>
  <LineText><strong>Motivation</strong></LineText>
  <Indent>
    <LineText>To make a very hard game to master, high complexity stem from simple rules</LineText>
    <LineText>Hag means 4</LineText>
  </Indent>
  <br/>
  <LineText>Feel free to reach out if you want to critique/discuss my idea</LineText>
</Document>
