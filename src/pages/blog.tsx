import Header from "@/components/Header";
import Head from "next/head";
import Blog from "@/components/Blog"
import TOCLayout from "@/components/TOCLayout";
import Timeline from "@/components/Timeline";
import TimelineItem from "@/components/TimelineItem";
import Navbar from "@/components/Navbar";
import ThemeWrapper from "@/components/ThemeWrapper";
export default function f(){
    return (
        <>        
        <ThemeWrapper>
            <Navbar></Navbar>
            <TOCLayout>
                <Timeline>
                    <TimelineItem title="2023">
                        <>
                            <Blog title={"10 grade Student council campaign"} img={"images/avatar.jpg"} ct={"My rerun of the secretary position"} doc={"blogs/10gradeCampaign"}/>
                        </>
                    </TimelineItem>
                    <TimelineItem title="2022">
                        <>
                            <Blog title={"End of the year recap"} img={"images/calendar.jpeg"} ct={"What I accomplished in the first semester"} doc={"blogs/10gradeCampaign"}/>
                            <Blog title={"9 grade Student council campaign"} img={"images/hamiltonCampaign.png"} ct={"My campaign to become freshman student council secretary"} doc={"blogs/10gradeCampaign"}/>
                        </>
                    </TimelineItem>
                </Timeline>
            </TOCLayout>
        </ThemeWrapper>
            
        </>   
    )
}