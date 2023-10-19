import { ReactNode } from "react";

export type TimelineItemProps = {
    title: string;
    children: ReactNode;
};

export default function TimelineItem({ title, children }: TimelineItemProps) {
    return (
        <>
            <div className="item relative">
                <center>
                    <h2 className="title">{title}</h2>
                </center>
                <div className="flex flex-col gap-6">{children}</div>
            </div>
            <style jsx>{`
                .item {
                    margin-top: 5rem;
                }
                /* draw a vertical line */
                .item::before {
                    content: "";
                    position: absolute;
                    top: 0rem;
                    bottom: -0.5rem;
                    left: 0rem;
                    width: 2px;
                    @apply bg-c4;
                }
                /* place the title */
                .title {
                    position: absolute;
                    top: -3rem;
                    
                    //transform: translate(-50%, -50%);
                    @apply text-base font-bold text-c0;
                }
                /* place the elements */
                .flex{
                    transform: translate(5%, 0);
                }
            `}</style>
        </>
    );
}
