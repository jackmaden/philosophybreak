import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import JackHeadshot from "../../components/jackHeadshot"

const Page = () => {
    return (
        <>
        <Helmet title="Amazon Affiliate Link | Philosophy Break">
            <meta name="robots" content="noindex" />
        </Helmet>
        <Layout>
        <Navigation bg="light-bg" />

        {/*DISABLE MEDIAVINE ADS*/}
        <div id="mediavine-settings" data-blocklist-all="1" ></div>

            {/*page background color*/}
            <div className="grey-background small-pad-bottom">
                <div className="top-title text-center">
                    <div className="page-center">
                        <h3 className="mid-width">Amazon Affiliate Link</h3>
                        <div className="separator"></div>
                        <a target="_blank" rel="noopener noreferrer sponsored" className="primary button" href="https://www.amazon.com?&linkCode=ll2&tag=philosophybre-20&linkId=3a8c6ed2f3345a481a828ca7e5448b41&language=en_US&ref_=as_li_ss_tl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>Visit Amazon.com</a>
                        <p className="small-grey-font mid-width">To offset a fraction of what it costs to maintain Philosophy Break, we participate in the Amazon Associates Program. This means if you purchase something on Amazon from the link above, we may earn a small percentage of the sale, at no extra cost to you. This helps support Philosophy Break, and is very much appreciated.</p>
                        <p className="small-grey-font mid-width">Thank you!</p>
                        <JackHeadshot />
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Page