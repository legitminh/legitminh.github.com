<script lang="ts">
  let { href } = $props();
  import { must_view } from "$lib/actions/must_view";
</script>

<center class="video-container" use:must_view>
  <video
    src={href}
    autoplay
    muted
    loop
    playsinline
    class="video"
  >
  </video>
</center>

<style>
  .video {
    width: auto;
    height: auto;
    max-width: 75vw;
    max-height: 75vh;
    object-fit: contain;
  }
  .video-container{
    align-content: center;
  }
</style>