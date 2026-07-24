import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function PanelTPP(props) {
    const data = useStaticQuery(graphql`
        query {
            lbq: file(relativePath: {eq: "tpp.jpg"}) {
                childImageSharp {
                  gatsbyImageData(width: 800, quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
                }
            }
        }
    `)

    return (
        <div className={props.class + " course mid-pad coursepanel"}>
            <Link to="/the-philosophy-prescription/">
                <div className={props.flexdirection + " two-col massive-2-col page-center"}>
                    {/*to account for centering the flare center NEW! we've done two separate html listings of it (one for mobile which adds a br/ and one for desktop which uses usual classes)*/}
                    <div className="mobile-center">
                        <div className="desktop-no-display">
                            <p className="verified no-mar-top">NEW!</p><br/><span className="tag time" style={{color: "#fff"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill="#fff" d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BOOK</span><div className="separator mobile-center-margin course book"></div>
                        </div>
                        <div className="mobile-no-display">
                            <p className="verified no-mar-top">NEW!</p><span className="tag time new" style={{color: "#fff"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill="#fff" d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BOOK</span><div className="separator course new book"></div>
                        </div>
                        <h2>Take the philosophical wisdom offline: Philosophy Break, now in book form!</h2>
                        
                        <div className="desktop-no-display">
                        <GatsbyImage
                            image={data.lbq.childImageSharp.gatsbyImageData}
                            alt="The Philosophy Prescription, by Jack Maden" />
                        </div>

                        

                        <p className="large-grey-font no-mar-top-mob">Explore the new book from the founder of Philosophy Break, Jack Maden. <i>The Philosophy Prescription</i> matches key ideas from ancient and contemporary thinkers to sixteen common life stages, and is published by Penguin Random House.</p>


                        <button className="button primary full-width"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Explore the Book Now</button>
               
                    </div>
                    <div className="mobile-no-display">
                        <GatsbyImage
                            image={data.lbq.childImageSharp.gatsbyImageData}
                            alt="The Philosophy Prescription, by Jack Maden" />
                    </div>
                </div>
            </Link>
            
        </div>     
    )
}

PanelTPP.defaultProps = {
    class: "darkradial-background",
    flexdirection: "row-reverse",
    fill: "#fff"
  }