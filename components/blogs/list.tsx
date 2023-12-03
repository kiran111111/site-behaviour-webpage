

export default function BlogList(){
    return(

        <section className="bg-white pt-28 dark:bg-black">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Read about our journey and milestones along the way.</p>
                </div> 
                <div className="grid gap-8 lg:grid-cols-1 max-w-4xl mx-auto">
                    <article className="p-6 grid grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                       
                        <div className=" mr-6">
                             <img className="h-full " src="/assets/home/topfeatures/top-feature-icon.png" />
                        </div>
                        <div className="col-span-2">

                                <div className="flex justify-between items-center mb-5 text-gray-400">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-zinc-200 dark:text-zinc-800">
                                    
                                        NEW
                                    </span>
                                    <span className="text-sm">Dec 1, 2023</span>
                                </div>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                                    <a href="/blogs/web-analytics-from-2030" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                        Read more
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>

                        </div>

                    </article> 
                    {/* <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-5 text-gray-400">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-zinc-200 dark:text-zinc-800">
                                <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                Article
                            </span>
                            <span className="text-sm">14 days ago</span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Our first project with React</a></h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                                <span className="font-medium dark:text-white">
                                    Bonnie Green
                                </span>
                            </div>
                            <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </article>                   */}
                </div>  
            </div>
        </section>

    )
}