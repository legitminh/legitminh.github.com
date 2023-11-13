//link to actual document
import Link from "next/link";
import { useState } from "react";

export default function NavItem(props: {
  destination: string; //file location
  children: any; //file displayed name
}) {
  let [color, setColor] = useState("c0"); //color of object
  let [description, setDescription] = useState(<div></div>);
  return (
    <div
      className={
        " w-20 overflow-scroll scroll scrollbar-hide flex bg-ccBlue text-" +
        color
      }
      onMouseEnter={function () {
        // setDescription(<div>file</div>);
        setColor("c0");
      }}
    >
      <Link className={" " + color} href={props.destination}>
        {props.children}
      </Link>

      {/* <div className='absolute left-20'>{description}</div> */}
    </div>
  );
}
