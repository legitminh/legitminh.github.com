import { activePathState } from "./Path"
import { useRecoilState } from "recoil";
import { pathState } from "./Path";
//one node that contains children
import Link from "next/link";
export default function Node(props : {
    name : string,
    path : number[],
    link : string
    // isInPath: boolean
}){
    const [activePath, setActivePath] = useRecoilState(activePathState);
    const [path, setPath] = useRecoilState(pathState);

    // let color = props.isInPath?" bg-c8Blue":"";
    // console.log(props.name);
    // console.log(props.path);
    // console.log(activePath.slice(0,props.path.length));

    let color = (props.path.toString() === activePath.slice(0,props.path.length).toString())?" bg-ccBlue":""; //if part of the path

    let nodeRender = (
        // Node outline
        <div className={" text-c0 hover:bg-c8Blue pl-1 pr-1" + color} onClick={()=>{ setActivePath(props.path);}}
        > 
            {/* WHEN CLICK LINK, CHANGE PATH TOTALLY */}
            <Link href={props.link} className=" underline text-c0" onClick={()=>setPath(props.path)}> 
                {props.name.substring(0,props.name.length/2)}
            </Link>
            {props.name.substring(props.name.length/2)}
        </div> );
    return nodeRender;
}   