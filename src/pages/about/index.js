import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from "../../components/topTitle"
import { SubscriptionForm } from '../../components/subscriptionForm'
import PanelReadingList from '../../components/panelReadingList'
import PanelArticleList from "../../components/panelArticleList"
import PanelAboutUs from "../../components/panelAboutUs"
import PanelLBQ from "../../components/panelLBQ"

export default ({ data, location }) => {
    return <>
    <SEO title="About Us – Dedicated to Popularizing Philosophy" description="Philosophy Break is a social enterprise dedicated to getting more people engaged with philosophy. Our aim is to promote the ideas of humanity's best minds to cultivate curiosity, engender clarity around life's big questions, and ultimately empower as many people as possible to fully realize their human potential." pathname={location.pathname} />
    <Layout>
    <Navigation bg="light-bg" />
        {/*page title*/}
        <TopTitle title="About Us" subtitle="Philosophy Break is a social enterprise dedicated to getting more people engaged with philosophy." />

        {/*page content*/}
        <div className="two-col spectral page-center">
            <div>
                <p><span className="big-letter">S</span>ince 2018, we've been on a mission to wrap philosophy's best ideas in a modern package to break through the noise of everyday life, encourage critical thinking, and supplement a meaningful existence.</p>
                <p>Why? Because we believe philosophy is the antidote to a world saturated by information, and that the more people engage with philosophy, the more fulfilling their lives will be. <Link to="/what-is-philosophy-why-is-it-important-today/">Learn more about our thoughts on the power of philosophy here</Link>.</p>
                <p>Like our cause or looking to contribute? Help us spread the word by sharing Philosophy Break with your friends and family, and <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">get in touch with us on Instagram here</a> or <a href="mailto:hello@philosophybreak.com">via email here</a>.</p>
            </div>
            <div>
                <GatsbyImage
                    image={data.about.childImageSharp.gatsbyImageData}
                    alt="Philosophy Break" />
            </div>
        </div>
        <div className="mid-pad">
            <div className="page-center text-center" style={{padding: "48px 0 12px"}}>
                <h3>Advisory Board</h3>
                <div className="separator"></div>
                <div className="advisory">
                    <div className="member">
                        <GatsbyImage image={data.jack.childImageSharp.gatsbyImageData} alt="Jack Maden" />
                        <p><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jackmaden_">Jack Maden</a><span class="small-grey-font">Founder & Director</span></p>
                    </div>
                    <div className="member">
                        <GatsbyImage
                            image={data.steph.childImageSharp.gatsbyImageData}
                            alt="Stephanie McAuliffe" />
                        <p><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/McSmalliffe">Stephanie McAuliffe</a><span class="small-grey-font">Education Advisor</span></p>
                    </div>
                    <div className="member">
                        <GatsbyImage image={data.josh.childImageSharp.gatsbyImageData} alt="Josh Brewin" />
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josh-brewin-7b401648/">Josh Brewin</a><span class="small-grey-font">Commercial Advisor</span></p>
                    </div>
                    <div className="member">
                        <GatsbyImage image={data.bayo.childImageSharp.gatsbyImageData} alt="Bayo Adeoshun" />
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bayo92/">Bayo Adeoshun</a><span class="small-grey-font">Social Advisor</span></p>
                    </div>
                    <div className="member">
                        <GatsbyImage image={data.sophie.childImageSharp.gatsbyImageData} alt="Sophie Dundovic" />
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sophie-dundovic-63b08566/">Sophie Dundovic</a><span class="small-grey-font">Economics Advisor</span></p>
                    </div>
                    <div className="member">
                        <GatsbyImage image={data.anis.childImageSharp.gatsbyImageData} alt="Anís Gammage" />
                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anisgammage/">Anís Gammage</a><span class="small-grey-font">Strategy Advisor</span></p>
                    </div>
                </div>
            </div>
        </div>
            
        {/*post-page content*/}
        <PanelLBQ />
        <PanelArticleList />
        <SubscriptionForm />
        <PanelReadingList />
        <PanelAboutUs />
    </Layout>
    </>;
}

export const query = graphql`{
  about: file(relativePath: {eq: "about-mob.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  jack: file(relativePath: {eq: "jackmaden.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 260, height: 260, quality: 90, layout: CONSTRAINED)
    }
  }
  josh: file(relativePath: {eq: "josh.png"}) {
    childImageSharp {
      gatsbyImageData(width: 260, height: 260, quality: 90, layout: CONSTRAINED)
    }
  }
  sophie: file(relativePath: {eq: "sophie.png"}) {
    childImageSharp {
      gatsbyImageData(width: 260, height: 260, quality: 90, layout: CONSTRAINED)
    }
  }
  steph: file(relativePath: {eq: "steph.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 260, height: 260, quality: 90, layout: CONSTRAINED)
    }
  }
  bayo: file(relativePath: {eq: "bayo.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 260, height: 260, quality: 90, layout: CONSTRAINED)
    }
  }
  anis: file(relativePath: {eq: "anis.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 260, height: 260, quality: 90, layout: CONSTRAINED)
    }
  }
}
`