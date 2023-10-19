import React from "react";
import StickyNavigation from "./StickyNavigation";

export type TOCLayoutProps = {
    children: React.ReactNode;
};

export default function TOCLayout({ children }: TOCLayoutProps) {
    return (
        <>
            <div className="layout">
                <main className="bg-cf sticky pt-6 pb-6 top-0 bottom-0 self-start flex flex-col items-center px-4">
                    {children}
                </main>
                <StickyNavigation className="max-md:hidden" />
            </div>
            <style jsx>{`
                @media (min-width: 1024px) {
                    .layout {
                        display: grid;
                        grid-template-columns: 1fr 18rem;
                        gap: 1rem;
                        @apply max-w-7xl;
                    }
                }
            `}</style>
        </>
    );
}
