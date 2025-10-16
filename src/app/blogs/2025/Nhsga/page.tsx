import Navbar from "@/app/components/Nav/Navbar"
// import ThemeWrapper from "@/app/components/ThemeWrapper"
import Head from "next/head"
import PageMargin from "@/app/components/PageMargin"
import TextSubsection from "@/app/components/TextSubsection"
// import Link from "next/link"
export default function f(){
    return(
        <div>
            <Head>
                <title>The National High School Game Academy</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>
            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    The National High School Game Academy
                </h1>
            </center>
            <PageMargin>
<div className="text-c00 overflow-auto">
    <TextSubsection title="Notation">
        <TextSubsection title="Date">
            date is shown in \mXdY format, where m is month, X is the month number, d is day, Y is the day number
            Example: m6d22 means June 22nd
        </TextSubsection>
        <TextSubsection title="Time">
            time is shown in \hXmY format, where h is hour, X is the hour number (0 to 24), m is minute, Y is the minute number
            Example: h16m4 means 4:04pm
        </TextSubsection>
        <TextSubsection title="Variable">
            Variable is shown in \varName=varValue format, where varName is the name of the variable, varValue is the value of the variable
        </TextSubsection>
    </TextSubsection>
    <TextSubsection title="The National High School Game Academy">
        The National High School Game Academy (NHSGA) is a 6-week residential summer camp for game design at Carnegie Mellon University.
    </TextSubsection>
    <TextSubsection title="Timeline">
        <div className="w-full">
            \startDate=\m6d22
        </div>
        <TextSubsection title="\m6d21">
            \startDate-1, Saturday
        </TextSubsection>
    </TextSubsection>
</div>
            </PageMargin>
            </div>
        </div>
        
    )
}
