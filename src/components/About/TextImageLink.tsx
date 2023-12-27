//One project display
import Image from "next/image";
import Link from "next/link";

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
    let result = (
        // lg is wider than 1024
        <div className=" md:flex h-max ml-4 hover:bg-ccBlue border-c0 border-t-2 overflow-visible"> 
            {/* IMAGE */}
            <div className=" min-w-[8rem] object-cover">
                <Image className=" object-cover md:w-[8rem] h-[8rem]"
                src={props.img} alt="" width={1024} height={1024}/>
            </div> 
            {/* TEXTS */}
            <div className=" relative h-max h-min[32rem] w-fit">
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
