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
    <Seo title="Ralph Waldo Emerson Reading List – The Best 5 Books to Read" description="A curated reading list of the most essential books on and by Ralph Waldo Emerson." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Ralph Waldo Emerson" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Ralph Waldo Emerson books" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">R</span>alph Waldo Emerson (1803 - 1882) was a philosopher and essayist perhaps best known for spearheading American Transcendentalism, a philosophical movement that emphasizes the power of individualism, self-reliance, and the natural world.</p>

            <p>One of the key hallmarks of the Transcendentalist movement, which notably included Emerson, Margaret Fuller, and Henry David Thoreau (see our reading list of <Link to="/reading-lists/henry-david-thoreau-best-books/">Thoreau’s best books here</Link>), is its celebration of the supremacy — even divinity — of nature.</p>

            <p>Divinity is not locked in a distant heaven, say transcendentalists; it is accessible right here in the company of the natural world.</p>

            <p>We are thus at our best not when we conform to voices outside ourselves, but when we follow the voice within — the glimmering insight, the “immense intelligence” of our natural intuition and instincts.</p>

            <p>Society on this view is seen as a corrupting force — it takes us <i>away</i> from our natural wisdom.</p>
            
            <p>As unique individuals, we should not conform to generic belief systems or conventions, Emerson writes, but instead “enjoy an original relation to the universe.”</p>

            <p>Emerson offers the beginnings of a path for how we might <i>resist</i> the pressures of society in his famous 1841 essay, <i>Self-Reliance</i> (read my <Link to="/articles/ralph-waldo-emerson-self-reliance-summary-and-pdf-become-your-own-person/">Self-Reliance summary and analysis here</Link>), which features in the collection below.</p>

            <p>A famous passage from Emerson’s <i>Self-Reliance</i> that encapsulates the theme of much of his work runs as follows:</p>

            <blockquote><p>You will always find those who think they know what is your duty better than you know it. It is easy in the world to live after the world’s opinion; it is easy in solitude to live after our own; but the great man is he who in the midst of the crowd keeps with perfect sweetness the independence of solitude.</p></blockquote>

            <BigSubscribe />

            <p>This reading list consists of the best books by and about Ralph Waldo Emerson.</p>

            <p>After reading some of the books on this list, you’ll understand why this brilliant thinker was heralded by the great German philosopher Friedrich Nietzsche as “the most gifted of the Americans” (see my reading list of <Link to="/reading-lists/friedrich-nietzsche/">Nietzsche’s best books here</Link>), and remains so celebrated to this day.</p>
            
            <p>Let’s dive in!</p>


              <h2>1. Nature and Selected Essays, by Ralph Waldo Emerson</h2>
              <BookLink title="Nature" author="Ralph Waldo Emerson" link="https://www.amazon.com/Nature-Selected-Essays-Penguin-Classics/dp/014243762X?&linkCode=ll1&tag=philosophybre-20&linkId=5fd55b8415cb492e13f48449fb876408&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

            <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nature-Selected-Essays-Penguin-Classics/dp/014243762X?&linkCode=ll1&tag=philosophybre-20&linkId=5fd55b8415cb492e13f48449fb876408&language=en_US&ref_=as_li_ss_tl">Nature</a> was Emerson’s first book, and it set out the core principles for much of his (and Transcendentalist) thought.</p>
            
            <p>Published in 1836 following the traumatic death of his first wife, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nature-Selected-Essays-Penguin-Classics/dp/014243762X?&linkCode=ll1&tag=philosophybre-20&linkId=5fd55b8415cb492e13f48449fb876408&language=en_US&ref_=as_li_ss_tl">Nature</a> features Emerson at his sermonic best. Having left the Church, Emerson aimed to deliver secular lectures that nevertheless contained an almost religious power of their own. <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nature-Selected-Essays-Penguin-Classics/dp/014243762X?&linkCode=ll1&tag=philosophybre-20&linkId=5fd55b8415cb492e13f48449fb876408&language=en_US&ref_=as_li_ss_tl">Nature</a> is his first attempt at doing so with the written word — and in this regard it’s an undisputed success.</p>

            <p>Emerson meditates on the power and beauty of nature and our profound, unbreakable connection to it. He writes:</p>

            <blockquote><p>Nature always wears the colors of the spirit. To a man laboring under calamity, the heat of his own fire hath sadness in it.</p></blockquote>

            <p>The essence of nature is integral to the essence of ourselves, and Emerson implores us to both explore and live in harmony with it.</p>

            <p>If you’re interested in Emerson and Transcendentalism, there’s no better book to start with. As well as the book-length Nature essay, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nature-Selected-Essays-Penguin-Classics/dp/014243762X?&linkCode=ll1&tag=philosophybre-20&linkId=5fd55b8415cb492e13f48449fb876408&language=en_US&ref_=as_li_ss_tl">Nature and Selected Essays</a> also includes many other of Emerson’s most acclaimed essays, including Self-Reliance, The Poet, and The American Scholar.</p>


              <h2>2. The Annotated Emerson, by Ralph Waldo Emerson and David Mikics</h2>
              <BookLink title="The Annotated Emerson" author="Ralph Waldo Emerson" link="https://www.amazon.com/Annotated-Emerson-Ralph-Waldo/dp/0674049233?&linkCode=ll1&tag=philosophybre-20&linkId=861009abb14de501220f22d441434726&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

            <p>While Emerson is regarded as one of America’s greatest writers, his luxurious 19th-century prose can appear a little dense to the modern eye. Hence <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Annotated-Emerson-Ralph-Waldo/dp/0674049233?&linkCode=ll1&tag=philosophybre-20&linkId=861009abb14de501220f22d441434726&language=en_US&ref_=as_li_ss_tl">The Annotated Emerson</a>: a brilliant book — published in 2012 — that contextualizes, illustrates, and discusses Emerson’s most important works.</p>
            
            <p>Presenting some of Emerson’s most significant essays (including Nature, Self-Reliance, and more), the scholar David Mikics provides brilliant commentary throughout, drawing on Emerson’s journal entries and providing biographical details to supplement the work and bring Emerson’s writing to life.</p>
            
            <p>For those seeking a deeper understanding of Emerson’s work, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Annotated-Emerson-Ralph-Waldo/dp/0674049233?&linkCode=ll1&tag=philosophybre-20&linkId=861009abb14de501220f22d441434726&language=en_US&ref_=as_li_ss_tl">The Annotated Emerson</a> is highly recommended.</p>


              <h2>3. Ralph Waldo Emerson: Essays and Lectures, by Ralph Waldo Emerson</h2>
              <BookLink title="Ralph Waldo Emerson: Essays and Lectures " author="Ralph Waldo Emerson" link="https://www.amazon.com/Emerson-Lectures-Addresses-Representative-English/dp/0940450151?&linkCode=ll1&tag=philosophybre-20&linkId=734cfb94df0f54977c153f5931530ae0&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />

              <p>If you’re looking for a one-stop shop for all things Emerson, then look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Emerson-Lectures-Addresses-Representative-English/dp/0940450151?&linkCode=ll1&tag=philosophybre-20&linkId=734cfb94df0f54977c153f5931530ae0&language=en_US&ref_=as_li_ss_tl">Ralph Waldo Emerson: Essays and Lectures</a>, published in 1983.</p>

              <p>This anthology contains all of Emerson’s essays and lectures, as well as a wealth of helpful contextual and biographical detail.</p>

            <p>At 1150 pages, this anthology’s a beast — but you won’t need another!</p>

              <h2>4. Emerson: The Mind on Fire, by Robert D. Richardson</h2>
              <BookLink title="Emerson: The Mind on Fire" author="Robert D. Richardson" link="https://www.amazon.com/Emerson-Mind-Fire-Centennial-Books/dp/0520206894?&linkCode=ll1&tag=philosophybre-20&linkId=31ea0a917fa0a15a2a91083b9f3912b5&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

              <p>If you’re looking to learn more about the life Emerson lived and the events that shaped his work, Robert D. Richardson’s <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Emerson-Mind-Fire-Centennial-Books/dp/0520206894?&linkCode=ll1&tag=philosophybre-20&linkId=31ea0a917fa0a15a2a91083b9f3912b5&language=en_US&ref_=as_li_ss_tl">Emerson: The Mind on Fire</a> is a fantastic biography, excellently researched and engagingly written.</p>

              <p>In 100 bite-size chapters, Richardson lovingly weaves the story of Emerson’s intellectual development, his spearheading of the Transcendentalist movement (and often fraught interpersonal relationships with its members), his legacy as one of the greatest figureheads of American literature, and his lasting impact on the American psyche.</p>

              <p>If you’re interested in Emerson, this autobiography is an essential addition to your bookshelf.</p>


              <h2>5. Emerson in His Journals, by Joel Porte</h2>
              <BookLink title="Emerson in His Journals" author="Joel Porte" link="https://www.amazon.com/Emerson-His-Journals-Ralph-Waldo/dp/0674248627?&linkCode=ll1&tag=philosophybre-20&linkId=c20750d0cce4f14cf258ab82d0414b09&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />

              <p>For much of his long and fascinating life, Emerson kept a detailed journal. In 1984, Emerson scholar Joel Porte edited Emerson’s vast collection of journal entries to produce <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Emerson-His-Journals-Ralph-Waldo/dp/0674248627?&linkCode=ll1&tag=philosophybre-20&linkId=c20750d0cce4f14cf258ab82d0414b09&language=en_US&ref_=as_li_ss_tl">Emerson in His Journals</a>, a book that should delight fans of Emerson and his work.</p>

              <p>In these pages, we are granted intimate access into some of the major events in Emerson’s life — like his complex relationship with fellow Transcendentalist Margaret Fuller — from <i>Emerson’s own perspective</i>.</p>         
            
            <p>We see a side to Emerson that he would never expose in his published writings, rendering <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Emerson-His-Journals-Ralph-Waldo/dp/0674248627?&linkCode=ll1&tag=philosophybre-20&linkId=c20750d0cce4f14cf258ab82d0414b09&language=en_US&ref_=as_li_ss_tl">Emerson in His Journals</a> an enthralling addition for hardcore Emerson scholars.</p>
              
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
  title: file(relativePath: {eq: "ralph-waldo.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "emerson-nature.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "emerson-annotated.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "emerson-anthol.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "emerson-mind.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "emerson-journal.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList