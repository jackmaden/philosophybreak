import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import Checkout from "../../components/checkoutNietzsche";
import Reviews from "../../components/reviewsLBQ"

const Page = ({ data, location }) => {
    
    const imagePath = getSrc(data.lbq)

    return (
    <>
    <Seo title="Introduction to Nietzsche and His 5 Greatest Ideas: 6-Day Course" description="Learn everything you need to know about Friedrich Nietzsche in just six days. This introductory course distills Nietzsche’s best and most misunderstood ideas, from God is dead to the Übermensch." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple bg="light-bg" />
        {/*page title*/}
        <div className="top-title grey-background course no-mar-bottom small-pad-bottom-mob-mid-pad-bottom-desk" id="top">
            <div className="two-col page-center">
                <div>
                    <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>BITE-SIZE COURSE</span><div className="separator course"></div>
                    <h1 className="smaller">Introduction to Nietzsche and His 5 Greatest Ideas: 6-Day Course</h1>
                    <p className="verified discount">15% DISCOUNT – LIMITED OFFER</p><h5 className="discount"><span>$39.00 USD</span>&nbsp;&nbsp;<span>$34.00 USD</span></h5>
                    <p className="spectral">Learn everything you need to know about the philosophy of Friedrich Nietzsche in just six days. This introductory course distills Nietzsche’s best and most misunderstood ideas, from God is dead to the Übermensch.</p>
                    <Checkout />
                </div>
                <div>
                    <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="Introduction to Nietzsche" />
                </div>
            </div>
        </div>
        {/*Chapters*/}
        <div id="look-inside"  className="grey-background small-pad-bottom">
            <div className="page-center">
                <h2 className="small-pad text-center no-pad-top-mob">What You Get Delivered to Your Inbox Over 6 Days:</h2>
                <div className="four-col tiny-pad-bottom-mob">
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 20,000+ words</h5>
                        <p className="small-grey-font">Crystal clear insight into Nietzsche’s most provocative arguments and ideas.</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 6 concise overviews</h5>
                        <p className="small-grey-font">One succinct overview (30-40 min read) distilling each core topic covered.</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 6 guided reflections</h5>
                        <p className="small-grey-font">Six sets of questions and reflections to round out each day's philosophizing.</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 6 reading lists</h5>
                        <p className="small-grey-font">Six curated reading lists for effective further exploration of Nietzsche’s great ideas.</p>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">1</span><span>Life, Work, and Legacy</span></h3>
                        <p className="spectral">Who was Friedrich Nietzsche? What life did he lead that led him to have the ideas that he did? On day one we’ll set the scene and contextualize what’s to come by looking at Nietzsche the man, his influences, and outline all of his major works and chronology.</p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter1.childImageSharp.gatsbyImageData}
                        alt="Nietzsche’s Life, Work, and Legacy" />
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">2</span><span>The Apollonian & Dionysian</span></h3>
                        <p className="spectral">On day two we’ll start digging deeper into Nietzsche’s core ideas. We’ll begin with his early distinction between the Apollonian and Dionysian, which acts not only as a supremely illuminating way to consider life and art, but also as a precursor to his later ideas.</p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter2.childImageSharp.gatsbyImageData}
                        alt="The Apollonian & Dionysian" />
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">3</span><span>Perspectivism</span></h3>
                        <p className="spectral">Do human beings have access to objective truth? Day three will consider Nietzsche’s fascinating theory of perspectivism, a highly sophisticated account of what truth is and how we can access it — an account that continues to excite scholars today.</p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter3.childImageSharp.gatsbyImageData}
                        alt="Nietzsche’s Perspectivism" />
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">4</span><span>Master & Slave Morality</span></h3>
                        <p className="spectral">Where do morals come from? Nietzsche’s profound contribution to answering this question will be discussed on day four, where we’ll assess his takedown of traditional values like altruism, as well as his concepts of the ascetic ideal, master morality, and slave morality.</p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter4.childImageSharp.gatsbyImageData}
                        alt="Master & Slave Morality" />
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">5</span><span>God is Dead & the Übermensch</span></h3>
                        <p className="spectral">What should we value in a Godless world — and why? Nietzsche’s attempt to provide a ‘revaluation of values’ will be discussed on day five, where we’ll consider his famous ideas that God is Dead, the eternal recurrence, and the Übermensch (superman).</p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter5.childImageSharp.gatsbyImageData}
                        alt="God is Dead & the Übermensch" />
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">6</span><span>The Will to Power</span></h3>
                        <p className="spectral">Is there a unified system that underpins Nietzsche’s thought? Well, the ‘will to power’ is a good candidate. Day six will discuss how the will to power plays a crucial role throughout Nietzsche’s writings, and summarize where scholars stand on it today.</p>
                    </div>
                    <div>
                    <GatsbyImage
                        image={data.chapter6.childImageSharp.gatsbyImageData}
                        alt="The Will to Power" />
                    </div>
                </div>
            </div>
            
            <div className="page-center small-pad mid-width text-center">
            <h2 className="small-mar">Learn Nietzsche’s Greatest Ideas in Just 6 Days</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Enroll today, and by this time next week, you’ll understand Nietzsche’s best ideas, have clarity on exactly what he was trying to say, and know the best further reading for continuing your philosophical journey.</p>
                <div className="small-width"><Checkout /></div>
            </div>
        </div>
        
        {/*Reviews*/}
        <Reviews bg="grey-background no-hover" title="Reviews for Philosophy Break Courses" toggle="secondary" />

        <div className="grey-background small-pad">
            <div className="page-center">

                <div className="large-pad-bottom mid-width text-center">
                    <h2 className="small-mar">Understand Exactly Why Nietzsche is so Influential</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Enroll today, and by this time next week, you’ll understand Nietzsche’s best ideas, have clarity on exactly what he was trying to say, and know the best further reading for continuing your philosophical journey.</p>
                    <div className="small-width">
                        <Checkout />
                    </div>
                </div>

                {/*FAQ*/}
                <div id="faq">
                    <h2 className="mid-mar-top">Frequently Asked Questions</h2>
                    <div className="two-col align-top small-mar">
                        <div>
                            <h4>Who is this course for?</h4>
                            <p className="small-grey-font">This is for anyone curious about the philosophy of Friedrich Nietzsche. You may have read some of Nietzsche’s work, or you may have never engaged with him before: either way, we’ve distilled his best ideas so you can quickly discover who he was, efficiently learn what he was trying to say, and clearly understand why his startling, provocative philosophy still carries so much influence.</p>
                        </div>
                        <div>
                            <h4>How long does it take to do the course?</h4>
                            <p className="small-grey-font">The course is delivered over six days, with a new question considered each day. Each day’s materials take about 20-30 minutes to read through, with an extra ten minutes or so recommended for reflection. You have access to course materials forever, so don’t worry if you miss a day — you can take the course at your own pace.</p>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div>
                            <h4>How is the course delivered?</h4>
                            <p className="small-grey-font">Course materials are delivered directly to your email inbox each day over six days. They are optimized for easy reading on any device — be it desktop, laptop, tablet, or mobile — and are even printable, so you can consume them however you like.</p>
                        </div>
                        <div>
                            <h4>What if I miss a day?</h4>
                            <p className="small-grey-font">If over the six days of the course you miss a day, don’t worry — you’ll have access to course materials forever, and can come back to anything at any time and take everything at your own pace. </p>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div>
                            <h4>Who created the course?</h4>
                            <p className="small-grey-font">This course is brought to you by Philosophy Break, a self-funded social enterprise dedicated to getting more people engaged with philosophy. Course content is put together by the founder of Philosophy Break, <a target="_blank" href="/about">Jack Maden</a>, who received an MA in Philosophy from the University of Southampton in 2014, and has been producing educational resources and writing about philosophy ever since. Having obtained great value researching philosophy at postgraduate level, Jack wanted to share the subject’s riches with a wider audience, and created Philosophy Break in 2018. This course is the result of years of research and refinement to make Nietzsche’s profound and important wisdom as relevant, interesting, and engaging to today’s digital world as possible.</p>
                        </div>
                        <div>
                            <h4>Where do profits from the course go?</h4>
                            <p className="small-grey-font">Philosophy Break is a self-funded social enterprise, so we put all proceeds straight back into funding our mission of engaging more people with philosophy. By purchasing a course, you help support us on that mission.</p>
                            <p className="small-grey-font">Have a question not answered here? Simply <a href="mailto:hello@philosophybreak.com">drop us an email</a>, and we’ll be happy to answer!</p>
                        </div>
                    </div>
                </div>

                <div className="large-pad mid-width text-center">
                    <h2 className="small-mar">It’s Time to Begin Your Philosophical Journey</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Enroll today, and by this time next week, you’ll understand Nietzsche’s best ideas, have clarity on exactly what he was trying to say, and know the best further reading for continuing your philosophical journey.</p>
                    <div className="small-width">
                        <Checkout />
                        <AnchorLink className="no-hover" href="#top"><button className="button secondary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>Back to Top</button></AnchorLink>
                    </div>
                </div>


            </div>
            <div className="small-pad"></div>
        </div>
    </Layout>
    </>
    )
}

export const query = graphql`{
  lbq: file(relativePath: {eq: "intro-to-nietzsche-social.png"}) {
    childImageSharp {
        gatsbyImageData(width: 1200, quality: 90, layout: CONSTRAINED)
    }
  }
  about: file(relativePath: {eq: "intro-to-nietzsche-chap1-full.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
  chapter1: file(relativePath: {eq: "Nietzsche-Chapter-1.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  chapter2: file(relativePath: {eq: "Nietzsche-Chapter-2.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  chapter3: file(relativePath: {eq: "Nietzsche-Chapter-3.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  chapter4: file(relativePath: {eq: "Nietzsche-Chapter-4.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  chapter5: file(relativePath: {eq: "Nietzsche-Chapter-5.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  chapter6: file(relativePath: {eq: "Nietzsche-Chapter-6.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
}
`

export default Page