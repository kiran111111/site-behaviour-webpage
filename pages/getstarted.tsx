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
                    <title>GetStarted | SiteBehaviour : Website Analytics Tool  </title>
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



                            <div className="px-4 py-16 mx-auto  md:px-24 lg:px-8 ">
                                    <div className=" sm:mx-auto ">
                                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                        <div>
                                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                            Brand new
                                            </p>
                                        </div>
                                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                            <span className="relative inline-block">
                                            <svg
                                                viewBox="0 0 52 24"
                                                fill="currentColor"
                                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                            >
                                                <defs>
                                                <pattern
                                                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                                    x="0"
                                                    y="0"
                                                    width=".135"
                                                    height=".30"
                                                >
                                                    <circle cx="1" cy="1" r=".7" />
                                                </pattern>
                                                </defs>
                                                <rect
                                                fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                                width="52"
                                                height="24"
                                                />
                                            </svg>
                                            <span className="relative">The</span>
                                            </span>{' '}
                                            quick, brown fox jumps over a lazy dog
                                        </h2>
                                        <p className="text-base text-gray-700 md:text-lg">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque rem aperiam, eaque ipsa quae.
                                        </p>
                                        </div>
                                    </div>
                                    <div className="max-w-screen-xl sm:mx-auto">
                                        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                                        <div className="space-y-8">
                                            <div>
                                            <p className="mb-4 text-xl font-medium">
                                                The quick, brown fox jumps over a lazy dog?
                                            </p>
                                            <p className="text-gray-700">
                                                Space, the final frontier. These are the voyages of the Starship
                                                Enterprise. Its five-year mission: to explore strange new
                                                worlds.
                                                <br />
                                                <br />
                                                Many say exploration is part of our destiny, but it’s actually
                                                our duty to future generations.
                                            </p>
                                            </div>
                                            <div>
                                            <p className="mb-4 text-xl font-medium">
                                                The first mate and his Skipper too will do?
                                            </p>
                                            <p className="text-gray-700">
                                                Well, the way they make shows is, they make one show. That
                                                show's called a pilot.
                                                <br />
                                                <br />
                                                Then they show that show to the people who make shows, and on
                                                the strength of that one show they decide if they're going to
                                                make more shows. Some pilots get picked and become television
                                                programs.Some don't, become nothing. She starred in one of the
                                                ones that became nothing.
                                            </p>
                                            </div>
                                            <div>
                                            <p className="mb-4 text-xl font-medium">
                                                Is the Space Pope reptilian!?
                                            </p>
                                            <p className="text-gray-700">
                                                A flower in my garden, a mystery in my panties. Heart attack
                                                never stopped old Big Bear. I didn't even know we were calling
                                                him Big Bear.
                                            </p>
                                            </div>
                                        </div>
                                        <div className="space-y-8">
                                            <div>
                                            <p className="mb-4 text-xl font-medium">
                                                How much money you got on you?
                                            </p>
                                            <p className="text-gray-700">
                                                The first mate and his Skipper too will do their very best to
                                                make the others comfortable in their tropic island nest.
                                                <br />
                                                <br />
                                                Michael Knight a young loner on a crusade to champion the cause
                                                of the innocent. The helpless. The powerless in a world of
                                                criminals who operate above the law. Here he comes Here comes
                                                Speed Racer. He's a demon on wheels.
                                            </p>
                                            </div>
                                            <div>
                                            <p className="mb-4 text-xl font-medium">
                                                Galaxies Orion's sword globular star cluster?
                                            </p>
                                            <p className="text-gray-700">
                                                A business big enough that it could be listed on the NASDAQ goes
                                                belly up. Disappears!
                                                <br />
                                                <br />
                                                It ceases to exist without me. No, you clearly don't know who
                                                you're talking to, so let me clue you in.
                                            </p>
                                            </div>
                                            <div>
                                            <p className="mb-4 text-xl font-medium">
                                                When has justice ever been as simple as a rule book?
                                            </p>
                                            <p className="text-gray-700">
                                                This is not about revenge. This is about justice. A lot of
                                                things can change in twelve years, Admiral. Well, that's
                                                certainly good to know. About four years. I got tired of hearing
                                                how young I looked.
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
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
