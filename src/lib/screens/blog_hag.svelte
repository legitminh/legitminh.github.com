<script lang="ts">
  import { LineText, Indent } from '@legitminh/keyflow';

</script>

   
  
  <br/>
  <LineText><strong>a 4 dimensional chess game</strong></LineText>
  <LineText><strong>setup</strong></LineText>
  <Indent>
    <LineText>player 0 could be determined via nan or coin flip, if use nan, who wins is player 0</LineText>
    <LineText><strong>restrictive setup</strong></LineText>
    <Indent>
      <LineText>player 0 setup their pieces any way they want in their closest line of the board</LineText>
      <LineText>player 1 setup their pieces any way they want in their closest line of the board</LineText>
      <LineText>player 0 goes first</LineText>
    </Indent>
    <LineText><strong>freedom setup</strong></LineText>
    <Indent>
      <LineText>player 0 setup their pieces any way they want in their closest 4 squares of the board</LineText>
      <LineText>player 1 setup their pieces any way they want in their closest 4 squares of the board</LineText>
      <LineText>player 0 goes first</LineText>
    </Indent>
    <LineText><strong>chaotic setup</strong></LineText>
    <Indent>
      <LineText>player 0 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down</LineText>
      <LineText>player 1 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down</LineText>
      <LineText>player 0 goes first</LineText>
    </Indent>
    <LineText><strong>other variations</strong></LineText>
    <Indent>
      <LineText>variations may change the board size, placements of pieces and the number of pieces, perhaps even changing the number of moves per turn</LineText>
    </Indent>
  </Indent>
  <LineText><strong>the board</strong></LineText>
  <Indent>
    <LineText>the board is a 4x4 nodes hypercube</LineText>
    <LineText><strong>flattened into 2d</strong></LineText>
    <Indent>
      <LineText>axis 0,1,2,3 refer to x,y,z,w</LineText>
      <LineText>the horizontal axis represents axis 0 and 2</LineText>
      <LineText>the vertical axis represents axis 1 and 3</LineText>
      <LineText>in other words</LineText>
      <LineText>the board is composed of 16 4x4 squares, each have 16 points/cells</LineText>
      <LineText>the squares are horizontally axis 0 and vertically axis 1 (the line connecting 2 players)</LineText>
      <LineText>the 4x4 squares changes in axis 3 going horizontally (there are 4 squares of lowest, middle and top layer)</LineText>
      <LineText>the 4x4 squares changes in axis 4 going vertically (there are 4 squares of lowest, middle and top layer)</LineText>
      <LineText>insert annotated image of board</LineText>
      <LineText>overall, there are 256 points where pieces can be</LineText>
    </Indent>
  </Indent>
  <LineText><strong>pieces</strong></LineText>
  <Indent>
    <LineText>there are 9 pieces</LineText>
    <LineText>1 king, which move 1 unit in one dimension</LineText>
    <LineText>each piece is assigned 1 weakness numbers in &lt;0,1,2,3&gt;</LineText>
    <LineText>each piece only move in an uninterrupted straight line along its non weak dimensions (like a rook)</LineText>
    <LineText>they can also move 1 unit in the weak dimension</LineText>
    <LineText>movement toward an opponent piece&apos;s location is a capture</LineText>
  </Indent>
  <LineText><strong>turns</strong></LineText>
  <Indent>
    <LineText>each turn each player can either: move 1 piece, or flip - modifying a weakness of a piece</LineText>
  </Indent>
  <LineText><strong>winning</strong></LineText>
  <Indent>
    <LineText>capture the opponent&apos;s king</LineText>
  </Indent>
  <LineText><strong>motivation</strong></LineText>
  <Indent>
    <LineText>to make a very hard game to master, high complexity stem from simple rules</LineText>
    <LineText>hag means 4</LineText>
  </Indent>
  <br/>
  <LineText>feel free to reach out if you want to critique/discuss my idea</LineText>

