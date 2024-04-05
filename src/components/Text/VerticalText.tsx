import { useLayoutEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../ThemeState";

export default function VerticalText(
    props: {
        children: any;
    }
){

    const [theme, setTheme] = useRecoilState(themeState);
    // Use this useRef<HTMLDivElement>(null) instead of useRef() to avoid type conflic somehow
    const targetRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });

    useLayoutEffect(() => {
        if (targetRef.current) {
        let current = targetRef.current as HTMLElement;
        setDimensions({
            width: current.offsetWidth,
            height: current.offsetHeight
        });
        }
    }, []);
    //  translateY(-${Math.round(dimensions.width / 2 )-16 }px)
    let title = (<div className=" w-max text-c0 uppercase" ref={targetRef} style={{ transform: `translateX(-${Math.round(dimensions.width / 2 )-16 }px) rotate(-90deg)`}} >{props.children}</div>);
    return (
        // <div className=" -rotate-90 -translate-x-[160px]">
        //     {props.children}
        // </div>
    
        <div className=" relative h-full"> 
            {/*  */}
            <div className=" flex items-center absolute w-screen h-full">
            {title}
            </div>
        </div>
    )
    
}