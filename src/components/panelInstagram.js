import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allInstaNode(limit:3) {
                        edges {
                            node {
                                id
                                username
                                likes
                                caption
                                comments
                                localFile {
                                    childImageSharp {
                                        fluid(quality: 70, maxWidth: 200, maxHeight: 200) {
                                        ...GatsbyImageSharpFluid
                                        }
                                    }
                                } 
                            }
                        }
                    }
                }
            `}
            render={data => (
              <div className="grey-background">
                <div className="page-center">
                        <div className="text-center">
                            <h3>Enrich Your Instagram</h3>
                            <div className="separator" style={{marginBottom: "2em"}}></div>
                            <div className="insta-panel">
                                {data.allInstaNode.edges.map(edge => {
                                    //curly brackets around variable is a destructuring assignment - e.g. the below equals edge.node.localFile
                                    const {localFile, timestamp, id} = edge.node;
                                    return (
                                        <div className="insta-post" key={timestamp}><a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/p/" + id}><Img alt="philosophy break instagram" fluid={localFile.childImageSharp.fluid} /></a></div>
                                        
                                    )
                                })}
                            </div>
                            <p className="small-grey-font">It's easy to enter zombie mode on Instagram. Switch from consumption to thoughtfulness with daily clearings in your cluttered newsfeed.</p>
                            <p><span className="shadow"><a className="button secondary" href="https://www.instagram.com/philosophybreak/" target="_blank" rel="noopener noreferrer">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>Join 18,000+ Followers</a></span></p>
                            </div>
                        </div>
                </div>
            )}
        />
    )
}
