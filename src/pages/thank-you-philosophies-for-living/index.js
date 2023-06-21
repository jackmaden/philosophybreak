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
                        <h3 className="mid-width">Thank you, philosopher! Your course invite is on its way to the email address you provided (sent from ‘Jack at Philosophy Break’ — please check your promotions tab / spam folders)</h3>
                        <div className="separator"></div>
                        <p className="large-grey-font mid-width">Thank you very much for your purchase, philosopher! Your invite should arrive within five minutes from ‘Jack at Philosophy Break’. If you don’t see it, please check your spam folders (and, if using Gmail, please check the ‘Promotions’ tab, too). If you encounter any issues, email me at hello@philosophybreak.com, and I’ll be on hand to help. For now, fasten your seatbelt — a whirlwind philosophical journey awaits!</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Page