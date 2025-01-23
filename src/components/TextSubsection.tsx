//Seperate sections of a html page to minimize page changes, can use id to locate
export default function TextSubsection(
    props: {
        title: string;
        children: any;
    }
){
    return (
        <div className="" id={props.title}>
            <div className=" text-c00 text-2xl">
                {props.title}
            </div>
            <div className=" border-l-[1px] border-c80 flex flex-wrap pl-[1rem]">
                {props.children}
            </div>
        </div>
    )
}