import "@/styles/global.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
    
    return (
        <div className=" min-h-screen h-max bg-c8">
            {/* Recoil root needed for recoil to function as it sets up infrastructure, needed for dark/light mode */}
            <RecoilRoot> 
                <Component {...pageProps} />
            </RecoilRoot>
        </div>
    );
}