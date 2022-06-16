import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import ReviewsLatestNietzsche from "./reviewsLatestNietzsche"

const PanelNietzsche = props => (
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
        <div className="grey-background course mid-pad coursepanel">
            <Link to="/introduction-to-nietzsche/">
                <div className={props.flexdirection + " two-col big-1-col page-center"}>
                    {/*to account for centering the flare center NEW! we've done two separate html listings of it (one for mobile which adds a br/ and one for desktop which uses usual classes)*/}
                    <div className="mobile-center">
                        <div className="desktop-no-display">
                            <p className="verified no-mar-top">NEW!</p><br/><span className="tag time" style={{"color": "#001d30"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#001d30" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>QUICK COURSE</span><div className="separator course mobile-center-margin"></div>
                        </div>
                        <div className="mobile-no-display">
                            <p className="verified no-mar-top">NEW!</p><span className="tag time new" style={{"color": "#001d30"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#001d30" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>QUICK COURSE</span><div className="separator course new mobile-center-margin"></div>
                        </div>
                        <Link className="heading-link" to="/introduction-to-nietzsche/"><h2>6-Day Introduction to Nietzsche Course</h2></Link>
                        <p style={{marginBottom: 0}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <Link to="/introduction-to-nietzsche/" className="white-underline" style={{fontSize: "16px"}}>(9 reviews)</Link></p>
                        <GatsbyImage
                            image={data.lbq.childImageSharp.gatsbyImageData}
                            className="desktop-no-display"
                            fadeIn={false}
                            alt="Life's Big Questions" />

                        <p className="large-grey-font no-mar-top-mob">Learn everything you need to know about Friedrich Nietzsche in just six days. This introductory course distills Nietzsche’s best and most misunderstood ideas, from God is dead to the Übermensch.</p>
                        <Link className="button primary" to="/introduction-to-nietzsche/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>Learn More about Course</Link>
                    </div>
                    <div className="mobile-no-display">
                        <GatsbyImage
                            image={data.lbq.childImageSharp.gatsbyImageData}
                            fadeIn={false}
                            alt="Introduction to Nietzsche" />
                    </div>
                </div>
            </Link>
            <div className="small-pad no-pad-top-desktop">
                <div className="page-center text-center">
                    <h4 style={{fontWeight: "900"}} className="no-mar-bottom">Latest Course Reviews:</h4>
                    <ReviewsLatestNietzsche />
                    <p className="no-mar-bottom"><Link to="/introduction-to-nietzsche/" className="white-underline" style={{fontSize: "16px"}}>See All Course Reviews</Link></p>
                </div>
            </div>   
            
        </div>     
    )}
    />
)

PanelNietzsche.defaultProps = {
    flexdirection: "row-reverse",
  }

export default PanelNietzsche