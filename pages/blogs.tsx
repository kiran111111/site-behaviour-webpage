import Navbar from "../components/navbar"

import BlogList from "../components/blogs/list"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

import Head from 'next/head'


export default function Blogs() {
    return (
         <div>    

       <Head>
          <title>Blogs | SiteBehaviour: Learn about our journey</title>
          <meta name="description" content=" Read about our journey and milestones along the way" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta char-set="UTF-8"></meta>
          <link rel="icon" href="/assets/favicon.png" />
         
       </Head> 
    
              <Navbar />
              <BlogList />
        
              <CTA2Section />
              <Footer />
         </div>
     )
  }
