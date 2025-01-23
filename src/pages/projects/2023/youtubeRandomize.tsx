import Navbar from "@/components/Nav/Navbar"
import ThemeWrapper from "@/components/ThemeWrapper"
import Text from "@/components/Text/Text"
import FileSection from "@/components/FileSection"
import TextImageLink from "@/components/About/TextImageLink"
import Head from "next/head"
import PageMargin from "@/components/PageMargin"
export default function f(){
    return(
        <ThemeWrapper>
             <Head>
                <title>Youtube Randomize</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    Youtube Randomize
                </h1>
            </center>
            <PageMargin>
                <iframe className=" w-full h-[64rem]" src="https://legitminh.github.io/audioPlayer1/">
                </iframe>
                Update 2024: new embed source.
            </PageMargin>
            </div>
        </ThemeWrapper>
        
    )
}
