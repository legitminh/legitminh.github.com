// The recursive display with states of [ itself || itself and children(absolute location) ]
/**
 * Create smart children selection via keypress
 * 
 */
import { WriteStream, link, write } from "fs";
import { contains, event } from "jquery";
import React, { Children, use, useState } from "react"
import { moveCursor } from "readline";
import Link from "next/link";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const NavFolder = ( props: {
    title: string,
    children: any,
    destination: string,
}) => {
    let [color, setColor] = useState("ccBlue"); //color of object
    let [childrenRender, setChildrenRender] = useState(<div></div>);
    let [open, setOpen] = useState(false);

    //let current :Array<string>=["0"];
    let selfTitle:any;
    if (props.destination == "" || props.destination == undefined){
        selfTitle = <p className=" text-c0">{props.title}</p>;
    }
    else{
        selfTitle = <div className="flex text-c0">
            {/* Full title */}
            <div className=" text-c0">{props.title}</div>
            {/* Link segtion */}
            <div className=" absolute underline text-c0"><Link  href={props.destination}>{props.title.substring(0,2)}</Link></div>
            
        </div>;
        
    }
    
    
    const findChildren = function(childrenName : string){ //not in use
        let foundChildren = "None";
        React.Children.map(props.children,(child)=>{
            if (!(child.type === "p")){
                if (child.props.title.slice(0,1).toLowerCase() === childrenName.toLowerCase()){
                    foundChildren = child;
                }
            }
        })
        return foundChildren;
    };

    return (
            //if mouse is outside of box, then children reder is nothing
            <div className=" z-10"
            // onMouseLeave={() => setChildrenRender(<div></div>)}
            >
                <div id="FolderName" tabIndex={0} className={" inline-block w-20 text-c0 bg-"+color }
                // onKeyDown= { 
                //     (event: React.KeyboardEvent)=>{
                //         console.log(event.code.slice(-1));
                //         let foundChildren = findChildren(event.code.slice(-1));
                //         if (foundChildren != "None"){
                //             console.log( foundChildren.props.title);
                //         }
                //     }
                // } 
                onMouseEnter= {
                    () => { setColor("c8Blue");
                    }//becomes this color when hovered
                }
                onMouseDown={ //if parent got clicked
                    () => {
                        if (open){
                            setChildrenRender(<div></div>);
                        }
                        else{
                            setChildrenRender(
                                // render single text non-overrided children
                                <>
                                    {React.Children.map(props.children,(child)=>{
                                        // child.props.title = "overriddenTitle";
                                        return (
                                            
                                            <div className= " overflow-scroll w-20 bg-ccBlue">
        
                                                {child}
                                            </div>
                                        )
                                    })}
                                </>)
                        }
                        setOpen(!open);
                        
                    }
                } 
                onMouseLeave={
                    ()=>{ setColor("ccBlue");
                    }//becomes this color when isn't hovered
                }> 
                    {selfTitle}
                    {/* always have title in div */}
                </div>
                {/* render childrens, variable childrenRender */}
                <div className=" inline-block absolute top-0 h-full" >
                    {childrenRender}
                </div>
            </div>
    )
};
NavFolder.defaultProps = {
    activated: false,
  };
export default NavFolder;