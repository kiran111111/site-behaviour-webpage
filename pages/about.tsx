import Navbar from "../components/navbar"
import Title from "../components/about/title"
import Story from "../components/about/story"
import Stats from "../components/about/stats"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

export default function About() {
    return (
         <div>    
    
              <Navbar />
               <Title title={"About"} />
               
               <Stats />
               <Story />
              <CTA2Section />
              <Footer />
         </div>
     )
  }
