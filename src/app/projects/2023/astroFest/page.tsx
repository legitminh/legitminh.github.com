import Navbar from "@/app/components/Nav/Navbar"
// import ThemeWrapper from "@/app/components/ThemeWrapper"
import Text from "@/app/components/Text/Text"
import FileSection from "@/app/components/FileSection"
import TextImageLink from "@/app/components/About/TextImageLink"
export default function f(){
    return(
        <div>
            <Navbar></Navbar>
            <div className={ " bg-transparent h-max mt-[2rem]"}>

            <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    Astro Fest
                </h1>
            </center>
            <div className=" ml-[8rem] mr-[8rem]">
                <FileSection title="How To Play">
                    <div className=" ml-[1rem]">    
                    <Text>
                    Objective: Eliminate all opponents, the more damaged a ship is, the more transparent it is! <br></br>
                    Read the screen for control. The dropdown is to select number of players. <br></br>
                    6 to return to main menu. <br></br>
                    Buttons are to turn left, shoot, and turn right in order from top to bottom. <br></br>
                    Screen can be maximized for better experience.<br></br>
                    Powerups:<br></br>
                    -Red = Bomb<br></br>
                    -Blue = Lazer<br></br>
                    -Green = Heal, if full hp then it is shield.<br></br>
                    -Yellow = Triple gun<br></br>
                    -Cyan = Scatter shot<br></br>
                    -Magenta = Homing missle<br></br>
                    Multiplayer fast-paced shooting game, inspired by Astro party.<br></br>
                    Future updates include art, turrets, maps, sound effect, online multiplayer, and more...<br></br>
                    </Text>
                    </div>
                </FileSection>
                {/* Game */}
                <center>
                    <div className=" border-c0 border-[1px] w-[84vw] h-[56vw] overflow-clip ">
                        <iframe className=" w-[100%] h-[100%]" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" frameBorder="0" allowFullScreen={true} scrolling="no" src="https://html-classic.itch.zone/html/7383859/Astronomia/index.html" id="game_drop"></iframe>
                    </div>
                </center>

                <FileSection title="Itch.io">
                    <div className=" ml-[1rem] w-full">
                        <Text>
                        Thank you for checking this out.<br></br>
                        If you want to support me and/or download the game, check out the itch page below :)
                        </Text>
                    </div>
                    <TextImageLink img="data:image/png;base64,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" link="https://minhn.itch.io/astrofest" text="Astro Fest"/>
                </FileSection>
            </div>

            </div>
        </div>
        
    )
}
