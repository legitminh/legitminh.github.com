import Navbar from "@/components/Nav/Navbar"
import ThemeWrapper from "@/components/ThemeWrapper"
import Head from "next/head"
import PageMargin from "@/components/PageMargin"
import Link from "next/link"
export default function f(){
    return(
        <div>
            <Head>
                <title>Nan.Proof</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>
            <center>
                <h1 className=" text-6xl content-center text-c00 w-screen">
                Rock Paper Scissor Expected Rounds
                </h1>
            </center>
            <PageMargin>
            
            <div className=" m-7 left-6 text-c00">
            Given p players<br></br>
            r is remaining players<br></br>
            The probability c for r to remain given p after one round is:<br></br>
                If p = 1: 0 because the game ends<br></br>
                If r = 0: 0 because its impossible<br></br>
                If r = p: (3^p - 3*(2^p-2) )/3^p<br></br>
                    Explanation: There are 3^p total possible player option (rock, paper, or scissor for each player). The round ties (r=p) if all players play the same or all three options utilized. 
                    The number of ways the players only uses two options is 3*(2^p-2) because two options restriction gives 2^p ways for players to choose, in which we need to exclude 2 cases when the all pick the same in the two options.
                    Therefore there are 3^p - (2^p-2) ways to tie out of 3^p total options.<br></br>
            e is the expected number of rounds for x players<br></br>
                It is not feasible to simulate infinite rounds, so a certain number of rounds is tracked (l)<br></br>
                There are 2 scenarios in one round, either tie or decreased number of player<br></br>
                If tie: <br></br>
                    The expected value is 1 + e(x, l-1)<br></br>
                If decreased number of player<br></br>
                    For each resulting player (n) from 1 to x-1 inclusive, the expected value is e(n, l-1)<br></br>
                Thus, the expected value e is (1 + e(x, l-1)) * c(x,x) - summation(n=1,x-1, e(n, l-1) * c(x,n))<br></br>
                Which can be simplified to  c(x,x) - summation(n=1,x, e(n, l-1) * c(x,n))<br></br>
                As e is recursively defined, one must define base case of e(x,0), where the expected value is 0<br></br>
                e(x,bigNumber) should be a good estimation<br></br>
            <Link href="https://www.desmos.com/calculator/kqkkvhzolz">
                Desmos link
            </Link>
            </div>
            </PageMargin>
            </div>
        </div>
        
    )
}
