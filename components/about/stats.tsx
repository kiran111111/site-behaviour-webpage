

export default function Stats(){
    return(


              <div className="px-4 mt-96 py-16 bg-white mx-auto w-full  lg:px-8 lg:py-20">
                <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
                  <p className="mb-1 text-zinc-800 text-xs font-custombold tracking-wide uppercase md:mb-2">
                    New Chapter
                  </p>
                  <p className="text-base font-customregular text-zinc-600 md:text-lg">
                    Our Story began not in a boardroom, but from a genuine concern for the digital landscape we all navigate.
                  </p>
                </div>
                <div className="grid gap-6 row-gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  
                  <div className="flex flex-col p-6 w-full h-64 mb-2 rounded-xl shadow-lg lg:h-80 xl:h-96  justify-between bg-green-100 text-black">
                     <p className="font-custommedium text-3xl">First Line of Code</p>
                     <p className="font-customsemibold text-3xl">Aug , 2023</p>
                  </div>

                  <div>
                    <img
                      className="object-cover w-full h-64 mb-2 rounded-xl shadow-lg lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col p-6 w-full h-64 mb-2 rounded-xl shadow-lg lg:h-80 xl:h-96  justify-between bg-sky-100 text-black">
                     <p className="font-custommedium text-3xl">Dev Experience</p>
                     <p className="font-customsemibold text-3xl text-center"> +8Y </p>
                  </div>

                  <div>
                    <img
                      className="object-cover w-full h-64 mb-2 rounded-xl shadow-lg lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            
    )
}