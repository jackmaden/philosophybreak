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
        <Navigation />

         
         

            {/*page background color*/}
            <div className="darkradial-background small-pad-bottom">
                <div className="top-title text-center">
                    <div className="page-center">
                        <h3 className="mid-width">Thank you, philosopher!</h3>
                        <div className="separator"></div>
                        <p className="small-grey-font mid-width">Your invite to Philosophy Break Academy should land in your email inbox within 5 minutes (sent from ‘Jack at Philosophy Break’). If you don’t see it, please check your spam folders (and, if using Gmail, please also check the ‘Promotions’ tab). If you encounter any issues, email me at hello@philosophybreak.com, and I’ll be on hand to help. For now, fasten your seatbelt — a whirlwind philosophical journey awaits!</p>
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