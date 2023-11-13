//Added to all pages to modify dark and light mode
import { themeState } from "@/components/ThemeState";
import { useRecoilValue } from "recoil";

export default function ThemeWrapper(props: { children: any }) {
  const theme = useRecoilValue(themeState);
  const notTheme = theme == "dark" ? "light" : "dark";
  return (
    <div className={notTheme + " h-full w-full bg-cf"}>{props.children}</div>
  );
}
