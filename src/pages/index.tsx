// Default path "/"
import Header from "@/components/Archived/Header";
import Navbar from "@/components/Nav/Navbar";
import { themeState } from "@/components/ThemeState";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import ThemeWrapper from "@/components/ThemeWrapper";
import ToggleTheme from "@/components/ToggleTheme";
import PageMargin from "@/components/PageMargin";
export default function Home() {
    return (
        <ThemeWrapper>
            <Head>
                <title>Home</title>
                {/* <meta
                    name="description"
                    content="The best student ever in the world"
                /> */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>
                {/* old header */}
                {/* <Header active="home"></Header> */}
                
                <PageMargin>
                    {/*  */}
                    <div className="flex flex-wrap justify-center items-center gap-4"> 
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl text-c0">
                                MINH NGUYEN
                            </h1>
                            <p className="text-xl font-semibold text-c4 mt-[2rem] text-center">
                                I&apos;m a highschooler with passion for Computer Science and a strong urge to solve society&apos;s problems...<br></br>
                                
                            </p>
                            <div className=" text-c4 mt-[2rem]  text-center">
                                Navigation: You&apos;re at home, click to the right of the home button to see where you can go, click on the left to return.
                                <br></br>
                                A button without right/left distinction have no children.
                                
                            </div>
                        </div>
                            <div className="flex flex-col items-center gap-2">
                        </div>
                    </div>
                </PageMargin>
            </div>
            
        </ThemeWrapper>

    )
}
