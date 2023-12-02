import {useEffect , useState} from 'react'
import Tilt from 'react-parallax-tilt';


export default function AllFeaturesSection(){


    type featureType = 'JourneyMap' | 'CustomEvents'| 'MobileApp' | 'TrafficSource' | 'RealTimeStats' | 'FlexibleFilters' | 'Report' ;

    // const key : featureType ;

    const [feature , setFeature] = useState<featureType>('JourneyMap')
    /// gpt created this array itself - wow 
    const features : any = [
        {
            name : 'Journey Map',
            img : '/assets/home/allfeatures/journey.svg',
            desc : 'Visualize your customer journey and identify the most important touchpoints in your funnel.'
        },
        {
            name : 'Custom Events',
            img : '/assets/home/allfeatures/feature-2.png',
            desc : 'Create custom events to track any action on your website or app.'
        },
        {
            name : 'Mobile App',
            img : '/assets/home/allfeatures/feature-3.png',
            desc : 'Track your mobile app and get insights on your users’ behavior.'
        },
        {
            name : 'Traffic Source',
            img : '/assets/home/allfeatures/feature-4.png',
            desc : 'Understand where your traffic is coming from and how your marketing campaigns are performing.'
        },
        {
            name : 'Real time stats',
            img : '/assets/home/allfeatures/feature-5.png',
            desc : 'Get real-time stats on your website or app to make informed decisions.'
        },
        {
            name : 'Flexible Filters',
            img : '/assets/home/allfeatures/feature-6.png',
            desc : 'Filter your data by any parameter to get the most relevant insights.'
        },
        {
            name : 'Report',
            img : '/assets/home/allfeatures/feature-7.png',
            desc : 'Create custom reports and share them with your team.'
        },
        
    ]

    const featureDictionary = {
        'JourneyMap' : {
            name : 'JourneyMap',
            title : 'Visitor Journey Map',
            desc : 'Graphically see how people are navigating your website and the paths they took.',
            more1 : 'Add Start Point and End Point',
            more2 : 'Supports Custom Events',
            more3 : 'Supports Flexible Filters',
        },
        'CustomEvents' : {
            name : 'CustomEvents',
            title : 'Custom Events',
            desc : 'Add your own custom events like "Add to cart", "Checkout" etc depending upon your business needs',
            more1 : 'Add Start Point and End Point',
            more2 : 'Supports Custom Events',
            more3 : 'Supports Flexible Filters',
        },
        'MobileApp' : {
            name : 'MobileApp',
            title : 'Mobile App',
            desc : 'Daily Stats now on your finger tips',
            more1 : "Add Stats to your phone's widget on home screen",
            more2 : 'Setup Push Notifications on Events',
            more3 : 'Setup Daily Push Notification Reports',
        },
        'TrafficSource' : {
            name : 'CustomEvents',
            title : 'Traffic Source',
            desc : "See your web traffic's country origin and from where they found your link",
            more1 : 'Assess the effectiveness of different marketing campaigns',
            more2 : 'Identify Trends',
            more3 : 'Better content strategy',
        },
        'RealTimeStats' : {
            name : 'CustomEvents',
            title : 'Real Time Stats',
            desc : 'See in the real-time how visitors are on your website along with the web page they are visiting',
            more1 : 'Assess effectiveness of your marketing campains in real-time',
            more2 : 'Make decisions in real-time',
            more3 : 'Make decisions effectively',
        },
        'FlexibleFilters' : {
            name : 'CustomEvents',
            title : 'FlexibleFilters',
            desc : 'With our highly customizable filters, you are in control, tailoring your analysis to suit your specific needs.',
            more1 : 'Slice your data effortlessly with our intuitive filters',
            more2 : 'Explore your data from every angle by combining multiple filters',
            more3 : 'More accessibility Flexible Filters',
        },
        'Report' : {
            name : 'CustomEvents',
            title : 'Slack & Email Reports',
            desc : 'Stay informed and in control with our concise email & Slack reports',
            more1 : 'Get daily reports on slack',
            more2 : 'Elevate your teams productivity and collaboration with our Slack reporting solutions',
            more3 : 'Seamless email reporting feature that empowers you to effortlessly share critical insights with your team.',
        },


    }


    

    return(
        <div className="bg-black">
            <div className="mx-auto bg-black max-w-[90rem]    px-2 sm:px-6 lg:px-4 md:py-24 py-14">
              
                <h2 data-aos="fade-up" data-aos-duration="600" className=" text-white mx-auto sm:max-w-2xl first-letter:text-black font-customsemibold md:text-5xl text-2xl text-center pb-8"> 
                    EExplore Our Extra Perks and Specialized Tools.
                </h2>
                <p data-aos="fade-up" data-aos-duration="600"  className="text-gray-300 lg:text-lg text-md text-center">
                   Unlock a world of supplementary features designed to supercharge your analytics experience.
                </p>

                <div data-aos="fade-up" data-aos-duration="600"  className="my-12   ">
                      <div className=" max-w-7xl lg:mx-auto grid grid-cols-1  mx-6 gap-5  lg:mb-10 sm:grid-cols-4 lg:grid-cols-7">
                     {/* <div className="text-center"> */}
                    


                        <div  onClick={()=>setFeature('JourneyMap')} 
                             
                              className={feature === 'JourneyMap' ?  
                                    `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-green-500  text-center pt-6 pb-4`  
                                :
                                     `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-zinc-700  text-center pt-6 pb-4`  
                                    }
                                >
                                <Tilt scale={1.2} transitionSpeed={2500} tiltMaxAngleX={40}
                                 tiltMaxAngleY={40}>
                                   <img className="h-16 pb-4 text-center inline-block" src='/assets/home/allfeatures/journey.svg' />
                                </Tilt>
                                <p className="text-lg">JourneyMap</p>
                         </div>

                         <div  onClick={()=>setFeature('CustomEvents')} 
                            
                              className={feature === 'CustomEvents' ?  
                                    `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-green-500  text-center pt-6 pb-4`  
                                :
                                     `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-zinc-700  text-center pt-6 pb-4`  
                                    }
                             >
                                <Tilt scale={1.2} transitionSpeed={2500} tiltMaxAngleX={40}
                                 tiltMaxAngleY={40}>
                                   <img className="h-16 pb-4 text-center inline-block" src='/assets/home/allfeatures/click.svg' />
                                </Tilt>
                                <p className="text-lg">CustomEvents</p>
                         </div>


                         <div  onClick={()=>setFeature('MobileApp')} 
                            
                              className={feature === 'MobileApp' ?  
                              `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-green-500  text-center pt-6 pb-4`  
                              :
                               `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-zinc-700  text-center pt-6 pb-4`  
                              }
                              >
                                <Tilt scale={1.2} transitionSpeed={2500} tiltMaxAngleX={40}
                                 tiltMaxAngleY={40}>
                                   <img className="h-16 pb-4 text-center inline-block" src='/assets/home/allfeatures/phone.svg' />
                                </Tilt>
                                <p className="text-lg">MobileApp</p>
                         </div>


                         <div  onClick={()=>setFeature('TrafficSource')} 
                           
                              className={feature === 'TrafficSource' ?  
                                    `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-green-500  text-center pt-6 pb-4`  
                                :
                                     `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-zinc-700  text-center pt-6 pb-4`  
                                    }
                             >
                                <Tilt scale={1.2} transitionSpeed={2500} tiltMaxAngleX={40}
                                 tiltMaxAngleY={40}>
                                   <img className="h-16 pb-4 text-center inline-block" src='/assets/home/allfeatures/maps.svg' />
                                </Tilt>
                                <p className="text-lg">TrafficSource</p>
                         </div>


                         <div  onClick={()=>setFeature('RealTimeStats')} 
                     
                              className={feature === 'RealTimeStats' ?  
                                    `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-green-500  text-center pt-6 pb-4`  
                                :
                                     `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-zinc-700  text-center pt-6 pb-4`  
                                    }
                              >
                                <Tilt scale={1.2} transitionSpeed={2500} tiltMaxAngleX={40}
                                 tiltMaxAngleY={40}>
                                   <img className="h-16 pb-4 text-center inline-block" src='/assets/home/allfeatures/chart.svg' />
                                </Tilt>
                                <p className="text-lg">RealTimeStats</p>
                         </div>


                         <div  onClick={()=>setFeature('FlexibleFilters')} 
                          
                              className={feature === 'FlexibleFilters' ?  
                              `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-green-500  text-center pt-6 pb-4`  
                               :
                               `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-zinc-700  text-center pt-6 pb-4`  
                              }
                              >
                                <Tilt scale={1.2} transitionSpeed={2500} tiltMaxAngleX={40}
                                 tiltMaxAngleY={40}>
                                   <img className="h-16 pb-4 text-center inline-block" src='/assets/home/allfeatures/filter.svg' />
                                </Tilt>
                                <p className="text-lg">FlexibleFilters</p>
                         </div>


                         <div  onClick={()=>setFeature('Report')} 
                        
                              className={feature === 'Report' ?  
                              `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-green-500  text-center pt-6 pb-4`  
                                 :
                               `bg-[#1c1c1c] b2 cursor-pointer  rounded-lg  border-zinc-700  text-center pt-6 pb-4`  
                              }
                             >
                                <Tilt scale={1.2} transitionSpeed={2500} tiltMaxAngleX={40}
                                 tiltMaxAngleY={40}>
                                   <img className="h-16 pb-4 text-center inline-block" src='/assets/home/allfeatures/integration.svg' />
                                </Tilt>
                                <p className="text-lg">Report</p>
                         </div>

                      </div>
                    {/* </div> */}
                    <div className="bg-[#141414] grid grid-cols-1 sm:grid-cols-2 mx-2 p-16 px-4 sm:px-8 pt-28 -mt-20 rounded-xl">
                         <div>
                            <h3 className="text-3xl font-customsemibold text-white" > {featureDictionary[feature].title} </h3>
                            <p className="text-zinc-400 mt-2 text-lg" > 
                               {featureDictionary[feature].desc}
                            </p>
                            <ul className="mt-8 text-zinc-400 ">
                                <li className="flex flex-row items-start mb-3"> 
                                    <img src="/assets/home/list-check-icon.svg" />
                                    <p className="ml-2">Get daily reports on slack</p>
                                </li>
                                <li className="flex flex-row items-start mb-3"> 
                                    <img src="/assets/home/list-check-icon.svg" />
                                    <p className="ml-2">Elevate your team's productivity and collaboration with our Slack reporting solutions</p>
                                </li>
                                <li className="flex flex-row items-start"> 
                                    <img src="/assets/home/list-check-icon.svg" />
                                    <p className="ml-2">Seamless email reporting feature that empowers you to 
                                    effortlessly share critical insights with your team.</p>
                                </li>
                            </ul>
                         </div>
                         <div data-aos="fade-up" data-aos-duration="600"  className="mt-4 mx-6 flex">
                               {/* <img className="rounded-xl w-20" src="/assets/home/allfeatures/feature-2.png" ></img> */}
                               <img className="rounded-xl " src="/assets/home/allfeatures/feature-1.png" ></img>
                         </div>
                    </div>
                </div>          

            </div> 


            {/* <div className="grid grid-cols-2 py-16 ">
                <div className="h-96 overflow-scroll">
                    <div className="py-24 ">
                        <h2 className="text-6xl">test</h2>
                        <p>rets</p>
                    </div>
                    <div className="py-24 ">
                        <h2 className="text-6xl">test</h2>
                        <p>rets</p>
                    </div>
                    <div className="py-24 ">
                        <h2 className="text-6xl">test</h2>
                        <p>rets</p>
                    </div>
                </div>
                <div className="">
                    <img src="/assets/home/dashboard.png" />
                </div>
            </div> */}


            <div className="text-center mx-auto py-12 pb-24 px-2">
                 <h2 data-aos="fade-up" data-aos-duration="600"  className="text-white font-customsemibold md:text-5xl text-3xl pb-12">Integrated with best apps</h2>

                 <div data-aos="fade-up" data-aos-duration="600"  className="grid max-w-[300px] items-center  mx-6 sm:mx-auto  grid-cols-2 gap-2 row-gap-2 mb-6 sm:grid-cols-2 lg:grid-cols-2">
                 
                      {/* <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-zinc-900 sm:w-24 sm:h-24">
                        <img className="w-8 lg:w-16" src="/assets/home/integration/slack-icon.svg" />
                      </div> */}
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-zinc-900 sm:w-24 lg:w-32 lg:h-32">
                        <img className="w-8 lg:w-16 p-0" src="/assets/home/integration/slack.svg" />
                      </div>
                      {/* <div className="flex items-center justify-center w-12 h-12  sm: mx-auto mb-4 rounded-full bg-zinc-900 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                        <img className=" w-8 lg:w-16" src="/assets/home/integration/slack-icon.svg" />
                      </div> */}
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4  rounded-full bg-zinc-900 sm:w-24 lg:w-32 lg:h-32">
                        <img className="w-8 lg:w-16 p-0" src="/assets/home/integration/jira.svg" />
                      </div>
                      {/* <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-zinc-900 sm:w-24 sm:h-24">
                        <img className="w-8 lg:w-16" src="/assets/home/integration/slack-icon.svg" />
                      </div> */}

                </div>


                 <p data-aos="fade-up" data-aos-duration="600"  className="text-lg mx-6 sm:mx-auto  text-zinc-300">
                    Streamline communication within your team by getting daily reports and notifications after implementing these integrations.
                 </p>
            </div>
        </div>
    )
}