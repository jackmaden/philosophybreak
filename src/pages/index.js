import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from '../components/SEO'
import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import PanelReadingList from '../components/panelReadingList'
import PanelLBQ from '../components/panelLBQ'
import PanelNietzsche from "../components/panelNietzsche";
import HomeArticleList from "../components/homeArticleList";
import WelcomeEmailPanel from "../components/welcomeEmailPanel";
import PanelPFL from "../components/panelPFL";
import { WelcomeEmailForm } from "../components/welcomeEmailForm";
import Footer from "../components/footer";

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

              <h1 id="home-page">Get one mind-opening philosophical idea distilled to your inbox every Sunday (free)</h1>
              <div className="text-center desktop-no-display">
                <div className="separator"></div>
              </div>
              <p className="small-grey-font" style={{marginBottom: 0}}>From the Buddha to Nietzsche: join 10,500+ subscribers enjoying a nugget of profundity from the great philosophers every Sunday:</p>
              <WelcomeEmailForm />
              <p className="tiny-mar-top no-mar-bottom review-font" style={{fontSize: "14px"}}>💭 One short philosophical email each Sunday. Unsubscribe any time.</p>
            </div>
            <div>
              <GatsbyImage image={data.home.childImageSharp.gatsbyImageData} alt="Philosophy Break" loading="eager" />
            </div>
          </div>
          {/*testimonial*/}
          <div className="page-center text-center">
            <p className="large-grey-font tiny-mar-top massive no-mar-bottom">“Philosophy Break’s Sunday emails are the highlight of my week.”</p>
            <p className="tiny-mar-top mid-mar-bottom review-font"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;(50+ reviews for Philosophy Break)</p>
          </div>
        </div>

        <HomeArticleList />
        <PanelPFL />
        <PanelReadingList />
        
        <PanelLBQ flexdirection="row-reverse" />
        <PanelNietzsche flexdirection="row" />
        
        <WelcomeEmailPanel />

      <Footer />

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
  home: file(relativePath: {eq: "weekly-break.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`

export default Page