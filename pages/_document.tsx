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

         {/* <!-- Locale and Language Tags --> */}
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:locale:alternate" content="fr_FR" ></meta>

        {/* <!-- Site Name --> */}
        <meta property="og:site_name" content="SiteBehaviour"></meta>

        <meta property="og:image" content="https://qualaroo.com/blog/wp-content/uploads/2016/12/The-Ultimate-Guide-to-SEO-for-UX-Designers.jpg" />
         <meta property="og:image:width" content="758" />
         <meta property="og:image:height" content="335" />

        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://sitebehaviour.com/" ></meta>
        <meta property="twitter:title" content="SiteBehaviour : Website Analytics Tool" ></meta>
        <meta property="twitter:description" content="Gain valuable insights into your website's performance. Discover heatmaps, session recordings, funnels, and filters to optimize your online presence." ></meta>
        <meta property="twitter:image" content="/assets/hero-icon.png" ></meta> */}

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

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
