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
    type InputToken,
  } from '$lib/stores/input';

  export const myToken: InputToken = {
    priority: 100,
    on_close: () => on_close?.(),
  };

  // visibility management
  import { visibility } from "$lib/actions/visibility";

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
    console.log('interactable positional unregistered', myToken);
  }

  // get position
  let element: HTMLButtonElement;

  // let display_num = $state("");
  function updatePriority() {
    const rect = element.getBoundingClientRect();
    myToken.priority = rect.top * window.innerWidth + rect.left; //must update this so that in the case the element isn't added to the list, it will still have the correct priority when added later
    update_list_input_token(myToken, rect.top * window.innerWidth + rect.left );
    // display_num = `${Math.round(rect.top * window.innerWidth + rect.left)}`;
  }
  

  onMount(() => {
      register();

      const resizeObserver = new ResizeObserver(updatePriority);
      resizeObserver.observe(element);
      
      updatePriority();

      window.addEventListener("scroll", updatePriority, { passive: true });
      window.addEventListener("resize", updatePriority);

      return () => {
          unregister();
          window.removeEventListener("scroll", updatePriority);
          window.removeEventListener("resize", updatePriority);
      };
      
  });
</script>

<button bind:this={element} onclick={on_close} use:visibility={{onFullyVisible: register, onHidden: unregister}} class="inline cursor-pointer">
  {@render children?.()}
</button>
