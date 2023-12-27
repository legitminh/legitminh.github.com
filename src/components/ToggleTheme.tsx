//Just a button to change DarkLight mode
//BUG: FOR SOME REASON THE EFFECT IS OPPOSITE OF THE THEME
import { useRecoilState } from "recoil";
import { themeState } from "./ThemeState";
export default function ToggleTheme() {
  const [theme, setTheme] = useRecoilState(themeState);
  const onClick = () => setTheme(theme == "light" ? "dark" : "light");
  console.log(theme)
  return (
    <button onClick={onClick} className=" text-c0">
      {theme}
    </button>
  );
}
