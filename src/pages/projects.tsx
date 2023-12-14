import Project from "@/components/Projects/Project";
import Navbar from "@/components/Nav/Navbar";
import ThemeWrapper from "@/components/ThemeWrapper";

const TIME_LINE = (
    <>
    <Project
        img="/images/projects/astro-fest.png"
        link="https://minhn.itch.io/astrofest"
        title="Astro Fest"
        description="A simple 2D platformer game made with Unity."
        madeWith={[
            {
                name: "Unity",
                icon: "",
            },
        ]}
        date="2023.2.16"
    />
    <Project
        img="/images/projects/thirteen-beta.png"
        link="https://minhn.itch.io/thirteen"
        title="Thirteen"
        description="A simple card game made with Python."
        madeWith={[
            {
                name: "Python",
                icon: "",
            },
            {
                name: "Pygame",
                icon: "",
            },
        ]}
        date="2023.1"
    />
    <Project
        img="/images/projects/maze-game.png"
        link="https://minhn.itch.io/mazegame"
        title="MazeGame"
        description="A simple maze game made with Python."
        madeWith={[
            {
                name: "Python",
                icon: "",
            },
        ]}
        date="Early 2023"
    />
    <Project
        img="/images/projects/projectile-calculator.jpg"
        link="https://minhn.itch.io/projectilemotioncalculator"
        title="Projectile motion calculator"
        description="A tool for calculating projectile motion made with Sympy."
        madeWith={[
            {
                name: "Sympy",
                icon: "",
            },
        ]}
        date="Late 2022"
    />
    <Project
        img="/images/projects/mine-sweeper.png"
        link="https://minhn.itch.io/minesweeper"
        title="Minesweeper"
        description="A minesweeper game made with React and TypeScript."
        madeWith={[
            {
                name: "Sympy",
                icon: "",
            },
        ]}
        date="Late 2022"
    />
    <Project
        img="/images/projects/tetris.png"
        link="https://minhn.itch.io/tetris"
        title="Tetris"
        description="A classic game of Tetris made with Pygame."
        madeWith={[
            {
                name: "Pygame",
                icon: "",
            },
        ]}
        date="Early 2022"
    />
    <Project
        img="/images/projects/conway-game-of-life.png"
        link="https://minhn.itch.io/conway"
        title="Conway's game of life"
        description="An implementation of Conway's Game of Life made with Pygame."
        madeWith={[
            {
                name: "Pygame",
                icon: "",
            },
        ]}
        date="Early 2022"
    />
    <div id="2021">
    <Project
        img="/images/projects/space-colonizer.png"
        link="https://minhn.itch.io/space-colonizer"
        title="Space colonizer"
        description="A game about colonizing space made with Pygame."
        madeWith={[
            {
                name: "Pygame",
                icon: "",
            },
        ]}
        date="Late 2021"
    />
    </div>
    </>
);

export default function Projects() {
    return (
        <>
            <ThemeWrapper>
                <Navbar></Navbar>
                {TIME_LINE}
            </ThemeWrapper>            
        </>
    );
}
