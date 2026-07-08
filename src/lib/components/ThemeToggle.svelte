<script lang="ts">
  import InteractablePositional from "$lib/components/InteractablePositional.svelte";
  import { themes, set_theme_id, theme_id } from "$lib/stores/theme";

  function toggle_theme() {
    set_theme_id($theme_id === 0 ? 1 : 0);
  }

  let theme_name = $derived(themes[$theme_id]?.name ?? "unknown");
</script>

<InteractablePositional on_close={toggle_theme}>
  {theme_name}
</InteractablePositional>