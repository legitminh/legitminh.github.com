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
import React from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const themeState = atom({ key: "theme", default: "dark", effects: [persistAtom]});
// export function useDarkMode() {
//     const [isInitial, setIsInitial] = React.useState(true);
//     const [darkModeStored, setDarkModeStored] = useRecoilState(themeState);
  
//     React.useEffect(() => {
//     //   setIsInitial(false);
//       setTimeout(()=>{
//         setIsInitial(false)
//       }, 500)
//     }, []);
  
//     return [
//       isInitial === true ? "dark" : darkModeStored,
//       setDarkModeStored
//     ] as const;
// }