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
                <title>Net Zero Hero</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c0 w-full">
                    Net Zero Hero
                </h1>
            </center>
            <PageMargin>
                <video muted controls className=" w-max" autoPlay src="/videos/NetZeroHero.mp4">
                </video>
                <p className=" text-c4">
                    An unpolished game I did in a few hours for Hackgwinnett gamejam. The polished game will be released in 2024.
                </p>
            </PageMargin>
            </div>
        </ThemeWrapper>
        
    )
}
