import { writable } from "svelte/store";

interface Theme {
  name: string;
  name_to_color: Record<string,string>
}

export const themes: Theme[] = [
  {
    name: "dark",
    name_to_color: {
      "--primary": "#000000",
      "--secondary": "#1a1a1a",
      "--background": "#ffffff",
    }
  },
  {
    name: "light",
    name_to_color: {
      "--primary": "#ffffff",
      "--secondary": "#f0f0f0",
      "--background": "#000000",
    }
  },
];

const _theme_id = writable(0);

export const theme_id = {
    subscribe: _theme_id.subscribe
};

export function set_theme_id(value: number) {
    _theme_id.set(value);

    if (typeof document !== "undefined") {
        const theme = themes.at(value);
        if (theme === undefined) {
            throw new Error(`Theme with id ${value} does not exist`);
        }
        for (const [key, value] of Object.entries(theme.name_to_color)) {
        document.documentElement.style.setProperty(
          key,
          value
        );
      };
    }
}