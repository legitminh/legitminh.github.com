import React, { Children, useState } from "react"
export default function NavFolder(props: {
    title: string,
    children: any
}) {

    let [childrenRender, setChildrenRender] = useState(<div></div>);
    
    return (
            <div onMouseLeave={() => setChildrenRender(<div></div>)}>
                <div className=" inline-block bg-slate-400 w-auto" onMouseEnter=
                    
                    {() => setChildrenRender(

                        <ul className=" h-full bg-slate-300 max-w-full">
                            {React.Children.map(props.children,(child)=>{
                                return (
                                <li >
                                    {child}
                                </li>
                                )
                            })}
                        </ul>
                        )
                    } >
                        
                        
                        {props.title}
                        
                </div>
                <div className=" inline-block absolute">
                    {childrenRender}
                </div>
            </div>
    )
}