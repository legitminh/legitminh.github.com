//One project display
/**
 * Fixed sized container to give brief overview
 */
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
        description = <p className=" text-c4 ml-2">{props.description}</p>;
    }
    const [theme, setTheme] = useRecoilState(themeState);

    let result = (
        <div className="">
            {/* IMAGE */}
            <div className=" w-full object-cover">
                <Image className={" object-cover w-full h-[8rem] object-center"}
                src={props.img} alt="" width={1024} height={1024}/>
            </div> 
            {/* TEXTS */}
            <div className=" h-fit w-fit m-2">
                <div className=" text-c0 text-lg ml-2">
                    {props.text}
                </div>
                {description}
            </div>
            {/* DATE */}
        </div>
    )
    if (props.link){ 
        result = <Link className=" w-fit" href={props.link}>{result}</Link>
    }
    return  (
        <div className=" w-full md:w-[50%] lg:w-1/3 ">
        <div className=" h-[16rem] m-[1rem] border-cc border-[1px] rounded-md overflow-scroll scrollbar-hide"> 
        {result}
        </div>
        </div>);
}
