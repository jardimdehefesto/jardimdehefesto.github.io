import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';


const theme = {

      primary:'rgba(245, 166, 35, 1) !important',
      secondary: '#1e2021 !important',
      contrastText: '#ff4400 !important',
      textPrimary: "rgba(0, 0, 0, 0.87) !important",
      navBack: "#1e2021",

};


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`



export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Jardim de Hefesto</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
