

export default function CTASection() {
    return (
      <div className="lg:my-16 lg:mx-6 mx-2 my-12">

        <div className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
               
                <h2 className="max-w-lg mb-6 font-customsemibold text-4xl  leading-none tracking-tight text-white sm:text-5xl md:mx-auto">
                   Privacy is always our priority
                </h2>
                <p className="text-base text-zinc-500 md:text-lg">
                    We want to highlight that your data is yours, 
                    and we do not use it for any purpose without your explicit consent.
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">

                <div className="flex text-center flex-col bg-zinc-900 border-none  justify-between p-4 border rounded-3xl shadow-sm">
                    <div className="">
                        <div className="flex items-center justify-center  mb-6 ">
                            <img src="/assets/home/dashboard.png" />
                        </div>
                        <div className="">
                            <div className="flex flex-col md:flex-row  my-8 justify-center  ">
                                <p className="border-2 mr-2 mb-4  border-green-600 text-green-600 rounded-3xl p-2 " >No Cookies</p>
                                <p className="border-2 mr-2 mb-4  border-green-600 text-green-600 rounded-3xl p-2 " >No Banners</p>
                                <p className="border-2 mr-2 max-h-[43px]  border-green-600 text-green-600 rounded-3xl p-2 " >Elevated User Experience</p>
                            </div>
                        </div>
                        <h6 className="mb-4  font-semibold md:text-4xl text-xl leading-0">No Cookie banners Needed</h6>
                        <p className="mb-3 text-md text-zinc-400">
                          We don't use cookies to track visitors for you on your website, instead we use a different method to track them anonymously.
                        </p>
                    </div>
                </div>

                <div className="flex text-center flex-col bg-zinc-900 border-none  justify-between p-4 border rounded-3xl shadow-sm">
                    <div className="">
                        <div className="flex items-center justify-center  mb-6 ">
                            <img src="/assets/home/dashboard.png" />
                        </div>
                        <div className="flex flex-col md:flex-row   my-8 justify-center  ">
                            <p className="border-2 mr-2 mb-4 border-green-600 text-green-600 rounded-3xl p-2 " >GDPR</p>
                            <p className="border-2 mr-2 mb-4 border-green-600 text-green-600 rounded-3xl p-2 " >CCPR</p>
                       
                         
                        </div>
                        <h6 className="mb-4 md:text-4xl text-xl font-semibold leading-0">Our GDPR and CCPR Compliance Commitment
                        </h6>
                        <p className="mb-3 text-md text-zinc-400">
                          We don't use cookies to track visitors for you on your website, instead we use a different method to track them anonymously.
                        </p>
                    </div>
                </div>

               
            </div>
        </div>


        <div className="relative rounded-xl bg-[#dbffdc] px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
            <div className="max-w-xl mx-auto lg:max-w-screen-xl">
            <div className="mb-16 lg:max-w-lg lg:mb-0">
                <div className="max-w-xl mb-6">
               
                <h2 className="max-w-lg mb-6 font-customsemibold text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    24/7 Support
                    <br className="hidden md:block" />
                    for every plan{' '}
                  
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Whether it's a question, concern, or technical issue, our dedicated team 
                    is here to help at any hour. Count on us for reliable, around-the-clock assistance.
                </p>
                </div>
                <div className="flex items-center sm:flex-row flex-col ">
                    <a
                        href="/"
                        className="inline-flex items-center mb-4 justify-center h-12 px-6 mr-6 font-custommedium tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none"
                    >
                        Get started
                    </a>
                    <a
                        href="/"
                        style={{borderWidth : '1px'}}
                        className="inline-flex items-center  mb-4 justify-center h-12 px-6 mr-6 font-custommedium tracking-wide text-black transition duration-200 rounded shadow-md border-black hover:bg-black hover:text-white focus:shadow-outline focus:outline-none"
                    >
                        Learn more
                    </a>
                 
                </div>
            </div>
            </div>
            <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
            <img
                src="/assets/home/cta.png"
                className="object-cover object-top w-full  max-w-xl -mb-16 rounded  lg:ml-64 xl:ml-8 lg:-mb-12 xl:-mb-12 lg:h-auto lg:max-w-screen-md"
                alt=""
            />
            </div>
        </div>
      </div>
    );
  };