<script lang="ts">
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";
</script>
<Document>
  <Header/> 
  <LineText>website I am making for Passion Exploration Project, a non-profit organization based in Gwinnett County.</LineText>
  <iframe title="pep website" src="https://www.pepgeorgia.org/"></iframe>
</Document>
<style>
  iframe {
    display: block;
    width: 100%;
    height: 500px;
    border: 1px solid var(--primary);
    box-sizing: border-box;
  }
</style>
