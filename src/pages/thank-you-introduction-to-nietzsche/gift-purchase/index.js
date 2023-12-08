import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../../../components/layout'
import { Navigation } from "../../../components/navigation"
import JackHeadshot from "../../../components/jackHeadshot"

const Page = () => {
    return (
        <>
        <Helmet title="Thank You | Philosophy Break">
            <meta name="robots" content="noindex" />
        </Helmet>
        <Layout>
        <Navigation />

            {/*page background color*/}
            <div className="darkradial-background small-pad-bottom">
                <div className="top-title text-center">
                    <div className="page-center">
                        <h3 className="mid-width">Thank you for giving the gift of philosophy!</h3>
                        <div className="separator"></div>
                        <p className="small-grey-font mid-width">Your gift voucher for <i>Introduction to Nietzsche</i> should land in your email inbox within 5 minutes. If you don’t see it, please check your spam folders (and, if using Gmail, please also check the ‘Promotions’ tab). If you encounter any issues, email me at hello@philosophybreak.com, and I’ll be on hand to help.</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
            <div id="mediavine-settings" data-blocklist-leaderboard="1" data-blocklist-sidebar-atf="1" data-blocklist-sidebar-btf="1" data-blocklist-content-desktop="1" data-blocklist-content-mobile="1" data-blocklist-adhesion-mobile="1" data-blocklist-adhesion-tablet="1" data-blocklist-adhesion-desktop="1" data-blocklist-recipe="1" data-blocklist-auto-insert-sticky="1" data-blocklist-in-image="1" data-blocklist-chicory="1" data-blocklist-zergnet="1" data-blocklist-interstitial-mobile="1" data-blocklist-interstitial-desktop="1" data-blocklist-universal-player-desktop="1" data-blocklist-universal-player-mobile="1" ></div>
        </Layout>
        </>
    )
}

export default Page