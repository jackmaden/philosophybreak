import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {useSpring, animated} from 'react-spring'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import { SubscriptionForm } from '../../components/subscriptionForm'
import { WindowHeightWrapper } from '../../components/windowHeightWrapper'
import BannerReadingList from '../../components/bannerReadingList'
import ListArticleList from "../../components/listArticleList"
import PanelAboutUs from "../../components/panelAboutUs"

export default ({ data, location }) => {
    const dropIn = useSpring({opacity: 1, bottom: '52px', delay: 200, from: {opacity: 0, bottom: '200px'}})
    const fadeIn = useSpring({opacity: 1, delay: 450, from: {opacity: 0}})
    return (
        <>
        <SEO title="Reading Lists – Essential Books of Philosophy" description="We've compiled reading lists of the most essential, compelling, and accessible works and books of particular philosophers and philosophical subjects." pathname={location.pathname} />
        <Layout>
            {/*article title*/}
            <WindowHeightWrapper className="title">
                <Img className="title-img" fluid={data.readinglist.childImageSharp.fluid} alt="philosophy bookshop" />
                <div className="darkener"></div>
                {/*react spring fade in*/}
                <animated.div style={dropIn} className="page-center title-center">
                    <h1>Reading Lists</h1>
                    <div className="separator"></div>
                    <p className="description">Ready to deepen your knowledge, or looking for recommendations on what to read next? We've compiled reading lists of the most essential, compelling, and accessible works of particular philosophers and philosophical subjects.</p>
                </animated.div>
                <animated.p className="time break page-center" style={fadeIn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fff" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"/></svg><AnchorLink href="#break-start" style={{ textDecoration: "none" }}><span className="bottom-blue-border">VIEW READING LISTS&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></animated.p>  
            </WindowHeightWrapper>
            
            {/*article content*/}
            <div id="break-start" className="page-center" style={{marginBottom: 48}}>

                <BannerReadingList title="An Introduction to Philosophy" number="4" link="/reading-lists/introduction-to-philosophy/" img={data.introduction.childImageSharp.fluid} alt="introduction to philosophy reading list" />
                
                <BannerReadingList title="The History of Western Philosophy" number="5" link="/reading-lists/history-of-western-philosophy/" img={data.whistorylist.childImageSharp.fluid} alt="history of western philosophy reading list" />
                
                <BannerReadingList title="Consciousness" number="5" link="/reading-lists/consciousness/" img={data.consciousnesslist.childImageSharp.fluid} alt="consciousness reading list" />
                
                <p>Is there another philosopher or philosophical subject for which you'd like to see a reading list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">on Instagram</a>.</p>
            </div>
            <div className="time" style={{marginTop: 48, textAlign: "center"}}><Img style={{display: "inline-block", marginBottom: 48, marginRight: 0}} fluid={data.philosophybreak.childImageSharp.fluid} alt="Philosophy Break"/></div>
            
            {/*post-list*/}
            <div className="grey-background">
                <div className="page-center">
                    <h3>Get Weekly Breaks</h3>
                    <div className="separator"></div>
                </div>
                <SubscriptionForm />
                <div className="page-center">
                    <h3>Latest Breaks</h3>
                    <div className="separator" style={{margin: "1.5em auto 2em"}}></div>
                </div>
                <ListArticleList />
            </div>
            <PanelAboutUs />
        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        readinglist: file(relativePath: {eq: "readinglist.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 2100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        introduction: file(relativePath: {eq: "introduction.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        consciousnesslist: file(relativePath: {eq: "consciousness-list.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whistorylist: file(relativePath: {eq: "whistorylist.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
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