import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {useSpring, animated} from 'react-spring'

import SEO from '../../../components/SEO'
import Layout from '../../../components/layout'
import { SubscriptionForm } from '../../../components/subscriptionForm'

export default ({ data, location }) => {
    const { edges } = data.allMarkdownRemark
    const dropIn = useSpring({opacity: 1, bottom: '20px', delay: 200, from: {opacity: 0, bottom: '100px'}})
    return (
        <>
        <SEO title="Consciousness – The Best Books and Essential Reading List" description="A curated reading list of the best and essential books on the philosophy of consciousness." pathname={location.pathname} />
        <Layout>
            {/*article title*/}
            <div className="title list">
                <Img className="title-img" fluid={data.consciousnesslist.childImageSharp.fluid} alt="about Philosophy Break" />
                <div className="darkener"></div>
                {/*react spring fade in*/}
                <animated.div style={dropIn} className="page-center title-center">
                    <h1>Consciousness</h1>      
                    <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fff" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"/></svg>&nbsp;Essential Reading List</h4>
                </animated.div>
            </div>
            {/*article content*/}
            <div id="break-start" className="page-center" style={{marginBottom: 48}}>
                <p><span className="big-letter">C</span>onsciousness is at once the most familiar thing to us, and perhaps the most mysterious. Why does conscious experience arise, and what is its nature? Is it a physical entity, or something else entirely? To what extent are other lifeforms conscious, and could we ever recreate their experiences? These difficult questions form the basis of the so-called <Link to="/articles/what-is-consciousness">'hard problem' of conscious experience</Link>, an area of research receiving growing attention.</p>
                <p>Within philosophy, the debate around consciousness is fierce. The following reading list is designed to provide you with a thorough introduction to the problem of consciousness, as well as a well-rounded view of leading solutions to it.</p>
                <h4>The Conscious Mind, by David J. Chalmers</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/Conscious-Mind-Search-Fundamental-Philosophy/dp/0195117891/ref=as_li_ss_tl?keywords=the+conscious+mind&qid=1566837974&s=books&sr=1-1&linkCode=ll1&tag=philosophybre-20&linkId=01580699972997385923ede633b744d2">
                        <Img fluid={data.theconsciousmind.childImageSharp.fluid} />
                        <div className="article-info">
                            <h2>The Conscious Mind</h2>
                            <p className="time">BY DAVID J. CHALMERS</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>In his 1996 book <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/Conscious-Mind-Search-Fundamental-Philosophy/dp/0195117891/ref=as_li_ss_tl?keywords=the+conscious+mind&qid=1566837974&s=books&sr=1-1&linkCode=ll1&tag=philosophybre-20&linkId=01580699972997385923ede633b744d2">The Conscious Mind</a>, David J. Chalmers fleshes out the 'hard problem' of consciousness with considerable force. Though challenging in places, this book is a brilliant survey of the field and a powerful critique of reductionist thinking. Reading it, you will feel the 'hard problem' of consciousness in your bones.</p>
                <h4>Consciousness Explained, by Daniel Dennett</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0316180661/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316180661&linkCode=as2&tag=philosophybre-20&linkId=16afb12ef72d7e6329d9713b3c59078f">
                        <Img fluid={data.consciousnessexplained.childImageSharp.fluid} />
                        <div className="article-info">
                            <h2>Consciousness Explained</h2>
                            <p className="time">BY DANIEL DENNETT</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>Daniel Dennett's landmark <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0316180661/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0316180661&linkCode=as2&tag=philosophybre-20&linkId=16afb12ef72d7e6329d9713b3c59078f">Consciousness Explained</a>, published in 1991, is packed full of mind-bending thought experiments about how we experience the world. Dennett believes many of our difficulties with consciousness - including the 'hard problem' - are mere illusions (sorry Chalmers!). An entertaining and stimulating read, this book will seriously challenge your intuitions.</p>
                <h4>Conversations on Consciousness, by Susan Blackmore</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/Conversations-Consciousness-Minds-Think-about/dp/0195179595/ref=as_li_ss_tl?keywords=conversations+on+consciousness&qid=1566836793&s=books&sr=1-1&linkCode=ll1&tag=philosophybre-20&linkId=05dc177f0980fec42d1d9c8d7a2cccbd">
                        <Img fluid={data.consciousnessconversations.childImageSharp.fluid} />
                        <div className="article-info">
                            <h2>Conversations on Consciousness</h2>
                            <p className="time">BY SUSAN BLACKMORE</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>If you're looking for an overview of just how varied and radical the ideas within the field of consciousness are, Susan Blackmore's 2005 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/Conversations-Consciousness-Minds-Think-about/dp/0195179595/ref=as_li_ss_tl?keywords=conversations+on+consciousness&qid=1566836793&s=books&sr=1-1&linkCode=ll1&tag=philosophybre-20&linkId=05dc177f0980fec42d1d9c8d7a2cccbd">Conversations on Consciousness</a> is a fantastic choice. Using wide-ranging interviews with leading thinkers and major scientists in consciousness, including Chalmers and Dennett, Blackmore takes you on a trip from physicalism to dualism – and everything in between.</p>
                <h4>Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness, by Peter Godfrey-Smith</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/Other-Minds-Octopus-Origins-Consciousness/dp/0374537194/ref=as_li_ss_tl?keywords=octopus+and+other+mind&qid=1566834141&s=gateway&sr=8-1&linkCode=ll1&tag=philosophybre-20&linkId=566f0076828051dd9fd2442234c02150">
                        <Img fluid={data.consciousnessoctopus.childImageSharp.fluid} />
                        <div className="article-info">
                            <h2>Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness</h2>
                            <p className="time">BY PETER GODFREY-SMITH</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>In his fascinating 2016 book <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/Other-Minds-Octopus-Origins-Consciousness/dp/0374537194/ref=as_li_ss_tl?keywords=octopus+and+other+mind&qid=1566834141&s=gateway&sr=8-1&linkCode=ll1&tag=philosophybre-20&linkId=566f0076828051dd9fd2442234c02150">Other Minds</a>, Peter Godfrey-Smith not only examines the weird mystery of consciousness, but charts its potential evolution from when life began. Drawing on his experience as a philosopher and enthusiastic scuba diver, he thoughtfully uses the octopus, a deeply alien yet oddly intelligent creature, to trace our inner lives back to their roots, and beautifully weaves in the story of how nature became aware of itself.</p>
                <h4>The Origin of Consciousness in the Breakdown of the Bicameral Mind, by Julian Jaynes</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/Other-Minds-Octopus-Origins-Consciousness/dp/0374537194/ref=as_li_ss_tl?keywords=octopus+and+other+mind&qid=1566834141&s=gateway&sr=8-1&linkCode=ll1&tag=philosophybre-20&linkId=566f0076828051dd9fd2442234c02150">
                        <Img fluid={data.consciousnessbicameral.childImageSharp.fluid} />
                        <div className="article-info">
                            <h2>The Origin of Consciousness in the Breakdown of the Bicameral Mind</h2>
                            <p className="time">BY JULIAN JAYNES</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>With a title like that, it's worth getting this book just to show off. As well as a bragging right, however, Julian Jaynes's 1976 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/Other-Minds-Octopus-Origins-Consciousness/dp/0374537194/ref=as_li_ss_tl?keywords=octopus+and+other+mind&qid=1566834141&s=gateway&sr=8-1&linkCode=ll1&tag=philosophybre-20&linkId=566f0076828051dd9fd2442234c02150">Origin of Consciousness</a> is an absolute classic. It puts forward the controversial idea that human consciousness emerged as recently as 3,000 years ago, and that prior to this the brain had two separate 'bicameral' chambers, which led people to interpret their own thoughts as the words of gods. Its introductory chapters are not so outlandish, however. In them, Jaynes offers perhaps the most lucid and poetic summary of the philosophy of consciousness in existence. And, if nothing else, Jaynes's epic is a tour de force in carrying out a seemingly crazy philosophical argument from start to finish – and doing so convincingly.</p>
                <h2>Further reading</h2>
                <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">on Instagram</a>.</p>
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
        consciousnesslist: file(relativePath: {eq: "consciousness-list.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 2100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        consciousnessexplained: file(relativePath: {eq: "consciousness-explained.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        theconsciousmind: file(relativePath: {eq: "theconsciousmind.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        consciousnessoctopus: file(relativePath: {eq: "consciousnessoctopus.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        consciousnessconversations: file(relativePath: {eq: "consciousnessconversations.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        consciousnessbicameral: file(relativePath: {eq: "consciousnessbicameral.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 300) {
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