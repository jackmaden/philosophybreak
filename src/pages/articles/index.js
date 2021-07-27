import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from "../../components/topTitle"
import { SubscriptionForm } from '../../components/subscriptionForm'
import PanelReadingList from '../../components/panelReadingList'
import WatermarkBreak from "../../components/watermarkBreak"
import PanelLBQ from "../../components/panelLBQ"

const Articles = ({ data, location }) => {
    const { edges } = data.allMarkdownRemark

        //change intro philosophy article image based on time of day
        const myDate = new Date() //get device date
        const hrs = myDate.getHours() //get hours from date
    
        let pic = data.default.childImageSharp.gatsbyImageData // variable for image & set default
    
        if (hrs < 12) { //if morning
            pic = data.morning.childImageSharp.gatsbyImageData
        }
        else if (hrs >= 12 && hrs < 17) { //if afternoon
            pic = data.default.childImageSharp.gatsbyImageData
        }
        else if (hrs >= 17 && hrs < 24) { //if evening
            pic = data.evening.childImageSharp.gatsbyImageData
        }
    return (
    <>
    <Seo title="Latest Breaks – Philosophy Articles that Make You Think" description="Take a philosophy break now: each break takes only a few minutes to read, and is designed to spark curiosity about a particular talking point in philosophy." pathname={location.pathname} />
    
    <Layout>
    <Navigation bg="light-bg" />
    
        {/*page background color*/}
        <div className="grey-background">

            {/*page title*/}
            <TopTitle class='' title="Latest Breaks" subtitle="Each break takes only a few minutes to read, and is crafted to expand your mind and spark your philosophical curiosity." />

            {/*page content*/}
            <div className="page-center">
                {/*first 4 articles*/}
                    {edges.slice(0, 4).map(edge => {
                        //curly brackets around variable is a destructuring assignment - e.g. the below equals edge.node.frontmatter & also edge.node.timeToRead
                        const {frontmatter, timeToRead, fields} = edge.node;
                        return (
                            <div className="article" key={frontmatter.date}>
                                <Link to={fields.slug}>
                                    <GatsbyImage image={frontmatter.imageSeo.childImageSharp.gatsbyImageData} alt={frontmatter.imageAlt} />
                                    <div className="article-info">
                                        <h2>{frontmatter.title}</h2>
                                        <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                {/*intro article - wrapping in a p to take advantage of article.home first-of-type and also not to disrupt the margin-left of even elements for .article classes */}
                <p style={{margin: "0"}}>
                    <div className="article home">
                        <Link to="/what-is-philosophy-why-is-it-important-today/">
                          <GatsbyImage image={pic} alt="What is philosophy?" />
                            <div className="article-info">
                              <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>GET STARTED</p>
                              <h2>What is Philosophy, and Why is it Important Today?</h2>
                              <p className="spectral">Your quick guide to what philosophy involves, why exploring it could make a significant difference to your life, and next steps for learning about its essential ideas.</p>
                            </div>
                        </Link>
                    </div>
                  </p>
                  {/*remaining articles*/}
                    {edges.slice(4).map(edge => {
                          const {frontmatter, timeToRead, fields} = edge.node;
                          return (
                              <div className="article" key={frontmatter.date}>
                                  <Link to={fields.slug}>
                                      <GatsbyImage image={frontmatter.imageSeo.childImageSharp.gatsbyImageData} alt={frontmatter.imageAlt} />
                                      <div className="article-info">
                                          <h2>{frontmatter.title}</h2>
                                          <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                                      </div>
                                  </Link>
                              </div>
                          );
                      })}

            {/*end page content*/}
            </div>
            
            <WatermarkBreak />
        
        {/*end page background color*/}
        </div>
        <PanelLBQ />
        <PanelReadingList />
        <SubscriptionForm />
        
    </Layout>
    </>
    )
}

export const query = graphql`query ArticleList {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        frontmatter {
          title
          description
          imageAlt
          imageSeo {
            childImageSharp {
              gatsbyImageData(width: 240, height: 230, layout: CONSTRAINED)
            }
          }
          date
        }
        timeToRead
        fields {
          slug
        }
      }
    }
  }
  default: file(relativePath: {eq: "philosophy-break.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, height: 600, layout: CONSTRAINED)
    }
  }
  morning: file(relativePath: {eq: "morning.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, height: 600, layout: CONSTRAINED)
    }
  }
  evening: file(relativePath: {eq: "evening.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, height: 600, layout: CONSTRAINED)
    }
  }
  file(relativePath: {eq: "philosophybreak.png"}) {
    childImageSharp {
      gatsbyImageData(width: 20, height: 20, layout: FIXED)
    }
  }
}
`

export default Articles