import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import Checkout from "../../components/checkout"
import Reviews from "../../components/reviewsLBQ"

const Page = ({ data, location }) => {
    
    const imagePath = getSrc(data.lbq)

    return (
    <>
    <Seo title="Life’s Big Questions: Introduction to Philosophy Course" description="This introductory course distills philosophy’s best answers to some of life's most troubling questions in less than a week, taking you on a whirlwind journey of reflection, understanding, and discovery." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple/>
        {/*page title*/}
        <div className="top-title darkradial-background" id="top">
            <div className="two-col page-center">
                <div>
                    <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>5-DAY COURSE</span><div className="separator course"></div>
                    <h1>5-Day Introduction to Philosophy Course: Life's Big Questions</h1>
                    <p style={{marginBottom: 0}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <AnchorLink href="#reviews" className="white-underline" style={{fontSize: "16px"}}>(21 reviews)</AnchorLink></p>
                    <p className="verified discount">20% DISCOUNT – LIMITED OFFER</p><h5 className="discount"><span>$29.00 USD</span>&nbsp;&nbsp;<span>$23.20 USD</span></h5>
                    <p className="spectral">Learn thousands of years of philosophy in just five days. This introductory course distills what the great philosophers have said about how we should live, whether we have free will, if perception is reality, and why anything exists.</p>
                    <Checkout />
                    <AnchorLink className="no-hover" href="#look-inside"><button className="button primary" style={{background: "transparent", border: "solid #fff 2px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>Look Inside</button></AnchorLink>
                </div>
                <div>
                    <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="Life's Big Questions" />
                    <p className="small-grey-font smaller text-center"><i>Course materials are delivered direct to your inbox over five days, and accessible forever from any device.</i></p>
                </div>
            </div>
        </div>
        {/*Chapters*/}
        <div id="look-inside"  className="small-pad darkradial-background">
            <div className="page-center">
                <h2 className="text-center">What you get:</h2>
                <div className="three-col">
                    <div className="small-mar">
                        
                        <p className="small-grey-font"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#36b4ff" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"/></svg>Five concise primers (each 30-40 min reads) distilling thousands of years of wisdom into accessible daily chunks</p>
                    </div>
                    <div className="small-mar">
                        <p className="small-grey-font"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill="#36b4ff" d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>Five guided reflections and curated reading lists for effective and efficient learning on all topics covered</p>
                    </div>
                    <div className="small-mar-top">
                        <p className="small-grey-font"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#36b4ff" d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"/></svg>20,000+ words of crystal clear insight into how the great philosophers have answered life's big questions</p>
                    </div>
                </div>
            </div>
            <div className="mid-mar">
                <div className="two-col big-2-col page-center row-reverse">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">1</span><span>Why Does Anything Exist?</span></h3>
                        <p className="small-grey-font">On day one of Life's Big Questions, we'll consider why there is something rather than nothing. If God created the universe, why does God exist? If the Big Bang caused the universe, what set the preconditions for the Big Bang? Chapter #1 features answers from philosophical titans like Leibniz and Spinoza, as well as contemporary quantum physicists and thinkers like Lawrence Krauss and Derek Parfit. Want a sneak peek? <Link to="/articles/why-does-anything-exist/">Read an extract from this chapter here.</Link></p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter1.childImageSharp.gatsbyImageData}
                        alt="Why Does Anything Exist?" />
                    </div>
                </div>
            </div>
            <div className="mid-mar">
                <div className="two-col big-2-col row-reverse page-center">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">2</span><span>Is the World Around Us ‘Real’?</span></h3>
                        <p className="small-grey-font">On day two of Life's Big Questions, we'll inspect the extent to which the world around us reflects ‘reality’. Do our senses deceive us about what's really there? Can we ever <i>prove</i> that we're not all brains in vats? To face up to these questions, Chapter #2 draws on the approaches of philosophical giants Descartes, Locke, Berkeley, Hume, and Kant. Interested in what's inside? <Link to="/articles/is-the-world-around-us-real/">Read an extract from this chapter here.</Link></p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter2.childImageSharp.gatsbyImageData}
                        alt="Is the World Around Us ‘Real’?" />
                    </div>
                </div>
            </div>
            <div className="mid-mar">
                <div className="two-col big-2-col row-reverse page-center">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">3</span><span>What Makes Us Conscious?</span></h3>
                        <p className="small-grey-font">Are feelings and experiences something <i>different</i> from our brains, or <i>are</i> they our brains? Do they happen <i>in addition to</i> all the physical processes in our brains, or are they <i>identical</i> to them? On day three, we'll consider the mystery of consciousness, featuring discussions from contemporary philosophers of mind like Thomas Nagel and David Chalmers.</p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter3.childImageSharp.gatsbyImageData}
                        alt="What Makes Us Conscious?" />
                    </div>
                </div>
            </div>
            <div className="mid-mar">
                <div className="two-col big-2-col row-reverse page-center">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">4</span><span>Do We Have Free Will?</span></h3>
                        <p className="small-grey-font">If we live in a world governed by cause and effect, and these causal chains stretch back to the beginning of the universe, where does human agency fit in? Is the freedom we feel in our actions simply an illusion? On day four, we'll investigate the strange problem of free will, drawing from philosophical greats like Schopenhauer to contemporary neuroscientists and thinkers like Sam Harris and Daniel Dennett.</p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter4.childImageSharp.gatsbyImageData}
                        alt="Do We Have Free Will?" />
                    </div>
                </div>
            </div>
            <div className="mid-mar">
                <div className="two-col big-2-col row-reverse page-center">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">5</span><span>How Should We Approach Life?</span></h3>
                        <p className="small-grey-font">On the fifth and final day of Life's Big Questions, we'll turn from theorizing about the nature of existence and begin to unpack the practical consequences for how we should live our lives. We'll ask if there's a <i>right</i> way to live, and consider answers from philosophical favorites Nietzsche, Camus, Lucretius — and consider the three main ethical systems for how we should treat other people.</p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter5.childImageSharp.gatsbyImageData}
                        alt="How Should We Approach Life?" />
                    </div>
                </div>
            </div>
            <div className="page-center small-pad mid-width text-center">
                <h2 className="small-mar">Learn Thousands of Years of Philosophy in Just 5 Days</h2>
                <div className="separator"></div>
                <p className="small-grey-font">Enroll today, and by this time next week, you'll understand philosophy's top wisdom, have clarity on exactly which topics interest you, and know the best further reading for continuing your philosophical journey.</p>
                <div className="small-width"><Checkout /></div>
            </div>
        </div>
        
        {/*Reviews*/}
        <Reviews />

        
        <div className="darkradial-background small-pad">
            <div className="page-center">
                <div className="large-pad-bottom mid-width text-center">
                    <h2 className="small-mar">Start Answering Life’s Big Questions Today</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Enroll today, and by this time next week, you'll understand philosophy's top wisdom, have clarity on exactly which topics interest you, and know the best further reading for continuing your philosophical journey.</p>
                    <div className="small-width"><Checkout /></div>
                </div>

            {/*FAQ*/}
                <div id="faq">
                    <h2 className="mid-mar-top">Frequently Asked Questions</h2>
                    <div className="two-col align-top small-mar">
                        <div>
                            <h4>Who is this course for?</h4>
                            <p className="small-grey-font">This is for anyone curious about why we are here, the nature of existence, and how we should spend our lives. You may have read some philosophy, or you may have never engaged with the subject before: either way, we've distilled philosophy's best answers so you can quickly approach life's nagging questions and anxieties in an accessible, organized fashion, and efficiently learn some of the best wisdom from history.</p>
                        </div>
                        <div>
                            <h4>How long does it take to do the course?</h4>
                            <p className="small-grey-font">The course is delivered over five days, with a new question considered each day. Each day's materials take about 30-40 minutes to read through, with an extra fifteen or so minutes recommended for reflection. You have access to course materials forever, so don't worry if you miss a day — you can take the course at your own pace.</p>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div>
                            <h4>How is the course delivered?</h4>
                            <p className="small-grey-font">Course materials are delivered directly to your email inbox each day over five days. They are optimized for easy reading on any device — be it desktop, laptop, tablet, or mobile — and are even printable, so you can consume them however you like.</p>
                        </div>
                        <div>
                            <h4>What if I miss a day?</h4>
                            <p className="small-grey-font">If over the five days of the course you miss a day, don't worry — you'll have access to course materials forever, and can come back to anything at any time and take everything at your own pace. </p>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div>
                            <h4>Who created the course?</h4>
                            <p className="small-grey-font">This course is brought to you by Philosophy Break, a self-funded social enterprise dedicated to getting more people engaged with philosophy. Course content is put together by the founder of Philosophy Break, <a target="_blank" href="/about">Jack Maden</a>, who received an MA in Philosophy from the University of Southampton in 2014, and has been producing educational resources and writing about philosophy ever since. Having obtained great value researching philosophy at postgraduate level, Jack wanted to share the subject's riches with a wider audience, and created Philosophy Break in 2018. This course is the result of years of research and refinement to make philosophy's profound and important wisdom as relevant, interesting, and engaging to today's digital world as possible.</p>
                        </div>
                        <div>
                            <h4>Where do profits from the course go?</h4>
                            <p className="small-grey-font">Philosophy Break is a self-funded social enterprise, so we put all proceeds straight back into funding our mission of engaging more people with philosophy. By purchasing a course, you help support us on that mission.</p>
                            <p className="small-grey-font">Have a question not answered here? Simply <a href="mailto:hello@philosophybreak.com">drop us an email</a>, and we'll be happy to answer!</p>
                        </div>
                    </div>
                    <div className="large-pad mid-width text-center">
                        <h2 className="small-mar">It's Time to Begin Your Philosophical Journey</h2>
                        <div className="separator"></div>
                        <p className="small-grey-font">Enroll today, and by this time next week, you'll understand philosophy's top wisdom, have clarity on exactly which topics interest you, and know the best further reading for continuing your philosophical journey.</p>
                        <div className="small-width">
                            <Checkout />
                            <AnchorLink className="no-hover" href="#top"><button className="button primary" style={{background: "transparent", border: "solid #fff 2px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>Back to Top</button></AnchorLink>
                        </div>
                    </div>
                    <div className="small-pad"></div>
                </div>
            </div>
        </div>
    </Layout>
    </>
    )
}

export const query = graphql`{
  lbq: file(relativePath: {eq: "Lifes-Big-Questions-Course.jpg"}) {
    childImageSharp {
        gatsbyImageData(width: 1200, quality: 90, layout: CONSTRAINED)
    }
  }
  about: file(relativePath: {eq: "Chapter1-full.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
  chapter1: file(relativePath: {eq: "Chapter1-t.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  chapter2: file(relativePath: {eq: "Chapter2-t.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  chapter3: file(relativePath: {eq: "Chapter3-t.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  chapter4: file(relativePath: {eq: "Chapter4-t.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  chapter5: file(relativePath: {eq: "Chapter5-t.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
}
`

export default Page