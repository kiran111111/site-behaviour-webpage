import Navbar from "../components/navbar"
import Title from "../components/about/title"
import Story from "../components/about/story"
import Stats from "../components/about/stats"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

import Head from 'next/head'

export default function About() {
    return (
         <div>    

               <Head>
                    <title>About Us | SiteBehaviour : Website Analytics Tool  </title>
                    <meta name="description" content="Get to know about our journey and experiences while creating sitebehaviour." />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta char-set="UTF-8"></meta>
                    <link rel="icon" href="/assets/favicon.png" />
                  
               </Head> 
          
              <Navbar />
               <Title title={"About"} />
               
               <Stats />
               <Story />
              <CTA2Section />
              <Footer />
         </div>
     )
  }
