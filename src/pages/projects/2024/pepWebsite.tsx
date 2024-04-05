import Navbar from "@/components/Nav/Navbar"
import ThemeWrapper from "@/components/ThemeWrapper"
import Text from "@/components/Text/Text"
import FileSection from "@/components/FileSection"
import TextImageLink from "@/components/About/TextImageLink"
import PageMargin from "@/components/PageMargin"
export default function f(){
    return(
        <ThemeWrapper>
            <Navbar></Navbar>
            <center>
                <h1 className=" text-6xl content-center text-c0 w-full">
                    PEP Website
                </h1>
            </center>
            <PageMargin>
            <Text>
                Website I made for Passion Exploration Project, a non-profit organization based in Gwinnett County
            </Text>
            </PageMargin>
            <div className="">
                {/* Game */}
                <center>
                    <div className=" border-c0 border-[1px] object-right object-scale-down">
                        <iframe width="100%" height="500px" frameBorder="0" src="https://www.pepgeorgia.org/"></iframe>
                    </div>
                </center>
            </div>

        </ThemeWrapper>
        
    )
}
