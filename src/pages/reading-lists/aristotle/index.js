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
    <Seo title="Aristotle Reading List – The Best 9 Books to Read" description="A curated reading list of the most essential books of and about Aristotle, including The Nicomachean Ethics, Physics, Metaphysics, and more." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Aristotle" number="9" img={data.title.childImageSharp.gatsbyImageData} imgposition="image-top" alt="Aristotle" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">A</span>ristotle was an ancient Greek philosopher who, like his <Link to="/reading-lists/plato/">legendary teacher Plato</Link> (and <i>his</i> legendary teacher, <Link to="/reading-lists/socrates/">Socrates</Link>), is considered to be one of the most significant figures in the <Link to="/reading-lists/history-of-western-philosophy/">history of Western philosophy</Link>. Over his lifetime, he transformed most of the subjects he investigated, writing as many as 200 treatises (of which only 31 survive) on topics ranging from logic, <Link to="/reading-lists/political-philosophy/">politics</Link>, and <Link to="/reading-lists/ethics-and-morality/">ethics</Link>, to biology, mathematics, and <Link to="/reading-lists/metaphysics/">metaphysics</Link>. </p> 

              <p>It was largely from Aristotle’s works that the West inherited its entire intellectual approach, including the problems it investigates and its methods of inquiry. Consequently, like Plato, Aristotle holds a unique influence on almost every form of knowledge in the West, and his writings continue to be a subject of contemporary debate today.</p>    

              <p>Born in 384 BCE in Northern Greece, Aristotle joined Plato’s Academy in Athens when he was approximately 17 years old, quickly becoming Plato’s most brilliant student. He studied under Plato until the latter’s death 20 years later, whereupon Aristotle left Athens and became tutor to a young Alexander the Great.</p>
              
              <p>Aristotle later returned to Athens and founded his own school in the Lyceum. The school and its students acquired the label of ‘Peripatetics’ (coming from the Greek for ‘to walk around’), owing to Aristotle’s habit of walking around the grove while delivering his lectures.</p> 

              <BigSubscribe />

              <p>It’s thought that Aristotle’s surviving works were never intended for general readership: they are lecture notes for his advanced philosophical students. As such, Aristotle has a reputation for being a rather dense and difficult writer.</p>
              
              <p>This is perhaps a little unfair, for in his lifetime Aristotle produced a number of popular dialogues — <Link to="/reading-lists/plato/">like Plato</Link> — that were famed for their beauty. Indeed, the Roman statesman Cicero speaks of the “golden river” of Aristotle’s prose. Unfortunately, none of these popular works survive, and we are left only with Aristotle’s technical notes.</p> 

              <p>Nevertheless, the influence of these ‘technical notes’ is difficult to overstate. Aristotle’s physics was not replaced until the Enlightenment, some of his biological insights still astound modern zoologists and researchers, and his ethics (including, for instance, his ideas of <Link to="/articles/the-golden-mean-aristotle-guide-to-living-excellently/">the ‘golden mean’</Link>, his <Link to="/articles/aristotle-on-the-3-types-of-friendship-and-how-they-enrich-life/">influential views on friendship</Link>, and that <Link to="/articles/aristotle-on-why-leisure-defines-us-more-than-work/">leisure should define us more than work</Link>) remains a rich source for contemporary scholarship and debate to this day. He was revered among medieval Muslim scholars as “The First Teacher”, known by medieval Christians like Thomas Aquinas simply as “The Philosopher”, while the poet Dante called him “the master of those who know”.</p>

              <p>This reading list outlines the best books of and about Aristotle. After reading it, you’ll have a full understanding of exactly why Aristotle’s work has had — and still has — such an influence on Western thought. Let’s dive in!</p>

              
              <h2>1. Aristotle’s Way, by Edith Hall</h2>
              <BookLink title="Aristotle’s Way" author="Edith Hall" link="http://www.amazon.com/gp/product/0735220824/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0735220824&linkId=55045c425b70975a8e3a5495365e1574" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 2018, Edith Hall’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0735220824/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0735220824&linkId=55045c425b70975a8e3a5495365e1574">Aristotle’s Way</a> is a fantastic place to start for anyone with an interest in Aristotle’s view on how we should approach life. “If you believe that the goal of human life is to maximize happiness,” Hall writes, “then you are a budding Aristotelian.”</p>
              
              <p>With a focus on Aristotle’s ethics, Hall puts his thinking into modern contexts and situations, and derives ten practical lessons to help us confront life’s challenges. Written with a popular audience in mind, this is a very accessible entry point into Aristotle’s ethical thinking.</p>
              

              <h2>2. Aristotle: The Desire to Understand, by Jonathon Lear</h2>
              <BookLink title="Aristotle: The Desire to Understand" author="Jonathon Lear" link="http://www.amazon.com/gp/product/0521347629/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521347629&linkId=b0cfa8ee84969dc9ee07e9d8af36376e" img={data.two.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking a more philosophical introduction to Aristotle’s wider catalog, look no further than Jonathon Lear’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521347629/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521347629&linkId=b0cfa8ee84969dc9ee07e9d8af36376e">Aristotle: The Desire to Understand</a>. Lear surveys the core ideas in Aristotle’s physics, metaphysics, ethics, politics, as well as biological and logical works in clear, lucid prose.</p>
              
              <p>With its 340 pages packed full of insight, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521347629/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521347629&linkId=b0cfa8ee84969dc9ee07e9d8af36376e">Aristotle: The Desire to Understand</a> is a brilliant accompaniment for those seeking a deeper understanding of Aristotle’s thought.</p>


              <h2>3. The Cambridge Companion to Aristotle, by Jonathon Barnes</h2>
              <BookLink title="The Cambridge Companion to Aristotle" author="Jonathon Barnes" link="http://www.amazon.com/gp/product/0521422949/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521422949&linkId=12b3f1ee82a944272d7304c63667fba0" img={data.three.childImageSharp.gatsbyImageData} />
              <p>If you’d like to deepen your Aristotle scholarship even further, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521422949/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521422949&linkId=12b3f1ee82a944272d7304c63667fba0">The Cambridge Companion to Aristotle</a>, edited by Jonathon Barnes, assembles nine brilliant essays from leading Aristotle scholars discussing various aspects of his thought.</p>
              
              <p>With chapters on Aristotle’s logic, metaphysics, philosophy of science, psychology, ethics, rhetoric, and poetics, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521422949/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521422949&linkId=12b3f1ee82a944272d7304c63667fba0">The Cambridge Companion to Aristotle</a> belongs on the bookshelf of any serious student of Aristotle.</p>

              <h2>4. How to Live a Good Life (According to 7 of the World’s Wisest Philosophies), by Philosophy Break</h2>
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
                <p>If you’re interested in learning not just about Aristotle, but comparing his insights to six rival philosophies for life, look no further than the 2023 <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link>. This concise online guide is instantly accessible from any device and distills the best and most important wisdom from Aristotle, Stoicism, Buddhism, and more.</p>
                <p>Of course, we’re a little biased, as we produced this one — but if you’re seeking to understand some of life’s most influential ethical frameworks, examine the pros and cons of each, and discover how they might apply to your own life, then this is the guide for you. <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link> gets rave reviews, is better value than buying introductory books for all philosophies covered, and might be just what you’re looking for!</p>
              

              <h2>5. The Nicomachean Ethics, by Aristotle</h2>
              <BookLink title="The Nicomachean Ethics" author="Aristotle" link="http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary texts, where better to start than with a tome routinely heralded as the best entry point for those wanting to read Aristotle?</p>
              
              <p>In <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9">The Nicomachean Ethics</a>, Aristotle’s guiding question is: what is the best thing for a human being? His answer is <i>eudaimonia</i>, which is variously translated from Greek as ‘well-being’, ‘happiness’, ‘blessedness’, and in the context of the virtue ethics Aristotle endorsed, ‘human flourishing’.</p>
              
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9">The Nicomachean Ethics</a> is Aristotle’s exploration into how we can achieve <i>eudaimonia</i> by living well, and includes his <Link to="/articles/the-golden-mean-aristotle-guide-to-living-excellently/">theory of the ‘golden mean’</Link>, his <Link to="/articles/aristotle-on-the-3-types-of-friendship-and-how-they-enrich-life/">influential views on friendship</Link>, as well as his argument that <Link to="/articles/aristotle-on-why-leisure-defines-us-more-than-work/">leisure should define us more than work</Link>. It’s an essential text for anyone interested in the foundations and development of ethical thinking in Western society.</p>
              

              <h2>6. Politics, by Aristotle</h2>
              <BookLink title="Politics" author="Aristotle" link="http://www.amazon.com/gp/product/0199538735/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199538735&linkId=8b38717d791a65e22e1a7b110f2a5fad" img={data.five.childImageSharp.gatsbyImageData} />
              <p>One of the most influential texts in the history of political thought, Aristotle’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199538735/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199538735&linkId=8b38717d791a65e22e1a7b110f2a5fad">Politics</a> raises issues about how society should be organized and governed which continue to be debated today.</p>
              
              <p>By examining how different groups operate, Aristotle seeks to establish how constitutions can best be established and upheld. This particular edition also includes a very useful introductory essay which contextualizes the work and sets the scene for the reader.</p>
              

              <h2>7. Physics, by Aristotle</h2>
              <BookLink title="Physics" author="Aristotle" link="http://www.amazon.com/gp/product/0199540284/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199540284&linkId=d47090fa72ee75b3c789a92c6c2c2180" img={data.six.childImageSharp.gatsbyImageData} />
              <p>Up until the Enlightenment, Aristotle’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199540284/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199540284&linkId=d47090fa72ee75b3c789a92c6c2c2180">Physics</a> was the starting point for anyone who wanted to study the natural sciences.</p>
              
              <p>Reading the <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199540284/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199540284&linkId=d47090fa72ee75b3c789a92c6c2c2180">Physics</a> today, one becomes deeply accommodated with the the genius of Aristotle’s thought and understands why this work maintained its place at the heart of intellectual institutions for millennia. Like the <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199538735/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199538735&linkId=8b38717d791a65e22e1a7b110f2a5fad">Politics</a>, this particular edition includes a very useful introduction.</p>
              

              <h2>8. The Metaphysics, by Aristotle</h2>
              <BookLink title="The Metaphysics" author="Aristotle" link="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994" img={data.seven.childImageSharp.gatsbyImageData} />
              <p>Aristotle’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994">The Metaphysics</a> is considered one of the greatest philosophical works of all time. At the heart of the book lie three questions. Firstly, what is existence, and what sorts of things exist in the world? Secondly, how can things continue to exist, and yet undergo the change we see about us in the natural world? And lastly, how can this world be understood?</p>
              
              <p>Aristotle’s fascinating answers to these questions set in motion two millennia of debate from thinkers all over the globe, making <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994">The Metaphysics</a> an essential addition.</p>
              

              <h2>9. Poetics, by Aristotle</h2>
              <BookLink title="Poetics" author="Aristotle" link="http://www.amazon.com/gp/product/0199608369/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199608369&linkId=060e20576cdb21af2d03ddad73d2650d" img={data.eight.childImageSharp.gatsbyImageData} />
              <p>One of the most influential and perceptive books on poetry, drama, fiction, and art ever written, Aristotle’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199608369/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199608369&linkId=060e20576cdb21af2d03ddad73d2650d">Poetics</a> is the founding text of European aesthetics and literary criticism.</p>
              
              <p>Brimming with insights on such topics as the nature of tragedy and plot, this work more than any other has shaped our modern understanding of the creation and impact of art. <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199608369/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199608369&linkId=060e20576cdb21af2d03ddad73d2650d">Poetics</a> belongs on the bookshelf of anyone interested in Aristotle, beauty, or aesthetics and literary criticism generally.</p>
              
              
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