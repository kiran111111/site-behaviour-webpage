
import topfeatureicon from "../../public/assets/home/topfeatures/top-feature-icon.png"
// public/assets/home/topfeatures/top-feature-icon.png

export default function GetStartedSection(){
    return (
        <div className="bg-white">
            <div className="mx-auto  bg-white max-w-7xl  px-3 sm:px-6 lg:px-4 md:py-24 py-14">
            
                <h2 data-aos="fade-up" data-aos-duration="600" className=" text-black  md:text-5xl text-3xl font-customsemibold text-center pb-10"> Get Started in 3 <br></br>  easy steps ! </h2>
              
                <div data-aos="fade-up" data-aos-duration="600" className="relative">
                    <div className="relative grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-10">
                    
                        <div className="">
                            <div className="bg-pink-100  rounded-lg p-6">
                                <img src="/assets/home/topfeatures/top-feature-icon.png" />
                            </div>
                            <div className="bg-pink-100 font-custommedium inline-block relative z-10  my-6 text-black p-2 px-8 rounded-3xl">
                                1.  {' '} <span className="pl-2 text-lg">Sign up</span>
                            </div>
                            <p className="text-zinc-600  md:text-lg text-md">
                            Create your account in easy steps by filling in some basic information .
                            </p>
                        </div>    

                        <div className="">
                            <div className="bg-orange-100  rounded-lg p-6">
                                <img src="/assets/home/topfeatures/top-feature-icon.png" />
                            </div>
                            <div className="bg-orange-100 inline-block relative z-10 font-custommedium  my-6 text-black p-2 px-8 rounded-3xl">
                                2. <span className="pl-2 text-lg font-custommedium"> Add Tracking Script.</span>
                            </div>
                            <p className="text-zinc-600  md:text-lg text-md">
                            Add your tracking code in the website by following these steps.
                            </p>
                        </div>   

                        <div className="">
                            <div className="bg-green-100  rounded-lg p-6">
                                <img src="/assets/home/topfeatures/top-feature-icon.png" />
                            </div>
                            <div className="bg-green-100 relative z-10 font-custommedium inline-block  my-6 text-black p-2 px-8 rounded-3xl">
                                3.  <span className="pl-2 text-lg">See your stats  🎉 </span>
                            </div>
                            <p className="text-zinc-600  md:text-lg text-md">
                            Now , your website is ready to deliver analytics onto the dashboard. Lets Go!
                            </p>
                        </div>    
               
                    </div> 

                    <div className="w-3/4 absolute bottom-24 hidden lg:block ">
                          <img src="/assets/line.svg" className="w-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}