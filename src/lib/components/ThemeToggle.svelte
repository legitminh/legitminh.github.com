<script lang="ts">
  import { themes, set_theme_id, theme_id } from "$lib/stores/theme";
  import ButtonPositional from "./ButtonPositional.svelte";

  function toggle_theme() {
    set_theme_id($theme_id === 0 ? 1 : 0);
  }

  let theme_name = $derived(themes[$theme_id]?.name ?? "unknown");
</script>

<ButtonPositional on_close={toggle_theme}>
  {theme_name}
</ButtonPositional>