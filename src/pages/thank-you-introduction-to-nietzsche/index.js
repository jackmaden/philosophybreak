import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from "../../components/topTitle"

const Page = () => {
    return (
        <>
        <Helmet title="Thank You | Philosophy Break">
            <meta name="robots" content="noindex" />
        </Helmet>
        <Layout>
        <Navigation bg="light-bg" />
            {/*page background color*/}
            <div className="white-background">
                {/*article title*/}
                <TopTitle title="Thank You" subtitle="Thank you very much for your purchase, philosopher! Your course materials are on their way to the email address you provided. Please allow up to 30 minutes for delivery, and be advised that some email filters can send initial emails from unknown senders to your junk folder. If you encounter any issues, just drop us a line at hello@philosophybreak.com, and we’ll be happy to help. For now, fasten your seatbelt — a whirlwind philosophical journey awaits!" />
            </div>
        </Layout>
        </>
    )
}

export default Page