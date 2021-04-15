import React from "react"
import { graphql } from "gatsby"

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from '../../components/topTitle'
import BannerReadingList from '../../components/bannerReadingList'
import { SubscriptionForm } from '../../components/subscriptionForm'
import PanelArticleList from "../../components/panelArticleList"
import WatermarkBreak from "../../components/watermarkBreak"
import PanelLBQ from "../../components/panelLBQ"


const Page = ({ data, location }) => {
    return (
    <>
    <Seo title="Reading Lists – Essential Books of Philosophy" description="We've compiled reading lists of the most essential, compelling, and accessible works and books of particular philosophers and philosophical subjects." pathname={location.pathname} />
    <Layout>
    <Navigation bg="light-bg" />

        {/*page background color*/}
        <div className="grey-background">

            {/*page title*/}
            <TopTitle class='' title="Reading Lists" subtitle="Explore our curated reading lists of the best and most important works of particular philosophers and philosophical subjects." />
            
            {/*page content*/}
            <div className="page-center">
                <BannerReadingList title="An Introduction to Philosophy" number="5" link="/reading-lists/introduction-to-philosophy/" img={data.introduction.childImageSharp.gatsbyImageData} alt="introduction to philosophy reading list" />
                
                <BannerReadingList title="The History of Western Philosophy" number="5" link="/reading-lists/history-of-western-philosophy/" img={data.whistorylist.childImageSharp.gatsbyImageData} alt="history of western philosophy reading list" />

                <BannerReadingList title="Friedrich Nietzsche" number="7" link="/reading-lists/friedrich-nietzsche/" img={data.nietzsche.childImageSharp.gatsbyImageData} alt="Friedrich Nietzsche reading list" />
                
                <BannerReadingList title="Consciousness" number="5" link="/reading-lists/consciousness/" img={data.consciousnesslist.childImageSharp.gatsbyImageData} alt="consciousness reading list" />

                <BannerReadingList title="Metaphysics" number="10" link="/reading-lists/metaphysics/" img={data.metaphysics.childImageSharp.gatsbyImageData} alt="metaphysics reading list" />

                <BannerReadingList title="Epistemology" number="9" link="/reading-lists/epistemology/" img={data.epistemology.childImageSharp.gatsbyImageData} alt="epistemology reading list" />

                <BannerReadingList title="Free Will" number="7" link="/reading-lists/free-will/" img={data.freewill.childImageSharp.gatsbyImageData} alt="free will reading list" />

                <BannerReadingList title="Ethics and Morality" number="9" link="/reading-lists/ethics-and-morality/" img={data.ethics.childImageSharp.gatsbyImageData} alt="ethics and morality reading list" />

                <BannerReadingList title="Political Philosophy" number="14" link="/reading-lists/political-philosophy/" img={data.politics.childImageSharp.gatsbyImageData} alt="political philosophy reading list" />

                <BannerReadingList title="Philosophy of Language" number="7" link="/reading-lists/philosophy-of-language/" img={data.language.childImageSharp.gatsbyImageData} alt="philosophy of language reading list" />

            </div>
        
            <WatermarkBreak />

        {/*end page background color*/}
        </div>

        {/*post-reading list content*/}
        <PanelLBQ />
        <PanelArticleList />
        <SubscriptionForm />
    </Layout>
    </>
    )
}

export const query = graphql`{
  introduction: file(relativePath: {eq: "introduction.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  consciousnesslist: file(relativePath: {eq: "consciousness-list.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  whistorylist: file(relativePath: {eq: "whistorylist.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  nietzsche: file(relativePath: {eq: "nietzsche.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  metaphysics: file(relativePath: {eq: "metaphysics.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  epistemology: file(relativePath: {eq: "epistemology.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  freewill: file(relativePath: {eq: "freewill.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  ethics: file(relativePath: {eq: "ethics.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  politics: file(relativePath: {eq: "politics.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  language: file(relativePath: {eq: "language.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  philosophybreak: file(relativePath: {eq: "philosophybreak.png"}) {
    childImageSharp {
      gatsbyImageData(width: 22, layout: CONSTRAINED)
    }
  }
}
`

export default Page