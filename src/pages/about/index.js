import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from "../../components/topTitle"
import SubscriptionForm from '../../components/subscriptionForm'
import JackHeadshot from "../../components/jackHeadshot"

const Page = ({ data, location }) => {
    return (
    <>
    <Seo title="About Us – Dedicated to Popularizing Philosophy" description="Philosophy Break is an online social enterprise dedicated to making the wisdom of philosophy accessible and engaging for all." pathname={location.pathname} />
    <Layout>
    <Navigation bg="light-bg" />

      {/*DISABLE MEDIAVINE ADS*/}
      <div id="mediavine-settings" data-blocklist-all="1" ></div>

      {/*page background color*/}
      <div className="grey-background">

        {/*page title*/}
        <TopTitle title="About Us" subtitle="Founded in 2018, Philosophy Break is an online social enterprise dedicated to making the wisdom of philosophy accessible, engaging, and useful for all." />

        {/*page content*/}


        <div className="two-col mid-pad big-2-col page-center">
            <div>
                <h3>The wisdom of philosophy can be life-changing. We’re here to help you unlock it.</h3>
                <div className="spectral">
                  <p><span className="big-letter">W</span>e believe philosophy is the antidote to a world saturated by information. While there is no guidebook for life, philosophers have had incredibly insightful things to say about existence for thousands of years. We want to shine a light on those nuggets of wisdom, because we think they can help unlock immense meaning, fulfillment, and clarity for people. You can learn more about our views on the power of philosophy in our free, <Link to="/philosophy-basics/">3-lesson email course on what philosopy is and how it can improve your life</Link>.</p>
                  <p><strong>Like our cause or looking to contribute?</strong> We’d love to hear from you. Get in touch with us on <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram here</a>, on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter here</a>, or <a href="mailto:hello@philosophybreak.com">via email here</a>.</p>
                </div>
            </div>
            <div className="mobile-tablet-no-display">
                <GatsbyImage
                    image={data.about.childImageSharp.gatsbyImageData}
                    alt="Philosophy Break" loading="eager" />
            </div>
        </div>
        </div>
        <div className="large-pad">
          <div className="mid-width mobile-padding">
                <div className="text-center">
                  <h3>Unlocking the wisdom of philosophy: a quick note from the founder of Philosophy Break, Jack Maden</h3>
                  <div className="separator"></div>
                </div>
                <div className="spectral"> 
                  <blockquote><p>Philosophy, though wonderful, can be dense and confusing. For those unfamiliar with the subject, it can also be very difficult to know where to start. So, having received great value from studying philosophy for 15+ years (picking up a master’s degree along the way), I founded Philosophy Break in 2018 to distill my meandering philosophical education into ultra-concise online learning materials, available to all.</p></blockquote>
                  <p>Fast forward to today, and Philosophy Break receives millions of online visits annually from people looking to add the mind-opening wisdom of philosophy to their lives via our <Link to="/courses/">online philosophy courses</Link>, our <Link to="/reading-lists/">philosophy reading lists</Link>, our <Link to="/articles/">introductory philosophy articles</Link>, and our <Link to="/weekly-emails/">weekly emails distilling philosophy’s most powerful ideas</Link>.</p>
                  <p>I’m thrilled that our content strikes a chord with so many thinkers from around the world — and I hope you’ll find value in the project, too.</p>
                  <p>If you have any questions or feedback or just want to say hello, you can find me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jackmaden_">Twitter here</a>, and reach out any time <a href="mailto:hello@philosophybreak.com">via email here</a>. I’d love to hear from you. Until then, happy philosophizing!</p>
                </div>   
                <JackHeadshot /> 
            </div>             
        </div>


        {/*end page background color*/}
        
            
        {/*post-page content*/}

        <SubscriptionForm />
    </Layout>
    </>
    )
}

export const query = graphql`{
  about: file(relativePath: {eq: "pb-basics.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`

export default Page