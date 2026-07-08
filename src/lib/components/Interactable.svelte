<!-- 
 * Interactable component
 * 
 * This component is used to create an interactable element that can be closed.
 * It takes in the following props:
 * - children: The content to be rendered inside the button.
 * - on_close: A function to be called when the button is clicked.
 * - priority: The priority of the input token (default is 0).
-->
<script lang="ts">
  import { onMount } from 'svelte';
  let { children, on_close, priority} = $props();

  import {
    add_input_token,
    list_key_route,
    type InputToken,
  } from '$lib/stores/input';
  const myToken : InputToken = {priority: priority ?? 0, on_close: on_close};
  onMount(() => {
    console.log('interactable mounted');
    add_input_token(myToken);
  });
</script>

<button onclick={on_close} class="inline cursor-pointer">
  {$list_key_route.get(myToken)?.join('')}:{@render children?.()}
</button>
