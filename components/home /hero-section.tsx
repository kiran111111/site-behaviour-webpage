import Tilt from 'react-parallax-tilt';

export default function HeroSection(){

    return(

        <div style={{backgroundPosition : '50%'}} className="mx-auto  bg-[url('/assets/navbar/hero-background.png')]  bg-cover bg-top bg-no-repeat px-4 sm:px-6 lg:px-2 md:py-44 py-20 pt-28">

             <div className="max-w-7xl mx-auto grid  grid-cols-1 text-center lg:grid-cols-2 lg:text-left gap-4 p-5  px-4">
                <div>
                     <h1 data-tilt style={{lineHeight : '120%'}} className="text-white font-customsemibold lg:text-[78px] md:text-6xl text-4xl pb-6">Easy. Flexible.
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
                        
                            <div  className="home-v2-banner-right-wrap">
                              
                                  <div  className="banner-image-wrapper">

                                   <Tilt scale={1.1} transitionSpeed={2500} >
                                     <div   className=" banner-card-flex-wrap m-auto lg:mt-0 mt-20 w-[330px] md:w-[550px]  md:h-[600px] ">
                                     
                                        <div className="home-v2-banner-left-card-wrap gap-y-5 md:gap-y-12 ">                                                  
                                         <Tilt > 
                                            <img  src="/assets/home/hero/hero-5.png" loading="lazy" alt="" className=" rounded-lg  w-36 md:w-56 md:h-56 h-32 self-end "></img>                                      
                                         </Tilt>
                                         <Tilt > 
                                            <img src="/assets/home/hero/hero-4.png" loading="lazy" alt="" className="w-36 md:w-56 md:h-44 h-40 rounded-lg " ></img>
                                         </Tilt>
                                        </div>
                                        <div className="home-v2-banner-right-card-wrap ">
                                           <Tilt > 
                                               <img src="/assets/home/hero/hero-2.png" loading="lazy" alt="" className="md:w-72 mb-12  w-[10rem] md:h-36 rounded-lg" />
                                            </Tilt>
                                            <Tilt > 
                                               <img src="/assets/home/hero/hero-1.png" loading="lazy" alt="" className=" rounded-lg md:w-72  w-[10rem] md:h-56 mt-10 md:mt-0" />
                                            </Tilt>
                                        </div>
                                       

                                    </div>
                                  </Tilt>

                              
                                    <div className="banner-blur-shape-1 md:w-56 w-8"></div>
                                    <div className="banner-blur-shape-2 md:w-56 w-8"></div>
                              
                                  </div>
                              

                            </div>

                     </div>
                </div>
             </div>

        </div>


    )
}