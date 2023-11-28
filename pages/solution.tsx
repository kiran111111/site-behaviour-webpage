import Navbar from "../components/navbar"
import Title from "../components/about/title"
import Header from "../components/solution/header"
import Description from "../components/solution/description"
import FeaturesSection from "../components/solution/all-features-section"
import GetStartedSection from "../components/home /get-started-section"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

import Head from 'next/head'

export default function About() {
    return (
         <div>    
    

               <Head>
                    <title>Solutions | SiteBehaviour : Website Analytics Tool  </title>
                    <meta name="description" content="Gain valuable insights into your website's performance with our powerful analytics software tool. Discover heatmaps, session recordings, funnels, and filters to optimize your online presence." />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta char-set="UTF-8"></meta>
                    <link rel="icon" href="/assets/favicon.png" />
                    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
               </Head> 

              <Navbar />
               {/* <Title title={"Solution"} /> */}
               <Header />
               <Description />
               <FeaturesSection />
              <GetStartedSection />
              <CTA2Section />
              <Footer />
         </div>
     )
  }
