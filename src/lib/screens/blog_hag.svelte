<script lang="ts">
  import { t as translate } from '$lib/i18n.svelte';
  import vietnamese from '$lib/locales/screens/blog_hag.vi.json';
  const t = (source: string) => translate(source, vietnamese);
  import { LineText, Indent } from '@legitminh/keyflow';

</script>

   
  
  <br/>
  <LineText><strong>{t("a 4 dimensional chess game")}</strong></LineText>
  <LineText><strong>{t("setup")}</strong></LineText>
  <Indent>
    <LineText>{t("player 0 could be determined via nan or coin flip, if use nan, who wins is player 0")}</LineText>
    <LineText><strong>{t("restrictive setup")}</strong></LineText>
    <Indent>
      <LineText>{t("player 0 setup their pieces any way they want in their closest line of the board")}</LineText>
      <LineText>{t("player 1 setup their pieces any way they want in their closest line of the board")}</LineText>
      <LineText>{t("player 0 goes first")}</LineText>
    </Indent>
    <LineText><strong>{t("freedom setup")}</strong></LineText>
    <Indent>
      <LineText>{t("player 0 setup their pieces any way they want in their closest 4 squares of the board")}</LineText>
      <LineText>{t("player 1 setup their pieces any way they want in their closest 4 squares of the board")}</LineText>
      <LineText>{t("player 0 goes first")}</LineText>
    </Indent>
    <LineText><strong>{t("chaotic setup")}</strong></LineText>
    <Indent>
      <LineText>{t("player 0 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down")}</LineText>
      <LineText>{t("player 1 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down")}</LineText>
      <LineText>{t("player 0 goes first")}</LineText>
    </Indent>
    <LineText><strong>{t("other variations")}</strong></LineText>
    <Indent>
      <LineText>{t("variations may change the board size, placements of pieces and the number of pieces, perhaps even changing the number of moves per turn")}</LineText>
    </Indent>
  </Indent>
  <LineText><strong>{t("the board")}</strong></LineText>
  <Indent>
    <LineText>{t("the board is a 4x4 nodes hypercube")}</LineText>
    <LineText><strong>{t("flattened into 2d")}</strong></LineText>
    <Indent>
      <LineText>{t("axis 0,1,2,3 refer to x,y,z,w")}</LineText>
      <LineText>{t("the horizontal axis represents axis 0 and 2")}</LineText>
      <LineText>{t("the vertical axis represents axis 1 and 3")}</LineText>
      <LineText>{t("in other words")}</LineText>
      <LineText>{t("the board is composed of 16 4x4 squares, each have 16 points/cells")}</LineText>
      <LineText>{t("the squares are horizontally axis 0 and vertically axis 1 (the line connecting 2 players)")}</LineText>
      <LineText>{t("the 4x4 squares changes in axis 3 going horizontally (there are 4 squares of lowest, middle and top layer)")}</LineText>
      <LineText>{t("the 4x4 squares changes in axis 4 going vertically (there are 4 squares of lowest, middle and top layer)")}</LineText>
      <LineText>{t("insert annotated image of board")}</LineText>
      <LineText>{t("overall, there are 256 points where pieces can be")}</LineText>
    </Indent>
  </Indent>
  <LineText><strong>{t("pieces")}</strong></LineText>
  <Indent>
    <LineText>{t("there are 9 pieces")}</LineText>
    <LineText>{t("1 king, which move 1 unit in one dimension")}</LineText>
    <LineText>{t("each piece is assigned 1 weakness numbers in <0,1,2,3>")}</LineText>
    <LineText>{t("each piece only move in an uninterrupted straight line along its non weak dimensions (like a rook)")}</LineText>
    <LineText>{t("they can also move 1 unit in the weak dimension")}</LineText>
    <LineText>{t("movement toward an opponent piece's location is a capture")}</LineText>
  </Indent>
  <LineText><strong>{t("turns")}</strong></LineText>
  <Indent>
    <LineText>{t("each turn each player can either: move 1 piece, or flip - modifying a weakness of a piece")}</LineText>
  </Indent>
  <LineText><strong>{t("winning")}</strong></LineText>
  <Indent>
    <LineText>{t("capture the opponent's king")}</LineText>
  </Indent>
  <LineText><strong>{t("motivation")}</strong></LineText>
  <Indent>
    <LineText>{t("to make a very hard game to master, high complexity stem from simple rules")}</LineText>
    <LineText>{t("hag means 4")}</LineText>
  </Indent>
  <br/>
  <LineText>{t("feel free to reach out if you want to critique/discuss my idea")}</LineText>

