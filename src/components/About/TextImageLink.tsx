//One project display
import Image from "next/image";
import Link from "next/link";

export default function TextImageLink(
props: {
    img: string,
    text: string,
    link: string,
}){
    let result = (
        <div className=" flex h-min m-8 bg-cf hover:bg-ccBlue rounded-lg border-c0 border-2 overflow-hidden">
            {/* IMAGE */}
            <div className=" w-32 h-32 object-cover">
                <Image className=" object-cover w-32 h-32"
                src={props.img} alt="" width={1024} height={1024}/>
            </div> 
            {/* TEXTS */}
            <div className=" relative h-32">
                <div className=" text-c0 ml-2 text-4xl mt-10">
                    {props.text}
                </div>
            </div>
            {/* DATE */}
        </div>
    )
    if (props.link){ 
        result = <Link href={props.link}>{result}</Link>
    }
    return result;
}
