import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {useSpring, animated} from 'react-spring'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import { SubscriptionForm } from '../../components/subscriptionForm'
import { WindowHeightWrapper } from '../../components/windowHeightWrapper'

export default ({ data, location }) => {
    const { edges } = data.allMarkdownRemark
    const dropIn = useSpring({opacity: 1, bottom: '60px', delay: 200, from: {opacity: 0, bottom: '200px'}})
    const fadeIn = useSpring({opacity: 1, delay: 450, from: {opacity: 0}})
    return (
        <>
        <SEO title="About Philosophy Break" description="Philosophy Break's mission is to get more people engaged with philosophy. Our aim is to cultivate curiosity, encourage critical thought, and supplement a meaningful existence." pathname={location.pathname} />
        <Layout>
            {/*article title*/}
            <WindowHeightWrapper className="title">
                <Img className="title-img" fluid={data.about.childImageSharp.fluid} alt="about Philosophy Break" />
                <div className="darkener"></div>
                {/*react spring fade in*/}
                <animated.div style={dropIn} className="page-center title-center">
                    <h1>What is Philosophy Break?</h1>
                    <div className="separator"></div>       
                    <p className="description">Philosophy Break is a clearing in your cluttered newsfeed. Each break takes only a few minutes to read, and is designed to spark curiosity about a particular talking point in philosophy — from how best we can live our lives, to the ultimate nature of the worlds we live in.</p>
                    <div className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{fill: '#fff', verticalAlign: 'text-bottom', marginRight: '5px'}}><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>Created by <a href="https://www.instagram.com/philosophybreak/" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: "#8c8c8c" }}>Jack Maden</a>&nbsp;&nbsp;|&nbsp;&nbsp;Made with&nbsp;&nbsp;<span style={{ color: "#ff3650" }}>❤</span>&nbsp;&nbsp;from London</div>
                </animated.div>
                <animated.p className="time break page-center" style={fadeIn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="eed70a5d-3465-468c-b304-842a4dc6abf4" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.35" stopColor="#1aa9ff"/><stop offset="0.44" stopColor="#22acff"/><stop offset="0.58" stopColor="#37b4ff"/><stop offset="0.75" stopColor="#5ac1ff"/><stop offset="0.89" stopColor="#7cceff"/></linearGradient></defs><title>Philosophy Break</title><g id="a694bf81-a4e3-4986-9301-cf65ad1fcac0" data-name="Layer 1"><path d="M250,499.5A249.5,249.5,0,0,1,73.58,73.58,249.5,249.5,0,1,1,426.42,426.42,247.84,247.84,0,0,1,250,499.5Z" fill="#fff"/><path d="M250,1A248.93,248.93,0,0,1,426.07,426.07a249,249,0,1,1-273-405.5A247.32,247.32,0,0,1,250,1m0-1C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Z" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#eed70a5d-3465-468c-b304-842a4dc6abf4)"/></g><g id="4dca974f-b6d8-4b4f-b13a-2551c52acb2b" data-name="Layer 3"><path d="M462,325l-1.24,3.94C428.79,414.27,346.49,475,250,475c-98,0-181.41-62.69-212.25-150.16L461,325"/></g><g id="1a30999d-582a-4788-8e9a-e662ea057375" data-name="Layer 2"><polygon points="38 325 103 225 152 281 250 112 346 221 377 182 469 306 38 325" fill="#fff"/></g><g id="93c33bb2-e13c-4346-ae21-ff33957a2372" data-name="Layer 4"><polyline points="38 326 108 250.66 152 278.91 250 148 346 221.46 377 208.28 469 306.22 462 326"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/></g></svg><AnchorLink href="#break-start" style={{ textDecoration: "none" }}><span className="bottom-blue-border">OUR MISSION&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></animated.p>  
            </WindowHeightWrapper>
            {/*article content*/}
            <div id="break-start" className="page-center" style={{marginBottom: 48}}>
                <p><span className="big-letter">P</span>hilosophy Break's mission is to get more people engaged with philosophy. Our aim is to cultivate curiosity, encourage critical thought, and supplement a meaningful existence.</p>
                <p>The addictive nature of the digital world afflicts many of us. The relentless torrent of information saturates our attention spans. But life is finite, and the things we give attention to define our lives. It's crucial to break free from the turbulent current and come up for air.</p>
                <p>As Seneca put it almost 2,000 years ago in his brilliant treatise, <a href="https://www.goodreads.com/book/show/97412.On_the_Shortness_of_Life" target="_blank" rel="noopener noreferrer">On the Shortness of Life</a>:</p>
                <blockquote>
                    <p>It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested.<br/><br/>But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death’s final constraint to realise that it has passed away before we knew it was passing. <br/><br/>So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it… Life is long if you know how to use it.</p></blockquote>
                <p>Surrounded by distraction as we are, Seneca's words ring especially true today.</p>
                <p>Streaming services hook us into <i>one more</i> episode; advertisements bombard us into submission; those of us with smartphones check them without thinking.</p>
                <p>But the compulsion to watch, to shop, to hit refresh on our newsfeeds — all of it can be reined in by contemplating the world around us, and our place within it.</p>
                <p>How can we best spend our lives on earth? What makes you happy? What gives you purpose?</p>
                <p>Dwelling on such questions returns us to the present moment and fuels our drive for life, for as Socrates - <a href="https://www.goodreads.com/book/show/73945.Apology" target="_blank" rel="noopener noreferrer">that great martyr of philosophy</a> - says:</p>
                <blockquote><p>The unexamined life is not worth living.</p></blockquote>
                <p>Break up your Instagram newsfeed with compelling quotations and provocative questions that switch you from consumption mode to thoughtful mode. <a href="https://www.instagram.com/philosophybreak/" target="_blank" rel="noopener noreferrer">Follow Philosophy Break now</a>.</p>
                <p>Additionally, add some thinking slots to your email inbox by subscribing to emails below.</p>
            </div>
                <div className="time" style={{marginTop: 48, textAlign: "center"}}><Img style={{display: "inline-block", marginBottom: 48, marginRight: 0}} fluid={data.philosophybreak.childImageSharp.fluid} alt="Philosophy Break"/></div>
            {/*after article*/}
            <div className="after-article grey-background">
                <div className="page-center">
                    <h4>GET WEEKLY BREAKS</h4>
                    <div className="separator"></div>
                </div>
                <SubscriptionForm />
                <div className="page-center">
                    <h4>LATEST BREAKS</h4>
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