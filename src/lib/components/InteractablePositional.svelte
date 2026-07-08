<!-- 
 * InteractablePositional component
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
    update_list_input_token,
    list_key_route,
    type InputToken,
  } from '$lib/stores/input';

  const myToken : InputToken = {priority: 100, on_close: on_close};
  onMount(() => {
    console.log('interactable mounted');
    add_input_token(myToken);
  });

  // visibility management
  import { visibility } from "$lib/actions/visibility";

  function register() {
      add_input_token(myToken);
  }

  function unregister() {
      remove_input_token(myToken);
  }

  // get position
  let element: HTMLButtonElement;

  function updatePriority() {
    const rect = element.getBoundingClientRect();

    // myToken.priority =
    //     rect.top * window.innerWidth +
    //     rect.left;
    update_list_input_token(myToken, rect.top * window.innerWidth + rect.left );
  }
  

  onMount(() => {
      const resizeObserver = new ResizeObserver(updatePriority);
      resizeObserver.observe(element);
      
      updatePriority();

      window.addEventListener("scroll", updatePriority, { passive: true });
      window.addEventListener("resize", updatePriority);

      return () => {
          window.removeEventListener("scroll", updatePriority);
          window.removeEventListener("resize", updatePriority);
      };
      
  });
</script>

<button bind:this={element} onclick={on_close} use:visibility={{onFullyVisible: register, onHidden: unregister}} class="inline cursor-pointer">
  {$list_key_route.get(myToken)?.join('')}{@render children?.()}
</button>
