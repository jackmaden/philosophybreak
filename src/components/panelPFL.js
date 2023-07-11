import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function PanelPFL(props) {
    const data = useStaticQuery(graphql`
        query {
            lbq: file(relativePath: {eq: "how-to-live-a-good-life.png"}) {
                childImageSharp {
                  gatsbyImageData(width: 800, quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
                }
            }
        }
    `)

    return (
        <div className={props.class + " course large-pad coursepanel"}>
            <Link to="/how-to-live-a-good-life/">
                <div className={props.flexdirection + " two-col page-center"}>
                    {/*to account for centering the flare center NEW! we've done two separate html listings of it (one for mobile which adds a br/ and one for desktop which uses usual classes)*/}
                    <div className="mobile-center">
                        <div className="desktop-no-display">
                            <p className="verified no-mar-top">NEW!</p><br/><span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill={props.fill} d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>COURSE & COMMUNITY</span><div className="separator course mobile-center-margin pfl"></div>
                        </div>
                        <div className="mobile-no-display">
                            <p className="verified no-mar-top">NEW!</p><span className="tag time new"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill={props.fill} d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>COURSE & COMMUNITY</span><div className="separator course new mobile-center-margin pfl"></div>
                        </div>
                        <Link className="heading-link" to="/how-to-live-a-good-life/"><h3 className="pfl">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</h3></Link>
                        
                        <GatsbyImage
                            image={data.lbq.childImageSharp.gatsbyImageData}
                            className="desktop-no-display"
                            fadeIn={false}
                            alt="How to Live a Good Life" />

                        <p className="large-grey-font no-mar-top-mob">Quickly enrich your personal philosophy by comparing the wisdom of Stoicism, Existentialism, Buddhism and beyond. Explore our popular new guide now:</p>


                        <Link className="button primary full-width" to="/how-to-live-a-good-life/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Get Instant Access</Link>
                        <p className="no-mar-top"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <span style={{fontSize: "14px"}}>(50+ reviews for our courses)</span></p>
                    </div>
                    <div className="mobile-no-display">
                        <GatsbyImage
                            image={data.lbq.childImageSharp.gatsbyImageData}
                            fadeIn={false}
                            alt="How to Live a Good Life" />
                    </div>
                </div>
            </Link>
            
        </div>     
    )
}

PanelPFL.defaultProps = {
    class: "darkradial-background",
    flexdirection: "row-reverse",
    fill: "#fff",
  }