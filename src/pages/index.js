import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from '../components/SEO'
import Layout from '../components/layout'
import { Navigation } from "../components/navigation"
import { SubscriptionForm } from '../components/subscriptionForm'
import PanelReadingList from '../components/panelReadingList'
import PanelAboutUs from '../components/panelAboutUs'
import HomeArticleList from '../components/homeArticleList'

export default ({ data }) => {

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
        <SEO title="Philosophy Break – Timeless Wisdom for Time-Pressed People" description="The home for philosophy's best ideas, questions, and answers – from Socrates, Plato, and Aristotle; to Kant, Kierkegaard, and Nietzsche."/>
        <Layout>
        <Navigation bg="light-bg" />
            {/*page title*/}
            <div className="top-title text-center">
                <div className="page-center">
                    <h1 id="home-page">{greet}</h1>
                    <div className="separator"></div>
                    <p className="mid-width large-grey-font">Welcome to Philosophy Break, a place to enrich your mind with philosophy's best questions, quotes, and ideas.</p>
                </div>
            </div>
            <div className="large-mar">
                <div className="two-col big-2-col row-reverse page-center">
                    <div>
                        <Img fluid={data.lbq.childImageSharp.fluid} fadeIn={false} loading="eager" alt="Life's Big Questions" />
                    </div>
                    <div className="mid-mar mobile-center">
                        <span className="tag time" style={{color: "#2b2f33"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>5-DAY COURSE</span><div className="separator course mobile-center-margin"></div>
                        <h2>Start Answering Life's Big Questions</h2>
                        <p className="large-grey-font">Why does anything exist? How should we approach life? Our celebrated introductory philosophy course distills philosophy's best answers to life's big questions, taking you on a whirlwind five-day journey of reflection, understanding, and discovery.</p>
                        <Link className="button primary" to="/lifes-big-questions/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Explore Course Now</Link>
                    </div>
                </div>   
            </div>         
            <div id="first-panel" className="grey-background large-pad">
                <HomeArticleList />
            </div>
            <SubscriptionForm />
            <PanelReadingList />
            <PanelAboutUs/>
                
        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        lbq: file(relativePath: {eq: "Chapter1-full.png"}) {
            childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`