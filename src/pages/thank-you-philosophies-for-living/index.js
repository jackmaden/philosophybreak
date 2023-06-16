import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

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
        <Navigation />

        {/*DISABLE MEDIAVINE ADS*/}
        <div id="mediavine-settings" data-blocklist-all="1" ></div>

            {/*page background color*/}
            <div className="darkradial-background small-pad-bottom">
                <div className="top-title text-center">
                    <div className="page-center">
                        <h1 className="mid-width">Thank You</h1>
                        <div className="separator"></div>
                        <p className="large-grey-font mid-width">Thank you very much for registering your interest in our new <i>How to Live a Good Life</i> course, philosopher! I’ll keep you updated on how the course is progressing, and will send you a discount code to use as soon as it launches. I’ll also send confirmation of your registration to your email address. In the meantime, why not check out some of our other <Link to="/courses/">philosophy courses</Link>. Thanks again — and happy philosophizing!</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Page