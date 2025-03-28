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
                        <h3 className="mid-width">Thank you, philosopher! I’ll keep sending you my Sunday emails</h3>
                        <div className="separator"></div>
                        <p className="small-grey-font mid-width">Sometimes email service providers are wrong about who is and isn’t reading; I appreciate you letting me know that you are.</p>
                        <p className="small-grey-font mid-width">Thanks again and keep an eye on your inbox for this Sunday’s email!</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
            {/*disable mediavine ads*/}
            <div id="mediavine-settings" data-blocklist-leaderboard="1" data-blocklist-sidebar-atf="1" data-blocklist-sidebar-btf="1" data-blocklist-content-desktop="1" data-blocklist-content-mobile="1" data-blocklist-adhesion-mobile="1" data-blocklist-adhesion-tablet="1" data-blocklist-adhesion-desktop="1" data-blocklist-recipe="1" data-blocklist-auto-insert-sticky="1" data-blocklist-in-image="1" data-blocklist-chicory="1" data-blocklist-zergnet="1" data-blocklist-interstitial-mobile="1" data-blocklist-interstitial-desktop="1" data-blocklist-universal-player-desktop="1" data-blocklist-universal-player-mobile="1" ></div>
            <Footer />
        </Layout>
        </>
    )
}

export default Page