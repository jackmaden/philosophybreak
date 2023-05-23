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

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Epicureanism Reading List – The Best 5 Books to Read" description="A curated reading list of the best and most essential books of and about Epicureanism." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Epicureanism" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Epicurus" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>

            <p><span className="big-letter">E</span>picureanism is a philosophy based on the teachings of the ancient Greek thinker Epicurus, and a strong philosophical rival to <Link to="/reading-lists/stoicism/">Stoicism</Link>, another prominent ancient Greek philosophy.</p>

            <p>Often caricatured as a rather hedonistic, pleasure-obsessed philosophy, Epicureanism (as we outline in our brief <Link to="/articles/epicureanism-defined-philosophy-is-a-form-of-therapy/">Epicureanism definition and explainer</Link>) is actually more about living life free from anxiety and bodily pain, and places a strong emphasis on friendship and community in the search for a meaningful, happy human life.</p>
            
            <p>And, as well as a popular ethics, Epicureanism also offers a rich <Link to="/reading-lists/epistemology/">epistemology</Link> and <Link to="/reading-lists/metaphysics/">metaphysics</Link>. Epicurus rejected the existence of an immaterial soul, or of anything non-physical, and said that the gods have no influence on our lives. This led to a rather unsentimental attitude towards mortality — Epicurus believed fearing death was highly irrational — which we discuss further in our <Link to="/articles/epicurus-on-why-death-should-not-concern-us/">explainer on why Epicurus said death is ‘nothing to us’</Link>.</p> 

            <div className="course-promo darkradial-background text-center">
                <h4>Philosophies for Living: the Ultimate Guide to Enriching Your Personal Philosophy</h4>
                <p className="review-font"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> (50+ reviews)</p>
                <p className="small-grey-font">Enhance your approach to life by exploring 7 of the world’s wisest and most influential philosophies for living — including Epicureanism, Stoicism, and Buddhism.</p>
                <Link className="button primary" href="/philosophies-for-living/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Sign Up Now</Link>
            </div>

            <p>Only fragments of Epicurus’s own writings survive (they’re collectively presented in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a>, listed below). Among these fragments are Epicurus’s 40 Principal Doctrines (we present and discuss these <Link to="/articles/epicurus-principal-doctrines-40-aphorisms-for-living-well/">40 short Epicurean aphorisms here</Link>), which we know of only because they are quoted in full in Diogenes Laertius’s celebrated third-century survey of ancient Greek thinkers, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a>.</p> 

            <p>While <Link to="/articles/epicurus-principal-doctrines-40-aphorisms-for-living-well/">Epicurus’s 40 Principal Doctrines</Link> and other fragments do offer concise summaries of Epicurean thinking, the bulk of what we know about Epicurean philosophy comes largely through the work of Epicurus’s contemporaries, followers, and critics from the ancient Greco-Roman period.</p>
            
            <p>A particularly noteworthy figure in this respect is the Roman poet Lucretius, whose epic poem <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140447962/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447962&linkId=479a12c489586060bdaa64ed1703fd90">On the Nature of Things</a> forms the cornerstone of what we know about how Epicurus saw the world (as discussed in our brief article on <Link to="/articles/why-death-is-nothing-to-fear-lucretius-epicureanism/">Lucretius’s beautiful reflection on Epicureanism and mortality</Link>).</p>

            <p>From introductions and anthologies to ancient sources, this reading list consists of the best books of and about Epicureanism. After reading it, you’ll understand exactly why this ancient philosophy remains a deeply influential guide for those looking to live good and meaningful lives today. Let’s dive in!</p> 

            
            <h2>1. Epicureanism, by Tim O’Keefe</h2>
            <BookLink title="Epicureanism" author="Tim O’Keefe" link="http://www.amazon.com/Epicureanism-Ancient-Philosophies-Tim-OKeefe-ebook/dp/B0BBSLXFJ4?&linkCode=ll1&tag=philosophybre-20&linkId=76b3515d1d13970e5a6d0fae59d04efe&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
            <p>Published in 2009, Tim O’Keefe’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Epicureanism-Ancient-Philosophies-Tim-OKeefe-ebook/dp/B0BBSLXFJ4?&linkCode=ll1&tag=philosophybre-20&linkId=76b3515d1d13970e5a6d0fae59d04efe&language=en_US&ref_=as_li_ss_tl">Epicureanism</a> is a fantastic place to start for anyone with an interest in the Epicurean view on the world. O’Keefe explores Epicurean metaphysics, epistemology, and ethics with accessible language and balance, examining the strengths and weaknesses of Epicurean arguments, and outlining how the philosophy hangs together as a whole. Written with a popular audience in mind, this is an easy, concise entry point into Epicureanism.</p>
            

            <h2>2. The Cambridge Companion to Epicureanism, by James Warren</h2>
            <BookLink title="The Cambridge Companion to Epicureanism" author="James Warren" link="http://www.amazon.com/Cambridge-Companion-Epicureanism-Companions-Philosophy-dp-0521695309/dp/0521695309?&linkCode=ll1&tag=philosophybre-20&linkId=db814b69effcac80831364b6fc1d40c3&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
            <p>If you’re seeking a deeper, more philosophically rigorous and thorough introduction to Epicurean thinking, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Epicureanism-Companions-Philosophy-dp-0521695309/dp/0521695309?&linkCode=ll1&tag=philosophybre-20&linkId=db814b69effcac80831364b6fc1d40c3&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Epicureanism</a>, edited by James Warren. This volume assembles 15 brilliant essays from leading scholars discussing various aspects of Epicurean thought, including chapters on Epicurean physics, metaphysics, epistemology, politics, ethics, and more. While the focus of the essays can extend beyond Epicurus, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Epicureanism-Companions-Philosophy-dp-0521695309/dp/0521695309?&linkCode=ll1&tag=philosophybre-20&linkId=db814b69effcac80831364b6fc1d40c3&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Epicureanism</a> belongs on the bookshelf of any serious student of Epicureanism.</p>
            

            <h2>3. The Art of Happiness, by Epicurus</h2>
            <BookLink title="The Art of Happiness" author="Epicurus" link="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
            <p>Turning from introductions to primary texts, where better to start than with the writings of Epicurus himself? <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a> includes all the Epicurean writings in existence, including Epicurus’s letters, Principal Doctrines, and Vatican sayings, and places them alongside parallel passages from Lucretius, Diogenes Laeritius, and a compelling introductory essay from the writer Daniel Klein. <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a> belongs on the bookshelf of anyone curious about Epicurus.</p>
            

            <h2>4. On the Nature of Things, by Lucretius</h2>
            <BookLink title="On the Nature of Things" author="Lucretius" link="http://www.amazon.com/gp/product/0140447962/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447962&linkId=479a12c489586060bdaa64ed1703fd90" img={data.four.childImageSharp.gatsbyImageData} />
            <p>Another beautiful ancient source espousing the core tents of Epicureanism, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140447962/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447962&linkId=479a12c489586060bdaa64ed1703fd90">On the Nature of Things</a> is a didactic, six-book poem exploring everything from the fundamental nature of reality and what we can know, to the character of goodness and how we should best live. Since its publication over 2,000 years ago, Lucretius’s poem has been celebrated by such thinkers as Montaigne, Thomas Jefferson, and Einstein. It’s a fantastic, lyrical, essential work of Epicurean philosophy.</p>
            

            <h2>5. Lives of the Eminent Philosophers, by Diogenes Laertius</h2>
            <BookLink title="Lives of the Eminent Philosophers" author="Diogenes Laertius" link="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26" img={data.five.childImageSharp.gatsbyImageData} />
            <p>Compiled in the third century CE, Diogenes Laertius’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a> has provided generations of people with incredible insight into the lives and philosophies of ancient Greco-Roman philosophers. It’s an absolutely critical source for fragments of ancient works that would otherwise be lost, and Epicureanism is no exception, with book ten of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a> dedicated to Epicurus, providing a brief commentary on and presentation of his works. While the Epicurean material in this book is also compiled in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a>, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a> is worthy of a place on your bookshelf for covering multiple brilliant ancient thinkers, from Pythagoras to Aristotle.</p>
            
            
            <h2>Further reading</h2>
            <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> or <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram</a>.</p>
            <CtaReadingList />
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