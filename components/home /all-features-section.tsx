
import Tilt from 'react-parallax-tilt';


export default function AllFeaturesSection(){

    return(
        <div className="bg-black">
            <div className="mx-auto bg-black max-w-7xl  px-0 sm:px-6 lg:px-4 md:py-24 py-14">
              
                <h2 className=" text-white mx-auto sm:max-w-2xl text-5xl font-customsemibold text-center pb-8"> 
                   Explore Our Extra Perks and Specialized Tools.
                </h2>
                <p className="text-gray-300 text-lg text-center">
                   Unlock a world of supplementary features designed to supercharge your analytics experience.
                </p>

                <div className="mt-12 md:mx-0 ">
                      <div className="  grid grid-cols-1  mx-6 gap-10  mb-10 sm:grid-cols-3 lg:grid-cols-7">
                     {/* <div className="text-center"> */}
                         {[
                            {img : '/assets/home/allfeatures/journey.svg', name :'Journey Map' },
                            {img : '/assets/home/allfeatures/click.svg' , name : 'Custom Events' },
                            {img : '/assets/home/allfeatures/phone.svg' , name : 'Mobile App' },
                            {img : '/assets/home/allfeatures/maps.svg' , name : 'Traffic Source' },
                            {img : '/assets/home/allfeatures/chart.svg' ,  name : 'Real time stats' },
                            {img : '/assets/home/allfeatures/filter.svg' ,  name : 'Flexible Filters' },
                            {img : '/assets/home/allfeatures/integration.svg' ,  name: 'Report' },
                        ].map(e => (
                            <div style={{borderWidth : '1px '}} className="bg-zinc-800 cursor-pointer  rounded-lg  border-zinc-600 text-center pt-6 pb-4">
                                <Tilt scale={1.2} transitionSpeed={2500} tiltMaxAngleX={40}
    tiltMaxAngleY={40}>
                                   <img className="h-16 pb-4 text-center inline-block" src={e.img} />
                                </Tilt>
                                <p className="text-lg">{e.name}</p>
                            </div>
                         ))}
                      </div>
                    {/* </div> */}
                    <div className="bg-zinc-900 grid grid-cols-1 sm:grid-cols-2 mx-2 p-16 px-4 sm:px-8 pt-20 -mt-20 rounded-xl">
                         <div>
                            <h3 className="text-3xl font-customsemibold text-white" > Slack & Email Reports </h3>
                            <p className="text-zinc-300 mt-2" > 
                                Stay informed and in control with our concise email & Slack reports.
                            </p>
                            <ul className="mt-4 text-zinc-400 ">
                                <li className="flex flex-row items-start mb-4"> 
                                    <img src="/assets/home/list-check-icon.svg" />
                                    <p className="ml-2">Get daily reports on slack</p>
                                </li>
                                <li className="flex flex-row items-start mb-4"> 
                                    <img src="/assets/home/list-check-icon.svg" />
                                    <p className="ml-2">Elevate your team's productivity and collaboration with our Slack reporting solutions</p>
                                </li>
                                <li className="flex flex-row items-start"> 
                                    <img src="/assets/home/list-check-icon.svg" />
                                    <p className="ml-2">Seamless email reporting feature that empowers you to 
                                    effortlessly share critical insights with your team.</p>
                                </li>
                            </ul>
                         </div>
                         <div className="mt-4 mx-6 flex">
                               {/* <img className="rounded-xl w-20" src="/assets/home/allfeatures/feature-2.png" ></img> */}
                               <img className="rounded-xl " src="/assets/home/allfeatures/feature-1.png" ></img>
                         </div>
                    </div>
                </div>          

            </div> 


            {/* <div className="grid grid-cols-2 py-16 ">
                <div className="h-96 overflow-scroll">
                    <div className="py-24 ">
                        <h2 className="text-6xl">test</h2>
                        <p>rets</p>
                    </div>
                    <div className="py-24 ">
                        <h2 className="text-6xl">test</h2>
                        <p>rets</p>
                    </div>
                    <div className="py-24 ">
                        <h2 className="text-6xl">test</h2>
                        <p>rets</p>
                    </div>
                </div>
                <div className="">
                    <img src="/assets/home/dashboard.png" />
                </div>
            </div> */}


            <div className="text-center mx-auto py-12 pb-24">
                 <h2 className="text-5xl font-customsemibold pb-12">Integrated with best apps</h2>

                 <div className="grid md:max-w-5xl max-w-xl items-center  mx-6 sm:mx-auto  grid-cols-5 gap-2 row-gap-6 mb-10 sm:grid-cols-5 lg:grid-cols-5">
                 
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-zinc-900 sm:w-24 sm:h-24">
                        <img className="w-8 lg:w-16" src="/assets/home/slack-icon.svg" />
                      </div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-zinc-900 sm:w-24 sm:h-24">
                        <img className="w-8 lg:w-16" src="/assets/home/slack-icon.svg" />
                      </div>
                      <div className="flex items-center justify-center w-12 h-12  sm: mx-auto mb-4 rounded-full bg-zinc-900 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                        <img className=" w-8 lg:w-16" src="/assets/home/slack-icon.svg" />
                      </div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-zinc-900 sm:w-24 sm:h-24">
                        <img className="w-8 lg:w-16" src="/assets/home/slack-icon.svg" />
                      </div>
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-zinc-900 sm:w-24 sm:h-24">
                        <img className="w-8 lg:w-16" src="/assets/home/slack-icon.svg" />
                      </div>

                </div>


                 <p className="text-lg mx-6 sm:mx-auto  text-zinc-300">
                    Streamline communication within your team by getting daily reports and notifications after implementing these integrations.
                 </p>
            </div>
        </div>
    )
}