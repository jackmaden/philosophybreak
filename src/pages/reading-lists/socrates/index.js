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
    <Seo title="Socrates Reading List – The Best 5 Books to Read" description="A curated reading list of the most essential books on the ancient Greek philosopher, Socrates." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Socrates" number="5" img={data.title.childImageSharp.gatsbyImageData} imgposition="image-top" alt="Socrates" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">S</span>ocrates is philosophy’s martyr. Sentenced to death in 399 BCE Athens for ‘corrupting the minds of the youth,’ Socrates never wrote anything down. We know of his era-defining thinking only through the writings of his contemporaries, particularly his student <Link to="/reading-lists/plato/">Plato</Link>.</p>

            <p>The influence of Socrates on the <Link to="/reading-lists/history-of-western-philosophy/">history of Western philosophy</Link> is difficult to overstate. By influencing Plato, who in turn set up the Academy to influence many philosophers including <Link to="/reading-lists/aristotle/">Aristotle</Link>, Socrates laid the foundations for the entirety of the west’s intellectual canon.</p> 

            <p><Link to="/reading-lists/plato/">Plato’s Socratic dialogues</Link> — some of the most wonderful works in the history of philosophy — feature Socrates in lively conversation with influential Athenians on a wide range of subjects, from <Link to="/reading-lists/epistemology/">epistemology</Link>, <Link to="/reading-lists/metaphysics/">metaphysics</Link>, and <Link to="/reading-lists/ethics/">ethics</Link> to art, justice, and <Link to="/reading-lists/political-philosophy/">politics</Link>, in an attempt to find certain knowledge.</p> 

            <div className="course-promo text-center">
                <h4>Philosophy in Your Twitter Feed</h4>
                <p className="small-grey-font">Follow Philosophy Break on Twitter to get distilled wisdom from the great philosophers directly in your Twitter feed.</p>
                <a target="_blank" rel="noopener noreferrer" className="button secondary" href="https://twitter.com/philosophybreak"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>Follow Philosophy Break</a>
            </div>

            <p>In Plato’s dialogues, Socrates is presented as unfailingly ruthless in his hunt for certainty. He uses what is now known as the <Link to="/articles/socratic-method-what-is-it-how-can-you-use-it/">Socratic method</Link> — a form of argumentative dialogue that uses incisive questioning to stimulate critical thinking and draw out presuppositions — to show up his interlocutors as being entirely lacking in whatever knowledge they may have claimed to hold at the beginning of the discussions. He infamously declares (in what’s now referred to as the <Link to="/articles/socrates-and-the-socratic-paradox-i-know-that-i-know-nothing/">Socratic paradox</Link>) that the only certain knowledge is that we know nothing.</p>

            <p>Socrates’s activities, though perhaps noble in their pursuit of truth, made a lot of powerful people in Athens look very foolish. A hero to some, a nuisance to others: Socrates became a popular, controversial figure — occasionally ridiculed in the plays of the comic dramatists of the period, and eventually sentenced to death by the Athenian authorities.</p>

            <p>Everything we know about Socrates, presented as he is through legend and the writings of others, must be taken with a pinch of salt. Nonetheless, his legacy as the brilliant martyr of philosophy remains secure, decorated by an epitaph of his own making:</p>

            <blockquote>
                <p>The unexamined life is not worth living.</p>
            </blockquote>

            <p>This reading list consists of the best introductions and discussions of Socrates’s thinking, as well as the best primary sources from ancient times that document his life and philosophy. Let’s dive in!</p> 

            <h2>1. Socrates: Ironist and Moral Philosopher, by Gregory Vlastos</h2>
            <p>Published in 1991, Gregory Vlastos’s celebrated <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Socrates-Ironist-Philosopher-Gregory-Vlastos/dp/0801497876?&linkCode=ll1&tag=philosophybre-20&linkId=ee58841087bdaae30a839a5e113ab04e&language=en_US&ref_=as_li_ss_tl">Socrates: Ironist and Moral Philosopher</a> is a fantastic place to start for anyone with an interest in Socrates and his central place at the turning point of Western philosophy. Considering Socrates never wrote anything down, Vlastos provides a clear, illuminating assessment of ancient source material to paint a vivid picture of Socrates the man, as well as Socrates the great philosopher. With its consistent, considered, nuanced analysis on the Socratic search for how we should live, Vlastos’s book is essential reading for anyone interested in why Socrates is one of the most important figures in philosophy.</p>
            <BookLink title="Socrates: Ironist and Moral Philosopher" author="Gregory Vlastos" link="http://www.amazon.com/Socrates-Ironist-Philosopher-Gregory-Vlastos/dp/0801497876?&linkCode=ll1&tag=philosophybre-20&linkId=ee58841087bdaae30a839a5e113ab04e&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

            <h2>2. The Cambridge Companion to Socrates, by Donald R. Morrison</h2>
            <p>If you’re seeking to dive a little deeper with your Socrates scholarship, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Socrates-Companions-Philosophy/dp/0521541034?&linkCode=ll1&tag=philosophybre-20&linkId=9824d8e9202cb70d9803c6fa0297c51c&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Socrates</a>, edited by Donald R. Morrison in 2010. Morrison draws together a fantastic collection of essays from various scholars discussing Socrates’s views on knowledge, reality, politics, ethics, love, and the arts. With its 436 pages packed full of insight — with chapters ordered in a linked, progressive sequence — this collection of essays is a brilliant accompaniment for those seeking a deeper understanding of Socrates’s thought.</p>
            <BookLink title="The Cambridge Companion to Socrates" author="Donald R. Morrison" link="http://www.amazon.com/Cambridge-Companion-Socrates-Companions-Philosophy/dp/0521541034?&linkCode=ll1&tag=philosophybre-20&linkId=9824d8e9202cb70d9803c6fa0297c51c&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

            <h2>3. The Last Days of Socrates, by Plato</h2>
            <p>Turning from introductions to ancient primary sources, where better to start than with a tome still routinely adored and studied by undergraduate philosophy students to this day? Plato’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec">The Last Days of Socrates</a> includes four superb dialogues — Euthyphro, Apology, Crito, and Phaedo — that cover the trial and death of Socrates in 399 BC. Serving as an ideal introduction to the Socratic dialogues, the works in this collection are among Plato’s earliest and record Socrates debating the nature of piety, justice, death, and the immortality of the soul in brilliant, highly-charged prose. Hugely entertaining and wise — a collection to defy anyone who thinks philosophy is boring or stuffy — <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec">The Last Days of Socrates</a> belongs on the bookshelf of anyone interested in Socrates, Plato or the happenings of ancient Athens.</p>
            <BookLink title="The Last Days of Socrates" author="Plato" link="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec" img={data.three.childImageSharp.gatsbyImageData} />

            <h2>4. The Clouds, by Aristophanes</h2>
            <p>A famous comic play in its own right, the ancient dramatist Aristophanes’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Clouds-Aristophanes/dp/0872205169?&linkCode=ll1&tag=philosophybre-20&linkId=f2402d3779a785d38d3c3f3fc2515c05&language=en_US&ref_=as_li_ss_tl">The Clouds</a> provides a sharp contrast to the rather heroic and wise Socrates we find in Plato’s dialogues. <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Clouds-Aristophanes/dp/0872205169?&linkCode=ll1&tag=philosophybre-20&linkId=f2402d3779a785d38d3c3f3fc2515c05&language=en_US&ref_=as_li_ss_tl">The Clouds</a> lampoons Socrates as a comic figure. In fact, some of the accusations that Socrates faces in Plato’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec">The Last Days of Socrates</a> find their origin here, with the play possibly impacting Socrates’s chances of receiving a fair trial. As well as it being incredible that we have this 2,500-year-old counterpoint to Plato, Aristophanes’s play is an important read philosophically, revealing common rebutalls Socrates faced from his contemporaries. For those looking to broaden their perspective on Socrates, this is an essential read.</p>
            <BookLink title="The Clouds" author="Aristophanes" link="http://www.amazon.com/Clouds-Aristophanes/dp/0872205169?&linkCode=ll1&tag=philosophybre-20&linkId=f2402d3779a785d38d3c3f3fc2515c05&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

            <h2>5. Plato: Complete Works, by Plato</h2>
            <p>If you’re looking for a one-stop shop for all of Plato’s Socratic dialogues, it doesn’t get much better than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0872203492/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872203492&linkId=841c670735c6a96e2da8afed8a778a9d">Plato: Complete Works</a>, edited and introduced by Cooper and Hutchinson. The entire surviving corpus of works attributed to Plato is presented here in modern translations with useful contextual information on composition and chronology, as well as essential discussion on the extent to which the Socrates that features in each text is the historical Socrates himself, or Socrates the Platonic character, whom Plato preserved even after Socrates’s death (as discussed in our <Link to="/reading-lists/plato/">Plato reading list</Link>). This is unarguably the definitive edition of Plato’s writings in English, in which his profoundly thought provoking and entertaining dialogues sing. At 1,800 pages, it’s a beast of an anthology — but you won’t need another!</p>
            <BookLink title="Plato: Complete Works" author="Plato" link="http://www.amazon.com/gp/product/0872203492/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872203492&linkId=841c670735c6a96e2da8afed8a778a9d" img={data.five.childImageSharp.gatsbyImageData} />
            
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
  title: file(relativePath: {eq: "socrates.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "socrates-ironist.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "socrates-cambridge.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "plato-lastdays.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "socrates-clouds.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "plato-complete.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList