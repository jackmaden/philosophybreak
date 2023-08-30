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
                        <h3 className="mid-width">Thank you, philosopher!</h3>
                        <div className="separator"></div>
                        <p className="small-grey-font mid-width">Your welcome email will land in your inbox shortly. If you don’t see it, please check your spam folders (and, if using Gmail, please also check the ‘Promotions’ tab). Any issues, just drop me a line at hello@philosophybreak.com, and I’ll be on hand to help.</p>
                        <p className="small-grey-font mid-width">In the meantime, be sure to follow Philosophy Break on <a href="https://www.instagram.com/philosophybreak/" target="_blank" rel="noopener noreferrer">Instagram</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> to learn about philosophy directly in your newsfeed. Thanks again and keep an eye on your inbox!</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Page