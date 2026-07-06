<script lang="ts">
  import { min_box } from '$lib/stores/layout';
  import { theme_id } from '$lib/stores/theme';
  import Interactable from '$lib/components/Interactable.svelte';
</script>

<span
  style="line-height: var(--min-box); font-size: calc(var(--min-box) * 0.8); color: var(--primary);"
  >{$min_box}|{$theme_id}</span
>
<Interactable on_close={() => {}}>hi</Interactable>
