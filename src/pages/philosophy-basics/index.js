import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image";

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import { HomeSubscriptionForm } from "../../components/homeSubscriptionForm";

const Page = ({ data, location }) => {

    const imagePath = getSrc(data.seo)

    return (
    <>
    <Seo title="Discover Exactly What Philosophy Is and How It Can Improve Your Life " description="Expand your mind and learn the basics of philosophy with just 1 email per day for 3 days." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple bg="light-bg" />

      {/*DISABLE MEDIAVINE ADS*/}
      <div id="mediavine-settings" data-blocklist-all="1" ></div>

         {/*page title*/}
         <div className="grey-background top-title home">
          <div className="two-col big-2-col page-center">
            <div className="mobile-center">
            <span className="tag time" style={{color: "#001d30"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#001d30" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>START LEARNING</span><div className="separator course wider mobile-center-margin"></div>
              <h1 id="lbq">Discover exactly what philosophy is and how it can improve your life with just 1 email per day for 3 days</h1>
              <p className="large-grey-font">What is philosophy? Why is it important? How can it improve your life? Discover the answers to all these questions and more with our 3-lesson email course:</p>
              <HomeSubscriptionForm />
            </div>
            <div>
              <GatsbyImage
                image={data.home.childImageSharp.gatsbyImageData}
                alt="Philosophy Break" loading="eager" />
            </div>
          </div>
        </div>
        
    </Layout>
    </>
    )
}

export const query = graphql`{
    home: file(relativePath: {eq: "pb-basics.png"}) {
        childImageSharp {
            gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
    }
    seo: file(relativePath: {eq: "pb-basics-seo.jpg"}) {
      childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, placeholder: BLURRED)
      }
  }
}
`

export default Page