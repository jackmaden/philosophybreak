import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"

const Page = () => {
    return (
        <>
        <Helmet title="Thank You | Philosophy Break">
            <meta name="robots" content="noindex" />
        </Helmet>
        <Layout>
        <Navigation bg="light-bg" />
            {/*page background color*/}
            <div className="white-background small-pad-bottom">
                <div className={"top-title text-center"}>
                    <div className="page-center">
                        <h1 className="mid-width">Thank You</h1>
                        <div className="separator"></div>
                        <p className="large-grey-font mid-width">Thank you very much for subscribing to weekly breaks, philosopher! Our welcome email will be landing in your inbox shortly. In the meantime, follow Philosophy Break on <a href="https://www.instagram.com/philosophybreak/" target="_blank" rel="noopener noreferrer">Instagram</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> to learn about philosophy directly in your newsfeed.</p>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Page