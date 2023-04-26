import Header from "@/components/Header";
import TOCLayout from "@/components/TOCLayout";
import Timeline from "@/components/Timeline";
import TimelineItem from "@/components/TimelineItem";
import Head from "next/head";
import Image from "next/image"; 
const impaoc = () => {
    return(
    <>
        <img
            src="/images/avatar.jpg"
            alt="Hello"
            width="500"
        />
        {/* <video src="/videos/avatar.mp4" width={500} type = 'video/mp4' height="auto">

        </video> */}
        <video controls width="500" height="auto" >
            <source src = "/videos/avatar.mp4" type = 'video/mp4'/>
        </video>
    </>
    )
}
export default function Home() {
    return (
        <>
            {/* <Head>
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
            </Head> */}
            <Header active="home"></Header>
            
            <TOCLayout>
                <Timeline>
                    <TimelineItem title = "2023.4.4 10thGradeCampaigning">
                        <center>
                            {impaoc()}
                        </center>
                        
                    </TimelineItem>
                </Timeline>
            </TOCLayout>
        </>
            
    )
}
