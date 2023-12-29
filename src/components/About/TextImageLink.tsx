//One project display
import Image from "next/image";
import Link from "next/link";
import { themeState } from "../ThemeState";
import { useRecoilState } from "recoil";
export default function TextImageLink(
props: {
    img: string,
    text: string,
    link: string,
    description?: any,
}){
    var description = <div></div>;
    if (props.description){
        description = <div className=" text-c4 ml-2 h-fit">{props.description}</div>;
    }
    const [theme, setTheme] = useRecoilState(themeState);

    let result = (
        <div className=" md:flex rounded-md md:rounded-none md:rounded-l-md h-fit ml-4 hover:bg-ccBlue border-c0 border-t-2 m-[2rem] overflow-hidden"> 
            {/* IMAGE */}
            <div className=" min-w-[10rem] object-cover">
                <Image className={" object-cover md:w-[10rem] h-[12rem]"}
                src={props.img} alt="" width={1024} height={1024}/>
            </div> 
            {/* TEXTS */}
            <div className=" th-fit w-fit overflow-scroll scrollbar-hide">
                <div className=" text-c0 text-4xl ml-2">
                    {props.text}
                </div>
                {description}
            </div>
            {/* DATE */}
        </div>
    )
    if (props.link){ 
        result = <Link href={props.link}>{result}</Link>
    }
    return result;
}
