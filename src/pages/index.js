import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {useSpring, animated} from 'react-spring'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import { SubscriptionForm } from '../components/subscriptionForm'
import { WindowHeightWrapper } from '../components/windowHeightWrapper'
import PanelReadingList from '../components/panelReadingList'
import PanelAboutUs from '../components/panelAboutUs'
import HomeArticleList from '../components/homeArticleList'

export default ({ data }) => {
    const dropIn = useSpring({opacity: 1, marginTop: '0px', delay: 200, from: {opacity: 0, marginTop: '-50px'}})
    const fadeIn = useSpring({opacity: 1, marginLeft: '0px', delay: 700, from: {opacity: 0, marginLeft: '50px'}})
    const fadeAfter = useSpring({opacity: 1, delay: 1400, from: {opacity: 0}})

    //change home page content based on time of day
    const myDate = new Date() //get device date
    const hrs = myDate.getHours() //get hours from date

    let greet = 'Hello there, Philosopher' // variable for message & set default
    let pic = data.default.childImageSharp.fluid // variable for image & set default
    let css = 'featured-image-full' // variable for image position & set default

    if (hrs < 12) { //if morning
    greet = 'Good Morning, Philosopher'
    pic = data.morning.childImageSharp.fluid
    css = 'featured-image-full morning'
    }
    else if (hrs >= 12 && hrs < 17) { //if afternoon
    greet = 'Good Afternoon, Philosopher'
    pic = data.default.childImageSharp.fluid
    css = 'featured-image-full'
    }
    else if (hrs >= 17 && hrs < 24) { //if evening
    greet = 'Good Evening, Philosopher'
    pic = data.evening.childImageSharp.fluid
    css = 'featured-image-full evening'
    }

    return (
        <>
        <SEO title="Philosophy Break – A Clearing in Your Cluttered Newsfeed" description="The home for philosophy's best ideas, questions, and answers – from Socrates, Plato, and Aristotle; to Kant, Kierkegaard, and Nietzsche."/>
        <Layout>
        <Navigation />
            <WindowHeightWrapper className={css}>
            <Img fluid={pic} fadeIn={false} loading="eager" alt="Philosophy Break" />
            <div className="darkener"></div>
                <div className="page-center text-center">
                    <animated.div style={dropIn}>
                        <h1 id="home-page">{greet}</h1>
                        <div className="separator"></div>
                        <p className="mid-width">Welcome to a clearing in your cluttered newsfeed — a place to expand your mind with philosophy's best questions, quotes, and ideas.</p>
                    </animated.div>
                    <animated.div style={fadeIn}>
                        <Link className="button primary" to="/articles/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Get Started</Link>
                    </animated.div>
                </div>
                <animated.p className="time break page-center text-center" style={fadeAfter}><AnchorLink href="#first-panel" style={{ textDecoration: "none" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="eed70a5d-3465-468c-b304-842a4dc6abf4" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.35" stopColor="#1aa9ff"/><stop offset="0.44" stopColor="#22acff"/><stop offset="0.58" stopColor="#37b4ff"/><stop offset="0.75" stopColor="#5ac1ff"/><stop offset="0.89" stopColor="#7cceff"/></linearGradient></defs><title>Philosophy Break</title><g id="a694bf81-a4e3-4986-9301-cf65ad1fcac0" data-name="Layer 1"><path d="M250,499.5A249.5,249.5,0,0,1,73.58,73.58,249.5,249.5,0,1,1,426.42,426.42,247.84,247.84,0,0,1,250,499.5Z" fill="#fff"/><path d="M250,1A248.93,248.93,0,0,1,426.07,426.07a249,249,0,1,1-273-405.5A247.32,247.32,0,0,1,250,1m0-1C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Z" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#eed70a5d-3465-468c-b304-842a4dc6abf4)"/></g><g id="4dca974f-b6d8-4b4f-b13a-2551c52acb2b" data-name="Layer 3"><path d="M462,325l-1.24,3.94C428.79,414.27,346.49,475,250,475c-98,0-181.41-62.69-212.25-150.16L461,325"/></g><g id="1a30999d-582a-4788-8e9a-e662ea057375" data-name="Layer 2"><polygon points="38 325 103 225 152 281 250 112 346 221 377 182 469 306 38 325" fill="#fff"/></g><g id="93c33bb2-e13c-4346-ae21-ff33957a2372" data-name="Layer 4"><polyline points="38 326 108 250.66 152 278.91 250 148 346 221.46 377 208.28 469 306.22 462 326"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/></g></svg><span style={{color: '#fff'}} className="bottom-blue-border">SCROLL TO EXPLORE&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></animated.p>
            </WindowHeightWrapper>
            
            <div id="first-panel" className="grey-background large-pad">
                <HomeArticleList />
            </div>
            <SubscriptionForm />
            <PanelReadingList />
            <PanelAboutUs/>
                
        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        default: file(relativePath: {eq: "philosophy-break.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 1000, quality: 70) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        morning: file(relativePath: {eq: "morning.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 1000, quality: 70) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        evening: file(relativePath: {eq: "evening.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 1000, quality: 70) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`