import React from "react"
import { graphql, Link } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

import Seo from '../../../components/SEO'
import Layout from '../../../components/layout'
import { Navigation } from "../../../components/navigation"
import { ScrollProgressBar } from '../../../components/scrollProgressBar'
import TitleReadingList from '../../../components/titleReadingList'
import BookLink from '../../../components/bookLink'
import PostReadingList from "../../../components/postReadingList"
import CtaReadingList from "../../../components/ctaReadingList"
import BigSubscribe from "../../../components/bigSubscribe"
import Sidebar from "../../../components/sidebar"

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Alan Watts Reading List – The Best 5 Books to Read" description="A curated reading list of the best books by the philosopher Alan Watts." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Alan Watts" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Alan Watts" />
        
        {/*container for sidebar*/}
        <div id="container">
          
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

              <p><span className="big-letter">A</span>lan Watts (1915 - 1973) was an English writer and popularizer of philosophy. He wrote over 27 books in his lifetime, and is best known for trying to bring Eastern philosophies and religions like <Link to="/reading-lists/buddhist-philosophy/">Buddhism</Link>, Hinduism, <Link to="/reading-lists/confucius/">Confucianism</Link>, and Taoism to a Western audience.</p> 

              <p>Though criticized by some as simplifying or misrepresenting the works he sought to popularize, Watts is heralded by others as being a crucial figure in helping bridge the philosophical gap between East and West, and during his life he had significant supporters in the Zen community.</p> 

              <p>This reading list consists of the best books by Alan Watts. After reading it, you’ll understand why Watts is famed for transposing profound philosophical insights from across the globe into accessible, engaging prose.</p>  

              <h2>1. The Book: On the Taboo Against Knowing Who You Are, by Alan Watts</h2>
              <BookLink title="The Book: On the Taboo Against Knowing Who You Are" author="Alan Watts" link="http://www.amazon.com/Book-Taboo-Against-Knowing-Who/dp/0679723005?&linkCode=ll1&tag=philosophybre-20&linkId=00163375e1e870fd0257d75b7f6f5648&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>If you’re looking a book that offers a general summary of Watts’ views, then his 1966 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Book-Taboo-Against-Knowing-Who/dp/0679723005?&linkCode=ll1&tag=philosophybre-20&linkId=00163375e1e870fd0257d75b7f6f5648&language=en_US&ref_=as_li_ss_tl">The Book: On the Taboo Against Knowing Who You Are</a> is commonly thought to provide a good all-round starting point. Watts compellingly shares his own thoughts, and distills and adapts the Hindu philosophy of Vedanta to investigate what he believes to be the root of human conflict: that we each fundamentally misunderstand who we are. Imbued with playful takedowns of the idea that the Self is separate from the Whole, this book offers a fantastic entry point to the general themes of Watts’ work and views.</p>

              <h2>2. The Wisdom of Insecurity: A Message for an Age of Anxiety, by Alan Watts</h2>
              <BookLink title="The Wisdom of Insecurity: A Message for an Age of Anxiety" author="Alan Watts" link="http://www.amazon.com/Wisdom-Insecurity-Message-Age-Anxiety/dp/0307741206?&linkCode=ll1&tag=philosophybre-20&linkId=b3d98a7f7e2878616ca9c42068e858fc&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>While <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Wisdom-Insecurity-Message-Age-Anxiety/dp/0307741206?&linkCode=ll1&tag=philosophybre-20&linkId=b3d98a7f7e2878616ca9c42068e858fc&language=en_US&ref_=as_li_ss_tl">The Wisdom of Insecurity: A Message for an Age of Anxiety</a> was first published in 1951, its message is especially pertinent for our times. Written for an age of unprecedented anxiety, Watts draws on the wisdom of Eastern philosophies to explore how we can lessen our worries about the future, reign in our lamentations about the past, and place more of our energies into the time we actually inhabit: the present. Written simply and directly, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Wisdom-Insecurity-Message-Age-Anxiety/dp/0307741206?&linkCode=ll1&tag=philosophybre-20&linkId=b3d98a7f7e2878616ca9c42068e858fc&language=en_US&ref_=as_li_ss_tl">The Wisdom of Insecurity: A Message for an Age of Anxiety</a> remains one of Watts’ most popular works — and for good reason.</p>
              
              <h2>3. The Way Of Zen, by Alan Watts</h2>
              <BookLink title="The Way Of Zen" author="Alan Watts" link="http://www.amazon.com/Way-Zen-Alan-W-Watts/dp/0375705104?&linkCode=ll1&tag=philosophybre-20&linkId=0f19fd4624f6eeb8b271577c9a30146f&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>In his highly influential 1957 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Way-Zen-Alan-W-Watts/dp/0375705104?&linkCode=ll1&tag=philosophybre-20&linkId=0f19fd4624f6eeb8b271577c9a30146f&language=en_US&ref_=as_li_ss_tl">The Way Of Zen</a>, Watts provides his definitive introduction to Zen Buddhism. This work played a significant role in introducing the principles and practices of this ancient religion and philosophy to a Western audience, and is still routinely celebrated today as a fantastic introductory text  (for more here, see our reading list of the <Link to="/reading-lists/buddhist-philosophy/">best books on Buddhism</Link>). Watts splits his work into two sections, ‘Background and History’, and ‘Principles and Practice’, offering readers everything they need to begin understanding the enduring wisdom of Zen Buddhism.</p>

              <BigSubscribe />

              <h2>4. The Joyous Cosmology: Adventures in the Chemistry of Consciousness, by Alan Watts</h2>
              <BookLink title="The Joyous Cosmology: Adventures in the Chemistry of Consciousness" author="Alan Watts" link="http://www.amazon.com/Joyous-Cosmology-Adventures-Chemistry-Consciousness/dp/1608682048?&linkCode=ll1&tag=philosophybre-20&linkId=8da84f5763e74b5a5ff7127a68c04a03&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />
              <p>In his 1962 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Joyous-Cosmology-Adventures-Chemistry-Consciousness/dp/1608682048?&linkCode=ll1&tag=philosophybre-20&linkId=8da84f5763e74b5a5ff7127a68c04a03&language=en_US&ref_=as_li_ss_tl">The Joyous Cosmology: Adventures in the Chemistry of Consciousness</a>, Watts poetically recounts his experiences with the psychedelic drugs LSD, mescaline, and psilocybin. Going beyond the sixties counterculture movement, Watts explains how insightful such substances can be “when accompanied with sustained philosophical reflection by a person who is in search, not of kicks, but of understanding.” A brief but powerful argument for owning the rights to our own brains and nervous systems, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Joyous-Cosmology-Adventures-Chemistry-Consciousness/dp/1608682048?&linkCode=ll1&tag=philosophybre-20&linkId=8da84f5763e74b5a5ff7127a68c04a03&language=en_US&ref_=as_li_ss_tl">The Joyous Cosmology: Adventures in the Chemistry of Consciousness</a> is among the best essays on psychedelics from the last few decades.</p>

              <h2>5. This Is It, by Alan Watts</h2>
              <BookLink title="This Is It" author="Alan Watts" link="http://www.amazon.com/This-Other-Essays-Spiritual-Experience/dp/0394719042?&linkCode=ll1&tag=philosophybre-20&linkId=b17c0802899cacd86865ded382b125b0&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
              <p>Published in 1960, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/This-Other-Essays-Spiritual-Experience/dp/0394719042?&linkCode=ll1&tag=philosophybre-20&linkId=b17c0802899cacd86865ded382b125b0&language=en_US&ref_=as_li_ss_tl">This Is It</a> is a collection of six essays from Watts on subjects ranging from consciousness and metaphysics to living a good, authentic life. For a snapshot of his views on a variety of topics, as well as how he imbued such views with wisdom from Eastern religions and philosophies, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/This-Other-Essays-Spiritual-Experience/dp/0394719042?&linkCode=ll1&tag=philosophybre-20&linkId=b17c0802899cacd86865ded382b125b0&language=en_US&ref_=as_li_ss_tl">This Is It</a> is a favorite among fans of Watts’ life and work — short yet powerful, deep, and wise.</p>
              
              <h2>Further reading</h2>
              <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> or <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram</a>.</p>
              <CtaReadingList />
          </div>

          <Sidebar />

        </div>
        
        {/*post reading list*/}
        <PostReadingList />

    </Layout>
    </>
  )
}

export const query = graphql`{
  title: file(relativePath: {eq: "watts.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "watts-book.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "watts-insecurity.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "watts-zen.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "watts-psych.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "watts-this.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList