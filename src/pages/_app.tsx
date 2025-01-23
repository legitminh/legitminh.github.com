import "@/styles/global.scss";
import type { AppProps } from "next/app";
// import { RecoilRoot } from "recoil";
import ThemeWrapper from "@/components/ThemeWrapper";

export default function App({ Component, pageProps }: AppProps) {
    
    return (
        <div className=" min-h-screen">
            {/* Recoil root needed for recoil to function as it sets up infrastructure, needed for dark/light mode */}
            {/* <RecoilRoot>  */}
                <ThemeWrapper>
                    <Component {...pageProps} />
                </ThemeWrapper>
            {/* </RecoilRoot> */}
        </div>
    );
}