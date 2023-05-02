import Header from "@/components/Header";
import Head from "next/head";
import Blog from "@/components/Blog"
import TOCLayout from "@/components/TOCLayout";
import Timeline from "@/components/Timeline";
import TimelineItem from "@/components/TimelineItem";
export default function f(){
    return (
        <>
        <Header active = "blog" />
        <TOCLayout>
            <Timeline>
                <TimelineItem title="good">
                    <>
                        <Blog title={"Hello"} img={"images/avatar.jpg"} ct={"world isa mario"} doc={"blogs/10gradeCampaign"}/>
                        <Blog title={"Hello"} img={"images/avatar.jpg"} ct={"world"} doc={"blogs/10gradeCampaign.txt"}/>
                    </>
                </TimelineItem>
            </Timeline>
        </TOCLayout>
        </>   
    )
}