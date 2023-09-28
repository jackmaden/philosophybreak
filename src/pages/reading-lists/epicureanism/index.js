import React from "react"
import { graphql, Link } from "gatsby"
import { getSrc, StaticImage } from "gatsby-plugin-image"

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
    <Seo title="Epicureanism Reading List – The Best 6 Books to Read" description="A curated reading list of the best and most essential books of and about Epicureanism." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Epicureanism" number="6" img={data.title.childImageSharp.gatsbyImageData} alt="Epicurus" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

              <p><span className="big-letter">E</span>picureanism is a philosophy based on the teachings of the ancient Greek thinker Epicurus, and a strong philosophical rival to <Link to="/reading-lists/stoicism/">Stoicism</Link>, another prominent ancient Greek philosophy.</p>

              <p>Often caricatured as a rather hedonistic, pleasure-obsessed philosophy, Epicureanism (as we outline in our brief <Link to="/articles/epicureanism-defined-philosophy-is-a-form-of-therapy/">Epicureanism definition and explainer</Link>) is actually more about living life free from anxiety and bodily pain, and places a strong emphasis on friendship and community in the search for a meaningful, happy human life.</p>
              
              <p>And, as well as a popular ethics, Epicureanism also offers a rich <Link to="/reading-lists/epistemology/">epistemology</Link> and <Link to="/articles/metaphysics-what-is-it-why-is-it-important-today/">metaphysics</Link>. Epicurus rejected the existence of an immaterial soul, or of anything non-physical, and said that the gods have no influence on our lives. This led to a rather unsentimental attitude towards mortality — Epicurus believed fearing death was highly irrational — which we discuss further in our <Link to="/articles/epicurus-on-why-death-should-not-concern-us/">explainer on why Epicurus said death is ‘nothing to us’</Link>.</p> 

              <p>Only fragments of Epicurus’s own writings survive (they’re collectively presented in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a>, listed below). Among these fragments are Epicurus’s 40 Principal Doctrines (we present and discuss these <Link to="/articles/epicurus-principal-doctrines-40-aphorisms-for-living-well/">40 short Epicurean aphorisms here</Link>), which we know of only because they are quoted in full in Diogenes Laertius’s celebrated third-century survey of ancient Greek thinkers, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a>.</p> 

              <p>While <Link to="/articles/epicurus-principal-doctrines-40-aphorisms-for-living-well/">Epicurus’s 40 Principal Doctrines</Link> and other fragments do offer concise summaries of Epicurean thinking, the bulk of what we know about Epicurean philosophy comes largely through the work of Epicurus’s contemporaries, followers, and critics from the ancient Greco-Roman period.</p>

              <BigSubscribe />
              
              <p>A particularly noteworthy figure in this respect is the Roman poet Lucretius, whose epic poem <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140447962/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447962&linkId=479a12c489586060bdaa64ed1703fd90">On the Nature of Things</a> forms the cornerstone of what we know about how Epicurus saw the world (as discussed in our brief article on <Link to="/articles/why-death-is-nothing-to-fear-lucretius-epicureanism/">Lucretius’s beautiful reflection on Epicureanism and mortality</Link>).</p>

              <p>From introductions and anthologies to ancient sources, this reading list consists of the best books of and about Epicureanism. After reading it, you’ll understand exactly why this ancient philosophy remains a deeply influential guide for those looking to live good and meaningful lives today. Let’s dive in!</p> 

              
              <h2>1. Epicureanism, by Tim O’Keefe</h2>
              <BookLink title="Epicureanism" author="Tim O’Keefe" link="http://www.amazon.com/Epicureanism-Ancient-Philosophies-Tim-OKeefe-ebook/dp/B0BBSLXFJ4?&linkCode=ll1&tag=philosophybre-20&linkId=76b3515d1d13970e5a6d0fae59d04efe&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 2009, Tim O’Keefe’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Epicureanism-Ancient-Philosophies-Tim-OKeefe-ebook/dp/B0BBSLXFJ4?&linkCode=ll1&tag=philosophybre-20&linkId=76b3515d1d13970e5a6d0fae59d04efe&language=en_US&ref_=as_li_ss_tl">Epicureanism</a> is a fantastic place to start for anyone with an interest in the Epicurean view on the world.</p>
              
              <p>O’Keefe explores Epicurean metaphysics, epistemology, and ethics with accessible language and balance, examining the strengths and weaknesses of Epicurean arguments, and outlining how the philosophy hangs together as a whole. Written with a popular audience in mind, this is an easy, concise entry point into Epicureanism.</p>
              

              <h2>2. The Cambridge Companion to Epicureanism, by James Warren</h2>
              <BookLink title="The Cambridge Companion to Epicureanism" author="James Warren" link="http://www.amazon.com/Cambridge-Companion-Epicureanism-Companions-Philosophy-dp-0521695309/dp/0521695309?&linkCode=ll1&tag=philosophybre-20&linkId=db814b69effcac80831364b6fc1d40c3&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking a deeper, more philosophically rigorous and thorough introduction to Epicurean thinking, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Epicureanism-Companions-Philosophy-dp-0521695309/dp/0521695309?&linkCode=ll1&tag=philosophybre-20&linkId=db814b69effcac80831364b6fc1d40c3&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Epicureanism</a>, edited by James Warren.</p>
              
              <p>This volume assembles 15 brilliant essays from leading scholars discussing various aspects of Epicurean thought, including chapters on Epicurean physics, metaphysics, epistemology, politics, ethics, and more.</p>
              
              <p>While the focus of the essays can extend beyond Epicurus, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Epicureanism-Companions-Philosophy-dp-0521695309/dp/0521695309?&linkCode=ll1&tag=philosophybre-20&linkId=db814b69effcac80831364b6fc1d40c3&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Epicureanism</a> belongs on the bookshelf of any serious student of Epicureanism.</p>

              <h2>3. How to Live a Good Life (According to 7 of the World’s Wisest Philosophies), by Philosophy Break</h2>
              <div className="article white">
                  <Link to="/how-to-live-a-good-life/">
                        <StaticImage src="../../../images/PFL-mob.png" alt="How to Live a Good Life" placeholder="blurred" />
                        <div className="article-info">
                            <h4>How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</h4>
                            <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BY PHILOSOPHY BREAK</p>
                            <p style={{margin: "0 0 3px"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span><span style={{fontSize: '12px'}}> (50+ reviews)</span></p>
                            <Link to="/how-to-live-a-good-life/" className="primary button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>Get Instant Access</Link>
                        </div>
                    </Link>
                </div>
                <p>If you’re interested in learning not just about Epicureanism, but comparing its insights to six rival philosophies for life, look no further than the 2023 <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link>. This concise online guide is instantly accessible from any device and distills the best and most important wisdom from Epicureanism, Stoicism, Buddhism, and more.</p>
                <p>Of course, we’re a little biased, as we produced this one — but if you’re seeking to understand some of life’s most influential ethical frameworks, examine the pros and cons of each, and discover how they might apply to your own life, then this is the guide for you. <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link> gets rave reviews, is better value than buying introductory books for all philosophies covered, and might be just what you’re looking for!</p>
              

              <h2>4. The Art of Happiness, by Epicurus</h2>
              <BookLink title="The Art of Happiness" author="Epicurus" link="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary texts, where better to start than with the writings of Epicurus himself?</p>
              
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a> includes all the Epicurean writings in existence, including Epicurus’s letters, Principal Doctrines, and Vatican sayings, and places them alongside parallel passages from Lucretius, Diogenes Laeritius, and a compelling introductory essay from the writer Daniel Klein.</p>
              
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a> belongs on the bookshelf of anyone curious about Epicurus.</p>
              

              <h2>5. On the Nature of Things, by Lucretius</h2>
              <BookLink title="On the Nature of Things" author="Lucretius" link="http://www.amazon.com/gp/product/0140447962/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447962&linkId=479a12c489586060bdaa64ed1703fd90" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Another beautiful ancient source espousing the core tents of Epicureanism, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140447962/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447962&linkId=479a12c489586060bdaa64ed1703fd90">On the Nature of Things</a> is a didactic, six-book poem exploring everything from the fundamental nature of reality and what we can know, to the character of goodness and how we should best live.</p>
              
              <p>Since its publication over 2,000 years ago, Lucretius’s poem has been celebrated by such thinkers as Montaigne, Thomas Jefferson, and Einstein. It’s a fantastic, lyrical, essential work of Epicurean philosophy.</p>
              

              <h2>6. Lives of the Eminent Philosophers, by Diogenes Laertius</h2>
              <BookLink title="Lives of the Eminent Philosophers" author="Diogenes Laertius" link="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26" img={data.five.childImageSharp.gatsbyImageData} />
              <p>Compiled in the third century CE, Diogenes Laertius’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a> has provided generations of people with incredible insight into the lives and philosophies of ancient Greco-Roman philosophers.</p>
              
              <p>It’s an absolutely critical source for fragments of ancient works that would otherwise be lost, and Epicureanism is no exception, with book ten of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a> dedicated to Epicurus, providing a brief commentary on and presentation of his works.</p>
              
              <p>While the Epicurean material in this book is also compiled in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a>, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a> is worthy of a place on your bookshelf for covering multiple brilliant ancient thinkers, from Pythagoras to Aristotle.</p>
              
              
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
  title: file(relativePath: {eq: "epicureanism.webp"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "epicureanism-keefe.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "epicureanism-cambridge.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "epicureanism-artofhappiness.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "epicureanism-lucretius.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "epicureanism-diogenes.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList