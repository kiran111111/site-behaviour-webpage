
import Navbar from "../../components/navbar"


import Footer from "../../components/home /footer"

import Head from 'next/head'


export default function DecodingWebsiteHeatMaps() {
    return (
         <div>    

          <Head>
            <title>Decoding Website Heat Maps: Understanding Visitor Behavior for Improved Online Success |  Blogs</title>
            <meta name="description" content="
                Discover the future of web analytics in our latest blog. Stay ahead of the game with insights on web analytics from 2030.
            ." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta char-set="UTF-8"></meta>

            <meta property="article:author" content="Kiran Kaur" ></meta>

            <meta property="article:published_time" content="2023-12-01T08:27:00+00:00" ></meta>
            <meta property="article:modified_time" content="2023-12-01T08:27:00+00:00" ></meta>


            <meta property="article:section" content="Blog" ></meta>
            <meta property="article:tag" content="Tag Name" ></meta>


            <link rel="icon" href="/assets/favicon.png" />
          
        </Head> 
    
              <Navbar />


              <div className="bg-white h-28">

              </div>
       
               <div className=" bg-white text-black">
                    <article className="max-w-3xl px-6 py-24 pt-2 md:pt-16 mx-auto space-y-16 dark:bg-white dark:text-black">
                            <div className="w-full mx-auto space-y-4">
                                <h1 className="lg:text-6xl text-3xl font-bold ">Web Analytics from 2030</h1>
                                <div className="flex flex-wrap space-x-1 text-sm dark:text-gray-700">
                                    <a rel="noopener noreferrer" href="/" className="p-1 hover:underline">#Analytics</a>
                                    <a rel="noopener noreferrer" href="/" className="p-1 hover:underline">#UserBehaviour</a>
                                    <a rel="noopener noreferrer" href="/" className="p-1 hover:underline">#ProductBehaviour</a>
                                </div>
                                <p className="text-sm  dark:text-gray-600">by
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-violet-700">
                                        <span className="font-customsemibold"> Kiran Kaur</span>
                                    </a> on Dec 1 , 2023
                                    {/* <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time> */}
                                </p>
                            </div>
                            <div className="">
                                <img className="rounded-md shadow-lg " alt="web analytics" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                            <div className="dark:text-gray-800 ">
                                <p>
                                    A while back, we were hunting for a tool to amp up our SaaS game. We needed
                                     the lowdown on our website's conversion rate, how folks were cruising through 
                                     our site, and what they thought about the latest features in our SaaS gig.
                                </p>
                                <h2 className="my-2 mt-8 font-bold text-2xl">Our Motivation</h2>
                                <p className="mt-3">
                                   Turns out, every analytics tool in the market excels in its way. Take  
                                   <a className="underline text-blue-500" href="https://analytics.google.com/analytics/web/#/p327530619/reports/intelligenthome"> Google Analytics
                                   </a>, 
                                   <a className="underline text-blue-500" href="https://mixpanel.com/"> Mixpanel</a>, and
                                   <a className="underline text-blue-500" href="https://www.heap.io/"> Heap Analytics </a> 
                                  
                                   – they've got their strengths. But here's the kicker: what we wanted was a tool that's straightforward,
                                    adaptable, and, most importantly, a mix of web analytics, behavioral analytics, event analytics,
                                     and product analytics.
                                </p>
                               

                                <h2 className="my-2 mt-8 font-bold text-2xl">Introducing Site Behaviour </h2>
                                <p className="mt-3  ">
                                   Here's a sneak peek at why it's not just another tool but your secret weapon for digital supremacy :
                                </p>

                              

                                {/* <blockquote >That's how our journey began !</blockquote> */}
                            </div>


                           



                             <p className="text-gray-700">Written by <span className="text-indigo-600 font-customsemibold">Kiran Kaur</span></p>


                             <a href="/blogs" className="inline-block text-indigo-600 font-semibold text-md mt-4 hover:bg-indigo-100 transition-colors p-2 rounded-md">	&#8592; Check other Blog Posts</a>  

                    </article>
               </div>
    
              <Footer />
         </div>
     )
  }
