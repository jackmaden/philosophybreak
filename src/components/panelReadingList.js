import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import BannerReadingList from "./bannerReadingList"

export default () => (
  <StaticQuery
    query={graphql`
        query {
          introduction: file(relativePath: {eq: "introduction.jpg"}) {
              childImageSharp {
                  fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          consciousnesslist: file(relativePath: {eq: "consciousness-list.jpg"}) {
              childImageSharp {
                  fluid(maxHeight: 230) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          nietzsche: file(relativePath: {eq: "nietzsche.jpg"}) {
              childImageSharp {
                  fluid(maxHeight: 230) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
        }
    `}
    render={data => (
      <div className="grey-background">
        <div className="page-center">
            <div className="text-center">
                <h3>Dive Deeper</h3>
                <div className="separator" style={{marginBottom: '2em'}}></div>
            </div>
            <BannerReadingList title="An Introduction to Philosophy" number="4" link="/reading-lists/introduction-to-philosophy/" img={data.introduction.childImageSharp.fluid} alt="introduction to philosophy reading list" />
            
            <BannerReadingList title="Friedrich Nietzsche" number="7" link="/reading-lists/friedrich-nietzsche/" img={data.nietzsche.childImageSharp.fluid} alt="Friedrich Nietzsche reading list" />
            
            <BannerReadingList title="Consciousness" number="5" link="/reading-lists/consciousness/" img={data.consciousnesslist.childImageSharp.fluid} alt="consciousness reading list" />
            
            <p className="text-center"><span className="shadow"><Link className="button secondary" to="/reading-lists/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"/></svg>View All Reading Lists</Link></span></p>
        </div>
      </div>
    )}
  />
)