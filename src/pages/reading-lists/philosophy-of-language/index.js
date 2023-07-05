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
    <Seo title="Philosophy of Language Reading List – The Best 7 Books to Read" description="A curated reading list of the most essential books of and about the philosophy of language, including the writings of Wittgenstein, Kripke, and Chomsky." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Philosophy of Language" number="7" img={data.title.childImageSharp.gatsbyImageData} alt="Philosophy of Language" />

        {/*container for sidebar*/}
        <div id="container">
          
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">W</span>hat is language? What do the words we use refer to? Why are only <i>some</i> of the noises we make (or symbols we squiggle) meaningful, whereas others are meaningless? Can language be reduced to logic, and is the language of logic coherent? What makes words refer to different things in different situations? <Link to="/articles/language-shapes-reality/">Do people who speak different native languages interpret the world differently?</Link> Ultimately — what’s the foundational relationship between language, its speakers, and the world?</p>

              <p>These difficult, brain-bending questions form the basis of the philosophy of language, a core branch of contemporary philosophical thinking. While philosophers throughout history have always pondered the mysteries of language and meaning, it was in the 20th century that linguistic analysis really became a rigorous and mainstream consideration for philosophers, spawning the so-called ‘analytic’ tradition of philosophy.</p>

              <p>The guiding rationale for such ‘analytic’ philosophers is that many philosophical problems — such as the core issues within <Link to="/reading-lists/metaphysics/">metaphysics</Link> or <Link to="/reading-lists/epistemology/">epistemology</Link> — are best approached by reducing the problem down to logic, or by looking seriously at the language being used to describe the problem. The thinking is that as soon as the logic or language has been duly untangled (usually though painstaking step-by-step analysis), many ‘problems’ will dissolve away — or at least have their true natures revealed.</p>
              
              <p>As the great 20th-century philosopher Ludwig Wittgenstein puts it:</p>
              
              <blockquote>
                  <p>Philosophy is a battle against the bewitchment of our intelligence by means of language.</p>
              </blockquote>
              
              <p>This reading list is designed to give you a well-rounded introduction to the major controversies, theories, and debates within the philosophy of language. After reading it, you’ll have a much clearer idea as to why the symbols you’re scanning from left to right on this screen mean anything at all.</p>

              <h2>1. Philosophy of Language: The Classics Explained, by Colin McGinn</h2>
              <BookLink title="Philosophy of Language: The Classics Explained" author="Colin McGinn" link="http://www.amazon.com/gp/product/0262529823/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0262529823&linkId=728fc68139b9288233ed254554b75035" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Most major works in the philosophy of language are, ironically, notoriously difficult to understand. In his excellent 2015 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0262529823/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0262529823&linkId=728fc68139b9288233ed254554b75035">Philosophy of Language: The Classics Explained</a>, British philosopher Colin McGinn attempts to rectify this by providing clear expositions of and commentaries on the subject’s major thinkers, including Frege, Russell, and Kaplan. At 240 pages, this is a very accessible entry point into a challenging subject, and sets anyone interested in the philosophy of language on the right path to rich and enlightening discovery.</p>
              

              <h2>2. Philosophy of Language, by Scott Soames</h2>
              <BookLink title="Philosophy of Language" author="Scott Soames" link="http://www.amazon.com/gp/product/0691155976/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0691155976&linkId=63f70f7ac5f5eac89926da9c71cb770f" img={data.two.childImageSharp.gatsbyImageData} />
              <p>American philosopher Scott Soames is himself a significant contributor to the field of contemporary philosophy of language. In his 2010 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0691155976/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0691155976&linkId=63f70f7ac5f5eac89926da9c71cb770f">Philosophy of Language</a>, Soames sets out to introduce the history and core themes of the subject, touching on its development over the 20th century, before sharing his vision for where the subject will go in future. A brilliant outline of the philosophy of language by one of its leading contemporary thinkers, this book is highly recommended for all serious students of the subject.</p>

              <BigSubscribe />
              

              <h2>3. The Philosophy of Language (6th Edition), by A. P. Martinich & David Sosa</h2>
              <BookLink title="The Philosophy of Language (6th Edition)" author="A.P. Martinich & David Sosa" link="http://www.amazon.com/gp/product/0199795150/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199795150&linkId=58ae950fed047859e8ff0d6591ffc632" img={data.three.childImageSharp.gatsbyImageData} />
              <p>If you’re looking for a one-stop shop for all things philosophy of language, look no further than A. P. Martinich and David Sosa’s epic 2012 anthology, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199795150/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199795150&linkId=58ae950fed047859e8ff0d6591ffc632">The Philosophy of Language (6th Edition)</a>. Incorporating forty-eight of the most important articles in the field, and peppered with well-organized contextual commentaries throughout, this is an essential addition to the bookshelf for serious philosophy of language students.</p>
              

              <h2>4. Tractatus Logico-Philosophicus, by Ludwig Wittgenstein</h2>
              <BookLink title="Tractatus Logico-Philosophicus" author="Ludwig Wittgenstein" link="http://www.amazon.com/gp/product/0486404455/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486404455&linkId=8a110eceac555f4fa561d5baae6928c6" img={data.four.childImageSharp.gatsbyImageData} />

              <p>Turning from introductions and anthologies to primary works in the field, where better to start than with a book that drove much of the initial excitement about what the rigorous study of language could achieve? The only book Wittgenstein published during his lifetime, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0486404455/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486404455&linkId=8a110eceac555f4fa561d5baae6928c6">Tractatus Logico-Philosophicus</a> (1921) sent shock waves of influence throughout the philosophical community by proclaiming philosophy to be a matter of logic rather than of metaphysics. By no means an easy read, Wittgenstein’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0486404455/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486404455&linkId=8a110eceac555f4fa561d5baae6928c6">Tractatus Logico-Philosophicus</a> attempts to establish the logical relations between language and the world, firing up a generation of thinkers who thought that by reducing all problems to logic they would eventually clear up every single philosophical problem in existence. So, should you pick this book up? Well, Bertrand Russell hailed Wittgenstein’s achievement as “one which no serious philosopher can afford to neglect.”</p>
              
              <h2>5. Philosophical Investigations, by Ludwig Wittgenstein</h2>
              <BookLink title="Philosophical Investigations" author="Ludwig Wittgenstein" link="http://www.amazon.com/gp/product/1405159286/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405159286&linkId=35c18c5675359bbd405abfbf38598550" img={data.five.childImageSharp.gatsbyImageData} />
              <p>You might be thinking, “wait, didn’t Wittgenstein already solve everything with his Tractatus Logico-Philosophicus?” Apparently not, for he continued to wrestle with the problems of language and logic throughout his life, and the posthumous 1953 publication of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1405159286/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405159286&linkId=35c18c5675359bbd405abfbf38598550">Philosophical Investigations</a> again sent shock waves through the philosophical community, as the arguments it contained seemed to contradict many of Wittgenstein’s earlier conclusions — specifically around the reducibility of language to logic. Widely considered to be one of the most important philosophical works of the 20th century, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1405159286/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405159286&linkId=35c18c5675359bbd405abfbf38598550">Philosophical Investigations</a> paved the way for the rise of ordinary language philosophy, the movement that argues philosophical problems disappear once language is untangled. This is an essential read for anyone interested not just in the philosophy of language, but in the development of philosophy in general.</p>
              

              <h2>6. Naming and Necessity, by Saul Kripke</h2>
              <BookLink title="Naming and Necessity" author="Saul Kripke" link="http://www.amazon.com/gp/product/0631128018/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0631128018&linkId=101810ed8739fa3546492f2c1c9a8275" img={data.six.childImageSharp.gatsbyImageData} />
              <p>Saul Kripke’s 1980 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0631128018/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0631128018&linkId=101810ed8739fa3546492f2c1c9a8275">Naming and Necessity</a> has had a profound influence on philosophy in that it is perceived to bookend the analytic tradition set in motion by Frege at the beginning of the 20th century. In this masterly work, Kripke shatters the idea that all philosophical truths follow the same logical framework, thereby powerfully insinuating that the analytic tradition of philosophy must come up for air and reconnect to the non-linguistic world to make progress. This seminal book is studied by budding philosophers of language on campuses all around the globe, rendering it a ‘necessity’ (sorry) for the bookshelf.</p>
              

              <h2>7. Syntactic Structures, by Noam Chomsky</h2>
              <BookLink title="Syntactic Structures" author="Noam Chomsky" link="http://www.amazon.com/gp/product/1614278040/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1614278040&linkId=652c1e39c9e243c370a99c373f5a7c22" img={data.seven.childImageSharp.gatsbyImageData} />
              <p>While the books so far listed have been concerned largely with what gives language meaning, or at least the relation between language and the world, Noam Chomsky’s relentlessly insightful 1957 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1614278040/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1614278040&linkId=652c1e39c9e243c370a99c373f5a7c22">Syntactic Structures</a> focuses on the role of grammar in making language sensical. American philosopher John Searle writes that “Chomsky's work is one of the most remarkable intellectual achievements of the present era, comparable in scope and coherence to the work of Keynes or Freud. It has done more than simply produce a revolution in linguistics; it has created a new discipline of generative grammar and is having a revolutionary effect on two other subjects, philosophy and psychology.” Pairing Chomsky’s grammatical work with the work of the philosophy of language advances us towards a complete theory of the nature of language.</p>
              

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
  title: file(relativePath: {eq: "language.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "language-mcginn.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "language-soames.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "language-anthology.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "language-wittgenstein.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "language-wittgenstein2.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "language-kripke.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "language-chomsky.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList