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
                <title>Piano Game</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c0 w-screen">
                    Piano Game
                </h1>
            </center>
            <PageMargin>
                <video muted controls className=" w-max" autoPlay src="/videos/RushE.mp4">
                </video>
                <p className=" text-c4">
                    Any song can be played, including Rush E! That is, as long as you have the midi file.
                </p>
            </PageMargin>
            </div>
        </ThemeWrapper>
        
    )
}
