import Navbar from "@/app/components/Nav/Navbar"
import ThemeWrapper from "@/app/components/ThemeWrapper"
import Text from "@/app/components/Text/Text"
import FileSection from "@/app/components/FileSection"
import TextImageLink from "@/app/components/About/TextImageLink"
import Head from "next/head"
import PageMargin from "@/app/components/PageMargin"
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
