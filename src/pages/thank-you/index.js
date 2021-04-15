import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import PanelLBQ from "../../components/panelLBQ"
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
            <div className="grey-background small-pad-bottom">
                {/*article title*/}
                <TopTitle title="Thank You" subtitle="Thank you very much for subscribing to weekly breaks, philosopher! Your first philosophy break will be landing in your inbox soon. In the meantime, take a look at our introduction to philosophy course below. Enroll today, and by this time next week, you'll have a solid understanding of philosophy's top wisdom..." />
            </div>
            <PanelLBQ />
        </Layout>
        </>
    )
}

export default Page