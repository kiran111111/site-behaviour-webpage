import Navbar from "../../components/navbar"
import Footer from "../../components/home /footer"
import CTA2Section from "../../components/home /cta2"


import Head from 'next/head'
import FeaturesSection from "../../components/solution/all-features-section"
import SolutionDescription from "../../components/solution/description"

import { FaEye, FaRegLightbulb } from "react-icons/fa";
import { TbArrowWaveRightDown } from 'react-icons/tb'
import { MdContactSupport } from 'react-icons/md';

export default function UIUXDesigners() {
    return (
        <div>



            <Head>
                <title> UI UX Designers | SiteBehaviour: Solutions | Used Cases</title>
                <meta name="description" content="Elevate your product team's decicion- making with our data driven insights" />
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
                                    Elevating UI/UX Design with Web Analytics Insights
                                </h1>
                                <p className="text-base text-gray-200 md:text-lg">
                                Discover how web analytics tools can be your design superpower, transforming your creative process and ensuring designs that users love. Let's explore how these tools empower UI/UX designers for success!
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
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="ui ux teams"
                            />

                        </div>
                    </div>
                </div>


                <div className="bg-white">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                        <div className="flex flex-col lg:flex-row">

                            <div className="max-w-xl lg:pr-16 mx-auto mb-10">
                                <h2 className="mb-6 text-3xl text-black font-extrabold ">
                                   Unveiling Design Precision with Web Analytics
                                </h2>
                                <p className="mb-8 font-light lg:text-lg text-gray-500">
                                Welcome to a realm of precision in design. Our web analytics tools are not just tools—they're your design accomplices. Dive into a world where understanding user behavior, optimizing user journeys, and crafting responsive designs are at your fingertips, transforming your UI/UX designs into seamless masterpieces.
                                </p>
                                <div className="flex items-center">
                                    <img alt="ideas" className="w-1/2 h-1/3 mx-auto" src="/solution/ui/ux-design.svg" ></img>
                                </div>
                            </div>

                            <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <FaEye size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">User Interaction Insights</h6>
                                    <p className="text-md text-gray-600">
                                    Leverage analytics to understand how users interact with your designs.Identify which elements receive the most engagement and optimize accordingly for an enhanced user experience.
                                    </p>
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <TbArrowWaveRightDown size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">Journey Optimization</h6>
                                    <p className="text-md text-gray-600">
                                    Track user journeys to uncover the most common paths through your website or application.Use this data to streamline navigation, reduce friction points, and ensure a smooth journey for every user.
                                    </p>
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <FaRegLightbulb size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">Responsive Design Perfection</h6>
                                    <p className="text-md text-gray-600">
                                    Analyze device-specific data to tailor your designs for different screen sizes and resolutions.Ensure a consistent and delightful experience across desktops, tablets, and mobile devices.
                                    </p>
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <MdContactSupport size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">Data-Driven Iterations</h6>
                                    <p className="text-md text-gray-600">
                                    Base design iterations on real data rather than assumptions.Continuously refine your designs by incorporating insights from analytics, ensuring ongoing improvement.
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
                                <h2 className="mb-4 text-3xl font-extrabold  text-gray-950 ">Crafting User-Centric Experiences</h2>
                                <p className="mb-8 font-light lg:text-xl">Our web analytics tools provide UI/UX designers with the tools to iterate with purpose. Delve into data-driven decisions, performance enhancements, and a holistic approach that ensures your designs not only captivate but also resonate with your audience..</p>

                                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 ">
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">Data-Driven Decision-Making</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">Performance Enhancements</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">User-Centric Testing</span>
                                    </li>
                                </ul>
                                <p className="mb-8 font-light lg:text-xl">Refine user interfaces, adjust layouts, and enhance visual elements to align with evolving user needs with us.</p>
                            </div>
                            <div className="text-center">
                                <img className="hidden w-2/3 mb-4 mx-auto rounded-lg lg:mb-0 lg:flex"
                                src="/solution/product/increase.svg" alt="dashboard feature image"></img>
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