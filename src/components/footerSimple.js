import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default function FooterSimple() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "certified-social-enterprise.png"}) {
                childImageSharp {
                gatsbyImageData(width: 100, height: 100, layout: FIXED)
                }
            }
        }
    `)

    return (
        <div id="footer">
            <div className="page-center">
                <div className="logo-footer">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="a" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.23" stopColor="#1aa9ff"/><stop offset="0.31" stopColor="#22acff"/><stop offset="0.44" stopColor="#37b4ff"/><stop offset="0.59" stopColor="#5ac1ff"/><stop offset="0.72" stopColor="#7cceff"/></linearGradient><linearGradient id="b" x1="131.91" y1="450.27" x2="377.59" y2="204.59" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#030810"/><stop offset="0.29" stopColor="#030a13"/><stop offset="0.5" stopColor="#02101c"/><stop offset="0.69" stopColor="#001a2c"/><stop offset="0.72" stopColor="#001d30"/></linearGradient></defs><circle cx="250" cy="250" r="250" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#a)"/><path d="M-121.5,179.5" stroke="#000" strokeMiterlimit="10"/><path d="M27.12,281" stroke="#000" strokeMiterlimit="10"/><path d="M453,343"/><path d="M-516.5,142.5" stroke="#000" strokeMiterlimit="10"/><path d="M38,325" fill="#fff"/><polygon points="27 316 108 219.58 148 284 250 103 363 247.69 391 197.72 475 299 27 316" fill="#fff"/><path d="M34,312l74-61.18L148,284,250,148.16,363,251l28-26,79,72c-.91,3.91-1.9,7.92-3,12-1.88,7-2.9,10.68-5,17-.08,0-1.16,3.07-1.24,3.11-32,85.32-114.27,146.05-210.76,146.05-98,0-181.41-62.69-212.25-150.16L34,312" fill="url(#b)"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#001d30" strokeMiterlimit="10" strokeWidth="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#001d30" strokeMiterlimit="10" strokeWidth="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#001d30" strokeMiterlimit="10" strokeWidth="6"/></svg>
                        <h3>Philosophy Break<small>Your home for learning about philosophy</small></h3>
                    
                </div>
                <div className="disclaimer-footer mid-width small-mar">
                    <p>Philosophy Break is an online social enterprise dedicated to making the wisdom of philosophy instantly accessible (and useful!) for people striving to live happy, meaningful, and fulfilling lives.</p>
                    <p><Link to="/privacy-policy/">Privacy Policy</Link> | <Link to="/cookie-policy/">Cookie Policy</Link></p>
                    <p>© Philosophy Break Ltd, {new Date().getFullYear()}</p>
                </div>
                <GatsbyImage
                    image={data.file.childImageSharp.gatsbyImageData}
                    style={{margin: "30px auto 24px"}}
                    alt="Social enterprise badge" />
            </div>
        </div>
    )
}