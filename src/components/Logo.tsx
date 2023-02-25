import Image from "next/image";

export type LogoProps = {
    alt?: string;
    size?: number;
    className?: string;
};

export default function Logo({
    alt = "Icon for Minh",
    size = 24,
    className = "",
}: LogoProps) {
    return (
        <Image
            src="/logo/minh-icon.svg"
            alt={alt}
            width={size}
            height={size}
            className={`rounded-full bg-slate-100 p-1 ${className}`}
        />
    );
}
