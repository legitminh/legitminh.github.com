import { get, writable } from "svelte/store";

const DEFAULT_MIN_BOX = 48;
const STORAGE_KEY = "min_box";

function readStoredMinBox() {
    if (typeof window === "undefined") {
        return null;
    }

    const storedValue = window.sessionStorage.getItem(STORAGE_KEY);
    const parsedValue = Number(storedValue);

    if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
        return null;
    }

    return parsedValue;
}

function applyMinBoxToDom(value: number) {
    if (typeof document !== "undefined") {
        document.documentElement.style.setProperty(
            "--min-box",
            `${value}px`
        );
    }
}

const initialMinBox = readStoredMinBox() ?? DEFAULT_MIN_BOX;
const _min_box = writable(initialMinBox);

export const min_box = {
    subscribe: _min_box.subscribe
};

export function set_min_box(value: number) {
    _min_box.set(value);

    if (typeof window !== "undefined") {
        window.sessionStorage.setItem(STORAGE_KEY, `${value}`);
    }

    applyMinBoxToDom(value);
}

console.log("hi");
applyMinBoxToDom(get(_min_box));