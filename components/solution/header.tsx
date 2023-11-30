


export default function Header(){
    return(

      
              <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20  lg:pt-24">
                <div className="p-8 rounded shadow-xl sm:p-16">
                  <div className="flex flex-col lg:flex-row">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                      <h1  className="text-5xl leading-[124%] font-customsemibold  tracking-tight text-white sm:text-6xl ">
                         Web Wisdom : <br></br> Turning Traffic into Tactics.
                      </h1>
                    </div>
                    <div className="lg:w-1/2">
                      <p className="mb-4 text-lg text-zinc-300">
                         Tailored analytics for  Startups , product teams, marketers and UX designers .
                          Dive deep into user insights and elevate your strategies with our data-driven solutions.
                      </p>
                      <a
                        href="/"
                        className="inline-flex items-center mb-4 justify-center h-12 px-6 mr-6 font-custommedium tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none"
                    >
                        Get started
                    </a>
                    </div>
                  </div>
                </div>
              </div>
           

    )
}