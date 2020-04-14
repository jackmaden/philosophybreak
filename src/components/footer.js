import React from "react"
import { Link } from "gatsby"

export default () => (
    <div id="footer">
        <div className="page-center">
            <div className="logo-footer">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="eed70a5d-3465-468c-b304-842a4dc6abf4" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.35" stopColor="#1aa9ff"/><stop offset="0.44" stopColor="#22acff"/><stop offset="0.58" stopColor="#37b4ff"/><stop offset="0.75" stopColor="#5ac1ff"/><stop offset="0.89" stopColor="#7cceff"/></linearGradient></defs><title>Philosophy Break</title><g id="a694bf81-a4e3-4986-9301-cf65ad1fcac0" data-name="Layer 1"><path d="M250,499.5A249.5,249.5,0,0,1,73.58,73.58,249.5,249.5,0,1,1,426.42,426.42,247.84,247.84,0,0,1,250,499.5Z" fill="#fff"/><path d="M250,1A248.93,248.93,0,0,1,426.07,426.07a249,249,0,1,1-273-405.5A247.32,247.32,0,0,1,250,1m0-1C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Z" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#eed70a5d-3465-468c-b304-842a4dc6abf4)"/></g><g id="4dca974f-b6d8-4b4f-b13a-2551c52acb2b" data-name="Layer 3"><path d="M462,325l-1.24,3.94C428.79,414.27,346.49,475,250,475c-98,0-181.41-62.69-212.25-150.16L461,325"/></g><g id="1a30999d-582a-4788-8e9a-e662ea057375" data-name="Layer 2"><polygon points="38 325 103 225 152 281 250 112 346 221 377 182 469 306 38 325" fill="#fff"/></g><g id="93c33bb2-e13c-4346-ae21-ff33957a2372" data-name="Layer 4"><polyline points="38 326 108 250.66 152 278.91 250 148 346 221.46 377 208.28 469 306.22 462 326"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/></g></svg>
                    <h3>Philosophy Break<small>A clearing in your cluttered newsfeed</small></h3>
                </Link>
            </div>
            <div className="follow-footer">
                <a className="button primary" href="https://www.instagram.com/philosophybreak/" target="_blank" rel="noopener noreferrer">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>Follow Philosophy Break</a>
            </div>
            <div className="disclaimer-footer">
                <p>Philosophy Break is a clearing in your cluttered newsfeed, home to the best ideas, questions, and quotes in philosophy. Learn more about us <Link to="/about/">here</Link>. To offset a fraction of what it costs to maintain Philosophy Break and keep it ad-free, we participate in the Amazon Associates Program. This means if you purchase a book on Amazon from a link on here, we may earn a small percentage of its price, at no extra cost to you. This helps support Philosophy Break, and is very much appreciated.</p>
                <p>© Philosophy Break 2020</p>
            </div>
        </div>
        {/*Amazon onelink*/}
        <div id="amzn-assoc-ad-797b493c-1b64-4c6e-a017-445d37f42f08"></div><script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=797b493c-1b64-4c6e-a017-445d37f42f08"></script>
    </div>
)