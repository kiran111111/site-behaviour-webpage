// @ts-nocheck
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
         {/* <title>SiteBehaviour : Website Analytics Tool </title>
         <meta name="description" content="Gain valuable insights into your website's performance with our powerful analytics software tool. Discover heatmaps, session recordings, funnels, and filters to optimize your online presence." />
        
         <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
         <meta char-set="UTF-8"></meta>
         <link rel="apple-touch-icon" href="/assets/favicon.png" />
         <link rel="icon" href="/assets/favicon.png" />

         {/* <!-- Locale and Language Tags --> */}
          <meta property="og:locale" content="en_US"></meta>
          <meta property="og:locale:alternate" content="fr_FR" ></meta>

          <meta property="og:title" content="SiteBehaviour | Discover heatmaps, session recordings, funnels, and filters to optimize your online presence | Web analytics." />
          <meta property="og:url" content="https://sitebehaviour.com/" />

        {/* <!-- Site Name --> */}
         <meta property="og:site_name" content="SiteBehaviour"></meta>

         <meta property="article:author" content="Kiran Kaur" ></meta>

         <meta property="article:published_time" content="2023-12-01T08:27:00+00:00" ></meta>
         <meta property="article:modified_time" content="2023-12-01T08:27:00+00:00" ></meta>

         <meta property="og:image" content="https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
         <meta property="og:image:width" content="758" />
         <meta property="og:image:height" content="335" />

        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://sitebehaviour.com/" ></meta>
        <meta property="twitter:title" content="SiteBehaviour : Website Analytics Tool" ></meta>
        <meta property="twitter:description" content="Gain valuable insights into your website's performance. Discover heatmaps, session recordings, funnels, and filters to optimize your online presence." ></meta>
        <meta property="twitter:image" content="/assets/hero-icon.png" ></meta> */}

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D3MX5RY7CN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D3MX5RY7CN');
            ` ,
          }}
        />

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
