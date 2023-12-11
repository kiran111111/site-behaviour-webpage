import Navbar from "../../components/navbar"
import Footer from "../../components/home /footer"
import CTA2Section from "../../components/home /cta2"

import Head from 'next/head'

export default function MarketingTeams() {
    return (
        <div>



            <Head>
                <title> Product Teams | SiteBehaviour | Elevate Your Product Teams Strategy</title>
                <meta name="description" content="Enhance your product teams with powerful web analytics tools. Learn more ." />
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