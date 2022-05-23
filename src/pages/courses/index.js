import React from "react"

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from '../../components/topTitle'
import SubscriptionForm from '../../components/subscriptionForm'
import PanelLBQ from "../../components/panelLBQ"
import PanelNietzsche from "../../components/panelNietzsche";


const Page = ({ location }) => {
    return (
    <>
    <Seo title="Philosophy Courses – Introductory Philosophy for Beginners" description="Quick, introductory philosophy courses distilling the subject's greatest wisdom." pathname={location.pathname} />
    <Layout>
    <Navigation bg="light-bg" />

    {/*page background color*/}
    <div className="grey-background">

        {/*page title*/}
        <TopTitle class="no-mar-bottom" title="Philosophy Courses" subtitle="Explore our quick, introductory philosophy courses, where you can learn the subject’s greatest wisdom in days rather than months." />            
        </div>
        
        <PanelLBQ class="grey-background course" fill="#001d30" flexdirection="row-reverse" />
        
        <PanelNietzsche />

        <div className="grey-background large-pad-bottom">
            <div className="page-center mid-width text-center">
                <h2>Is there another philosophical topic you’d like to learn about?</h2>
                <div className="separator"></div>
                <p className="large-grey-font">We’re developing new introductory philosophy courses all the time. Is there something in particular you’d like to learn about? Let us know on <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram here</a>, on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter here</a>, <a href="mailto:hello@philosophybreak.com">via email here</a>, or <a href="https://www.patreon.com/philosophybreak" target="_blank" rel="noopener noreferrer">join the Philosophy Break community on Patreon</a> to participate in regular philosophical discussion, unlock perks, and help shape our future.</p>
                <a className="button primary" href="https://www.patreon.com/philosophybreak" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"/></svg>Join the Community</a>
            </div>
        </div>
       
        <SubscriptionForm />

        
    </Layout>
    </>
    )
}

export default Page