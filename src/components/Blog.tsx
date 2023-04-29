import { Node } from "typescript";



export default function f( props : {
    title: string,
    img: string,
    ct: string
}){
    let {title, ct} = props;
    
    return (
        <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            position: 'absolute',
            left: '1rem',
            bottom: '2rem',
            padding: '0.5rem',
            fontFamily: 'sans-serif',
            borderRadius: '0.5rem',
            width:"100%-1rem",
            fontSize: '1.5rem',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
        }}>
            <h2>
                {title}
            </h2>
            <p>
                {ct}
            </p>
            <img
                src={props.img}
                alt="Hello"
                width="500"
            />
        </div>
    )
}

