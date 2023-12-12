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
import ToggleTheme from "../ToggleTheme";
import { pathState } from "./Path";
import { useRecoilState } from "recoil";
export default function Navbar() {
  const [path, setPath] = useRecoilState(pathState);
  const [open, setOpen] = useState(true); //if the map is opened
  // const map = {
  //   "About" : [],
  //   "Projects": [
  //     {"2023" : [
  //       "AstroFest",
  //       "MicroFest"
  //     ]},
  //     "2022",
  //     "2021"
  //   ],
  //   "Blog" : ""
  // };
  const map = [
    ["About"],
    ["Projects",[
      ["2023",[
        "AstroFest",
        "MicroFest"
      ]],
      "2022",
      "2021"
    ]],
    "Blog"
  ]
  const links = {
    home:"/"
  };
  // console.log(path);
  // setPath([0]);
  // console.log(path);
  var activePath = [1]; //get children of root as first activePath

  let colums = [];
  if (open){
    let previous = map;
    for (let i = 0; i < activePath.length; i++){ //for each column
      let colum = [];
      for (let j = 0; j < previous[activePath[i]].length; j++){ //for each children of that column
        colum.push(previous[activePath[i]][j]);
      }
      colums.push(colum);
      previous = previous[activePath[i]];
    }
  }
  console.log(colums);


  return (
    // Background of the bar will be high blue
      <div className={"flex first z-10 w-full"}>
        {/* <NavFolder destination="/" title="Home">
          <NavFolder destination={"./about"} title="NothingInteresante">
            <NavFolder destination={"./about"} title="NothingInteresante1">
              <NavFolder destination={"./about"} title="NothingInteresante2">
                <NavFolder destination={"./about"} title="NothingInteresante3">
                  <NavFolder destination={"./about"} title="NothingInteresante4">
                    <NavFolder destination={"./about"} title="NothingInteresante5">
                      <NavFolder destination={"./about"} title="NothingInteresante6">
                        <NavFolder destination={"./about"} title="NothingInteresante7">
                    
                        </NavFolder>  
                      </NavFolder>
                    </NavFolder>
                  </NavFolder>
                </NavFolder>
              </NavFolder>
            </NavFolder>
          </NavFolder>

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
        </NavFolder> */}
        <div className=" text-c0 hover:bg-c8Blue" onClick={()=>setOpen(!open)} >
          Root
        </div>
        <ul className=" flex text-c0">
          {colums.map((child, index)=>( //for each column
            <ul className=" text-c0">
              {child.map((child, index)=>( //for each cell
                getCell(child)
              ) )}
            </ul>
          ))}
        </ul>
        {/* DarkModeButton */}
        <div className=" mr-0 right-0 absolute">
          <ToggleTheme></ToggleTheme>
        </div>
      </div>
  );
}
function getCell(child){
  if (child instanceof String){
    return (
    <li className=" text-c0">
      {child}
    </li>
    );
  } 
  else {
    return (
    <li className=" text-c0">
      {child[0]}
    </li>
    );
  }
}
