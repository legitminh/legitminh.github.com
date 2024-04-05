import Link from "next/link";
import { useRecoilState } from "recoil";

export default function EndNode(props : {
    name : string,
    link : string,
    path : number[]
}){
    // const [path, setPath] = useRecoilState(pathState);
    let nodeRender = (
        <Link href={props.link} //onClick={()=>setPath(props.path)}
        >
            <div className=" text-c0 px-[2rem] py-[0.5rem] hover:text-c10 hover:bg-c0 text-center" >
                {props.name}
            </div> 
        </Link>)
        ;
    return nodeRender;
}   