import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from '../components/SEO'
import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import { SubscriptionForm } from '../components/subscriptionForm'
import PanelReadingList from '../components/panelReadingList'
import PanelAboutUs from '../components/panelAboutUs'
import HomeArticleList from '../components/homeArticleList'
import PanelLBQ from '../components/panelLBQ'
import PanelArticleList from "../components/panelArticleList";

const Page = ( {data} ) => {

    //change home page content based on time of day
    const myDate = new Date() //get device date
    const hrs = myDate.getHours() //get hours from date

    let greet = 'Hello there, Philosopher' // variable for message & set default
    let pic = data.default.childImageSharp.gatsbyImageData // variable for image & set default

    if (hrs < 12) { //if morning
        greet = 'Good Morning, Philosopher'
        pic = data.morning.childImageSharp.gatsbyImageData
    }
    else if (hrs >= 12 && hrs < 17) { //if afternoon
        greet = 'Good Afternoon, Philosopher'
        pic = data.default.childImageSharp.gatsbyImageData
    }
    else if (hrs >= 17 && hrs < 24) { //if evening
        greet = 'Good Evening, Philosopher'
        pic = data.evening.childImageSharp.gatsbyImageData
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
            <p className="large-grey-font mid-width">Welcome to Philosophy Break, your home for learning more about philosophy. Nourish your mind with a <Link to="/articles/">quick philosophy break</Link> now, or dive deeper with our <Link to="/reading-lists/">reading lists</Link> and <Link to="/lifes-big-questions/">introductory philosophy course</Link>.</p>
          </div>
        </div>

        <div className="grey-background small-pad-bottom-mob-mid-pad-bottom-desk">
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
          
          </div>
        </div>
            
        {/* LBQ PANEL */}
        <PanelLBQ class="white-background" fill="#36b4ff" />

        <PanelArticleList />

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
      gatsbyImageData(width: 600, height: 600, layout: CONSTRAINED)
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
}
`

export default Page