

export default function HeroSection(){

    return(

        <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-2 md:py-24 py-14">

             <div className="grid  grid-cols-1 text-center lg:grid-cols-2 lg:text-left gap-4 p-5  px-4">
                <div>
                     <h1 className="text-white font-customsemibold lg:text-7xl md:text-6xl text-4xl pb-6">Easy. Flexible.
                         <br></br>
                         Analytics for <br></br>
                          Web | SAAS</h1>
                     <p className="text-md text-zinc-300 md:text-lg pb-8" >Web, Event & Behavioural Analytics made easy and accessible with a powerful web portal 
                            and mobile app that puts daily stats on your finger
                            tips.
                      </p>
                      <button className="bg-green-400 p-3 px-5 text-black rounded-md text-xl font-customsemibold">Get Early Access</button>
                </div>
                <div>
                     <div className="image-wrapper">
                         <div></div>
                         <div></div>
                     </div>
                </div>
             </div>

        </div>


    )
}