
import Navbar from "../../components/navbar"


import Footer from "../../components/home /footer"

import Head from 'next/head'


export default function Blogs() {
    return (
         <div>    

          <Head>
            <title>Web Analytics | SiteBehaviour | Blogs |   </title>
            <meta name="description" content="
              What is web analytics ? Think of web analytics as your website's own detective. 
              It's like having someone keep an eye on your website and telling you
               everything about the people who visit - where they come from, what they
                like, and what they do.
            ." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta char-set="UTF-8"></meta>
            <link rel="icon" href="/assets/favicon.png" />
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Head> 
    
              <Navbar />


              <div className="bg-white h-28">

              </div>
       
               <div className=" bg-white text-black">
                    <article className="max-w-3xl px-6 py-24 pt-2 md:pt-16 mx-auto space-y-16 dark:bg-white dark:text-black">
                            <div className="w-full mx-auto space-y-4">
                                <h1 className="lg:text-6xl text-3xl font-bold ">What is Web Analytics ?</h1>
                                <div className="flex flex-wrap space-x-1 text-sm dark:text-gray-700">
                                    <a rel="noopener noreferrer" href="/" className="p-1 hover:underline">#WebAnalytics</a>
                                    <a rel="noopener noreferrer" href="/" className="p-1 hover:underline">#UserBehaviour</a>
                                    <a rel="noopener noreferrer" href="/" className="p-1 hover:underline">#Whatisit</a>
                                </div>
                                <p className="text-sm  dark:text-gray-600">by
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-violet-700">
                                        <span className="font-customsemibold"> Kiran Kaur</span>
                                    </a> on Dec 3, 2023
                                    {/* <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time> */}
                                </p>
                            </div>
                            <div className="">
                                <img className="rounded-md shadow-lg" src="https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                            <div className="dark:text-gray-800 ">
                                <p>
                                    Think of web analytics as your website's own detective. It's like
                                     having someone keep an eye on your website and telling you everything
                                      about the people who visit - where they come from, what they like,
                                       and what they do.
                                </p>
                                <h2 className="my-2 mt-8 font-bold text-2xl">Why is it needed ?</h2>
                                <p className="mt-3">
                                   Imagine you have a shop, and you want to know which products are
                                    popular and where your customers are coming from. Web analytics does 
                                    the same for your website. It tells you which pages people like, 
                                    how long they stay, and how they find your site.
                                </p>
                                <p className="mt-3">
                                    Web analytics can help you to keep your customers, draw in
                                     additional visitors, and boost the amount of money each customer invests.
                                </p>
                               


                                <h2 className="my-2 mt-8 font-bold text-2xl">How can it help you ? </h2>
                               
                                <ol  className="mt-4  list-decimal ml-6 leading-[1.7]">
                                    <li className="mb-3"> <strong>Visitor Count: </strong> 
                                       It shows how many people come to your site in real-time and from which sources.
                                        Is it just a few, a lot.
                                    </li>
                                    <li className="mb-3"> <strong>Popular Pages: </strong> 
                                       Web analytics tells you which pages on your site get the most attention. Which pages 
                                       the audience is visiting the most.
                                    </li>
                                    <li className="mb-3">
                                       <strong>Screen Recordings: </strong> 
                                       See recording of visitors interactions within your website to get more insights
                                        on visitor's journey
                                    </li>
                                    <li className="mb-3">
                                        <strong>Multiple Heatmaps: </strong>
                                        Identify on which parts of the page, the users are spending the most time . You can use
                                        Click, Scroll and mouse movement Heatmaps to visualize the engagement
                                    </li>
                                    <li className="mb-3"> <strong>Device Details: </strong> 
                                        Know which device your users are using to access your website . Which Browsers, device type and 
                                        from which location are they engaging .
                                    </li>
                                    <li className="mb-3"> <strong>User Journey Maps: </strong> 
                                        Know which device your users are using to access your website . Which Browsers, device type and 
                                        from which location are they engaging .
                                    </li>
                                    
                                </ol>


                                <p className="mt-8">
                                Web analytics helps businesses sell more by figuring out what products customers
                                 might want to buy. It also helps know which products a particular customer is 
                                 likely to get. This way, businesses can make more money compared to what
                                  they spend on marketing.
                                </p>    
                                <p className="mt-3">
                                    Web analytics also looks at how customers move around a website,
                                    where they come from, and checks what they do online. The information is 
                                    shown using tables, charts, and graphs. This helps businesses understand and improve how they sell things on the internet.
                                </p>

                             
                               

                                {/* <h3 className="mt-6 text-lg font-semibold">Custom Charts and Events</h3>
                                <ol  className="mt-4 list-disc ml-6">
                                    <li>Design charts that fit your needs, tailoring them to show the data you care about.
                                    </li>
                                    <li>Custom events in analytics enable targeted data collection by allowing users
                                         to define and track specific user interactions or actions that align 
                                         with their unique business objectives.
                                    </li>                  
                                </ol> */}


                             

                                {/* <blockquote >That's how our journey began !</blockquote> */}
                            </div>



                            <p className="mt-8 text-gray-700">
                                 These are all of our main feature which are coming soon......:)
                             </p>
                             <p className="text-gray-700">Written by <span className="text-indigo-600 font-customsemibold">Kiran Kaur</span></p>


                              <a href="/blogs" className="inline-block text-indigo-600 font-semibold text-md mt-4 hover:bg-indigo-100 transition-colors p-2 rounded-md">	&#8592; Check other Blogs</a>  

                    </article>
               </div>
    
              <Footer />
         </div>
     )
  }
