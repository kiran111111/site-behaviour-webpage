import Navbar from "../components/navbar"
import Title from "../components/about/title"
import AllFeatures from "../components/features/all-features"
import HeroSection from "../components/features/hero-section"
import Footer from "../components/home /footer"
import CTA2Section from "../components/home /cta2"

export default function Features() {
    return (
         <div>    
    
              <Navbar />
              <HeroSection />
              <AllFeatures />
              <CTA2Section />
              <Footer />
         </div>
     )
  }
