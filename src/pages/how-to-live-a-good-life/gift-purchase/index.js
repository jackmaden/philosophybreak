import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Layout from '../../../components/layout'
import { NavigationSimple } from "../../../components/navigationSimple"
import JackHeadshot from "../../../components/jackHeadshot"
import FooterSimple from "../../../components/footerSimple"

const Page = () => {
    return (
        <>
        <Helmet title="Purchase as a Gift: How to Live a Good Life | Philosophy Break">
            <meta name="robots" content="noindex" />
        </Helmet>
        <Layout>
        <NavigationSimple />

            {/*page background color*/}
            <div className="darkradial-background small-pad-bottom">
                <div className="top-title text-center">
                    <div className="page-center">
                        <p className="small-grey-font mid-mar-bottom"><Link to="/how-to-live-a-good-life/">← Back to course page</Link></p>
                        <h3 className="mid-width">Know someone who would love <i>How to Live a Good Life</i>? Present it to them as a gift in 4 easy steps:</h3>
                        <p><svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></p>
                        <p className="small-grey-font mid-width"><b>1.</b> <a href="https://buy.stripe.com/7sI00J9xmf9D9nG4gt">Purchase a gift voucher</a> for the course using your email address</p>
                        <svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                        <p className="small-grey-font mid-width"><b>2.</b> I’ll send you the gift voucher via email</p>
                        <svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                        <p className="small-grey-font mid-width"><b>3.</b> Present this voucher to your intended recipient</p>
                        <svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                        <p className="small-grey-font mid-width"><b>4.</b> They can use it to enroll in the course for free</p>
                        <div className="mid-mar mid-width">
                        <p className="small-grey-font mid-width">Ready to begin?</p>
                        <a className="button primary full-width top-icon-align" href="https://buy.stripe.com/7sI00J9xmf9D9nG4gt">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>Purchase Gift Voucher Now
                        </a>
                        <p className="no-mar-top no-mar-bottom review-font" style={{fontSize: "14px"}}>Remember: use your own email address at checkout!</p>
                        </div>
                        <p className="small-grey-font mid-width">Any questions or problems, simply drop me a line at hello@philosophybreak.com, and I’ll be on hand to help.</p>
                        
                        <JackHeadshot />
                    </div>
                </div>
            </div>
            <div id="mediavine-settings" data-blocklist-leaderboard="1" data-blocklist-sidebar-atf="1" data-blocklist-sidebar-btf="1" data-blocklist-content-desktop="1" data-blocklist-content-mobile="1" data-blocklist-adhesion-mobile="1" data-blocklist-adhesion-tablet="1" data-blocklist-adhesion-desktop="1" data-blocklist-recipe="1" data-blocklist-auto-insert-sticky="1" data-blocklist-in-image="1" data-blocklist-chicory="1" data-blocklist-zergnet="1" data-blocklist-interstitial-mobile="1" data-blocklist-interstitial-desktop="1" data-blocklist-universal-player-desktop="1" data-blocklist-universal-player-mobile="1" ></div>

        <FooterSimple />

        </Layout>
        </>
    )
}

export default Page