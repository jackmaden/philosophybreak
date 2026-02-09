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
    <Seo title="Leo Tolstoy Reading List – The Best 5 Books to Read" description="A curated reading list of the best books to get started with Leo Tolstoy." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Leo Tolstoy" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="The Book, by Juan Gris" />
        
        {/*container for sidebar*/}
        <div id="container">
          
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

            <p><span className="big-letter">L</span>eo Tolstoy (1828 - 1910) was a Russian writer whose works have had a monumental impact on global literature. Like fellow 19th-century Russian writer Fyodor Dostoevsky (see our <Link to="/reading-lists/fyodor-dostoevsky-best-books/">reading list of Dostoevsky’s best books here</Link>), Tolstoy’s writings wrestle with deeply philosophical themes, offer incredible descriptions of (and insight into) the human condition, and have since their publication inspired philosophers as well as novelists.</p>

            <p>Often perceived to be among the pinnacles of realist literature, Tolstoy’s works are remarkable for the authenticity of the worlds, events, and lives they evoke. The 19th-century British poet and critic Matthew Arnold, for instance, commented:</p>

            <blockquote><p>A novel by Tolstoy is not a work of art but a piece of life.</p></blockquote>

            <p>The Russian writer Isaac Babel, meanwhile, noted:</p>

            <blockquote><p>If the world could write by itself, it would write like Tolstoy.</p></blockquote>

            <p>Declared, too, by Virginia Woolf as “the greatest of all novelists”, Tolstoy enjoys such praise for very good reason. His characters are unforgettable; his exploration of the profound spiritual and philosophical journeys they embark on unrivaled.</p>

            <BigSubscribe />

            <p>This reading list consists of the best and most important books for getting started with Leo Tolstoy. After reading it, you’ll understand exactly why Tolstoy is considered one of the greatest writers in history.</p>
              

            <h2>1. War and Peace, by Leo Tolstoy</h2>
            <BookLink title="War and Peace" author="Leo Tolstoy" link="http://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985?&linkCode=ll1&tag=philosophybre-20&linkId=ac90599e9fc4d6b73e36db517a686d6a&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

            <p>Perhaps Tolstoy’s most famous work, and also his longest — <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985?&linkCode=ll1&tag=philosophybre-20&linkId=ac90599e9fc4d6b73e36db517a686d6a&language=en_US&ref_=as_li_ss_tl">War and Peace</a> is utterly epic in scope, length, and reputation. The novel is regarded as one of the best ever written, but was actually described by Tolstoy as “not a novel” at all.</p>

            <p>For, published as a complete work in 1869, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985?&linkCode=ll1&tag=philosophybre-20&linkId=ac90599e9fc4d6b73e36db517a686d6a&language=en_US&ref_=as_li_ss_tl">War and Peace</a> covers not just the complex development of its dozens of characters against the backdrop of the tumultuous Napoleonic era. No: Tolstoy also grandly philosophizes about the nature of history, love, fate, free will, power, meaning, and life itself.</p>

            <p>The result? <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985?&linkCode=ll1&tag=philosophybre-20&linkId=ac90599e9fc4d6b73e36db517a686d6a&language=en_US&ref_=as_li_ss_tl">War and Peace</a> is an exquisite read for literature and philosophy lovers alike.</p>

            <p>The translation of this particular edition is by Richard Pevear and Larissa Volokhonsky, which is the definitive, most celebrated edition of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985?&linkCode=ll1&tag=philosophybre-20&linkId=ac90599e9fc4d6b73e36db517a686d6a&language=en_US&ref_=as_li_ss_tl">War and Peace</a> in English. If you’re interested in Tolstoy, literary classics, or philosophical novels, this book belongs on your bookshelf.</p>

            <h2>2. Anna Karenina, by Leo Tolstoy</h2>
            <BookLink title="Anna Karenina" author="Leo Tolstoy" link="http://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002?&linkCode=ll1&tag=philosophybre-20&linkId=8d54b2d76752b3a65e30337aa6688e97&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

            <p>“All happy families are alike; each unhappy family is unhappy in its own way.” So begins Tolstoy’s <i>other</i> famous epic, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002?&linkCode=ll1&tag=philosophybre-20&linkId=8d54b2d76752b3a65e30337aa6688e97&language=en_US&ref_=as_li_ss_tl">Anna Karenina</a>, which was described by its author as his “first true novel”.</p>

            <p>Originally published as a complete work in 1878, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002?&linkCode=ll1&tag=philosophybre-20&linkId=8d54b2d76752b3a65e30337aa6688e97&language=en_US&ref_=as_li_ss_tl">Anna Karenina</a> is (like <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985?&linkCode=ll1&tag=philosophybre-20&linkId=ac90599e9fc4d6b73e36db517a686d6a&language=en_US&ref_=as_li_ss_tl">War and Peace</a>) also regularly described as the greatest novel in history. Dostoevsky declared it “flawless”.</p>

            <p>And for good reason. With searing emotional intensity and philosophical profundity, Tolstoy develops a love story set in his contemporary Russia into a timeless, universal work of art that stands among the greatest achievements in literature. It is an undisputed masterpiece.</p>

            <p>The translation of this particular edition is also by Richard Pevear and Larissa Volokhonsky. As with <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985?&linkCode=ll1&tag=philosophybre-20&linkId=ac90599e9fc4d6b73e36db517a686d6a&language=en_US&ref_=as_li_ss_tl">War and Peace</a>, if you care about Tolstoy or literary fiction in general, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002?&linkCode=ll1&tag=philosophybre-20&linkId=8d54b2d76752b3a65e30337aa6688e97&language=en_US&ref_=as_li_ss_tl">Anna Karenina</a> is simply an essential read.</p>


            <h2>3. The Death of Ivan Ilyich, by Leo Tolstoy</h2>
            <BookLink title="The Death of Ivan Ilyich" author="Leo Tolstoy" link="http://www.amazon.com/Death-Ilyich-Stories-Penguin-Classics/dp/0140449612?&linkCode=ll1&tag=philosophybre-20&linkId=ced6a2710273bb69d8c2b1b8dc768db1&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />

            <p>If you’re not ready to commit to one of his longer works, the best place to start with Tolstoy is his 1886 novella, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Death-Ilyich-Stories-Penguin-Classics/dp/0140449612?&linkCode=ll1&tag=philosophybre-20&linkId=ced6a2710273bb69d8c2b1b8dc768db1&language=en_US&ref_=as_li_ss_tl">The Death of Ivan Ilyich</a>.</p> 

            <p>Considered one of the pinnacles of Tolstoy’s late fiction, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Death-Ilyich-Stories-Penguin-Classics/dp/0140449612?&linkCode=ll1&tag=philosophybre-20&linkId=ced6a2710273bb69d8c2b1b8dc768db1&language=en_US&ref_=as_li_ss_tl">The Death of Ivan Ilyich</a> tells the story of a high court judge facing up to death from a terminal illness.</p>

            <p>What does it mean to live a meaningful life? In what ways do we deceive ourselves? What does our mortality mean for us? Tolstoy confronts such questions with beautiful, searingly insightful prose.</p>

            <p>This particular edition also contains some of Tolstoy’s other brilliant short stories, including The Raid, The Wood-felling, and Three Deaths.</p>


            <h2>4. The Cossacks, by Leo Tolstoy</h2>
            <BookLink title="The Cossacks" author="Leo Tolstoy" link="http://www.amazon.com/Cossacks-Everymans-Library-170/dp/0679431314?&linkCode=ll1&tag=philosophybre-20&linkId=beb512faca8750a630f792fb4ab7c002&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

            <p>Written before either of the novels he’s best known for (and first published in 1863), <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cossacks-Everymans-Library-170/dp/0679431314?&linkCode=ll1&tag=philosophybre-20&linkId=beb512faca8750a630f792fb4ab7c002&language=en_US&ref_=as_li_ss_tl">The Cossacks</a> captures a young Tolstoy at his energetic best.</p>

            <p>The great Russian author draws on his experiences as a soldier in the Caucasus to produce a lean novella of love, adventure, and male rivalry. The economy of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cossacks-Everymans-Library-170/dp/0679431314?&linkCode=ll1&tag=philosophybre-20&linkId=beb512faca8750a630f792fb4ab7c002&language=en_US&ref_=as_li_ss_tl">The Cossacks</a>’s prose stands in stark contrast to <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985?&linkCode=ll1&tag=philosophybre-20&linkId=ac90599e9fc4d6b73e36db517a686d6a&language=en_US&ref_=as_li_ss_tl">War and Peace</a> and <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002?&linkCode=ll1&tag=philosophybre-20&linkId=8d54b2d76752b3a65e30337aa6688e97&language=en_US&ref_=as_li_ss_tl">Anna Karenina</a>, but thematically the novella foreshadows the profundity for which those later works are most celebrated.</p>

            <p>If you’re intrigued by the Tolstoy who existed <i>before</i> his epics, Ivan Turgenev described <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cossacks-Everymans-Library-170/dp/0679431314?&linkCode=ll1&tag=philosophybre-20&linkId=beb512faca8750a630f792fb4ab7c002&language=en_US&ref_=as_li_ss_tl">The Cossacks</a> as his favorite work by Tolstoy. Might it be yours?</p>

            <h2>5. The Kreutzer Sonata, by Leo Tolstoy</h2>
            <BookLink title="The Kreutzer Sonata" author="Leo Tolstoy" link="http://www.amazon.com/Kreutzer-Sonata-Stories-Penguin-Classics/dp/0140449604?&linkCode=ll1&tag=philosophybre-20&linkId=3cb66b24934ab4942c64faa0280a838c&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />

            <p>Upon its publication in 1889, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Kreutzer-Sonata-Stories-Penguin-Classics/dp/0140449604?&linkCode=ll1&tag=philosophybre-20&linkId=3cb66b24934ab4942c64faa0280a838c&language=en_US&ref_=as_li_ss_tl">The Kreutzer Sonata</a> was promptly censored by Russian authorities. Tolstoy’s novella — inspired by his late, feverish embracement of Christianity — was deemed too scandalous and unusual for public consumption, detailing as it does a controversial tale of lust, jealousy, and murder.</p>

            <p>The censorship of the novella of course only increased its intrigue, with readers finding ways to consume Tolstoy’s thinly-veiled diatribe against sexual promiscuity.</p>

            <p>Though religious and spiritual transformations feature throughout Tolstoy’s work, nowhere is he as chaste as in this late collection of short stories, which along with <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Kreutzer-Sonata-Stories-Penguin-Classics/dp/0140449604?&linkCode=ll1&tag=philosophybre-20&linkId=3cb66b24934ab4942c64faa0280a838c&language=en_US&ref_=as_li_ss_tl">The Kreutzer Sonata</a> includes Family Happiness, The Devil, and Father Sergius.</p>

            <p>If you’re intrigued by Tolstoy’s spiritual journey, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Kreutzer-Sonata-Stories-Penguin-Classics/dp/0140449604?&linkCode=ll1&tag=philosophybre-20&linkId=3cb66b24934ab4942c64faa0280a838c&language=en_US&ref_=as_li_ss_tl">The Kreutzer Sonata</a> starkly — perhaps even disturbingly — illuminates his destination.</p>

            
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
  title: file(relativePath: {eq: "rl3.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "tolstoy-war.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "tolstoy-anna.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "tolstoy-ivan.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "tolstoy-cossacks.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "tolstoy-kreutz.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList