import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import JackHeadshot from "../../components/jackHeadshot"
import Footer from "../../components/footer"

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
                        <h3 className="mid-width">Thank you, philosopher! Your welcome email will land in your inbox shortly</h3>
                        <div className="separator"></div>
                        <p className="small-grey-font mid-width">If you don’t see it, please check the ‘Promotions’ tab or your spam folders. Any problems, simply drop me a line at hello@philosophybreak.com, and I’ll be on hand to help.</p>
                        <p className="small-grey-font mid-width">Thanks again and keep an eye on your inbox!</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
        </>
    )
}

export default Page