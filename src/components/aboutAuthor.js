import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import WatermarkBreak from "../components/watermarkBreak"

const AboutAuthor = () => (   
    <div className="grey-background large-pad-top">
        <div className="page-center">
        <div className="text-center">
            <h3 className="small-mar-top-desktop">About the Author</h3>
            <div className="separator"></div>
        </div>
        <div className="two-col big-1-col about-author">
            <div className="advisory mid-pad-top-mob" style={{"justify-content":"center", "margin-top": "0"}}>
                <div className="member" style={{width:"150px"}}>
                    <StaticImage src="../images/jackmaden.jpg" alt="Jack Maden" placeholder="blurred" width={300} style={{margin: 0}} />
                    <p className="no-mar-bottom">Jack Maden<span class="small-grey-font" style={{"line-height" : "1.3"}}>Founder<br/>Philosophy Break</span></p>
                </div>
            </div>
            <div>
            <p className="small-grey-font">👋 My name’s Jack, and I’m the Founder and Director of Philosophy Break. I’m currently writing a book, <i>The Philosophy Prescription</i>, which is due for publication by Torva (Penguin Random House) in Autumn 2026. <Link to="/about/">Learn more about me and Philosophy Break here.</Link></p>
            <p className="small-grey-font">If you enjoy learning about humanity’s greatest thinkers, you might like my free Sunday email. I break down one mind-opening idea from philosophy, and invite you to share your view.</p>
            <p className="small-grey-font"><Link to="/weekly-emails/">Subscribe for free here</Link>, and join 21,000+ philosophers enjoying a nugget of profundity each week (free forever, no spam, unsubscribe any time).</p>
            </div>
        </div>
        </div>
        <WatermarkBreak />
    </div>
)

export default AboutAuthor