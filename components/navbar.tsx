import { Fragment } from 'react'
import { Disclosure, Menu, Transition , Popover  } from '@headlessui/react'
import React, { useState, useEffect } from 'react';
import {TiArrowUnsorted} from "react-icons/ti"
import {FaAngleDown} from 'react-icons/fa'

import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', value : 'home' , href: '/home', current: false },
  { name: 'Pricing',value : 'pricing' , href: '/pricing', current: false },
  { name: 'Contact', value : 'contact' ,href: '/contact', current: false },
  { name: 'About', value : 'about' , href: '/about', current: false },
  // { name: 'Features',value : 'features' , href: '/features', current: false },
]

const solutions = [
  { name: 'Startups',value:'solution' , description: 'Empower your startup to get more user conversions', href: '/solution', icon: '/assets/navbar/rocket (1).svg' },
  { name: 'Project Teams',value:'solution' , description: "Elevate your team's decicion- making with our data driven insights", href: '/solution', icon: '/assets/navbar/cube (1).svg'  },
  { name: 'UI/UX',value:'solution' , description: "Increase conversions by optimizing UI/UX with our tools.", href: '/solution', icon: '/assets/navbar/layout (1).svg' },
  { name: 'Marketing Teams',value:'solution' , description: 'Fine tune your marketing startegies for optimal results', href: '/solution', icon: '/assets/navbar/loud-speaker.svg'  },
]

const features = [
  { name: 'Heatmap',value:'heatmap' , description: 'Visualize user engagement with click , scroll and mouse-move heatmaps.', href: '/features/heatmap', icon: '/solution/allfeaturesicons/fire.svg' },
  { name: 'Session Recordings',value:'recordings' , description: "Unlock the power of insight with session recordings.", href: '/features/recordings', icon: '/assets/play.svg'  },
  { name: 'Flexible Funnels',value:'funnels' , description: "Optimize your conversions with custom funnels.", href: '/features/funnels', icon: '/solution/allfeaturesicons/sales-funnel.svg' },
  { name: 'User Journey',value:'features' , description: 'Graphically see how people are navigating your website and the paths they took.', href: '/features/userjourney', icon: '/solution/allfeaturesicons/journey.svg'  },
  { name: 'Slack & Email report',value:'features' , description: 'Stay informed and in control with our concise email & Slack reports.', href: '/features/report', icon: '/solution/allfeaturesicons/arroba.svg' },
  { name: 'Custom Events',value:'features' , description: "Tailor your analytics with custom events that matter to you", href: '/features/customevents', icon: '/solution/allfeaturesicons/click.svg'  },
  { name: 'Custom Charts',value:'features' , description: "Data-Driven visualizations that tell your unique story with our custom charts.", href: '/features/customcharts', icon: '/solution/allfeaturesicons/stats.svg' },
  { name: 'Geographical details',value:'features' , description: 'See your web traffics country origin and from where they found your link', href: '/features/geographicaldetails', icon: '/solution/allfeaturesicons/map.svg'  },
  { name: 'Real time stats',value:'features' , description: 'See in the real-time how visitors are on your website along with the web page they are visiting', href: '/features/realtimestats', icon: '/solution/allfeaturesicons/time.svg' },
 
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: '/solution/allfeaturesicons/click.svg'  },
  { name: 'Contact sales', href: '#', icon: '/solution/allfeaturesicons/click.svg'  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const router = useRouter();
  const [activeItem, setActiveItem] = useState(''); // Set the default active item

  const handleItemClick = (itemName : string) => {
    setActiveItem(itemName);
    // Add any other logic you might need when a navigation item is clicked
  };


  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='mx-auto items-center'>

    {console.log(router.pathname.match(/['features']/g))}


      <Disclosure as="nav" className={`backdrop-blur-lg ${scrolled ? 'bg-[rgba(31,32,35,.8)]' : 'bg-black'}  fixed top-5 lg:left-[50%] lg:w-[80%] w-[96%] left-[2%] lg:transform lg:translate-x-[-50%]  items-center  z-50 rounded-[30px]`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-0 sm:px-2 lg:px-2 ">
              <div className="relative flex lg:py-2 py-2 items-center justify-between ">
                <div className="absolute sm:relative inset-y-0 left-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex ml-1 items-center justify-center rounded-md md:p-2 p-2  hover:text-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <img className='bg-green-500 h-6 w-6 p-1 rounded-md' src="/assets/navbar/close.svg" />
                    ) : (
                      <img className='bg-green-500 h-6 w-6 p-1 rounded-md' src="/assets/navbar/menu.svg" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="/assets/hero.png"
                      alt="Your Company"
                    />
                  </div>

                  <div className="hidden sm:ml-6 lg:block   ">
                    <div className="flex  space-x-3 ">
            
                      {/* {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => handleItemClick(item.value)}
                          className={classNames(
                            router.pathname === item.href ? 'text-white bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-white',
                            'rounded-full  px-4 py-1.5 lg:text-lg text-sm '
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))} */}

                      <Link
                          key={'home'}
                          href={'/home'}
                          onClick={() => handleItemClick('home')}
                          className={classNames(
                            router.pathname === '/home' ? 'text-white bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-white',
                            'rounded-full  px-4 py-1.5 lg:text-lg text-sm '
                          )}
                          aria-current={'home' ? 'page' : undefined}
                        >
                          Home
                      </Link>

                      <Popover className="relative">
                        <Popover.Button 
                             className={classNames(
                                router.pathname.match(/features/i)  ? 'text-white bg-gray-700' : 'text-white' , 
                                "border-none outline-none inline-flex items-center gap-x-2 lg:text-lg text-sm  font-customregular py-1 px-3 rounded-3xl lg:leading-8 text-gray-300 hover:bg-gray-700 hover:text-white"
                                )}
                             >
                          {/* <span className={classNames(
                            router.pathname === '/solution' ? 'text-gray-300 bg-gray-700' : 'text-gray-300')} >Solutions </span> */}
                            Features
                          <FaAngleDown />
                          {/* <ChevronDownIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute  z-10 mt-5 flex w-screen max-w-6xl -translate-x-1/4 pr-8">
                            <div className="w-screen flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                              <div className="lg:p-4 p-2 grid grid-cols-3">
                                {features.map((item) => (
                                  <Link href={item.href}  onClick={() => handleItemClick(item.value)}>
                                    <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100">
                                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                        <img src={item.icon} className="h-7 w-7 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                      </div>
                                      <div>
                                        <p className="font-customsemibold text-gray-900">
                                          {item.name}
                                          <span className="absolute inset-0" />
                                        </p>
                                        <p className="mt-1 font-customregular text-gray-600">{item.description}</p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </Popover>

                      <Popover className="relative">
                        <Popover.Button 
                             className={classNames(
                                router.pathname === '/solution' ? 'text-white bg-gray-700' : 'text-white' , 
                                "border-none outline-none inline-flex items-center gap-x-2 lg:text-lg text-sm  font-customregular py-1 px-3 rounded-3xl lg:leading-8 text-gray-300 hover:bg-gray-700 hover:text-white"
                                )}
                             >
                          {/* <span className={classNames(
                            router.pathname === '/solution' ? 'text-gray-300 bg-gray-700' : 'text-gray-300')} >Solutions </span> */}
                            Solutions
                          <FaAngleDown />
                          {/* <ChevronDownIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute  left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 pr-8">
                            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                              <div className="lg:p-4 p-2">
                                {solutions.map((item) => (
                                  <Link href={item.href}  onClick={() => handleItemClick(item.value)}>
                                    <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100">
                                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                        <img src={item.icon} className="h-7 w-7 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                      </div>
                                      <div>
                                        <p className="font-customsemibold text-gray-900">
                                          {item.name}
                                          <span className="absolute inset-0" />
                                        </p>
                                        <p className="mt-1 font-customregular text-gray-600">{item.description}</p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </Popover>

                      <Link
                          key={'pricing'}
                          href={'/pricing'}
                          onClick={() => handleItemClick('pricing')}
                          className={classNames(
                            router.pathname === '/pricing' ? 'text-white bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-white',
                            'rounded-full  px-4 py-1.5 lg:text-lg text-sm '
                          )}
                          aria-current={'pricing' ? 'page' : undefined}
                        >
                          Pricing
                      </Link>

                      <Link
                          key={'documentation'}
                          href={'/documentation'}
                          onClick={() => handleItemClick('cdocumentation')}
                          className={classNames(
                            router.pathname === '/documentation' ? 'text-white bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-white',
                            'rounded-full  px-4 py-1.5 lg:text-lg text-sm '
                          )}
                          aria-current={'documentation' ? 'page' : undefined}
                        >
                          Documentation
                      </Link>

                      <Link
                          key={'contact'}
                          href={'/contact'}
                          onClick={() => handleItemClick('contact')}
                          className={classNames(
                            router.pathname === '/contact' ? 'text-white bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-white',
                            'rounded-full  px-4 py-1.5 lg:text-lg text-sm '
                          )}
                          aria-current={'contact' ? 'page' : undefined}
                        >
                          Contact
                      </Link>

                    </div>
                  </div>

                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  

                  {/* Profile dropdown */}

                  <button className='bg-green-400 text-xs  sm:text-sm lg:text-lg text-black hover:bg-white hover:text-black font-custombold lg:font-custommedium py-2 md:px-3 px-2 rounded-3xl'>
                      Get Started
                  </button>

                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 border-b-2 border-gray-600">
                {navigation.map((item) => (
                  <>
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>

                   
                   </>
                ))}

                    <Popover className="relative">
                      <Popover.Button 
                            className={classNames(
                                 router.pathname === '/features' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' , "block w-full text-left rounded-md px-3 py-2 text-base font-medium"
                              )}
                            >
                        {/* <span className={classNames(
                          router.pathname === '/solution' ? 'text-gray-300 bg-gray-700' : 'text-gray-300')} >Solutions </span> */}
                          Features
                        <FaAngleDown className="inline" />
                        {/* <ChevronDownIcon className="h-5 w-5" aria-hidden="true" /> */}
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                              {features.map((item) => (
                                <Link href={item.href}  onClick={() => handleItemClick(item.value)}>
                                  <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100">
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                      <img src={item.icon} className="h-7 w-7 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                      <p className="font-customsemibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                      </p>
                                      <p className="mt-1 font-customregular text-gray-600">{item.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            
                          </div>
                        </Popover.Panel>
                      </Transition>
                   </Popover>

                   <Popover className="relative">
                      <Popover.Button 
                            className={classNames(
                                 router.pathname === '/solution' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' , "block w-full text-left rounded-md px-3 py-2 text-base font-medium"
                              )}
                            >
                        {/* <span className={classNames(
                          router.pathname === '/solution' ? 'text-gray-300 bg-gray-700' : 'text-gray-300')} >Solutions </span> */}
                          Solutions
                        <FaAngleDown className="inline" />
                        {/* <ChevronDownIcon className="h-5 w-5" aria-hidden="true" /> */}
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                              {solutions.map((item) => (
                                <Link href={item.href}  onClick={() => handleItemClick(item.value)}>
                                  <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100">
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                      <img src={item.icon} className="h-7 w-7 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                      <p className="font-customsemibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                      </p>
                                      <p className="mt-1 font-customregular text-gray-600">{item.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            
                          </div>
                        </Popover.Panel>
                      </Transition>
                   </Popover>

              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
