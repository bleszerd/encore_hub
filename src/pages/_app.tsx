import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes.style'
import { GlobalStyle } from '../styles/global.style'
import AuthorDataProvider from '../context/AuthorData'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthorDataProvider>
      <Head>
        <title>Encore Hub</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      </Head>
      <ThemeProvider theme={defaultTheme} >
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthorDataProvider>
  )
}

export default MyApp
