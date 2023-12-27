// Immediate children node shown for quick nav into children components NOT USED
import Link from "next/link";
import { useRecoilState } from "recoil";
import { pathState } from "./Path";

export default function EndNode(props : {
    name : string,
    link : string,
    path : number[]
}){
    const [path, setPath] = useRecoilState(pathState);
    let nodeRender = (
        <div className=" text-c0 hover:bg-c8Blue" >
            <div className="underline text-c0">
                <Link href={props.link} onClick={()=>setPath(props.path)}>{props.name}</Link>
            </div>
        </div> );
    return nodeRender;
}   