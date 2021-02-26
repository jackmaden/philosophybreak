import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import PanelLBQ from "../../components/panelLBQ"
import TopTitle from "../../components/topTitle"
import WatermarkBreak from "../../components/watermarkBreak"

export default () => {
    return (
        <>
        <Helmet title="Thank You | Philosophy Break">
            <meta name="robots" content="noindex" />
        </Helmet>
        <Layout>
        <Navigation bg="light-bg" />
            {/*page background color*/}
            <div className="grey-background">
                {/*article title*/}
                <TopTitle title="Thank You" subtitle="Thank you very much for subscribing to weekly breaks, philosopher! Your first philosophy break will be landing in your inbox soon. In the meantime, why not check out our introductory philosophy course? Grab more information below." />
                <WatermarkBreak />
            </div>
            <PanelLBQ />
        </Layout>
        </>
    )
}