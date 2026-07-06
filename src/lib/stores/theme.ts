import { writable } from "svelte/store";

const _min_box = writable(0);

export const theme = {
    subscribe: _min_box.subscribe
};

export function set_theme(value: number) {
    _min_box.set(value);

    if (typeof document !== "undefined") {
        document.documentElement.style.setProperty(
            "--min-box",
            `${value}px`
        );
    }
}