import { Console } from "console";
import { Node } from "typescript";

function link(){
    window.open("https://google.com");
    console.log("HELO");
}

export default function f( props : {
    title: string,
    img: string,
    ct: string
}){
    let {title, ct} = props;
    
    return (
        <>
        <div className = "box"
         style={{
            display: "flex",
            // position: 'absolute',
            // // left: '1rem',
            // bottom: '2rem',
            // padding: '0.5rem',
            // fontFamily: 'sans-serif',
            borderRadius: '0.5rem',
            // width:"100%-1rem",
            height: "10rem",
            // fontSize: '1.5rem',
            
        }} onClick={link}>
            <div>
                {title}
                {ct}
            </div>
            <div 
           
            >
                <img
                    src={props.img}
                    alt="Hello"           
                />
            </div>
        </div>
        <style jsx>
            {`
            .box{
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 0 10px rgba(0, 0, 0, .1);
            }
            .img{
                //width: 100%;
                height: 100%;
                right: 0px;
                border-radius: 30px;
            }
            
            `}
        </style>
        </>
    )
}

