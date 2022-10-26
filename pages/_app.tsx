import '../styles/globals.css'
import type {AppProps} from 'next/app'
import MainLayout from "../layouts/MainLayout";

function MyApp({Component, pageProps}: AppProps) {
   return <Component {...pageProps} />

}

export default MyApp
