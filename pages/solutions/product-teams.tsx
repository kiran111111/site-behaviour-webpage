import Navbar from "../../components/navbar"
import Footer from "../../components/home /footer"
import CTA2Section from "../../components/home /cta2"

import Head from 'next/head'
import FeaturesSection from "../../components/solution/all-features-section"
import SolutionDescription from "../../components/solution/description"

import { FaEye, FaRegLightbulb } from "react-icons/fa";
import { TbArrowWaveRightDown } from 'react-icons/tb'
import { MdContactSupport } from 'react-icons/md';

export default function ProductTeams() {
    return (
        <div>



            <Head>
                <title> Product Teams | SiteBehaviour: Solutions | Used Cases</title>
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
                                    Unlock the Power of Data for Your Product Team
                                </h1>
                                <p className="text-base text-gray-200 md:text-lg">
                                    Discover the magic of SiteBehaviour.com, where we turn data into your product's best friend. Ready to revolutionize how your product team works? Let's dive in!
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
                                src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    Enhance decision-making with trustworthy insights
                                </h2>
                                <p className="mb-8 font-light lg:text-lg text-gray-500">
                                    Use data to make your product the best it can be. Uncover new opportunities, smooth out your development process, and create products your users will rave about
                                </p>
                                <div className="flex items-center">
                                    <img alt="ideas" className="w-1/2 h-1/3 mx-auto" src="/solution/product/creativity.svg" ></img>
                                </div>
                            </div>

                            <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <FaEye size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">See What's Happening, Right Now!</h6>
                                    <p className="text-md text-gray-600">
                                        Tailor your analytics dashboard to fit your team's needs – whether it's user excitement, feature love, or sales success.
                                    </p>
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <TbArrowWaveRightDown size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">How Users Navigate</h6>
                                    <p className="text-md text-gray-600">
                                        Visualize the journey from sign-up to superfan. Identify and fix any bumps to create a smoother ride for users.
                                    </p>
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <FaRegLightbulb size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">Try Out New Ideas</h6>
                                    <p className="text-md text-gray-600">
                                        Experiment with different versions using A/B testing. Use the results to make decisions that boost the user experience.
                                    </p>
                                </div>
                                <div className="max-w-md">
                                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-200">
                                        <MdContactSupport size="24" className=" text-green-600" />
                                    </div>
                                    <h6 className="mb-2 text-gray-900 font-semibold leading-5">We've Got Your Back, Always!</h6>
                                    <p className="text-md text-gray-600">
                                        Our support team is here for you – from setup to keeping things smooth. You focus on your product; we'll handle the rest.
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
                                <h2 className="mb-4 text-3xl font-extrabold  text-gray-950 ">Increase conversions with better product experience</h2>
                                <p className="mb-8 font-light lg:text-xl">Get insights into the effectiveness of the conversion process. Product teams can identify and optimize key steps, reducing friction and increasing the likelihood of users completing desired actions.</p>

                                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 ">
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">Feature Adoption Tracking</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">User Behavior Analysis</span>
                                    </li>
                                    <li className="flex space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 ">Conversion Rate Optimization</span>
                                    </li>
                                </ul>
                                <p className="mb-8 font-light lg:text-xl">By leveraging web analytics tools, product teams can make informed decisions, continuously improve their products, and create a more user-centric and successful digital experience.</p>
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
