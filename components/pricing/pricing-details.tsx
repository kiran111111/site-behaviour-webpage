import {useState} from 'react'
import { } from '@headlessui/react'

export default function PricingDetails() {


    const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    setIsChecked(!isChecked);
  };

  const [sliderValue, setSliderValue] = useState(30);

  const handleSliderChange = (event :any) => {
    setSliderValue(event.target.value);
  };


    return (
      <div className="px-0 pb-20 bg-[#0a0a0a]  mx-auto ">

        <div className=" w-full pt-24  mb-0">
            <div className=" pb-12 relative bg-cover bg-opacity-25 bg-no-repeat bg-bottom bg-[url('/assets/navbar/hero-background.png')] mb-10 mx-auto text-center md:mb-12">

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
           <div className="grid lg:grid-cols-3 grid-cols-1 justify-around gap-6  items-center   mb-12 mx-12">

             <div className=' text-center'>
               <p className='font-customsemibold'>Based on an audience  up <br></br> to 
                  <span className='font-custombold text-green-500' > {sliderValue}k members</span>
               </p>
             </div>
         
            <div className='flex lg:my-0 lg:mx-0  sm:mx-12 mx-0 mt-12'>
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
             </div>

             <div className="tabs tabs-boxed w-fit mx-auto">
               <a className="tab tab-active font-customsemibold ">Monthly Billing</a> 
               <a className="tab  font-customsemibold  ">Yearly Billing</a> 
             </div>

           </div>
        </div>

        <div data-aos="fade-up"  className="grid px-3 sm:px-6 xl:max-w-screen-xl  row-gap-5  sm:row-gap-5 lg:grid-cols-3 sm:mx-auto">

          <div className="flex flex-col  p-6 lg:mr-6 mr-0 transition-shadow duration-300 bg-white mb-6 rounded-lg shadow-sm  hover:shadow">   
            <div className="text-left text-black">
                <div className="mr-1 text-3xl font-customsemibold">Startup Plan</div>
                <div className="mt-3 space-y-3 pb-5 text-gray-700 text-md border-b-2 border-zinc-200">
                Best for side projects and startups with limited visitors
                  </div>
                <p className='font-custombold text-4xl mt-6 mb-4'>$2.66</p>
                <p className='text-gray-700 font-customsemimedium text-sm'>Per month</p>
            </div>

            <div className='mt-4 text-left'>
              <a
                href="/contact"
                style={{borderWidth : '1px'}}
                className="inline-flex items-center justify-center bg-green-400  border-green-400  hover:bg-white hover:border-white hover:text-black  w-full h-12 px-6  font-customsemibold tracking-wide text-black transition duration-200 rounded   focus:shadow-outline focus:outline-none"
              >
                 Get Started 
              </a>
              <ul className="max-w-xs mt-6  font-customregular text-xs text-gray-800 sm:text-sm  sm:max-w-sm ">
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                    <span>2 Websites / Projects</span>
                 </li>
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                    <span>3000 visitors per month</span>
                 </li>
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                    <span>24/7 Support</span>
                 </li>
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                    <span>2 Funnels per Project</span>
                 </li>
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-white.svg" />
                    <span>Full access to every feature</span>
                 </li>

              </ul>
            </div>
          </div>

          <div className="flex flex-col  p-6 transition-shadow duration-300 bg-gray-700 mb-6 lg:border-r-2 lg:border-slate-500  lg:rounded-r-none rounded-lg   shadow-sm  hover:shadow">   
            <div className="text-left text-white">
                <div className="mr-1 text-3xl font-customsemibold">Business</div>
                <div className="mt-3 space-y-3 pb-5 text-gray-100 text-md border-b-2 border-zinc-200">Best for small to large traffic or when advanced analytics tools are needed</div>
                <p className='font-custombold text-4xl mt-6 mb-4'>$11.89</p>
                <p className='text-gray-300 font-customsemimedium text-md'>Per month</p>
            </div>

            <div className='mt-4'>
              <a
                href="/contact"
                style={{borderWidth : '1px'}}
                className="inline-flex items-center justify-center bg-green-400  border-green-400  hover:bg-white hover:border-white hover:text-black  w-full h-12 px-6  font-customsemibold tracking-wide text-black transition duration-200 rounded   focus:shadow-outline focus:outline-none"
              >
                 Get Started 
              </a>
              <ul className="max-w-xs mt-6  font-customregular text-xs text-gray-300 sm:text-sm  sm:max-w-sm ">
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                    <span>Unlimited websites</span>
                 </li>
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                    <span>Own analytics platformh</span>
                 </li>
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                    <span>Fully support with decisions</span>
                 </li>
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                    <span>Upto 100k users</span>
                 </li>
                 <li className='mb-4'>             
                    <img className='inline mr-2' src="/assets/list-circle-gray.svg" />
                    <span>Full access to every feature</span>
                 </li>

              </ul>
            </div>
          </div>

          <div className="flex flex-col  p-6 transition-shadow duration-300 bg-gray-700  mb-6  rounded-r-lg :rounded-l-none rounded-lg shadow-sm  hover:shadow">   
            <div className="text-left text-white">
                <div className="mr-1 text-3xl font-customsemibold">Enterprise</div>
                <div className="mt-3 space-y-3 pb-5 text-gray-100 text-md border-b-2 border-zinc-200">For Enterprise users that require a custom solution</div>
                <p className='font-custombold text-4xl mt-6 mb-4'>Contact Us</p>
                <p className='text-gray-300 font-customsemimedium text-sm'>Lets talk!</p>
            </div>

            <div className='mt-4'>
              <a
                href="/contact"
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
                    <span>Unlimited Users</span>
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

      </div>
    );
  };