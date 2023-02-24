import { ReactNode } from "react";
import Image from "next/image";

export type IconProps = {
    alt?: string;
    size?: number;
    className?: string;
}

export default function Icon({
    alt = "Icon for Minh",
    size = 24,
    className = ""
}: IconProps): ReactNode {
    return (
        <Image
            src="/favicon.png"
            alt={alt}
            width={size}
            height={size}
            className={`rounded-full ${className}`}
        />
    )
}