import { writable } from "svelte/store";

const _min_box = writable(0);

export const min_box = {
    subscribe: _min_box.subscribe
};

export function set_min_box(value: number) {
    _min_box.set(value);

    if (typeof document !== "undefined") {
        document.documentElement.style.setProperty(
            "--min-box",
            `${value}px`
        );
    }
}