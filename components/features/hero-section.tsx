import Tilt from 'react-parallax-tilt';

export default function HeroSection(){

    return(

        <div style={{backgroundPosition : '100%'}} className="mx-auto  bg-[url('/assets/navbar/hero-background.png')]  bg-cover bg-top bg-no-repeat px-4 sm:px-6 lg:px-2 md:pt-44 py-28 pb-40 pt-28">

             <div className="max-w-7xl mx-auto grid  grid-cols-1 text-center lg:grid-cols-2 lg:text-left gap-4 p-5  px-4">
                <div>
                     <h1 data-tilt style={{lineHeight : '120%'}} className="text-white font-customsemibold lg:text-[78px] md:text-6xl text-4xl pb-6">
                         Heatmaps
                    </h1>
                     <p className="text-md text-zinc-300 md:text-lg pb-8" >Web, Event & Behavioural Analytics made easy and accessible with a powerful web portal 
                            and mobile app that puts daily stats on your finger
                            tips.
                      </p>
                      <button className="bg-green-400 p-3 px-5 text-black rounded-md text-xl font-customsemibold">Get Early Access</button>
                </div>
                <div>

                     <div className="image-wrapper mx-4">
                        
                            <div  className="home-v2-banner-right-wrap">
                               <img className='rounded-md' src="/assets/features/feature-hero.png" />

                            </div>

                     </div>
                </div>
             </div>

        </div>


    )
}