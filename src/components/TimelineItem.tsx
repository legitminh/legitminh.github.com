import { ReactNode } from "react";

export type TimelineItemProps = {
    title: string;
    children: ReactNode;
};

export default function TimelineItem({ title, children }: TimelineItemProps) {
    return (
        <>
            <div className="item relative">
                <h2 className="title">{title}</h2>
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
                    top: -1.5rem;
                    bottom: 0;
                    left: -1rem;
                    width: 2px;
                    @apply bg-slate-300;
                }
                /* place the title */
                .title {
                    position: absolute;
                    top: -2.5rem;
                    transform: translate(-100%, -50%);
                    @apply text-base font-bold text-slate-500;
                }
            `}</style>
        </>
    );
}
