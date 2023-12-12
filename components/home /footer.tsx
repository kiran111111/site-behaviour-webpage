import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="">
                <a
                data-aos="fade-up" data-aos-duration="700"
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
                >
                <img className="w-44 -ml-2" src="/assets/hero.png" />
                </a>
                <div className="mt-2 lg:max-w-sm " data-aos="fade-up" data-aos-duration="700">
                    <div className="flex items-center mt-1 space-x-3">
                <a
                    href="https://twitter.com/sitebehaviour"
                    className="text-white transition-colors duration-300 hover:text-indigo-300"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/company/site-behaviour/"
                    className="text-white transition-colors duration-300 hover:text-indigo-300"
                >
                   <FaLinkedin size={24} />
                </a>
            
                    </div>
                </div>
          </div>
          <div className="space-y-2 text-lg justify-end">
            <div data-aos="fade-up" data-aos-duration="700" className="flex md:justify-end justify-start">
              <p className="mr-1 text-white">Phone:</p>
              <a
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                437-239-1838
              </a>
            </div>
            <div data-aos="fade-up" data-aos-duration="700" className="flex md:justify-end justify-start">
              <p className="mr-1 text-white">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@sitebehaviour.com
              </a>
            </div>
            <div data-aos="fade-up" data-aos-duration="700" className="flex md:justify-end justify-start">
              <p className="mr-1 text-white">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Toronto , Ontario
              </a>
            </div>
          </div>

      
        </div>
           <div  className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p  className="text-lg text-gray-600">
            © Copyright 2023 SiteBehaviour.com All rights reserved.
          </p>
          <ul  className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className=" text-gray-600 transition-colors duration-300 hover:text-gray-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-200"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/solutions"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-200"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-200"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };