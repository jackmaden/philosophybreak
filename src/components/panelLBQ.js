import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import ReviewsLatestLBQ from "./reviewsLatestLBQ"

export default function PanelLBQ(props) {
  const data = useStaticQuery(graphql`
    query {
      lbq: file(relativePath: {eq: "LBQ-promo.png"}) {
        childImageSharp {
          gatsbyImageData(width: 800, quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)
  
  return (
    <div className={props.class + " course mid-pad coursepanel"}>
      <Link to="/lifes-big-questions/">
        <div className={props.flexdirection + " two-col big-1-col page-center"}>
            <div className="mobile-center">
                <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill={props.fill} d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>COURSE & COMMUNITY</span><div className="separator course mobile-center-margin pfl"></div>
                <h3 className="pfl smaller">Life’s Big Questions: Your Concise Guide to Philosophy’s Most Important Wisdom</h3>
                

                <GatsbyImage
                    image={data.lbq.childImageSharp.gatsbyImageData}
                    className="desktop-no-display"
                    loading="eager"
                    alt="Life's Big Questions" />
                
                
                <p className="large-grey-font no-mar-top-mob">Why does anything exist? Do we have free will? How should we approach life? Discover the great philosophers’ best answers to life’s big questions.</p>
                
                <button className="button primary full-width" to="/lifes-big-questions/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Learn More</button>
                <p className="no-mar-top"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <span style={{fontSize: "14px"}}>(50+ reviews for our courses)</span></p>
                
            </div>
            <div className="mobile-no-display">
                <GatsbyImage
                    image={data.lbq.childImageSharp.gatsbyImageData}
                    loading="eager"
                    alt="Life's Big Questions" />
            </div>
        </div>
      </Link>
        <div className="small-pad no-pad-top-desktop">
            <div className="page-center text-center">
                <h4 style={{fontWeight: "700"}} className="no-mar-bottom">Latest Course Reviews:</h4>
                <ReviewsLatestLBQ />
                <p className="no-mar-bottom"><Link to="/lifes-big-questions/" className="white-underline" style={{fontSize: "16px"}}>See All Course Reviews</Link></p>
            </div>
        </div>   
    </div>     
  )
}

PanelLBQ.defaultProps = {
  class: "darkradial-background",
  flexdirection: "row",
  fill: "#fff",
}