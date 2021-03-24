import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import {useSpring, animated} from 'react-spring'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import { ScrollProgressBar } from '../components/scrollProgressBar'
import { SubscriptionForm } from '../components/subscriptionForm'
import { WindowHeightWrapper } from '../components/windowHeightWrapper'
import WatermarkBreak from "../components/watermarkBreak"
import PanelLBQ from '../components/panelLBQ' 
import PanelReadingList from '../components/panelReadingList'
import PanelAboutUs from '../components/panelAboutUs'
import MailchimpPopUp from "../components/mailchimpPopUp"


const ArticlePost = ({ data, location }) => {
  const post = data.markdownRemark
  const { edges } = data.allMarkdownRemark
  //declare react spring (it's an object, has options within it)
  const dropIn = useSpring({opacity: 1, bottom: typeof window !== 'undefined' && window.window.innerWidth < 1020 ? '67px' : '26px', delay: 200, from: {opacity: 0, bottom: '200px'}})
  const fadeIn = useSpring({opacity: 1, delay: 950, from: {opacity: 0}})
  const imagePath = getSrc(post.frontmatter.image)
  return <>
  <SEO title={post.frontmatter.title} description={post.frontmatter.description} image={imagePath} pathname={post.fields.slug} article/>
  <MailchimpPopUp />
  <Layout>
  <Navigation />
    <ScrollProgressBar />
    {/*article title*/}
    <WindowHeightWrapper className="title">
      <GatsbyImage
        image={post.frontmatter.image.childImageSharp.gatsbyImageData}
        className="title-img"
        alt={post.frontmatter.imageAlt} />
      <div className="darkener"></div>
      {/*react spring fade in*/}
      <animated.div style={dropIn} className="page-center title-center mid-width">
        <h1>{post.frontmatter.title}</h1>
        <div className="separator"></div>       
        <p className="description">{post.frontmatter.description}</p>
        <div className="time" style={{position: "relative", zIndex: "1"}}><GatsbyImage
          image={post.frontmatter.authorPic.childImageSharp.gatsbyImageData}
          style={{display: "inline-block"}}
          alt={post.frontmatter.author} />By <a href={post.frontmatter.authorLink} target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: "#8c8c8c" }}>{post.frontmatter.author}</a>&nbsp;&nbsp;|&nbsp;&nbsp;{post.frontmatter.date}</div>
      </animated.div>
      <animated.p className="time break page-center" style={fadeIn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg><AnchorLink href="#break-start" style={{ textDecoration: "none" }}><span className="bottom-blue-border">{post.timeToRead} MIN BREAK&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></animated.p>  
    </WindowHeightWrapper>
    {/*article content*/}
    <div id="break-start" className="page-center" style={{marginBottom: 48}} dangerouslySetInnerHTML={{ __html: post.html }} />
    
    <WatermarkBreak />

    {/*post-article*/}
    <div id="post-article-height">
      <PanelLBQ />
      <div className="grey-background large-pad">
        <div className="page-center">
          <span className="text-center">
            <h2>Take Another Break</h2>
            <div className="separator" style={{marginBottom: "2em"}}></div>
            <p className="small-grey-font mid-width">Each break takes only a few minutes to read, and is crafted to expand your mind and spark your philosophical curiosity.</p>
          </span>
          {edges.filter(edge => edge.node.fields.slug !== location.pathname).slice(0, 4).map(edge => {
              //curly brackets around variable is a destructuring assignment - e.g. the below equals edge.node.frontmatter & also edge.node.timeToRead
              //using this rather than component to filter out the current article. In future can build out a 'related posts' section using this logic
              const {frontmatter, timeToRead, fields} = edge.node;
              return (
                <div className="article" key={frontmatter.date}>
                    <Link to={fields.slug}>
                        <GatsbyImage image={frontmatter.image.childImageSharp.gatsbyImageData} />
                        <div className="article-info">
                            <h2>{frontmatter.title}</h2>
                            <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                        </div>
                    </Link>
                </div>
              );
          })}
          <p className="text-center"><span className="shadow"><Link className="button secondary" to="/articles"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>View All Breaks</Link></span></p>
        </div>
      </div>
      <SubscriptionForm />
      <PanelReadingList />
      <PanelAboutUs />
    </div>
  </Layout>
  </>;
}

export const query = graphql`query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    fields {
      slug
    }
    timeToRead
    frontmatter {
      title
      description
      date(formatString: "MMMM YYYY")
      author
      authorPic {
        childImageSharp {
          gatsbyImageData(width: 22, layout: CONSTRAINED)
        }
      }
      authorLink
      image {
        childImageSharp {
          gatsbyImageData(height: 1000, quality: 70, layout: FULL_WIDTH)
        }
      }
      imageAlt
    }
  }
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        frontmatter {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(height: 230, layout: FULL_WIDTH)
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
}
`

export default ArticlePost