import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global-styles';
import {ThemeProvider} from 'styled-components';
import {theme} from '../styles/theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;