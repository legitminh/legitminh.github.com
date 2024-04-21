//One project display
/**
 * Fixed sized container to give brief overview
 */
import Image from "next/image";
import Link from "next/link";
import { themeState } from "../ThemeState";
import { useRecoilState } from "recoil";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import VerticalText from "../Text/VerticalText";
export default function TextImageLink(
props: {
    img: string,
    text: string,
    link: string,
    description?: any,
}){
    // var description = <div></div>;
    // if (props.description){
    //     description = <p className=" text-c4 ml-2">{props.description}</p>;
    // }
    let defaultSelf = (
        <div className=" relative flex h-full w-full">
        {/* IMAGE */}
        <div className=" absolute h-full w-full overflow-clip">
            <Image className={" object-cover h-full object-center"}
            src={props.img} alt="" width={2048} height={2048}/>
            <div className="absolute inset-0 bg-c10 opacity-75"></div>
        </div> 

        {/* { flex-shrink-0, flex-grow } are used to ensure the left side have priority */}
        <div className=" flex-shrink-0 h-full w-[4rem]">
            <VerticalText>
                {props.text}
            </VerticalText>
        </div>

        {/* Right side */}
        <div className=" flex-grow relative h-full">
            {/* TEXTS */}
            {/* DATE */}
        </div>
    </div>
    );
    let [self, setSelf] = useState(defaultSelf)
    let hover = ()=>{
        setSelf(
            <div className=" relative flex h-full w-full transition-transform transition-opacity ease-in-out duration-500">
            {/* IMAGE */}
            <div className=" absolute h-full w-full overflow-clip">
                <Image className={" object-cover h-full object-center"}
                src={props.img} alt="" width={2048} height={2048}/>
                <div className="absolute inset-0 bg-c10 opacity-75"></div>
            </div> 

            {/* { flex-shrink-0, flex-grow } are used to ensure the left side have priority */}
            <div className=" flex-shrink-0 h-full w-[4rem] transition-transform duration-500">
                <VerticalText>
                    {props.text}
                </VerticalText>
            </div>

            {/* Right side */}
            <div className=" flex-grow relative h-full transition-transform -translate-y-full duration-500">
                {/* TEXTS */}
                <div className=" w-full h-full absolute bottom-[-100%] px-[1rem] pt-[1rem] ">
                    <div className=" lg:text-[4rem] md:text-[3rem] text-[2rem] text-c0">
                        {props.description}
                    </div>
                    <div className=" absolute text-c0 bottom-0 right-0 pr-[1rem]">
                        ...click to learn more
                    </div>
                </div>
                {/* DATE */}
            </div>
        </div>
            //{/* Starts off offscreen (-100% self height bottom) then moves up */}
        );
    }
    
    let unhover = ()=>{
        setSelf(defaultSelf);
    }
    let selfLinked = <div></div>
    if (props.link){ 
        selfLinked = <Link className=" w-fit" href={props.link}>{self}</Link>
    }
    return  (
        // Outermost layer is for screen resizing adaptation
        <div className=" w-full md:w-[100%] lg:w-[100%] h-[32rem] m-[1rem] border-cc border-[1px] overflow-clip scrollbar-hide"
            onMouseEnter={hover}
            onMouseLeave={unhover}
        > 
        {selfLinked}
        </div>);
}
