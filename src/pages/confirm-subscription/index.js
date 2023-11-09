import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import JackHeadshot from "../../components/jackHeadshot"

const Page = () => {
    return (
        <>
        <Helmet title="Confirm Your Subscription | Philosophy Break">
            <meta name="robots" content="noindex" />
        </Helmet>
        <Layout>
        <Navigation bg="light-bg" />

            {/*page background color*/}
            <div className="grey-background small-pad-bottom">
                <div className="top-title text-center">
                    <div className="page-center">
                        <h3 className="mid-width">You’re almost there: please click ‘Confirm’ in your confirmation email to complete your subscription</h3>
                        <div className="separator"></div>
                        <p className="small-grey-font mid-width">It should arrive within a few minutes. As soon as you complete this step, I’ll send over my best philosophical goodies to get you started.</p>
                        <p className="small-grey-font mid-width">Thank you, and keep an eye on your inbox!</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Page