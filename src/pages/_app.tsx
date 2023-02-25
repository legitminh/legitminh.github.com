import "@/styles/global.scss";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <div className={`${inter.variable}`}>
                    <Component {...pageProps} />
                </div>
            </RecoilRoot>
        </>
    );
}
