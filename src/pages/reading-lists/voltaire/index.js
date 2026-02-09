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
    <Seo title="Voltaire Reading List – The Best 5 Books to Read" description="A curated reading list of the best books on and by the celebrated French thinker Voltaire." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Voltaire" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Compotier, Carafe and Open Book, by Juan Gris" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">V</span>oltaire (1694 - 1778) is the pen name of François-Marie Arouet, a French Enlightenment writer, historian, and philosopher. Famous for writing with supreme wit and intelligence, Voltaire was a strong advocate of civil liberties, free speech, and the separation of church and state, and wrote sustained critiques on the philosophy and religion of his contemporaries.</p>

              <p>Voltaire was a true celebrity of his day — his satires and outspoken polemics brought him huge international recognition — and, along with <Link to="/reading-lists/john-locke/">John Locke</Link> and <Link to="/reading-lists/immanuel-kant/">Immanuel Kant</Link>, he’s gone down in history as a key voice for Enlightenment values.</p>
              
              <p>Writing thousands of works and pamphlets over his lifetime — from poems and plays to histories and novellas — Voltaire’s interests spanned virtually every literary genre.</p>

              <p>This reading list consists of the best books on and by Voltaire. After reading it, you’ll understand exactly why this brilliant French thinker was so popular in his own lifetime, and retains such influence in ours. Let’s dive in!</p>

              <h2>1. Voltaire: A Very Short Introduction, by Nicholas Cronk</h2>
              <BookLink title="Voltaire: A Very Short Introduction" author="Nicholas Cronk" link="http://www.amazon.com/Voltaire-Very-Short-Introduction-Introductions/dp/0199688354?&linkCode=ll1&tag=philosophybre-20&linkId=c4621d8c0ed8727a6b87892f777545f5&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 2017, Nicholas Cronk’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Voltaire-Very-Short-Introduction-Introductions/dp/0199688354?&linkCode=ll1&tag=philosophybre-20&linkId=c4621d8c0ed8727a6b87892f777545f5&language=en_US&ref_=as_li_ss_tl">Voltaire: A Very Short Introduction</a> is a fantastic place to start for anyone with a budding interest in Voltaire’s life and work.</p>
              <p>Considering the sheer breadth and depth of Voltaire’s writings, Cronk does an admirable job in providing an illuminating overview of his most important arguments and ideas.</p>
              <p>Cronk also provides helpful background about the politics and concerns of the Enlightenment period to contextualize Voltaire’s remarkable fame and career, and makes clear why his influence continues to be so enduring. Coming in at an accessible 144 pages, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Voltaire-Very-Short-Introduction-Introductions/dp/0199688354?&linkCode=ll1&tag=philosophybre-20&linkId=c4621d8c0ed8727a6b87892f777545f5&language=en_US&ref_=as_li_ss_tl">Voltaire: A Very Short Introduction</a> is a very nice entry point to Voltaire.</p>
              

              <h2>2. Voltaire Almighty, by Roger Pearson</h2>
              <BookLink title="Voltaire Almighty" author="Roger Pearson" link="http://www.amazon.com/Voltaire-Almighty-Life-Pursuit-Freedom/dp/0747579571?&linkCode=ll1&tag=philosophybre-20&linkId=ef3a735034446928f8b7b3605d2bb3fb&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking to dive a little deeper with your Voltaire scholarship, look no further than Roger Pearson’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Voltaire-Almighty-Life-Pursuit-Freedom/dp/0747579571?&linkCode=ll1&tag=philosophybre-20&linkId=ef3a735034446928f8b7b3605d2bb3fb&language=en_US&ref_=as_li_ss_tl">Voltaire Almighty</a>, first published in 2005.</p>
              <p>This biography brings Voltaire vividly to life, taking us on an entertaining journey through the great thinker’s intellectual and personal adventures — complete with love affairs, banishments, jail sentences, and international fame.</p>
              <p>Pearson writes brilliantly to convey exactly why Voltaire personified the French Enlightenment throughout his lifetime, and became emblematic of it following his death. With its 480 pages packed full of insight, this book is highly recommended for those seeking a deeper understanding of Voltaire’s thought.</p>

              <BigSubscribe />
              

              <h2>3. Candide, by Voltaire</h2>
              <BookLink title="Candide, or Optimism" author="Voltaire" link="http://www.amazon.com/Candide-Optimism-Classics-Francois-Voltaire/dp/0140455108?&linkCode=ll1&tag=philosophybre-20&linkId=7264de9756fee7732f8e8878ea9f8c1f&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions and biographies to primary texts, where better to start than with the novella that cemented Voltaire’s name into world history?</p>
              <p>Though not his most read work during his own lifetime, Voltaire’s 1759 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Candide-Optimism-Classics-Francois-Voltaire/dp/0140455108?&linkCode=ll1&tag=philosophybre-20&linkId=7264de9756fee7732f8e8878ea9f8c1f&language=en_US&ref_=as_li_ss_tl">Candide</a> has become the text by which most people know the great French thinker today — and for good reason.</p>
              <p>Candide is one of the sharpest and most entertaining satires ever written, skewering a number of popular philosophical ideas of Voltaire’s time, including Leibniz’s suggestion that we live in ‘the best of all possible worlds’. Though Candide’s travels bring him to the heart of suffering and despair across the globe, he remains absurdly optimistic in the face of them.</p>
              <p>Voltaire thus brilliantly exposes “the mania for insisting that all is well when all is by no means well,” and his writing is as fresh and comedic today as it was almost three centuries ago — making <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Candide-Optimism-Classics-Francois-Voltaire/dp/0140455108?&linkCode=ll1&tag=philosophybre-20&linkId=7264de9756fee7732f8e8878ea9f8c1f&language=en_US&ref_=as_li_ss_tl">Candide</a> simply essential reading for anyone interested in Voltaire.</p>
              

              <h2>4. Treatise on Toleration, by Voltaire</h2>
              <BookLink title="Treatise on Toleration" author="Voltaire" link="http://www.amazon.com/Treatise-Toleration-Penguin-Classics-Voltaire/dp/0241236622?&linkCode=ll1&tag=philosophybre-20&linkId=a393fe27154eee1c1c1be3d3e0af1a06&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />
              <p>In 1762, a merchant from Toulouse named Jean Calas was publicly executed after being accused of killing his son. The execution was particularly brutal — Calas was pulled apart by four horses, and it reportedly took a long time for him to die. However, after his death, it soon became clear that Calas was not guilty at all, and that he was persecuted simply for being Protestant in a Catholic-dominated town.</p>
              <p>Voltaire took great interest in what became known as <i>the Calas affair</i>, and began a campaign to clear Calas’s name. In so doing, he wrote dozens of pamphlets and texts that took the Calas affair international.</p>
              <p>Voltaire’s 1763 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Treatise-Toleration-Penguin-Classics-Voltaire/dp/0241236622?&linkCode=ll1&tag=philosophybre-20&linkId=a393fe27154eee1c1c1be3d3e0af1a06&language=en_US&ref_=as_li_ss_tl">Treatise on Toleration</a> is his story of this case — as well as a powerful polemic against fanaticism, a strong defense of religious freedom, and a rallying cry for tolerance.</p>
              <p>This important work encapsulates all that is brilliant about Voltaire: his bravery in standing up to established authorities, his attunement to Enlightenment values, and his brilliantly sharp, politically-engaged, persuasive writing.</p>
              

              <h2>5. A Pocket Philosophical Dictionary, by Voltaire</h2>
              <BookLink title="A Pocket Philosophical Dictionary" author="Voltaire" link="http://www.amazon.com/Pocket-Philosophical-Dictionary-Oxford-Classics/dp/0199553637?&linkCode=ll1&tag=philosophybre-20&linkId=a96d6b49ffca3bf88a1ba76f7de24a1f&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
              <p>Voltaire’s controversial 1764 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Pocket-Philosophical-Dictionary-Oxford-Classics/dp/0199553637?&linkCode=ll1&tag=philosophybre-20&linkId=a96d6b49ffca3bf88a1ba76f7de24a1f&language=en_US&ref_=as_li_ss_tl">A Pocket Philosophical Dictionary</a> consists of a series of short, witty, incisive essays arranged in alphabetical order on subjects ranging from atheism to tyranny.</p>
              <p>Concise by design — the ‘pocket’ medium was a response to the lengthy, verbose encyclopedias being produced at the time — this brilliant work includes Voltaire’s famed critiques of religion, dogma, superstition, fanaticism, and another rallying cry for toleration.</p>
              <p>Dripping in sarcasm throughout, and remaining startlingly fresh and modern with its conversational tone, the entries in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Pocket-Philosophical-Dictionary-Oxford-Classics/dp/0199553637?&linkCode=ll1&tag=philosophybre-20&linkId=a96d6b49ffca3bf88a1ba76f7de24a1f&language=en_US&ref_=as_li_ss_tl">A Pocket Philosophical Dictionary</a> can be read in any order, making this a fun, thoughtful read for anyone interested in Voltaire and the ideas of the Enlightenment.</p>
              
              
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
  title: file(relativePath: {eq: "rl5.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "voltaire-intro.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "voltaire-almighty.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "voltaire-candide.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "voltaire-tolerance.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "voltaire-pocket.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList