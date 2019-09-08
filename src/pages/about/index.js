import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {useSpring, animated} from 'react-spring'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import { SubscriptionForm } from '../../components/subscriptionForm'
import { WindowHeightWrapper } from '../../components/windowHeightWrapper'
import PanelReadingList from '../../components/panelReadingList'

export default ({ data, location }) => {
    const { edges } = data.allMarkdownRemark
    const dropIn = useSpring({opacity: 1, bottom: '52px', delay: 200, from: {opacity: 0, bottom: '200px'}})
    const fadeIn = useSpring({opacity: 1, delay: 450, from: {opacity: 0}})
    return (
        <>
        <SEO title="About Us – Engaging People with Philosophy" description="Philosophy Break's mission is to get more people engaged with philosophy. Our aim is to cultivate curiosity, encourage critical thought, and supplement a meaningful existence." pathname={location.pathname} />
        <Layout>
            {/*article title*/}
            <WindowHeightWrapper className="title">
                <Img className="title-img" fluid={data.about.childImageSharp.fluid} alt="about Philosophy Break" />
                <div className="darkener"></div>
                {/*react spring fade in*/}
                <animated.div style={dropIn} className="page-center title-center">
                    <h1>What is Philosophy Break?</h1>
                    <div className="separator"></div>       
                    <p className="description">Philosophy Break is a clearing in your cluttered newsfeed. Each break takes only a few minutes to read, and is designed to spark your philosophical curiosity — from how best to live our lives, to the ultimate nature of the worlds we live in.</p>
                </animated.div>
                <animated.p className="time break page-center" style={fadeIn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="eed70a5d-3465-468c-b304-842a4dc6abf4" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.35" stopColor="#1aa9ff"/><stop offset="0.44" stopColor="#22acff"/><stop offset="0.58" stopColor="#37b4ff"/><stop offset="0.75" stopColor="#5ac1ff"/><stop offset="0.89" stopColor="#7cceff"/></linearGradient></defs><title>Philosophy Break</title><g id="a694bf81-a4e3-4986-9301-cf65ad1fcac0" data-name="Layer 1"><path d="M250,499.5A249.5,249.5,0,0,1,73.58,73.58,249.5,249.5,0,1,1,426.42,426.42,247.84,247.84,0,0,1,250,499.5Z" fill="#fff"/><path d="M250,1A248.93,248.93,0,0,1,426.07,426.07a249,249,0,1,1-273-405.5A247.32,247.32,0,0,1,250,1m0-1C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Z" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#eed70a5d-3465-468c-b304-842a4dc6abf4)"/></g><g id="4dca974f-b6d8-4b4f-b13a-2551c52acb2b" data-name="Layer 3"><path d="M462,325l-1.24,3.94C428.79,414.27,346.49,475,250,475c-98,0-181.41-62.69-212.25-150.16L461,325"/></g><g id="1a30999d-582a-4788-8e9a-e662ea057375" data-name="Layer 2"><polygon points="38 325 103 225 152 281 250 112 346 221 377 182 469 306 38 325" fill="#fff"/></g><g id="93c33bb2-e13c-4346-ae21-ff33957a2372" data-name="Layer 4"><polyline points="38 326 108 250.66 152 278.91 250 148 346 221.46 377 208.28 469 306.22 462 326"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/></g></svg><AnchorLink href="#break-start" style={{ textDecoration: "none" }}><span className="bottom-blue-border">OUR MISSION&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></animated.p>  
            </WindowHeightWrapper>
            {/*article content*/}
            <div id="break-start" className="page-center" style={{marginBottom: 48}}>
                <p><span className="big-letter">P</span>hilosophy Break was created in 2018 by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-maden/">Jack Maden</a> with a simple mission: to get more people engaged with philosophy. Why? Because we believe philosophy is the antidote to a world saturated by information — and that the more people engage with philosophy, the more fulfilling their lives will be.</p>
                <p>Philosophy as a subject has much to offer; but it is philosophy as an <i>act</i> that we seek to popularize. <i>To philosophize</i> means asking 'why', it means challenging assumptions, it means harnessing your curiosity to forge your own path. We believe it is only by living philosophically that people can cultivate meaningful existences and fully realize their potential. For as Socrates, <Link to="/articles/socrates-on-what-we-know">that great martyr of philosophy</Link>, declared:</p>
                <blockquote><p>"The unexamined life is not worth living."</p></blockquote>
                <p>To disrupt the noise and keep your mind curious, be sure to <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">follow Philosophy Break on Instagram</a>, and subscribe to our newsletter below. Like our cause? Help us spread the word by sharing Philosophy Break with your friends and family, to make newsfeeds everywhere a more philosophical place.</p>
            </div>
                <div className="time" style={{marginTop: 48, textAlign: "center"}}><Img style={{display: "inline-block", marginBottom: 48, marginRight: 0}} fluid={data.philosophybreak.childImageSharp.fluid} alt="Philosophy Break"/></div>
            {/*after article*/}
            <div className="after-article grey-background">
                <div className="page-center">
                    <h3>Get Weekly Breaks</h3>
                    <div className="separator"></div>
                </div>
                <SubscriptionForm />
                <div className="page-center">
                    <h3>Latest Breaks</h3>
                    <div className="separator" style={{margin: "1.5em auto 2em"}}></div>
                    {edges.slice(0, 4).map(edge => {
                        //curly brackets around variable is a destructuring assignment - e.g. the below equals edge.node.frontmatter & also edge.node.timeToRead
                        const {frontmatter, timeToRead, fields} = edge.node;
                        return (
                        <div className="article" key={frontmatter.date}>
                            <Link to={fields.slug}>
                                <Img fluid={frontmatter.image.childImageSharp.fluid} />
                                <div className="article-info">
                                    <h2>{frontmatter.title}</h2>
                                    <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                                </div>
                            </Link>
                        </div>
                        )
                    })}
                </div>
            </div>
            <PanelReadingList />
        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        about: file(relativePath: {eq: "aboutphilosophybreak.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 2100) {
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
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        date
                    }
                    timeToRead
                    fields {
                        slug
                    }
                }
            }
          }
    }
`