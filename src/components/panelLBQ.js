import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
        query {
            lbq: file(relativePath: {eq: "Chapter1-full.png"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `}
    render={data => (
        <div className="mid-pad darkradial-background" id="first-panel">
            <div className="two-col big-1-col row-reverse page-center">
                <div className="mobile-center">
                    <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>5-DAY COURSE</span><div className="separator course mobile-center-margin"></div>
                    <h2>Get Philosophy’s Best Answers to Life’s Big Questions Direct to Your Inbox</h2>
                    <p style={{marginBottom: 0}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <Link to="/lifes-big-questions/" className="white-underline" style={{fontSize: "16px"}}>(9 reviews)</Link></p>
                    <Img className="desktop-no-display" fluid={data.lbq.childImageSharp.fluid} fadeIn={false} loading="eager" alt="Life's Big Questions" />
                    <p className="large-grey-font">Why does anything exist? Do we have free will? How should we approach life? Our celebrated introduction to philosophy distills the subject's best answers to life's big questions, delivering materials direct to your inbox over five days.</p>
                    <Link className="button primary" to="/lifes-big-questions/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Explore Course Now</Link>
                </div>
                <div className="mobile-no-display">
                    <Img fluid={data.lbq.childImageSharp.fluid} fadeIn={false} loading="eager" alt="Life's Big Questions" />
                </div>
            </div>   
        </div>     
    )}
    />
)