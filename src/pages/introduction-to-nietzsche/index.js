import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image";

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import { NietzscheForm } from "../../components/nietzscheForm"
import Reviews from "../../components/reviewsLBQ"

const Page = ({ data, location }) => {
    
    const imagePath = getSrc(data.lbq)

    return (
    <>
    <Seo title="Introduction to Nietzsche and His 5 Greatest Ideas: 6-Day Course" description="Learn everything you need to know about Friedrich Nietzsche in just six days. This introductory course distills Nietzsche’s best and most misunderstood ideas, from God is dead to the Übermensch." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple bg="light-bg" />
        {/*page title*/}
        <div className="top-title grey-background no-mar-bottom small-pad-bottom" id="top">
            <div className="two-col page-center">
                <div>
                    <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>BITE-SIZE COURSE</span><div className="separator course"></div>
                    <h1 className="smaller">Introduction to Nietzsche and His 5 Greatest Ideas: 6-Day Course</h1>
                    <h5 style={{"color": "#ff3650"}}><i>COMING SOON</i></h5>
                    <p className="spectral">Register your interest for our upcoming bite-size course on Friedrich Nietzsche. Simply enter your email below to stay notified on the course’s production — and qualify for a special discount once it launches.</p>
                    <NietzscheForm />
                </div>
                <div>
                    <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="Introduction to Nietzsche" />
                </div>
            </div>
        </div>
        {/*Chapters*/}
        <div id="look-inside"  className="grey-background small-pad">
            <div className="page-center">
                <h2 className="small-pad text-center">What the Course Will Deliver to Your Inbox Over 6 Days:</h2>
                <div className="four-col">
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
            <div className="two-col page-center">
                <div className="small-mar">
                    <h3 className="flex-end"><span className="spectral big-letter">1</span><span>Life, Work, and Legacy</span></h3>
                    <p className="small-grey-font">Who was Friedrich Nietzsche? What life did he lead that led him to have the ideas that he did? On day one we’ll set the scene and contextualize what’s to come by looking at Nietzsche the man, his influences, and outline all of his major works and chronology. </p>
                </div>
                <div className="small-mar">
                    <h3 className="flex-end"><span className="spectral big-letter">2</span><span>The Apollonian & Dionysian</span></h3>
                    <p className="small-grey-font">On day two we’ll start digging deeper into Nietzsche’s core ideas. We’ll begin with his early distinction between the Apollonian and Dionysian, which acts not only as a supremely illuminating way to consider life and art, but also as a precursor to his later ideas. </p>
                </div>
            </div>
            <div className="two-col page-center">
                <div className="small-mar">
                    <h3 className="flex-end"><span className="spectral big-letter">3</span><span>Perspectivism</span></h3>
                    <p className="small-grey-font">Do human beings have access to objective truth? Day three will consider Nietzsche’s fascinating theory of perspectivism, a highly sophisticated account of what truth is and how we can access it — an account that continues to excite scholars today. </p>
                </div>
                <div className="small-mar">
                    <h3 className="flex-end"><span className="spectral big-letter">4</span><span>Master & Slave Morality</span></h3>
                    <p className="small-grey-font">Where do morals come from? Nietzsche’s profound contribution to answering this question will be discussed on day four, where we’ll assess his takedown of traditional values like altruism, as well as his concepts of the ascetic ideal, master morality, and slave morality.</p>
                </div>
            </div>
            <div className="two-col page-center">
                <div className="small-mar">
                    <h3 className="flex-end"><span className="spectral big-letter">5</span><span>God is Dead & the Übermensch</span></h3>
                    <p className="small-grey-font">What should we value in a Godless world — and why? Nietzsche’s attempt to provide a ‘revaluation of values’ will be discussed on day five, where we’ll consider his famous ideas that God is Dead, the eternal recurrence, and the Übermensch (superman). </p>
                </div>
                <div className="small-mar">
                    <h3 className="flex-end"><span className="spectral big-letter">6</span><span>The Will to Power</span></h3>
                    <p className="small-grey-font">Is there a unified system that underpins Nietzsche’s thought? Well, the ‘will to power’ is a good candidate. Day six will discuss how the will to power plays a crucial role throughout Nietzsche’s writings, and summarize where scholars stand on it today. </p>
                </div>
            </div>
            <div className="page-center small-pad mid-width text-center">
            <h2 className="small-mar">Register Interest Now to Secure Your Launch Discount</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Simply enter your email and we’ll keep you updated on the course’s production and grant you a special discount as soon as it launches.</p>
                <div className="small-width"><NietzscheForm /></div>
            </div>
        </div>
        
        {/*Reviews*/}
        <Reviews bg="grey-background no-hover" title="Reviews for Philosophy Break Courses" toggle="secondary" />

        <div className="grey-background">
            <div className="page-center small-pad mid-width text-center">
                <h2 className="small-mar">It’s Time to Begin Your Philosophical Journey</h2>
                <div className="separator"></div>
                <p className="small-grey-font">Simply enter your email and we’ll keep you updated on the course’s production and grant you a special discount as soon as it launches.</p>
                <div className="small-width">
                    <NietzscheForm />
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
}
`

export default Page