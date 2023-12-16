import Header from "@/components/Archived/Header";
import Head from "next/head";
import Blog from "@/components/Blogs/Blog"
import TextImageLink from "@/components/About/TextImageLink";
import Navbar from "@/components/Nav/Navbar";
import ThemeWrapper from "@/components/ThemeWrapper";
import FileSection from "@/components/FileSection";
export default function f(){
    return (
        <>        
        <ThemeWrapper>
            <Navbar></Navbar>
            <FileSection title="2023">
                <TextImageLink img="/images/avatar.jpg" text="10 grade Student council campaign" link="blogs/10gradeCampaign"/>
            </FileSection>
            <FileSection title="2022">
                {/* <TextImageLink img="/images/avatar.jpg" text="10 grade Student council campaign" link="blogs/10gradeCampaign"/> */}
            </FileSection>
            {/* <Blog title={"End of the year recap"} img={"images/calendar.jpeg"} ct={"What I accomplished in the first semester"} doc={"blogs/10gradeCampaign"}/>
            <Blog title={"9 grade Student council campaign"} img={"images/hamiltonCampaign.png"} ct={"My campaign to become freshman student council secretary"} doc={"blogs/10gradeCampaign"}/>  */}
                        
        </ThemeWrapper>
            
        </>   
    )
}