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

        {/*DISABLE MEDIAVINE ADS*/}
        <div id="mediavine-settings" data-blocklist-all="1" ></div>

            {/*page background color*/}
            <div className="grey-background small-pad-bottom">
                <div className="top-title text-center">
                    <div className="page-center">
                        <h3 className="mid-width">Thank you, philosopher!</h3>
                        <div className="separator"></div>
                        <p className="small-grey-font mid-width">Your course materials are on their way to the email address you provided. Please allow up to 30 minutes for delivery, and be advised that some email filters can send initial emails from unknown senders to your junk folder (if using gmail, they can sometimes end up in your ‘Promotions’ folder, too). If you encounter any issues, just drop me a line at hello@philosophybreak.com, and I’ll be happy to help. For now, fasten your seatbelt — a whirlwind philosophical journey awaits!</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Page