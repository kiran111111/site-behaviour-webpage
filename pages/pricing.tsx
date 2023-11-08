

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

export default function Pricing() {
    return (
         <div>    
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
