import Navbar from "../../components/navbar"
import Footer from "../../components/home /footer"
import CTA2Section from "../../components/home /cta2"
import Head from 'next/head'
import FeaturesSection from "../../components/solution/all-features-section"
import SolutionDescription from "../../components/solution/description"

import { FaEye, FaRegLightbulb } from "react-icons/fa";
import { TbArrowWaveRightDown } from 'react-icons/tb'
import { MdContactSupport } from 'react-icons/md';


import { SiConvertio } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { ImBullhorn } from "react-icons/im";

export default function MarketingTeams() {
    return (
        <div>



        <Head>
            <title> Marketing Teams | SiteBehaviour: Solutions | Used Cases</title>
            <meta name="description" content="Discover how these digital detectives empower your team to understand your audience, tailor campaigns for impact, optimize website performance, and track conversions." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta char-set="UTF-8"></meta>
            <link rel="icon" href="/assets/favicon.png" />

        </Head>


        <Navbar />

        <div>

            <div className="px-4 pt-32 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-52">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-200">
                                    solutions
                                </p>
                            </div>
                            <h1 className="max-w-lg mb-6 sm:leading-[1.2]  text-3xl font-custombold  text-gray-100 sm:text-5xl ">
                            Elevate Marketing Strategies with Web Analytics
                            </h1>
                            <p className="text-base text-gray-200 md:text-lg">
                            Uncover the magic of understanding your audience, fine-tuning campaigns,tracking conversions and crafting a website that offers a seamless user experience  driven by insightful data .
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a href="/getstarted">
                                <button className="bg-green-400 p-3 px-5 text-black rounded-md text-lg font-customsemibold">
                                    Get Early Access
                                </button>
                            </a>

                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MHx8MHx8fDA%3D"
                            alt="product teams"
                        />

                    </div>
                </div>
            </div>


            <div className="bg-white">
                <div className="px-4 py-16 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                    <div className="flex flex-col lg:flex-row">

                        <div className="max-w-xl lg:pr-16 mx-auto mb-10">
                            <h2 className="mb-6 text-3xl text-black font-extrabold ">
                            Transformative Strategies Through Analytics
                            </h2>
                            <p className="mb-8 font-light lg:text-lg text-gray-500">
                            Celebrate wins, track conversions, and redefine your marketing strategies with the power of web analytics. 
                            </p>
                            <div className="flex items-center">
                                <img alt="ideas" className="w-1/2 h-1/3 mx-auto" src="/solution/marketing/target.svg" ></img>
                            </div>
                        </div>

                        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                            <div className="max-w-md">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                    <SiConvertio  size="24" className=" text-green-600" />
                                </div>
                                <h6 className="mb-2 text-gray-900 font-semibold leading-5">
                                Conversion Rate Optimization (CRO)
                                </h6>
                                <p className="text-md text-gray-600">
                                Identify areas of the conversion funnel where users drop off and optimize those sections to improve overall conversion rates.
                                </p>
                            </div>
                            <div className="max-w-md">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                    <FaRegUser size="24" className=" text-green-600" />
                                </div>
                                <h6 className="mb-2 text-gray-900 font-semibold leading-5">User Experience Enhancement:</h6>
                                <p className="text-md text-gray-600">
                                Use analytics to identify and address pain points in the user journey, ensuring a seamless and satisfying experience that keeps visitors engaged and encourages repeat interactions.
                                </p>
                            </div>
                            <div className="max-w-md">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                    <MdMonitorHeart size="24" className=" text-green-600" />
                                </div>
                                <h6 className="mb-2 text-gray-900 font-semibold leading-5">
                                Real-time Monitoring
                                </h6>
                                <p className="text-md text-gray-600">
                                Stay agile and responsive with real-time insights, allowing your team to adapt marketing strategies on the fly based on the latest trends and user behaviors.
                                </p>
                            </div>
                            <div className="max-w-md">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                    <ImBullhorn size="24" className=" text-green-600" />
                                </div>
                                <h6 className="mb-2 text-gray-900 font-semibold leading-5">Campaign Effectiveness Assessment:</h6>
                                <p className="text-md text-gray-600">
                                Evaluate the success of marketing campaigns by analyzing data on engagement, click-through rates, and conversion metrics, enabling continuous improvement.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <div className="bg-white">
                <div className="px-4 py-16 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg ">
                            <h2 className="mb-4 text-3xl font-extrabold  text-gray-950 ">
                            Unlocking Audience Insights
                            </h2>
                            <p className="mb-8 font-light lg:text-xl">Embark on a transformative journey of marketing mastery with our web analytics tools. Dive deep into audience insights, gaining a backstage pass to the preferences, behaviors, and needs of your visitors.</p>

                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 ">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">Audience Segmentation</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">Content Optimization</span>
                                </li>
                                <li className="flex space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 ">Product/Service Tailoring</span>
                                </li>
                            </ul>
                            <p className="mb-8 font-light lg:text-xl">Your journey to marketing mastery starts here! </p>
                        </div>
                        <div className="text-center">
                         <img className="hidden w-2/3 mb-4 mx-auto rounded-lg lg:mb-0 lg:flex"
                           src="/solution/marketing/announcement.png" alt="dashboard feature image"></img>
                         </div>
                    </div>

                </div>
            </div>


        </div>



        <FeaturesSection />

        <SolutionDescription />

        <CTA2Section />
        <Footer />
    </div >
    )
}