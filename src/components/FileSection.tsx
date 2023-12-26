//Seperate sections of a html page to minimize page changes, can use id to locate
export default function FileSection(
    props: {
        title: string;
        children: any;
    }
){
    return (
        <div className=" ml-[8rem]" id={props.title}>
            <div className=" text-c0">
                {props.title}
            </div>
            <div className=" border-l-2 border-c0">
                {props.children}
            </div>
        </div>
    )
}