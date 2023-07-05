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
    <Seo title="Aristotle Reading List – The Best 8 Books to Read" description="A curated reading list of the most essential books of and about Aristotle, including The Nicomachean Ethics, Physics, Metaphysics, and more." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Aristotle" number="8" img={data.title.childImageSharp.gatsbyImageData} imgposition="image-top" alt="Aristotle" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">A</span>ristotle was an ancient Greek philosopher who, like his <Link to="/reading-lists/plato/">legendary teacher Plato</Link> (and <i>his</i> legendary teacher, <Link to="/reading-lists/socrates/">Socrates</Link>), is considered to be one of the most significant figures in the <Link to="/reading-lists/history-of-western-philosophy/">history of Western philosophy</Link>. Over his lifetime, he transformed most of the subjects he investigated, writing as many as 200 treatises (of which only 31 survive) on topics ranging from logic, <Link to="/reading-lists/political-philosophy/">politics</Link>, and <Link to="/reading-lists/ethics-and-morality/">ethics</Link>, to biology, mathematics, and <Link to="/reading-lists/metaphysics/">metaphysics</Link>. </p> 

              <p>It was largely from Aristotle’s works that the West inherited its entire intellectual approach, including the problems it investigates and its methods of inquiry. Consequently, like Plato, Aristotle holds a unique influence on almost every form of knowledge in the West, and his writings continue to be a subject of contemporary debate today.</p>    

              <p>Born in 384 BCE in Northern Greece, Aristotle joined Plato’s Academy in Athens when he was approximately 17 years old, quickly becoming Plato’s most brilliant student. He studied under Plato until the latter’s death 20 years later, whereupon Aristotle left Athens and became tutor to a young Alexander the Great.</p>
              
              <p>Aristotle later returned to Athens and founded his own school in the Lyceum. The school and its students acquired the label of ‘Peripatetics’ (coming from the Greek for ‘to walk around’), owing to Aristotle’s habit of walking around the grove while delivering his lectures.</p> 

              <BigSubscribe />

              <p>It’s thought that Aristotle’s surviving works were never intended for general readership: they are lecture notes for his advanced philosophical students. As such, Aristotle has a reputation for being a rather dense and difficult writer. This is perhaps a little unfair, for in his lifetime Aristotle produced a number of popular dialogues — <Link to="/reading-lists/plato/">like Plato</Link> — that were famed for their beauty. Indeed, the Roman statesman Cicero speaks of the “golden river” of Aristotle’s prose. Unfortunately, none of these popular works survive, and we are left only with Aristotle’s technical notes.</p> 

              <p>Nevertheless, the influence of these ‘technical notes’ is difficult to overstate. Aristotle’s physics was not replaced until the Enlightenment, some of his biological insights still astound modern zoologists and researchers, and his ethics (including, for instance, his ideas of <Link to="/articles/the-golden-mean-aristotle-guide-to-living-excellently/">the ‘golden mean’</Link> and that <Link to="/articles/aristotle-on-why-leisure-defines-us-more-than-work/">leisure should define us more than work</Link>) remains a rich source for contemporary scholarship and debate to this day. He was revered among medieval Muslim scholars as “The First Teacher”, known by medieval Christians like Thomas Aquinas simply as “The Philosopher”, while the poet Dante called him “the master of those who know”.</p>

              <p>This reading list outlines the best books of and about Aristotle. After reading it, you’ll have a full understanding of exactly why Aristotle’s work has had — and still has — such an influence on Western thought. Let’s dive in!</p>

              
              <h2>1. Aristotle’s Way, by Edith Hall</h2>
              <BookLink title="Aristotle’s Way" author="Edith Hall" link="http://www.amazon.com/gp/product/0735220824/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0735220824&linkId=55045c425b70975a8e3a5495365e1574" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 2018, Edith Hall’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0735220824/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0735220824&linkId=55045c425b70975a8e3a5495365e1574">Aristotle’s Way</a> is a fantastic place to start for anyone with an interest in Aristotle’s view on how we should approach life. “If you believe that the goal of human life is to maximize happiness,” Hall writes, “then you are a budding Aristotelian.” With a focus on Aristotle’s ethics, Hall puts his thinking into modern contexts and situations, and derives ten practical lessons to help us confront life’s challenges. Written with a popular audience in mind, this is a very accessible entry point into Aristotle’s ethical thinking.</p>
              

              <h2>2. Aristotle: The Desire to Understand, by Jonathon Lear</h2>
              <BookLink title="Aristotle: The Desire to Understand" author="Jonathon Lear" link="http://www.amazon.com/gp/product/0521347629/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521347629&linkId=b0cfa8ee84969dc9ee07e9d8af36376e" img={data.two.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking a more philosophical introduction to Aristotle’s wider catalog, look no further than Jonathon Lear’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521347629/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521347629&linkId=b0cfa8ee84969dc9ee07e9d8af36376e">Aristotle: The Desire to Understand</a>. Lear surveys the core ideas in Aristotle’s physics, metaphysics, ethics, politics, as well as biological and logical works in clear, lucid prose. With its 340 pages packed full of insight, this book is a brilliant accompaniment for those seeking a deeper understanding of Aristotle’s thought.</p>


              <h2>3. The Cambridge Companion to Aristotle, by Jonathon Barnes</h2>
              <BookLink title="The Cambridge Companion to Aristotle" author="Jonathon Barnes" link="http://www.amazon.com/gp/product/0521422949/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521422949&linkId=12b3f1ee82a944272d7304c63667fba0" img={data.three.childImageSharp.gatsbyImageData} />
              <p>If you’d like to deepen your Aristotle scholarship even further, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521422949/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521422949&linkId=12b3f1ee82a944272d7304c63667fba0">The Cambridge Companion to Aristotle</a>, edited by Jonathon Barnes, assembles nine brilliant essays from leading Aristotle scholars discussing various aspects of his thought. With chapters on Aristotle’s logic, metaphysics, philosophy of science, psychology, ethics, rhetoric, and poetics, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521422949/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521422949&linkId=12b3f1ee82a944272d7304c63667fba0">The Cambridge Companion to Aristotle</a> belongs on the bookshelf of any serious student of Aristotle.</p>
              

              <h2>4. The Nicomachean Ethics, by Aristotle</h2>
              <BookLink title="The Nicomachean Ethics" author="Aristotle" link="http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary texts, where better to start than with a tome routinely heralded as the best entry point for those wanting to read Aristotle? In <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9">The Nicomachean Ethics</a>, Aristotle’s guiding question is: what is the best thing for a human being? His answer is <i>eudaimonia</i>, which is variously translated from Greek as ‘well-being’, ‘happiness’, ‘blessedness’, and in the context of the virtue ethics Aristotle endorsed, ‘human flourishing’. <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9">The Nicomachean Ethics</a> is Aristotle’s exploration into how we can achieve <i>eudaimonia</i> by living well. It’s an essential text for anyone interested in the foundations and development of ethical thinking in Western society.</p>
              

              <h2>5. Politics, by Aristotle</h2>
              <BookLink title="Politics" author="Aristotle" link="http://www.amazon.com/gp/product/0199538735/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199538735&linkId=8b38717d791a65e22e1a7b110f2a5fad" img={data.five.childImageSharp.gatsbyImageData} />
              <p>One of the most influential texts in the history of political thought, Aristotle’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199538735/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199538735&linkId=8b38717d791a65e22e1a7b110f2a5fad">Politics</a> raises issues about how society should be organized and governed which continue to be debated today. By examining how different groups operate, Aristotle seeks to establish how constitutions can best be established and upheld. This particular edition also includes a very useful introductory essay which contextualizes the work and sets the scene for the reader.</p>
              

              <h2>6. Physics, by Aristotle</h2>
              <BookLink title="Physics" author="Aristotle" link="http://www.amazon.com/gp/product/0199540284/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199540284&linkId=d47090fa72ee75b3c789a92c6c2c2180" img={data.six.childImageSharp.gatsbyImageData} />
              <p>Up until the Enlightenment, Aristotle’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199540284/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199540284&linkId=d47090fa72ee75b3c789a92c6c2c2180">Physics</a> was the starting point for anyone who wanted to study the natural sciences. Reading the <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199540284/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199540284&linkId=d47090fa72ee75b3c789a92c6c2c2180">Physics</a> today, one becomes deeply accommodated with the the genius of Aristotle’s thought and understands why this work maintained its place at the heart of intellectual institutions for millennia. Like the <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199538735/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199538735&linkId=8b38717d791a65e22e1a7b110f2a5fad">Politics</a>, this particular edition includes a very useful introduction.</p>
              

              <h2>7. The Metaphysics, by Aristotle</h2>
              <BookLink title="The Metaphysics" author="Aristotle" link="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994" img={data.seven.childImageSharp.gatsbyImageData} />
              <p>Aristotle’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994">The Metaphysics</a> is considered one of the greatest philosophical works of all time. At the heart of the book lie three questions. Firstly, what is existence, and what sorts of things exist in the world? Secondly, how can things continue to exist, and yet undergo the change we see about us in the natural world? And lastly, how can this world be understood? Aristotle’s fascinating answers to these questions set in motion two millennia of debate from thinkers all over the globe, making <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994">The Metaphysics</a> an essential addition.</p>
              

              <h2>8. Poetics, by Aristotle</h2>
              <BookLink title="Poetics" author="Aristotle" link="http://www.amazon.com/gp/product/0199608369/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199608369&linkId=060e20576cdb21af2d03ddad73d2650d" img={data.eight.childImageSharp.gatsbyImageData} />
              <p>One of the most influential and perceptive books on poetry, drama, fiction, and art ever written, Aristotle’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199608369/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199608369&linkId=060e20576cdb21af2d03ddad73d2650d">Poetics</a> is the founding text of European aesthetics and literary criticism. Brimming with insights on such topics as the nature of tragedy and plot, this work more than any other has shaped our modern understanding of the creation and impact of art. <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199608369/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199608369&linkId=060e20576cdb21af2d03ddad73d2650d">Poetics</a> belongs on the bookshelf of anyone interested in Aristotle, beauty, or aesthetics and literary criticism generally.</p>
              
              
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
  title: file(relativePath: {eq: "aristotle.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "aristotle-way.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "aristotle-desire.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "aristotle-cambridge.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "ethics-aristotle.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "aristotle-politics.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "aristotle-physics.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "metaphysics-aristotle.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  eight: file(relativePath: {eq: "aristotle-poetics.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList