//The bar that will be present in pretty much all web pages. Composed of one master navfolder
/*TODO
Takes parameter of page location to create a top bar that display all page children for quick access
Display 
Rename to Document
*/
import Link from "next/link";
import React, { useState,useEffect } from "react";
import NavFolder from "./NavFolder";
import { title } from "process";
import NavItem from "./NavItem";


export default function Navbar(props:{
    children: any
}
){
    const [isDark, setIsDark] = useState(true);
    // console.log(localStorage.getItem("prefers-color-scheme"));
    const toggleMode= () => {
        setIsDark(!isDark);
        console.log("changed to "+ localStorage.getItem('prefers-color-scheme') + (isDark ? 'dark' : 'light') + isDark);
    };
    return (
        //Document `down[0]
        <div className={(isDark? "dark" : "light" )+ " h-screen bg-cf"}>
            <div className={" flex first-"}>
                
                <NavFolder destination="/" title="home">
                    <NavItem destination={"./about"}>About</NavItem>
                    <NavItem destination={"./projects"}>Projects</NavItem>
                    <NavFolder destination="./blog" title="Blog">
                        <NavItem destination={"./blogs/10gradeCampaign"}>10 Grade Stuco Campaign</NavItem>
                </NavFolder>


                    {/* test */}
                    {/* <NavFolder title="Math" >
                        
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
                    </NavFolder> */}
                </NavFolder>
                <div className=" bg-bkg text-c0">
                    <button onClick={toggleMode}>{(isDark)? 'light' : 'dark'}</button>
                </div>
            </div>

            <div >
                {props.children}
            </div>
        </div>
    )
}