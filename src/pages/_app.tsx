import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Minhas viagens</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Projeto para registrar lugares que passei."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
