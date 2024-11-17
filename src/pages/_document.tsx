//Main structure
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            
            <body className=" min-h-screen h-full m-0 p-0 bottom-0">
                {/* Theme provider not in use */}
                {/* <ThemeProvider attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange> */}
                    <Main />
                    <NextScript />
                {/* </ThemeProvider> */}
            </body>
            
        </Html>
    );
}
