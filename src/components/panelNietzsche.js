import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const PanelNietzsche = () => (
  <StaticQuery
    query={graphql`{
  lbq: file(relativePath: {eq: "intro-to-nietzsche-chap1-full.png"}) {
    childImageSharp {
      gatsbyImageData(width: 800, quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`}
    render={data => (
        <div className="grey-background mid-pad" id="first-panel">
            <div className="two-col big-1-col row-reverse page-center">
                <div className="mobile-center">
                    <span className="tag time" style={{"color": "#001d30"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#001d30" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>BITE-SIZE COURSE</span><div className="separator course mobile-center-margin"></div>
                    <h2>6-Day Introduction to Nietzsche Course</h2>
                    <p className="verified discount">15% DISCOUNT – LIMITED OFFER</p><h5 className="discount"><span>$39.00 USD</span>&nbsp;&nbsp;<span>$34.00 USD</span></h5>
                    <GatsbyImage
                        image={data.lbq.childImageSharp.gatsbyImageData}
                        className="desktop-no-display"
                        fadeIn={false}
                        loading="eager"
                        alt="Life's Big Questions" />
                    <p className="large-grey-font no-mar-top-mob">Learn everything you need to know about Friedrich Nietzsche in just six days. This introductory course distills Nietzsche’s best and most misunderstood ideas, from God is dead to the Übermensch.</p>
                    <Link className="button primary" to="/introduction-to-nietzsche/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>Learn More about Course</Link>
                </div>
                <div className="mobile-no-display">
                    <GatsbyImage
                        image={data.lbq.childImageSharp.gatsbyImageData}
                        fadeIn={false}
                        loading="eager"
                        alt="Introduction to Nietzsche" />
                </div>
            </div>   
        </div>     
    )}
    />
)

export default PanelNietzsche