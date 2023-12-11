import "@/styles/global.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
    
    return (
        <div className=" h-max bg-cc">
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </div>
    );
}