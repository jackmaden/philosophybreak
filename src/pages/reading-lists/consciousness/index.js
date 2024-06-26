import React from "react"
import { graphql, Link } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

import Seo from '../../../components/SEO'
import Layout from '../../../components/layout'
import { Navigation } from "../../../components/navigation"
import { ScrollProgressBar } from '../../../components/scrollProgressBar'
import TitleReadingList from '../../../components/titleReadingList'
import BookLink from '../../../components/bookLink'
import CtaReadingList from "../../../components/ctaReadingList"
import PostReadingList from "../../../components/postReadingList"
import BigSubscribe from "../../../components/bigSubscribe"
import Sidebar from "../../../components/sidebar"

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Consciousness Reading List – The Best 5 Books to Read" description="A curated reading list of the most essential books on the philosophy of consciousness." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        
        {/*reading list title*/}
        <TitleReadingList title="Consciousness" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="consciousness" />

        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">C</span>onsciousness is at once the most familiar thing to us, and perhaps the most mysterious. Why does conscious experience arise, and what is its nature? Is it a physical entity, or something else entirely? To what extent are other lifeforms conscious, and could we ever recreate their experiences? These difficult questions form the basis of the so-called <Link to="/articles/what-is-consciousness">'hard problem' of conscious experience</Link>, an area of research receiving growing attention.</p>
              <p>Within philosophy, the debate around consciousness is fierce. The following reading list is designed to provide you with a thorough introduction to the problem of consciousness, as well as a well-rounded view of leading solutions to it.</p>

              <h2>1. The Conscious Mind, by David J. Chalmers</h2>
              <BookLink title="The Conscious Mind" author="David J. Chalmers" link="http://www.amazon.com/gp/product/0195117891/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195117891&linkId=17c460a9634b6fbce9ec8a22d88884e9" img={data.one.childImageSharp.gatsbyImageData} />
              <p>In his 1996 book <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0195117891/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195117891&linkId=17c460a9634b6fbce9ec8a22d88884e9">The Conscious Mind</a>, David J. Chalmers fleshes out the 'hard problem' of consciousness with considerable force.</p>
              <p>Though challenging in places, this book is a brilliant survey of the field and a powerful critique of reductionist thinking. Reading it, you will feel the 'hard problem' of consciousness in your bones.</p>
              

              <h2>2. Consciousness Explained, by Daniel Dennett</h2>
              <BookLink title="Consciousness Explained" author="Daniel Dennett" link="http://www.amazon.com/gp/product/0316180661/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0316180661&linkId=f6d2896ad24294b31955a1470b9fb918" img={data.two.childImageSharp.gatsbyImageData} />
              <p>Daniel Dennett's landmark <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0316180661/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0316180661&linkId=f6d2896ad24294b31955a1470b9fb918">Consciousness Explained</a>, published in 1991, is packed full of mind-bending thought experiments about how we experience the world.</p>
              <p>Dennett believes many of our difficulties with consciousness - including the 'hard problem' - are mere illusions (sorry Chalmers!). An entertaining and stimulating read, this book will seriously challenge your intuitions. (See my full list of <Link to="/reading-lists/daniel-dennett-best-books/">Dennett's best books here</Link>).</p>

              <BigSubscribe />
              

              <h2>3. Conversations on Consciousness, by Susan Blackmore</h2>
              <BookLink title="Conversations on Consciousness" author="Susan Blackmore" link="https://www.amazon.com/gp/product/0195179595/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195179595&linkId=662d506c65722b6cfb7eacc629175797" img={data.three.childImageSharp.gatsbyImageData} />
              <p>If you're looking for an overview of just how varied and radical the ideas within the field of consciousness can be, Susan Blackmore's 2005 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0195179595/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195179595&linkId=662d506c65722b6cfb7eacc629175797">Conversations on Consciousness</a> is a fantastic choice.</p>
              <p>Using wide-ranging interviews with leading thinkers and scientists of the field, including Chalmers and Dennett, Blackmore takes you on a mind-stretching trip from physicalism to dualism – and everything in between.</p>
              

              <h2>4. Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness, by Peter Godfrey-Smith</h2>
              <BookLink title="Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness" author="Peter Godfrey-Smith" link="https://www.amazon.com/gp/product/0374537194/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0374537194&linkId=ca065077a342a85da57532f3df7f13db" img={data.four.childImageSharp.gatsbyImageData} />
              <p>In his fascinating 2016 book <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0374537194/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0374537194&linkId=ca065077a342a85da57532f3df7f13db">Other Minds</a>, Peter Godfrey-Smith not only examines the weird mystery of consciousness, but charts its potential evolution from when life began.</p>
              <p>Drawing on his experience as a philosopher and enthusiastic scuba diver, he thoughtfully uses the octopus, a deeply alien yet oddly intelligent creature, to trace our inner lives back to their roots, and beautifully weaves in the story of how nature became aware of itself.</p>
              

              <h2>5. The Origin of Consciousness in the Breakdown of the Bicameral Mind, by Julian Jaynes</h2>
              <BookLink title="The Origin of Consciousness in the Breakdown of the Bicameral Mind" author="Julian Jaynes" link="https://www.amazon.com/gp/product/0618057072/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0618057072&linkId=a7900042d1ab769263ab3c35e90b7638" img={data.five.childImageSharp.gatsbyImageData} />
              <p>With a title like that, it's worth getting this book just to show off. As well as a bragging right, however, Julian Jaynes's 1976 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0618057072/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0618057072&linkId=a7900042d1ab769263ab3c35e90b7638">Origin of Consciousness</a> is an absolute classic.</p>
              <p>Jaynes puts forward the controversial idea that human consciousness emerged as recently as 3,000 years ago, and that prior to this the brain had two separate 'bicameral' chambers, which led people to interpret their own thoughts as the words of gods.</p>
              <p>The introductory chapters of <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0618057072/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0618057072&linkId=a7900042d1ab769263ab3c35e90b7638">Origin of Consciousness</a> are not so outlandish, however: in them, Jaynes offers perhaps the most lucid and poetic summary of the philosophy of consciousness in existence.</p>
              <p>And, if nothing else, Jaynes's epic is a tour de force in carrying out a seemingly crazy philosophical argument from start to finish – and doing so convincingly.</p>
              

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
  title: file(relativePath: {eq: "consciousness-list.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "theconsciousmind.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "consciousness-explained.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "consciousnessconversations.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "consciousnessoctopus.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "consciousnessbicameral.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList