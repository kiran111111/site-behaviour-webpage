import Navbar from "../components/navbar"
import Title from "../components/about/title"
import ContactForm from "../components/contact/contact-form"
import Story from "../components/about/story"
import Stats from "../components/about/stats"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

import Head from 'next/head'

export default function Contact() {
    return (
         <div>    
    
               <Head>
                    <title>ContactUs | SiteBehaviour : Website Analytics Tool  </title>
                    <meta name="description" content="Gain valuable insights into your website's performance with our powerful analytics software tool. Discover heatmaps, session recordings, funnels, and filters to optimize your online presence." />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta char-set="UTF-8"></meta>
                    <link rel="icon" href="/assets/favicon.png" />
                    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
               </Head> 


              <Navbar />
              <Title title={"Contact"} />
              <ContactForm />
              <Footer />
         </div>
     )
  }
