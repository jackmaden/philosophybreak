import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import { HomeSubscriptionForm } from "../../components/homeSubscriptionForm";

const Page = ({ data, location }) => {
    return (
    <>
    <Seo title="Subscribe to Free Weekly Breaks" description="Join thousands of thinkers and get philosophy breaks direct to your inbox, with weekly emails designed to make you think." pathname={location.pathname} />
    <Layout>
    <NavigationSimple/>
         {/*page title*/}
         <div className="darkradial-background top-title home">
          <div className="two-col big-2-col page-center">
            <div className="mobile-center">
            <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>WEEKLY BREAKS</span><div className="separator course mobile-center-margin"></div>
              <h1>Expand your mind and learn about philosophy with free weekly emails</h1>
              <p className="large-grey-font">Join thousands of thinkers and get philosophy breaks direct to your inbox, with weekly emails designed to make you think.</p>
              <HomeSubscriptionForm />
            </div>
            <div>
              <GatsbyImage
                image={data.home.childImageSharp.gatsbyImageData}
                alt="Philosophy Break" />
            </div>
          </div>
        </div>
        
    </Layout>
    </>
    )
}

export const query = graphql`{
    home: file(relativePath: {eq: "philosophybreak-weekly.png"}) {
        childImageSharp {
            gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
    }
}
`

export default Page