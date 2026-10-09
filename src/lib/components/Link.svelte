<script lang="ts">
  let { children, href } = $props();
  import ButtonPositional from './ButtonPositional.svelte';
  import { flood_covered } from '$lib/stores/flood.svelte';

  async function handleClose() {
    if (href) {
      await flood_covered(); // let the paint fill the screen before leaving
      window.location.href = href;
    }
  }
</script>

<ButtonPositional on_close={handleClose} flood>
  {@render children?.()}
</ButtonPositional>