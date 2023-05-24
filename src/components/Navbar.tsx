import Link from "next/link";
import React from "react";
import NavColumn from "./NavColumn";
import { title } from "process";

export default function Navbar(){
    return (
        <>
        <NavColumn title="Math" children={[
             
            <NavColumn title="LA" children={[
                "OceanPalace",
                "Hollywood"
            ]}/>, 
            "ACBA",
            "Calculus"]}
        />
        </>
    )
}