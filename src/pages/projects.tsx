import Navbar from "@/components/Nav/Navbar";
import ThemeWrapper from "@/components/ThemeWrapper";
import FileSection from "@/components/FileSection";
import TextImageLink from "@/components/About/TextImageLink";
import PageMargin from "@/components/PageMargin";
// const TIME_LINE = (
//     <>
//     <FileSection title="2023">
//     <Project
//         img="/images/NetZeroHero.png"
//         link="https://github.com/legitminh/Net-Zero-Hero"
//         title="Net Zero Hero"
//         description="Second place Hackgwinnett! A towerdefense game where you save the earth with renewables"
//         madeWith={[
//             {
//                 name: "Pygame",
//                 icon: "",
//             },
//         ]}
//         date="2023.12.16"
//     />
//     <Project
//         img="/images/youtube.webp"
//         link="https://legitminh.github.io/youtubeRandomize/"
//         title="youtubeRandomize"
//         description="It plays a random song in my playlist. Youtube randomization loses effectiveness over large amount of videos, therefore I create my own randomization method, in addition to having the convinience of accessing my playlist anywhere."
//         madeWith={[
//             {
//                 name: "Javascript, HTML, CSS, Youtube API",
//                 icon: "",
//             },
//         ]}
//         date="2023.8"
//     />
//     <Project
//         img="/images/TypingPiano.png"
//         link="https://github.com/legitminh/typingPiano"
//         title="PianoGame"
//         description="Hardest rhythm game ever. Under further improvement"
//         madeWith={[
//             {
//                 name: "Pygame",
//                 icon: "",
//             },
//         ]}
//         date="2023.Summer"
//     />
//     <Project
//         img="/images/projects/EmptySet.png"//src: https://cdn-icons-png.flaticon.com/512/5519/5519632.png
//         link="https://minhn.itch.io/rsasteinography"
//         title="RsaSteinography"
//         description="Encode an image using Rsa encryption"
//         madeWith={[
//             {
//                 name: "Python",
//                 icon: "",
//             },
//         ]}
//         date="2023.2.24"
//     />
//     <Project
//         img="/images/projects/astro-fest.png"
//         link="/projects/astroFest"
//         title="Astro Fest"
//         description="An epic local multiplayer game inspired by AstroParty."
//         madeWith={[
//             {
//                 name: "Unity",
//                 icon: "",
//             },
//         ]}
//         date="2023.2.16"
//     />
//     <Project
//         img="/images/projects/thirteen-beta.png"
//         link="https://minhn.itch.io/thirteen"
//         title="Thirteen"
//         description="A simple card game made with Python."
//         madeWith={[
//             {
//                 name: "Python",
//                 icon: "",
//             },
//             {
//                 name: "Pygame",
//                 icon: "",
//             },
//         ]}
//         date="2023.1"
//     />
//     <Project
//         img="/images/projects/maze-game.png"
//         link="https://minhn.itch.io/mazegame"
//         title="MazeGame"
//         description="Third place Hackgwinnett! A simple maze game made with Python."
//         madeWith={[
//             {
//                 name: "Python",
//                 icon: "",
//             },
//         ]}
//         date="Early 2023"
//     />
//     </FileSection>
//     <FileSection title="2022">
//     <Project
//         img="/images/projects/projectile-calculator.jpg"
//         link="https://minhn.itch.io/projectilemotioncalculator"
//         title="Projectile motion calculator"
//         description="A tool for calculating projectile motion made with Sympy."
//         madeWith={[
//             {
//                 name: "Sympy",
//                 icon: "",
//             },
//         ]}
//         date="Late 2022"
//     />
//     <Project
//         img="/images/projects/mine-sweeper.png"
//         link="https://minhn.itch.io/minesweeper"
//         title="Minesweeper"
//         description="A minesweeper game made with React and TypeScript."
//         madeWith={[
//             {
//                 name: "Sympy",
//                 icon: "",
//             },
//         ]}
//         date="Late 2022"
//     />
//     <Project
//         img="/images/projects/tetris.png"
//         link="https://minhn.itch.io/tetris"
//         title="Tetris"
//         description="A classic game of Tetris made with Pygame."
//         madeWith={[
//             {
//                 name: "Pygame",
//                 icon: "",
//             },
//         ]}
//         date="Early 2022"
//     />
//     <Project
//         img="/images/projects/conway-game-of-life.png"
//         link="https://minhn.itch.io/conway"
//         title="Conway's game of life"
//         description="An implementation of Conway's Game of Life made with Pygame."
//         madeWith={[
//             {
//                 name: "Pygame",
//                 icon: "",
//             },
//         ]}
//         date="Early 2022"
//     />
//     </FileSection>
//     <FileSection title="2021">
//     <Project
//         img="/images/projects/space-colonizer.png"
//         link="https://minhn.itch.io/space-colonizer"
//         title="Space colonizer"
//         description="A game about colonizing space made with Pygame."
//         madeWith={[
//             {
//                 name: "Pygame",
//                 icon: "",
//             },
//         ]}
//         date="Late 2021"
//     />
//     </FileSection>
//     </>
// );

export default function Projects() {
    return (
        <>
            <ThemeWrapper>
                <Navbar></Navbar>
                    <div className={ " bg-transparent h-max mt-[2rem]"}>
                <center>
                <h1 className=" text-6xl content-center text-c0 w-full">
                    Projects
                </h1>
                </center>
                <PageMargin>
                    
<FileSection title="2023">
<TextImageLink
    img="/images/projects/NetZeroHero.png"
    link="https://github.com/legitminh/Net-Zero-Hero"
    text="Net Zero Hero"
    description="Second place Hackgwinnett! A tower defense game where you save the earth with renewables"
/>
<TextImageLink
    img="/images/youtube.webp"
    link="/projects/youtubeRandomize"
    text="YoutubeRandomize"
    description="Plays a random song in my Youtube playlist."
/>
<TextImageLink
    img="/images/projects/TypingPiano.png"
    link="/projects/pianoGame"
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
    link="/projects/astroFest"
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
