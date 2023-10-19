//Added to all pages to modify dark and light mode
import { themeState } from "@/components/ThemeState";
import { useRecoilValue } from "recoil";

export default function ThemeWrapper(props: {children: any}){
    const theme = useRecoilValue(themeState);
    return(
        <div className={theme + " h-screen bg-cf"} >
        {props.children}
        </div>
    )
}