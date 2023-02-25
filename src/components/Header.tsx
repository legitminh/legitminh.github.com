import Logo from "./Logo";

export type HeaderProps = {
    active: string;
};

function Navigation({ active }: HeaderProps) {
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
    ];
    return (
        <>
            <nav className="desktop">
                <ul className="flex gap-2 list-none">
                    {nav.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className={`text-sm font-normal decoration-0 ${active.toLowerCase() ==
                                    item["name"].toLowerCase() &&
                                    "font-bold"
                                    }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="mobile">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                </svg>
            </nav>
        </>
    );
}

export default function Header({ active }: HeaderProps) {
    return (
        <header className="w-full h-20 flex justify-between items-center px-8">
            <div className="flex gap-2 items-center">
                <Logo />
                <p className="text-base font-normal">Minh Nguyen</p>
            </div>
            <Navigation active={active} />
        </header>
    );
}
