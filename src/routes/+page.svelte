<script lang="ts">
  import { min_box, set_min_box } from '$lib/stores/layout';
  import { theme_id } from '$lib/stores/theme';
  import Interactable from '$lib/components/Interactable.svelte';

  import { visibility } from "$lib/actions/visibility";
  import InteractablePositional from '$lib/components/InteractablePositional.svelte';

  function register() {
      // add_input_token(token);
      console.log('interactable visible');
  }

  function unregister() {
      // remove_input_token(token);
      console.log('interactable hidden');

  }
</script>

<span
  style="line-height: var(--min-box); font-size: calc(var(--min-box) * 0.8); color: var(--primary);"
  >({$min_box}|{$theme_id})</span
>
<Interactable priority={0} on_close={() => {
  console.log('interactable 0 closed');
}}>buton0</Interactable>

<Interactable priority={1} on_close={() => {
  console.log('interactable 1 closed');
}}>buton1</Interactable>

<Interactable priority={2} on_close={() => {
  set_min_box($min_box * 0.8);
}}>downsize</Interactable>

<Interactable priority={3} on_close={() => {
  set_min_box($min_box * 1.25);
}}>upsize</Interactable>

<InteractablePositional on_close={() => {
  console.log('interactable positional closed');
}}>hi?</InteractablePositional>

<div use:visibility={{ onFullyVisible: register, onHidden: unregister }}>
    u see me now u don't!
</div>