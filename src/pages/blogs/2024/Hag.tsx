import Navbar from "@/components/Nav/Navbar"
import ThemeWrapper from "@/components/ThemeWrapper"
import Head from "next/head"
import PageMargin from "@/components/PageMargin"
import Link from "next/link"
import TextSubsection from "@/components/TextSubsection"
export default function f(){
    return(
        <div>
            <Head>
                <title>Hag</title>
            </Head>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>
            <center>
                <h1 className=" text-6xl content-center text-c00 w-screen overflow-scroll">
                    Hak
                </h1>
            </center>
            <PageMargin>
            
            <div className="text-c00 overflow-auto">
            <strong>A 4 dimensional chess game</strong><br></br>
            <TextSubsection title="Setup">
                Player 0 could be determined via Nan or coin flip, if use Nan, who wins is player 0
                <TextSubsection title="Restrictive setup">
                    Player 0 setup their pieces any way they want in their closest line of the board 
                    Player 1 setup their pieces any way they want in their closest line of the board
                    Player 0 goes first
                </TextSubsection>
                <TextSubsection title="Freedom setup">
                    Player 0 setup their pieces any way they want in their closest 4 squares of the board
                    Player 1 setup their pieces any way they want in their closest 4 squares of the board
                    Player 0 goes first
                </TextSubsection>
                <TextSubsection title="Chaotic setup">
                    Player 0 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down 
                    Player 1 setup their pieces any way they want in their closest 4 squares of the board with pieces values faced down 
                    Player 0 goes first
                </TextSubsection>
                <TextSubsection title="Other variations">
                    Variations may change the board size, placements of pieces and the number of pieces, perhaps even changing the number of moves per turn
                </TextSubsection>
                
            </TextSubsection>
            <TextSubsection title="The board">
                The board is a 4x4 nodes hypercube
                <TextSubsection title="Flattened into 2d">
                    Axis 0,1,2,3 refer to x,y,z,w
                    The horizontal axis represents axis 0 and 2
                    The vertical axis represents axis 1 and 3
                    In other words
                    The board is composed of 16 4x4 squares, each have 16 points/cells
                    The squares are horizontally axis 0 and vertically axis 1 (the line connecting 2 players)
                    The 4x4 squares changes in axis 3 going horizontally (there are 4 squares of lowest, middle and top layer)
                    The 4x4 squares changes in axis 4 going vertically (there are 4 squares of lowest, middle and top layer)
                    INSERT ANNOTATED IMAGE OF BOARD
                    Overall, there are 256 points where pieces can be
                </TextSubsection>
            </TextSubsection>
            <TextSubsection title="Pieces">
                There are 9 pieces
                1 king, which move 1 unit in one dimension
                Each piece is assigned 1 weakness numbers in  &lt;0,1,2,3&gt;
                Each piece only move in an uninterrupted straight line along its non weak dimensions (like a rook)
                They can also move 1 unit in the weak dimension
                Movement toward an opponent piece&apos;s location is a capture
            </TextSubsection>
            <TextSubsection title="Turns">
                Each turn each player can either: move 1 piece, or flip - modifying a weakness of a piece
            </TextSubsection>
            <TextSubsection title="Winning">
                Capture the opponent&apos;s king
            </TextSubsection>
            <TextSubsection title="Motivation">
                To make a very hard game to master, high complexity stem from simple rules
                Hag means 4
            </TextSubsection>
            <br></br>
            <br></br>
            Feel free to reach out if you want to critique/discuss my idea
            </div>
            </PageMargin>
            </div>
        </div>
        
    )
}
