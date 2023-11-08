

export default function CTA2Section() {
    return (
      <div className="px-4 py-16 bg-white">
        <div className="md:py-20 pt-12 py-4 mx-auto  text-white bg-[url('/assets/home/section-bg.svg')] bg-transparent rounded-2xl  lg:max-w-7xl">
          <div className="flex relative  flex-col  mb-16 text-center sm:mb-0">
           
            <div className="max-w-lg mx-auto bg-transparent mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-customsemibold text-2xl md:text-4xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">         
                Ready to get Started ?
              </h2>
              <p className="text-base text-zinc-400 md:text-lg">
                 Experience the difference with a tool designed to unlock your website's best potential
              </p>
            </div>

            <div className="mx-auto">
               
                 <div className="flex items-center justify-center  sm:flex-row flex-col ">
                    <a
                        href="/"
                        className="inline-flex items-center mb-4 sm:mr-6  justify-center h-12 px-6  font-custommedium tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none "
                    >
                        Get started
                    </a>
                    <a
                        href="/"
                        style={{borderWidth : '1px'}}
                        className="inline-flex mx-auto items-center  mb-4 justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md border-white hover:bg-white hover:text-black focus:shadow-outline focus:outline-none"
                    >
                        Learn more
                    </a>
                 
                </div>
         
            </div>

            <img className="sm:w-36  w-24 absolute -bottom-16" src="/assets/home/cta2.svg" ></img>
            <img className="sm:w-36 w-24 absolute right-0  -bottom-16" src="/assets/home/cta3.png" ></img>
         
          </div>
        </div>
      </div>
    );
  };