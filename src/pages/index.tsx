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
            <div className="flex">

                <Navbar/>
                <Header active="home"></Header>
                
                <div className="bg-slate-100 w-full h-full p-4">

                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <div className="flex flex-col gap-1 items-center">
                            <h1 className="text-6xl font-semibold">
                                Minh
                            </h1>
                            <p className="text-xl font-semibold text-slate-500">
                                A glorified human being.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Hello"
                                width="500"
                                height="400"
                            />
                            {/* <video src="/videos/avatar.mp4" width={500} type = 'video/mp4' height="auto">
                                </video> */}
                            <video controls width="500" height="auto" >
                                <source src="/videos/avatar.mp4" type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
