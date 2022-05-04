import "../styles/globals.css";
import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
} from "@mantine/core";
import { AppContainer } from "../components/AppContainer";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "../utils/browserHandles";

export default function App({ Component, pageProps }: AppProps) {
    // cant use use-local-storage, because off ssr - client and server content will be invalid!
    // could also be handled with a cookie!
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
    const toggleColorScheme = (value?: ColorScheme) => {
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
        setLocalStorageItem("theme", value as string || (colorScheme === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        const storedTheme = getLocalStorageItem("theme");
        if (storedTheme) handleTheme(storedTheme as ColorScheme);
    }, []);

    const handleTheme = (theme: ColorScheme) => {
        setColorScheme(theme);
    };

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme: colorScheme,
                    }}
                >
                    <AppContainer>
                        <Component {...pageProps} />
                    </AppContainer>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}

