import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import TopTitle from '../components/topTitle'
import WatermarkBreak from "../components/watermarkBreak"
import Footer from "../components/footer"

const Page = () => {
    return (
        <>
        <Helmet title="Page Not Found | Philosophy Break">
            <meta name="robots" content="noindex" />
        </Helmet>
        <Layout>
        <Navigation bg="light-bg" />

            {/*page background color*/}
            <div className="grey-background">

                {/*page title*/}
                <TopTitle class='' title="Page Not Found" subtitle="Hmm... the page you're looking for seems to have been lost to the void. (The fate of us all.)" />
                
                {/*page content*/}
                <div id="break-start" className="page-center">
                    <p>As German philosopher Friedrich Nietzsche wrote, “if you gaze too long into an abyss, the abyss also gazes into you.”</p>
                    <p>So, best <Link to="/">head back to our home page</Link> now.</p>
                </div>
            
                <WatermarkBreak />

            {/*end page background color*/}
            </div>

            {/*post-reading list content*/}
        
        <Footer />

        </Layout>
        </>
    )
}

export default Page