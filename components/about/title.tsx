

export default function Title({title}:any) {
    return (
 
      <div className="absolute w-full top-0  mb-0">
        {/* <img
          src="/assets/navbar/hero-background.png"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        /> */}
        <div className=" bg-cover bg-opacity-25 bg-no-repeat bg-bottom relative bg-[url('/assets/navbar/hero-background.png')] ">
          <div className="px-4  md:pb-8 pt-16  pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
            <div className=" items-center text-center ">
              <div className=" w-full mx-auto   max-w-xl mb-12 xl:mb-0  xl:w-7/12">
                <h1 data-aos="fade-up" data-aos-duration="700" className="max-w-lg mt-32 mx-auto md:text-5xl text-3xl mb-6 font-customsemibold">
                  {title}
                </h1>
                {title && <p data-aos="fade-up" data-aos-duration="700" className="mb-12">Home / <span className="text-green-500">{title}</span> </p>}
              
              </div>
             
            </div>
          </div>
        </div>
      </div>
   

    );
  };