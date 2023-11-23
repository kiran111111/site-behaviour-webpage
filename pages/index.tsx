
import Navbar from "../components/navbar"
import HeroSection from "../components/home /hero-section"
import MainFeatures from "../components/home /main-features"
import TopFeaturesSection from "../components/home /top-features-section"
import AllFeaturesSection from "../components/home /all-features-section"
import GetStartedSection from "../components/home /get-started-section"
import  CTASection  from "../components/home /cta"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

export default function Index() {
    return (
         <div>    
    
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
