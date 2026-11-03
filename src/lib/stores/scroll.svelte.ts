const STORAGE_KEY = "lockstep_scrolling";

function read_stored_lockstep_scrolling() {
  if (typeof window === "undefined") return true;
  return window.sessionStorage.getItem(STORAGE_KEY) !== "false";
}

export const lockstep_scrolling = $state({
  enabled: read_stored_lockstep_scrolling(),
  set: (enabled: boolean) => {
    lockstep_scrolling.enabled = enabled;
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, `${enabled}`);
    }
  }
});
