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

export const min_box = $state({
  value: initialMinBox,
  set: (value: number) => {
    min_box.value = value

    if (typeof window !== "undefined") {
        window.sessionStorage.setItem(STORAGE_KEY, `${value}`);
    }

    applyMinBoxToDom(value);
  }
})
