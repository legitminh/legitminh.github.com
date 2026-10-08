<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Document from "$lib/components/scroll/vertical/Document.svelte";
  import LineText from "$lib/components/LineText.svelte";
  import Header from "$lib/components/Header.svelte";

  let mp3_url = $state<string | null>(null);
  let filename = $state<string | null>(null);

  // the server returns { filename, data } where data is the base64 encoded mp3
  async function fetch_mp3(route: string) {
    try {
      const res = await fetch(`http://0.0.0.0:8000/${route}?t=${Date.now()}`); //diff request to prevent caching
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      filename = json.filename;
      const blob = new Blob([Uint8Array.from(atob(json.data), c => c.charCodeAt(0))], { type: "audio/mpeg" });
      if (mp3_url) URL.revokeObjectURL(mp3_url);
      mp3_url = URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error fetching MP3:', error);
    }
  }
  const next = () => fetch_mp3("nextMp3");
  const previous = () => fetch_mp3("previousMp3");
</script>
<Document>
  <Header/> 
  <LineText>playlist1</LineText>
  <LineText>plays a random song in my definitely-legally-acquired playlist (requires the local server on port 8000).</LineText>
  <LineText>
    <Button on_close={previous}>prev mp3</Button>
    <Button on_close={next}>new mp3</Button>
  </LineText>
  {#if mp3_url}
  <audio autoplay controls src={mp3_url} onended={next}></audio>
  {/if}
  {#if filename}
  <LineText>{filename}</LineText>
  {/if}
</Document>
<style>
  audio {
    display: block;
    width: 100%;
  }
</style>
