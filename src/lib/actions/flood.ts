// lib/actions/flood.ts
// floods the screen with `color` from this node's box when `active` turns true, and lets it fade once `active` turns false
import { start_flood, release_flood } from "$lib/stores/flood.svelte";

type FloodParams = { active: boolean; color: string; enabled?: boolean };

export function flood(node: HTMLElement, params: FloodParams) {
  let was_active = params.active; // an element mounting already active shouldn't flood
  let flood_id: number | null = null;

  const release = () => {
    if (flood_id !== null) release_flood(flood_id);
    flood_id = null;
  };

  const update = (next: FloodParams) => {
    if ((next.enabled ?? true) && next.active && !was_active) {
      flood_id = start_flood(node.getBoundingClientRect(), next.color);
    } else if (!next.active) {
      release();
    }
    was_active = next.active;
  };

  return { update, destroy: release };
}
