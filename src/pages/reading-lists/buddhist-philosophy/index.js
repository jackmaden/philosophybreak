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
    <Seo title="Buddhist Philosophy Reading List – The Best 7 Books to Read" description="A curated reading list of the best and most essential books of and about Buddhist philosophy." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Buddhist Philosophy" number="7" img={data.title.childImageSharp.gatsbyImageData} alt="Compotier, Carafe and Open Book, by Juan Gris" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

              <p><span className="big-letter">B</span>uddhism is a philosophical tradition based on the teachings of Siddhartha Gautama, a prince who lived in ancient India around 500 BCE (exact dates vary). It’s thought the Buddha’s teachings were originally transmitted orally, and only written down in the 1st century BCE in Sri Lanka, with further Buddhist branches spreading throughout India, China, Tibet, Japan, and South-East Asia.</p>  

              <p>Encompassing as it does a variety of traditions, beliefs, and spiritual practices, Buddhism can be viewed as both a religion and a philosophy.</p>
              
              <p>However, unlike some other religions, its original philosophical teachings are not (necessarily) grounded in any appeals to ‘supernatural’ elements like a creator God or gods, resulting in the emergence of secular Buddhist movements that engender keen philosophical engagement.</p> 

              <p>The teachings of the Buddha — especially his focus on suffering (as discussed in our explainer on the <Link to="/articles/the-buddha-on-ending-suffering-the-parable-of-the-poisoned-arrow/">Buddha’s parable of the poisoned arrow</Link>), his <Link to="/articles/the-buddha-four-noble-truths-the-cure-for-suffering/">Four Noble Truths</Link>, the concept of <Link to="/articles/anicca-our-collective-way-of-life-wont-exist-soon/">anicca (impermanence)</Link>, and the concept of <Link to="/articles/anatman-buddhist-doctrine-of-no-self-why-you-do-not-really-exist/">anātman (no-self)</Link> — have fascinated thinkers for thousands of years, and offer a rich framework for facing up to life and suffering.</p>
              
              <p>While perhaps best known for its advocation of practices like mindfulness and meditation, and while many different schools and doctrines have grown up around its original teachings, the core of Buddhist philosophy has much to offer on a broad range of topics, from <Link to="/articles/metaphysics-what-is-it-why-is-it-important-today/">metaphysics</Link> to <Link to="/reading-lists/ethics-and-morality/">ethics</Link>.</p>

              <BigSubscribe />

              <p>This reading list focuses on the best introductions to Buddhist philosophy in general, from anthologies to essential Buddhist texts. After reading some of the books on this list, you’ll understand exactly why this great tradition continues to boast over 500 million followers around the world today. Let’s dive in!</p>

              <h2>1. What the Buddha Taught, by Walpola Rahula</h2>
              <BookLink title="What the Buddha Taught" author="Walpola Rahula" link="http://www.amazon.com/What-Buddha-Taught-Expanded-Dhammapada/dp/0802130313?&linkCode=ll1&tag=philosophybre-20&linkId=b5d88632657f90adc759c4271a34d706&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Originally published in 1959, Sri Lankan Buddhist monk Walpola Rahula’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/What-Buddha-Taught-Expanded-Dhammapada/dp/0802130313?&linkCode=ll1&tag=philosophybre-20&linkId=b5d88632657f90adc759c4271a34d706&language=en_US&ref_=as_li_ss_tl">What the Buddha Taught</a> is a classic introduction to Buddhism still widely read and celebrated today.</p>
              
              <p>Clearly and concisely covering the Buddha’s core teachings, and drawing from original Buddhist texts, Rahula’s work is a fantastic place to start for anyone with a budding interest in the subject.</p>
              
              <p>Coming in at an accessible 151 pages, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/What-Buddha-Taught-Expanded-Dhammapada/dp/0802130313?&linkCode=ll1&tag=philosophybre-20&linkId=b5d88632657f90adc759c4271a34d706&language=en_US&ref_=as_li_ss_tl">What the Buddha Taught</a> is a very nice entry point to Buddhist philosophy.</p>
              

              <h2>2. The Heart of the Buddha’s Teaching, by Thich Nhat Hanh</h2>
              <BookLink title="The Heart of the Buddha’s Teaching" author="Thich Nhat Hanh" link="http://www.amazon.com/Heart-Buddhas-Teaching-Transforming-Liberation/dp/0767903692?&linkCode=ll1&tag=philosophybre-20&linkId=cb1338b01cf20e5fc6618c946629ad14&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>For a more recent and slightly more in-depth introduction to the development and core tenets of Buddhist philosophy, look no further than Thich Nhat Hanh’s 1999 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Heart-Buddhas-Teaching-Transforming-Liberation/dp/0767903692?&linkCode=ll1&tag=philosophybre-20&linkId=cb1338b01cf20e5fc6618c946629ad14&language=en_US&ref_=as_li_ss_tl">The Heart of the Buddha’s Teaching</a>.</p>
              
              <p>Thich Nhat Hanh was a Buddhist Zen master heralded around the world as a fantastic Buddhist advocate and communicator (here's my article discussing <Link to="/articles/thich-nhat-hanh-on-healing-the-wounds-of-the-past/">Thich Nhat Hanh on healing the wounds of the past</Link>, for example). His brilliant introduction covers the Four Noble Truths, the Noble Eightfold Path, and much more. At 304 pages, this slightly longer introduction to Buddhism comes highly recommended.</p>
              

              <h2>3. Why Buddhism is True, by Robert Wright</h2>
              <BookLink title="Why Buddhism is True" author="Robert Wright" link="http://www.amazon.com/Why-Buddhism-True-Philosophy-Enlightenment/dp/1439195463?&linkCode=ll1&tag=philosophybre-20&linkId=d70187f94bf95dfa5361294cfe2500b3&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>For an even more recent introduction to Buddhist philosophy — an introduction that is written very much from a Western secularist perspective — consider American author Robert Wright’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Why-Buddhism-True-Philosophy-Enlightenment/dp/1439195463?&linkCode=ll1&tag=philosophybre-20&linkId=d70187f94bf95dfa5361294cfe2500b3&language=en_US&ref_=as_li_ss_tl">Why Buddhism is True</a>, published in 2017.</p>
              
              <p>Weaving in his own personal story and anecdotes, Wright attempts to show how key Buddhist teachings and practices are compatible with — and even backed by — the latest learnings from cognitive science and evolutionary psychology. If you’re seeking a highly readable, engaging introduction to Buddhism from a Western secularist perspective, Wright’s book is for you.</p>

              <h2>4. How to Live a Good Life (According to 7 of the World’s Wisest Philosophies), by Philosophy Break</h2>
              <div className="article white">
                  <Link to="/how-to-live-a-good-life/">
                        <StaticImage src="../../../images/how-to-live-a-good-life.png" alt="How to Live a Good Life" placeholder="blurred" />
                        <div className="article-info">
                            <h4>How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</h4>
                            <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BY PHILOSOPHY BREAK</p>
                            <p style={{margin: "0 0 3px"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span><span style={{fontSize: '12px'}}> (100+ reviews)</span></p>
                            <Link to="/how-to-live-a-good-life/" className="primary button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>Get Instant Access</Link>
                        </div>
                    </Link>
                </div>
                <p>If you’re interested in learning not just about Buddhism, but comparing its insights to six rival philosophies for life, look no further than the 2026 <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link>. This concise online guide is instantly accessible from any device and distills the best and most important wisdom from Buddhism, Stoicism, Existentialism, and more.</p>
                <p>Of course, we’re a little biased, as we produced this one — but if you’re seeking to understand some of life’s most influential ethical frameworks, examine the pros and cons of each, and discover how they might apply to your own life, then this is the guide for you. <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link> gets rave reviews, is better value than buying introductory books for all philosophies covered, and might be just what you’re looking for!</p>
              

              <h2>5. The Dhammapada, translated by Eknath Easwaran</h2>
              <BookLink title="The Dhammapada" author="Eknath Easwaran" link="http://www.amazon.com/Dhammapada-Easwarans-Classics-Indian-Spirituality/dp/1586380206?&linkCode=ll1&tag=philosophybre-20&linkId=e1f8cbec4394321cf33f30d83fb864ec&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary Buddhist texts and commentaries, where better to start than with one of the most accessible collections of aphorisms and verses attributed to the Buddha himself?</p>
              
              <p>Commonly thought of as the ‘handbook’ of original Buddhist teachings, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Dhammapada-Easwarans-Classics-Indian-Spirituality/dp/1586380206?&linkCode=ll1&tag=philosophybre-20&linkId=e1f8cbec4394321cf33f30d83fb864ec&language=en_US&ref_=as_li_ss_tl">The Dhammapada</a> — here translated, contextualized, and introduced by the famed Indian-born spiritual teacher Eknath Easwaran — presents powerful verses recorded by direct disciples of the Buddha, covering core Buddhist ideas in poetic language. If you’re interested in Buddhist philosophy, this beautiful work belongs on your bookshelf.</p>
              
              <h2>6. In the Buddha’s Words, by Bhikkhu Bodhi</h2>
              <BookLink title="In the Buddha’s Words" author="Bhikkhu Bodhi" link="http://www.amazon.com/Buddhas-Words-Anthology-Discourses-Teachings/dp/0861714911?&linkCode=ll1&tag=philosophybre-20&linkId=c3d25e83fbffabc2fdf7173ebb6f848e&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
              <p>For a more in-depth collection of the Buddha’s original teachings, complete with detailed contextualization and commentary (as well as a foreword from the Dalai Lama), look no further than Bhikkhu Bodhi’s brilliant <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Buddhas-Words-Anthology-Discourses-Teachings/dp/0861714911?&linkCode=ll1&tag=philosophybre-20&linkId=c3d25e83fbffabc2fdf7173ebb6f848e&language=en_US&ref_=as_li_ss_tl">In the Buddha’s Words</a>.</p>
              
              <p>This anthology presents thoughtfully curated selections from the Pali Canon of Buddhist philosophy, as well as clear translations of the Buddha’s original teachings. It’s an essential addition for any aspiring student of Buddhist philosophy.</p>
              

              <h2>7. Buddhist Philosophy: Essential Readings, by William Edelglass</h2>
              <BookLink title="Buddhist Philosophy: Essential Readings" author="William Edelglass" link="http://www.amazon.com/Buddhist-Philosophy-Essential-William-Edelglass/dp/0195328175?&linkCode=ll1&tag=philosophybre-20&linkId=b796320839c15a7c10a84bf56405c729&language=en_US&ref_=as_li_ss_tl" img={data.six.childImageSharp.gatsbyImageData} />
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Buddhist-Philosophy-Essential-William-Edelglass/dp/0195328175?&linkCode=ll1&tag=philosophybre-20&linkId=b796320839c15a7c10a84bf56405c729&language=en_US&ref_=as_li_ss_tl">Buddhist Philosophy: Essential Readings</a>, edited by William Edelglass and Jay Garfield, is the most academically rigorous (and technical) presentation and commentary on Buddhism on this list.</p>
              
              <p>Aimed at those interested in the connections between Western philosophy and Buddhism, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Buddhist-Philosophy-Essential-William-Edelglass/dp/0195328175?&linkCode=ll1&tag=philosophybre-20&linkId=b796320839c15a7c10a84bf56405c729&language=en_US&ref_=as_li_ss_tl">Buddhist Philosophy: Essential Readings</a> consists of academic essays on how various selections of Buddhist literature align to <Link to="/articles/metaphysics-what-is-it-why-is-it-important-today/">metaphysics</Link>, <Link to="/reading-lists/epistemology/">epistemology</Link>, <Link to="/reading-lists/philosophy-of-language/">philosophy of language</Link>, <Link to="/reading-lists/consciousness/">philosophy of mind</Link>, and <Link to="/reading-lists/ethics-and-morality/">ethics</Link>. More demanding than other works on this list, this book nevertheless deeply rewards attentive reading.</p>
              

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
  one: file(relativePath: {eq: "buddhism-taught.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "buddhism-nhat.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "buddhism-wright.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "buddhism-eknath.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "buddhism-words.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "buddhist-philosophy.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList