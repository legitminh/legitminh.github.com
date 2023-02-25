import Achievement from "@/components/Achievement";
import Header from "@/components/Header";
import TimelineItem from "@/components/TimelineItem";

export default function Projects() {
    return (
        <>
            <Header active="projects" />
            <main className="bg-slate-100 h-[100vh] pt-4 flex flex-col items-center px-4">
                <TimelineItem title="Late 2020">
                    <Achievement
                        image="/images/mine-sweeper.png"
                        link="https://minhn.itch.io/minesweeper"
                        title="Minesweeper"
                        description="A minesweeper game made with React and TypeScript."
                        madeWith={[
                            {
                                name: "Sympy",
                                icon: "/images/icons/sympy.png",
                            },
                        ]}
                        date="Late 2022"
                    />
                </TimelineItem>
            </main>
        </>
    );
}
