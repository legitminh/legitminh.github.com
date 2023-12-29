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
// import { pathState } from "./Path";
import { activePathState } from "./Path";
import { useRecoilState } from "recoil";
import Node from "./Node";
import EndNode from "./EndNode";
import { useRouter } from 'next/router';
export default function Navbar() {
  
  // const [path, setPath] = useRecoilState(pathState);
  const [open, setOpen] = useState(false); //if the map is opened
  const [activePath, setActivePath] = useRecoilState(activePathState);
  const router = useRouter();
  const currentUrl = router.asPath;
  /**
   * Below is the master hierarchy and it manages everything
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
        ,c: [
          {n:"NetZeroHero", l:"https://github.com/legitminh/Net-Zero-Hero"},
          {n:"YoutubeRandomize", l:"https://legitminh.github.io/youtubeRandomize/"},
          {n:"PianoGame", l:"https://github.com/legitminh/typingPiano"},
          {n:"RsaSteinography", l:"https://minhn.itch.io/rsasteinography"},
          {n:"AstroFest", l:"/projects/astroFest"},
          {n:"Thirteen", l:"https://minhn.itch.io/thirteen"},
          {n:"MazeGame", l:"https://minhn.itch.io/mazegame"},
          
        ]
        },
        {n:"2022", l:"/projects#2022", c:[
          {n:"ProjectileMotionCalculator", l:"https://minhn.itch.io/projectilemotioncalculator"},
          {n:"Minesweeper", l:"https://minhn.itch.io/minesweeper"},
          {n:"Tetris", l:"https://minhn.itch.io/tetris"},
          {n:"Conway'sGameOfLife", l:"https://minhn.itch.io/conway"},
        ]},
        {n:"2021", l:"/projects#2021", c:[ 
          {n:"SpaceColonizer", l:"https://minhn.itch.io/space-colonizer"},
        ]}
      ]},
      {n:"Blog", l: "/blog"}
    ]}
  ]};
  function getPath(){
    const urlPath = currentUrl.substring(currentUrl.indexOf("/"));
    // console.log(urlPath);
    function dfs(node:any, curPath:number[]){
      if ((node.l) === urlPath){
        return curPath
      }
      if (node.c){ //if have children
        for (let i = 0; i < node.c.length; i++){
          let childResult : any = dfs(node.c[i], curPath.concat(i));
          if (childResult != false){
            return childResult;
          }
        }
      }
      return false;
    }
    
    return dfs(map.c[0], [0]); //start at home
  }
  const path = getPath();
  function getChildren(){ //get childrenNodes of the current absolute file path
    var curNode = map;
    for (let i = 0; i < path.length; i++){
      curNode = curNode.c[path[i]];
    }
    return curNode.c;
  }
  function renderChildren(){
    // console.log(getPath());
    // Prep immediate children list to render
    // setPath(getPath());
    var childrenNodes = getChildren();
    var childrenLinks : any[] = [];
    if (childrenNodes != undefined){
      for (let i = 0; i < childrenNodes.length; i++){
        childrenLinks.push(
          <div className=" h-fit">
            <EndNode name={childrenNodes[i].n} link={childrenNodes[i].l} path={path.concat(i)} ></EndNode>
          </div>
        );
      }
    }
    return childrenLinks
  }
  function getColums(){
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
              <EndNode name={node.n} link={node.l} path={path.concat([index])}></EndNode>
            );
          }
          
        });
        colums.push(colum);
      };
    }
    return colums
  }
  function renderColums(){ //render each colum by returning children of all colums not root
    let colums: any = getColums();
    let everything : any = []; //al colums
    colums.forEach((colum:any) =>{ //for each column, add column into everything
      let cl:any = [];
      colum.forEach((node:any) => {
        cl.push(node);
      });    
      everything.push(<div className=" flex" >
        <div>
        {cl}
        </div>
        <div className=" flex h-[100%] items-center"><div className=" border-r-[1px] border-cc h-[calc(100%-1rem)] relative"></div></div>
      </div>);
    })
    return <div className=" flex">
      {
        everything
      }
    </div>;
  }
  return (
      <div className={"flex first z-10 w-full bg-opacity-50 border-b-[1px] border-cc overflow-scroll scrollbar-hide"}>

        {/* First column and Root node */}
        <div className=" flex" onClick={()=>setOpen(!open)} > 
          <Node name = "Home" link="/" path={[0]}/>
          <div className=" flex h-[100%] items-center"><div className=" border-r-[1px] border-cc h-[calc(100%-1rem)] relative"></div></div>
          
        </div>
        {/* Colums */}
        <div>
          {renderColums()        }
        </div>
        {/* Immediate Children */}
        
        <div className=" flex ml-auto items-center ">
          {/* <div className=" flex h-[100%] items-center"><div className=" border-r-[1px] border-cc h-[calc(100%-1rem)] relative"></div></div> */}
          {renderChildren()}
        </div>
        {/* DarkModeButton */}
        {/* <div className=" mr-0 right-0 absolute">
          <ToggleTheme></ToggleTheme>
        </div> */}
      </div>
  );
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