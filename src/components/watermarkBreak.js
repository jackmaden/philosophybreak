import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: {eq: "philosophybreak.png"}) {
            childImageSharp {
                fluid(maxWidth: 22) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    `}
    render={data => (
        <div className="time" style={{marginTop: 48, textAlign: "center"}}>
            <Img style={{display: "inline-block", marginBottom: 96, marginRight: 0}} fluid={data.file.childImageSharp.fluid} alt="Philosophy Break"/>
        </div>
    )}
  />
)
