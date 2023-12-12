import React, { useCallback, useRef, useState, ChangeEvent } from 'react';
import { toPng } from 'html-to-image';

import Navbar from "../components/navbar"
import Title from "../components/about/title"
import Story from "../components/about/story"
import Stats from "../components/about/stats"
import CTA2Section from "../components/home /cta2"
import Footer from "../components/home /footer"

import Head from 'next/head'
import { MdHeight } from 'react-icons/md';
import { Margarine } from 'next/font/google';
import { TbBoxSeam } from 'react-icons/tb';

export default function About() {

    const ref = useRef<HTMLDivElement>(null)

    const [variables, setVariables] = useState({
        rounded: '0',
        width: '',
        height: '',
        shadow: '0',
        tilt: '0',
        size: '1',
        background: 'linear-gradient(135deg, rgb(249, 240, 71), rgb(15, 216, 80))'
    })

    const [tilt, setTilt] = useState('0')

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl: string) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err: string) => {
                console.log(err)
            })
    }, [ref])



    const [image, setImage] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // When the reading is done, set the image in the state
                setImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    console.log(variables)
    return (
        <div>

            <Head>
                <title>Tools | SiteBehaviour : Website Analytics Tool  </title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta char-set="UTF-8"></meta>
                <link rel="icon" href="/assets/favicon.png" />
            </Head>


            <div className="h-screen flex bg-[#0d0d0d]  ">

                <div className='w-80 bg-[#1d1d1e] text-gray-50 p-3 m-3 rounded-2xl overflow-y-scroll '>

                    {/* <h1 className='text-lg font-customsemibold   '>Variables</h1> */}
                    <div className=''>

                        <div className='mb-6'>
                            <button onClick={onButtonClick} className='bg-blue-500 rounded-lg p-2'>Download PNG</button>
                        </div>


                        <div>
                            <p>Corners</p>
                            <>
                                <input onChange={(e) => {
                                    console.log(e.target.value)
                                    setVariables({ ...variables, rounded: e.target.value })
                                }} type="range" className="win10-thumb" />
                            </>
                        </div>
                        <div>
                            <p>Size</p>
                            <>
                                <input onChange={(e) => {
                                    console.log(e.target.value)
                                    setVariables({ ...variables, size: e.target.value })
                                }} type="range" className="win10-thumb" min={0} step={0.1}
                                    max={2} />
                            </>
                        </div>
                        <p className='text-gray-500 font-customsemibold text-xs mt-8'>GRADIENTS</p>
                        <div className='grid grid-cols-3 gap-4 mb-12 mt-4'>
                            {[
                                'linear-gradient(135deg, rgb(249, 240, 71), rgb(15, 216, 80))',
                                'linear-gradient(140deg, rgb(244, 229, 240), rgb(229, 54, 171), rgb(92, 3, 188), rgb(14, 7, 37))',
                                'linear-gradient(135deg, rgb(10, 207, 254), rgb(73, 90, 255))'
                            ].map((e) => (
                                <div style={{
                                    background: e,
                                }}
                                    onClick={() => setVariables({ ...variables, background: e })}
                                    className='cursor-pointer rounded-md h-10 active '>

                                </div>
                            ))}
                        </div>

                        <p className='text-gray-500 font-customsemibold text-xs mt-8'>ORIENTATION</p>
                        <div className='grid grid-cols-1 gap-4 mb-12 mt-4'>
                            {[
                                'linear-gradient(135deg, rgb(249, 240, 71), rgb(15, 216, 80))',
                                'linear-gradient(140deg, rgb(244, 229, 240), rgb(229, 54, 171), rgb(92, 3, 188), rgb(14, 7, 37))',
                                'linear-gradient(135deg, rgb(10, 207, 254), rgb(73, 90, 255))'
                            ].map((e) => (
                                <div style={{ background: variables.background }} className='h-full w-full p-16 flex justify-center overflow-hidden'>
                                    <img
                                        alt="Uploaded"
                                        style={{
                                            // transform: `rotate(${tilt}deg)`,
                                            transform: 'rotate(15deg)',
                                            borderRadius: `${variables.rounded}px`,
                                            maxWidth: '100%',
                                            height: '100%',
                                            scale: `${variables.size}`,

                                            boxShadow: '0 45px 65px rgba(0,0,0,0.50), 0 35px 22px rgba(0,0,0,0.16);'

                                        }}
                                        className={`
                                        origin- center
                                        shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)]
                                        
                                      `}
                                        src={'https://images.unsplash.com/photo-1702288135917-bcb48253d2eb?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                    />
                                </div>
                            ))}
                        </div>



                    </div>

                </div>


                <div className='flex-1 bg-[#0d0d0d] h-screen text-gray-50  px-20'>
                    <div ref={ref}
                        style={{ background: variables.background }}
                        className='    bg-white h-[80%]     mx-auto   mt-[10%]' >



                        {
                            // image ?
                            <div className='h-full w-full p-16 flex justify-center overflow-hidden'>
                                <img
                                    alt="Uploaded"
                                    style={{
                                        // transform: `rotate(${tilt}deg)`,
                                        transform: 'rotate(15deg)',
                                        borderRadius: `${variables.rounded}px`,
                                        maxWidth: '100%',
                                        height: '100%',
                                        scale: `${variables.size}`,

                                        boxShadow: '0 45px 65px rgba(0,0,0,0.50), 0 35px 22px rgba(0,0,0,0.16);'

                                    }}
                                    className={`
                                        origin- center
                                        shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)]
                                        
                                      `}
                                    src={'https://images.unsplash.com/photo-1702288135917-bcb48253d2eb?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                />
                            </div>
                            //         :
                            // <input
                            //     type="file" className="w-full h-full" onChange={handleImageChange}
                            //     accept=" image /png, image/gif, image/jpeg"
                            // />
                        }


                        {/* <img
                            style={{
                                transform: `rotate(${tilt}deg)`
                            }}
                            className={`
                               origin-center
                               rounded-[${variables.rounded}px]
                               w-[505px]
                               h-[300px]
                               shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)]                       
                             
                               skew-x-[0deg]
                               `} src="https://media.istockphoto.com/id/626545182/photo/toronto-skyline-with-purple-light-toronto-ontario-canada.jpg?s=612x612&w=0&k=20&c=gTfPgxMvsUZaz7YS3EF2voErqf2MmQRpwlHnO1jVBBc="
                        /> */}

                    </div>
                </div>


            </div >



            <Footer />

        </div >
    )
}