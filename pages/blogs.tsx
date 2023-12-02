import Navbar from "../components/navbar"

import BlogList from "../components/blogs/list"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

import Head from 'next/head'


export default function Blogs() {
    return (
         <div>    

       <Head>
          <title>Blogs | SiteBehaviour: Learn about your customers</title>
          <meta name="description" content="Gain valuable insights into your website's performance. Discover heatmaps, session recordings, funnels, and filters to optimize your online presence." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta char-set="UTF-8"></meta>
          <link rel="icon" href="/assets/favicon.png" />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
       </Head> 
    
              <Navbar />
              <BlogList />
        
              <CTA2Section />
              <Footer />
         </div>
     )
  }
