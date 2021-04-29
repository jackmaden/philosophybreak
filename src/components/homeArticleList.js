import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import PanelLBQ from './panelLBQ'


const HomeArticleList = () => {
    return (
        <StaticQuery
            query={graphql`{
              allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    frontmatter {
                      title
                      description
                      image {
                        childImageSharp {
                          gatsbyImageData(width: 460, height: 460, layout: CONSTRAINED)
                        }
                      }
                      imageAlt
                      date
                    }
                    timeToRead
                    fields {
                      slug
                    }
                  }
                }
              }
              evening: file(relativePath: {eq: "evening.jpg"}) {
                childImageSharp {
                  gatsbyImageData(width: 460, height: 460, layout: CONSTRAINED)
                }
              }
            }
        `}
            render={data => (
              <>
              <div className="grey-background mid-pad-bottom">
                <div className="page-center">
                    
                    {data.allMarkdownRemark.edges.slice(0, 1).map(edge => {
                      // FIRST ARTICLE
                      const {frontmatter, fields} = edge.node;
                      return (
                      <div className="article home" key={frontmatter.date}>
                          <Link to={fields.slug}>
                              <GatsbyImage image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.imageAlt} />
                                <div className="article-info">
                                  <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>LATEST BREAK</p>
                                  <h2>{frontmatter.title}</h2>
                                  <p className="spectral">{frontmatter.description}</p>
                                    
                                </div>
                            </Link>
                          </div>
                        );
                    })}
                    
                    {data.allMarkdownRemark.edges.slice(1, 3).map(edge => {
                        //curly brackets around variable is a destructuring assignment - e.g. the below equals edge.node.frontmatter & also edge.node.timeToRead
                        const {frontmatter, timeToRead, fields} = edge.node;
                        return (

                          // 2ND & 3RD ARTICLES
                            <div className="article home" key={frontmatter.date}>
                                <Link to={fields.slug}>
                                    <GatsbyImage image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.imageAlt} />
                                    <div className="article-info">
                                      <h2>{frontmatter.title}</h2>
                                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                  </div>
                  </div>
                    
                  {/* LBQ PANEL */}
                  <PanelLBQ class="white-background" fill="#36b4ff" />

                  <div className="grey-background large-pad mid-pad-bottom">
                    <div className="page-center">

                    {data.allMarkdownRemark.edges.slice(4, 5).map(edge => {
                      // 4th ARTICLE - why does anything exist
                      const {frontmatter, timeToRead, fields} = edge.node;
                      return (
                      <div className="article home" key={frontmatter.date}>
                          <Link to={fields.slug}>
                              <GatsbyImage image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.imageAlt} />
                                <div className="article-info">
                                  <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                                  <h2>{frontmatter.title}</h2>
                                  <p className="spectral">{frontmatter.description}</p>
                                    
                                </div>
                            </Link>
                          </div>
                        );
                    })}

                    {data.allMarkdownRemark.edges.slice(3, 4).map(edge => {
                        const {frontmatter, timeToRead, fields} = edge.node;
                        return (
                          // 5th ARTICLE - is the world around us real 
                            <div className="article home" key={frontmatter.date}>
                                <Link to={fields.slug}>
                                    <GatsbyImage image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.imageAlt} />
                                    <div className="article-info">
                                      <h2>{frontmatter.title}</h2>
                                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}

                    {/*6th ARTICLE - what is philosophy (added manually) */}
                    <div className="article home">
                        <Link to="/what-is-philosophy-why-is-it-important-today/">
                          <GatsbyImage image={data.evening.childImageSharp.gatsbyImageData} alt="What is philosophy?" />
                            <div className="article-info">
                              <h2>What is Philosophy, and Why is it Important Today?</h2>
                              <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>7 MIN BREAK</p>
                            </div>
                        </Link>
                    </div>

                    {data.allMarkdownRemark.edges.slice(5, 7).map(edge => {
                        const {frontmatter, timeToRead, fields} = edge.node;
                        return (
                          // 7th & 8th ARTICLE 
                            <div className="article home" key={frontmatter.date}>
                                <Link to={fields.slug}>
                                    <GatsbyImage image={frontmatter.image.childImageSharp.gatsbyImageData} alt={frontmatter.imageAlt} />
                                    <div className="article-info">
                                      <h2>{frontmatter.title}</h2>
                                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}


                    <p className="text-center"><Link className="button secondary" to="/articles/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>View All Breaks</Link></p>
                </div>
                </div>
                </>
            )}
        />
    );
}

export default HomeArticleList