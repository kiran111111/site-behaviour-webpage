

import Navbar from "../components/navbar"
import Title from "../components/about/title"
import Header from "../components/solution/header"
import Description from "../components/solution/description"
import FeaturesSection from "../components/solution/all-features-section"
import GetStartedSection from "../components/home /get-started-section"
import PricingDetails from "../components/pricing/pricing-details"
import FeaturesTable from "../components/pricing/features-table"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

import Head from 'next/head'

export default function Pricing() {
    return (
         <div>    

              <Head>
                    <title>Pricing | SiteBehaviour : Website Analytics Tool </title>
                    <meta name="description" content="We gaurantee the best service , in an affordable price.Customizable plans , only pay for what you use." />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta char-set="UTF-8"></meta>
                    <link rel="icon" href="/assets/favicon.png" />
                    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
               </Head> 

               <Navbar />
               {/* <Title  /> */}
               {/* <div className="mb-60"></div> */}
               <PricingDetails />
               <FeaturesTable />
               <CTA2Section />
               <Footer />
         </div>
     )
  }
