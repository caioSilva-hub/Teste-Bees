import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NameContextProvider from '../src/context/beesContext'
import BreweriesContextProvider from '../src/context/breweriesContext'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <NameContextProvider>
      <BreweriesContextProvider>
        <Component {...pageProps} />
      </BreweriesContextProvider>
    </NameContextProvider>
  )
}

export default MyApp
