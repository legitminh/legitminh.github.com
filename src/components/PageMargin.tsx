export default function PageMargin(
    props: {
        children: any;
    }
){
    return (
        <div className=" md:mx-[8rem] mx-[2rem]">
            {props.children} 
        </div>
    )
}