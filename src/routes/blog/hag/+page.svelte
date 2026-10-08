<script lang="ts">
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";
  import TextSubsection from "$lib/components/TextSubsection.svelte";
</script>
<Document>
  <Header/> 
  <LineText>hag</LineText>
  <br/>
  <LineText><strong>A 4 dimensional chess game</strong></LineText>
  <TextSubsection title="Setup">
    <LineText>Player 0 could be determined via Nan or coin flip, if use Nan, who wins is player 0</LineText>
    <TextSubsection title="Restrictive setup">
      <LineText>Player 0 setup their pieces any way they want in their closest line of the board</LineText>
      <LineText>Player 1 setup their pieces any way they want in their closest line of the board</LineText>
      <LineText>Player 0 goes first</LineText>
    </TextSubsection>
    <TextSubsection title="Freedom setup">
      <LineText>Player 0 setup their pieces any way they want in their closest 4 squares of the board</LineText>
      <LineText>Player 1 setup their pieces any way they want in their closest 4 squares of the board</LineText>
      <LineText>Player 0 goes first</LineText>
    </TextSubsection>
    <TextSubsection title="Chaotic setup">
      <LineText>Player 0 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down</LineText>
      <LineText>Player 1 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down</LineText>
      <LineText>Player 0 goes first</LineText>
    </TextSubsection>
    <TextSubsection title="Other variations">
      <LineText>Variations may change the board size, placements of pieces and the number of pieces, perhaps even changing the number of moves per turn</LineText>
    </TextSubsection>
  </TextSubsection>
  <TextSubsection title="The board">
    <LineText>The board is a 4x4 nodes hypercube</LineText>
    <TextSubsection title="Flattened into 2d">
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
    </TextSubsection>
  </TextSubsection>
  <TextSubsection title="Pieces">
    <LineText>There are 9 pieces</LineText>
    <LineText>1 king, which move 1 unit in one dimension</LineText>
    <LineText>Each piece is assigned 1 weakness numbers in &lt;0,1,2,3&gt;</LineText>
    <LineText>Each piece only move in an uninterrupted straight line along its non weak dimensions (like a rook)</LineText>
    <LineText>They can also move 1 unit in the weak dimension</LineText>
    <LineText>Movement toward an opponent piece&apos;s location is a capture</LineText>
  </TextSubsection>
  <TextSubsection title="Turns">
    <LineText>Each turn each player can either: move 1 piece, or flip - modifying a weakness of a piece</LineText>
  </TextSubsection>
  <TextSubsection title="Winning">
    <LineText>Capture the opponent&apos;s king</LineText>
  </TextSubsection>
  <TextSubsection title="Motivation">
    <LineText>To make a very hard game to master, high complexity stem from simple rules</LineText>
    <LineText>Hag means 4</LineText>
  </TextSubsection>
  <br/>
  <LineText>Feel free to reach out if you want to critique/discuss my idea</LineText>
</Document>
