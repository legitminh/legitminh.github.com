import Header from "@/components/Archived/Header";
import Head from "next/head";
import Blog from "@/components/Archived/Blog"
import TextImageLink from "@/components/About/TextImageLink";
import Navbar from "@/components/Nav/Navbar";
import ThemeWrapper from "@/components/ThemeWrapper";
import FileSection from "@/components/FileSection";
import PageMargin from "@/components/PageMargin";
export default function f(){
    return (
        <>        
        <ThemeWrapper>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>
            <center>
                <h1 className=" text-6xl content-center text-c0 w-full">
                    Blog
                </h1>
            </center>
            <PageMargin>
            <FileSection title="2024">
                <TextImageLink img="/images/projects/EmptySet.png" text="hag" description="4d chess game" link="blogs/2024/Hag"/>
                <TextImageLink img="/images/projects/EmptySet.png" text="nan" description="n player luck-based spontaneous game" link="blogs/2024/Nan"/>
                <TextImageLink img="/images/blog/infinity.png" text="infinity" link="blogs/infinity"/>
            </FileSection>
            <FileSection title="2023">
                <TextImageLink img="/images/avatar.jpg" text="#10 grade Student council campaign" link="blogs/10gradeCampaign"/>
            </FileSection>
            <FileSection title="2022">
                <TextImageLink img="/images/hamiltonCampaign.png" text="#9 grade Student council campaign" link="blogs/9gradeCampaign"/>
            </FileSection>
            </PageMargin>
            {/* <Blog title={"End of the year recap"} img={"images/calendar.jpeg"} ct={"What I accomplished in the first semester"} doc={"blogs/10gradeCampaign"}/>
            <Blog title={"9 grade Student council campaign"} img={"images/hamiltonCampaign.png"} ct={"My campaign to become freshman student council secretary"} doc={"blogs/10gradeCampaign"}/>  */}
            </div>  
        </ThemeWrapper>
            
        </>   
    )
}