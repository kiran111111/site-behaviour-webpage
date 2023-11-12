

export default function ContactForm(){
    return(

        <div className="bg-white ">
            <div className="mx-auto md:mt-96 mt-96  max-w-4xl sm:px-8  px-4  lg:px-4 md:py-24  py-16">
                <form  action='https://submit-form.com/9cYesnOA' className="bg-[#DBFFDC] rounded-2xl px-6 pt-4 pb-2 font-customregular ">

                    <h2 className="font-custombold text-3xl  text-black pb-8 pt-4">General Inquiries</h2>


                    <input
                        type="hidden"
                        name="_redirect"
                        value="http://localhost:3000/contact"
                    />
                   
                    <div className="form-control w-full   gap-6 grid sm:grid-cols-2 justify-items-stretch">
                        <div className="w-full ">
                            <label  className="label">
                                <span className="label-text text-gray-900 font-customsemibold">John Cooper</span>
                            </label>
                            <input name='name' type="text"   placeholder="Type here" className="input bg-white text-black  w-full " > 
                            </input>
                        </div>
                        <div className="w-full">
                            <label className="label">
                               <span className="label-text text-gray-900 font-customsemibold">Your Email</span>
                            </label>
                            <input name='email' type="email" placeholder="John@gmail.com" className="input bg-white text-black  w-full " > 
                            </input>
                        </div>
                    </div>

                    <div className="form-control w-full  mt-6 gap-6 grid sm:grid-cols-2 justify-items-stretch">
                        <div className="w-full ">
                            <label className="label">
                                <span className="label-text text-gray-900 font-customsemibold">Phone number</span>
                            </label>
                            <input name='phone' type="text" placeholder="+1-437-227-3455" className="input bg-white text-black  w-full " > 
                            </input>
                        </div>
                        <div className="w-full">
                            <label className="label">
                               <span className="label-text text-gray-900 font-customsemibold">Your subject</span>
                            </label>
                            <input name='subject' type="text" placeholder="Ex.Support" className="input bg-white  text-black w-full " > 
                            </input>
                        </div>
                    </div>

                    <div className="form-control w-full  mt-6 gap-6 grid grid-cols-1 justify-items-stretch">
                        <div className="w-full ">
                            <label className="label">
                                <span className="label-text text-gray-900 font-customsemibold">Write your message</span>
                            </label>
                            <textarea name='message' placeholder="Message here..." className="textarea text-black  bg-white  w-full " ></textarea>
                        </div>
                     
                    </div>

                    <div className="form-control mt-6 gap-6 ">
                        <button
                            type="submit"
                            className="inline-flex items-center mb-4 sm:mr-6  justify-center h-12 w-40 px-6  font-custommedium tracking-wide text-black transition duration-200 rounded-lg shadow-md bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none "
                        >
                            Get started
                        </button>
                    </div>


                </form>

                <div className=" flex-row md:flex  mt-20 justify-around text-black">
 
                    <div className="text-center ">
                        <p className="inline-block mx-auto md:block">
                            <img src="/assets/contact/contact-1.svg" ></img>
                        </p>
                        <p className="text-xl font-customsemibold mt-4">Send us Email</p>
                        <p className="text-zinc-700">info@sitebehaviour.com</p>
                    </div>

                    <div className="text-center md:mt-0 mt-12">
                       <p className="inline-block mx-auto md:block">
                            <img src="/assets/contact/contact-2.png" ></img>
                        </p>
                        <p className="text-xl font-customsemibold mt-4">Call us</p>
                        <p className="text-zinc-700">+1-437-225-3556</p>
                    </div>

                    <div className="text-center md:mt-0 mt-12">
                       <p className="inline-block mx-auto md:block">
                            <img src="/assets/contact/contact-3.png" ></img>
                        </p>
                        <p className="text-xl font-customsemibold mt-4">Office Location</p>
                        <p className="text-zinc-700">Toronto , Ontario</p>
                    </div>

                </div>

            </div>
        </div>
    )
}