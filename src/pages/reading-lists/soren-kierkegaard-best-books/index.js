import React from "react"
import { graphql, Link } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

import Seo from '../../../components/SEO'
import Layout from '../../../components/layout'
import { Navigation } from "../../../components/navigation"
import { ScrollProgressBar } from '../../../components/scrollProgressBar'
import TitleReadingList from '../../../components/titleReadingList'
import BookLink from '../../../components/bookLink'
import PostReadingList from "../../../components/postReadingList"
import CtaReadingList from "../../../components/ctaReadingList"
import BigSubscribe from "../../../components/bigSubscribe"
import Sidebar from "../../../components/sidebar"

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Søren Kierkegaard Reading List – The Best 6 Books to Read" description="A curated reading list of the best books to get started with Søren Kierkegaard." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Søren Kierkegaard" number="6" img={data.title.childImageSharp.gatsbyImageData} imgposition="image-top" alt="Søren Kierkegaard" />
        
        {/*container for sidebar*/}
        <div id="container">
          
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>


            <p><span className="big-letter">S</span>øren Kierkegaard (1813 - 1855) was a Danish philosopher whose rich and varied writings have had a profound influence on philosophy, theology, and literature.</p>

            <p>While he’s often labeled as the first existentialist philosopher — his work recognized as a notable precursor to the existentialism movement of the 20th-century (see our reading list of <Link to="/reading-lists/existentialism/">existentialism’s best books here</Link>) — Kierkegaard should not be limited to this role, for he has a great deal more to offer.</p>
            
            <p>The potent existential concerns for which he is best known, and which were so hungrily adopted by 20th-century continental philosophers, represent an important aspect of Kierkegaard’s work; but he also made crucial contributions to <Link to="/reading-lists/ethics-and-morality/">ethics</Link>, <Link to="/articles/metaphysics-what-is-it-why-is-it-important-today/">metaphysics</Link>, as well as religious writing and theology.</p>
            
            <p>Wittgeinstein described him as the most profound thinker of the 19th century, and his many works are filled with nuance and insight on a wide range of subjects.</p>

            <p>Kierkegaard tends to write under various pseudonyms from a first-person perspective, and deploys irony liberally throughout his writings. The playful literary quality of his work makes it notoriously difficult to establish what <i>his</i> views actually are; scholars still debate how best to interpret him to this day.</p>

            <p>Offering a concise summary of Kierkegaard’s views is thus something of a challenge. But perhaps one thing that could be said is that, arguably more than any philosopher before him, Kierkegaard is guided by the question: <i>what does it mean to exist as a human being?</i></p>

            <p>Kierkegaard explores various answers to these questions from what he dubs the aesthetic, ethical, and spiritual stages or <i>spheres</i> of life. The latter of these — i.e. what it means to live religiously — especially preoccupies him: spiritual questions and crises of faith serve as major themes throughout his work.</p>

            <p>More generally, Kierkegaard articulates the anxiety, self-consciousness, and fraughtness of daily human existence in often exquisite prose — and it’s this laser focus on what it’s like <i>under our own skin</i> that cemented his reputation as a literary genius, and so inspired the existentialists of the 20th century.</p>

            <BigSubscribe />

            <p>Before diving into Kierkegaard’s best books, you might be interested in our articles on different aspects of his philosophy, such as our explainer on <Link to="/articles/kierkegaard-on-finding-the-meaning-of-life/">Kierkegaard on the meaning of life</Link>, our breakdown of his obervation that <Link to="/articles/kierkegaard-life-can-only-be-understood-backwards-but-must-be-lived-forwards/">while we understand life backwards, we must live it forwards</Link>, as well as our brief outline of why <Link to="/articles/kierkegaard-on-why-busy-people-are-ridiculous/">Kierkegaard views busyness as ridiculous</Link> in one of his most famous works, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Either-Fragment-Life-Penguin-Classics/dp/0140445773?&linkCode=ll1&tag=philosophybre-20&linkId=8e35d270d5f39307c41b6ac33b979b35&language=en_US&ref_=as_li_ss_tl">Either/Or</a>.</p>

            <p>We also discuss Kierkegaard in our <Link to="/articles/what-is-existentialism-3-core-principles-of-existentialist-philosophy/">introduction to existentialism as a movement and philosophy</Link> and our explainer of Sartre’s famous slogan, <Link to="/articles/existence-precedes-essence-what-sartre-really-meant/">existence precedes essence</Link>.</p>

            <p>As with fellow 19th-century philosopher Friedrich Nietzsche (see our reading list of <Link to="/reading-lists/friedrich-nietzsche/">Nietzsche’s best books here</Link>), Kierkegaard wrote a startling amount over a very short time period. In presenting his best books, there are thus many works to choose from.</p>

            <p>This reading list filters Kierkegaard’s rich body of work by popularity and accessibility.</p>
            
            <p>While there are some notable omissions — including his <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0691020361?&linkCode=ll1&tag=philosophybre-20&linkId=c6658458bd8bd26ba000af8cea667f48&language=en_US&ref_=as_li_ss_tl">Philosophical Fragments</a> (1844), <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0691020493?&linkCode=ll1&tag=philosophybre-20&linkId=edb434bf9fc81269dee5f38422b045f6&language=en_US&ref_=as_li_ss_tl">Stages on Life’s Way</a> (1845), and his memorably titled <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0691020817?&linkCode=ll1&tag=philosophybre-20&linkId=b88bfb0af7423da2103cd348a60643c4&language=en_US&ref_=as_li_ss_tl">Concluding Unscientific Postscript to Philosophical Fragments</a> (1846) — the books on this list should prove to be an excellent starting point for anyone interested in Kierkegaard, and will perhaps inspire subsequent investigation of the aforementioned works.</p>

            <p>After reading a few of the books featured here, you’ll understand exactly why this great philosopher went on to influence so many thinkers who followed, and why his work remains so beloved and discussed today. Let’s dive in!</p>
              

              <h2>1. Philosopher Of The Heart, by Clare Carlisle</h2>
              <BookLink title="Philosopher Of The Heart" author="Clare Carlisle" link="https://www.amazon.com/Philosopher-Heart-Restless-S%C3%B8ren-Kierkegaard/dp/0141984430?&linkCode=ll1&tag=philosophybre-20&linkId=75bff5702109ff7763a7364baeef5c8e&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

              <p>Given the nuance of Kierkegaard’s thought and the difficulties that reading him can present, contextualizing his work with some secondary literature is highly recommended, and should significantly bolster your understanding (and appreciation) of his philosophy.</p>

              <p>In this regard, there’s nowhere better to start than with Clare Carlisle’s wonderful 2019 biography of Kierkegaard, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Philosopher-Heart-Restless-S%C3%B8ren-Kierkegaard/dp/0141984430?&linkCode=ll1&tag=philosophybre-20&linkId=75bff5702109ff7763a7364baeef5c8e&language=en_US&ref_=as_li_ss_tl">Philosopher Of The Heart</a>, which details not only his life but also serves as a fantastic introduction to his major works and ideas.</p>

              <p>Carlisle approaches Kierkegaard’s life and work in a resolutely Kierkegaardian spirit, conveying the major events, people, and questions that shaped his life in poetic, animated prose.</p>

              <p>By expertly weaving in the facts of Kierkegaard’s life — including his notorious engagement to Regine Olsen, which he abruptly ended — Carlisle empowers her discussion of his ideas to great effect.</p>

              <p>The result is a brilliantly accessible, evocative, and authentic presentation of Kierkegaard’s life and work, with all of the context provided, and none of the nuance diminished.</p>

              <p>If you’re interested in Kierkegaard, but not sure where to start, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Philosopher-Heart-Restless-S%C3%B8ren-Kierkegaard/dp/0141984430?&linkCode=ll1&tag=philosophybre-20&linkId=75bff5702109ff7763a7364baeef5c8e&language=en_US&ref_=as_li_ss_tl">Philosopher Of The Heart</a> should be top of your list.</p>

              <h2>2. The Cambridge Companion to Kierkegaard, by Alastair Hannay</h2>
              <BookLink title="The Cambridge Companion to Kierkegaard" author="Alastair Hannay" link="https://www.amazon.com/Cambridge-Companion-Kierkegaard-Companions-Philosophy/dp/0521477190?&linkCode=ll1&tag=philosophybre-20&linkId=79b7183c7be5e3b9891da71def2b40c9&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

              <p>If you’re seeking to dive a little deeper with your Kierkegaard scholarship, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Cambridge-Companion-Kierkegaard-Companions-Philosophy/dp/0521477190?&linkCode=ll1&tag=philosophybre-20&linkId=79b7183c7be5e3b9891da71def2b40c9&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Kierkegaard</a>, edited by Alastair Hannay and Gordon Daniel Marino, and first published in 1997.</p>

              <p>Consisting of sixteen essays by prominent international scholars discussing various aspects of Kierkegaard’s work — including his writing on the nature of human existence, faith, aesthetics, ethics, anxiety, and despair — <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Cambridge-Companion-Kierkegaard-Companions-Philosophy/dp/0521477190?&linkCode=ll1&tag=philosophybre-20&linkId=79b7183c7be5e3b9891da71def2b40c9&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Kierkegaard</a> makes clear why the Danish philosopher is regarded as such a subtle and provocative thinker, as well as why he holds such enduring influence.</p>

              <p>With its 450 pages packed full of insight, this book is a brilliant accompaniment for those seeking a deeper understanding of Kierkegaard’s thought.</p>


              <h2>3. Either/Or, by Søren Kierkegaard</h2>
              <BookLink title="Either/Or" author="Søren Kierkegaard" link="https://www.amazon.com/Either-Fragment-Life-Penguin-Classics/dp/0140445773?&linkCode=ll1&tag=philosophybre-20&linkId=8e35d270d5f39307c41b6ac33b979b35&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              
              <p>Turning from secondary literature to primary texts, where better to start than with the work responsible for some of Kierkegaard’s most quotable writing?</p>

              <p>In his 1843 epic <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Either-Fragment-Life-Penguin-Classics/dp/0140445773?&linkCode=ll1&tag=philosophybre-20&linkId=8e35d270d5f39307c41b6ac33b979b35&language=en_US&ref_=as_li_ss_tl">Either/Or</a>, Kierkegaard discusses the search for a meaningful existence using the voices of two distinct characters.</p>

              <p>A fascinating work on duality, the book’s first section is written from the perspective of an aesthetic and rather callous young man named simply A; the second from the reasonable, ethical Judge Vilhelm.</p>

              <p>Kierkegaard invites us to explore subjects like boredom, romance, meaning, and culture from these two seemingly irreconcilable perspectives. In doing so, he writes some utterly heart-wrenching, deeply witty, and memorable prose — including his famous <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Seducers-Diary-S%C3%B8ren-Kierkegaard/dp/069115841X?&linkCode=ll1&tag=philosophybre-20&linkId=72932c71ee2dce68af7a4ba31db75341&language=en_US&ref_=as_li_ss_tl">Diary of the Seducer</a>, which has since been published as a standalone work.</p>

              <p>If you’re interested in Kierkegaard, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Either-Fragment-Life-Penguin-Classics/dp/0140445773?&linkCode=ll1&tag=philosophybre-20&linkId=8e35d270d5f39307c41b6ac33b979b35&language=en_US&ref_=as_li_ss_tl">Either/Or</a> belongs on your bookshelf.</p> 


              <h2>4. Fear and Trembling, by Søren Kierkegaard</h2>
              <BookLink title="Fear and Trembling" author="Søren Kierkegaard" link="https://www.amazon.com/Trembling-Penguin-Classics-Soren-Kierkegaard/dp/0140444491?&linkCode=ll1&tag=philosophybre-20&linkId=bfe0b06ef6b82fb7e257c0ef01b0782c&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

              <p>While in <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Either-Fragment-Life-Penguin-Classics/dp/0140445773?&linkCode=ll1&tag=philosophybre-20&linkId=8e35d270d5f39307c41b6ac33b979b35&language=en_US&ref_=as_li_ss_tl">Either/Or</a> Kierkegaard presents aesthetic and ethical perspectives on the world, in <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Trembling-Penguin-Classics-Soren-Kierkegaard/dp/0140444491?&linkCode=ll1&tag=philosophybre-20&linkId=bfe0b06ef6b82fb7e257c0ef01b0782c&language=en_US&ref_=as_li_ss_tl">Fear and Trembling</a> — published later in 1843 — he scopes out what an authentic <i>spiritual</i> response to life might involve.</p>

              <p>Writing under the pseudonym ‘Johannes de silentio’, Kierkegaard critically analyzes the scene in Genesis in which Abraham is asked by God to sacrifice his son Isaac. By obeying God, Kierkegaard (or Johannes) observes, Abraham makes the necessary leap of faith that an authentic religious life requires.</p>

              <p>One of his more accessible works, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Trembling-Penguin-Classics-Soren-Kierkegaard/dp/0140444491?&linkCode=ll1&tag=philosophybre-20&linkId=bfe0b06ef6b82fb7e257c0ef01b0782c&language=en_US&ref_=as_li_ss_tl">Fear and Trembling</a> nevertheless contains some of Kierkegaard’s most profound and challenging insights, and acts as an effective gateway to his later writing. It’s essential reading for anyone interested in Kierkegaard, Christianity, or theology generally.</p>


              <h2>5. The Concept of Anxiety, by Søren Kierkegaard</h2>
              <BookLink title="The Concept of Anxiety" author="Søren Kierkegaard" link="https://www.amazon.com/Concept-Anxiety-Psychologically-Deliberation-Hereditary/dp/1631490044?&linkCode=ll1&tag=philosophybre-20&linkId=84a4c593f9794322bb3f9e82d1abf277&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />

              <p>In his challenging, dense, dazzling 1844 work <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Concept-Anxiety-Psychologically-Deliberation-Hereditary/dp/1631490044?&linkCode=ll1&tag=philosophybre-20&linkId=84a4c593f9794322bb3f9e82d1abf277&language=en_US&ref_=as_li_ss_tl">The Concept of Anxiety</a>, Kierkegaard — writing under the pseudonym Vigilius Haufniensis — examines the role anxiety plays in human life.</p>

              <p>For Kierkegaard (or Vigilius), anxiety is not a psychological phenomenon, but a fundamental part of the structure of being human. It cannot be overcome through “powder and pills”, but only by being faced head on through the spiritual sphere of human life.</p>

              <p>It is in <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Concept-Anxiety-Psychologically-Deliberation-Hereditary/dp/1631490044?&linkCode=ll1&tag=philosophybre-20&linkId=84a4c593f9794322bb3f9e82d1abf277&language=en_US&ref_=as_li_ss_tl">The Concept of Anxiety</a> that Kierkegaard famously describes anxiety as the “dizziness of freedom”. Outlining the idea that our existential freedom leads to anxiety about the limitless possibilities available to us, Kierkegaard writes:</p>

              <blockquote><p>Anxiety may be compared with dizziness. He whose eye happens to look down the yawning abyss becomes dizzy. But what is the reason for this? It is just as much in his own eye as in the abyss, for suppose he had not looked down. Hence, anxiety is the dizziness of freedom, which emerges when the spirit wants to posit the synthesis and freedom looks down into its own possibility, laying hold of finiteness to support itself.</p></blockquote>

              <p>By no means an easy read — and perhaps not the best book on this list to start with — <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Concept-Anxiety-Psychologically-Deliberation-Hereditary/dp/1631490044?&linkCode=ll1&tag=philosophybre-20&linkId=84a4c593f9794322bb3f9e82d1abf277&language=en_US&ref_=as_li_ss_tl">The Concept of Anxiety</a> nonetheless contains some beautiful, haunting writing about the human condition that anyone interested in Kierkegaard, existentialism, or theology would benefit from reading.</p>


              <h2>6. The Sickness Unto Death, by Søren Kierkegaard</h2>
              <BookLink title="The Sickness Unto Death" author="Søren Kierkegaard" link="https://www.amazon.com/Sickness-unto-Death-Psychological-Anti-Climacus/dp/0140445331?&linkCode=ll1&tag=philosophybre-20&linkId=2c1553848dc030d0fa2eb8859426bd33&language=en_US&ref_=as_li_ss_tl" img={data.six.childImageSharp.gatsbyImageData} />

              <p>One of his later and most philosophically mature (and challenging) works, Kierkegaard’s 1849 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Sickness-unto-Death-Psychological-Anti-Climacus/dp/0140445331?&linkCode=ll1&tag=philosophybre-20&linkId=2c1553848dc030d0fa2eb8859426bd33&language=en_US&ref_=as_li_ss_tl">The Sickness Unto Death</a> sets out to do two things: firstly examine despair, and secondly offer a solution to it.</p>

              <p>As with his treatment of anxiety in <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Concept-Anxiety-Psychologically-Deliberation-Hereditary/dp/1631490044?&linkCode=ll1&tag=philosophybre-20&linkId=84a4c593f9794322bb3f9e82d1abf277&language=en_US&ref_=as_li_ss_tl">The Concept of Anxiety</a>, Kierkegaard recognizes despair not as a passing psychological state but as part of the structure of being human, and dissects the different ways despair expresses itself.</p>

              <p>Kierkegaard (or at least his pseudonym, Anti-Climacus) argues that we are created, <i>dependent</i> spiritual beings, and so will forever be incomplete unless we live in God. While he concedes that living in God is exceptionally difficult to do, he edges towards a formula for how we might achieve it.</p>

              <p>One of the key (and founding) works of Christian existentialist thought, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Sickness-unto-Death-Psychological-Anti-Climacus/dp/0140445331?&linkCode=ll1&tag=philosophybre-20&linkId=2c1553848dc030d0fa2eb8859426bd33&language=en_US&ref_=as_li_ss_tl">The Sickness Unto Death</a> — with its direct confrontation with the void of human existence — had a profound impact not just on theistic thinkers but on the atheist existentialists of the 20th-century, including Jean-Paul Sartre and Albert Camus (see our reading list of <Link to="/reading-lists/albert-camus/">Camus’s best books here</Link>).</p>

              <p>If you’re interested in Kierkegaard, existentialism, or theology, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Sickness-unto-Death-Psychological-Anti-Climacus/dp/0140445331?&linkCode=ll1&tag=philosophybre-20&linkId=2c1553848dc030d0fa2eb8859426bd33&language=en_US&ref_=as_li_ss_tl">The Sickness Unto Death</a> belongs on your bookshelf.</p>


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
  title: file(relativePath: {eq: "Kierkegaard.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "kierk-heart.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "kierk-cambridge.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "kierk-either.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "kierk-fear.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "kierk-anxiety.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "kierk-sick.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList