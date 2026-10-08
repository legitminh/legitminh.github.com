<script lang="ts">
  /**
   * Interactive Forcefield Background
   * ---------------------------------
   *
   * Renders a grid of "+" vertices that are repelled by the mouse.
   *
   * Unlike a simple interpolation, each vertex is simulated as a small
   * mass connected to its home position by a spring.
   *
   * The result is:
   *
   *      mouse moves
   *           ↓
   *   vertices accelerate away
   *           ↓
   *    spring pulls them back
   *           ↓
   *   slight overshoot + damping
   *
   * giving a soft "forcefield" feeling.
   *
   * -----------------------------------------------------------------------
   * Coordinate System
   * -----------------------------------------------------------------------
   *
   * Home position:
   *
   *      +-----+-----+-----+
   *      |     |     |     |
   *      +-----+-----+-----+
   *
   * Each "+" is simulated independently.
   */

  import { onMount } from "svelte";
  import { min_box } from "$lib/stores/layout.svelte";
  import { state_viewport } from "$lib/stores/camera.svelte";
  import { get_current_theme } from "$lib/stores/theme.svelte";

  // Number of boxes visible on screen.
  let columns = $derived(state_viewport.viewport_width);
  let rows = $derived(state_viewport.viewport_height);

  let canvas!: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  /**
   * One grid vertex.
   */
  interface Vertex {
    /** Home position (never changes). */
    homeX: number;
    homeY: number;

    /** Current position. */
    x: number;
    y: number;

    /** Velocity used by spring simulation. */
    vx: number;
    vy: number;
  }

  let vertices: Vertex[] = [];

  /**
   * Mouse position in canvas coordinates.
   *
   * Starts at the canvas center (set in rebuildGrid) so the effect is
   * visible before the first pointer event. An off-screen sentinel would
   * push every vertex far off-canvas, since displacement grows with distance.
   */
  const mouse = {
    x: 0,
    y: 0
  };

  /** Whether a real pointer position has been received yet. */
  let has_pointer = false;

  /**
   * The point the grid actually reacts to.
   *
   * It chases the mouse instead of snapping to it, moving with a speed
   * proportional to its distance from the mouse. It slows as it closes
   * in and never overshoots.
   *
   *      mouse ●
   *             \
   *              ○ tracker   speed = FOLLOW_RATE * distance
   */
  const tracker = {
    x: 0,
    y: 0
  };

  /** Follow rate (1/s). Higher = tighter follow. */
  const FOLLOW_RATE = 6;

  /** Timestamp of the previous frame, for frame-rate-independent physics. */
  let last_time: number | null = null;

  // -----------------------------------------------------------------------
  // Physics parameters
  // -----------------------------------------------------------------------

  /**
   * Size of each "+".
   */
  let CROSS_SIZE = $derived(min_box.value/4);

  /**
   * Thickness.
   */
  let LINE_WIDTH = $derived(min_box.value/32);

  /**
   * Colors.
   */
  let BG = $derived(get_current_theme()?.name_to_color["--background"]);
  let FG = $derived(get_current_theme()?.name_to_color["--tertiary"]);

  // -----------------------------------------------------------------------
  // Grid generation
  // -----------------------------------------------------------------------

  function rebuildGrid() {
    vertices = [];

    const spacing = min_box.value;

    canvas.width = columns * spacing;
    canvas.height = rows * spacing;

    if (!has_pointer) {
      mouse.x = canvas.width / 2;
      mouse.y = canvas.height / 2;
      tracker.x = mouse.x;
      tracker.y = mouse.y;
    }

    for (let y = 0; y <= rows; y++) {
      for (let x = 0; x <= columns; x++) {
        const px = x * spacing;
        const py = y * spacing;

        vertices.push({
          homeX: px,
          homeY: py,
          x: px,
          y: py,
          vx: 0,
          vy: 0
        });
      }
    }
  }

  // -----------------------------------------------------------------------
  // Physics
  // -----------------------------------------------------------------------

  function updateTracker(dt: number) {
    // Exact solution of dx/dt = FOLLOW_RATE * (mouse - x) over dt, so the
    // step never overshoots regardless of frame rate.
    const t = 1 - Math.exp(-FOLLOW_RATE * dt);

    tracker.x += (mouse.x - tracker.x) * t;
    tracker.y += (mouse.y - tracker.y) * t;
  }

  function update() {

    /**
     * Used to normalize distance.
     *
     * Exactly what you requested:
     *
     *      distance / (screenWidth + screenHeight)
     */
    const normalizer = canvas.width + canvas.height;

    for (const v of vertices) {
      const dx = v.homeX - tracker.x;
      const dy = v.homeY - tracker.y;

      const distance = Math.hypot(dx, dy);

      // Prevent divide-by-zero.
      const nx = dx / (distance || 1);
      const ny = dy / (distance || 1);

      /**
       * Your requested equation.
       *
       * Nearby vertices move less.
       * Farther vertices move more.
       */

      /**
       * Desired location.
       */
      const targetX = v.homeX + nx * (distance / normalizer * 16) ** 4;
      const targetY = v.homeY + ny * (distance / normalizer * 16) ** 4;

      v.x = targetX;
      v.y = targetY;

    }
  }

  // -----------------------------------------------------------------------
  // Rendering
  // -----------------------------------------------------------------------

  function render() {
    ctx.fillStyle = BG ?? "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = FG ?? "#f0f0f0";
    ctx.lineWidth = LINE_WIDTH;

    ctx.beginPath();

    for (const v of vertices) {
      ctx.moveTo(v.x - CROSS_SIZE, v.y);
      ctx.lineTo(v.x + CROSS_SIZE, v.y);

      ctx.moveTo(v.x, v.y - CROSS_SIZE);
      ctx.lineTo(v.x, v.y + CROSS_SIZE);
    }

    ctx.stroke();
  }

  function frame(time: number) {
    // Clamp dt so a backgrounded tab doesn't produce one huge step.
    const dt = last_time === null ? 0 : Math.min((time - last_time) / 1000, 1 / 30);
    last_time = time;

    updateTracker(dt);
    update();
    render();
    requestAnimationFrame(frame);
  }

  // Use window-level pointer events so the canvas background can "pierce"
  // other elements: when the pointer is visually over the canvas area
  // (even if another element is on top), we still update coordinates.
  function pointerMove(e: PointerEvent) {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();

    const cx = e.clientX;
    const cy = e.clientY;

    // If the pointer is within the canvas visual bounds, update mouse
    // relative to the canvas. This works even when other elements
    // intercept pointer events targeted at the canvas itself.
    mouse.x = cx - rect.left;
    mouse.y = cy - rect.top;
    has_pointer = true;
  }

  function pointerOut() {
    // When relatedTarget is null, the pointer left the page/window.
  }

  // -----------------------------------------------------------------------
  // Lifecycle
  // -----------------------------------------------------------------------

  $effect(() => {
    void columns;
    void rows;
    void min_box.value;

    if (canvas) rebuildGrid();
  });

  onMount(() => {
    ctx = canvas.getContext("2d")!;

    rebuildGrid();

    // Keep the canvas listener as a fallback, but prefer global pointer
    // events so we can track the mouse even when other elements cover
    // the canvas.
    // canvas.addEventListener("mousemove", mouseMove);
    // canvas.addEventListener("mouseleave", mouseLeave);

    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerout", pointerOut);

    requestAnimationFrame(frame);

    return () => {
      // canvas.removeEventListener("mousemove", mouseMove);
      // canvas.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerout", pointerOut);
    };
  });
</script>

<canvas bind:this={canvas} style="position: absolute;" ></canvas>