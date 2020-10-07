import React from "react"
import { graphql } from "gatsby"

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from '../../components/topTitle'
import BannerReadingList from '../../components/bannerReadingList'
import { SubscriptionForm } from '../../components/subscriptionForm'
import PanelAboutUs from "../../components/panelAboutUs"
import PanelArticleList from "../../components/panelArticleList"
import WatermarkBreak from "../../components/watermarkBreak"


export default ({ data, location }) => {
    return (
        <>
        <SEO title="Reading Lists – Essential Books of Philosophy" description="We've compiled reading lists of the most essential, compelling, and accessible works and books of particular philosophers and philosophical subjects." pathname={location.pathname} />
        <Layout>
        <Navigation bg="light-bg" />

            {/*page background color*/}
            <div className="grey-background">

                {/*page title*/}
                <TopTitle class='' title="Reading Lists" subtitle="Explore our curated reading lists of the best and most important works of particular philosophers and philosophical subjects." />
                
                {/*page content*/}
                <div className="page-center">
                    <BannerReadingList title="An Introduction to Philosophy" number="4" link="/reading-lists/introduction-to-philosophy/" img={data.introduction.childImageSharp.fluid} alt="introduction to philosophy reading list" />
                    
                    <BannerReadingList title="The History of Western Philosophy" number="5" link="/reading-lists/history-of-western-philosophy/" img={data.whistorylist.childImageSharp.fluid} alt="history of western philosophy reading list" />

                    <BannerReadingList title="Friedrich Nietzsche" number="7" link="/reading-lists/friedrich-nietzsche/" img={data.nietzsche.childImageSharp.fluid} alt="Friedrich Nietzsche reading list" />
                    
                    <BannerReadingList title="Consciousness" number="5" link="/reading-lists/consciousness/" img={data.consciousnesslist.childImageSharp.fluid} alt="consciousness reading list" />

                    <BannerReadingList title="Metaphysics" number="10" link="/reading-lists/metaphysics/" img={data.metaphysics.childImageSharp.fluid} alt="metaphysics reading list" />

                    <BannerReadingList title="Epistemology" number="9" link="/reading-lists/epistemology/" img={data.epistemology.childImageSharp.fluid} alt="epistemology reading list" />

                </div>
            
                <WatermarkBreak />

            {/*end page background color*/}
            </div>

            {/*post-reading list content*/}
            <SubscriptionForm />
            <PanelArticleList />
            <PanelAboutUs />

        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        introduction: file(relativePath: {eq: "introduction.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        consciousnesslist: file(relativePath: {eq: "consciousness-list.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        whistorylist: file(relativePath: {eq: "whistorylist.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        nietzsche: file(relativePath: {eq: "nietzsche.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        metaphysics: file(relativePath: {eq: "metaphysics.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        epistemology: file(relativePath: {eq: "epistemology.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        philosophybreak: file(relativePath: {eq: "philosophybreak.png"}) {
            childImageSharp {
                fluid(maxWidth: 22) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`