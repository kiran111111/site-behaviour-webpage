import Navbar from "../../components/navbar"
import Title from "../../components/about/title"
import AllFeatures from "../../components/features/all-features"
import HeroSection from "../../components/features/hero-section"
import Footer from "../../components/home /footer"
import CTA2Section from "../../components/home /cta2"

import { FaPlay } from "react-icons/fa";
import Head from 'next/head'

export default function CustomEvents() {
    return (
         <div>    


                <Head>
                    <title>  CustomEvents | SiteBehaviour: Flexible and Targeted Approach</title>
                    <meta name="description" content="Personalize your analytics experience by incorporating custom 
                        events that hold significance for your unique requirements. Tailor the data to focus on
                        events that matter most to you, providing a more targeted and relevant insight." />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta char-set="UTF-8"></meta>
                    <link rel="icon" href="/assets/favicon.png" />
                   
               </Head> 
    
              <Navbar />
              

              <div style={{backgroundPosition : '100%'}} className="mx-auto  bg-[url('/assets/navbar/hero-background.png')]  bg-cover bg-top bg-no-repeat px-4 sm:px-6 lg:px-2 md:pt-44 py-28 pb-40 pt-28">

                    <div className="max-w-7xl mx-auto grid  grid-cols-1 text-center lg:grid-cols-2 lg:text-left gap-4 p-5  px-4">
                         <div data-aos="fade-up" data-aos-duration="700">
                              <h1 data-tilt style={{lineHeight : '120%'}} className="text-white font-customsemibold lg:text-[78px] md:text-6xl text-4xl pb-6">
                                   Custom Events
                              </h1>
                              <p className="text-md text-zinc-300 md:text-lg pb-8" >
                                   Personalize your analytics experience by incorporating custom events
                                    that hold significance for your unique requirements. Tailor the 
                                    data to focus on events that matter most to you, providing a 
                                    more targeted and relevant insight.
                              </p>
                              <button className="bg-green-400 mb-4 p-3 px-5 text-black rounded-md text-xl font-customsemibold">Get Early Access</button>
                         </div>
                         <div data-aos="fade-up" data-aos-duration="700">

                              <div className="image-wrapper mx-4">
                              
                                   <div  className="home-v2-banner-right-wrap">
                                        <img className='rounded-md' src="/assets/features/feature-hero.png" />

                                   </div>

                              </div>
                         </div>
                    </div>

              </div>


              <div className="bg-green-200">
                <div data-aos="fade-up" data-aos-duration="700" className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                    <div className="grid gap-4 row-gap-3 lg:grid-cols-3 sm:grid-cols-2 ">
                        <ul className="space-y-3 mx-auto">
                            <li className="flex font-customsemibold text-lg items-center text-black">
                                <img className="mr-2 " src="/assets/features/tick.svg" />
                                Tailored Relevance
                            </li> 
                        </ul>
                        <ul className="space-y-3 mx-auto">
                            <li className="flex font-customsemibold text-lg items-center  text-black">
                                <img className="mr-2 " src="/assets/features/tick.svg" />
                                Granular Insights
                            </li> 
                        </ul>
                        <ul className="space-y-3 mx-auto">
                            <li className="flex font-customsemibold text-lg items-center text-black">
                                <img className="mr-2 " src="/assets/features/tick.svg" />
                                Goal Alignment
                            </li> 
                        </ul>
            
                    </div>
                </div>
              </div>
 
              <div className="px-4 py-24  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 lg:py-28 lg:pb-36 ">
                <div data-aos="fade-up" data-aos-duration="700" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-200 uppercase rounded-full bg-teal-accent-400">
                        HIGHLIGHTS
                    </p>
                    </div>
                    <h2 className="max-w-3xl mb-6  text-3xl font-customsemibold leading-none tracking-tight text-white sm:text-5xl md:mx-auto">
                    
                    Increase Conversion Rates
                    </h2>
                    <p className="text-base font-custommedium text-gray-100 md:text-lg">
                    Unlock a world of supplementary features designed to supercharge your analytics experience.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" className="grid gap-6 row-gap-5 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col justify-between text-center p-5 border-2 border-zinc-800 bg-[#141414] rounded-lg shadow-sm">
                        <div>
                            <div className="flex mx-auto items-center justify-center  w-16 h-16 mb-4 rounded-full bg-green-500 text-black">
                               <img className="w-9" src="/assets/features/customevents/database.svg" />
                            </div>
                            <h6 style={{lineHeight : '1.6'}}  className="mb-3 font-customsemibold text-xl leading-5">
                               Targeted Data Collection
                            </h6>
                            <p style={{lineHeight : '1.6'}} className="mb-3 text-md font-custommedium text-gray-300">
                              Custom events in analytics enable targeted data collection by allowing users to define and track specific
                               user interactions or actions that align with their unique business objectives. 
                            </p>
                        </div>     
                    </div>
                    <div className="flex flex-col justify-between text-center p-5 border-2 border-zinc-800 bg-[#141414] rounded-lg shadow-sm">
                        <div>
                            <div className="flex mx-auto items-center justify-center  w-16 h-16 mb-4 rounded-full bg-green-500 text-black">
                               <img className="w-9" src="/assets/features/customevents/data-analysis.svg" />
                            </div>
                            <h6 style={{lineHeight : '1.6'}}  className="mb-3 font-customsemibold text-xl leading-5">
                               User Behavior Analysis
                            </h6>
                            <p style={{lineHeight : '1.6'}} className="mb-3 text-md font-custommedium text-gray-300">
                              Incorporating custom events provides a deeper understanding of user behavior by allowing businesses
                             to track and analyze specific actions, clicks, or interactions that are of particular importance. 
                            </p>
                        </div>         
                    </div>
                    <div className="flex flex-col justify-between text-center p-5 border-2 border-zinc-800 bg-[#141414] rounded-lg shadow-sm">
                         <div>
                            <div className="flex mx-auto items-center justify-center  w-16 h-16 mb-4 rounded-full bg-green-500 text-black">
                               <img className="w-9" src="/assets/features/customevents/dollar.svg" />
                            </div>
                            <h6 style={{lineHeight : '1.6'}}  className="mb-3 font-customsemibold text-xl leading-5">
                               Conversion Tracking
                            </h6>
                            <p style={{lineHeight : '1.6'}} className="mb-3 text-md font-custommedium text-gray-300">
                               Custom events play a crucial role in conversion tracking, allowing businesses to
                               monitor and analyze user actions leading to key conversions. 
                            </p>
                        </div>         
                    </div>
                    <div className="flex flex-col justify-between text-center p-5 border-2 border-zinc-800 bg-[#141414] rounded-lg shadow-sm">
                        <div>
                            <div className="flex mx-auto items-center justify-center  w-16 h-16 mb-4 rounded-full bg-green-500 text-black">
                               <img className="w-9" src="/assets/features/customevents/adaptation.svg" />
                            </div>
                            <h6 style={{lineHeight : '1.6'}}  className="mb-3 font-customsemibold text-xl leading-5">
                               Flexible Adaptation
                            </h6>
                            <p style={{lineHeight : '1.6'}} className="mb-3 text-md font-custommedium text-gray-300">
                            Custom events offer flexibility for businesses to adapt their analytics strategy based on evolving needs. As business goals or user behaviors change, users can modify and introduce new custom events.
                            </p>
                        </div>         
                    </div>
                </div>
              </div>

              <CTA2Section />
              <Footer />
         </div>
     )
  }
