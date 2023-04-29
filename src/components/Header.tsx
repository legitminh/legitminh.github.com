import Logo from "./Logo";
import { useState } from "react";
import Link from "next/link";

export type HeaderProps = {
    active: string;
};

function Navigation({ active }: HeaderProps) {
    function openVoteMe(){window.open("https://instruction.gwinnett.k12.ga.us/d2l/home/2105955") };
    const nav = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Projects",
            href: "/projects",
        },
        {
            name: "Blog",
            href: "/blog"
        }
    ];
    const [opened, setOpened] = useState(false);
    const content = (
        <ul className={`list-none max-sm:space-y-4 sm:flex sm:gap-4`}>
            {nav.map((item, index) => (
                <li key={index}>
                    <a
                        href={item.href}
                        className={`text-sm decoration-0 ${
                            active.toLowerCase() ==
                                item["name"].toLowerCase() && "font-bold"
                        }`}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
            <hr className="sm:hidden" />
            {/* <li>
                <button className="rounded text-slate-50 bg-gradient-to-r from-blue-500 to-indigo-500 px-2 py-1 text-sm max-sm:px-4 max-sm:py-2" onClick = {openVoteMe}>
                    
                    Vote Me!
                </button>
            </li> */}
        </ul>
    );
    return (
        <>
            <nav>
                {/* desktop */}
                <div className="max-sm:hidden">{content}</div>
                {/* mobile */}
                <div className="sm:hidden cursor-pointer group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={(e) => setOpened(true)}
                    >
                        <path
                            className="text-slate-500 group-hover:text-slate-800"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                    </svg>
                    {/* shade */}
                    <div
                        className={`bg-slate-900/20 fixed top-0 bottom-0 right-0 left-0 backdrop-blur-sm z-10
                        ${!opened && "hidden"}`}
                        onClick={(e) => setOpened(false)}
                    ></div>
                    {/* dialog */}
                    <div
                        className={`fixed top-4 right-4 shadow-lg p-6 rounded-lg bg-white z-20 w-full max-w-xs 
                        ${!opened && "hidden"}`}
                    >
                        {content}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute top-6 right-6 group"
                            onClick={(e) => setOpened(false)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-slate-600 group-hover:text-slate-800"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default function Header({ active }: HeaderProps) {
    return (
        <header className="w-full h-20 flex justify-between items-center shadow-sm px-8 sm:px-14 lg:px-28">
            <div className="flex gap-2 items-center">
                <Logo />
                <p className="text-base font-normal">Minh Nguyen</p>
            </div>
            <Navigation active={active} />
        </header>
    );
}
