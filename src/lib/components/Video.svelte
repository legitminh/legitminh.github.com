<script lang="ts">
  let { href } = $props();
</script>

<video
  src={href}
  autoplay
  muted
  loop
  playsinline
  class="video"
>
</video>

<style>
  .video {
    width: auto;
    height: auto;
    max-width: 75vw;
    max-height: 75vh;
    object-fit: contain;
  }
</style>