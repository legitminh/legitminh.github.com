import { min_box } from '$lib/stores/layout.svelte';
import {
    cubicOut,
    // quintOut,
    // expoOut,
    // quartOut,
    // cubicInOut
} from "svelte/easing";
import { Tween } from "svelte/motion";

class StateViewport{
  viewport_width = $state(0); // min_box
  viewport = $state<HTMLDivElement | undefined>(undefined); //div that describe the viewport the camera is capable of viewing
  viewport_height = $state(0); // min_box
  y = $state(0) // min_box_blocks
  world_height = $state(0); // height in min_box_blocks
  world = $state<HTMLDivElement | undefined>(undefined); //div that describe the world the camera is capable of viewing

}
export const state_viewport = new StateViewport();

export const y_pixels = new Tween(0, {
  duration: 300,
  easing: cubicOut
});

export const update_viewport = () => {
  if (state_viewport.viewport && state_viewport.world){
    const viewport_rect = state_viewport.viewport.getBoundingClientRect();
    state_viewport.viewport_width = Math.floor(viewport_rect.width / min_box.value);
    const viewport_height = Math.floor(viewport_rect.height / min_box.value); // in min_box rounded down

    state_viewport.viewport_height = viewport_height;
  
    state_viewport.world_height = Math.ceil(
      state_viewport.world.getBoundingClientRect().height 
      / viewport_height
      / min_box.value
    );
    state_viewport.y = Math.max(0,Math.min(state_viewport.y, state_viewport.world_height - 1));
    // console.log($state.snapshot(min_box.value),viewport_height,state_viewport.world.getBoundingClientRect().height )
    // console.log("loc",state_viewport.y,"/",state_viewport.world_height);
  }
};

export const page_down = () => {
  update_viewport(); //this updates before paging down to prevent situation of world dom internal changing between screen resizes
  state_viewport.y += 1;
  state_viewport.y = Math.min(state_viewport.y, state_viewport.world_height - 1);
  y_pixels.target = state_viewport.y * state_viewport.viewport_height * min_box.value;
  // console.log("downing!", y_pixels.target , state_viewport.y, "/", state_viewport.world_height);
}
export const page_up = () => {
  update_viewport();
  state_viewport.y -= 1;
  state_viewport.y = Math.max(state_viewport.y, 0);
  y_pixels.target = state_viewport.y * state_viewport.viewport_height * min_box.value;
}


// let box = $derived(Math.max(1, $min_box || 1));
// export const columns = writable(0);
// $derived(Math.max(1, Math.floor(viewport_width / box)));
// export let rows = $derived(Math.max(1, Math.floor(viewport_height / box)));
// let cells = $derived(Array.from({ length: columns * rows }, (_, index) => index + 1));

