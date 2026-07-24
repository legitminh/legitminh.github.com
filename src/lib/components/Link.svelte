<script lang="ts">
  let { children, href } = $props();
  import ButtonPositional from './ButtonPositional.svelte';

  function handleClose() {
    if (href) {
      window.location.href = href;
    }
  }
</script>

<ButtonPositional on_close={handleClose}>
  {@render children?.()}
</ButtonPositional>