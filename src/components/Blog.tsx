import { Console } from "console";
import { useRef } from "react";
import { Node } from "typescript";
import BlogPage from "./BlogPage";

export default function f( props : {
    title: string,
    img: string,
    ct: string,
    doc: string,
}){
    let {title, img, ct, doc} = props;
    
    return (
        <>
        <div className = "box" onClick={() => window.open(doc)}>
            <div className="imageHolder">
                <img className=" overflow-hidden object-cover"
                    src={props.img}
                    alt="Hello"
                />
            </div>
            <div>
                <div className="content">
                    <strong className="title">
                        {title}
                    </strong>
                    <br/>
                    {ct}
                </div>
            </div> 
        </div>
        <style jsx>
            {`
            .box{
                display: flex;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 0 10px rgba(0, 0, 0, .1);
                height: 10rem;
                border-radius: 0.5rem;
            }
            
            img{
                width: 10rem;
                height: 10rem;
                margin-right: 0px;
                border-radius: 0.5rem;
            }

            .title{
                font-size:1.5em;
            }

            .content{
                margin: 1rem;
            }
            
            `}
        </style>
        </>
    )
}

