import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Footer = () => (
    <StaticQuery
    query={graphql`{
  file(relativePath: {eq: "certified-social-enterprise.png"}) {
    childImageSharp {
      gatsbyImageData(width: 100, height: 100, layout: FIXED)
    }
  }
}
`}
    render={data => (
        <div id="footer">
            <div className="page-center">
                <div className="logo-footer">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="a" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#1aa9ff"/><stop offset="0.31" stop-color="#22acff"/><stop offset="0.44" stop-color="#37b4ff"/><stop offset="0.59" stop-color="#5ac1ff"/><stop offset="0.72" stop-color="#7cceff"/></linearGradient><linearGradient id="b" x1="131.91" y1="450.27" x2="377.59" y2="204.59" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#030810"/><stop offset="0.29" stop-color="#030a13"/><stop offset="0.5" stop-color="#02101c"/><stop offset="0.69" stop-color="#001a2c"/><stop offset="0.72" stop-color="#001d30"/></linearGradient></defs><circle cx="250" cy="250" r="250" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#a)"/><path d="M-121.5,179.5" stroke="#000" stroke-miterlimit="10"/><path d="M27.12,281" stroke="#000" stroke-miterlimit="10"/><path d="M453,343"/><path d="M-516.5,142.5" stroke="#000" stroke-miterlimit="10"/><path d="M38,325" fill="#fff"/><polygon points="27 316 108 219.58 148 284 250 103 363 247.69 391 197.72 475 299 27 316" fill="#fff"/><path d="M34,312l74-61.18L148,284,250,148.16,363,251l28-26,79,72c-.91,3.91-1.9,7.92-3,12-1.88,7-2.9,10.68-5,17-.08,0-1.16,3.07-1.24,3.11-32,85.32-114.27,146.05-210.76,146.05-98,0-181.41-62.69-212.25-150.16L34,312" fill="url(#b)"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#001d30" stroke-miterlimit="10" stroke-width="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#001d30" stroke-miterlimit="10" stroke-width="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#001d30" stroke-miterlimit="10" stroke-width="6"/></svg>
                        <h3>Philosophy Break<small>Timeless wisdom for time-pressed people</small></h3>
                    </Link>
                </div>
                <div className="follow-footer">
                    <a className="button secondary" href="https://www.instagram.com/philosophybreak/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>Follow on Instagram</a>
                    <a className="button secondary" target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>Follow on Twitter</a>
                </div>
                <div className="disclaimer-footer mid-width">
                    <p>Philosophy Break is a social enterprise dedicated to getting more people engaged with philosophy. Learn more <Link to="/about/">about us here</Link>. To offset a fraction of what it costs to maintain Philosophy Break and keep it ad-free, we participate in the Amazon Associates Program. This means if you purchase a book on Amazon from a link on here, we may earn a small percentage of its price, at no extra cost to you. This helps support Philosophy Break, and is very much appreciated.</p>
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
    )}
/>
)

export default Footer