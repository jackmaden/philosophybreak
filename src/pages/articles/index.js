import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import TopTitle from "../../components/topTitle"
import { SubscriptionForm } from '../../components/subscriptionForm'
import PanelReadingList from '../../components/panelReadingList'
import PanelAboutUs from '../../components/panelAboutUs'
import WatermarkBreak from "../../components/watermarkBreak"

const Articles = ({ data, location }) => {
    const { edges } = data.allMarkdownRemark
    return (
        <>
        <SEO title="Latest Breaks – Philosophy Articles that Make You Think" description="Take a Philosophy Break now: each break takes only a few minutes to read, and is designed to spark curiosity about a particular talking point in philosophy." pathname={location.pathname} />
        
        <Layout>
            {/*page background color*/}
            <div style={{backgroundColor: '#f8f8f8'}}>

                {/*page title*/}
                <TopTitle title="Latest Breaks" subtitle="Expand your mind and stoke your philosophical curiosity with our latest breaks." />

                {/*page content*/}
                <div className="page-center">
                    {/*article list*/}
                        {edges.map(edge => {
                            //curly brackets around variable is a destructuring assignment - e.g. the below equals edge.node.frontmatter & also edge.node.timeToRead
                            const {frontmatter, timeToRead, fields} = edge.node;
                            return (
                                <div className="article" key={frontmatter.date}>
                                    <Link to={fields.slug}>
                                        <Img fluid={frontmatter.image.childImageSharp.fluid} alt={frontmatter.imageAlt} />
                                        <div className="article-info">
                                            <h2>{frontmatter.title}</h2>
                                            <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>{timeToRead} MIN BREAK</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                
                {/*end page content*/}
                </div>
                
                <WatermarkBreak />
            
            {/*end page background color*/}
            </div>

            <SubscriptionForm />
            <PanelReadingList />
            <PanelAboutUs />

            {/*extra padding pre-footer*/}
            <div className="grey-background" style={{paddingBottom: '6px'}}></div>
        </Layout>
        </>
    )
}

export const query = graphql`
    query ArticleList {
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
        file(relativePath: {eq: "philosophybreak.png"}) {
            childImageSharp {
                fixed(width: 20, height: 20) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default Articles