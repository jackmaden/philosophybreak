import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {useSpring, animated} from 'react-spring'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import { SubscriptionForm } from '../components/subscriptionForm'
import { WindowHeightWrapper } from '../components/windowHeightWrapper'

export default ({ data }) => {
    const dropIn = useSpring({opacity: 1, marginTop: '0px', delay: 200, from: {opacity: 0, marginTop: '-50px'}})
    const fadeIn = useSpring({opacity: 1, marginLeft: '0px', delay: 700, from: {opacity: 0, marginLeft: '50px'}})
    return (
        <>
        <SEO title="Philosophy Break is a clearing in your cluttered newsfeed" description="Short, informative articles designed to spark curiosity about a particular talking point in philosophy."/>
        <Layout>
            <WindowHeightWrapper className="featured-image-full">
            <Img fluid={data.file.childImageSharp.fluid} alt="Philosophy Break" />
                <div className="page-center">
                <animated.div style={dropIn}>
                    <h1 id="home-page">Philosophy Break</h1>
                    <h4>A clearing in your cluttered newsfeed</h4>
                </animated.div>
                <animated.div style={fadeIn}>
                    <Link className="button primary" to="/articles"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Take a Break</Link>
                </animated.div>
                </div>
            </WindowHeightWrapper>
            <SubscriptionForm />
        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        file(relativePath: {eq: "philosophy-break.jpeg"}) {
            childImageSharp {
                fluid(maxWidth: 2100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`