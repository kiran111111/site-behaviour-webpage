import Navbar from "../../components/navbar"
import Footer from "../../components/home /footer"
import CTA2Section from "../../components/home /cta2"


import Head from 'next/head'
import FeaturesSection from "../../components/solution/all-features-section"
import SolutionDescription from "../../components/solution/description"

import { FaEye, FaRegLightbulb } from "react-icons/fa";
import { TbArrowWaveRightDown } from 'react-icons/tb'
import { MdContactSupport } from 'react-icons/md';

import { MdOutlinePriceCheck } from "react-icons/md";
export default function Startups() {
    return (
        <div>



            <Head>
                <title> Startups | SiteBehaviour: Solutions | Used Cases</title>
                <meta name="description" content="Empowering Startups and Small Teams with Web Analytics Insights" />
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
                                <h2 className="max-w-lg mb-6 sm:leading-[1.2]  text-3xl font-custombold  text-gray-100 sm:text-5xl ">
                                Empowering Startups and Small Teams with Web Analytics Insights
                                </h2>
                                <p className="text-base text-gray-200 md:text-lg">
                                Discover how web analytics tools can be your secret weapon, providing actionable insights that drive growth, refine strategies, and transform your digital presence. 
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
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="startups"
                            />

                        </div>
                    </div>
                </div>


                <div className="bg-white">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                        <div className="flex flex-col lg:flex-row">

                            <div className="max-w-xl lg:pr-16 mx-auto mb-10">
                                <h5 className="mb-6 text-3xl text-black font-extrabold ">
                                Fueling Growth with Analytics Precision
                                </h5>
                                <p className="mb-8 font-light lg:text-lg text-gray-500">
                                Embark on a journey of growth with web analytics as your navigator. For startups and small teams, these tools are like having a personal guide—showing you where your audience is, what they love, and how to tailor your strategies for maximum impact. It's not just data; it's the roadmap to informed growth.
                                </p>
                                <div className="flex items-center">
                                    <img alt="ideas" className="w-1/2 h-1/3 mx-auto" src="/solution/startups/start-up.png" ></img>
                                </div>
                            </div>

                            <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <FaEye size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">Audience Understanding</h6>
                                    <p className="text-md text-gray-600">
                                    Gain insights into who your audience is, what they're interested in, and how they interact with your platform.
                                    </p>
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <TbArrowWaveRightDown size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">Optimizing Marketing Strategies</h6>
                                    <p className="text-md text-gray-600">
                                    Optimize ad spend, refine content strategies, and focus on channels that bring the most value to your startup or small team.
                                    </p>
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <FaRegLightbulb size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">Conversion Path Analysis</h6>
                                    <p className="text-md text-gray-600">
                                    Understand the journey your users take from initial interaction to conversion.
Identify bottlenecks, streamline processes, and optimize your website or app to increase conversion rates.
                                    </p>
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <MdOutlinePriceCheck size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">Cost-Effective Decision-Making</h6>
                                    <p className="text-md text-gray-600">
                                    Make informed decisions based on analytics data, ensuring that every move is strategic and aligned with your budget.
Maximize ROI by allocating resources to initiatives that have the most significant impact on your startup's growth.
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
                                <h2 className="mb-4 text-3xl font-extrabold  text-gray-950 ">Streamlining Success with Analytics Efficiency

</h2>
                                <p className="mb-8 font-light lg:text-xl">For startups and small teams, efficiency is key. Web analytics tools streamline your operations, offering insights that go beyond numbers. They're your efficiency partners, helping you make smart decisions, reduce costs, and create a lean operation that thrives in the competitive landscape.</p>

                                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 ">
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">Resource Optimization</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">Real-Time Monitoring</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">Agile Decision-Making</span>
                                    </li>
                                </ul>
                                <p className="mb-8 font-light lg:text-xl">Streamline website or app navigation, optimize layouts, and address pain points to create a user-friendly platform that fosters customer loyalty.</p>
                            </div>
                            <div className="text-center">
                                <img className="hidden w-2/3 mb-4 mx-auto rounded-lg lg:mb-0 lg:flex"
                                src="/solution/startups/idea.png" alt="dashboard feature image"></img>
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