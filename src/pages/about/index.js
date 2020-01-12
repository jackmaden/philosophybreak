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

            {/*page title*/}
            <TopTitle title="What is Philosophy Break?" />

            {/*page content*/}
            <div id="break-start" className="page-center" style={{marginBottom: 48}}>
                <p className="large-grey-font">Philosophy Break is a clearing in your cluttered newsfeed. Each break takes only a few minutes to read, and is designed to spark your philosophical curiosity — from how best to live our lives, to the ultimate nature of the worlds we live in.</p>
                <Img fluid={data.about.childImageSharp.fluid} style={{margin: '2.2em 0 2em'}} alt="Philosophy Break" />
                <h2>Our mission</h2>
                <p>Philosophy Break was created in 2018 by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-maden/">Jack Maden</a> with a simple mission: to get more people engaged with philosophy.</p>
                <p>Why? Because we believe philosophy is the meaningful antidote to a world saturated by meaningless information — and that the more people engage with philosophy, the more fulfilling their lives will be.</p>
                <h2>The value of philosophy</h2>
                <p>Why is there something rather than nothing? How can we live meaningful lives when all of us will die? What responsibilities do we have towards the world and each other? Is there a God? What is matter? What is consciousness? Why are we here?</p>
                <p>The point of asking such questions is not necessarily to conclusively answer them, but rather to provide perspective and meaning for the one who asks.</p> 
                <p>By thoughtfully dwelling on subjects larger than ourselves, <Link to="/articles/bertrand-russell-why-philosophy-matters/">so the great Bertrand Russell argued</Link>, we recognize how little we <i>really</i> know about anything.</p>
                <p>The uncertainty we feel in the face of such contemplation is fertile ground. Through it, we attain a humble tranquility that opens our minds beyond the "tyranny of custom", and equips us with the tools to consciously and actively <i>decide</i> what's important in life for ourselves.</p>
                <h2>Living philosophically</h2>
                <p>Reading the works of great thinkers on life, death, and what it all means is extremely rewarding, and philosophy as a historical subject has much to offer — but it is philosophy as an <i>act</i> that we seek to popularize.</p>
                <p><i>To philosophize</i> means asking 'why', it means challenging assumptions, it means harnessing your curiosity to throw off inherited dogma and forge your own path.</p>
                <p>We believe it is only by living philosophically that people can cultivate meaningful existences and fully realize their potential. For as Socrates, <Link to="/articles/socrates-on-what-we-know/">the infamous martyr of philosophy</Link>, declared:</p>
                <blockquote><p>"The unexamined life is not worth living."</p></blockquote>
                <h2>Get involved</h2>
                <p>To disrupt the noise and keep your mind curious, be sure to <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">follow Philosophy Break on Instagram</a>, and subscribe to our newsletter below.</p>
                <p>Like our cause? Help us spread the word by sharing Philosophy Break with your friends and family, to make newsfeeds everywhere a more philosophical place.</p>
            </div>
            
            <WatermarkBreak />

            {/*post-about content, wrapped in div to take advantage of :first-child grey background css*/}
            <div>
            <SubscriptionForm />
            <PanelArticleList />
            <PanelReadingList />
            </div>
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