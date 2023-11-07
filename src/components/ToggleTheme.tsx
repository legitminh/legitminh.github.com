//Just a button to change DarkLight mode
import { useRecoilState } from 'recoil';
import { themeState } from './ThemeState';
export default function ToggleTheme() {
  const [theme, setTheme] = useRecoilState(themeState);
  const onClick = () => setTheme(theme == "light" ? "dark" : "light");

  return <button onClick={onClick} className=' text-c0'> {theme} </button>
}