import Header from "@/components/Header";
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
            <Header active="home"></Header>
            <main>
                
                <center>
                <img
                    src="/images/avatar.jpg"
                    alt="Hello"
                    width="50%"
                />
                <video controls width="50%" height="auto" >
                    <source src = "/videos/avatar.mp4" type = 'video/mp4'/>
                </video>
                </center>
            </main>
        </>
    );
}
