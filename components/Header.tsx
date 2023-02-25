import Icon from "./Icon";

export type HeaderProps = {
    active?: string;
}

export default function Header(acitve: HeaderProps) {
    const nav = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Projects",
            href: "/projects"
        },
    ]
    return (
        <header className="w-full h-20 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <Icon />
                <p className="text-base font-normal">
                    Minh Nguyen
                </p>
            </div>
            <nav>
                <ul className="flex gap-2 list-none">
                    {
                        nav.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="text-sm font-normal decoration-0">
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}