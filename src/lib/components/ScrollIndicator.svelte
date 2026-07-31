<script lang="ts">
  import { page_down, page_up, state_viewport } from "$lib/stores/camera.svelte";
  import { onMount } from "svelte";
  import Interactable from "./Interactable.svelte";

  onMount(() => {
     // #region mouse / touch events

    function wheelHandler(e: WheelEvent) {
      e.preventDefault();
      if (e.deltaY > 0) {
        page_down();
      } else {
        page_up();
      }
    }

    // Touch-based swipe -> trigger single page up/down per gesture on mobile.
    let touchStartY: number | null = null;
    let lastTouchY: number | null = null;

    function touchStart(e: TouchEvent) {
      if (!e.touches || e.touches.length === 0) return;
      touchStartY = e.touches[0].clientY;
      lastTouchY = touchStartY;
    }

    function touchMove(e: TouchEvent) {
      if (!touchStartY) return;
      lastTouchY = e.touches[0].clientY;

      // If the user has moved enough, prevent native scrolling so we
      // can perform a fixed-step page action on touchend.
      const moved = Math.abs((lastTouchY ?? 0) - touchStartY) > 10;
      if (moved) {
        // preventDefault requires the listener to be non-passive.
        e.preventDefault();
      }
    }

    function touchEnd() {
      if (touchStartY == null || lastTouchY == null) {
        touchStartY = null;
        lastTouchY = null;
        return;
      }

      const delta = (touchStartY - lastTouchY);
      const THRESHOLD = 40; // px required to count as a page gesture

      if (Math.abs(delta) >= THRESHOLD) {
        if (delta > 0) {
          page_down();
        } else {
          page_up();
        }
      }

      touchStartY = null;
      lastTouchY = null;
    }

    window.addEventListener("wheel", wheelHandler, { passive: false });
    window.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: false });
    window.addEventListener("touchend", touchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", wheelHandler as EventListener);
      window.removeEventListener("touchstart", touchStart as EventListener);
      window.removeEventListener("touchmove", touchMove as EventListener);
      window.removeEventListener("touchend", touchEnd as EventListener);
    };
  });
</script>
{#if (state_viewport.world_height !== 1)}
<div class="scroll">
  <Interactable on_close={page_down} priority={-2}>
    &downarrow;
  </Interactable>
  <Interactable on_close={page_up} priority={-1}>
    &uparrow;
  </Interactable>
</div>
{/if}

<style>
  .scroll {
    height: calc(var(--min-box));
  }
</style>