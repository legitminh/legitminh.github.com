//link to actual document, not used because Link is sufficient
import Link from 'next/link';
import { useState } from 'react';
export default function(props: {
    destination: string, //file location
    children: any //file displayed name
}){
    let [color, setColor] = useState("#94a3b8"); //color of object
    let [description, setDescription] = useState(<div></div>);
    return (
        <div className='flex w-max' color="green" onMouseEnter={function(){
            // setDescription(<div>file</div>);
            setColor("green");
        }}>
            <Link className={' overflow-scroll scroll scrollbar-hide' + color} href={props.destination}>{props.children}</Link>
            
            {/* <div className=' absolute left-20'>{description}</div> */}
        </div>
        
    );
}