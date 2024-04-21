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
    <Seo title="Daniel Dennett Reading List – The Best 5 Books to Read" description="A curated reading list of the most essential books for getting started with Daniel Dennett." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Daniel Dennett" number="5" img={data.title.childImageSharp.gatsbyImageData} attribution={<span>Image: AegirPhotography, <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.flickr.com/photos/crouchy69/7089589365">via Flickr</a> under CC license</span>} alt="Daniel Dennett books" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>


            <p><span className="big-letter">D</span>aniel Dennett (1942 - 2024) was a monumental philosopher whose influence and legacy will loom large across the subject for decades to come.</p>
            
            <p>Some of my earliest exposure to the philosophy of consciousness was reading Dennett’s work back when I was an undergraduate, and I have very fond memories of being shocked yet compelled by his audacious theory of eliminative materialism.</p>

            <p>Dennett wrote provocatively and persuasively not just on consciousness, however, but across a whole range of philosophical problems — from philosophy of mind and the ethics of AI (see <Link to="/articles/what-happens-when-machines-become-smarter-than-people/">Dennett on the dangers of AI here</Link>), to free will, religion, and the philosophy of science.</p>

            <p>One of my favorite lines from Dennett comes from his 2006 book, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Breaking-Spell-Religion-Natural-Phenomenon/dp/0143038338?&linkCode=ll1&tag=philosophybre-20&linkId=7c3422a26cc9e4abfcbe4b91affcee1c&language=en_US&ref_=as_li_ss_tl">Breaking the Spell: Religion as a Natural Phenomenon</a>:</p>

            <blockquote><p>If you can approach the world’s complexities, both its glories and its horrors, with an attitude of humble curiosity, acknowledging that however deeply you have seen, you have only scratched the surface, you will find worlds within worlds, beauties you could not heretofore imagine, and your own mundane preoccupations will shrink to proper size, not all that important in the greater scheme of things.</p></blockquote>

            <p>This reading list consists of my picks of the best 5 books for getting started with Dennett.</p>
            
            <p>While there are many articles, essays, and works to choose from (including Dennett’s <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Ive-Been-Thinking-Daniel-Dennett/dp/0393868052?&linkCode=ll1&tag=philosophybre-20&linkId=1660966e7e1b0208eefb874638d35d06&language=en_US&ref_=as_li_ss_tl">recently released memoirs</a>), I’ve aimed to select a representative sample covering his core areas of concern.</p>

            <p>If there are any others you’d have on this list instead, do let me know your thoughts. Let’s dive in!</p>

              <h2>1. Consciousness Explained, by Daniel Dennett</h2>
              <BookLink title="Consciousness Explained" author="Daniel Dennett" link="https://www.amazon.com/Consciousness-Explained-Daniel-C-Dennett/dp/0316180661?&linkCode=ll1&tag=philosophybre-20&linkId=d4df62d2f9ed12737c99e41a5713584c&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

            <p>Published in 1991, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Consciousness-Explained-Daniel-C-Dennett/dp/0316180661?&linkCode=ll1&tag=philosophybre-20&linkId=d4df62d2f9ed12737c99e41a5713584c&language=en_US&ref_=as_li_ss_tl">Consciousness Explained</a> is Dennett’s brilliant examination of our theories of mind and consciousness.</p>

            <p>Dennett presents his own stance of eliminative materialism, suggesting that much of what we uncontroversially assume to exist in the mind is in fact a persistent illusion — leading some philosophers to joke that the book would be better titled <i>Consciousness Explained Away</i>.</p>

            <p>Nevertheless, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Consciousness-Explained-Daniel-C-Dennett/dp/0316180661?&linkCode=ll1&tag=philosophybre-20&linkId=d4df62d2f9ed12737c99e41a5713584c&language=en_US&ref_=as_li_ss_tl">Consciousness Explained</a> is a crucial contribution to the contemporary literature around philosophy of mind, and features on my list of the <Link to="/reading-lists/consciousness/">best books on consciousness</Link>.</p>
            
            <p>While it can be dense and challenging to read, Dennett’s sharp, penetrating intellect — as well as his talent for drawing and synthesizing knowledge from many different research fields — is on full display.</p>



              <h2>2. Darwin’s Dangerous Idea: Evolution and the Meanings of Life, by Daniel Dennett</h2>
              <BookLink title="Darwin’s Dangerous Idea: Evolution and the Meanings of Life" author="Daniel Dennett" link="https://www.amazon.com/DARWINS-DANGEROUS-IDEA-EVOLUTION-MEANINGS/dp/068482471X?&linkCode=ll1&tag=philosophybre-20&linkId=6d9f7c58e74c53c9a60dbe0676fae0fa&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

              <p>In his 1995 book <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/DARWINS-DANGEROUS-IDEA-EVOLUTION-MEANINGS/dp/068482471X?&linkCode=ll1&tag=philosophybre-20&linkId=6d9f7c58e74c53c9a60dbe0676fae0fa&language=en_US&ref_=as_li_ss_tl">Darwin’s Dangerous Idea: Evolution and the Meanings of Life</a>, Dennett suggests that we still haven’t fully digested the power and implications of the Darwinian Revolution.</p>
              
              <p>Dennett seeks to rectify that by illuminating and discussing the state of play in evolutionary biology, and the consequences it has for our understanding of ourselves and the cosmos generally.</p>
            
                <p>An accessible whirlwind of a read, some claim this is Dennett’s best book — and given the explanatory power of the prose, it’s difficult to disagree.</p>
                
                <p>If you’re interested in reading a brilliantly insightful philosophical exploration of evolution and natural selection, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/DARWINS-DANGEROUS-IDEA-EVOLUTION-MEANINGS/dp/068482471X?&linkCode=ll1&tag=philosophybre-20&linkId=6d9f7c58e74c53c9a60dbe0676fae0fa&language=en_US&ref_=as_li_ss_tl">Darwin’s Dangerous Idea</a>.</p>


            <BigSubscribe />


              <h2>3. Intuition Pumps And Other Tools for Thinking, by Daniel Dennett</h2>
              <BookLink title="Intuition Pumps And Other Tools for Thinking" author="Daniel Dennett" link="https://www.amazon.com/Intuition-Pumps-Other-Tools-Thinking/dp/0393348784?&linkCode=ll1&tag=philosophybre-20&linkId=bfbffc0f17a189978e9cec1c017fa175&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />

            
            <p>Published in 2013, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Intuition-Pumps-Other-Tools-Thinking/dp/0393348784?&linkCode=ll1&tag=philosophybre-20&linkId=bfbffc0f17a189978e9cec1c017fa175&language=en_US&ref_=as_li_ss_tl">Intuition Pumps And Other Tools for Thinking</a> is Dennett’s excellent, accessible guide on how to think critically and make progress in philosophy. Dennett offers a whole range of tools to be used in any area of life to sharpen one’s analysis and improve one’s decision-making.</p>

            <p>For instance, one of Dennett’s most popularly useful contributions to philosophy is a list of ‘rules of engagement’ for critiquing philosophical arguments — a list seen in many an undergraduate lecture hall.</p>
            
            <p>Dennett adapts and synthesizes a set of principles offered by the game theorist Anatol Rapoport, and presents the following checklist:</p>

            <blockquote>
                <p>How to compose a successful critical commentary:<br/><br/>
                1. You should attempt to re-express your target’s position so clearly, vividly, and fairly that your target says, “Thanks, I wish I’d thought of putting it that way.”<br/><br/>
                2. You should list any points of agreement (especially if they are not matters of general or widespread agreement).<br/><br/>
                3. You should mention anything you have learned from your target.<br/><br/>
                4. Only then are you permitted to say so much as a word of rebuttal or criticism.</p>
            </blockquote>

            <p>Of course, it is easy to see how such rules have value beyond academic philosophy.</p>

            <p>Written with great humor and style, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Intuition-Pumps-Other-Tools-Thinking/dp/0393348784?&linkCode=ll1&tag=philosophybre-20&linkId=bfbffc0f17a189978e9cec1c017fa175&language=en_US&ref_=as_li_ss_tl">Intuition Pumps And Other Tools for Thinking</a> is a fantastic insight into how one of our greatest modern philosophers approached the subject.</p>


              <h2>4. Elbow Room: The Varieties of Free Will Worth Wanting, by Daniel Dennett</h2>
              <BookLink title="Elbow Room: The Varieties of Free Will Worth Wanting" author="Daniel Dennett" link="https://www.amazon.com/Elbow-Room-Varieties-Wanting-Bradford/dp/0262527790?&linkCode=ll1&tag=philosophybre-20&linkId=2525e3dbde6055327ee533297333a67c&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

              <p>Amid all the hype around free will being an illusion, Dennett sets out to rescue a nuanced conception of what freedom even means in his 1984 book, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Elbow-Room-Varieties-Wanting-Bradford/dp/0262527790?&linkCode=ll1&tag=philosophybre-20&linkId=2525e3dbde6055327ee533297333a67c&language=en_US&ref_=as_li_ss_tl">Elbow Room: The Varieties of Free Will Worth Wanting</a>.</p>

              <p>An often witty and always engaging read, in this landmark book Dennett makes a powerful case for compatibilism, arguing that the varieties of free will that underwrite moral and artistic responsibility are not threatened by determinism nor the findings of neuroscience — but rather contextualized by them.</p>

              <p>Disentangling what he thinks are common errors in thinking around free will — particularly the problematic view that freedom requires “an ability to have done otherwise” — Dennett arms his readers with powerful ways to conceptualize the nuances of the debate.</p>
                
                <p>(For a quick insight into Dennett’s position, see my short overview of his response to Sam Harris claiming <Link to="/articles/free-will-illusion-sam-harris/">free will is an illusion</Link>).</p>

              <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Elbow-Room-Varieties-Wanting-Bradford/dp/0262527790?&linkCode=ll1&tag=philosophybre-20&linkId=2525e3dbde6055327ee533297333a67c&language=en_US&ref_=as_li_ss_tl">Elbow Room</a> features on my <Link to="/reading-lists/free-will/">free will reading list</Link> and is an essential read for anyone interested in the topic. If you enjoy it, it’s worth checking out Dennett’s 2004 work, the fantastically lucid <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Freedom-Evolves-Daniel-C-Dennett/dp/0142003840?&linkCode=ll1&tag=philosophybre-20&linkId=b1c76fb2062ffde8808158f2ebeb0776&language=en_US&ref_=as_li_ss_tl">Freedom Evolves</a>, in which he attempts to demonstrate how human freedom is baked into our biology.</p>



              <h2>5. From Bacteria to Bach and Back: The Evolution of Minds, by Daniel Dennett</h2>
              <BookLink title="From Bacteria to Bach and Back: The Evolution of Minds" author="Daniel Dennett" link="https://www.amazon.com/Bacteria-Bach-Back-Evolution-Minds/dp/0393355500?&linkCode=ll1&tag=philosophybre-20&linkId=af549b0875a1a52a2cb8ba3ab3f04c7e&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />

              <p>How did we come to have minds? How has intelligence evolved? How might machines express intelligence? What are the origins of language and culture? What is human consciousness? How did it become possible for our minds to even ask this question?</p>

            <p>It is difficult problems such as these that Dennett sets out to answer in his spectacularly wide-ranging yet profound 2017 book <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Bacteria-Bach-Back-Evolution-Minds/dp/0393355500?&linkCode=ll1&tag=philosophybre-20&linkId=8517150bd2b22dcc3110b32e9a3b5a3e&language=en_US&ref_=as_li_ss_tl">From Bacteria to Bach and Back: The Evolution of Minds</a>, where he combines his positions from different areas of philosophy in the attempt to establish a broad explanatory theory of virtually everything.</p>
            
            <p>Dennett takes the reader on a riveting journey from natural selection and ‘design without a designer’ through to cultural evolution and the birth of intelligent (human) design.</p>
            
            <p>I discuss a section of this book in my short article, <Link to="/articles/what-happens-when-machines-become-smarter-than-people/">What Happens When Machines Become Smarter than People?</Link>, but the breadth and depth of the ideas Dennett presents in <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Bacteria-Bach-Back-Evolution-Minds/dp/0393355500?&linkCode=ll1&tag=philosophybre-20&linkId=8517150bd2b22dcc3110b32e9a3b5a3e&language=en_US&ref_=as_li_ss_tl">From Bacteria to Bach and Back</a> will no doubt keep the philosophical community busy for many years to come.</p>
            
              
              <h2>Further reading</h2>
              <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> or <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram</a>.</p>
              <CtaReadingList />
          </div>

          {/*sidebar*/}
          <Sidebar />

        </div>
        
        {/*post reading list*/}
        <PostReadingList />

    </Layout>
    </>
  )
}

export const query = graphql`{
  title: file(relativePath: {eq: "Dennett.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "consciousness-explained.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "dennett-darwin.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "dennett-intuition.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "freewill-dennett.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "dennett-bach.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "beauvoir-death.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "beauvoir-age.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList