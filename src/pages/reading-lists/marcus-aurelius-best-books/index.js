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
    <Seo title="Marcus Aurelius Reading List – The Best 5 Books to Read" description="A curated reading list of the most essential books on and by Marcus Aurelius." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Marcus Aurelius" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Marcus Aurelius books" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

          <p><span className="big-letter">M</span>arcus Aurelius was Roman emperor from 161 to 180 CE, and a significant contributor to the philosophy of Stoicism (see our reading list of <Link to="/reading-lists/stoicism/">Stoicism’s best books here</Link>).</p>

          <p>Marcus reigned during a time of many significant military conflicts, as well as the Antonine Plague, a pandemic that devastated the population of the Roman Empire, causing the deaths of five million people.</p>

          <p>Despite these difficult events — or perhaps because of them — the philosophy Marcus advocated is one of calmness and serenity. As he advises in one of many natty aphorisms:</p>

          <blockquote><p>You have power over your mind — not outside events. Realize this, and you will find strength.</p></blockquote>

          <p>Along with Seneca and Epictetus (see our explainers of <Link to="/articles/seneca-on-coping-with-the-shortness-of-life/">Seneca on the shortness of life here</Link>, and <Link to="/articles/dichotomy-of-control-a-stoic-device-for-a-tranquil-mind/">Epictetus’s dichotomy of control here</Link>), Marcus is one of the three Roman Stoic philosophers considered foundational to shaping and popularizing the tradition.</p>

          <p>One reason the Roman Stoics are so celebrated is the directness and accessibility of their works.</p>
          
          <p>For instance, while Marcus’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> — perhaps the most famous and widely-read Stoic text — is recognized as an important philosophical work, it’s no intimidating tome of obscure, abstract logic; it’s simply a collection of Marcus’s personal journal entries written over the course of around a decade.</p>

          <p>Marcus’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> was never intended for public readership; it’s just him at the end of each day reflecting on how he can be better the next.</p>

          <p>And, as we outline in our explainer on <Link to="/articles/four-cardinal-virtues-stoicism-roadmap-to-the-best-life-possible/">Stoicism’s four cardinal virtues</Link>, though he was emperor of Rome — the most powerful man on Earth — and lived almost 2,000 years ago, the everyday struggles and feelings Marcus discusses in his <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> remain remarkably relatable to our lives today.</p>          

          <p>When you’re next generally feeling exasperated by other people, for instance, consider this passage:</p>

          <blockquote><p>When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous and surly. They are like this because they can’t tell good from evil. But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own ― not of the same blood and birth, but the same mind, and possessing a share of the divine. And so none of them can hurt me. No one can implicate me in ugliness. Nor can I feel angry at my relative, or hate them. We were born to work together like feet, hands and eyes, like the two rows of teeth, upper and lower. To obstruct each other is unnatural. To feel anger at someone, to turn your back on them: these are unnatural.</p></blockquote>

          <p>This passage perhaps indicates why Marcus’s work has endured throughout history.</p>
          
          <p>By holding himself to a high standard in his day-to-day activities, Marcus does not preach Stoicism nor lose himself in abstract argument; rather, he demonstrates what it means to be a Stoic through honest journal entries, leading by example and remaining resolutely practical in his solutions.</p>

          <p>In one of his most quoted utterances, he encapsulates this action-oriented attitude:</p>

        <blockquote><p>Waste no more time arguing what a good man should be. Be one.</p></blockquote>

        <BigSubscribe />

        <p>This reading list consists of the best books on and by Marcus Aurelius. After reading it, you’ll understand exactly why this great philosopher has been praised by countless writers, philosophers, monarchs, and politicians in the centuries following his reign. Let’s dive in!</p>


              <h2>1. Meditations, by Marcus Aurelius</h2>
              <BookLink title="Meditations" author="Marcus Aurelius" link="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

              <p>One of Stoic philosophy’s most recommended practices for living a better life is committing to writing a daily journal. It is fitting, then, that the main writings we have from Marcus are from <i>his</i> daily journal.</p>

              <p>Composed between 161 to 180 CE (covering his time as emperor), Marcus’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> was never intended for public readership; it consists of his reflections on everything from the everyday activities we can all relate to, like having to get out of bed when we might not want to, to more thoughtful subjects like the nature and utility of Stoic philosophy itself.</p>

              <p>Perhaps what makes <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> so enduring is that, though these are the diary entries of the most powerful man on Earth from almost 2,000 years ago, Marcus’s writings show a vulnerability, an uncertainty about how best to approach life and do what is demanded of us, that might resonate with all humans, no matter their location in time or space.</p>

              <p>Reading his journal entries, we feel Marcus himself is working things out as he goes along, actively philosophizing on the page before us. We are granted an intimate insight into his own inner reflections, and can use them to enrich our own.</p>

              <p>If you are interested in Marcus Aurelius, or in Stoicism generally, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> is simply essential for your bookshelf. The profound lessons contained within Marcus’s journal entries have been praised by countless writers, philosophers, monarchs and politicians in the centuries since the great man’s death.</p>

              <p>This particular edition is a recent translation by the ancient Greek scholar Robin Waterfield, and with its helpful annotations is recognized as perhaps the best version of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> available today.</p>
              

              <h2>2. How to Think Like a Roman Emperor, by Donald Robertson</h2>
              <BookLink title="How to Think Like a Roman Emperor" author="Donald Robertson" link="http://www.amazon.com/How-Think-Like-Roman-Emperor/dp/1250621437?&linkCode=ll1&tag=philosophybre-20&linkId=e66b86bd556c7ddef6c3650b995cb4e6&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

              <p>While the <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> is in general very accessible, there are some parts of it that can be denser or more difficult to understand without context. It can be helpful, therefore, to have some secondary literature to fill in the blanks and make for a richer reading experience.</p>

              <p>An easy place to start with the secondary literature is <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/How-Think-Like-Roman-Emperor/dp/1250621437?&linkCode=ll1&tag=philosophybre-20&linkId=e66b86bd556c7ddef6c3650b995cb4e6&language=en_US&ref_=as_li_ss_tl">The How to Think Like a Roman Emperor</a>, in which the cognitive psychotherapist Donald Robertson offers very accessible commentary on Marcus’s life and work, and discusses how Stoic insights might apply to our lives today.</p>

              <p>Part biography, part self-help, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/How-Think-Like-Roman-Emperor/dp/1250621437?&linkCode=ll1&tag=philosophybre-20&linkId=e66b86bd556c7ddef6c3650b995cb4e6&language=en_US&ref_=as_li_ss_tl">The How to Think Like a Roman Emperor</a> will be a useful guide if you’re seeking a quick, easy introduction to Marcus’s philosophy, as well as advice on how to use it in your own life.</p>


              <h2>3. The Inner Citadel, by Pierre Hadot</h2>
              <BookLink title="The Inner Citadel" author="Pierre Hadot" link="http://www.amazon.com/Inner-Citadel-Meditations-Marcus-Aurelius/dp/0674007077?&linkCode=ll1&tag=philosophybre-20&linkId=1f4ec098381c74a99292869577469d27&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />

              <p>For a more academically rigorous — yet powerfully clear and engaging — examination of Marcus’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a>, consider the philosopher Pierre Hadot’s celebrated 2001 commentary, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Inner-Citadel-Meditations-Marcus-Aurelius/dp/0674007077?&linkCode=ll1&tag=philosophybre-20&linkId=1f4ec098381c74a99292869577469d27&language=en_US&ref_=as_li_ss_tl">The Inner Citadel</a>.</p>

              <p>Hadot specialized in ancient philosophies like Stoicism and <Link to="/articles/epicureanism-defined-philosophy-is-a-form-of-therapy/">Epicureanism</Link>, and his expertise is effortlessly on show here.</p>

              <p>Approaching the <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> as <i>Stoicism in practice</i>, as opposed to mere diary entries, Hadot seamlessly connects Marcus’s philosophy to the historical context of the time, as well as to the thought of other great thinkers, including Epictetus, Aristotle (see <Link to="/reading-lists/aristotle/">Aristotle’s best books here</Link>), Epicurus (see <Link to="/reading-lists/epicureanism/">Epicurus’s best books here</Link>), and even Nietzsche (see <Link to="/reading-lists/friedrich-nietzsche/">Nietzsche’s best books here</Link>).</p> 

              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Inner-Citadel-Meditations-Marcus-Aurelius/dp/0674007077?&linkCode=ll1&tag=philosophybre-20&linkId=1f4ec098381c74a99292869577469d27&language=en_US&ref_=as_li_ss_tl">The Inner Citadel</a> is a phenomenal piece of analysis that not only deepens our understanding of Marcus’s life and work, but also elucidates many important philosophical ideas.</p> 

              <p>If you’re interested not just in Stoic philosophy, but its place and importance in our intellectual history, this is the book for you.</p>


              <h2>4. Marcus Aurelius, by John Sellars</h2>
              <BookLink title="Marcus Aurelius" author="John Sellars" link="http://www.amazon.com/Marcus-Aurelius-Philosophy-Roman-World/dp/036714607X?&linkCode=ll1&tag=philosophybre-20&linkId=824ec92e69ca1b5c97135a5ec996d60e&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

              <p>For another academic take on Marcus’s philosophy, consider contemporary philosopher John Sellars’s brilliant new 2020 study, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Marcus-Aurelius-Philosophy-Roman-World/dp/036714607X?&linkCode=ll1&tag=philosophybre-20&linkId=824ec92e69ca1b5c97135a5ec996d60e&language=en_US&ref_=as_li_ss_tl">Marcus Aurelius</a>.</p>

              <p>Like Hadot’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Inner-Citadel-Meditations-Marcus-Aurelius/dp/0674007077?&linkCode=ll1&tag=philosophybre-20&linkId=1f4ec098381c74a99292869577469d27&language=en_US&ref_=as_li_ss_tl">The Inner Citadel</a>, Sellars’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Marcus-Aurelius-Philosophy-Roman-World/dp/036714607X?&linkCode=ll1&tag=philosophybre-20&linkId=824ec92e69ca1b5c97135a5ec996d60e&language=en_US&ref_=as_li_ss_tl">Marcus Aurelius</a> challenges claims that the <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> doesn’t constitute a proper work of philosophy, revealing the rich and fascinating history of the arguments and ideas behind Marcus’s apparently commonsensical, straightforward statements.</p>

              <p>While agreeing with Hadot in this respect, Sellars nevertheless comes to disagree with Hadot’s account of Marcus’s philosophy on a number of important points.</p>

              <p>This makes <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Inner-Citadel-Meditations-Marcus-Aurelius/dp/0674007077?&linkCode=ll1&tag=philosophybre-20&linkId=1f4ec098381c74a99292869577469d27&language=en_US&ref_=as_li_ss_tl">The Inner Citadel</a> and <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Marcus-Aurelius-Philosophy-Roman-World/dp/036714607X?&linkCode=ll1&tag=philosophybre-20&linkId=824ec92e69ca1b5c97135a5ec996d60e&language=en_US&ref_=as_li_ss_tl">Marcus Aurelius</a> fantastic companion pieces. If you treat yourself to both, you’ll have a full and rich understanding of how the <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> fits in Stoicism and philosophy generally.</p>


              <h2>5. How to Live a Good Life (According to 7 of the World’s Wisest Philosophies), by Philosophy Break</h2>
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
                <p>Finally, if you’re interested in learning not just about Marcus Aurelius’s Stoicism, but comparing its insights to six rival philosophies for life, look no further than the 2023 <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link>. This concise online guide is instantly accessible from any device and distills the best and most important wisdom from Stoicism, Buddhism, Existentialism, and more.</p>
                <p>Of course, we’re a little biased, as we produced this one — but if you’re seeking to understand some of life’s most influential ethical frameworks, examine the pros and cons of each, and discover how they might apply to your own life, then this is the guide for you. <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link> gets rave reviews, is better value than buying introductory books for all philosophies covered, and might be just what you’re looking for!</p>
              

              
              
              
              <h2>Further reading</h2>
              <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> or <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram</a>.</p>
              <CtaReadingList />
          </div>

          {/*sidebar*/}
          <Sidebar />

        </div>
        
        {/*post reading list*/}
        <PostReadingList />

    </Layout>
    </>
  )
}

export const query = graphql`{
  title: file(relativePath: {eq: "marcus-aurelius.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "marcus-med.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "marcus-think.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "marcus-cit.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "marcus-john.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList