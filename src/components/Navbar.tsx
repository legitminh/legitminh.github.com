//The bar that will be present in pretty much all web pages. Composed of one master navfolder
/*TODO
Takes parameter of page location to create a top bar that display all page children for quick access
Display 
Rename to Document
*/
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavFolder from "./NavFolder";
import NavItem from "./NavItem";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  return (
    // Background of the bar will be high blue
    <div className={" w-full"}>
      <div className={"flex first z-10"}>
        <NavFolder destination="/" title="Home">
          <NavItem destination={"./about"}>NothingInteresante</NavItem>

          <NavFolder destination={"./about"} title="About">
            {" "}
          </NavFolder>
          <NavFolder destination={"./projects"} title="Projectshihihihi">
            <NavFolder destination={"./projects#2023"} title="2023">
              Hihihihihihihihih
            </NavFolder>
            <NavItem destination={"./projects#2022"}>2022</NavItem>
            <NavItem destination={"./projects#2021"}>2021</NavItem>
          </NavFolder>
          <NavFolder destination="./blog" title="Blog">
            <NavItem destination={"./blogs/10gradeCampaign"}>
              10 Grade Stuco Campaign
            </NavItem>
          </NavFolder>
        </NavFolder>
        <ToggleTheme></ToggleTheme>
      </div>
    </div>
  );
}
