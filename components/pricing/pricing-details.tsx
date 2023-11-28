import {useState} from 'react'
import { } from '@headlessui/react'

export default function PricingDetails() {


    const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  const [visitsValue, setVisitsValue] = useState(1);
  const [recordingsValue, setRecordingsValue] = useState(1);

  const handleVisitsChange = (event :any) => {
   console.log(visitsValue)
    setVisitsValue(event.target.value);
  };

  const handleRecordingsChange = (event :any) => {
 
      setRecordingsValue(event.target.value);
    
  };

  const [billing , setBilling] = useState('monthly')

    return (
      <div className="px-0 pb-24 bg-[#0a0a0a]  mx-auto ">

        <div className=" w-full pt-24  mb-0">
            <div className=" pb-2 relative bg-cover bg-opacity-25 bg-no-repeat bg-bottom bg-[url('/assets/navbar/hero-background.png')] mb-2 mx-auto text-center md:mb-2">

               <div data-aos="fade-up">
                  <p className="inline-block px-3 py-px mb-4 mt-12 sm:text-lg  text-sm font-semibold  text-zinc-300  rounded-full">
                     We guarantee the best service for best price!
                  </p>
               </div>
               <h2 data-aos="fade-up" style={{lineHeight : '1.2'}} className="max-w-2xl mb-8 font-custombold text-4xl font-bold leading-none tracking-tight text-white sm:text-6xl mx-auto">
                  Best Web Analytics,<br></br>for the Best Price.
               </h2>
               
            </div>
        </div>

        <div data-aos="fade-up" className="text-base text-white md:text-lg">
           <div className="grid lg:grid-cols-1 grid-cols-1 justify-around gap-6  items-center   mb-12 mx-12">

             {/* <div className=' text-center'>
               <p className='font-customsemibold'>Based on an audience  up <br></br> to 
                  <span className='font-custombold text-green-500' > {sliderValue}k members / month </span>
               </p>
             </div> */}
         
            {/* <div className='flex lg:my-0 lg:mx-0  sm:mx-12 mx-0 mt-12'>
                 <span className='text-xs mt-1 mr-3 font-customsemibold'>1k</span>
                  <div className="mx-auto mt-0 relative inline w-full ">

                     <input type="range" 
                           value={sliderValue}
                           onChange={handleSliderChange} 
                           min={1} step={1} max="100" 
                          className="range range-success" 
                       />
                  
                     <div
                       className="bg-green-400 font-customsemibold text-xs text-black text-center px-4 py-1 w-16  -top-10 rounded-3xl  absolute"
                       style={{ left: `${(((sliderValue)/10000)*100) - 8 }%` }}
                     >
                      {sliderValue}k
                     </div>
                 </div>
                 <span className='text-xs font-customsemibold mt-1 ml-3'>100k+</span>
             </div> */}

             <div className="tabs tabs-boxed w-fit mx-auto">
               <a onClick={()=>setBilling('monthly')}  className={billing === 'monthly' ?  'tab tab-active font-customsemibold md:w-fit w-full' : 'tab  font-customsemibold md:w-fit w-full '} >
                   Monthly Billing
               </a> 
               <a onClick={()=>setBilling('yearly')} className={billing === 'yearly' ?  'tab tab-active font-customsemibold md:w-fit w-full' : 'tab  font-customsemibold md:w-fit w-full'}>
                  Yearly Billing ( 10% off )
               </a> 
             </div>

           </div>
        </div>

         <div data-aos="fade-up"  className="grid px-3 sm:px-6 xl:max-w-screen-xl  row-gap-5  sm:row-gap-5 lg:grid-cols-3 sm:mx-auto">

               <div className={visitsValue > 3 ? 
               "flex flex-col lg:p-6 p-4  lg:mr-6 mr-0 transition-shadow duration-300 bg-white mb-6 rounded-lg shadow-sm  hover:shadow"
                  :
               `flex flex-col  lg:p-6 p-4  lg:mr-6 mr-0 transition-shadow duration-300 bg-white mb-6 rounded-lg shadow-sm  hover:shadow` 
                  }>   
               <div className="text-left text-black">
                  <div className="mr-1 text-3xl font-customsemibold">Startup Plan</div>
                  <div className="mt-3 space-y-3 pb-5 text-gray-700 text-md border-b-2 border-zinc-200">
                  Best for side projects and startups with limited visitors
                     </div>
                  <p className='font-custombold text-4xl mt-6 mb-4'>
                     ${billing === 'yearly' ? (2.66*12 - 2.66) : 2.66} 
                  </p>
                  <p className='text-gray-700 font-customsemimedium text-sm'>Per month</p>
               </div>

               <div className='mt-4 text-left'>
                  {/* {sliderValue > 3 ?
                  "" : */}
                     <a
                        href="/getstarted"
                        style={{borderWidth : '1px'}}
                        className="inline-flex items-center justify-center bg-green-400  border-green-400  hover:bg-black hover:border-white hover:text-white  w-full h-12 px-6  font-customsemibold tracking-wide text-black transition duration-200 rounded   focus:shadow-outline focus:outline-none"
                     >
                        Get Started 
                     </a>
                  {/* } */}
               <ul className="max-w-xs mt-6  font-customregular text-xs text-gray-800 sm:text-sm  sm:max-w-sm ">
                  <li className='mb-4'>             
                     <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                     <span>2 Websites / Projects</span>
                  </li>
                  <li className='mb-4'>             
                     <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                     <span>3000 visits per month</span>
                  </li>
                  <li className='mb-4'>             
                     <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                     <span>Session Recordings</span>
                  </li>
                  <li className='mb-4'>             
                     <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                     <span>5 Funnels per Project</span>
                  </li>
                  <li className='mb-4'>             
                     <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                     <span>5 Heatmaps per Project</span>
                  </li>
                  <li className='mb-4'>             
                     <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                     <span>1.5 million Custom Events</span>
                  </li>
                  <li className='mb-4'>             
                     <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                     <span>Full access to every feature </span>
                  </li>
                  <li className='mb-4'>             
                     <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                     <span>24/7 Support</span>
                  </li>

               </ul>
               </div>
               </div>
       
               <div className="flex  relative  flex-col  lg:p-6 p-4  transition-shadow duration-300 bg-gray-700 mb-6 lg:border-r-2 lg:border-slate-500  lg:rounded-r-none rounded-lg   shadow-sm  hover:shadow">   
                  <div className=" text-left text-white">
                        <div className="mr-1 text-3xl font-customsemibold">Business</div>
                        <div className="mt-3 space-y-3 pb-5 text-gray-100 text-md border-b-2 border-zinc-200">Best for small to large traffic or when advanced analytics tools are needed</div>
                        <p className='font-custombold text-4xl mt-6 mb-4'>


                           
                              {/* <>
                              {billing === 'yearly' ? 
                                 ( (11.89 + ((sliderValue-6)*8)) *12 - (11.89 + ((sliderValue-6)*8))).toFixed(2)
                                 :
                                 (11.89 + ((sliderValue-6)*8)).toFixed(2)
                              } 
                              </>
                              : */}
                              <>
                              ${
                                 billing === 'yearly' ? 
                                     (recordingsValue *  1000 * 0.0056 * 11 + visitsValue *  1000 * 0.0005 * 11).toFixed(2) 
                                 : 
                                    (recordingsValue *  1000 * 0.0056  + visitsValue *  1000 * 0.0005 ).toFixed(2)
                                 } 
                                 
                              </>
                           

                           {/* ${billing === 'yearly' ? (2.66*12 - 2.66) : 2.66} */}
                        </p>
                        <p className='text-gray-300 font-customsemimedium text-md'>Per month</p>


                        <a
                           href="/getstarted"
                           style={{borderWidth : '1px'}}
                           className="inline-flex mt-3  items-center justify-center bg-green-400  border-green-400 hover:bg-white hover:border-white hover:text-black  w-full h-12 px-6  font-customsemibold tracking-wide text-black transition duration-200 rounded   focus:shadow-outline focus:outline-none"
                        >
                           Get Started 
                        </a>

                        <div className='lg:hidden flex flex-col bg-gray-800 items-center rounded-md pt-2 pb-1 px-2 lg:-mx-0    lg:mt-4   sm:mx-0  mt-6 '>
                              <div className='flex flex-start w-full mx-3 mb-2'>
                                 <p className='text-xs grow  font-customsemibold mt-0 mr-2 '>Visits</p>
                                 <p className='text-xs font-customsemibold mt-1 ml-3'>{visitsValue}k</p>
                              </div>
                              <div className="mx-auto mt-0 relative inline w-full ">
                                 <input type="range" 
                                       value={visitsValue}
                                       onChange={handleVisitsChange} 
                                       min={1} step={1} max="100" 
                                    className="range range-success" 
                                 />  
                              </div>
                              
                        </div>

                        <div className='lg:hidden flex flex-col bg-gray-800 items-center rounded-md pt-2 pb-1 px-2 lg:mx-0   lg:mt-4   sm:mx-0  mt-4 '>
                              <div className='flex flex-start w-full mx-3 mb-2'>
                                 <p className='text-xs grow  font-customsemibold mt-0 mr-2 '>Session Recordings</p>
                                 <p className='text-xs font-customsemibold mt-1 ml-3'>{recordingsValue}k</p>
                              </div>
                              <div className="mx-auto mt-0 relative inline w-full ">
                                 <input type="range" 
                                       value={recordingsValue}
                                       onChange={handleRecordingsChange} 
                                       min={1} step={1} max={visitsValue} 
                                    className="range range-success" 
                                 />  
                              </div>
                              
                        </div>
                    

                  </div>

                  <div className='mt-1'>
                        {/* <div className="flex bg-green-400 p-2 px-3  rounded-3xl items-center mt-4">
                           <p className='flex-1 text-black font-custommedium'>Session Recordings</p>

                           <label className="switch">
                              <input type="checkbox"></input>
                              <span className="slider round"></span>
                           </label>
                        </div> */}

                        <ul className="max-w-xs mt-6  font-customregular text-xs text-gray-300 sm:text-sm  sm:max-w-sm ">
                           <li className='mb-4'>             
                              <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                              <span>20 Websites / Projects</span>
                           </li>
                           <li className='mb-4'>             
                              <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                              <span>Upto 100k visits / month</span>
                           </li>
                           <li className='mb-4'>             
                              <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                              <span>Unlimited Session recordings</span>
                           </li>
                           <li className='mb-4'>             
                              <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                              <span>Unlimited Funnels</span>
                           </li>
                           <li className='mb-4'>             
                              <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                              <span>Unlimited Heatmaps</span>
                           </li>
                           <li className='mb-4'>             
                              <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                              <span>Unlimited Custom Events</span>
                           </li>
                        
                           <li className='mb-4'>             
                              <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                              <span>Full access to every feature</span>
                           </li>

                           <li className='mb-4'>             
                              <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                              <span>24/7 Support</span>
                           </li>

                        </ul>
                  </div>

               
               </div>
              
               <div className="flex flex-col  lg:p-6 p-4  transition-shadow duration-300 bg-gray-700  mb-6  rounded-r-lg lg:rounded-l-none rounded-lg shadow-sm  hover:shadow">   
                  <div className="text-left text-white">
                     <div className="mr-1 text-3xl font-customsemibold">Enterprise</div>
                     <div className="mt-3 space-y-3 pb-5 text-gray-100 text-md border-b-2 border-zinc-200">For Enterprise users that require a custom solution</div>
                     <p className='font-custombold text-4xl mt-6 mb-4'>Contact Us</p>
                     <p className='text-gray-300 font-customsemimedium text-sm'>Lets talk!</p>
                  </div>

                  <div className='mt-4'>
                  <a
                     href="/getstarted"
                     style={{borderWidth : '1px'}}
                     className="inline-flex items-center justify-center bg-green-400  border-green-400  hover:bg-white hover:border-white hover:text-black  w-full h-12 px-6  font-customsemibold tracking-wide text-black transition duration-200 rounded   focus:shadow-outline focus:outline-none"
                  >
                     Get Started 
                  </a>
                  <ul className="max-w-xs mt-6  font-customregular text-xs text-gray-300 sm:text-sm  sm:max-w-sm ">
                     <li className='mb-4'>             
                        <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                        <span>Unlimited Websites</span>
                     </li>
                     <li className='mb-4'>             
                        <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                        <span>Unlimited visits / month</span>
                     </li>
                     <li className='mb-4'>             
                        <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                        <span>Unlimited Session Recordings</span>
                     </li>
                     <li className='mb-4'>             
                        <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                        <span>Unlimited Funnels</span>
                     </li>
                     <li className='mb-4'>             
                        <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                        <span>Unlimited Heatmaps</span>
                     </li>
                     <li className='mb-4'>             
                        <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                        <span>24/7 Support - book meetings</span>
                     </li>
                     <li className='mb-4'>             
                        <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                        <span>Unlimited Funnels</span>
                     </li>
                     <li className='mb-4'>             
                        <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                        <span>Full access to every feature</span>
                     </li>

                  </ul>
                  </div>
               </div>
        
          </div>

      
            <div className='hidden lg:block  bg-gray-800 relative mt-8  mx-auto max-w-6xl rounded-xl p-4 shadow-lg '>
                  <div 
                     style={{
                        borderLeft : '20px solid transparent' , 
                        borderRight : '20px solid transparent' ,
                        borderBottom : '20px solid #1F2937'
                      }} className='arrow w-0 h-0  mx-auto absolute -top-5 left-[47%]'>

                  </div>
                  <div  className='  border-t-0 flex flex-row items-center ' >
                     <div style={{flex:'1 1 70%' }} className='  p-4 py-6  '>
                        <p className='text-lg font-customsemibold'>Visits</p>
                        <p className='text-sm text-gray-300 font-customregular my-2'>
                           Error monitoring usage is defined by the number of errors collected by Highlight per month.
                              Our frontend/server SDKs send errors, but you can also send custom errors.
                        </p>

                        <div className='flex  bg-gray-800 items-center rounded-md pt-2 pb-1 px-0 lg:-mx-0    lg:mt-12   sm:mx-12  mt-12 '>
                        
                           <p className='text-sm grow  font-customsemibold mt-0 mr-2 '>1k</p>
                           <div className="mx-auto mt-0 relative inline w-full ">
                              <input type="range" 
                                    value={visitsValue}
                                    onChange={handleVisitsChange} 
                                    min={1} step={1} max="100" 
                                 className="range range-success" 
                              />  
                              <div
                                 className="bg-green-400 font-customsemibold text-xs text-black text-center px-4 py-1 w-12  -top-10 rounded-3xl  absolute"
                                 style={{ left: `${(visitsValue-4) }%` }}
                                 >
                                 {visitsValue}k
                              </div>
                           </div>
                           <p className='text-sm font-customsemibold -mt-1 ml-3'>100k</p>
                        
                        </div>

                     </div>
                     <div style={{flex:'1 1 30%'}} className='text-lg items-center font-customsemibold p-2 text-center'>
                           <p className='text-2xl'>$
                             {billing === 'yearly' ? (visitsValue *  1000 * 0.0005 * 11).toFixed(2) : (visitsValue *  1000 * 0.0005).toFixed() }
                         </p>
                     </div> 
                  </div>
                  <div  className='  border-t-0 flex flex-row items-center rounded-b-lg ' >
                     <div style={{flex:'1 1 70%' }} className='p-4 py-6 '>
                        <p className='text-lg font-customsemibold'>Session Recordings ( {recordingsValue}k )</p>
                        <p className='text-sm text-gray-300 font-customregular my-2'>
                           Error monitoring usage is defined by the number of errors collected by Highlight per month.
                              Our frontend/server SDKs send errors, but you can also send custom errors.
                        </p>

                        <div className='flex  bg-gray-800 items-center rounded-md pt-2 pb-1 px-0 lg:-mx-0    lg:mt-12   sm:mx-12  mt-12 '>
                        
                           <p className='text-sm grow  font-customsemibold mt-0 mr-2 '>1k</p>
                           <div className="mx-auto mt-0 relative inline w-full ">
                              <input type="range" 
                                    value={recordingsValue}
                                    onChange={handleRecordingsChange} 
                                    min={1} step={1} max={visitsValue} 
                                 className="range range-success" 
                              />  
                              {/* <div
                                 className="bg-green-400 font-customsemibold text-xs text-black text-center px-4 py-1 w-12  -top-10 rounded-3xl  absolute"
                                 style={{ left: `${((100-recordingsValue)/visitsValue)}%` }}
                                 >
                                 {recordingsValue}k
                              </div> */}
                           </div>
                           <p className='text-sm font-customsemibold -mt-1 ml-3'>{visitsValue}k</p>
                        
                        </div>

                     </div>
                     <div style={{flex:'1 1 30%'}} className='text-lg items-center font-customsemibold p-2 text-center'>
                           <p className='text-2xl'>$
                             {billing === 'yearly' ? (recordingsValue *  1000 * 0.0056 * 11).toFixed(2) : (recordingsValue *  1000 * 0.0056).toFixed(2) }
                           </p>
                     </div> 
                  </div> 
           </div>

      </div>
    );
  };