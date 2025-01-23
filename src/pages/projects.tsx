import Navbar from "@/components/Nav/Navbar";
import ThemeWrapper from "@/components/ThemeWrapper";
import FileSection from "@/components/FileSection";
import TextImageLink from "@/components/About/TextImageLink";
import PageMargin from "@/components/PageMargin";

export default function Projects() {
    return (
        <>
            <ThemeWrapper>
                <Navbar></Navbar>
                    <div className={ " bg-transparent h-max mt-[2rem]"}>
                <center>
                <h1 className=" text-6xl content-center text-c00 w-full">
                    Projects
                </h1>
                </center>
                <PageMargin>
                    
<FileSection title="2024">
<TextImageLink
    img="/images/projects/astro-fest.png"
    link="/projects/2024/astroFest1"
    text="Astro Fest 1"
    description="Asto Fest's update"
/>
<TextImageLink
    img="/images/youtube.webp"
    link="/projects/2024/audioPlayer"
    text="AudioPlayer"
    description="Plays a random song in my definitely-legally-acquired playlist."
/>
<TextImageLink
    img="/images/projects/acba.webp"
    link="/projects/2024/pepWebsite"
    text="Pep Website"
    description="Website I made for Passion Exploration Project, a non-profit organization based in Gwinnett County"
/>
</FileSection>
<FileSection title="2023">
<TextImageLink
    img="/images/projects/NetZeroHero.png"
    link="/projects/2023/netZeroHero"
    text="Net Zero Hero"
    description="Second place Hackgwinnett! A tower defense game where you save the earth with renewables"
/>
<TextImageLink
    img="/images/youtube.webp"
    link="/projects/2023/youtubeRandomize"
    text="YoutubeRandomize"
    description="Plays a random song in my Youtube playlist."
/>
<TextImageLink
    img="/images/projects/TypingPiano.png"
    link="/projects/2023/pianoGame"
    text="PianoGame"
    description="Hardest rhythm game ever. Under further improvement"
/>
<TextImageLink
    img="/images/projects/EmptySet.png"//src: https://cdn-icons-png.flaticon.com/512/5519/5519632.png
    link="https://minhn.itch.io/rsasteinography"
    text="RsaSteinography"
    description="Encode an image using Rsa encryption"
/>
<TextImageLink
    img="/images/projects/astro-fest.png"
    link="/projects/2023/astroFest"
    text="Astro Fest"
    description="An epic local multiplayer game inspired by AstroParty."
/>
<TextImageLink
    img="/images/projects/thirteen-beta.png"
    link="https://minhn.itch.io/thirteen"
    text="Thirteen"
    description="A simple card game made with Python."
/>
<TextImageLink
    img="/images/projects/maze-game.png"
    link="https://minhn.itch.io/mazegame"
    text="MazeGame"
    description="Third place Hackgwinnett! A simple maze game made with Python."
/>
</FileSection>
<FileSection title="2022">
<TextImageLink
    img="/images/projects/projectile-calculator.jpg"
    link="https://minhn.itch.io/projectilemotioncalculator"
    text="Projectile motion calculator"
    description="A tool for calculating projectile motion made with Sympy."
/>
<TextImageLink
    img="/images/projects/mine-sweeper.png"
    link="https://minhn.itch.io/minesweeper"
    text="Minesweeper"
    description="A minesweeper game made with React and TypeScript."
/>
<TextImageLink
    img="/images/projects/tetris.png"
    link="https://minhn.itch.io/tetris"
    text="Tetris"
    description="A classic game of Tetris made with Pygame."
/>
<TextImageLink
    img="/images/projects/conway-game-of-life.png"
    link="https://minhn.itch.io/conway"
    text="Conway's game of life"
    description="An implementation of Conway's Game of Life made with Pygame."
/>
</FileSection>
<FileSection title="2021">
<TextImageLink
    img="/images/projects/space-colonizer.png"
    link="https://minhn.itch.io/space-colonizer"
    text="Space colonizer"
    description="A game about colonizing space made with Pygame."
/>
</FileSection>
            </PageMargin>
                </div>
            </ThemeWrapper>            
        </>
    );
}
