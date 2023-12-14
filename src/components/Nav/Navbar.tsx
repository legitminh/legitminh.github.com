//N
//The bar that will be present in pretty much all web pages. Composed of one master navfolder
/*TODO
Takes parameter of page location to create a top bar that display all page children for quick access
Display 
Rename to Document
*/
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavFolder from "../Archived/NavFolder";
import NavItem from "../Archived/NavItem";
import ToggleTheme from "../ToggleTheme";
import { pathState } from "./Path";
import { activePathState } from "./Path";
import { useRecoilState } from "recoil";
import Node from "./Node";
import EndNode from "./EndNode";
export default function Navbar() {
  
  const [path, setPath] = useRecoilState(pathState);
  const [open, setOpen] = useState(true); //if the map is opened
  const [activePath, setActivePath] = useRecoilState(activePathState);
  console.log(activePath);
  /**
   * NodeStructure: 
   *  ID : {Name, Url,..., children}
   * PathStructure:
   *  Node, Node, FinalNode
   */
  // const map = { 
  //   c: {
  //     "About" : {
  //       c: []
  //     },

  //     "Projects" : {
  //       c: {
  //         "2023" : {
  //           c: {
  //             "AstroFest" : "c",
  //             "MicroFest" : "c"
  //           }
  //         },
  //         "2021" : "c", //no more children
  //         "2022" : "c"
  //       }
  //     } 
  //   }
  // };
  const map = {c:[
    {n:"Home", l:"/", c:[
      {n:"About", l:"/about"},
      {n:"Projects", l:"/projects", c:[
        {n: "2023", l:"/projects#2023"
        // ,c: [
        //   {n:"AstroFest"},
        //   {n:"MicroFest"}
        // ]
        },
        {n:"2022", l:"/projects#2022"},
        {n:"2021", l:"/projects#2021"}
      ]},
      {n:"Blog", l: "/blog"}
    ]}
  ]}
  const links = {
    home:"/"
  };
  // console.log(path);
  // setPath([0]);
  // console.log(path);
  // var [activePath, setActivePath] = useState([1, 0]); //get children of root as first activePath

  let colums: never[] = [];
  if (open){  //transform into list of nodes for render
    let curNode = map; //starts at origin Node
    let path = []; //origin have no path
    activePath.forEach(index => {
      curNode = curNode.c[index];
      path.push(index); //at this location

      let colum = [];
      curNode.c.forEach((node, index) => {
        if (node.c) { //if is a node
          colum.push(
            <Node name={node.n} link={node.l} path={path.concat([index])}></Node>
          );
        }
        else{
          colum.push(
            <EndNode name={node.n} link={node.l}></EndNode>
          );
        }
        
      });
      colums.push(colum);
    });
  }
  // console.log(colums);


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
        {renderColums(colums)        }
      

        {/* DarkModeButton */}
        <div className=" mr-0 right-0 absolute">
          <ToggleTheme></ToggleTheme>
        </div>
      </div>
  );
}
function renderColums(colums){ //render each colum by returning
  let everything = [];
  colums.forEach(colum=>{ //for each column
    let cl = [];
    colum.forEach(node => {
      cl.push(node);
    });    
    everything.push(<div>{cl}</div>);
  })
  return <div className=" flex">
    {
      everything
    }
  </div>;
}
// function renderColum(colum){
  

// }
// function getNode(child: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined){ //return the nodes
//   // console.log(typeof child);
//   const [activePath, setActivePath] = useRecoilState(activePathState);
//   if (typeof child === 'string' ){
//     return (
//     <li className=" text-c0">
//       {child}
//     </li>
//     );
//   } 
//   else {
//     return (
//     <li className=" text-c0 hover:bg-c8Blue" >
//       {child}
//     </li>
//     );
//   }
// }