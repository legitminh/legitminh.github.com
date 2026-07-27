<script lang="ts">
  import { min_box } from '$lib/stores/layout.svelte';
  import { theme_id } from '$lib/stores/theme';
  import ButtonPositional from '$lib/components/ButtonPositional.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import Link from '$lib/components/Link.svelte';
</script>

<span>
  website under construction.
</span>
<span
  style="line-height: var(--min-box); font-size: calc(var(--min-box) * 0.8); color: var(--primary);"
  >({min_box.value}|{$theme_id})</span
>
<div style="flex-direction: column; display: flex;">
<Link href="/about">about</Link>
<ButtonPositional on_close={() => {
  console.log('interactable 0 closed');
}}>buton0</ButtonPositional>

<ButtonPositional on_close={() => {
  console.log('interactable 1 closed');
}}>buton1</ButtonPositional>

<ButtonPositional on_close={() => {
  min_box.set(min_box.value * 0.8);
}}>downsize</ButtonPositional>

<ButtonPositional on_close={() => {
  min_box.set(min_box.value * 1.25);
}}>upsize</ButtonPositional>

<ButtonPositional on_close={() => {
  console.log('button positional closed');
}}>hi?</ButtonPositional>
hisjf
<ThemeToggle></ThemeToggle>
</div>