// the blueprint for a blog page
import Header from "@/components/Archived/Header";
import { read, readFileSync } from "fs";

export default function f(props: { name: string; content: string }) {
  const file = readFileSync(props.content, "utf-8");
  return (
    <>
      <Header active={props.name}></Header>
    </>
  );
}
