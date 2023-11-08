

export default function Title({title}:any) {
    return (
 
      <div className="absolute w-full top-0 bg-black mb-0">
        <img
          src="/assets/home/section-bg.svg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-transparent ">
          <div className="px-4  md:pb-8 pt-12  pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
            <div className=" items-center text-center ">
              <div className="w-full mx-auto   max-w-xl mb-12 xl:mb-0  xl:w-7/12">
                <h2 className="max-w-lg mt-32 mx-auto md:text-5xl text-3xl mb-6 font-customsemibold">
                  {title}
                </h2>
                {title && <p className="mb-12">Home/{title}</p>}
              
              </div>
             
            </div>
          </div>
        </div>
      </div>
   

    );
  };