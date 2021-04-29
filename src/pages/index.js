import React from "react"
import { graphql, } from "gatsby"

import Seo from '../components/SEO'
import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import { SubscriptionForm } from '../components/subscriptionForm'
import PanelReadingList from '../components/panelReadingList'
import PanelAboutUs from '../components/panelAboutUs'
import HomeArticleList from '../components/homeArticleList'

const Page = () => {

    //change home page content based on time of day
    const myDate = new Date() //get device date
    const hrs = myDate.getHours() //get hours from date

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
    <Seo title="Philosophy Break – Timeless Wisdom for Time-Pressed People" description="The home for philosophy's best questions, wisdom, and ideas – from Socrates, Plato, and Aristotle; to Kant, Kierkegaard, and Nietzsche."/>
    <Layout>
    <Navigation bg="light-bg" />

        {/*page title*/}
        <div className="grey-background top-title home text-center">
          <div className="page-center">  
            <h1 id="home-page">{greet}</h1>
            <div className="separator"></div>
            <p className="large-grey-font mid-width">Welcome to Philosophy Break, a place to enrich your mind with philosophy's best questions, wisdom, and ideas.</p>
          </div>
        </div>

        <HomeArticleList />

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