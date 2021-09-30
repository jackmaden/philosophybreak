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
            <div className="white-background small-pad-bottom">
                {/*article title*/}
                <TopTitle title="Thank You" subtitle="Thank you very much for subscribing to weekly breaks, philosopher! Your first philosophy break will be landing in your inbox soon. In the meantime, take a look at our bite-size introduction to philosophy course below. Enroll today, and by this time next week, you’ll understand philosophy’s top wisdom, have clarity on exactly which topics interest you, and know the best further reading for continuing your philosophical journey..." />
            </div>
            <PanelLBQ class="white-background" fill="#36b4ff" />
        </Layout>
        </>
    )
}

export default Page