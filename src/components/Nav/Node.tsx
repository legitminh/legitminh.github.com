import { activePathState } from "./Path"
import { useRecoilState } from "recoil";
//one node that contains children
import Link from "next/link";
export default function Node(props : {
    name : string,
    path : [number],
    link : string
}){
    const [activePath, setActivePath] = useRecoilState(activePathState);
    let nodeRender = (
        // Node outline
        <div className=" text-c0 hover:bg-c8Blue ml-1" onClick={()=>{ setActivePath(props.path); 
            // console.log(activePath);
            }}>
            <Link href={props.link} className=" underline text-c0">
                {props.name.substring(0,2)}
            </Link>
            {props.name.substring(2)}
        </div> );
    return nodeRender;
}   