import React from "react"
import { graphql } from "gatsby"

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
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
            {/*page background color*/}
            <div style={{backgroundColor: '#f2f3f4'}}>

                {/*page title*/}
                <TopTitle title="Reading Lists" subtitle="Explore our curated reading lists of the best and most important works of particular philosophers and philosophical subjects." />
                
                {/*page content*/}
                <div id="break-start" className="page-center">
                    <BannerReadingList title="An Introduction to Philosophy" number="4" link="/reading-lists/introduction-to-philosophy/" img={data.introduction.childImageSharp.fluid} alt="introduction to philosophy reading list" />
                    
                    <BannerReadingList title="The History of Western Philosophy" number="5" link="/reading-lists/history-of-western-philosophy/" img={data.whistorylist.childImageSharp.fluid} alt="history of western philosophy reading list" />

                    <BannerReadingList title="Friedrich Nietzsche" number="7" link="/reading-lists/friedrich-nietzsche/" img={data.nietzsche.childImageSharp.fluid} alt="Friedrich Nietzsche reading list" />
                    
                    <BannerReadingList title="Consciousness" number="5" link="/reading-lists/consciousness/" img={data.consciousnesslist.childImageSharp.fluid} alt="consciousness reading list" />
                    
                    <p>Is there another philosopher or philosophical subject for which you'd like to see a reading list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">on Instagram</a>.</p>
                </div>
            
                <WatermarkBreak />

            {/*end page background color*/}
            </div>

            {/*post-reading list content*/}
            <SubscriptionForm />
            <PanelArticleList />
            <PanelAboutUs />

            {/*extra padding pre-footer*/}
            <div className="grey-background" style={{paddingBottom: '6px'}}></div>

        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        introduction: file(relativePath: {eq: "introduction.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        consciousnesslist: file(relativePath: {eq: "consciousness-list.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whistorylist: file(relativePath: {eq: "whistorylist.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        nietzsche: file(relativePath: {eq: "nietzsche.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid
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