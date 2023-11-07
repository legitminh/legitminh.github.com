//link to actual document
import Link from 'next/link';
import { useState } from 'react';
export default function(props: {
    destination: string, //file location
    children: any //file displayed name
}){
    let [color, setColor] = useState("c0"); //color of object
    let [description, setDescription] = useState(<div></div>);
    return (
        <div className={'flex w-max bg-ccBlue text-'+color} onMouseEnter={function(){
            // setDescription(<div>file</div>);
            setColor("c0");
        }}>
            <Link className={' overflow-scroll scroll scrollbar-hide' + color} href={props.destination}>{props.children}</Link>
            
            {/* <div className=' absolute left-20'>{description}</div> */}
        </div>
        
    );
}