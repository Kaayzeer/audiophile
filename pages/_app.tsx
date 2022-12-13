import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../global/theme";
import "../global/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
