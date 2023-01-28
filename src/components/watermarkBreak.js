import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";


export default function WatermarkBreak() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "philosophybreak.png"}) {
        childImageSharp {
          gatsbyImageData(width: 22, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <div className="time" style={{marginTop: 48, textAlign: "center"}}>
        <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            style={{display: "inline-block", marginBottom: 96, marginRight: 0}}
            alt="Philosophy Break" />
    </div>
  )
}