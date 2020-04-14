import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import TopTitle from "../../components/topTitle"
import { SubscriptionForm } from '../../components/subscriptionForm'
import PanelReadingList from '../../components/panelReadingList'
import WatermarkBreak from "../../components/watermarkBreak"
import PanelArticleList from "../../components/panelArticleList"

export default ({ data, location }) => {
    return (
        <>
        <SEO title="About Us – Engaging People with Philosophy" description="Philosophy Break's mission is to get more people engaged with philosophy. Our aim is to cultivate curiosity, encourage critical thought, and supplement a meaningful existence." pathname={location.pathname} />
        <Layout>
            {/*page background color*/}
            <div style={{backgroundColor: '#f8f8f8'}}>
            
                {/*page title*/}
                <TopTitle title="What is Philosophy Break?" subtitle="Philosophy Break is a clearing in your cluttered newsfeed, home to the best ideas, questions, and quotes in philosophy." />

                {/*page content*/}
                <div id="break-start" className="page-center">
                    <Img fluid={data.about.childImageSharp.fluid} style={{margin: '2.2em 0 2em'}} alt="Philosophy Break" />
                    <h2>Our mission</h2>
                    <p>Philosophy Break was created in 2018 by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-maden/">Jack Maden</a> with a simple mission: to get more people engaged with philosophy. </p>
                    <p>Why? Because we believe philosophy is the antidote to a world saturated by information — and that the more people engage with philosophy, the more fulfilling their lives will be.</p>
                    <h2>The value of living philosophically</h2>
                    <p>Why is there something rather than nothing? What responsibilities do we have towards the world and each other? What is consciousness? What is matter? Why are we here? Are our lives significant when all of us will die?</p>
                    <p>We believe it is only by acknowledging and thoughtfully facing up to such questions that people can live authentically, cultivate meaningful existences, and fully realize their human potential.</p>
                    <p>By engaging with the ideas of great thinkers throughout history, we're empowered to think for ourselves — be it on matters of faith and existence, how to make a better world, or simply working out what's worth pursuing in life.</p>
                    <p>For as Socrates, <Link to="/articles/socrates-on-what-we-know/">the infamous martyr of philosophy</Link>, declared:</p>
                    <blockquote><p>"The unexamined life is not worth living."</p></blockquote>
                    <h2>Get involved</h2>
                    <p>To disrupt the noise and keep your mind curious, be sure to <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">follow Philosophy Break on Instagram</a>, and subscribe to weekly breaks via email below.</p>
                    <p>If you're looking to learn more about philosophy, our article on <Link to="/articles/bertrand-russell-why-philosophy-matters/">Bertrand Russell discussing why philosophy matters</Link>, as well as our <Link to="/reading-lists/introduction-to-philosophy/">reading list on the best introductions to philosophy</Link>, are good places to start.</p>
                    <p>Like our cause or looking to contribute? Help us spread the word by sharing Philosophy Break with your friends and family, and get in touch with us on Instagram <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">here</a> or via email <a href="mailto:hello@philosophybreak.com">here</a>.</p>
                </div>
                
                <WatermarkBreak />

            {/*end page background color*/}
            </div>

            <SubscriptionForm />
            <PanelArticleList />
            <PanelReadingList />
            
            {/*extra padding pre-footer*/}
            <div className="grey-background" style={{paddingBottom: '0px'}}></div>
        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        about: file(relativePath: {eq: "about-phones.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`