import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";




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
                      imageSeo {
                        childImageSharp {
                          gatsbyImageData(width: 600, layout: CONSTRAINED)
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
            }
        `}
            render={data => (
              <>
                  <div className="grey-background large-pad">

                    
                    <div className="page-center">
                    <span className="text-center">
                            <h2>Latest Breaks</h2>
                            <div className="separator" style={{marginBottom: "2em"}}></div>
                            <p className="small-grey-font mid-width">Each philosophy break takes only a few minutes to read, and is crafted to expand your mind and spark your curiosity.</p>
                        </span>
                    {data.allMarkdownRemark.edges.slice(0, 1).map(edge => {
                      // LATEST ARTICLE
                      const {frontmatter, fields} = edge.node;
                      return (
                      <div className="article  home" key={frontmatter.date}>
                          <Link to={fields.slug}>
                              <GatsbyImage image={frontmatter.imageSeo.childImageSharp.gatsbyImageData} alt={frontmatter.imageAlt} />
                                <div className="article-info">
                                  <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>LATEST BREAK</p>
                                  <h2>{frontmatter.title}</h2>
                                  <p className="spectral">{frontmatter.description}</p>
                                    
                                </div>
                            </Link>
                          </div>
                        );
                    })}

                    {data.allMarkdownRemark.edges.slice(1, 5).map(edge => {
                        const {frontmatter, timeToRead, fields} = edge.node;
                        return (
                          // Remaining articles 
                            <div className="article home" key={frontmatter.date}>
                                <Link to={fields.slug}>
                                    <GatsbyImage image={frontmatter.imageSeo.childImageSharp.gatsbyImageData} alt={frontmatter.imageAlt} />
                                    <div className="article-info">
                                      <h2>{frontmatter.title}</h2>
                                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead}-MIN BREAK</p>
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