
import topfeatureicon from "../../public/assets/home/topfeatures/top-feature-icon.png"
// public/assets/home/topfeatures/top-feature-icon.png

export default function TopFeaturesSection(){
    return (
        <div className="bg-white">
            <div className="mx-auto bg-white max-w-7xl  px-8 sm:px-6 lg:px-4 md:py-24 py-14">
                <p className="font-custombold text-center text-sky-700 pb-4">TOP FEATURES 🔥 </p>
                <h2 className=" text-black font-customsemibold text-5xl text-center pb-14 leading-0"> Unlocking Our Analytics <br></br> Toolbox. </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-10">
                
                    <div className="">
                        <div className="bg-pink-100  rounded-lg p-6">
                            <img src="/assets/home/topfeatures/top-feature-icon.png" />
                        </div>
                        <div className="bg-pink-100  inline-block  my-8 text-black p-2 px-8 rounded-3xl">
                            ▶️  {' '} <span className="pl-2 text-lg font-custommedium">Session Replay</span>
                        </div>
                        <p className="text-zinc-600 md:text-lg text-md">
                            See recording of visitors interactions within your website to get more insights on visitor's journey
                        </p>
                    </div>    

                    <div className="">
                        <div className="bg-orange-100  rounded-lg p-6">
                            <img src="/assets/home/topfeatures/top-feature-icon.png" />
                        </div>
                        <div className="bg-orange-100 inline-block  my-8 text-black p-2 px-8 rounded-3xl">
                            🔥  {' '} <span className="pl-2 text-lg font-custommedium">Heatmaps</span>
                        </div>
                        <p className="text-zinc-600  md:text-lg text-md">
                            See recording of visitors interactions within your website to get more insights on visitor's journey
                        </p>
                    </div>   

                    <div className="">
                        <div className="bg-green-100  rounded-lg p-6">
                            <img src="/assets/home/topfeatures/top-feature-icon.png" />
                        </div>
                        <div className="bg-green-100  inline-block  my-8 text-black p-2 px-8 rounded-3xl">
                            📶 {' '} <span className="pl-2 text-lg font-custommedium">Flexible Funnels</span>
                        </div>
                        <p className="text-zinc-600  md:text-lg text-md">
                            See recording of visitors interactions within your website to get more insights on visitor's journey
                        </p>
                    </div>     
                        
                </div> 
            </div>
        </div>
    )
}