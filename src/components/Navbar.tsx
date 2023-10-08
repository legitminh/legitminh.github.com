//The bar that will be present in web pages. Composed of one master navfolder
import Link from "next/link";
import React from "react";
import NavFolder from "./NavFolder";
import { title } from "process";

export default function Navbar(){
    return (

        <NavFolder title="0">
            <NavFolder title="Math" >
                
                <NavFolder title="LA">
                    <p>
                        OceanPalace
                    </p>
                    <p>
                        Hollywood
                    </p>
                </NavFolder>
                <p>
                    ACBA
                </p>
                <p>
                    Calculus
                </p>
                <NavFolder title="MultiCalculus">
                    <p>
                        Terraseract
                    </p>
                    <p>
                        PassageOfTime
                    </p>
                </NavFolder>
            </NavFolder>
            <NavFolder title="CS">
                
                <NavFolder title="AI">
                    <p>
                        PNO
                    </p>
                    <p>
                        GPT
                    </p>
                </NavFolder>
                <p >
                    HSBCπV48692121
                </p>
                <p>
                    PNO
                </p>
                <p >
                    英文但中文结构
                </p>
            </NavFolder>
        </NavFolder>
    )
}