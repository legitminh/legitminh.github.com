import Header from "@/components/Header";
import { read, readFileSync } from 'fs';

export default function(props : {
    name: string
    content: string
}){
    const file = readFileSync(props.content, 'utf-8');
    return (
        <>
        <Header active={props.name}></Header>

        </>
        
    )
}