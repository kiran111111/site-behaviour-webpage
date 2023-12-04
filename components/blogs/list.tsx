

export default function BlogList(){
    return(

        <section className="pt-28 bg-black">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl md:text-5xl tracking-tight font-bold text-white ">Our Blog</h2>
                    <p className="font-light text-gray-300 sm:text-xl dark:text-gray-400">
                        Read about our journey and milestones along the way.</p>
                </div> 
                <div className="grid gap-8 lg:grid-cols-1 max-w-4xl mx-auto">
                    <article className="p-6 grid md:grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md ">
                       
                        <div className=" md:mr-6 md:mb-0 mb-6">
                             <img className="h-full rounded-lg max-h-64 " src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                        <div className="md:col-span-2">

                                <div className="flex justify-between items-center mb-5 text-gray-400">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                                    
                                        NEW
                                    </span>
                                    <span className="text-sm">Dec 1, 2023</span>
                                </div>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                    <a href="blogs/web-analytics-from-2030">Web Analytics from 2030</a></h2>
                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                    A while back, we were hunting for a tool to amp up our SaaS game. We needed the 
                                            lowdown on our website's conversion rate, how folks were cruising through our site,
                                            and what they thought about the latest features in our SaaS gig.
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        by {" "}   {/* <img className="w-7 h-7 rounded-full" src="" /> */}
                                        <span  className="font-medium dark:text-white ml-2">
                                            Kiran Kaur
                                        </span>
                                    </div>
                                    <a href="/blogs/web-analytics-from-2030" className="inline-flex items-center font-medium text-gray-800 dark:text-primary-500 hover:underline">
                                        Read more
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>

                        </div>

                    </article> 


                    <article className="p-6 grid md:grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md ">
                       
                       <div className=" md:mr-6 md:mb-0 mb-6">
                            <img className="h-full rounded-lg "
                             src="https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                       </div>
                       <div className="md:col-span-2">

                               <div className="flex justify-between items-center mb-5 text-gray-400">
                                   <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-zinc-200 dark:text-zinc-800">
                                   
                                       NEW
                                   </span>
                                   <span className="text-sm">Dec 3, 2023</span>
                               </div>
                               <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                   <a href="blogs/what-is-behavioral-web-analytics">What is Behavioural Web Analytics ?</a></h2>
                               <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                  Think of web analytics as your website's own detective. It's like having someone keep
                                   an eye on your website and telling you everything about the people who visit - 
                                   where they come from, what they like, and what they do.
                               </p>
                               <div className="flex justify-between items-center">
                                   <div className="flex items-center space-x-4">
                                       by {" "}   {/* <img className="w-7 h-7 rounded-full" src="" /> */}
                                       <span  className="font-medium dark:text-white ml-2">
                                           Kiran Kaur
                                       </span>
                                   </div>
                                   <a href="/blogs/what-is-behavioral-web-analytics" className="inline-flex items-center font-medium text-gray-800 dark:text-primary-500 hover:underline">
                                       Read more
                                       <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                   </a>
                               </div>

                       </div>

                   </article> 
                   

                   <article className="p-6 grid md:grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                       
                       <div className=" md:mr-6 md:mb-0 mb-6">
                            <img className="h-full rounded-lg "
                             src="https://images.unsplash.com/photo-1586863065451-6a82fa7e81b9?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                       </div>
                       <div className="md:col-span-2">

                               <div className="flex justify-between items-center mb-5 text-gray-400">
                                   <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-zinc-200 dark:text-zinc-800">
                                       NEW
                                   </span>
                                   <span className="text-sm">Dec 4, 2023</span>
                               </div>
                               <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                   <a href="blogs/what-is-behavioral-web-analytics"> How to use User Journey Map in Google Analytics  </a>
                               </h2>
                               <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                  Think of web analytics as your website's own detective. It's like having someone keep
                                   an eye on your website and telling you everything about the people who visit - 
                                   where they come from, what they like, and what they do.
                               </p>
                               <div className="flex justify-between items-center">
                                   <div className="flex items-center space-x-4">
                                       by {" "}   {/* <img className="w-7 h-7 rounded-full" src="" /> */}
                                       <span  className="font-medium dark:text-white ml-2">
                                           Kiran Kaur
                                       </span>
                                   </div>
                                   <a href="/blogs/what-is-behavioral-web-analytics" className="inline-flex items-center font-medium text-gray-800 dark:text-primary-500 hover:underline">
                                       Read more
                                       <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                   </a>
                               </div>

                       </div>

                   </article> 
                   
                </div>  
            </div>
        </section>

    )
}