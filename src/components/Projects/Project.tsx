//One project display
import Image from "next/image";
import Link from "next/link";

export default function Project(
props: {
    img: string,
    description: string,
    title: string,
    madeWith: any,
    date: string,
    link: string,
}){
    let result = (
        // lg is wider than 1024
        <div className=" lg:flex h-max ml-4 bg-cf hover:bg-ccBlue border-c0 border-t-2 overflow-hidden"> 
            {/* IMAGE */}
            <div className=" min-w-[8rem] object-cover">
                <Image className=" object-cover w-[8rem] h-[8rem]"
                src={props.img} alt="" width={1024} height={1024}/>
            </div> 
            {/* TEXTS */}
            <div className=" relative h-max h-min[32rem] w-fit min-w-[32rem]">
                <div className=" text-c0 ml-2">
                    {props.title}
                </div>
                <div  className=" text-c4 ml-2">
                    {props.description}
                </div>
                <div className=" text-c0 ml-2 bottom-0">
                    {props.date}
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
