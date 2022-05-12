import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from "../../components/topTitle"
import SubscriptionForm from '../../components/subscriptionForm'

const Page = ({ data, location }) => {
    return (
    <>
    <Seo title="About Us – Dedicated to Popularizing Philosophy" description="Philosophy Break is a social enterprise dedicated to making the wisdom of philosophy accessible and engaging for all." pathname={location.pathname} />
    <Layout>
    <Navigation bg="light-bg" />
        {/*page title*/}
        <TopTitle title="About Us" subtitle="Philosophy Break is a social enterprise dedicated to making the wisdom of philosophy accessible, engaging, and useful for all." />

        {/*page content*/}
        <div className="two-col spectral page-center">
            <div>
                <p><span className="big-letter">S</span>ince 2018, we’ve been on a mission to wrap philosophy’s best ideas in a modern package to break through the noise of everyday life, encourage critical thinking, and supplement a meaningful existence.</p>
                <p>Why? Because we believe philosophy is the antidote to a world saturated by information, and the more that people engage with philosophy, the more fulfilling their lives will be. You can learn more about our thoughts on the power of philosophy in our free, popular, <Link to="/philosophy-basics/">3-part email course on what philosopy is and how it can improve your life</Link>.</p>
                <p>Like our cause or looking to contribute? Help us spread the word by sharing Philosophy Break with your friends and family, and get in touch with us on <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram here</a>, on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter here</a>, or <a href="mailto:hello@philosophybreak.com">via email here</a>.</p>
            </div>
            <div>
                <GatsbyImage
                    image={data.about.childImageSharp.gatsbyImageData}
                    alt="Philosophy Break" loading="eager" />
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
                        <p><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/McAuliffeSteph">Stephanie McAuliffe</a><span class="small-grey-font">Education Advisor</span></p>
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

        <SubscriptionForm />
    </Layout>
    </>
    )
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

export default Page