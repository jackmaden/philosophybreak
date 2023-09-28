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
    <Seo title="Immanuel Kant Reading List – The Best 6 Books to Read" description="A curated reading list of the best books on and by the philosopher Immanuel Kant." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Immanuel Kant" number="6" img={data.title.childImageSharp.gatsbyImageData} imgposition="image-top" alt="Immanuel Kant" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">I</span>mmanuel Kant is considered by some to be the greatest ever philosopher in the <Link to="/reading-lists/history-of-western-philosophy/">history of Western philosophy</Link> — or at least certainly since the ancient Greeks <Link to="/reading-lists/socrates/">Socrates</Link>, <Link to="/reading-lists/plato/">Plato</Link>, and <Link to="/reading-lists/aristotle/">Aristotle</Link>. This is due to the hugely significant contributions the German philosopher — born in 1724 in Königsberg (then part of Prussia) — made to to virtually every area of philosophy, including <Link to="/reading-lists/epistemology/">epistemology</Link>, <Link to="/articles/metaphysics-what-is-it-why-is-it-important-today/">metaphysics</Link>, <Link to="/reading-lists/ethics-and-morality/">ethics</Link>, <Link to="/reading-lists/political-philosophy/">politics</Link>, and aesthetics.</p>

              <p>Kant is perhaps best known for his synthesis of early modern rationalism (think <Link to="/articles/i-think-therefore-i-am-descartes-cogito-ergo-sum-explained/"><i>Descartes’s cogito ergo sum</i></Link>) and empiricism (think <Link to="/articles/john-lockes-empiricism-why-we-are-all-tabula-rasas-blank-slates/">John Locke’s <i>tablua rasa</i></Link>), as well as for his categorical imperative (‘act only according to that maxim whereby you can at the same time, will that it should become a universal law’).</p>

              <p>This reading list consists of the best books on and by Immanuel Kant. After reading it, you’ll understand exactly why Kant is celebrated as one of the most incredible minds to ever enter philosophy. (Note: Kant has a reputation for being a rather dense and challenging writer, so it’s recommended you pick up an introduction or two to supplement any reading of his primary works.) Let’s dive in!</p>


              <h2>1. Kant: A Very Short Introduction, by Roger Scruton</h2>
              <BookLink title="Kant: A Very Short Introduction" author="Roger Scruton" link="http://www.amazon.com/Kant-Very-Short-Introduction-Introductions/dp/0192801996?&linkCode=ll1&tag=philosophybre-20&linkId=bca1c097fe563415ea4f8ddc8f580d2c&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 1981, Roger Scruton’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Kant-Very-Short-Introduction-Introductions/dp/0192801996?&linkCode=ll1&tag=philosophybre-20&linkId=bca1c097fe563415ea4f8ddc8f580d2c&language=en_US&ref_=as_li_ss_tl">Kant: A Very Short Introduction</a> is a fantastic place to start for anyone with a budding interest in Immanuel Kant’s philosophy.</p>
              <p>Considering the sheer breadth and depth of Kant’s thinking, Scruton does an admirable job in providing an illuminating overview of his most important ideas.</p>
              <p>Scruton also provides helpful background to contextualize Kant’s work, and makes clear why his influence continues to be so enduring. Coming in at an accessible 160 pages, this is a very nice entry point to Kant.</p>
              

              <h2>2. Kant, by Paul Guyer</h2>
              <BookLink title="Kant" author="Paul Guyer" link="http://www.amazon.com/Kant-Routledge-Philosophers-Paul-Guyer/dp/0415843456?&linkCode=ll1&tag=philosophybre-20&linkId=9890b9e2bc77ff7150d58b18a68812b0&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking to dive a little deeper with your Kant scholarship, look no further than Paul Guyer’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Kant-Routledge-Philosophers-Paul-Guyer/dp/0415843456?&linkCode=ll1&tag=philosophybre-20&linkId=9890b9e2bc77ff7150d58b18a68812b0&language=en_US&ref_=as_li_ss_tl">Kant</a>, first published in 2006.</p>
              <p>Guyer carefully explains Kant’s arguments about the nature of space, time, and experience, and also examines his moral philosophy. However, as well as introducing Kant’s ideas, Guyer also provides his own thoughtful analysis, critique, and commentary.</p>
              <p>With its 521 pages packed full of insight, this book is a brilliant accompaniment for those seeking a deeper understanding of Kant’s thought.</p>

              <BigSubscribe />
              

              <h2>3. Critique of Pure Reason, by Immanuel Kant</h2>
              <BookLink title="Critique of Pure Reason" author="Immanuel Kant" link="http://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=db7cec8e3ab40cc3069e1d685c824d11" img={data.three.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary texts, where better to start than with the text that cemented Kant’s name into the history of philosophy?</p>
              <p>Kant’s 1781 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=db7cec8e3ab40cc3069e1d685c824d11">Critique of Pure Reason</a> investigates the limits of what we can know, and introduces his genius, controversial theory of <i>transcendental idealism</i>, a synthesis of rationalism and empiricism that continues to occupy scholars to this day.</p>
              <p>This landmark book argues that reason precedes and makes possible our experience of the world, and lays the groundwork for much of Kant’s thinking. A difficult but staggeringly influential and profound work, Kant’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=db7cec8e3ab40cc3069e1d685c824d11">Critique of Pure Reason</a> is essential reading for any serious student of philosophy.</p>
              

              <h2>4. Prolegomena to Any Future Metaphysics, by Immanuel Kant</h2>
              <BookLink title="Prolegomena to Any Future Metaphysics" author="Immanuel Kant" link="http://www.amazon.com/gp/product/0872205932/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872205932&linkId=c2281161b0ac2ae92f2fd300c7538ca0" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Kant wrote his 1783 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0872205932/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872205932&linkId=c2281161b0ac2ae92f2fd300c7538ca0">Prolegomena to Any Future Metaphysics</a> after being disappointed with the reception of his masterwork, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=51fb5062b0477e5f7841f91e58584003">Critique of Pure Reason</a>, which he blamed (not incorrectly) on the fact that no one really understood it.</p>
              <p>In the Prolegomena, therefore, Kant attempts to distill the Critique’s core themes into a more readable form (more readable but still very much Kant, of course).</p>
              <p>If you’re seeking a slightly more concise version of the themes covered in the Critique, you’ll find value in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0872205932/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872205932&linkId=c2281161b0ac2ae92f2fd300c7538ca0">Prolegomena to Any Future Metaphysics</a>.</p>
              

              <h2>5. Groundwork of the Metaphysics of Morals, by Immanuel Kant</h2>
              <BookLink title="Groundwork of the Metaphysics of Morals" author="Immanuel Kant" link="http://www.amazon.com/gp/product/1107401062/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107401062&linkId=7f15e4461c5be9d2444502008378c025" img={data.five.childImageSharp.gatsbyImageData} />
              <p>Kant lays out his monumentally influential ethical vision in the 1785 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1107401062/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107401062&linkId=7f15e4461c5be9d2444502008378c025">Groundwork of the Metaphysics of Morals</a>.</p>
              <p>In this groundbreaking work, Kant argues that human beings are ends in themselves, never to be used by anyone merely as a means, and that morality is rooted in and justified by reason.</p>
              <p>Kant’s deontological or ‘duty-based’ ethical system is still defended by many thinkers today, and while the 1788 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Critique-Practical-Reason-Hackett-Classics/dp/0872206173?&linkCode=ll1&tag=philosophybre-20&linkId=ffc395254734d7eb6f093268b191bb12&language=en_US&ref_=as_li_ss_tl">Critique of Practical Reason</a> is Kant’s longer work on ethics, his <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1107401062/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107401062&linkId=7f15e4461c5be9d2444502008378c025">Groundwork of the Metaphysics of Morals</a> is the more accessible (yet still rather forbidding!). If you’re interested in Kant’s ethics, this brilliant, challenging book belongs on your bookshelf.</p>
              

              <h2>6. Critique of the Power of Judgment, by Immanuel Kant</h2>
              <BookLink title="Critique of the Power of Judgment" author="Immanuel Kant" link="http://www.amazon.com/Critique-Power-Judgment-Cambridge-Immanuel/dp/0521348927?&linkCode=ll1&tag=philosophybre-20&linkId=1ff38f3438930bb6dae5ad22b4a28942&language=en_US&ref_=as_li_ss_tl" img={data.six.childImageSharp.gatsbyImageData} />
              <p>The third and final of Kant’s Critiques builds on arguments and systems from his earlier works to consider beauty, the sublime, and telelogy.</p>
              <p>A work of deep, fascinating insight on art and science, and of great ambition, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Critique-Power-Judgment-Cambridge-Immanuel/dp/0521348927?&linkCode=ll1&tag=philosophybre-20&linkId=1ff38f3438930bb6dae5ad22b4a28942&language=en_US&ref_=as_li_ss_tl">Critique of the Power of Judgment</a> continues to make its influence felt in many areas of modern philosophy. No collection on Kant is complete without it.</p>
              
              
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
  title: file(relativePath: {eq: "kant.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "kant-scruton.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "kant-guyer.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "epistemology-kant.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "metaphysics-kant.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "ethics-kant.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "kant-judgement.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList