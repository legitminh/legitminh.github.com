"use client"
//Added to all pages to modify dark and light mode

import { themeState } from "@/components/ThemeState";
import { useRecoilValue } from "recoil";
import NoSsr from "./NoSsr";
export default function ThemeWrapper(props: { children: any }) {
  const theme = useRecoilValue(themeState);
  // const notTheme = theme ? "light" : "dark";
  return (
    <NoSsr>
    <div className={theme + " min-h-screen w-full bg-gradient-to-br to-ccBlue from-c10 bg-cover bg-fixed "}>{props.children}</div>
    </NoSsr>
  );
}
 