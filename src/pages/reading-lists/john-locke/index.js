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
    <Seo title="John Locke Reading List – The Best 5 Books to Read" description="A curated reading list of the best books on and by the philosopher John Locke." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="John Locke" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="John Locke" />

        {/*container for sidebar*/}
        <div id="container">
        
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">T</span>he 17th-century English philosopher John Locke is, along with <Link to="/reading-lists/immanuel-kant/">Immanuel Kant</Link>, one of the Enlightenment’s most famous thinkers. Often dubbed the ‘father’ of empiricism, Locke is perhaps best known for his assertion that at birth <Link to="/articles/john-lockes-empiricism-why-we-are-all-tabula-rasas-blank-slates/">we are all tabula rasas (blank slates)</Link>, as well as for his foundational contribution to modern liberalism.</p>

              <p>Locke’s work has had a profound influence on the <Link to="/reading-lists/history-of-western-philosophy/">history of Western philosophy</Link>. In <Link to="/reading-lists/epistemology/">epistemology</Link>, for example, Locke reacted against the rationalism of thinkers like <Link to="/articles/i-think-therefore-i-am-descartes-cogito-ergo-sum-explained/">Descartes (‘I think therefore I am’)</Link>, and set in motion the great chain of empirical philosophy that would follow with philosophers like <Link to="/articles/george-berkeley-subjective-idealism-the-world-is-in-our-minds/">George Berkley</Link> and David Hume.</p>

              <p>In <Link to="/reading-lists/political-philosophy/">political philosophy</Link>, meanwhile, Locke’s emphasis on clearly separating Church and State had a pivotal impact on French thinkers like <Link to="/reading-lists/voltaire/">Voltaire</Link> and Rousseau, as well as the Founding Fathers of the United States. In fact, a passage from Locke’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0486424642/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486424642&linkId=dfa7ae0d2efd4cc9a965866ed9a19c4e">Second Treatise of Government</a> is reproduced verbatim in the US Declaration of Independence.</p>

              <BigSubscribe />

              <p>Given these contributions, the late philosopher Bryan Magee argues there’s a case to be made that Locke is the most influential philosopher since the great <Link to="/reading-lists/aristotle/">ancient Greek thinker Aristotle</Link>. Summarizing Locke’s legacy in his philosophical memoirs, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0375750363/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0375750363&linkId=596dfdfc7e47562aebc7063290597368">Confessions of a Philosopher</a>, Magee writes:</p>

              <blockquote><p>If Locke has come to be thought of as something of a plain, commonsensical thinker, perhaps even a bit pedestrian, it is because what he had to say has become so familiar that it may be in danger of seeming obvious to us now; but the truth is that when he put it forward it was profoundly original, and not obvious at all. The fact that it can seem obvious now is a measure of his influence. Indeed, it could be seriously argued that he is the most influential philosopher since Aristotle.</p></blockquote>

              <p>This reading list consists of the best books on and by John Locke. After reading it, you’ll understand exactly why this brilliant 17th-century thinker has been so influential on modern civilization.</p>

              <h2>1. Locke: A Very Short Introduction, by John Dunn</h2>
              <BookLink title="Locke: A Very Short Introduction" author="John Dunn" link="http://www.amazon.com/Locke-Short-Introduction-John-Dunn/dp/0192803948?&linkCode=ll1&tag=philosophybre-20&linkId=b5ce970195ef6d082d6d003ab4d84405&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 2003, John Dunn’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Locke-Short-Introduction-John-Dunn/dp/0192803948?&linkCode=ll1&tag=philosophybre-20&linkId=b5ce970195ef6d082d6d003ab4d84405&language=en_US&ref_=as_li_ss_tl">Locke: A Very Short Introduction</a> is a fantastic place to start for anyone with a budding interest in John Locke’s philosophy. Considering the sheer breadth and depth of Locke’s thinking, Dunn does an admirable job in providing an illuminating overview of his most important ideas. Dunn also provides helpful background to contextualize Locke’s work, and makes clear why his influence continues to be so enduring. Coming in at an accessible 112 pages, this is a very nice entry point to Locke.</p>
              

              <h2>2. Locke: A Biography, by Roger Woolhouse</h2>
              <BookLink title="Locke: A Biography" author="Roger Woolhouse" link="http://www.amazon.com/Locke-Biography-Roger-Woolhouse/dp/0521748801?&linkCode=ll1&tag=philosophybre-20&linkId=11b6d2726e796b566310285b8fad3fd8&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking to dive a little deeper with your Locke scholarship, look no further than Roger Woolhouse’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Locke-Biography-Roger-Woolhouse/dp/0521748801?&linkCode=ll1&tag=philosophybre-20&linkId=11b6d2726e796b566310285b8fad3fd8&language=en_US&ref_=as_li_ss_tl">Locke: A Biography</a>, first published in 2008. Offering the first biography of Locke in over half a century, Woolhouse does a wonderful job in guiding the reader through Locke’s varied life and thought against the historical background of the English Civil War, religious intolerance, and bigotry. Woolhouse not only outlines and contextualizes Locke’s philosophy, but provides facinating insights into debates and arguments he had with other intellectuals of the period. With its 560 pages packed full of insight, this book is a brilliant accompaniment for those seeking a deeper understanding of Locke’s life, thought, and enduring legacy.</p>
              

              <h2>3. The Cambridge Companion to Locke, by Vere Chappell</h2>
              <BookLink title="The Cambridge Companion to Locke" author="Vere Chappell" link="http://www.amazon.com/Cambridge-Companion-Locke-Companions-Philosophy-ebook/dp/B00A4A6AFK?&linkCode=ll1&tag=philosophybre-20&linkId=c1921a692774978c9e467ee522e1db0f&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking a more philosophically engaged introduction to and critique of Locke’s philosophy, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Locke-Companions-Philosophy-ebook/dp/B00A4A6AFK?&linkCode=ll1&tag=philosophybre-20&linkId=c1921a692774978c9e467ee522e1db0f&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Locke</a>, edited by Vere Chappell. This volume assembles nine brilliant essays from leading scholars discussing various aspects of Locke’s thought, from his epistemology to his politics. An engaging and thoughtful read, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Locke-Companions-Philosophy-ebook/dp/B00A4A6AFK?&linkCode=ll1&tag=philosophybre-20&linkId=c1921a692774978c9e467ee522e1db0f&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Locke</a> belongs on the bookshelf of any serious student of Locke’s philosophy.</p>
              

              <h2>4. An Essay Concerning Human Understanding, by John Locke</h2>
              <BookLink title="An Essay Concerning Human Understanding" author="John Locke" link="http://www.amazon.com/gp/product/087220216X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=087220216X&linkId=ebfa57e638093b07e7676016415fbb51" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary texts, where better to start than with the text that cemented Locke’s name into the history of philosophy? Locke’s 1689 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/087220216X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=087220216X&linkId=ebfa57e638093b07e7676016415fbb51">An Essay Concerning Human Understanding</a> is one of the most important philosophical works of all time. It forever immortalized Locke as <i>the</i> empiricist of philosophy, as he argues that <Link to="/articles/john-lockes-empiricism-why-we-are-all-tabula-rasas-blank-slates/">human beings are born as blank slates</Link>, and that it is experience and experience only that furnishes the mind with ideas. This was in stark contrast to his rationalist predecessors and contemporaries, who believed it to be self-evident that we’re all born with innate ideas and knowledge. With this work, Locke formally started an argument that philosophers are still having today. Its originality and profundity make <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/087220216X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=087220216X&linkId=ebfa57e638093b07e7676016415fbb51">An Essay Concerning Human Understanding</a> a must read for anyone interested in where our ideas come from.</p>
              

              <h2>5. Second Treatise of Government, by John Locke</h2>
              <BookLink title="Second Treatise of Government" author="John Locke" link="http://www.amazon.com/gp/product/0486424642/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486424642&linkId=dfa7ae0d2efd4cc9a965866ed9a19c4e" img={data.five.childImageSharp.gatsbyImageData} />
              <p>The influence of John Locke’s 1689 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0486424642/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486424642&linkId=dfa7ae0d2efd4cc9a965866ed9a19c4e">Second Treatise of Government</a> can be observed simply by examining the constitutions of any democratically-elected government today. Widely regarded as <i>the</i> foundational text of modern liberalism, in this short work Locke asserts that we are all born equal and endowed with natural rights and freedoms, and that governments can never be considered legitimate unless they have the consent of the people. This particular edition also features Locke’s Letter Concerning Toleration, published in the same year, that aimed to end Christianity's wars of religion and called for the separation of church and state.</p>
              
              
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
  title: file(relativePath: {eq: "locke.webp"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "locke-intro.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "locke-bio.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "locke-cambridge.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "epistemology-locke.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "politics-locke.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList