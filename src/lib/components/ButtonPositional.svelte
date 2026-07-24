<!-- 
-->
<script lang="ts">
  let { children, on_close } = $props();

  import InteractablePositional from '$lib/components/InteractablePositional.svelte';

  import {
    _available_keys,
    map_numeric_route,
    list_input_token,
    list_key_strokes,
    type InputToken,
  } from '$lib/stores/input';
  import { get } from 'svelte/store';

  let positionalInstance = $state<{ myToken?: InputToken } | undefined>();
  let my_numeric_route : number[] = $derived(
    $map_numeric_route.get(positionalInstance?.myToken as InputToken) ?? []
  );
  let partial_index = $derived(
    (() => {
      for (let i = 0; i < $list_key_strokes.length; i++) {
        if ($list_key_strokes[i] !== my_numeric_route[i]) {
          return 0;
        }
      }
      return $list_key_strokes.length;
    })()
  ); //if key_stroke is a prefix of numeric_route, then the partial index if the key_stroke length, otherwise 0
  let entered_key_route= $derived(
    my_numeric_route.slice(0, partial_index).map(
      (index) => { return get(_available_keys)[index]; }
    ).join('')
  );
  let pending_key_route = $derived(
    my_numeric_route.slice(partial_index, my_numeric_route.length).map(
      (index) => { return get(_available_keys)[index]; }
    ).join('')
  );
  const min_step_hsl = 61; // smallest hsl degree
  let my_hsl = $derived(
    ($list_input_token.findIndex((token) => token === positionalInstance?.myToken) * min_step_hsl) % 360
  );
</script>

<InteractablePositional bind:this={positionalInstance} on_close={on_close}>
  <div class="button">
    <div class="enter_route" style={`background-color: hsla(${my_hsl}, 100%, 50%, 0.75);`}>
      {entered_key_route}
    </div>
    <div class="pending_route" style={`background-color: hsla(${my_hsl}, 100%, 50%, 0.25);`}>
      {pending_key_route}
    </div>
    <div style={`background-color: hsla(${my_hsl}, 100%, 50%, 0.125);`}>
      {@render children?.()}
    </div>
  </div>
</InteractablePositional>

<style>
.button {
  display: flex;
}
/* .enter_route {
  opacity: 0.5;
}
.pending_route{
  opacity: 0.5;
} */
</style>