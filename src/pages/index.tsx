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
                            <h1 className="text-6xl font-semibold text-c0">
                                Minh Nguyen
                            </h1>
                            <p className="text-xl font-semibold text-c4 mt-[2rem] text-center">
                                A Vietnamese-American highschooler with passion for Computer Science and a strong urge to solve society&apos;s problems..<br></br>
                                
                            </p>
                            <div className=" text-c4 mt-[2rem]  text-center">
                                Navigation: Click the home button to the left (the not underlined section is to open the folder, while the underlined is to go to that folder&apos;s page), or click on any sub-page to the right. <br></br>
                                Change color theme below!
                            </div>
                            <ToggleTheme></ToggleTheme>
                        </div>
                            <div className="flex flex-col items-center gap-2">
                        </div>
                    </div>
                </PageMargin>
            </div>
            
        </ThemeWrapper>

    )
}
