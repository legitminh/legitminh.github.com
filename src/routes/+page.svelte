<script lang="ts">
  import { min_box, set_min_box } from '$lib/stores/layout';
  import { theme_id } from '$lib/stores/theme';
  import ButtonPositional from '$lib/components/ButtonPositional.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<span>
  website under construction.
</span>
<span
  style="line-height: var(--min-box); font-size: calc(var(--min-box) * 0.8); color: var(--primary);"
  >({$min_box}|{$theme_id})</span
>
<div style="flex-direction: column; display: flex;">
<ButtonPositional on_close={() => {
  console.log('interactable 0 closed');
}}>buton0</ButtonPositional>

<ButtonPositional on_close={() => {
  console.log('interactable 1 closed');
}}>buton1</ButtonPositional>

<ButtonPositional on_close={() => {
  set_min_box($min_box * 0.8);
}}>downsize</ButtonPositional>

<ButtonPositional on_close={() => {
  set_min_box($min_box * 1.25);
}}>upsize</ButtonPositional>

<ButtonPositional on_close={() => {
  console.log('button positional closed');
}}>hi?</ButtonPositional>
hisjf
<ThemeToggle></ThemeToggle>
</div>