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
        <SEO title="History of Western Philosophy – The Best Books and Essential Reading List" description="A curated reading list of the best and essential books on the history of Western philosophy." pathname={location.pathname} />
        <Layout>
            {/*article title*/}
            <div className="title list">
                <Img className="title-img" fluid={data.whistorylist.childImageSharp.fluid} alt="western philosophy" />
                <div className="darkener"></div>
                {/*react spring fade in*/}
                <animated.div style={dropIn} className="page-center title-center">
                    <h1>History of Western Philosophy</h1>      
                    <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fff" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"/></svg>&nbsp;Essential Reading List</h4>
                </animated.div>
            </div>
            {/*article content*/}
            <div id="break-start" className="page-center" style={{marginBottom: 48}}>
                <p><span className="big-letter">R</span>eading a book on the history of Western philosophy in its entirety might seem foreboding – but imagine writing one! Thankfully, a number of authors have stepped up to the Herculean task, providing us with a complete overview of how Western philosophy has unfolded over the last two and a half thousand years.</p>
                <p>The following reading list contains the best of such books. With each, you'll be taken on an illuminating journey from the pre-Socratic philosophers of Ancient Greece, through medieval times and the ideas of the Enlightenment, right up to the analytic and continental philosophy of today. Fasten your seat belts!</p>
                <h4>The History of Western Philosophy, by Bertrand Russell</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0671201581/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0671201581&linkId=7f9e5b8a5812d027ddd5c31d266aca87">
                        <Img fluid={data.whistoryrussell.childImageSharp.fluid} alt="The History of Western Philosophy, by Bertrand Russell" />
                        <div className="article-info">
                            <h2>The History of Western Philosophy</h2>
                            <p className="time">BY BERTRAND RUSSELL</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>Where better to start on the history of Western philosophy than with the perspective of one of the subject's greats? Bertrand Russell was a towering figure in 20th-century thought. Originally published in 1945, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0671201581/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0671201581&linkId=7f9e5b8a5812d027ddd5c31d266aca87">The History of Western Philosophy</a> is Russell's brilliant, if slightly biased, look back at all prominent thinkers that came before him. It's a very accessible and enjoyable read.</p>

                <h4>A New History of Western Philosophy, by Anthony Kenny</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0199656495/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199656495&linkId=446f947fc36e3824faaf4492714deaf4">
                        <Img fluid={data.whistorykennynew.childImageSharp.fluid} alt="A New History of Western Philosophy, by Anthony Kenny" />
                        <div className="article-info">
                            <h2>A New History of Western Philosophy</h2>
                            <p className="time">BY ANTHONY KENNY</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>Anthony Kenny, a highly thought of philosopher in his own right, is the first person since Russell to attempt a complete, single-authored history of Western philosophy. <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/0631201327/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0631201327&linkId=90456aeb8e19235364653210179e838b">A New History of Western Philosophy</a>, first published in 2007, is epic in scope and lauded as one of the strongest and best-researched introductions to the subject. Kenny combines rich biographical context with academic rigour to create a wonderfully lucid account of philosophy's development. It's an essential book to have on the shelf for anyone interested in philosophy.</p>

                <h4>A Brief History of Western Philosophy, by Anthony Kenny</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0631201327/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0631201327&linkId=90456aeb8e19235364653210179e838b">
                        <Img fluid={data.whistorykennybrief.childImageSharp.fluid} alt="A Brief History of Western Philosophy, by Anthony Kenny" />
                        <div className="article-info">
                            <h2>A Brief History of Western Philosophy</h2>
                            <p className="time">BY ANTHONY KENNY</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>It's that man Kenny again! Slightly less epic than his New History, Anthony Kenny's <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0199656495/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199656495&linkId=446f947fc36e3824faaf4492714deaf4">A Brief History of Western Philosophy</a>, published in 1996, is no less enlightening. If you're looking for a more manageable read on Western philosophy's history that still covers all the bases in thoughtful fashion, this is the book for you.</p>

                <h4>The Columbia History of Western Philosophy, by Richard Popkin</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0231101295/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0231101295&linkId=336fc18d9c0d561aae0fdaec5b65ddff">
                        <Img fluid={data.whistorycolumbia.childImageSharp.fluid} alt="The Columbia History of Western Philosophy, by Richard Popkin" />
                        <div className="article-info">
                            <h2>The Columbia History of Western Philosophy</h2>
                            <p className="time">BY RICHARD POPKIN</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>You might think assembling 63 separate scholars to contribute toward a complete history of Western philosophy would lead to a mess of conflicting styles, interpretations, and opinions. Not so: enter Richard Popkin. In <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0231101295/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0231101295&linkId=336fc18d9c0d561aae0fdaec5b65ddff">The Columbia History of Western Philosophy</a>, published in 2006, Popkin weaves the contributions together with impressive editorial skill, providing a single compelling narrative. The end result is another essential for the bookshelf.</p>

                <h4>The Great Philosophers: An Introduction to Western Philosophy, by Bryan Magee</h4>
                <div className="article white">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/019289322X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019289322X&linkId=582829b6ab8e2814e7c66f3f6b6526a5">
                        <Img fluid={data.whistorymagee.childImageSharp.fluid} alt="The Great Philosophers: An Introduction to Western Philosophy, by Bryan Magee" />
                        <div className="article-info">
                            <h2>The Great Philosophers: An Introduction to Western Philosophy</h2>
                            <p className="time">BY BRYAN MAGEE</p>
                            <p className="time">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>VIEW ON AMAZON</p>
                        </div>
                    </a>
                </div>
                <p>A bit lighter than other entries on this list, Bryan Magee's <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/019289322X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019289322X&linkId=582829b6ab8e2814e7c66f3f6b6526a5">The Great Philosophers: An Introduction to Western Philosophy</a>, published in 1987, is a must for two reasons. Firstly, it offers an exciting account of Western philosophy's greatest thinkers. Secondly, it does so through interviews with some of the most important philosophers of the late 20th century, granting insight into their thoughts, ideas, and personalities too. This approach leads to a thoroughly engaging overview for anyone interested in Western philosophy.</p>
                
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
        whistorylist: file(relativePath: {eq: "whistorylist.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 2100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whistoryrussell: file(relativePath: {eq: "whistoryrussell.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whistorykennynew: file(relativePath: {eq: "whistorykennynew.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whistorykennybrief: file(relativePath: {eq: "whistorykennybrief.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whistorycolumbia: file(relativePath: {eq: "whistorycolumbia.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        whistorymagee: file(relativePath: {eq: "whistorymagee.jpg"}) {
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