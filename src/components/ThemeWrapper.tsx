//Added to all pages to modify dark and light mode
import { themeState } from "@/components/ThemeState";
import { useRecoilValue } from "recoil";

export default function ThemeWrapper(props: {children: any}){
    const theme = useRecoilValue(themeState);
    return(
        <div className={theme + " h-full w-full bg-cf"} >
        {props.children}
        </div>
    )
}