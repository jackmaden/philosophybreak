import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const PanelLBQ = props => (
  <StaticQuery
    query={graphql`{
  lbq: file(relativePath: {eq: "Chapter1-full.png"}) {
    childImageSharp {
      gatsbyImageData(width: 800, quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`}
    render={data => (
        <div className={props.class + " mid-pad"} id="first-panel">
            <div className="two-col big-1-col row-reverse page-center">
                <div className="mobile-center">
                    <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill={props.fill} d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>5-DAY COURSE</span><div className="separator course mobile-center-margin"></div>
                    <h2>5-Day Introduction to Philosophy Course</h2>
                    <p style={{marginBottom: 0}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <Link to="/lifes-big-questions/" className="white-underline" style={{fontSize: "16px"}}>(21 reviews)</Link></p>
                    <p className="verified discount">20% DISCOUNT – LIMITED OFFER</p>
                    <GatsbyImage
                        image={data.lbq.childImageSharp.gatsbyImageData}
                        className="desktop-no-display"
                        fadeIn={false}
                        loading="eager"
                        alt="Life's Big Questions" />
                    <p className="large-grey-font">Why does anything exist? Do we have free will? How should we approach life? Our celebrated introduction to philosophy distills the subject's best answers to life's big questions, delivering materials direct to your inbox over five days.</p>
                    <Link className="button primary" to="/lifes-big-questions/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>Enroll in 5-Day Course</Link>
                </div>
                <div className="mobile-no-display">
                    <GatsbyImage
                        image={data.lbq.childImageSharp.gatsbyImageData}
                        fadeIn={false}
                        loading="eager"
                        alt="Life's Big Questions" />
                </div>
            </div>   
        </div>     
    )}
    />
)

PanelLBQ.defaultProps = {
  class: "darkradial-background",
  fill: "#fff",
}

export default PanelLBQ