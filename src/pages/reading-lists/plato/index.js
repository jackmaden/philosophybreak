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
    <Seo title="Plato Reading List – The Best 6 Books to Read" description="A curated reading list of the most essential books of and about the ancient Greek philosopher, Plato." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Plato" number="6" img={data.title.childImageSharp.gatsbyImageData} imgposition="image-top" alt="Plato" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">P</span>lato was an ancient Greek philosopher widely considered to be one of the most important and pivotal figures in the <Link to="/reading-lists/history-of-western-philosophy/">history of western philosophy</Link>, along with his teacher, <Link to="/reading-lists/socrates/">Socrates</Link>, and his most famous student, <Link to="/reading-lists/aristotle/">Aristotle</Link>. Commenting on Plato’s vast influence, the 20th-century philosopher Alfred North Whitehead once noted:</p> 
            
            <blockquote>
                <p>The safest general characterization of the European philosophical tradition is that it consists merely as a series of footnotes to Plato.</p>
            </blockquote>
            
            <p>Indeed, in his works (written between 399 BC and 347 BC), Plato sets out most of the major themes Western philosophy has since focused on, including <Link to="/reading-lists/epistemology/">epistemology</Link>, <Link to="/reading-lists/metaphysics/">metaphysics</Link>, <Link to="/reading-lists/ethics-and-morality/">ethics</Link>, and <Link to="/reading-lists/political-philosophy/">politics</Link>.</p>

            <p>Written almost entirely in the form of dialogues, Plato’s works typically present his teacher, Socrates, discussing various issues with interlocutors from ancient Athenian society. Socrates wields <Link to="/articles/socratic-method-what-is-it-how-can-you-use-it/">the Socratic method</Link> to unpick topics ranging from what ‘justice’ means to how we can know anything about the world around us (<Link to="/articles/socrates-and-the-socratic-paradox-i-know-that-i-know-nothing/">Socrates’s conclusion: all we can know with certainty is that we know nothing)</Link>.</p>

            <p>Given Socrates himself never wrote anything down, scholars have worked hard to distinguish how much of Plato’s work is the neutral recording of Socrates’s views, and how much of it is Plato simply using Socrates as a mouthpiece for his own ideas. Considering Plato continued featuring Socrates as the protagonist of his dialogues even after Socrates’s death, the difficulty scholars have in untangling the two is high — especially in some of Plato’s earlier works.</p>

            <p>Regardless of the true ‘owner’ of the ideas presented in the dialogues, they are unfailingly brilliant, thought-provoking, entertaining, and stimulating — and we are profoundly lucky to be able to access them almost 2,500 years on.</p>

            <p>This reading list outlines the best books of and about Plato. After reading it and being transported to ancient Athens, you’ll have a full understanding of exactly why Plato’s work sustains such an influence on Western thought to this day. Let’s jump in!</p>

            <h2>1. Plato: A Very Short Introduction, by Julia Annas</h2>
            <p>Published in 2003, Julia Annas’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/019280216X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019280216X&linkId=b93d20476759cd62a49daa83a76504a0">Plato: A Very Short Introduction</a> is a fantastic place to start for anyone with a budding interest in Plato or ancient Greek philosophy generally. Annas draws the reader into the world of ancient Athens as presented through Plato’s dialogues, discussing key themes like virtue, the nature of the universe, as well as a dissection of Plato’s attitudes to women, sex, and love. Annas also provides helpful tips for how to approach Plato’s dialogues as a reader. Coming in at an accessible 144 pages, this is a very nice entry point to Plato.</p>
            <BookLink title="Plato: A Very Short Introduction" author="Julia Annas" link="http://www.amazon.com/gp/product/019280216X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019280216X&linkId=b93d20476759cd62a49daa83a76504a0" img={data.one.childImageSharp.gatsbyImageData} />

            <h2>2. The Cambridge Companion to Plato, by Richard Kraut</h2>
            <p>If you’re seeking to dive a little deeper with your Plato scholarship, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521436109/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521436109&linkId=7a5b9c26447c5bd6faa8bbe6fe768b52">The Cambridge Companion to Plato</a>, edited by Richard Kraut. Kraut draws together fourteen essays from various Plato scholars discussing Plato’s views on knowledge, reality, mathematics, politics, ethics, love, the arts, and religion. With its 576 pages packed full of insight, this collection of essays is a brilliant accompaniment for those seeking a deeper understanding of Plato’s thought.</p>
            <BookLink title="The Cambridge Companion to Plato" author="Richard Kraut" link="http://www.amazon.com/gp/product/0521436109/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521436109&linkId=7a5b9c26447c5bd6faa8bbe6fe768b52" img={data.two.childImageSharp.gatsbyImageData} />

            <h2>3. The Last Days of Socrates, by Plato</h2>
            <p>Turning from introductions to primary texts, where better to start than with a tome still routinely adored and studied by undergraduate philosophy students to this day? Plato’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec">The Last Days of Socrates</a> includes four superb dialogues — Euthyphro, Apology, Crito, and Phaedo — that cover the trial and death of Socrates in 399 BC. Serving as an ideal introduction to Plato’s style and the dialogue form generally, the works in this collection are among Plato’s earliest and record Socrates debating the nature of piety, justice, death, and the immortality of the soul in brilliant, highly-charged prose. Hugely entertaining and wise — a collection to defy anyone who thinks philosophy is boring or stuffy — <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec">The Last Days of Socrates</a> belongs on the bookshelf of anyone interested in Plato, Socrates, or the happenings of ancient Athens.</p>
            <BookLink title="The Last Days of Socrates" author="Plato" link="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec" img={data.three.childImageSharp.gatsbyImageData} />

            <h2>4. The Symposium, by Plato</h2>
            <p>A lively drunken banquet with colorful characters debating the nature of love, desire, and the meaning of life: <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449272/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449272&linkId=9dba0bcf05f281afab7ee7487639054b">The Symposium</a> finds Plato in fine form, producing a timeless dialogue of wit, wisdom, and occasional controversy. Plato brilliantly weaves together different opinions and perspectives in praise of Eros, the god of love and desire, and discusses (through Socrates) the idea that true love goes beyond its earthly origins to attain a spiritual transcendence. A beautiful read, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449272/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449272&linkId=9dba0bcf05f281afab7ee7487639054b">The Symposium</a> is essential for anyone interested in Plato.</p>
            <BookLink title="The Symposium" author="Plato" link="http://www.amazon.com/gp/product/0140449272/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449272&linkId=9dba0bcf05f281afab7ee7487639054b" img={data.four.childImageSharp.gatsbyImageData} />

            <h2>5. Republic, by Plato</h2>
            <p>Perhaps the most famous of Plato’s dialogues, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140455116/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140455116&linkId=30c7d6aa18e395f1a79d531ac6b2519d">Republic</a> sets out to answer the question ‘what is justice?’ — and in doing so Plato not only provides wonderful commentary (through Socrates) around the meaning of justice itself, but also shares his vision for how an ideal society could achieve it. And guess what? Plato’s ideal society is governed not through popularly democratic means but by authoritarian philosopher kings. Enlightening and controversial to this day, Plato’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140455116/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140455116&linkId=30c7d6aa18e395f1a79d531ac6b2519d">Republic</a> is an essential text for anyone interested in how Plato laid the foundations for Western thinking on subjects like what goodness is, what reality is, what knowledge is, and what a good society looks like.</p>
            <BookLink title="Republic" author="Plato" link="http://www.amazon.com/gp/product/0140455116/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140455116&linkId=30c7d6aa18e395f1a79d531ac6b2519d" img={data.five.childImageSharp.gatsbyImageData} />

            <h2>6. Plato: Complete Works, by Plato</h2>
            <p>If you’re looking for a one-stop shop for all things Plato, it doesn’t get much better than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0872203492/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872203492&linkId=841c670735c6a96e2da8afed8a778a9d">Plato: Complete Works</a>, edited and introduced by Cooper and Hutchinson. The entire surviving corpus of works attributed to Plato is presented here in modern translations with useful contextual information on composition and chronology. This is unarguably the definitive edition of Plato’s writings in English, in which his profoundly thought provoking and entertaining dialogues sing. At 1,800 pages, it’s a beast of an anthology — but you won’t need another!</p>
            <BookLink title="Plato: Complete Works" author="Plato" link="http://www.amazon.com/gp/product/0872203492/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872203492&linkId=841c670735c6a96e2da8afed8a778a9d" img={data.six.childImageSharp.gatsbyImageData} />
            
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
  title: file(relativePath: {eq: "plato.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "plato-intro.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "plato-cambridge.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "plato-lastdays.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "plato-sympo.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "plato-republic.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "plato-complete.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList