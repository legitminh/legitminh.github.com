<!-- 
  button that displays key route and only exist if visible
-->
<script lang="ts">
  let { children, on_close, priority = undefined } = $props();

  import Interactable from '$lib/components/Interactable.svelte';
  import ButtonDisplay from '$lib/components/ButtonDisplay.svelte';
  import type { InputToken } from '$lib/stores/input';

  let positionalToken = $state<InputToken | undefined>();
</script>

<Interactable bind:priority={priority} bind:myToken={positionalToken} on_close={on_close}>
  <ButtonDisplay token={positionalToken} {children}/>
</Interactable>
