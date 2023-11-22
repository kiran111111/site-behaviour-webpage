import Navbar from "../components/navbar"
import HeroSection from "../components/home /hero-section"
import MainFeatures from "../components/home /main-features"
import TopFeaturesSection from "../components/home /top-features-section"
import AllFeaturesSection from "../components/home /all-features-section"
import GetStartedSection from "../components/home /get-started-section"
import  CTASection  from "../components/home /cta"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"


import Tilt from 'react-parallax-tilt';

export default function GetStarted() {
    return (
         <div>    
    
            <div className=" h-screen w-screen bg-white relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8">
            <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
                {/* <img
                src="https://kitwind.io/assets/kometa/laptop.png"
                className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
                alt=""
                /> */}


               <div className="bg-[url('/assets/navbar/hero-background.png')]  bg-cover bg-top bg-no-repeat max-w-7xl mx-auto grid  grid-cols-1 text-center lg:grid-cols-2 lg:text-left gap-4 p-5  px-4 ">
                <div className="mx-auto">
                     <h1 data-tilt style={{lineHeight : '120%'}} className="text-white font-customsemibold lg:text-[78px] md:text-6xl text-4xl pb-6">Easy. Flexible.
                         <br></br>
                         Analytics for <br></br>
                          Web | SAAS</h1>
                     <p className="text-md text-zinc-300 md:text-lg pb-8" >Web, Event & Behavioural Analytics made easy and accessible with a powerful web portal 
                            and mobile app that puts daily stats on your finger
                            tips.
                      </p>


                      <div className="image-wrapper">
                        
                            <div  className="home-v2-banner-right-wrap">
                              
                                  <div  className="banner-image-wrapper">

                                   <Tilt scale={1.1} transitionSpeed={2500} >
                                     <div   className=" banner-card-flex-wrap m-auto lg:mt-0 mt-20 w-[330px] md:w-[550px]  md:h-[600px] ">
                                     
                                        <div className="home-v2-banner-left-card-wrap gap-y-5 md:gap-y-12 ">                                                  
                                         <Tilt > 
                                            <img  src="/assets/home/hero/hero-5.png" loading="lazy" alt="" className=" rounded-lg  w-36 md:w-56 md:h-56 h-32 self-end "></img>                                      
                                         </Tilt>
                                         <Tilt > 
                                            <img src="/assets/home/hero/hero-4.png" loading="lazy" alt="" className="w-36 md:w-56 md:h-44 h-40 rounded-lg " ></img>
                                         </Tilt>
                                        </div>
                                        <div className="home-v2-banner-right-card-wrap ">
                                           <Tilt > 
                                               <img src="/assets/home/hero/hero-2.png" loading="lazy" alt="" className="md:w-72 mb-12  w-[10rem] md:h-36 rounded-lg" />
                                            </Tilt>
                                            <Tilt > 
                                               <img src="/assets/home/hero/hero-1.png" loading="lazy" alt="" className=" rounded-lg md:w-72  w-[10rem] md:h-56 mt-10 md:mt-0" />
                                            </Tilt>
                                        </div>
                                       

                                    </div>
                                  </Tilt>

                              
                                    <div className="banner-blur-shape-1 md:w-56 w-8"></div>
                                    <div className="banner-blur-shape-2 md:w-56 w-8"></div>
                              
                                  </div>
                              

                            </div>

                     </div>


                     
                </div>
               
             </div>


            </div>
            <div className="relative flex justify-end pt-24 max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
                <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                    <div className="max-w-xl lg:mb-12 mb-6">
                       
                        <h2 className="max-w-lg lg:mb-5 mb-3  text-3xl font-customsemibold tracking-tight text-black sm:text-5xl sm:leading-none">
                        Get Early Access !
                        </h2>
                        <p className="text-sm text-gray-500 md:text-md font-custommedium">
                        Be the First to Know and Get Exclusive Access
                        </p>
                    </div>
                <form>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full">
                            <label className="label">
                               <span className="label-text text-gray-900 text-md font-customsemibold">Your Email</span>
                            </label>
                            <input name='email' type="email" placeholder="John@gmail.com" className="text-lg input  bg-white text-black border-2 border-zinc-800  w-full " > 
                            </input>
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-lg
                         tracking-wide text-black transition duration-200 rounded-lg shadow-md bg-green-400 
                         hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Join now
                    </button>
                   
                    </div>
                </form>
                </div>
            </div>
            </div>

         </div>
     )
  }
