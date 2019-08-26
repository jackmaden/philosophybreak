import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {useSpring, animated} from 'react-spring'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import { ScrollProgressBar } from '../components/scrollProgressBar'
import { SubscriptionForm } from '../components/subscriptionForm'
import { WindowHeightWrapper } from '../components/windowHeightWrapper'
import PanelReadingList from '../components/panelReadingList'

const ArticlePost = ({ data, location }) => {
  const post = data.markdownRemark
  const { edges } = data.allMarkdownRemark
  //declare react spring (it's an object, has options within it)
  const dropIn = useSpring({opacity: 1, bottom: '67px', delay: 200, from: {opacity: 0, bottom: '200px'}})
  const fadeIn = useSpring({opacity: 1, delay: 450, from: {opacity: 0}})
  return (
      <>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} image={post.frontmatter.image.childImageSharp.sizes.src} pathname={post.fields.slug} article/>
      <Layout>
        <ScrollProgressBar />
        {/*article title*/}
        <WindowHeightWrapper className="title">
          <Img className="title-img" fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.imageAlt} />
          <div className="darkener"></div>
          {/*react spring fade in*/}
          <animated.div style={dropIn} className="page-center title-center">
            <h1>{post.frontmatter.title}</h1>
            <div className="separator"></div>       
            <p className="description">{post.frontmatter.description}</p>
            <div className="time"><Img style={{display: "inline-block"}} fluid={post.frontmatter.authorPic.childImageSharp.fluid} alt={post.frontmatter.author}/>By <a href={post.frontmatter.authorLink} target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: "#8c8c8c" }}>{post.frontmatter.author}</a>&nbsp;&nbsp;|&nbsp;&nbsp;{post.frontmatter.date}</div>
          </animated.div>
          <animated.p className="time break page-center" style={fadeIn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg><AnchorLink href="#break-start" style={{ textDecoration: "none" }}><span className="bottom-blue-border">{post.timeToRead} MIN BREAK&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></animated.p>  
        </WindowHeightWrapper>
        {/*article content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}} dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="time" style={{marginTop: 48, textAlign: "center"}}><Img style={{display: "inline-block", marginBottom: 48, marginRight: 0}} fluid={post.frontmatter.authorPic.childImageSharp.fluid} alt={post.frontmatter.author}/></div>
        {/*after article*/}
        <div id="post-article-height">
          <div className="after-article grey-background">
            <div className="page-center">
              <h3>Get Weekly Breaks</h3>
              <div className="separator"></div>
            </div>
            <SubscriptionForm />
            <div className="page-center">
              <h3>Take Another Break</h3>
              <div className="separator" style={{margin: "1.5em auto 2em"}}></div>
              {edges.filter(edge => edge.node.fields.slug !== location.pathname).slice(0, 4).map(edge => {
                  //curly brackets around variable is a destructuring assignment - e.g. the below equals edge.node.frontmatter & also edge.node.timeToRead
                  const {frontmatter, timeToRead, fields} = edge.node;
                  return (
                    <div className="article" key={frontmatter.date}>
                        <Link to={fields.slug}>
                            <Img fluid={frontmatter.image.childImageSharp.fluid} />
                            <div className="article-info">
                                <h2>{frontmatter.title}</h2>
                                <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                            </div>
                        </Link>
                    </div>
                  )
              })}
            </div>
          </div>
          <PanelReadingList />
        </div>
      </Layout>
      </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
              fluid(maxWidth: 22) {
                  ...GatsbyImageSharpFluid
              }
          }
        }
        authorLink
        image {
          childImageSharp {
              sizes {
                src
              }
              fluid(maxWidth: 2100) {
                  ...GatsbyImageSharpFluid
              }
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
                          fluid(maxWidth: 2100) {
                              ...GatsbyImageSharpFluid
                          }
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