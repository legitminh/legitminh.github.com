<script lang="ts">
  let { href } = $props();
</script>

<center class="video-container">
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