<!-- 
  button that displays key route and only exist if visible
-->
<script lang="ts">
  let { children, on_close } = $props();

  import InteractablePositional from '$lib/components/InteractablePositional.svelte';
  import ButtonDisplay from '$lib/components/ButtonDisplay.svelte';
  import type { InputToken } from '$lib/stores/input';

  let positionalToken = $state<InputToken | undefined>();
</script>

<InteractablePositional bind:myToken={positionalToken} on_close={on_close}>
  <ButtonDisplay token={positionalToken} {children}/>
</InteractablePositional>
