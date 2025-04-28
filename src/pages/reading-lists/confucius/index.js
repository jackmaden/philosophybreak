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
    <Seo title="Confucius Reading List – The Best 6 Books to Read" description="A curated reading list of the best and most essential books of and about Confucius." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Confucius" number="6" img={data.title.childImageSharp.gatsbyImageData} alt="Confucius" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

              <p><span className="big-letter">C</span>onfucianism is a philosophical tradition based on the teachings of ancient Chinese philosopher Confucius (551 BCE - 479 BCE), who is considered to be one of the most significant thinkers in East Asian history.</p> 

              <p>In the 2,500 years since Confucius offered his teachings, many interpretations and schools have arisen from his thought — some of which have been key guiding principles for various Chinese dynasties over the centuries.</p> 

              <p>However, the core idea that draws the diverse tradition of Confucianism together is that living a good life (i.e. following <Link to="/articles/dao-in-chinese-philosophy-harmonizing-with-the-way/">‘Dao’</Link>) depends on the quality of our social relations.</p>
              <p>The core Confucian texts of Confucius, Mengzi, and Xunzi (see our article detailing <Link to="/articles/mengzi-xunzi-on-human-nature-are-we-good-or-evil/">Mengzi and Xunzi’s famous disagreement on human nature here</Link>) encourage us to question and reflect on the roles we occupy, as well as the obligations we have in those roles — to friends, family, social communities, and even the global population.</p>
              <p>An especially distinctive aspect of Confucianism is its emphasis on ritual practice, which you can explore further in our quick explainer on the <Link to='/articles/confucius-rituals-grind-our-characters-like-pieces-of-jade/'>power of ritual in Confucian philosophy</Link>.</p>

              <BigSubscribe />

              <p>This reading list consists of the best books of and about Confucianism. From introductions to core Confucian texts, after reading the books on this list, you’ll understand exactly why this great philosophical tradition remains so influential today. Let’s jump in!</p> 

              <h2>1. Confucianism: A Very Short Introduction, by Daniel K. Gardner</h2>
              <BookLink title="Confucianism: A Very Short Introduction" author="Daniel K. Gardner" link="http://www.amazon.com/Confucianism-Very-Short-Introduction-Introductions/dp/0195398912?&linkCode=ll1&tag=philosophybre-20&linkId=dfbf702c2000346bf1face328cd7645d&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 2014, Confucian specialist and professor Daniel K. Gardner’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Confucianism-Very-Short-Introduction-Introductions/dp/0195398912?&linkCode=ll1&tag=philosophybre-20&linkId=dfbf702c2000346bf1face328cd7645d&language=en_US&ref_=as_li_ss_tl">Confucianism: A Very Short Introduction</a> is a brilliant starting place for anyone with a budding interest in the subject.</p>
              
              <p>Gardner offers a compelling survey of the philosophy and history of Confucianism, illuminating its answers to the questions of what makes a good person, as well as what makes a good government.</p>
              
              <p>He also examines how the answers offered by Confucius shaped, and continue to shape, Chinese culture and society. Coming in at an accessible 152 pages, this is a very nice entry point to Confucian philosophy.</p>
              

              <h2>2. Thinking Through Confucius, by David L. Hall and Roger Ames</h2>
              <BookLink title="Thinking Through Confucius" author="David L. Hall & Roger Ames" link="http://www.amazon.com/Thinking-Through-Confucius-Systematic-Philosophy/dp/0887063772?&linkCode=ll1&tag=philosophybre-20&linkId=65c3fa5103551cdb7d9007c45a81023d&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>For a more in-depth and academic examination of the philosophy behind Confucian thinking, look no further than David L. Hall and Roger Ames’s 1987 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Thinking-Through-Confucius-Systematic-Philosophy/dp/0887063772?&linkCode=ll1&tag=philosophybre-20&linkId=65c3fa5103551cdb7d9007c45a81023d&language=en_US&ref_=as_li_ss_tl">Thinking Through Confucius</a>.</p>
              
              <p>In their rich analysis, Hall and Ames attempt to build a bridge between Western philosophy and Confucianism, investigating what philosophy as practiced by both traditions even means. A more demanding and challenging read, enthusiastic students of Confucianism will derive much value from <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Thinking-Through-Confucius-Systematic-Philosophy/dp/0887063772?&linkCode=ll1&tag=philosophybre-20&linkId=65c3fa5103551cdb7d9007c45a81023d&language=en_US&ref_=as_li_ss_tl">Thinking Through Confucius</a>.</p>

              <h2>3. How to Live a Good Life (According to 7 of the World’s Wisest Philosophies), by Philosophy Break</h2>
              <div className="article white">
                  <Link to="/how-to-live-a-good-life/">
                        <StaticImage src="../../../images/PFL-mob.png" alt="How to Live a Good Life" placeholder="blurred" />
                        <div className="article-info">
                            <h4>How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</h4>
                            <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BY PHILOSOPHY BREAK</p>
                            <p style={{margin: "0 0 3px"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span><span style={{fontSize: '12px'}}> (100+ reviews)</span></p>
                            <Link to="/how-to-live-a-good-life/" className="primary button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>Get Instant Access</Link>
                        </div>
                    </Link>
                </div>
                <p>If you’re interested in learning not just about Confucianism, but comparing its insights to six rival philosophies for life, look no further than the 2025 <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link>. This concise online guide is instantly accessible from any device and distills the best and most important wisdom from Confucianism, Stoicism, Existentialism, and more.</p>
                <p>Of course, we’re a little biased, as we produced this one — but if you’re seeking to understand some of life’s most influential ethical frameworks, examine the pros and cons of each, and discover how they might apply to your own life, then this is the guide for you. <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link> gets rave reviews, is better value than buying introductory books for all philosophies covered, and might be just what you’re looking for!</p>
              

              <h2>4. The Analects, by Confucius</h2>
              <BookLink title="The Analects" author="Confucius" link="http://www.amazon.com/Analects-Penguin-Classics-Confucius/dp/0140443487?&linkCode=ll1&tag=philosophybre-20&linkId=7698cbadd927de40d78089c88201a025&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary Confucian texts, where better to start than with the most accessible collection of aphorisms and verses attributed to Confucius himself?</p>
              
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Analects-Penguin-Classics-Confucius/dp/0140443487?&linkCode=ll1&tag=philosophybre-20&linkId=7698cbadd927de40d78089c88201a025&language=en_US&ref_=as_li_ss_tl">The Analects</a> — here translated, contextualized, and introduced by famed Chinese professor and author D. C. Lau — are a collection of Confucius’s sayings brought together by his pupils shortly after his death in 497 BCE. Together, they express the Confucian code for living according to virtue. If you’re interested in Confucian philosophy, this beautiful work belongs on your bookshelf.</p>
              

              <h2>5. Mengzi: With Selections from Traditional Commentaries, by Mengzi</h2>
              <BookLink title="Mengzi: With Selections from Traditional Commentaries" author="Mengzi" link="http://www.amazon.com/Mengzi-Selections-Traditional-Commentaries-Classics/dp/087220913X?&linkCode=ll1&tag=philosophybre-20&linkId=f60400e34a6bad6e3682d70a2c5943e3&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Mengzi was a Confucian philosopher who lived just one century after Confucius. His deeply influential interpretation and expansion of Confucian thought — based on the judgment that people are generally good — is translated and contextualized brilliantly by Bryan Van Norden in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Mengzi-Selections-Traditional-Commentaries-Classics/dp/087220913X?&linkCode=ll1&tag=philosophybre-20&linkId=f60400e34a6bad6e3682d70a2c5943e3&language=en_US&ref_=as_li_ss_tl">Mengzi: With Selections from Traditional Commentaries</a>.</p>
              
              <p>This edition is also accompanied by selected passages from the classic commentary of Zhu Xi, a Chinese philosopher who lived from 1130 to 1200. This essential primary work will augment the understanding of any Confucian student.</p>
              

              <h2>6. Xunzi: The Complete Text, by Xunzi</h2>
              <BookLink title="Xunzi: The Complete Text" author="Xunzi" link="http://www.amazon.com/Xunzi-Complete-Text/dp/0691169314?&linkCode=ll1&tag=philosophybre-20&linkId=54b5a04e8df65197c79692eaaabe5a06&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
              <p>Xunzi was a Confucian philosopher who lived two centuries after Confucius. In contrast to Mengzi, Xunzi’s interpretation and expansion of Confucian thought was based on the judgment that people are inherently bad.</p>
              
              <p>In <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Xunzi-Complete-Text/dp/0691169314?&linkCode=ll1&tag=philosophybre-20&linkId=54b5a04e8df65197c79692eaaabe5a06&language=en_US&ref_=as_li_ss_tl">Xunzi: The Complete Text</a>, beautifully translated by Eric L. Hutton, Xunzi presents a sophisticated vision for Confucian ethics, politics, warfare, language, ritual, human nature, and more. This edition includes helpful contextual and exploratory notes, making this an essential work for any serious student of Confucian philosophy.</p>
              

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
  title: file(relativePath: {eq: "confucius.webp"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "confucius-gardner.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "confucius-thinking.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "confucius-analects.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "confucius-mengzi.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "confucius-xunzi.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList