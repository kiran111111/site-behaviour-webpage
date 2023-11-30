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
