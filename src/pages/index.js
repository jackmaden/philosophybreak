import React from "react"
import { graphql, } from "gatsby"

import Seo from '../components/SEO'
import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import { SubscriptionForm } from '../components/subscriptionForm'
import PanelLBQ from '../components/panelLBQ'
import PanelReadingList from '../components/panelReadingList'
import PanelAboutUs from '../components/panelAboutUs'
import HomeArticleList from '../components/homeArticleList'

const Page = () => {

    //change home page content based on time of day
    const myDate = new Date() //get device date
    const hrs = myDate.getHours() //get hours from date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let greet = 'Hello there, Philosopher' // variable for message & set default

    if (hrs < 12) { //if morning
        greet = 'Good Morning, Philosopher'
    }
    else if (hrs >= 12 && hrs < 17) { //if afternoon
        greet = 'Good Afternoon, Philosopher'
    }
    else if (hrs >= 17 && hrs < 24) { //if evening
        greet = 'Good Evening, Philosopher'
    }

    return (
    <>
    <Seo title="Philosophy Break – Timeless Wisdom for Time-Pressed People" description="The home for philosophy's best ideas, questions, and answers – from Socrates, Plato, and Aristotle; to Kant, Kierkegaard, and Nietzsche."/>
    <Layout>
    <Navigation bg="light-bg" />

      <div className="grey-background mid-pad-bottom">
        
        {/*page title*/}
        <div className="top-title home text-center">
          <div className="page-center">  
            <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/></svg>{myDate.toLocaleDateString('en-UK', options).replace(/,/g, '').toUpperCase()}</p>
            <h1 id="home-page">{greet}</h1>
            <div className="separator"></div>
            <p className="large-grey-font mid-width">Welcome to Philosophy Break, a place to enrich your mind with philosophy's best questions, wisdom, and ideas.</p>
          </div>
        </div>

        <HomeArticleList />

      </div>

        <div className="white-background small-pad">
            <PanelLBQ class="white-background" fill="#36b4ff" />
        </div>
        <SubscriptionForm />
        <PanelReadingList />
        <PanelAboutUs/>
    </Layout>
    </>
    )
}

export const query = graphql`{
  default: file(relativePath: {eq: "philosophy-break.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 80, layout: FULL_WIDTH)
    }
  }
  morning: file(relativePath: {eq: "morning.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
  evening: file(relativePath: {eq: "evening.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 70, layout: FULL_WIDTH)
    }
  }
}
`

export default Page