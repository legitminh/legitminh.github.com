import Navbar from "@/app/components/Nav/Navbar"
import ThemeWrapper from "@/app/components/ThemeWrapper"
import Text from "@/app/components/Text/Text"
import FileSection from "@/app/components/FileSection"
import TextImageLink from "@/app/components/About/TextImageLink"
import PageMargin from "@/app/components/PageMargin"
export default function f(){
    return(
        <ThemeWrapper>
            <Navbar></Navbar>
            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    PEP Website
                </h1>
            </center>
            <PageMargin>
            <Text>
                Website I am making for Passion Exploration Project, a non-profit organization based in Gwinnett County
            </Text>
            </PageMargin>
            <div className="">
                {/* Game */}
                <center>
                    <div className=" border-c00 border-[1px] object-right object-scale-down">
                        <iframe width="100%" height="500px" frameBorder="0" src="https://www.pepgeorgia.org/"></iframe>
                    </div>
                </center>
            </div>

        </ThemeWrapper>
        
    )
}
