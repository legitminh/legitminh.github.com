<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Button, LineText } from '@legitminh/keyflow';

  let mp3_url = $state<string | null>(null);
  let filename = $state<string | null>(null);
  let request: AbortController | null = null;

  // the server returns { filename, data } where data is the base64 encoded mp3
  async function fetch_mp3(route: string) {
    request?.abort();
    const controller = new AbortController();
    request = controller;
    try {
      const res = await fetch(`http://0.0.0.0:8000/${route}?t=${Date.now()}`, { signal: controller.signal }); //diff request to prevent caching
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      if (controller.signal.aborted) return;
      filename = json.filename;
      const blob = new Blob([Uint8Array.from(atob(json.data), c => c.charCodeAt(0))], { type: "audio/mpeg" });
      if (mp3_url) URL.revokeObjectURL(mp3_url);
      mp3_url = URL.createObjectURL(blob);
    } catch (error) {
      if (controller.signal.aborted) return;
      console.error('Error fetching MP3:', error);
    }
  }
  const next = () => fetch_mp3("nextMp3");
  const previous = () => fetch_mp3("previousMp3");
  onDestroy(() => {
    request?.abort();
    if (mp3_url) URL.revokeObjectURL(mp3_url);
  });
</script>

   
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

<style>
  audio {
    display: block;
    width: 100%;
  }
</style>
