<!-- 
 * InteractablePositional component is an interactable that only exists if it is visible!
 * 
 * This component is used to create an interactable element which have its position acting as the priority of the input token. The higher the position, the higher the priority. The lower the position, the lower the priority.
 * It takes in the following props:
 * - children: The content to be rendered inside the button.
 * - on_close: A function to be called when the button is clicked.
-->
<script lang="ts">
  import { onMount } from 'svelte';
  let { children, on_close} = $props();

  import {
    add_input_token,
    remove_input_token,
    type InputToken,
  } from '$lib/stores/input';

  export const myToken: InputToken = {
    priority: 100,
    on_close: () => on_close?.(),
  };

  // visibility management
  import { visibility } from "$lib/actions/visibility";
  import Interactable from './Interactable.svelte';

  let isRegistered = false;

  function register() {
    if (isRegistered) return;
    isRegistered = true;
    add_input_token(myToken);
  }

  function unregister() {
    if (!isRegistered) return;
    isRegistered = false;
    remove_input_token(myToken);
  }

  // get position
  let element: Interactable;

  // let display_num = $state("");
  

  onMount(() => {
      register();
      return () => {
          unregister();
      };
      
  });
</script>

<!-- <button bind:this={element} onclick={on_close} use:visibility={{onFullyVisible: register, onHidden: unregister}} class="inline cursor-pointer">
  {@render children?.()}
</button> -->
<Interactable on_close={on_close} bind:this={element} >
  <div use:visibility={{onFullyVisible: register, onHidden: unregister}}>
    {@render children?.()}
  </div>
</Interactable>
