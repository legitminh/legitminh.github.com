import Link from "next/link";
import React from "react";
import NavFolder from "./NavFolder";
import { title } from "process";

export default function Navbar(){
    return (
        <div className=" bg-slate-400 w-96">
            <NavFolder title="Math" children={[
                
                <NavFolder title="LA" children={[
                    "OceanPalace",
                    "Hollywood"
                ]}/>, 
                "ACBA",
                "Calculus"]}
            />
            <NavFolder title="CS" children={[
                
                <NavFolder title="AI" children={[
                    "PNO",
                    "GPT"
                ]}/>, 
                "ACBA",
                "Calculus"]}
            />
        </div>
    )
}