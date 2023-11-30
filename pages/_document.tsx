import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
         {/* <title>SiteBehaviour : Website Analytics Tool </title>
         <meta name="description" content="Gain valuable insights into your website's performance with our powerful analytics software tool. Discover heatmaps, session recordings, funnels, and filters to optimize your online presence." />
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
         <meta char-set="UTF-8"></meta>
         <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}
         <link rel="apple-touch-icon" href="/assets/favicon.png" />
         <link rel="icon" href="/assets/favicon.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sitebehaviour.com/" />
        <meta property="twitter:title" content="Your Page Title"/>
        <meta property="twitter:description" content="Your page description"/>
        <meta property="twitter:image" content="/assets/hero-icon.png"/>

      </Head>
      <body> 
        <Main />
        <NextScript>
           
        </NextScript>
        
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
           AOS.init();
         </script>

      </body>
    </Html>
  )
}
