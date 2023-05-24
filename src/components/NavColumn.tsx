import React, { Children, useState } from "react"
export default function NavColumn(props: {
    title: string,
    children: any
}) {

    let [childrenRender, setChildrenRender] = useState(<div></div>);
    
    return (
            <div className=" flex" onMouseEnter=
                
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
                } 
                    onMouseLeave={() => setChildrenRender(<div></div>)}>
                    <div className=" bg-slate-400 h-fit w-full">
                    {props.title}
                    </div>
                    {childrenRender}
            </div>
    )

}