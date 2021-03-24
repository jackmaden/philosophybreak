import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default () => (
  <StaticQuery
    query={graphql`{
  file(relativePath: {eq: "philosophybreak.png"}) {
    childImageSharp {
      gatsbyImageData(width: 22, layout: CONSTRAINED)
    }
  }
}
`}
    render={data => (
        <div className="time" style={{marginTop: 48, textAlign: "center"}}>
            <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                style={{display: "inline-block", marginBottom: 96, marginRight: 0}}
                alt="Philosophy Break" />
        </div>
    )}
  />
)
