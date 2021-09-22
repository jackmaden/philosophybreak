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
                <TopTitle title="Thank You" subtitle="Thank you for registering your interest in our introduction to Nietzsche course, philosopher! We’ll keep you notified on timings, and ensure you qualify for the launch discount once the course is live. There’s also an email confirmation on its way to your inbox. Thanks again — and happy philosophizing!" />
            </div>
        </Layout>
        </>
    )
}

export default Page