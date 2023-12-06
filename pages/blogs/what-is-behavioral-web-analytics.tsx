
import Navbar from "../../components/navbar"


import Footer from "../../components/home /footer"

import Head from 'next/head'


export default function Blogs() {
    return (
         <div>    

          <Head>
            <title>Web Analytics | SiteBehaviour | Blogs |   </title>
            <meta name="description" content="
                 Discover the power of web analytics and its impact on your online presence. Explore our blog for valuable insights and strategies.
            ." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta char-set="UTF-8"></meta>
            <link rel="icon" href="/assets/favicon.png" />
           
        </Head> 
    
              <Navbar />


              <div className="bg-white h-28">

              </div>
       
               <div className=" bg-white text-black">
                    <article className="max-w-4xl px-6 py-24 pt-2 md:pt-16 mx-auto space-y-16 dark:bg-white dark:text-black">
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
                                <img className="rounded-md shadow-lg" alt="what is web analytics" src="https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
                               

                                <div>
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
                                </div>


                                <div>
                                    <h2 className="my-2 mt-8 font-bold text-2xl">Importance of Behavioural web analytics for businesses </h2>
                                
                                    <ul  className="mt-4  list-disc ml-6 leading-[1.7]">
                                        <li className="mb-3"> 
                                           Web analytics is the measurement, analysis, and reporting of website data to understand and optimize its performance. It involves collecting and analyzing data on website traffic, user behavior, conversions, and other key metrics. 
                                        </li>
                                        <li className="mb-3"> Web analytics is important for businesses because it provides valuable insights into how their website is performing and how users are interacting with it. 
                                        </li>
                                        <li className="mb-3">
                                        By understanding this data, businesses and large companies can make data-driven decisions to improve their website's user experience, increase conversions, drive business growth, and complete business goals. 
                                        </li>
                                        <li className="mb-3">
                                        Web analytics can help businesses track the effectiveness of their marketing campaigns, identify areas for improvement on their website, and gain a deeper understanding of their target audience. 
                                        </li>
                                        <li className="mb-3">Overall, web analytics is an essential tool for businesses to measure and optimize the success of their online presence.
                                        </li>
                                        <li className="mb-3"> Web analytics helps businesses sell more by figuring out what products customers might want to buy. It also helps to know which products a particular customer is likely to get. This way, businesses can make more money compared to what they spend on marketing.
                                        </li>
                                        <li className="mb-3">Web analytics also looks at how customers move around a website, where they come from, and checks what they do online. The information is shown using tables, charts, and graphs. This helps businesses understand and improve how they sell things on the internet and do website optimization in a better way.
                                        </li>
                                        
                                    </ul>
                                </div>


                                <div>
                                    <h2 className="my-2 mt-8 font-bold text-2xl">What metrics should be tracked in web analytics? </h2>
                                
                                    <p className="mt-3">
                                        There are a variety of metrics that can be tracked in web analytics, depending on your specific goals and objectives. Some common metrics include:
                                   </p>

                                    <ol  className="mt-4  list-decimal ml-6 leading-[1.7]">
                                        <li className="mb-3"> <strong>Website traffic: </strong> 
                                           Web traffic metrics such as the number of visitors to your site, page views, and unique visitors.
                                        </li>
                                        <li className="mb-3"> <strong>Conversion rate: </strong> 
                                           This measures the percentage of visitors who complete a desired action on your website, such as making a purchase or filling out a form. 
                                        </li>
                                        <li className="mb-3">
                                        <strong>Bounce rate: </strong> 
                                            This is the percentage of visitors who leave your website after viewing only one page. A high bounce rate may indicate that visitors are not finding what they are looking for or that your website is not engaging enough.
                                        </li>
                                        <li className="mb-3">
                                            <strong>Average session duration: </strong>
                                            This measures how long visitors spend on your website on average. A longer average session duration may indicate that your content is engaging and keeping visitors on your site.
                                        </li>
                                        <li className="mb-3"> <strong>Referral sources: </strong> 
                                        This tracks where your website traffic is coming from, such as search engines, social media platforms, or other websites.

                                        </li>
                                        <li className="mb-3"> <strong> Conversion funnel: </strong> 
                                          This measures the steps that users take to convert on your website, tracking each stage of the process from the initial visit to the final conversion.
                                        </li>
                                        <li className="mb-3"> <strong> User Journey Map:: </strong> 
                                           Gain valuable insights into user behavior by visually tracking the routes they follow during their online experience.

                                        </li>
                                        
                                        
                                    </ol>
                                </div>


                                <div>
                                    <h2 className="my-2 mt-8 font-bold text-2xl">Categories of web analytics </h2>
                                
                                    <p className="mt-3">
                                       Web analytics can be broadly categorized into two types: on-site and off-site analytics.
                                    </p>


                                    <h3 className="inline-block text-lg font-semibold mt-6">On-site analytics </h3> 
                                    <p className="mt-3">
                                        On-site analytics refers to the process of collecting and analyzing data on a 
                                        website's performance and user behavior. This includes metrics such as page views, 
                                        bounce rate, time spent on site, and conversion rates. 
                                    </p>
                                    <p className="mt-3">
                                      On-site analytics tools like Google Analytics help website owners understand how visitors interact with their site, identify areas for improvement, and make data-driven decisions to optimize their online presence. By tracking on-site analytics regularly, businesses can gain insights into their target audience's preferences and behaviors and adjust their strategy accordingly.
                                    </p>


                                    <h3 className="inline-block text-lg font-semibold mt-6">Off-site analytics </h3> 
                                    <p className="mt-3">
                                        Off-site analytics is the process of analyzing website data that occurs outside of your own site. This includes analyzing traffic sources, backlinks, social media metrics, and other external factors that may affect your website's performance. 
                                    </p>
                                    <p className="mt-3">
                                        By tracking off-site analytics, you can gain insights into how users are finding and interacting with your website from external sources. This information can help inform your SEO and digital marketing strategies to improve overall website performance and drive more traffic to your site.
                                    </p>
                                    
                                    
                                </div>


                                <div>
                                    <h2 className="my-2 mt-8 font-bold text-2xl">Most Popular Web Analytics Tools </h2>

                                    <p className="mt-3">
                                        Web analytics tools are essential for any business or website owner looking 
                                        to track and analyze their online traffic. These tools provide valuable
                                         insights into user behavior, including how visitors navigate your site,
                                          which pages are the most popular, and where visitors are coming from. 
                                          By leveraging web analytics tools, you can make data-driven decisions 
                                          to improve your website's performance and drive more traffic to your site. 
                                    </p>

                                    <p className="mt-3">
                                       There is a whole range of tools you can use for web analytics, including tools
                                        that traditionally specialize in product analytics or experience analytics. Some of these include:
                                    </p>

                                    <ul className="mt-4  list-decimal ml-6 leading-[1.7]">
                                        <li><a className="underline text-blue-500" href="https://business.adobe.com/products/analytics/adobe-analytics.html">Adobe Analytics</a></li>
                                        <li><a className="underline text-blue-500" href="https://www.crazyegg.com/">Crazy Egg</a></li>
                                        <li><a className="underline text-blue-500" href="https://analytics.google.com/analytics/web/#/p327530619/reports/intelligenthom">Google Analytics</a></li>
                                        <li><a className="underline text-blue-500" href="https://www.heap.io/">Heap Analytics</a></li>
                                        <li><a className="underline text-blue-500" href="https://www.hotjar.com/">Hotjar </a></li>
                                        <li><a className="underline text-blue-500" href="https://sitebehaviour.com/">SiteBehaviour</a></li>
                                        <li><a className="underline text-blue-500" href="https://www.crazyegg.com/">Mixpanel</a></li>
                                        <li><a className="underline text-blue-500" href="https://amplitude.com/">Amplitude</a></li>
                                    </ul>
                                </div>



                

                                {/* <blockquote >That's how our journey began !</blockquote> */}
                            </div>



                             <p className="text-gray-700 -mb-4">Written by <span className="text-indigo-600 font-customsemibold">Kiran Kaur</span></p>


                              <a href="/blogs" className="inline-block text-indigo-600 font-semibold text-md mt-2 hover:bg-indigo-100 transition-colors p-2 rounded-md">	&#8592; Check other Blogs</a>  

                    </article>
               </div>
    
              <Footer />
         </div>
     )
  }
