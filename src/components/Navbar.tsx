//The bar that will be present in pretty much all web pages. Composed of one master navfolder
/*TODO
Takes parameter of page location to create a top bar that display all page children for quick access
Display 
Rename to Document
*/
import Link from "next/link";
import React, { useState,useEffect } from "react";
import NavFolder from "./NavFolder";
import NavItem from "./NavItem";
import ToggleTheme from "./ToggleTheme";

export default function Navbar(){
    return (
        // Background of the bar will be high blue
        <div className={ " bg-ccBlue w-full"}> 
            
            
            <div className={" flex first- z-10"}>
                
                <NavFolder destination="/" title="home">
                    <NavItem destination={"./about"}>About</NavItem>
                    <NavItem destination={"./projects"}>Projects</NavItem>
                    <NavFolder destination="./blog" title="Blog">
                        <NavItem destination={"./blogs/10gradeCampaign"}>10 Grade Stuco Campaign</NavItem>
                    </NavFolder>
                </NavFolder>
                <ToggleTheme></ToggleTheme>
            </div>
            
            
        </div>
    )
}