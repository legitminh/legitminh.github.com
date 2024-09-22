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
    // let defaultSelf = (
    //     <div className=" relative flex h-full w-full">
    //     {/* IMAGE */}
    //     <div className=" absolute h-full w-full overflow-clip">
    //         <Image className={" object-cover h-full object-center"}
    //         src={props.img} alt="" width={2048} height={2048}/>
    //         <div className="absolute inset-0 bg-c10 opacity-75"></div>
    //     </div> 

    //     {/* { flex-shrink-0, flex-grow } are used to ensure the left side have priority */}
    //     <div className=" flex-shrink-0 h-full w-[4rem]">
    //         <VerticalText>
    //             {props.text}
    //         </VerticalText>
    //     </div>

    //     {/* Right side */}
    //     <div className=" flex-grow relative h-full">
    //         {/* TEXTS */}
    //         {/* DATE */}
    //     </div>
    // </div>
    // );
    // let [self, setSelf] = useState(defaultSelf)
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            });
        },
        { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (containerRef.current) {
        observer.observe(containerRef.current);
        }

        return () => {
        if (containerRef.current) {
            observer.unobserve(containerRef.current);
        }
        };
    }, []);
    return (
        <div className=" w-full sm:w-[100%] md:w-[50%] lg:w-[33%] h-[32rem] p-[1rem]"> 
        {/* The outside border */}
            <Link className=" w-fit" href={props.link}>
            <div ref={containerRef} className=" relative w-[100%] h-[100%] border-cc border-[1px] overflow-clip scrollbar-hide cursor-pointer">
            {/* The inside visible area */}
                <div className=" flex h-full w-full">
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
                    
                    <div className={` absolute w-full h-full transition-transform duration-500 ${isVisible? 'top-[1rem] opacity-100' : '-translate-y-full opacity-0'}`} >
                        <div className=" pl-[2rem]"> 
                            <div className=" lg:text-[1.5rem] md:text-[1.5rem] text-[1.5rem] text-c0">
                                {props.description}
                            </div>
                        </div>
                    </div>
                    
                    <div className={` absolute w-full h-full transition-transform duration-500 ${isVisible? 'right-[1rem] opacity-100' : '-translate-x-full opacity-0'}`}>
                        {/* TEXTS */}
                        <div className=" relative h-full">
                            
                            <div className=" absolute bottom-0 right-0 text-right text-c0">
                                ...click to learn more
                            </div>
                        </div>
                        {/* DATE */}
                    </div> 
                    </div> 
                    </div> 
                    </Link>
                    </div> 

        );
            
            
    //     </div>
    //         //{/* Starts off offscreen (-100% self height bottom) then moves up */}
    //     );
    // }
    
    // let unhover = ()=>{
    //     setSelf(defaultSelf);
    // }
    // let selfLinked = <div></div>
    // if (props.link){ 
    //     selfLinked = <Link className=" w-fit" href={props.link}>{self}</Link>
    // }
    // return  (
    //     // Outermost layer is for screen resizing adaptation
        
    //     <div className=" w-full sm:w-[100%] md:w-[50%] lg:w-[33%] h-[32rem] p-[1rem]"> 
    //         <div className="w-[100%] h-[100%] border-cc border-[1px] overflow-clip scrollbar-hide "
    //         // onMouseEnter={hover}
    //         onMouseLeave={unhover}
    //         >
    //         {selfLinked}
    //         </div>
    //     </div>
    // );
}
