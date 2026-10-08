<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Header from "$lib/components/Header.svelte";
  import Document from "$lib/components/scroll/vertical/Document.svelte";
</script>
<Document>
  <Header/> 
  <div class="cards">
    <div class="interior">
      <Card href="/blog/detachment" name="detachment" />
      <Card href="/blog/hag" name="hag" />
      <Card href="/blog/nan" name="nan" />
      <Card href="/blog/infinity" name="infinity" visualization="/images/blog/infinity.png" />
      <Card href="/blog/10_grade_campaign" name="#10 grade student council campaign" visualization="/images/avatar.jpg" />
      <Card href="/blog/9_grade_campaign" name="#9 grade student council campaign" visualization="/images/hamiltonCampaign.png" />
    </div>
  </div>

</Document>
<style>
  .cards {
    display: block;
    width: 100%;
    box-sizing: border-box;
    /* ensure left and right spacing from viewport are exactly the desired value */
    padding-left: calc(var(--min-box) / 4);
    padding-right: calc(var(--min-box) / 4);
    padding-top: calc(var(--min-box) / 4);
  }
  .interior {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--min-box) / 2);
    /* let content flow from the padded left edge; do not constrain width so rightmost card sits before padding-right */
    align-items: flex-start;
  }
</style>
