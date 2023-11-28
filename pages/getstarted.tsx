import { useEffect , useState } from "react"

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

import Head from 'next/head'

export default function GetStarted() {

    const [submitted , setSubmitted] = useState(false)

    useEffect(() => {
         
        const queryParams = new URLSearchParams(window.location.search);
        const email = queryParams.get('email');
        console.log(email);

        if(email){
            setSubmitted(true)
        }

    },[])

    return (
         <div>    

                <Head>
                    <title>Get Early Access | SiteBehaviour : Website Analytics Tool  </title>
                    <meta name="description" content="Get early access to our software , by signing up to our email list. Lets get started with easy and flexible web analytics tool." />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta char-set="UTF-8"></meta>
                    <link rel="icon" href="/assets/favicon.png" />
                    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
               </Head> 

    
            <div className=" lg:flex    h-screen w-screen bg-white relative  mx-auto  ">
                <div className="z-0 flex justify-center   overflow-hidden   xl:pr-0 lg:w-1/2  lg:justify-end lg:bottom-0 lg:left-0 items-center">
                    <div className="bg-[url('/assets/navbar/hero-background.png')] lg:h-screen  bg-cover bg-top bg-no-repeat max-w-7xl
                     mx-auto  text-center   gap-4   px-4 ">
                        <div className="mx-auto">

                            <img className="w-52 mx-auto lg:pt-24 pt-8" src="/assets/hero.png" />
                    
                            <h1 data-tilt style={{lineHeight : '120%'}} className=" pt-4 text-white font-customsemibold 
                               lg:text-5xl md:text-4xl text-3xl pb-6">
                                Easy. Flexible.
                                <br></br>Analytics for 
                                Web | SAAS
                            </h1>
                            <p className="text-sm text-zinc-300 md:text-lg pb-8" >Web, Event & Behavioural Analytics made easy and accessible with a powerful web portal 
                                    and mobile app that puts daily stats on your finger
                                    tips.
                            </p>

                            <div className="image-wrapper lg:mt-12 pb-8">
                                
                                    <div  className="home-v2-banner-right-wrap">
                                    
                                        <div  className="banner-image-wrapper">

                                            <div>
                                                <img  className="mx-auto w-2/3" src="/assets/getstarted/getstarted.png" />
                                            </div>
                                    
                                            <div className="banner-blur-shape-1 md:w-56 w-8"></div>
                                            <div className="banner-blur-shape-2 md:w-56 w-8"></div>
                                    
                                        </div>
                                    

                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative items-center bg-white flex justify-end py-4  mx-auto">
                    <div className="mt-4 sm:mt-12 lg:mt-0 items-center md:max-w-lg lg:mb-0 px-4 w-full mx-auto">

                          <div className="md:max-w-xl  lg:mb-12 mb-6 md:text-left text-center">
                                
                                <h2 className="md:max-w-lg lg:mb-5 mb-3  text-2xl font-customsemibold tracking-tight text-black sm:text-3xl lg:text-5xl sm:leading-none">
                                Get Early Access !
                                </h2>
                                <p className="text-xs text-gray-500 md:text-md font-custommedium">
                                Be the First to Know and Get Exclusive Access
                                </p>
                           </div>

                           {submitted ? 
                                    <div className="text-black bg-green-300 rounded-md p-5 text-lg font-custommedium text-center">
                                        Thank you ! Your submission has been received .
                                    </div>
                                :
                                    <>
                                        
                                        <form action='https://submit-form.com/dYpWfeokl'>

                                            <input
                                                type="hidden"
                                                name="_redirect"
                                                value="http://localhost:3000/getstarted"
                                            />

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
                                    </>
                             }


                    </div>
                </div>
            </div>

         </div>
     )
  }
