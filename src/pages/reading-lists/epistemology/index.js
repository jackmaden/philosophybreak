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
    <Seo title="Epistemology Reading List – The Best 9 Books to Read" description="A curated reading list of the most essential books of and about epistemology, including the writings of Plato, John Locke, and David Hume." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Epistemology" number="9" img={data.title.childImageSharp.gatsbyImageData} alt="Epistemology" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">W</span>hat is knowledge? What does it mean to ‘know’ something? What makes knowledge possible? How do we come to understand things? Are we born with innate knowledge, or is knowledge only acquired through sensory experience? Are our experiences of the world trustworthy? Do the findings of modern science have secure, logically-sound foundations? Moreover, is the potential of human knowledge unlimited? Or is it curtailed by our sensory apparatus and brainpower?</p> 
            <p>All these questions and more form the basis of the branch of philosophy known as epistemology, the study of knowledge. While <Link to="/reading-lists/metaphysics/">metaphysics investigates the fundamental nature of reality</Link> and ponders what exists, epistemology asks how we can even <i>know</i> what exists. Do our experiences truly grant us access to ‘reality’? Can our judgements of the world be justified?</p>
            <p>From <Link to="/articles/socrates-and-the-socratic-paradox-i-know-that-i-know-nothing/">Socrates declaring</Link> all he knows is that he knows nothing, <Link to="/articles/i-think-therefore-i-am-descartes-cogito-ergo-sum-explained/">Descartes worrying</Link> if the world around us is real, <Link to="/articles/john-lockes-empiricism-why-we-are-all-tabula-rasas-blank-slates/">John Locke insisting</Link> there is no such things as innate knowledge, through to the more technical arguments of the modern day around whether evidence can rationally constrain or inform our beliefs: philosophers throughout the ages have endlessly debated questions around our capacity for and access to knowledge.</p>
            <p>The stakes? Only the status of everything we know!</p>
            
            <div className="course-promo text-center">
              <h4>Is the World Around Us ‘Real’?</h4>
              <p className="small-grey-font">Get philosophy's best answers delivered direct to your inbox with our celebrated introduction to philosophy course.</p>
              <Link className="button secondary" to="/lifes-big-questions/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Explore Course Now</Link>
            </div>

            <p>This reading list features a mix of primary and secondary texts to give you a wide ranging overview of epistemology. From introductions and contemporary anthologies to epistemological classics from the greats themselves: consuming this list will provide you with everything you could possibly want to know about knowing. </p>

            <h2>1. Knowledge: A Very Short Introduction, by Jennifer Nagel</h2>
            <p>Published in 2014, Canadian philosopher Jennifer Nagel's <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/019966126X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019966126X&linkId=9f525f6ab5812fbdc45abeb687713da6">Knowledge: A Very Short Introduction</a> is a brilliant starting place for anyone curious about epistemology. In highly readable, thought-provoking style, Nagel explains the formation of major historical theories of knowledge, and frames them through a contemporary lens. Coming in at an accessible 152 pages, this is a very nice entry point to the major discussions within epistemology.</p>
            <BookLink title="Knowledge: A Very Short Introduction" author="Jennifer Nagel" link="http://www.amazon.com/gp/product/019966126X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019966126X&linkId=9f525f6ab5812fbdc45abeb687713da6" img={data.one.childImageSharp.gatsbyImageData} />

            <h2>2. Epistemology: A Contemporary Introduction to the Theory of Knowledge, by Robert Audi</h2>
            <p>Robert Audi is the John A. O'Brien Professor of Philosophy at the University of Notre Dame, and in his comprehensive 2010 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/041587923X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=041587923X&linkId=f121d2bb28682edbcdb8ffdcdb5d8489">Epistemology: A Contemporary Introduction to the Theory of Knowledge</a> he offers expanded discussion and clarity around the key themes of epistemology. Judged to be essential reading for serious students of knowledge, at 432 pages this is a more in-depth introduction to epistemology that authoritatively presents all sides of the debates.</p>
            <BookLink title="Epistemology: A Contemporary Introduction to the Theory of Knowledge" author="Robert Audi" link="http://www.amazon.com/gp/product/041587923X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=041587923X&linkId=f121d2bb28682edbcdb8ffdcdb5d8489" img={data.two.childImageSharp.gatsbyImageData} />

            <h2>3. Epistemology: An Anthology, by Ernest Sosa</h2>
            <p>If you’re after a one-stop shop for all things epistemology, look no further than American philosopher Ernest Sosa's monumental <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1405169664/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405169664&linkId=331593ca4b210ec7304bbba9922b4f25">Epistemology: An Anthology</a>, published in 2008. Sosa teams up with fellow philosophers Jaegwon Kim, Jeremy Fantl, and Matthew McGrath to organize the most important epistemological writings of past and present by subject. Approaching papers in such context results in a thoroughly rewarding reading experience, and you'll come away with a holistic understanding of how debates around skepticism, the nature of knowledge, and epistemic justification have evolved over the years. At 736 pages, this anthology’s a beast — but you won’t need another.</p>
            <BookLink title="Epistemology: An Anthology" author="Ernest Sosa" link="http://www.amazon.com/gp/product/1405169664/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405169664&linkId=331593ca4b210ec7304bbba9922b4f25" img={data.three.childImageSharp.gatsbyImageData} />

            <h2>4. Theaetetus, by Plato</h2>
            <p>Turning from introductions and anthologies to primary epistemological texts, where better to start than with a discussion of knowledge that, though over two thousand years old, is one of the subject's finest works and still provokes debate today? Among Ancient Greek philosopher Plato's best dialogues, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0915144816/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0915144816&linkId=8ded159e2599f0f4ba4b929822a87e0a">Theaetetus</a> is a conversation between Socrates and a student focused on the question: what is knowledge? The discussion is entertaining, illuminating and wide-ranging. This particular edition features an excellent commentary from late scholar Myles Burnyeat, which lucidly contextualizes and enriches Plato's thought. For anyone interested in knowledge, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0915144816/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0915144816&linkId=8ded159e2599f0f4ba4b929822a87e0a">Theaetetus</a> is an essential addition to the bookshelf.</p>
            <BookLink title="Theaetetus" author="Plato" link="http://www.amazon.com/gp/product/0915144816/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0915144816&linkId=8ded159e2599f0f4ba4b929822a87e0a" img={data.four.childImageSharp.gatsbyImageData} />

            <h2>5. Meditations on First Philosophy, by René Descartes</h2>
            <p>René Descartes’s 1641 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1107665736/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107665736&linkId=60e77f9fd4ff3c655b9bed5f1eac5124">Meditations on First Philosophy</a> is perceived to mark the beginning of modern philosophy in the Western tradition, and is still carefully studied in undergraduate philosophy classes as a foundational text to this day. No wonder: in highly accessible, confessional style, Descartes manages to articulate some of the most troubling philosophical problems we face — all in under 100 pages. An epistemological masterwork, Descartes's <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1107665736/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107665736&linkId=60e77f9fd4ff3c655b9bed5f1eac5124">Meditations on First Philosophy</a> throws everything we know into doubt with enthralling literary passages. Its historical significance — as well as its entertaining and profound discussion of skepticism — makes it essential to this list.</p>
            <BookLink title="Meditations on First Philosophy" author="René Descartes" link="http://www.amazon.com/gp/product/1107665736/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107665736&linkId=60e77f9fd4ff3c655b9bed5f1eac5124" img={data.five.childImageSharp.gatsbyImageData} />

            <h2>6. An Essay Concerning Human Understanding, by John Locke</h2>
            <p>John Locke’s 1689 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/087220216X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=087220216X&linkId=ebfa57e638093b07e7676016415fbb51">An Essay Concerning Human Understanding</a> is one of the most important philosophical works of all time. It forever immortalized Locke as <i>the</i> empiricist of philosophy, as he argues that human beings are born as blank slates, and that it is experience and experience only that furnishes the mind with ideas. This was in stark contrast to his rationalist predecessors and contemporaries, who believed it to be self-evident that we’re all born with innate ideas and knowledge. With this work, Locke formally started an argument that philosophers are still having today. Its originality and profundity make <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/087220216X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=087220216X&linkId=ebfa57e638093b07e7676016415fbb51">An Essay Concerning Human Understanding</a> a must read for anyone interested in where our ideas come from.</p>
            <BookLink title="An Essay Concerning Human Understanding" author="John Locke" link="http://www.amazon.com/gp/product/087220216X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=087220216X&linkId=ebfa57e638093b07e7676016415fbb51" img={data.six.childImageSharp.gatsbyImageData} />

            <h2>7. An Enquiry Concerning Human Understanding, by David Hume</h2>
            <p>Given the near-identical title, Scottish philosopher David Hume’s 1748 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199549907/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199549907&linkId=eb8de3c3263f36cd332e4d18b0cd6665">An Enquiry Concerning Human Understanding</a> might initially be thought of as some sort of tribute act to Locke’s essay listed above. Hume does indeed follow Locke’s general line of empirical thinking, but arguably goes further in declaring that any investigation into what we can know not grounded by evidence-based logic should be “committed to the flames.” If Locke is <i>the</i> empiricist of philosophy, then Hume is <i>the</i> skeptic: he establishes a number of now infamous problems with our concepts of causation, matter, and the self — believing them all to be fictions. A champion of scientifically-minded truth seekers everywhere, Hume pulls no punches in his skepticism of thinking apparently untethered from the world of experience. <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199549907/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199549907&linkId=eb8de3c3263f36cd332e4d18b0cd6665">An Enquiry Concerning Human Understanding</a> is not only a core text of epistemology (and indeed of <Link to="/reading-lists/metaphysics">metaphysics</Link>), but a fantastic introduction to philosophy as a whole, and rewards repeated readings.</p>
            <BookLink title="An Enquiry Concerning Human Understanding" author="David Hume" link="http://www.amazon.com/gp/product/0199549907/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199549907&linkId=eb8de3c3263f36cd332e4d18b0cd6665" img={data.seven.childImageSharp.gatsbyImageData} />

            <h2>8. Critique of Pure Reason, by Immanuel Kant</h2>
            <p>German philosopher Immanuel Kant, roused from a self-described dogmatic slumber by the provocative writings of David Hume, sets out to rescue our knowledge from skepticism in his 1781 masterwork, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=db7cec8e3ab40cc3069e1d685c824d11">Critique of Pure Reason</a>. This landmark book seeks to unite the empiricism of Locke and Hume with the rationalism they railed against, arguing that reason precedes and makes possible our experience of the world. A difficult but staggeringly influential and profound work, Kant’s <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=db7cec8e3ab40cc3069e1d685c824d11">Critique of Pure Reason</a> is essential reading for any serious student of epistemology.</p>
            <BookLink title="Critique of Pure Reason" author="Immanuel Kant" link="http://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=db7cec8e3ab40cc3069e1d685c824d11" img={data.eight.childImageSharp.gatsbyImageData} />

            <h2>9. Ultimate Questions, by Bryan Magee</h2>
            <p>Fast forward to 2017, and British philosopher and broadcaster Bryan Magee reflects on his long career of thinking about and popularizing the most profound questions of philosophy with his short but stunning <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0691178127/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0691178127&linkId=a50a358e7e5bf1c829d8ec1fe1958040">Ultimate Questions</a>. Nearing the end of his life (he passed away in 2019), Magee writes with forceful mastery about the human predicament and the limits to what we can know. Referencing the epistemological thoughts of other philosophers featured on this list, Magee’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0691178127/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0691178127&linkId=a50a358e7e5bf1c829d8ec1fe1958040">Ultimate Questions</a> is a moving meditation on the value of why we question things at all. It’s 144 pages that anyone, not just those interested in epistemology, would benefit from reading.</p>
            <BookLink title="Ultimate Questions" author="Bryan Magee" link="http://www.amazon.com/gp/product/0691178127/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0691178127&linkId=a50a358e7e5bf1c829d8ec1fe1958040" img={data.nine.childImageSharp.gatsbyImageData} />


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
  title: file(relativePath: {eq: "epistemology.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "epistemology-nagel.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "epistemology-audi.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "epistemology-sosa.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "epistemology-plato.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "metaphysics-descartes.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "epistemology-locke.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "metaphysics-hume.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  eight: file(relativePath: {eq: "epistemology-kant.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  nine: file(relativePath: {eq: "epistemology-magee.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList