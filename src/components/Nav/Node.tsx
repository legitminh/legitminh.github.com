import { activePathState } from "./Path"
import { useRecoilState } from "recoil";
//one node that contains children
import Link from "next/link";
export default function Node(props : {
    name : string,
    path : number[],
    link : string
    // isInPath: boolean
}){
    const [activePath, setActivePath] = useRecoilState(activePathState);
    // let color = props.isInPath?" bg-c8Blue":"";
    // console.log(props.name);
    // console.log(props.path);
    // console.log(activePath.slice(0,props.path.length));

    let color = (props.path.toString() === activePath.slice(0,props.path.length).toString())?" bg-ccBlue":""; //if part of the path

    let nodeRender = (
        // Node outline
        <div className={" text-c0 hover:bg-c8Blue" + color} onClick={()=>{ setActivePath(props.path); 
            // console.log(activePath);
            }}>
            <Link href={props.link} className=" underline text-c0">
                {props.name.substring(0,2)}
            </Link>
            {props.name.substring(2)}
        </div> );
    return nodeRender;
}   