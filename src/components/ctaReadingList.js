import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const CtaReadingList = () => (
  <StaticQuery
    query={graphql`{
  file(relativePath: {eq: "readinglist.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
}
`}
    render={data => (
      <>
        <p>In the meantime, why not explore more of our reading lists on the <Link to="/reading-lists/">best philosophy books</Link>:</p>
        <Link className="reading-list" to="/reading-lists/">
            <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                className="title-img"
                alt="philosophy bookshop" />
            <div className="darkener"></div>
            <div className="reading-list-title">
                <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fff" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"/></svg>READING LISTS</span>
                <div className="separator reading-list banner"></div>
                <h3>View All Reading Lists</h3>
                <p style={{margin: "2px 0 0"}}>Essential Philosophy Books by Subject</p>
            </div>
            <svg className="cta swing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </Link>
      </>
    )}
  />
)

export default CtaReadingList