import '../styles/global.css'

export default function App({ Component, pageProps }) {
  console.log('here')
  return <Component {...pageProps} />
}