import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default function Footer() {
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

                <div className="three-col align-top text-center mid-mar-top">
                    <div>
                        <p>TRENDING BREAKS</p>
                        <ul>
                            <li><Link to="/articles/iris-murdoch-unselfing-is-crucial-for-living-a-good-life/">Iris Murdoch on the Power of ‘Unselfing’</Link></li>
                            <li><Link to="/articles/seneca-to-find-peace-stop-chasing-unfulfillable-desires/">Seneca: Stop Chasing Unfulfillable Desires</Link></li>
                            <li><Link to="/articles/byung-chul-han-burnout-society-our-only-imperative-is-to-achieve/">Byung-Chul Han’s Burnout Society</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p>TOP READING LISTS</p>
                        <ul>
                            <li><Link to="/reading-lists/ethics-and-morality/">Ethics: Best 10 Books to Read</Link></li>
                            <li><Link to="/reading-lists/stoicism/">Stoicism: Best 6 Books to Read</Link></li>
                            <li><Link to="/reading-lists/existentialism/">Existentialism: Best 9 Books to Read</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p>POPULAR COURSES</p>
                        <ul>
                            <li><Link to="/how-to-live-a-good-life/">How to Live a Good Life</Link></li>
                            <li><Link to="/lifes-big-questions/">Life’s Big Questions</Link></li>
                            <li><Link to="/introduction-to-nietzsche/">Introduction to Nietzsche</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="three-col align-top text-center">
                    <div>
                        <p>PHILOSOPHY 101</p>
                        <ul>
                            <li><Link to="/what-is-philosophy-definition-4-core-branches/">What is Philosophy?</Link></li>
                            <li><Link to="/why-is-philosophy-important-today/">Why is Philosophy Important Today?</Link></li>
                            <li><Link to="/reading-lists/introduction-to-philosophy/">The Best 6 Introductory Philosophy Books</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p>ABOUT US</p>
                        <ul>
                            <li><Link to="/about/">About Philosophy Break</Link></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/philosophybreak">Support the Project</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>FOLLOW US</p>
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.threads.net/@philosophybreak">Threads</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/philosophybreak/">Facebook</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@philosophybreak">TikTok</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a></li>
                            <li><Link to="/weekly-emails/">Join 10,500+ Email Subscribers</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="disclaimer-footer mid-width mid-pad-top">
                    <p>Philosophy Break is an online social enterprise dedicated to making the wisdom of philosophy instantly accessible (and useful!) for people striving to live happy, meaningful, and fulfilling lives. Learn more <Link to="/about/">about us here</Link>. To offset a fraction of what it costs to maintain Philosophy Break, we participate in the Amazon Associates Program. This means if you purchase something on Amazon from a link on here, we may earn a small percentage of the sale, at no extra cost to you. This helps support Philosophy Break, and is very much appreciated.</p> 
                    <p><Link to="/amazon-affiliate/">Access our generic Amazon Affiliate link here</Link></p>
                    <p><Link to="/privacy-policy/">Privacy Policy</Link> | <Link to="/cookie-policy/">Cookie Policy</Link></p>
                    <p>© Philosophy Break Ltd, {new Date().getFullYear()}</p>
                </div>
                <GatsbyImage
                    image={data.file.childImageSharp.gatsbyImageData}
                    style={{margin: "30px auto 24px"}}
                    alt="Social enterprise badge" />
            </div>
            {/*Amazon onelink*/}
            <div id="amzn-assoc-ad-797b493c-1b64-4c6e-a017-445d37f42f08"></div><script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=797b493c-1b64-4c6e-a017-445d37f42f08"></script>
        </div>
    )
}