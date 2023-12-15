//Seperate sections of a html page to minimize page changes
export default function(
    props: {
        title: string;
        children: any;
    }
){
    return (
        <div id={props.title}>
            {props.title}
            {props.children}
        </div>
    )
}