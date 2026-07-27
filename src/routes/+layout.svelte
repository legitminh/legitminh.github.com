<script lang="ts">
  import { get } from "svelte/store";
  import { onMount } from 'svelte';
  import favicon from '$lib/assets/favicon.svg';
  import Grid from '$lib/components/Grid.svelte';
  import '../app.css';
  let { children } = $props();
  import {
    add_key_strokes,
    reset_key_strokes,
    _list_key_strokes,
    _list_input_token,
    _available_keys,
    base_conversion_s_endian
  } from '$lib/stores/input';
  import { min_box } from "$lib/stores/layout.svelte";
  import { set_theme_id, theme_id } from "$lib/stores/theme";
  import Camera from "$lib/components/Camera.svelte";
  import ScrollIndicator from "$lib/components/ScrollIndicator.svelte";

  onMount(() => {
    console.log("layout mounted");
    // #region key events
    const handleKeyDown = (event: KeyboardEvent) => {
      add_key_strokes(event.key);
    };

    const handleKeyUp = () => {
      // console.log(get(_list_key_strokes), get(_available_keys), get(_list_input_token));
      if (get(_list_key_strokes).length === 0) {
        return;
      }
      if (get(_available_keys).length ** get(_list_key_strokes).length < get(_list_input_token).length) {
        return;
      }
      const chosen_action = base_conversion_s_endian(get(_list_key_strokes), get(_available_keys).length);
      if (chosen_action >= get(_list_input_token).length) {
        alert('invalid key strokes');
        reset_key_strokes();
        return;
      }
      // viable action
      get(_list_input_token)[chosen_action].on_close();
      // correct stroke count
      reset_key_strokes();
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    // #endregion

    // #region mouse events
    window.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        console.log('down');
      } else {
        console.log('up');
      }
    }, { passive: false });

    // #region load store effects
    min_box.set(min_box.value);
    set_theme_id($theme_id);

    // #endregion

  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="app-shell">
  <Grid />
  <Camera>
    {@render children()}
  </Camera>
  <ScrollIndicator></ScrollIndicator>
</div>

<style>
  .app-shell {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100dvh;
    height: 100dvh;
    overflow: hidden;
  }
</style>
