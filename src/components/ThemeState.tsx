//Save the state of the theme
/**
 * //In this file
 * export const ...
 * 
 * //In other files
 * import { useRecoilState } from "recoil";
 * import { themeState } from "./ThemeState";
 * const [theme, setTheme] = useRecoilState(themeState);
 * readtheme = theme;
 * setTheme("dark");
 */
import { atom } from "recoil";

export const themeState = atom({ key: "theme", default: "light" });
