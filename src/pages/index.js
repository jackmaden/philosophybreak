import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from '../components/SEO'
import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import SubscriptionForm from '../components/subscriptionForm'
import PanelReadingList from '../components/panelReadingList'
import PanelLBQ from '../components/panelLBQ'
import PanelNietzsche from "../components/panelNietzsche";
import HomeArticleList from "../components/homeArticleList";
import WelcomeEmailPanel from "../components/welcomeEmailPanel";

const Page = ( {data} ) => {

    //change home page content based on time of day
    const myDate = new Date() //get device date
    const hrs = myDate.getHours() //get hours from date

    let svg = 'M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'
    let greet = 'HELLO THERE, PHILOSOPHER' // variable for message & set default

    if (hrs < 12) { //if morning
        svg = 'M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'
        greet = 'GOOD MORNING, PHILOSOPHER'
    }
    else if (hrs >= 12 && hrs < 17) { //if afternoon
        svg = 'M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'
        greet = 'GOOD AFTERNOON, PHILOSOPHER'
    }
    else if (hrs >= 17 && hrs < 24) { //if evening
        svg = 'M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z'
        greet = 'GOOD EVENING, PHILOSOPHER'
    }

    return (
    <>
    <Seo title="Philosophy Break – Your Home for Learning about Philosophy" description="The home for philosophy's best questions, wisdom, and ideas – from Socrates, Plato, and Aristotle; to Kant, Kierkegaard, and Nietzsche."/>
    <Layout>
    <Navigation />

        {/*page title*/}
        <div className="darkradial-background top-title home">
          <div className="two-col big-2-col page-center">
            <div className="mobile-center">

              {/*morning/afternoon/evening greet*/}
              <span className="tag time home" style={{marginBottom: "12px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFC536" d={svg}/></svg>{greet}</span>

              <h1 id="home-page">What do thousands of years of philosophy say about how we can live happier, more fulfilling lives?</h1>
              <div className="text-center desktop-no-display">
                <div className="separator"></div>
              </div>
              <p className="large-grey-font home">Quickly compare the wisdom of Stoicism, Existentialism, Buddhism and beyond to forever enrich your personal philosophy. Explore our popular new guide now:</p>
              <Link className="button primary full-width" to="/how-to-live-a-good-life/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Get Instant Access</Link>
              <p className="no-mar-top"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <span style={{fontSize: "14px"}}>(50+ reviews for our courses)</span></p>
            </div>
            <div>
              <GatsbyImage image={data.home.childImageSharp.gatsbyImageData} alt="Philosophy Break" loading="eager" />
            </div>
          </div>
        </div>

        <HomeArticleList />
        <WelcomeEmailPanel />
        <PanelReadingList />
        
        <PanelLBQ flexdirection="row-reverse" />
        <PanelNietzsche flexdirection="row" />
        
        <SubscriptionForm />
    </Layout>
    </>
    )
}

export const query = graphql`{
  default: file(relativePath: {eq: "philosophy-break.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, height: 600, layout: CONSTRAINED)
    }
  }
  home: file(relativePath: {eq: "PFL-mob.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`

export default Page