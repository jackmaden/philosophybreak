import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import { WelcomeEmailForm } from "../../components/welcomeEmailForm";
import FooterSimple from "../../components/footerSimple";

const Page = ({ data, location }) => {

    const imagePath = getSrc(data.seo)

    return (
    <>
    <Seo title="The Philosophy Prescription: Lessons from Big Thinkers for Every Stage of Life, by Jack Maden" description="The Philosophy Prescription invites you to join the millennia-spanning philosophical community on a shared search for answers." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple bg="light-bg" />

         {/*page title*/}
         <div className="top-title grey-background home">
          <div className="two-col massive-1-col page-center">
            <div>
              <GatsbyImage
                image={data.home.childImageSharp.gatsbyImageData} className="tpp-margin"
                alt="The Philosophy Prescription, by Jack Maden" loading="eager" />
            </div>
            <div>
            <p className="verified no-mar-top">NEW!</p><span className="tag time new" style={{color: "#001d30"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BOOK</span><div className="separator course new book"></div>
            <h1 id="smaller">The Philosophy Prescription: Lessons from Big Thinkers for Every Stage of Life</h1>
            <p className="small-grey-font">By Jack Maden | Released 3rd September 2026</p>
            <p className="small-grey-font">What do philosophers have to tell us about actually living our everyday lives? Explore how philosophers old and new can help us think with a fresh perspective on common life stages, from being someone's child and experiencing first love, to handling retirement and facing impermanence.</p>
            <a target="_blank" rel="noopener noreferrer" className="button primary full-width top-icon-align" href="https://www.penguin.co.uk/books/471237/the-philosophy-prescription-by-maden-jack/9781911742005">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>Pre-order from Penguin</a>
            <AnchorLink className="no-hover" href="#extract"><button className="button secondary full-width top-icon-align"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"/></svg>Read an Extract Now</button></AnchorLink>
            </div>
            
          </div>
          {/*testimonial*/}
          <div className="grey-background small-pad">
            <div className="page-center text-center">
                <p className="large-grey-font tiny-mar-bottom"><b>“You didn’t ask to be born, but now you’re here, you have questions - about relationships, work, aging, illness, death, and how to live. In <i>The Philosophy Prescription</i>, Jack Maden draws on the insights of philosophers throughout history to answer existential questions and encourage us to ask them. A wonderfully accessible, wide-ranging introduction to philosophy as a guide for life.”</b></p><p className="small-grey-font tiny-mar-top mid-mar-bottom">— Professor Kieran Setiya, author of <i>Life is Hard: How Philosophy Can Help Us Find Our Way</i></p>
                <p className="large-grey-font"><b>“This is a truly welcome addition to the popular-philosophy genre: deep, wise and wide in range, yet both accessible and strikingly relevant in what it draws from the rich tradition of philosophy's insights into life and its challenges. Greatly to be recommended.”</b></p><p className="small-grey-font tiny-mar-top mid-mar-bottom">— Professor A. C. Grayling, author of <i>The History of Philosophy</i></p>                

                <p className="large-grey-font"><b>“A primer on the best thoughts - and best questions - humanity has ever had. An engaging read, full of wisdom. You'll revisit it over and over again.”</b></p><p className="small-grey-font tiny-mar-top mid-mar-bottom">— Professor Scott Hershovitz, author of <i>Nasty, Brutish and Short: Adventures in Philosophy With Kids</i></p>
                
                <p className="large-grey-font"><b>“<i>The Philosophy Prescription</i> proves that philosophy isn't for stuffy academics in ivory towers and woolly cardigans - it's for everyone. Maden has a rare talent for being able to translate huge and complex ideas into something we can all understand and apply to our lives. In here you'll find ancient wisdom from the titans of the philosophical canon alongside curious tidbits from the dusty obscura at the back of the bookshop. Every page offers something to think about, something to try, or something to take into the rest of your day. An utter gem of a book - wise, warm, and quietly life-changing. ”</b></p><p className="small-grey-font tiny-mar-top mid-mar-bottom">— Jonny Thomson, author of <i>Mini Philosophy</i></p>
                
            </div>
          </div>
        </div>
        <div id="extract">

        </div>

      <FooterSimple />
        
    </Layout>
    </>
    )
}

export const query = graphql`{
    home: file(relativePath: {eq: "tpp-penguin.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
    }
    seo: file(relativePath: {eq: "weekly-break-seo.jpg"}) {
      childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, placeholder: BLURRED)
      }
  }
}
`

export default Page