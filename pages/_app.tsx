import '../src/app/globals.css';
import Head from 'next/head'

import type { AppProps } from 'next/app'

 
export default function App({ Component, pageProps }: AppProps) {
  return (
   <>

      {/* <Head>
          <title>SiteBehaviour : Website Analytics Tool | Session Recordings , Heatmaps and Flexible Funnels </title>
          <meta name="description" content="Gain valuable insights into your website's performance with our powerful analytics software tool. Discover heatmaps, session recordings, funnels, and filters to optimize your online presence." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta char-set="UTF-8"></meta>
          <link rel="icon" href="/assets/favicon.png" />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
       </Head> */}
      <Component {...pageProps} />
  </>
  )
}