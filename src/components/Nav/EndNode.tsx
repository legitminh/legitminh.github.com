import Link from "next/link";
export default function EndNode(props : {
    name : string,
    link : string
}){
    let nodeRender = (
        <div className=" text-c0 hover:bg-c8Blue ml-1" >
            <div className="underline text-c0">
                <Link href={props.link}>{props.name}</Link>
            </div>
        </div> );
    return nodeRender;
}   