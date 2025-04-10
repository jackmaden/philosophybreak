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
    <Seo title="Stoicism Reading List – The Best 6 Books to Read" description="A curated reading list of the most essential books of and about Stoic philosophy, including the writings of Epictetus, Seneca, and Marcus Aurelius." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Stoicism" number="6" img={data.title.childImageSharp.gatsbyImageData} alt="Stoicism books" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">F</span>or a philosophy founded almost 2,500 years ago by the ancient Greek philosopher Zeno of Citium, Stoicism (a strong philosophical rival to <Link to="/articles/epicureanism-defined-philosophy-is-a-form-of-therapy/">Epicureanism</Link>) is seemingly all the rage.</p> 
              
              <p>Nuggets of Stoic wisdom dating back to ancient Greco-Roman times — particularly featuring Stoic philosophers Seneca, Epictetus, and Marcus Aurelius — float round the internet and chime with millions across social media. Living up to <Link to="/articles/four-cardinal-virtues-stoicism-roadmap-to-the-best-life-possible/">the four cardinal virtues of Stoicism</Link>, and deploying <Link to="/articles/the-last-time-meditation-a-stoic-tool-for-living-in-the-present/">Stoic tools for living in the present</Link>, has become fashionable.</p>

              <p>This is likely due to how fantastically practical much Stoic wisdom can be. Unlike other philosophy — which, tragically, as a general subject is often perceived to be outdated or pointless (<Link to="/why-is-philosophy-important-today/">here’s our counter-argument as to why philosophy in today’s world is actually as relevant and important as ever</Link>) — Stoicism cuts right to the heart of our day-to-day attitudes and behaviors, and its core principles are distilled in many famous natty aphorisms and quotations.</p> 

              <p>For example, consider this from Marcus Aurelius (see our pick of <Link to="/reading-lists/marcus-aurelius-best-books/">Marcus Aurelius’s best books here</Link>):</p>

              <blockquote><p>You have power over your mind — not outside events. Realize this, and you will find strength.</p></blockquote>

              <p>Or Epictetus on the <Link to="/articles/dichotomy-of-control-a-stoic-device-for-a-tranquil-mind/">dichotomy of control</Link>:</p>

              <blockquote><p>If you wish to have peace and contentment, release your attachment to all things outside your control. This is the path of freedom and happiness.</p></blockquote> 

              <p>Or <Link to="/articles/seneca-on-coping-with-the-shortness-of-life/">Seneca on the shortness of life</Link>:</p>

              <blockquote><p>It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death's final constraint to realize that it has passed away before we knew it was passing. So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it… life is long if you know how to use it.</p></blockquote>

              <p>Or, again, <Link to="/articles/stoicism-and-emotion-dont-repress-your-feelings-reframe-them/">Seneca on how to approach strong feelings and emotions</Link>:</p>

              <blockquote><p>If you want to determine the nature of anything, entrust it to time: when the sea is stormy, you can see nothing clearly.</p></blockquote>

              <p>Or, again(!), <Link to="/articles/seneca-to-find-peace-stop-chasing-unfulfillable-desires/">Seneca on how if we want to find peace we must stop chasing unfulfillable desires</Link>:</p>

              <blockquote><p>If, no matter how far you travel, there always seems to be some further place you need to reach, that is a sure sign that the desire is contrary to nature…</p></blockquote>

              <p>Very nice quotations — all lifted from the books below. But beyond these practical nuggets of wisdom encouraging us to stay calm and focus on what’s within our own control (and regulate our attitudes to anything outside that control), Stoicism is a fully-fledged, holistic value system that can be adopted as a philosophy for all aspects of life.</p> 

              <BigSubscribe />

              <p>If you’re looking to explore Stoicism further, this reading list contains the best and most accessible introductory books on the subject, as well as the most important primary texts from the great Stoic thinkers themselves. Let’s dive in!</p>

              <h2>1. How to Be a Stoic, by Massimo Pigliucci</h2>
              <BookLink title="How to Be a Stoic" author="Massimo Pigliucci" link="http://www.amazon.com/gp/product/1541644530/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1541644530&linkId=6c8e27c041ce2dfd795d00afba1fad86" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 2017, Massimo Pigliucci’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1541644530/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1541644530&linkId=6c8e27c041ce2dfd795d00afba1fad86">How to Be a Stoic</a> is a fantastic place to start for anyone with a budding interest in Stoicism. Pigliucci introduces Stoicism with clear, concise language and guides the reader through its core tenets with compelling imaginary conversations with Epictetus, one of the most influential Stoics of all time.</p> 
              <p>With this accessible format, Pigliucci transposes ancient Stoic wisdom into the 21st century, unlocking practical wisdom for problems we face today, making <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1541644530/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1541644530&linkId=6c8e27c041ce2dfd795d00afba1fad86">How to Be a Stoic</a> a very nice entry point to Stoicism.</p>
              

              <h2>2. Cambridge Companion to the Stoics, by Brad Inwood</h2>
              <BookLink title="Cambridge Companion to the Stoics" author="Brad Inwood" link="http://www.amazon.com/gp/product/0521779855/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521779855&linkId=7757c486b08f31177696189922568a47" img={data.two.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking a more hardcore critical analysis of all things Stoicism, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521779855/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521779855&linkId=7757c486b08f31177696189922568a47">The Cambridge Companion to the Stoics</a>, published in 1999. This collection of essays from contemporary academics, edited by Brad Inwood, explores the history and influence of Stoicism, and offers a rigorous dissection of its central ideas.</p> 
              <p>Ideal for those looking to take the next step in their engagement with Stoicism, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521779855/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521779855&linkId=7757c486b08f31177696189922568a47">The Cambridge Companion to the Stoics</a> is a challenging tome of deep value, and belongs on the bookshelf of any aspiring Stoic scholar.</p>

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
                <p>If you’re interested in learning not just about Stoicism, but comparing its insights to six rival philosophies for life, look no further than the 2025 <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link>. This concise online guide is instantly accessible from any device and distills the best and most important wisdom from Stoicism, Buddhism, Existentialism, and more.</p>
                <p>Of course, we’re a little biased, as we produced this one — but if you’re seeking to understand some of life’s most influential ethical frameworks, examine the pros and cons of each, and discover how they might apply to your own life, then this is the guide for you. <Link to="/how-to-live-a-good-life/">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</Link> gets rave reviews, is better value than buying introductory books for all philosophies covered, and might be just what you’re looking for!</p>
              

              <h2>4. Discourses and Selected Writings, by Epictetus</h2>
              <BookLink title="Discourses and Selected Writings" author="Epictetus" link="http://www.amazon.com/gp/product/0140449469/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449469&linkId=73e3249fb0aa7e242c68e9de1623d07c" img={data.three.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary Stoic texts, where better to start than with the work of the philosopher whose no-nonsense practical wisdom set the foundations for much of the Stoic philosophy that followed?</p>
              <p>Former slave turned philosophical teacher, the Greek Stoic Epictetus ran a school in Nicopolis in the early second century AD, the lessons of which were eagerly recorded by Arrian, Epictetus’s most famous pupil.</p>
              <p>These recordings have been celebrated throughout the ages as a wonderful guide to the ethics of Stoicism and moral self-improvement, tackling questions on mortality, fear, illness, family, friendship, love, freedom, and how to live a good life.</p>
              <p>The potentially life-changing wisdom contained in Epictetus’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449469/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449469&linkId=73e3249fb0aa7e242c68e9de1623d07c">Discourses and Selected Writings</a> is as relevant, accessible, and enlightening today as it was 2,000 years ago, making this wonderful book absolutely essential for any student of Stoicism.</p>
              

              <h2>5. Letters from a Stoic, by Seneca</h2>
              <BookLink title="Letters from a Stoic" author="Seneca" link="http://www.amazon.com/gp/product/0140442103/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140442103&linkId=53524be7bd4e91403113c3e5494786ac" img={data.four.childImageSharp.gatsbyImageData} />
              <p>While the Roman statesman and dramatist Seneca advocated calmness and moderation through his Stoic philosophy, his life (from 4 BCE to 65 CE) was punctuated by major upheaval.</p>
              <p>⁣In 41 CE, following a political dispute, Seneca was exiled to the island of Corsica by the emperor Claudius, but was allowed to return in 49 CE to become a tutor to Nero. When Nero became emperor, Seneca became his advisor.⁣ Seneca’s influence over Nero declined with time, and in 65 CE Seneca was forced to take his own life for alleged complicity to assassinate Nero — an accusation of which he was likely to have been innocent.</p> 
              <p>These events may seem remote from the 21st century, but there is much to learn from the wit, intelligence, and courage with which Seneca faced them.</p>
              <p>Supremely accessible, reading <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140442103/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140442103&linkId=53524be7bd4e91403113c3e5494786ac">Letters from a Stoic</a> — a collection of letters Seneca wrote throughout his lifetime — is like having exclusive access to a deep, beautiful well of profound, practical wisdom addressed directly to you. If you’re interested in Stoicism, your bookshelf will not be complete without Seneca.</p>
              

              <h2>6. Meditations, by Marcus Aurelius</h2>
              <BookLink title="Meditations" author="Marcus Aurelius" link="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
              <p>The last of the big three Stoic names discussed in this list of the best books on Stoicism, and arguably the most well known, Marcus Aurelius is a titan of the Stoic tradition.</p>
              <p>As we outline in our <Link to="/reading-lists/marcus-aurelius-best-books/">Marcus Aurelius reading list</Link>, the Roman emperor reigned from 161 to 180 CE during a time of many significant military conflicts, as well as the Antonine Plague, a pandemic that devastated the population of the Roman Empire, causing the deaths of five million people.</p>
              <p>Despite these difficult events — or perhaps because of them — the philosophy Marcus advocated is one of calmness and serenity. His <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a>, a collection of his personal reflections written without any intention of publication, are a significant source of the modern understanding of ancient Stoic philosophy, and have been praised by countless writers, philosophers, monarchs and politicians in the centuries since the great man’s death.</p>
              <p>Containing profound lessons on how to deal with hardship and live a good life, Marcus’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> is simply an essential read for anyone interested in Stoicism.</p>
              <p>This particular edition is a recent translation by the ancient Greek scholar Robin Waterfield, and with its helpful annotations is recognized as perhaps the best version of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Meditations-Annotated-Marcus-Aurelius/dp/1541673859?&linkCode=ll1&tag=philosophybre-20&linkId=d83ef5b58e209f9e046ef87bc2dbee2e&language=en_US&ref_=as_li_ss_tl">Meditations</a> available today.</p>
              
              
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
  title: file(relativePath: {eq: "stoicism.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "stoicism-massimo.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "stoicism-cambridge.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "stoicism-epictetus.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "stoicism-seneca.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "marcus-med.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList