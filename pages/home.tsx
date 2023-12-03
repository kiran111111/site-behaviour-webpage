import Navbar from "../components/navbar"
import HeroSection from "../components/home /hero-section"
import MainFeatures from "../components/home /main-features"
import TopFeaturesSection from "../components/home /top-features-section"
import AllFeaturesSection from "../components/home /all-features-section"
import GetStartedSection from "../components/home /get-started-section"
import  CTASection  from "../components/home /cta"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

import Head from 'next/head'


export default function Home() {
    return (
         <div>    

       <Head>
          <title>SiteBehaviour : Web, Behaviour & Product Analytics Tools</title>
          <meta name="description" content="Gain valuable insights into your website's performance. Discover heatmaps, session recordings, funnels, and filters to optimize your online presence." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta char-set="UTF-8"></meta>
          <link rel="icon" href="/assets/favicon.png" />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />


          <meta property="article:author" content="Kiran Kaur" ></meta>

            <meta property="article:published_time" content="2023-12-01T08:27:00+00:00" ></meta>
            <meta property="article:modified_time" content="2023-12-01T08:27:00+00:00" ></meta>
       </Head> 
    
              <Navbar />
              <HeroSection />
              <TopFeaturesSection />
              <MainFeatures />
              
              <AllFeaturesSection />
              <GetStartedSection />
              <CTASection />
              <CTA2Section />
              <Footer />
         </div>
     )
  }
