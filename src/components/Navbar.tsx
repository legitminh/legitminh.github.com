import Link from "next/link";
import React from "react";
import NavColumn from "./NavColumn";
import { title } from "process";

export default function Navbar(){
    return (
        <div className=" block">
        <NavColumn title="Math" children={[
             
            <NavColumn title="LA" children={[
                "OceanPalace",
                "Hollywood"
            ]}/>, 
            "ACBA",
            "Calculus"]}
        />
        <NavColumn title="CS" children={[
             
             <NavColumn title="AI" children={[
                 "PNO",
                 "GPT"
             ]}/>, 
             "ACBA",
             "Calculus"]}
         />
        </div>
    )
}