import Navbar from "../../components/navbar"
import Footer from "../../components/home /footer"
import CTA2Section from "../../components/home /cta2"

import Head from 'next/head'

export default function Startups() {
    return (
        <div>



            <Head>
                <title> Startups | SiteBehaviour: Tailored Visualization | Analysis</title>
                <meta name="description" content="Elevate your team's decicion- making with our data driven insights" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta char-set="UTF-8"></meta>
                <link rel="icon" href="/assets/favicon.png" />

            </Head>


            <Navbar />



            <CTA2Section />
            <Footer />
        </div>
    )
}