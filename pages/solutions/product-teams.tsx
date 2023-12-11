import Navbar from "../../components/navbar"
import Title from "../../components/about/title"
import AllFeatures from "../../components/features/all-features"
import HeroSection from "../../components/features/hero-section"
import Footer from "../../components/home /footer"
import CTA2Section from "../../components/home /cta2"

import { FaPlay } from "react-icons/fa";
import Head from 'next/head'

export default function ProductTeams() {
    return (
        <div>



            <Head>
                <title> Product Teams | SiteBehaviour: Tailored Visualization | Analysis</title>
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
