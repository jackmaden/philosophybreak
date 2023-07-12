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
    <Seo title="Machiavelli Reading List – The Best 5 Books to Read" description="A curated reading list of the best books on and by the philosopher and historian Niccolò Machiavelli." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Machiavelli" number="5" img={data.title.childImageSharp.gatsbyImageData} imgposition="image-top" alt="Machiavelli" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

              <p><span className="big-letter">N</span>iccolò Machiavelli was an Italian philosopher, historian, and writer who lived from 1469 to 1527. During his lifetime, Machiavelli served as a government official in the Republic of Florence, where he was responsible for diplomacy and military affairs.</p>

              <p>Often associated with the concept of <i>realpolitik</i> — the pursuit of power through practical and pragmatic means, rather than through ideology or moral principles — Machiavelli’s ideas have been highly influential (and controversial) in <Link to="/reading-lists/political-philosophy/">political philosophy</Link> and beyond.</p>

              <p>Machiavelli is perceived to be interested more in what it means to be an ‘effective’ rather than ‘good’ ruler, arguing that those in power should be willing to use any means necessary to maintain their rule, even if that means resorting to deceit, coercion, and violence. </p>

              <p>This reading list consists of the best books on and by Machiavelli. After reading it, you’ll understand exactly why his political ideas remain so discussed — and whether his rather sinister reputation is deserved. Let’s dive in! </p>

              <h2>1. Machiavelli: A Very Short Introduction, by Quentin Skinner</h2>
              <BookLink title="Machiavelli: A Very Short Introduction" author="Quentin Skinner" link="http://www.amazon.com/Machiavelli-Very-Short-Introduction-Introductions/dp/0198837577?&linkCode=ll1&tag=philosophybre-20&linkId=0f0480a7af5f1d421121f8ac8580abcd&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Quentin Skinner’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Machiavelli-Very-Short-Introduction-Introductions/dp/0198837577?&linkCode=ll1&tag=philosophybre-20&linkId=0f0480a7af5f1d421121f8ac8580abcd&language=en_US&ref_=as_li_ss_tl">Machiavelli: A Very Short Introduction</a> is a fantastic place to start for anyone with a budding interest in Machiavelli.</p>
              <p>Widely considered to be the best short introduction to Machiavelli, Skinner does an admirable job in providing an illuminating overview of Machiavelli’s life – which includes meetings with kings, the Pope, and the Holy Roman Emperor – as well as his most important ideas.</p>
              <p>Skinner also provides helpful background to contextualize Machiavelli’s work, and makes clear why his influence continues to be so enduring. Coming in at an accessible 144 pages, this is a very nice entry point to Machiavelli.</p>
              

              <h2>2. Machiavelli: A Biography, by Miles Unger</h2>
              <BookLink title="Machiavelli: A Biography" author="Miles Unger" link="http://www.amazon.com/Machiavelli-Biography-Miles-Unger/dp/1416556303?&linkCode=ll1&tag=philosophybre-20&linkId=35f62aaf1e07894d4bc2bd53688ceb5a&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking to dive a little deeper with your Machiavelli scholarship, look no further than Miles Unger’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Machiavelli-Biography-Miles-Unger/dp/1416556303?&linkCode=ll1&tag=philosophybre-20&linkId=35f62aaf1e07894d4bc2bd53688ceb5a&language=en_US&ref_=as_li_ss_tl">Machiavelli: A Biography</a>, first published in 2011.</p>
              <p>Unger brings to life the tumultuous events that shaped Machiavelli as a thinker. He argues that, beyond the sinister caricature, the real Machiavelli was a highly compassionate and insightful writer who simply developed his controversial ideas in response to the corrupt and violent conditions he witnessed.</p>
              <p>With its 424 pages packed full of insight, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Machiavelli-Biography-Miles-Unger/dp/1416556303?&linkCode=ll1&tag=philosophybre-20&linkId=35f62aaf1e07894d4bc2bd53688ceb5a&language=en_US&ref_=as_li_ss_tl">Machiavelli: A Biography</a> is a brilliant accompaniment for those seeking a deeper understanding of Machiavelli’s thought.</p>

              <BigSubscribe />
              
              
              <h2>3. The Prince, by Niccolò Machiavelli</h2>
              <BookLink title="The Prince" author="Niccolò Machiavelli" link="http://www.amazon.com/Prince-Penguin-Classics-Niccolo-Machiavelli/dp/0140449159?&linkCode=ll1&tag=philosophybre-20&linkId=14c13b2c96908b5fe06e8267c0d0d90a&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary texts, where better to start than with the text that cemented Machiavelli’s name into world history?</p>
              <p>Machiavelli’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Prince-Penguin-Classics-Niccolo-Machiavelli/dp/0140449159?&linkCode=ll1&tag=philosophybre-20&linkId=14c13b2c96908b5fe06e8267c0d0d90a&language=en_US&ref_=as_li_ss_tl">The Prince</a> concisely outlines the amoral pragmatism of the <i>realpolitik</i> so associated with his name, and shocked Europe on its publication in the 16th century. Writing with crisp and flowing prose, Machiavelli advises rulers on the ruthless tactics they must use to gain and maintain power. </p>
              <p>A short but staggeringly influential work, Machiavelli’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Prince-Penguin-Classics-Niccolo-Machiavelli/dp/0140449159?&linkCode=ll1&tag=philosophybre-20&linkId=14c13b2c96908b5fe06e8267c0d0d90a&language=en_US&ref_=as_li_ss_tl">The Prince</a> is essential reading for any serious student of political philosophy.</p>
              

              <h2>4. Discourses on Livy, by Niccolò Machiavelli</h2>
              <BookLink title="Discourses on Livy" author="Niccolò Machiavelli" link="http://www.amazon.com/Discourses-Livy-Oxford-Worlds-Classics/dp/0199555559?&linkCode=ll1&tag=philosophybre-20&linkId=4f9f80b260b362fe533530653e42444a&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />
              <p>While <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Prince-Penguin-Classics-Niccolo-Machiavelli/dp/0140449159?&linkCode=ll1&tag=philosophybre-20&linkId=14c13b2c96908b5fe06e8267c0d0d90a&language=en_US&ref_=as_li_ss_tl">The Prince</a> is Machiavelli’s most famous work, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Discourses-Livy-Oxford-Worlds-Classics/dp/0199555559?&linkCode=ll1&tag=philosophybre-20&linkId=4f9f80b260b362fe533530653e42444a&language=en_US&ref_=as_li_ss_tl">Discourses on Livy</a> is just as important if you’re seeking a complete picture of his political philosophy.</p>
              <p>In this sharp and enlightening work, originally published in 1531, Machiavelli compares the statecraft of the ancient Romans with that of his contemporaries. Ultimately arguing for a republican political system, Machiavelli discusses everything from what makes a healthy political body to the nature and use of conspiracies.</p>
              <p>A brilliant guide to state building, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Discourses-Livy-Oxford-Worlds-Classics/dp/0199555559?&linkCode=ll1&tag=philosophybre-20&linkId=4f9f80b260b362fe533530653e42444a&language=en_US&ref_=as_li_ss_tl">Discourses on Livy</a> belongs on the bookshelf of anyone interested in Machiavelli.</p>
              

              <h2>5. The Portable Machiavelli, by Niccolò Machiavelli</h2>
              <BookLink title="The Portable Machiavelli" author="Niccolò Machiavelli" link="http://www.amazon.com/Portable-Machiavelli-Niccolo/dp/0140150927?&linkCode=ll1&tag=philosophybre-20&linkId=7aa84bd210de319c6ea1441441110518&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
              <p>Though the two previous books are his best-known works today, Machiavelli wrote profusely over his lifetime, and his output included essays, histories, and even literary works.</p>
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Portable-Machiavelli-Niccolo/dp/0140150927?&linkCode=ll1&tag=philosophybre-20&linkId=7aa84bd210de319c6ea1441441110518&language=en_US&ref_=as_li_ss_tl">The Portable Machiavelli</a> is a Machiavellian anthology including the complete texts of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Prince-Penguin-Classics-Niccolo-Machiavelli/dp/0140449159?&linkCode=ll1&tag=philosophybre-20&linkId=14c13b2c96908b5fe06e8267c0d0d90a&language=en_US&ref_=as_li_ss_tl">The Prince</a>, Belfagor, Castruccio Castracani, a play called The Mandrake, as well as an abridged version of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Discourses-Livy-Oxford-Worlds-Classics/dp/0199555559?&linkCode=ll1&tag=philosophybre-20&linkId=4f9f80b260b362fe533530653e42444a&language=en_US&ref_=as_li_ss_tl">Discourses on Livy</a>, seven private letters, and selected passages from The Art of War and The History of Florence.</p>
              <p>Helpful contextual introductions and notes are provided throughout by translators and editors Peter Bondanella and Mark Musa, making this a lovely addition for serious Machiavelli students.</p>
              
              
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
  title: file(relativePath: {eq: "machiavelli.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "machiavelli-intro.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "machiavelli-bio.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "machiavelli-prince.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "machiavelli-livy.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "machiavelli-portable.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList