import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import JackHeadshot from "../../components/jackHeadshot"

const Page = () => {
    return (
        <>
        <Helmet title="Thank You | Philosophy Break">
            <meta name="robots" content="noindex" />
        </Helmet>
        <Layout>
        <Navigation bg="light-bg" />
            {/*page background color*/}
            <div className="grey-background small-pad-bottom">
                <div className="top-title text-center">
                    <div className="page-center">
                        <h1 className="mid-width">Thank You</h1>
                        <div className="separator"></div>
                        <p className="large-grey-font mid-width">Thank you very much for enrolling in our 3-lesson email course, philosopher! Our welcome email will be landing in your inbox shortly. Please allow up to 30 minutes for delivery, and be advised that some email filters can send initial emails from unknown senders to your junk folder (if using gmail, they can sometimes end up in your ‘Promotions’ folder, too). If you encounter any issues, just drop me a line at hello@philosophybreak.com, and I’ll be on hand to help.</p><p className="large-grey-font mid-width"> In the meantime, be sure to follow Philosophy Break on <a href="https://www.instagram.com/philosophybreak/" target="_blank" rel="noopener noreferrer">Instagram</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> to learn about philosophy directly in your newsfeed.</p>
                        <p className="large-grey-font mid-width">Thanks again and keep an eye on your inbox!</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Page