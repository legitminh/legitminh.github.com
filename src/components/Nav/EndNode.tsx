import Link from "next/link";
import { useRecoilState } from "recoil";
import { pathState } from "./Path";

export default function EndNode(props : {
    name : string,
    link : string,
    path : number[]
}){
    // const [path, setPath] = useRecoilState(pathState);
    let nodeRender = (
        <Link href={props.link} //onClick={()=>setPath(props.path)}
        >
            <div className=" text-c0 pl-1 pr-1 hover:bg-c8Blue" >
                <div className=" text-c0">
                    {props.name}
                </div>
            </div> 
        </Link>)
        ;
    return nodeRender;
}   