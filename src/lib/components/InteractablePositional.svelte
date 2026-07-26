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
  import { state_viewport } from '$lib/stores/camera.svelte'
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
  }

  // get position
  let element: HTMLButtonElement;

  // let display_num = $state("");
  function updatePriority() {
    if (state_viewport.world){
      const rect = element.getBoundingClientRect();
      const world_rect = state_viewport.world?.getBoundingClientRect();
      myToken.priority = (rect.top - world_rect.top) * window.innerWidth 
        + (rect.left - rect.top - world_rect.left); //must update this so that in the case the element isn't added to the list, it will still have the correct priority when added later
      update_list_input_token(myToken, rect.top * window.innerWidth + rect.left);
    }
    console.log("all interactble positional priority change due to screen rescaling!")
    
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
