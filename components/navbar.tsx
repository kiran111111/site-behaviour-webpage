import { Fragment } from 'react'
import { Disclosure, Menu, Transition , Popover  } from '@headlessui/react'
import React, { useState, useEffect } from 'react';
import {TiArrowUnsorted} from "react-icons/ti"

const navigation = [
  { name: 'Home', href: '/home', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Pricing', href: '/pricing', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

const solutions = [
  { name: 'Startups', description: 'Empower your startup to get more user conversions', href: '#', icon: '/assets/navbar/rocket (1).svg' },
  { name: 'Project Teams', description: "Elevate your team's decicion- making with our data driven insights", href: '#', icon: '/assets/navbar/cube (1).svg'  },
  { name: 'UI/UX', description: "Increase conversions by optimizing UI/UX with our tools.", href: '#', icon: '/assets/navbar/layout (1).svg' },
  { name: 'Marketing Teams', description: 'Fine tune your marketing startegies for optimal results', href: '#', icon: '/assets/navbar/loud-speaker.svg'  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: '/solution/allfeaturesicons/click.svg'  },
  { name: 'Contact sales', href: '#', icon: '/solution/allfeaturesicons/click.svg'  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

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
      <Disclosure as="nav" className={`backdrop-blur-lg ${scrolled ? 'bg-[rgba(31,32,35,.8)]' : 'bg-black'}  fixed top-5 lg:left-[50%] lg:w-[60%] w-[96%] left-[2%] lg:transform lg:translate-x-[-50%]  items-center  z-50 rounded-[30px]`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-0 sm:px-2 lg:px-2 ">
              <div className="relative flex h-12 items-center justify-between ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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

                  <div className="hidden sm:ml-6 sm:block   ">
                    <div className="flex  space-x-3 ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-purple-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-full  px-4 py-1.5 text-sm font-customregular'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}

                      <Popover className="relative">
                        <Popover.Button className="border-none outline-none inline-flex items-center gap-x-1 text-sm font-customregular py-1 px-3 rounded-3xl leading-6 text-gray-300 hover:bg-gray-700 hover:text-white">
                          <span>Solutions </span>
                          <TiArrowUnsorted />
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
                                  <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100">
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                                      <img src={item.icon} className="h-7 w-7 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                      <a href={item.href} className="font-customsemibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                      </a>
                                      <p className="mt-1 font-customregular text-gray-600">{item.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </Popover>


                    </div>
                  </div>

                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  

                  {/* Profile dropdown */}

                  <button className='bg-green-500 text-xs md:text-md text-black hover:bg-white hover:text-black font-custombold py-2 px-3 rounded-3xl'>
                      Get Started
                  </button>

                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
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
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}