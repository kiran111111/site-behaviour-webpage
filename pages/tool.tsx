import React, { useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';

import Navbar from "../components/navbar"
import Title from "../components/about/title"
import Story from "../components/about/story"
import Stats from "../components/about/stats"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

import Head from 'next/head'

export default function About() {

    const ref = useRef<HTMLDivElement>(null)

    const [variables , setVariables] = useState({
        rounded : '25',
        width : '',
        height : '',
        shadow : '0',
        tilt : '0'
    })

    const [tilt , setTilt] = useState('20')

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
        return
        }

        toPng(ref.current, { cacheBust: true, })
        .then((dataUrl : string) => {
            const link = document.createElement('a')
            link.download = 'my-image-name.png'
            link.href = dataUrl
            link.click()
        })
        .catch((err :  string) => {
            console.log(err)
        })
    }, [ref])

    {console.log(tilt)}

    return (
         <div>
             
                <Head>
                    <title>Tools | SiteBehaviour : Website Analytics Tool  </title>
                    <meta name="description" content="" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta char-set="UTF-8"></meta>
                    <link rel="icon" href="/assets/favicon.png" />
                </Head> 


                <div className="h-screen flex bg-white  ">


                 
                    <div className='flex-1 bg-zinc-700 h-screen text-gray-50  px-20'>
                         <div ref={ref}  className=' bg-gradient-to-r from-violet-500 to-fuchsia-500  grid  place-content-center  bg-white h-[80%]     mx-auto mt-[10%]'>
                               <img
                                style={{
                                    transform : `rotate(${tilt}deg)`
                                }}
                                className={`
                               origin-center
                               rounded-[${variables.rounded}px]
                               w-[505px]
                               h-[300px]
                               shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)]                       
                             
                               skew-x-[0deg]
                               `} src="https://media.istockphoto.com/id/626545182/photo/toronto-skyline-with-purple-light-toronto-ontario-canada.jpg?s=612x612&w=0&k=20&c=gTfPgxMvsUZaz7YS3EF2voErqf2MmQRpwlHnO1jVBBc="/>
                 
                           </div>
                    </div>
                    <div className='w-80 bg-zinc-900 text-gray-50 p-3'>

                        <h1 className='text-lg font-customsemibold '>Variables</h1>
                        <div>

                            <div>
                                 <p>Rounded</p>
                                 <>
                                    <input onChange={(e) => {
                                        console.log(e.target.value)
                                        setTilt(e.target.value) }} type="range" className="win10-thumb" />
                                 </>
                            </div>
                            <div>
                               <button onClick={onButtonClick}>Click me</button>
                            </div>
                             
                        </div>

                    </div>
                    
                </div>  



               <Footer />

         </div>   
    )
}