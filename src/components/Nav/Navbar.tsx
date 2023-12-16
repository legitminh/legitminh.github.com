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
  const [open, setOpen] = useState(false); //if the map is opened
  const [activePath, setActivePath] = useRecoilState(activePathState);
  console.log(activePath);
  /**
   * NodeStructure: 
   *  ID : {Name, Url,..., children}
   * PathStructure:
   *  Node, Node, FinalNode
   */
  const map :any = {c:[
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
  ]};
  const links = {
    home:"/"
  };
  // console.log(path);
  // setPath([0]);
  // console.log(path);
  // var [activePath, setActivePath] = useState([1, 0]); //get children of root as first activePath

  let colums: any[] = [];

  // Prep nodes list to render
  if (open){  //transform into list of nodes for render
    let curNode = map; //starts at origin Node
    let path :number[] = []; //origin have no path

    for (let i = 0; i < activePath.length; i++){
      let branch = activePath[i];
      curNode = curNode.c[branch];
      path.push(branch); //at this location
      let colum : any[] = [];
      curNode.c.forEach((node :any, index: number) => {
        // Check for cases of children
        // if (i < activePath.length-1 && index === activePath[i+1]) { //if is a node in path
        //     colum.push(
        //       <Node name={node.n} link={node.l} isInPath={true} path={path.concat([index])}></Node>
        //     );
        // }
        // else 
        if (node.c){ //if have children
          colum.push(
            <Node name={node.n} link={node.l} path={path.concat([index])}></Node>
          );
        }
        else{ //if is endnode
          colum.push(
            <EndNode name={node.n} link={node.l}></EndNode>
          );
        }
        
      });
      colums.push(colum);
    };
  }
  // console.log(colums);


  return (
    // Background of the bar will be high blue
      <div className={"flex first z-10 w-full border-b-2 border-c0"}>

        {/* First column and Root node */}
        <div className=" border-r-2 border-c0" onClick={()=>setOpen(!open)} > 
          <Node name = "Home" link="/" path={[0]}/>
        </div>
        {renderColums(colums)        }
      

        {/* DarkModeButton */}
        <div className=" mr-0 right-0 absolute">
          <ToggleTheme></ToggleTheme>
        </div>
      </div>
  );
}
function renderColums(colums: any){ //render each colum by returning children of all colums not root
  let everything : any = []; //al colums
  colums.forEach((colum:any) =>{ //for each column, add column into everything
    let cl:any = [];
    colum.forEach((node:any) => {
      cl.push(node);
    });    
    everything.push(<div className=" border-r-2 border-c0" >{cl}</div>);
  })
  return <div className=" flex">
    {
      everything
    }
  </div>;
}
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