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
import MailchimpPopUp from "../../../components/mailchimpPopUp"

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Epicureanism Reading List – The Best 5 Books to Read" description="A curated reading list of the best and most essential books of and about Epicureanism." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Epicureanism" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Epicurus" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>

            <p><span className="big-letter">E</span>picureanism is a philosophy based on the teachings of the ancient Greek thinker Epicurus, and a strong philosophical rival to <Link to="/reading-lists/stoicism/">Stoicism</Link>, another prominent ancient Greek philosophy.</p>

            <p>Often caricatured as a rather hedonistic, pleasure-obsessed philosophy, Epicureanism is actually more about living life free from anxiety and bodily pain, and places a strong emphasis on friendship and community in the search for a meaningful, happy human life.</p>
            
            <p>And, as well as a popular ethics, Epicureanism also offers a rich <Link to="/reading-lists/epistemology/">epistemology</Link> and <Link to="/reading-lists/metaphysics/">metaphysics</Link>. Epicurus rejected the existence of an immaterial soul, or of anything non-physical, and said that the gods have no influence on our lives. This led to a rather unsentimental attitude towards mortality — Epicurus believed fearing death was highly irrational — which we discuss further in our <Link to="/articles/epicurus-on-why-death-should-not-concern-us/">explainer on why Epicurus said death is ‘nothing to us’</Link>.</p> 

            <div className="course-promo text-center">
                <h4>Philosophy in Your Twitter Feed</h4>
                <p className="small-grey-font">Follow Philosophy Break on Twitter to get distilled wisdom from the great philosophers directly in your Twitter feed.</p>
                <a target="_blank" rel="noopener noreferrer" className="button secondary" href="https://twitter.com/philosophybreak"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>Follow Philosophy Break</a>
            </div>

            <p>Only fragments of Epicurus’s own writings survive (they’re collectively presented in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a>, listed below). Among these fragments are Epicurus’s 40 Principal Doctrines (we present and discuss these <Link to="/articles/epicurus-principal-doctrines-40-aphorisms-for-living-well/">40 short Epicurean aphorisms here</Link>), which we know of only because they are quoted in full in Diogenes Laertius’s celebrated third-century survey of ancient Greek thinkers, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a>.</p> 

            <p>While <Link to="/articles/epicurus-principal-doctrines-40-aphorisms-for-living-well/">Epicurus’s 40 Principal Doctrines</Link> and other fragments do offer concise summaries of Epicurean thinking, the bulk of what we know about Epicurean philosophy comes largely through the work of Epicurus’s contemporaries, followers, and critics from the ancient Greco-Roman period.</p>
            
            <p>A particularly noteworthy figure in this respect is the Roman poet Lucretius, whose epic poem <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140447962/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447962&linkId=479a12c489586060bdaa64ed1703fd90">On the Nature of Things</a> forms the cornerstone of what we know about how Epicurus saw the world (as discussed in our brief article on <Link to="/articles/why-death-is-nothing-to-fear-lucretius-epicureanism/">Lucretius’s beautiful reflection on Epicureanism and mortality</Link>).</p>

            <p>From introductions and anthologies to ancient sources, this reading list consists of the best books of and about Epicureanism. After reading it, you’ll understand exactly why this ancient philosophy remains a deeply influential guide for those looking to live good and meaningful lives today. Let’s dive in!</p> 

            
            <h2>1. Epicureanism, by Tim O’Keefe</h2>
            <p>Published in 2009, Tim O’Keefe’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Epicureanism-Ancient-Philosophies-Tim-OKeefe-ebook/dp/B0BBSLXFJ4?&linkCode=ll1&tag=philosophybre-20&linkId=76b3515d1d13970e5a6d0fae59d04efe&language=en_US&ref_=as_li_ss_tl">Epicureanism</a> is a fantastic place to start for anyone with an interest in the Epicurean view on the world. O’Keefe explores Epicurean metaphysics, epistemology, and ethics with accessible language and balance, examining the strengths and weaknesses of Epicurean arguments, and outlining how the philosophy hangs together as a whole. Written with a popular audience in mind, this is an easy, concise entry point into Epicureanism.</p>
            <BookLink title="Epicureanism" author="Tim O’Keefe" link="http://www.amazon.com/Epicureanism-Ancient-Philosophies-Tim-OKeefe-ebook/dp/B0BBSLXFJ4?&linkCode=ll1&tag=philosophybre-20&linkId=76b3515d1d13970e5a6d0fae59d04efe&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

            <h2>2. The Cambridge Companion to Epicureanism, by James Warren</h2>
            <p>If you’re seeking a deeper, more philosophically rigorous and thorough introduction to Epicurean thinking, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Epicureanism-Companions-Philosophy-dp-0521695309/dp/0521695309?&linkCode=ll1&tag=philosophybre-20&linkId=db814b69effcac80831364b6fc1d40c3&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Epicureanism</a>, edited by James Warren. This volume assembles 15 brilliant essays from leading scholars discussing various aspects of Epicurean thought, including chapters on Epicurean physics, metaphysics, epistemology, politics, ethics, and more. While the focus of the essays can extend beyond Epicurus, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Epicureanism-Companions-Philosophy-dp-0521695309/dp/0521695309?&linkCode=ll1&tag=philosophybre-20&linkId=db814b69effcac80831364b6fc1d40c3&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Epicureanism</a> belongs on the bookshelf of any serious student of Epicureanism.</p>
            <BookLink title="The Cambridge Companion to Epicureanism" author="James Warren" link="http://www.amazon.com/Cambridge-Companion-Epicureanism-Companions-Philosophy-dp-0521695309/dp/0521695309?&linkCode=ll1&tag=philosophybre-20&linkId=db814b69effcac80831364b6fc1d40c3&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

            <h2>3. The Art of Happiness, by Epicurus</h2>
            <p>Turning from introductions to primary texts, where better to start than with the writings of Epicurus himself? <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a> includes all the Epicurean writings in existence, including Epicurus’s letters, Principal Doctrines, and Vatican sayings, and places them alongside parallel passages from Lucretius, Diogenes Laeritius, and a compelling introductory essay from the writer Daniel Klein. <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a> belongs on the bookshelf of anyone curious about Epicurus.</p>
            <BookLink title="The Art of Happiness" author="Epicurus" link="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />

            <h2>4. On the Nature of Things, by Lucretius</h2>
            <p>Another beautiful ancient source espousing the core tents of Epicureanism, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140447962/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447962&linkId=479a12c489586060bdaa64ed1703fd90">On the Nature of Things</a> is a didactic, six-book poem exploring everything from the fundamental nature of reality and what we can know, to the character of goodness and how we should best live. Since its publication over 2,000 years ago, Lucretius’s poem has been celebrated by such thinkers as Montaigne, Thomas Jefferson, and Einstein. It’s a fantastic, lyrical, essential work of Epicurean philosophy.</p>
            <BookLink title="On the Nature of Things" author="Lucretius" link="http://www.amazon.com/gp/product/0140447962/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447962&linkId=479a12c489586060bdaa64ed1703fd90" img={data.four.childImageSharp.gatsbyImageData} />

            <h2>5. Lives of the Eminent Philosophers, by Diogenes Laertius</h2>
            <p>Compiled in the third century CE, Diogenes Laertius’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a> has provided generations of people with incredible insight into the lives and philosophies of ancient Greco-Roman philosophers. It’s an absolutely critical source for fragments of ancient works that would otherwise be lost, and Epicureanism is no exception, with book ten of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a> dedicated to Epicurus, providing a brief commentary on and presentation of his works. While the Epicurean material in this book is also compiled in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Art-Happiness-Penguin-Classics/dp/0143107216?&linkCode=ll1&tag=philosophybre-20&linkId=d8a3b590522e1bcf3bc04d808e1695d1&language=en_US&ref_=as_li_ss_tl">The Art of Happiness</a>, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26">Lives of the Eminent Philosophers</a> is worthy of a place on your bookshelf for covering multiple brilliant ancient thinkers, from Pythagoras to Aristotle.</p>
            <BookLink title="Lives of the Eminent Philosophers" author="Diogenes Laertius" link="http://www.amazon.com/gp/product/0197523390/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0197523390&linkId=4f41f433d7cd2ad97c98fcc8f3c45b26" img={data.five.childImageSharp.gatsbyImageData} />
            
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