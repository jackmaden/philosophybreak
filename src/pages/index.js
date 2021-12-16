import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from '../components/SEO'
import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import { SubscriptionForm } from '../components/subscriptionForm'
import PanelReadingList from '../components/panelReadingList'
import PanelAboutUs from '../components/panelAboutUs'
import PanelLBQ from '../components/panelLBQ'
import PanelArticleList from "../components/panelArticleList";
import { HomeSubscriptionForm } from "../components/homeSubscriptionForm";
import PanelNietzsche from "../components/panelNietzsche";

const Page = ( {data} ) => {

    //change home page content based on time of day
    const myDate = new Date() //get device date
    const hrs = myDate.getHours() //get hours from date

    let svg = 'M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'
    let greet = 'HELLO THERE, PHILOSOPHER' // variable for message & set default
    let pic = data.default.childImageSharp.gatsbyImageData // variable for image & set default

    if (hrs < 12) { //if morning
        svg = 'M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'
        greet = 'GOOD MORNING, PHILOSOPHER'
        pic = data.morning.childImageSharp.gatsbyImageData
    }
    else if (hrs >= 12 && hrs < 17) { //if afternoon
        svg = 'M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'
        greet = 'GOOD AFTERNOON, PHILOSOPHER'
        pic = data.default.childImageSharp.gatsbyImageData
    }
    else if (hrs >= 17 && hrs < 24) { //if evening
        svg = 'M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z'
        greet = 'GOOD EVENING, PHILOSOPHER'
        pic = data.evening.childImageSharp.gatsbyImageData
    }

    return (
    <>
    <Seo title="Philosophy Break – Your Home for Learning about Philosophy" description="The home for philosophy's best questions, wisdom, and ideas – from Socrates, Plato, and Aristotle; to Kant, Kierkegaard, and Nietzsche."/>
    <Layout>
    <Navigation  />

        {/*page title*/}
        <div className="darkradial-background top-title home">
          <div className="two-col big-2-col page-center">
            <div className="mobile-center">
              <span className="tag time home" style={{marginBottom: "12px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFC536" d={svg}/></svg>{greet}</span>
              <h1 id="home-page">Welcome to Philosophy Break, your home for learning about philosophy</h1>
              <p className="large-grey-font">Join thousands of thinkers and get philosophy breaks direct to your inbox, with weekly emails designed to make you think.</p>
              <HomeSubscriptionForm />
            </div>
            <div>
              <GatsbyImage
                className="mobile-tablet-no-display"
                image={data.home.childImageSharp.gatsbyImageData}
                alt="Philosophy Break" />
            </div>
          </div>
        </div>

        {/* Nietzsche PANEL */}
        <PanelNietzsche />

        {/* LBQ PANEL */}
        <PanelLBQ />

        <div className="grey-background mid-pad small-pad-bottom-mob-mid-pad-bottom-desk">
          <div className="page-center">
            
            {/* 1st ARTICLE */ }
            <div className="article home">
                <Link to="/what-is-philosophy-why-is-it-important-today/">
                  <GatsbyImage image={pic} alt="What is philosophy?" />
                    <div className="article-info">
                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>GET STARTED</p>
                      <h2>What is Philosophy, and Why is it Important Today?</h2>
                      <p className="spectral">Your quick guide to what philosophy involves, why exploring it could make a significant difference to your life, and next steps for learning about its essential ideas.</p>
                    </div>
                </Link>
            </div>

            <h3 className="mid-mar-top tiny-mar-bottom">Recommended for you</h3>
            {/* 2nd ARTICLE */ }
            
            <div className="article home">
                <Link to="/articles/bertrand-russell-why-philosophy-matters/">
                  <GatsbyImage image={data.russell.childImageSharp.gatsbyImageData} alt="What is philosophy?" />
                    <div className="article-info">
                      <h2>Bertrand Russell On Why Philosophy Matters</h2>
                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>5 MIN BREAK</p>
                    </div>
                </Link>
            </div>
            
            {/* 3rd ARTICLE */}
            <div className="article home">
                <Link to="/articles/why-does-anything-exist/">
                  <GatsbyImage image={data.why.childImageSharp.gatsbyImageData} alt="Why does anything exist?" />
                    <div className="article-info">
                      <h2>Why Does Anything Exist?</h2>
                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>3 MIN BREAK</p>
                    </div>
                </Link>
            </div>
           

            {/* 4th ARTICLE */ }
            <div className="article home">
                <Link to="/articles/i-think-therefore-i-am-descartes-cogito-ergo-sum-explained/">
                  <GatsbyImage image={data.descartes.childImageSharp.gatsbyImageData} alt="René Descartes" />
                    <div className="article-info">
                      <h2>I Think Therefore I Am: Descartes' Cogito Ergo Sum Explained</h2>
                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>5 MIN BREAK</p>
                    </div>
                </Link>
            </div>
            

            {/* 5th ARTICLE */ }
            <div className="article home">
                <Link to="/reading-lists/introduction-to-philosophy/">
                  <GatsbyImage image={data.introduction.childImageSharp.gatsbyImageData} alt="Introduction to philosophy" />
                    <div className="article-info">
                      <h2>An Introduction to Philosophy: Top 5 Books to Read</h2>
                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>READING LIST</p>
                    </div>
                </Link>
            </div>

            {/* 6th ARTICLE */ }
            <div className="article home">
                <Link to="/articles/socratic-method-what-is-it-how-can-you-use-it/">
                  <GatsbyImage image={data.socrates.childImageSharp.gatsbyImageData} alt="René Descartes" />
                    <div className="article-info">
                      <h2>Socratic Method: What Is It and How Can You Use It?</h2>
                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>7 MIN BREAK</p>
                    </div>
                </Link>
            </div>

            {/* 7th ARTICLE */ }
            <div className="article home">
                <Link to="/articles/is-the-world-around-us-real/">
                  <GatsbyImage image={data.real.childImageSharp.gatsbyImageData} alt="René Descartes" />
                    <div className="article-info">
                      <h2>Is the World Around Us ‘Real’?</h2>
                      <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>4 MIN BREAK</p>
                    </div>
                </Link>
            </div>
          
          </div>
        </div>
            
        
        <SubscriptionForm />
        <PanelArticleList />
        <PanelAboutUs/>
        <PanelReadingList />
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
  home: file(relativePath: {eq: "philosophybreak-weekly.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
  morning: file(relativePath: {eq: "morning.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, height: 600, layout: CONSTRAINED)
    }
  }
  evening: file(relativePath: {eq: "evening.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, height: 600, layout: CONSTRAINED)
    }
  }
  descartes: file(relativePath: {eq: "descartes.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
    }
  }
  russell: file(relativePath: {eq: "bertrand-russell.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
    }
  }
  why: file(relativePath: {eq: "whydoes-anything-exist.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
    }
  }
  introduction: file(relativePath: {eq: "introduction.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
    }
  }
  socrates: file(relativePath: {eq: "death-of-socrates.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
    }
  }
  real: file(relativePath: {eq: "is-the-world-real.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
    }
  }
}
`

export default Page