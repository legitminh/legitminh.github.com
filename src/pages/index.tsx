// Default path "/"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
    return (
        <>
            <Head>
                <title>Minh&apos;s Homepage</title>
                <meta
                    name="description"
                    content="The best student ever in the world"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar>
                <div className=" bg-bkg h-max">
                    
                    
                    {/* old header */}
                    {/* <Header active="home"></Header> */}
                    
                    <div className=" w-full h-full p-4 ">
                        {/*  */}
                        <div className="flex flex-wrap justify-center items-center gap-4"> 
                            <div className="flex flex-col gap-1 items-center">
                                <h1 className="text-6xl font-semibold text-c0">
                                    Minh
                                </h1>
                                <p className="text-xl font-semibold text-c4">
                                    Welcome to my humble website. Work is underway.<br></br>
                                    Navigation: Click the home button, 

                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </>

    )
}
