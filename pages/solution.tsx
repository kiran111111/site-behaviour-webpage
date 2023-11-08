import Navbar from "../components/navbar"
import Title from "../components/about/title"
import Header from "../components/solution/header"
import Description from "../components/solution/description"
import FeaturesSection from "../components/solution/all-features-section"
import GetStartedSection from "../components/home /get-started-section"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

export default function About() {
    return (
         <div>    
    
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
