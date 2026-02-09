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
    <Seo title="Metaphysics Reading List – The Best 10 Books to Read" description="A curated reading list of the most essential books of and about metaphysics, including the writings of Aristotle, Spinoza, and Immanuel Kant." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Metaphysics" number="10" img={data.title.childImageSharp.gatsbyImageData} alt="The Open Book, by Juan Gris" />

        {/*container for sidebar*/}
        <div id="container">
          
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">W</span>hat is the fundamental nature of reality? What is time? What is space? Is there a God? <Link to="/articles/is-the-world-around-us-real/">Is the world around us ‘real’?</Link> Do numbers exist? What makes a person a person? What is causation, and can there be such a thing as a ‘first cause’? Do we have <Link to="/reading-lists/free-will/">free will?</Link> What is <Link to="/reading-lists/consciousness/">consciousness?</Link> Why is reality like it is? What does it mean for something to exist? <Link to="/articles/why-does-anything-exist/">Why does <i>anything</i> exist?</Link></p> 

              <p>All these questions and more form the basis of the branch of philosophy known as <i>metaphysics</i>.</p>
              <p>While epistemology is the study of knowledge and asks how we can know anything (see our <Link to="/reading-lists/epistemology/">epistemology reading list</Link>), metaphysics investigates the fundamental nature of reality itself, as well as our experience of it.</p>
              <p>Who or what is the self? What is the world that the self finds itself in? What is the nature of existence at all?</p>    

              <p>Considering such disparate lines of inquiry, it’s not always easy to grasp exactly what metaphysics is all about (and many philosophers in fact disagree on what it is or indeed should be all about).</p>
              <p>So, before diving into the best books of metaphysics, if you’re interested in quickly learning more about metaphysics generally, check out our brief introduction to <Link to="/articles/metaphysics-what-is-it-why-is-it-important-today/">what metaphysics is, how it relates to the sciences, and why it’s important today.</Link></p> 

              <BigSubscribe />

              <p>Otherwise, this reading list puts together the top ten books of and about the philosophical branch of metaphysics. It contains a mix of primary and secondary literature — from introductions and anthologies to the original texts of the grand metaphysics figureheads themselves. Let’s jump in!</p> 

              


              <h2>1. Metaphysics: A Very Short Introduction, by Stephen Mumford</h2>
              <BookLink title="Metaphysics: A Very Short Introduction" author="Stephen Mumford" link="http://www.amazon.com/gp/product/0199657122/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199657122&linkId=1da27249a864b2272832270abdc1d20a" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 2012, British philosopher Stephen Mumford’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199657122/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199657122&linkId=1da27249a864b2272832270abdc1d20a">Metaphysics: A Very Short Introduction</a> is a fantastic place to start for anyone with a budding interest in metaphysics.</p>
              <p>Mumford gets right to the heart of the matter — discussing time, substance, emergentism, and more — providing a clear and simple path through the development of metaphysical thought in the Western tradition.</p>
              <p>Coming in at an accessible 128 pages, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199657122/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199657122&linkId=1da27249a864b2272832270abdc1d20a">Metaphysics: A Very Short Introduction</a> is a very nice entry point to metaphysics.</p>
              

              <h2>2. Metaphysics: An Introduction to Contemporary Debates and Their History, by Anna Marmodoro</h2>
              <BookLink title="Metaphysics: An Introduction to Contemporary Debates and Their History" author="Anna Marmodoro" link="http://www.amazon.com/gp/product/B07PWHJNQ4/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07PWHJNQ4&linkId=a264c1b6bbcacd559b1c3500c5a2fd8e" img={data.two.childImageSharp.gatsbyImageData} />
              <p>Anna Marmodoro holds the Chair of Metaphysics in the Department of Philosophy at Durham University, and in her 2019 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/B07PWHJNQ4/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07PWHJNQ4&linkId=a264c1b6bbcacd559b1c3500c5a2fd8e">Metaphysics: An Introduction to Contemporary Debates and Their History</a> she teams up with philosopher Erasmus Mayr to introduce the central issues in metaphysics.</p>
              <p>Discussing substance, properties, modality and essence, causality, determinism and free will, Marmodoro and Mayr outline the latest theories and arguments in the field, while drawing on extensive references to philosophy’s history.</p>
              <p>At 232 pages, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/B07PWHJNQ4/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07PWHJNQ4&linkId=a264c1b6bbcacd559b1c3500c5a2fd8e">Metaphysics: An Introduction to Contemporary Debates and Their History</a> is a more in-depth introduction to metaphysics that engagingly presents all sides of the debates.</p>
              

              <h2>3. Metaphysics: A Guide and Anthology, by Tim Crane</h2>
              <BookLink title="Metaphysics: A Guide and Anthology" author="Tim Crane" link="http://www.amazon.com/gp/product/0199261970/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199261970&linkId=89a1a445813858d647b14db9cfa19618" img={data.three.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking a one-stop shop for all things metaphysics, look no further than philosopher Tim Crane’s epic <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199261970/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199261970&linkId=89a1a445813858d647b14db9cfa19618">Metaphysics: A Guide and Anthology</a>, published in 2004.</p>
              
              <p>Crane provides an expertly organized collection of fifty-four of the best metaphysical writings from philosophers old and new, structured into ten sections: God, idealism and realism, being, universals and particulars, necessity and contingency, causation, space and time, identity, mind and body, and free will and determinism. </p>
              <p>The best thing? Crane offers a substantial general introduction, as well as detailed introductions to each section to guide readers through them. At just under 800 pages, this anthology’s a beast — but you won’t need another.</p>
              

              <h2>4. The Metaphysics, by Aristotle</h2>
              <BookLink title="The Metaphysics" author="Aristotle" link="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions and anthologies to primary metaphysical texts, where better to start than with the book from which the subject derives its name, as we discuss in our <Link to="/articles/metaphysics-what-is-it-why-is-it-important-today/">metaphysics explainer</Link>?</p>
              <p>Anicent Greek philosopher Aristotle’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994">The Metaphysics</a>, written over two thousand years ago, is considered one of the greatest philosophical works of all time.</p>
              <p>At the heart of the book lie three questions. Firstly, what is existence, and what sorts of things exist in the world? Secondly, how can things continue to exist, and yet undergo the change we see about us in the natural world? And lastly, how can this world be understood?</p>
              <p><Link to="/reading-lists/aristotle/">Aristotle’s</Link> fascinating answers to these questions set in motion two millennia of debate from thinkers all over the globe, making <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994">The Metaphysics</a> an essential addition.</p>
              

              <h2>5. Meditations on First Philosophy, by René Descartes</h2>
              <BookLink title="Meditations on First Philosophy" author="René Descartes" link="http://www.amazon.com/gp/product/1107665736/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107665736&linkId=60e77f9fd4ff3c655b9bed5f1eac5124" img={data.five.childImageSharp.gatsbyImageData} />
              <p>René Descartes’s 1641 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1107665736/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107665736&linkId=60e77f9fd4ff3c655b9bed5f1eac5124">Meditations on First Philosophy</a> is perceived to mark the beginning of modern philosophy in the Western tradition, and is still carefully studied in undergraduate philosophy classes as a foundational text to this day.</p>
              <p>No wonder: in highly accessible, confessional style, Descartes manages to articulate some of the most troubling philosophical problems we face — all in under 100 pages.</p>
              <p>Descartes's <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1107665736/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107665736&linkId=60e77f9fd4ff3c655b9bed5f1eac5124">Meditations on First Philosophy</a> is often judged to be a work of epistemology, and it does indeed feature on our <Link to="/reading-lists/epistemology">epistemology reading list</Link>; but what Descartes set out to do with this work was establish proofs for the existence of God, as well as for the substance duality of body and soul. This is very much a work of metaphysics as much as it is epistemology, and its ease of digestion renders it essential to this list.</p>
              

              <h2>6. Ethics, by Spinoza</h2>
              <BookLink title="Ethics" author="Spinoza" link="http://www.amazon.com/gp/product/0140435719/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140435719&linkId=40b9b0a44d0cbd360115ad7e2861c3bd" img={data.six.childImageSharp.gatsbyImageData} />
              <p>It’s said that anyone who reads Spinoza’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140435719/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140435719&linkId=40b9b0a44d0cbd360115ad7e2861c3bd">Ethics</a> the first time will enjoy it — but when they read it a second, third, and fourth time, they will forever be in love not just with Spinoza but with all things philosophy.</p>
              <p>Published shortly after his death in 1677, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140435719/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140435719&linkId=40b9b0a44d0cbd360115ad7e2861c3bd">Ethics</a> is Spinoza's greatest work — a fully cohesive philosophical system that strives to provide a metaphysical basis for reality, upon which we can comprehend the meaning of an ethical life. It is a wonderful example of genius at work.</p>
              

              <h2>7. An Enquiry Concerning Human Understanding, by David Hume</h2>
              <BookLink title="An Enquiry Concerning Human Understanding" author="David Hume" link="https://www.amazon.com/Enquiry-concerning-Understanding-Oxford-Classics/dp/0199549907?&linkCode=ll1&tag=philosophybre-20&linkId=7fa49b10ee82c066c6a1c3d262123a09&language=en_US&ref_=as_li_ss_tl" img={data.seven.childImageSharp.gatsbyImageData} />
              <p>Following the metaphysical works of wonder so far listed, Scottish philosopher David Hume gives us a much-needed jolt from grand metaphysical systems with his definitive statement on what he saw as the ‘superstition’ of false metaphysics and religion:</p>
                 <blockquote><p>If we take in our hand any volume; of divinity or school metaphysics, for instance; let us ask, does it contain any abstract reasoning concerning quantity or number? No. Does it contain any experimental reasoning concerning matter of fact and existence? No. Commit it then to the flames: for it can contain nothing but sophistry and illusion.</p></blockquote>
              <p>A favorite of empiricists everywhere, Hume’s 1748 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Enquiry-concerning-Understanding-Oxford-Classics/dp/0199549907?&linkCode=ll1&tag=philosophybre-20&linkId=7fa49b10ee82c066c6a1c3d262123a09&language=en_US&ref_=as_li_ss_tl">An Enquiry Concerning Human Understanding</a> pulls no punches in its skepticism of thinking apparently untethered from the ‘real’ world.</p>
              <p>Like Descartes’s Meditations, Hume’s Enquiry straddles the line between both <Link to="/reading-lists/metaphysics">epistemology</Link> and metaphysics, and is included here as it serves not only as a core text, but as a fantastic introduction to philosophy as a whole.</p>
              

              <h2>8. Prolegomena to Any Future Metaphysics, by Immanuel Kant</h2>
              <BookLink title="Prolegomena to Any Future Metaphysics" author="Immanuel Kant" link="http://www.amazon.com/gp/product/0872205932/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872205932&linkId=c2281161b0ac2ae92f2fd300c7538ca0" img={data.eight.childImageSharp.gatsbyImageData} />
              <p><Link to="/reading-lists/immanuel-kant/">Immanuel Kant</Link> wrote his 1783 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0872205932/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872205932&linkId=c2281161b0ac2ae92f2fd300c7538ca0">Prolegomena to Any Future Metaphysics</a> after being disappointed with the reception of his masterwork, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=51fb5062b0477e5f7841f91e58584003">Critique of Pure Reason</a>, which he blamed (not incorrectly) on the fact that no one really understood it.</p>
              <p>In the Prolegomena, therefore, Kant attempts to distill the Critique’s core themes into a more readable form (more readable but still very much Kant, of course).</p>
              <p>Kant seeks to fuse the rationalist systems of thinkers like Spinoza with the empiricism of skeptics like Hume, and in doing so builds one of the most intuitive, intelligent, and influential metaphysical systems in history.</p>
              <p>Though he himself derided many writings on the subject, no bookshelf on metaphysics is complete without Kant.</p>
              

              <h2>9. Being and Time, by Martin Heidegger</h2>
              <BookLink title="Being and Time" author="Martin Heidegger" link="http://www.amazon.com/gp/product/0061575593/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0061575593&linkId=9b6de9fcfa7f580421a8de925fa16d91" img={data.nine.childImageSharp.gatsbyImageData} />
              <p>Hold your horses, says Martin Heidegger: we’ve all massively missed something. Aristotle led us up the garden path. He created all these metaphysical problems that everyone argues about, when really the <i>actual</i> problem has been <i>ontology</i>, the question of being — and everyone’s skimmed over it!</p>
              <p>With his landmark 1927 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0061575593/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0061575593&linkId=9b6de9fcfa7f580421a8de925fa16d91">Being and Time</a>, Heidegger seeks to redress the balance by focusing like a laser, for hundreds of pages, on what it means to Be. What is the nature of our existence, as <i>we</i> experience it? Only by paying proper attention to this question, argues Heidegger, can we hope to get anywhere.</p>
              <p>Not for the faint hearted, this startling book has had a staggering influence on philosophy, art, literature, and existentialism since its publication — and deeply rewards those who tackle it.</p>
              

              <h2>10. Sameness and Substance Renewed, by David Wiggins</h2>
              <BookLink title="Sameness and Substance Renewed" author="David Wiggins" link="http://www.amazon.com/gp/product/0521456193/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521456193&linkId=76ea2339d23842cb3607254189cb816c" img={data.ten.childImageSharp.gatsbyImageData} />
              <p>A classic of contemporary metaphysics, David Wiggins’s 2001 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521456193/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521456193&linkId=76ea2339d23842cb3607254189cb816c">Sameness and Substance Renewed</a> brings us kicking and screaming into the 21st century by... discussing substance, properties, modality, determinism, and the usual suspects in the line up of metaphysical conundrums.</p>
              <p>In all seriousness, this important book proves metaphysics has as much relevance today as it ever has, and will appeal to a wide range of readers in metaphysics, philosophical logic, and analytic philosophy.</p>
              
              
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
  title: file(relativePath: {eq: "rl4.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "metaphysics-shortintro.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "metaphysics-history.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "metaphysics-anthology.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "metaphysics-aristotle.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "metaphysics-descartes.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "metaphysics-spinoza.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "metaphysics-hume.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  eight: file(relativePath: {eq: "metaphysics-kant.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  nine: file(relativePath: {eq: "metaphysics-heidegger.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  ten: file(relativePath: {eq: "metaphysics-wiggins.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList