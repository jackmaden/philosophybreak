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
        <SEO title="About Us – Engaging People with Philosophy" description="Philosophy Break is a social enterprise dedicated to getting more people engaged with philosophy. Our aim is to promote the ideas of humanity's best minds to cultivate curiosity, engender clarity around life's big questions, and ultimately empower as many people as possible to fully realize their human potential." pathname={location.pathname} />
        <Layout>
            {/*page background color*/}
            <div style={{backgroundColor: '#f2f3f4'}}>
            
                {/*page title*/}
                <TopTitle title="What is Philosophy Break?" subtitle="Philosophy Break is a social enterprise dedicated to getting more people engaged with philosophy. Our aim is to promote the ideas of humanity's best minds to cultivate curiosity, engender clarity around life's big questions, and ultimately empower as many people as possible to fully realize their human potential." />

                {/*page content*/}
                <div id="break-start" className="page-center">
                    <p>The addictive nature of the digital world afflicts many of us. The relentless torrent of information saturates our attention spans. But life is finite, and the things we give attention to define our lives. It's crucial to break free from the turbulent current and come up for air.</p>
                    <p>How can we best spend our lives on earth? What makes you happy? What gives you purpose? We believe philosophy is the antidote to a world saturated by information, and that the more people engage with philosophy, the more fulfilling their lives will be.</p>
                    <p>Philosophy Break wraps philosophy’s best ideas, quotes, and questions in a modern package to break through the noise of everyday life, encourage critical thinking, and supplement a meaningful existence.</p>
                </div>
                <div className="white-background" style={{marginTop: '48px'}}>
                    <div id="break-start" className="page-center text-center" style={{padding: "48px 0 12px"}}>
                        <h3>Advisory board</h3>
                        <div className="separator"></div>
                        <div className="advisory">
                            <div className="member">
                                <Img fluid={data.jack.childImageSharp.fluid} alt="Jack Maden" />
                                <p>Jack Maden<span class="large-grey-font">Founder</span></p>
                            </div>
                            <div className="member">
                                <Img fluid={data.steph.childImageSharp.fluid} alt="Stephanie McAuliffe" />
                                <p>Stephanie McAuliffe<span class="small-grey-font">Education Advisor</span></p>
                            </div>
                            <div className="member">
                                <Img fluid={data.josh.childImageSharp.fluid} alt="Josh Brewin" />
                                <p>Josh Brewin<span class="small-grey-font">Commercial Advisor</span></p>
                            </div>
                            <div className="member">
                                <Img fluid={data.bayo.childImageSharp.fluid} alt="Bayo Adeoshun" />
                                <p>Bayo Adeoshun<span class="small-grey-font">Social Advisor</span></p>
                            </div>
                            <div className="member">
                                <Img fluid={data.sophie.childImageSharp.fluid} alt="Sophie Dundovic" />
                                <p>Sophie Dundovic<span class="small-grey-font">Economics Advisor</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="break-start" className="page-center">
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
        jack: file(relativePath: {eq: "jack-maden.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        josh: file(relativePath: {eq: "josh.png"}) {
            childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        sophie: file(relativePath: {eq: "sophie.png"}) {
            childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        steph: file(relativePath: {eq: "steph.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        bayo: file(relativePath: {eq: "bayo.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`