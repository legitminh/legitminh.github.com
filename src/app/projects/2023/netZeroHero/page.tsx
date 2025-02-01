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
                <title>NET ZERO HERO</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c0 w-full">
                    NET ZERO HERO
                </h1>
            </center>
            <PageMargin>
                <video muted controls className=" w-max" autoPlay src="/videos/NetZeroHero.mp4">
                </video>
                <p className=" text-c40">
                    An unpolished game I did in a few hours for Hackgwinnett gamejam. The polished game will be released in 2024.
                </p>
            </PageMargin>
            </div>
        </ThemeWrapper>
        
    )
}
