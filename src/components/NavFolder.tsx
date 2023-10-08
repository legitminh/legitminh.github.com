// Nav
import { WriteStream, write } from "fs";
import { contains, event } from "jquery";
import React, { Children, use, useState } from "react"
import { moveCursor } from "readline";

const NavFolder = ( props: {
    title: string,
    children: any,
    activated: boolean,
    
    
}) => {

    let [color, setColor] = useState("#94a3b8");
    let [childrenRender, setChildrenRender] = useState(<div></div>);
    let [activated, setActivated] = useState(props.activated);
    let [activatedChildren, setActivatedChildren] = useState(undefined)
    //let current :Array<string>=["0"];

    const findChildren = function(childrenName : string){
        let foundChildren = "None";
        React.Children.map(props.children,(child)=>{
            if (!(child.type === "p")){
                if (child.props.title.slice(0,1).toLowerCase() === childrenName.toLowerCase()){
                    foundChildren = child;
                }
            }
        })
        return foundChildren;
    }
    if (activated){

        console.log("gud");
        //setColor("#94a3b8");//slate400
    }
    else{
        console.log("bad")
        //setColor("#00FF00");
    }
    return (
            //if mouse is outside of box, then children reder is nothing
            <div onMouseLeave={() => setChildrenRender(<div></div>)}>
                <div id="FolderName" tabIndex={0} style={{backgroundColor: color}} className=" inline-block w-20" 
                onKeyDown= { 
                    (event: React.KeyboardEvent)=>{
                        //console.log(event.code.slice(-1));
                        let foundChildren = findChildren(event.code.slice(-1));
                        if (foundChildren != "None"){
                            console.log( foundChildren.props.title);
                        }
                    }
                } 
                onMouseEnter= {
                    (event: Event) => {
                        setColor("#00ff00");
                    }
                }
                onMouseDown={
                    (event: Event) => {
                        // setActivated(true);
                        setChildrenRender(
                        // render single text non-overrided children
                        <>
                            {React.Children.map(props.children,(child)=>{
                                // child.props.title = "overriddenTitle";
                                return (
                                    
                                    <div className= " overflow-scroll bg-slate-300 w-20">

                                        {child}
                                    </div>
                                )
                            })}
                        </>)
                    }
                } 
                onMouseLeave={
                    (event: Event)=>{
                        setColor("#94a3b8");
                    }
                }
                >
                    {props.title}
                    {/* always have title in div */}
                </div>
                {/* render childrens, variable childrenRender */}
                <div className=" inline-block absolute top-0 h-full bg-slate-400" >
                    {childrenRender}
                </div>
            </div>
    )
};
NavFolder.defaultProps = {
    activated: false,
  };
export default NavFolder;