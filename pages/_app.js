import '@/styles/globals.css'
import Layut from './components/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layut>
      <Component {...pageProps} />
    </Layut>
  )
}
