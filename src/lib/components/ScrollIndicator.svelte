<script lang="ts">
  import { page_down, page_up } from "$lib/stores/camera.svelte";
  import Interactable from "./Interactable.svelte";


</script>
<div class="scroll">
  <Interactable on_close={page_down} priority={-2}>
    &downarrow;
  </Interactable>
  <Interactable on_close={page_up} priority={-1}>
    &uparrow;
  </Interactable>
</div>

<style>
  .scroll {
    
  }
</style>