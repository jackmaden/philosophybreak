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
    <Seo title="Simone de Beauvoir Reading List – The Best 7 Books to Read" description="A curated reading list of the most essential books on and by Simone de Beauvoir." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Simone de Beauvoir" number="7" img={data.title.childImageSharp.gatsbyImageData} alt="Simone de Beauvoir books" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

            <p><span className="big-letter">S</span>imone de Beauvoir (1908 - 1986) was a philosopher whose work significantly influenced <Link to="/articles/what-is-existentialism-3-core-principles-of-existentialist-philosophy/">existentialism</Link>, ethics, and feminist theory.</p>
            
            <p>Along with fellow French thinkers Jean-Paul Sartre and Albert Camus (see my list of <Link to="/reading-lists/albert-camus/">Camus’s best books here</Link>), Beauvoir was an intellectual celebrity of the mid-20th century, and her many writings continue to provoke and inspire today.</p>

            <p>Perhaps best known for her view that, “One is not born, but rather becomes, a woman”, Beauvoir’s analysis of how social roles are propagated by society laid the groundwork for second-wave feminism, widening the scope of gender equality beyond property ownership and voting rights.</p>

            <p><Link to="/articles/authentic-love-simone-de-beauvoir-on-what-makes-a-healthy-relationship/">Beauvoir’s theory of ‘authentic love’</Link>, for example, typifies her application of existentialist philosophy to concerns around gender, identity, and power relations.</p>

            <p>However, while her contributions to feminist theory are immense, Beauvoir should not be pigeonholed, for she wrote insightfully and compellingly across a whole range of topics and mediums — a celebrated author of novels and memoirs as well as philosophical treatises. For instance, <Link to="/articles/simone-de-beauvoir-on-the-crisis-of-retirement-and-facing-old-age/">Beauvoir also applies her critical eye to aging, work, and retirement</Link>.</p>

            <BigSubscribe />

            <p>This reading list consists of the best books on and by Simone de Beauvoir. After reading some of the titles on this list, you’ll understand why this great French philosopher remains such a fascinating, intriguing, challenging thinker.</p>
            
            <p>Let’s dive in!</p>


              <h2>1. Becoming Beauvoir: A Life, by Kate Kirkpatrick</h2>
              <BookLink title="Becoming Beauvoir: A Life" author="Kate Kirkpatrick" link="https://www.amazon.com/Becoming-Beauvoir-Life-Kate-Kirkpatrick/dp/1350168432?&linkCode=ll1&tag=philosophybre-20&linkId=dce4dfbdd242d7c2ddd318affad68eae&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

            <p>Given Beauvoir’s stated aim was to ‘live out’ her philosophy, the story of her rather unconventional life receives much attention. Unfortunately, Beauvoir’s intimate connection to Sartre often overshadows the fact that she was a fiercely independent thinker who carved her own path through life.</p>
            
            <p>Indeed, Beauvoir and Sartre were lifelong partners, but never married, and each had many other love affairs; both experienced and had much to say about the transformative period of the Second World War; both had famous meetings with many other intellectuals and artists of the time.</p>

            <p>In her brilliant 2019 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Becoming-Beauvoir-Life-Kate-Kirkpatrick/dp/1350168432?&linkCode=ll1&tag=philosophybre-20&linkId=dce4dfbdd242d7c2ddd318affad68eae&language=en_US&ref_=as_li_ss_tl">Becoming Beauvoir: A Life</a>, the philosopher Kate Kirkpatrick does a wonderful job in showing us Beauvoir not in relation to others but as her own <i>full person</i>.</p>
            
            <p>Making use of new materials translated into English for the first time, including Beauvoir’s student diaries, written before meeting Sartre, Kirkpatrick shows how Beauvoir’s intellectual life was shaped not by her contemporaries, but by preoccupations that were with her from an early age.</p>

            <p>If you’re looking to understand Beauvoir’s life beyond the myth and hearsay, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Becoming-Beauvoir-Life-Kate-Kirkpatrick/dp/1350168432?&linkCode=ll1&tag=philosophybre-20&linkId=dce4dfbdd242d7c2ddd318affad68eae&language=en_US&ref_=as_li_ss_tl">Becoming Beauvoir: A Life</a> is a brilliant modern biography, and comes highly recommended.</p>

            <p>Special mention must be made, too, to Deirdre Bair’s 1991 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Simone-Beauvoir-Biography-Deirdre-Bair/dp/0671741802?&linkCode=ll1&tag=philosophybre-20&linkId=569313e4a97d5474df09f15992430548&language=en_US&ref_=as_li_ss_tl">Simone de Beauvoir: A Biography</a>, which is based not just on research but on five years of direct interviews with Beauvoir herself.</p>
            
            <p>Finally, Beauvoir’s own four-part autobiography, particularly the first volume, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Memoirs-Dutiful-Daughter-Perennial-Classics/dp/0060825197?&linkCode=ll1&tag=philosophybre-20&linkId=6d63d06830e3b8b523d6ac08b5df6660&language=en_US&ref_=as_li_ss_tl">Memoirs of a Dutiful Daughter</a>, provides fascinating first-hand insight into the life and mind that produced some of the 20th-century’s most enduring philosophical writings.</p>


              <h2>2. Philosophical Writings, by Simone de Beauvoir</h2>
              <BookLink title="Philosophical Writings" author="Simone de Beauvoir" link="https://www.amazon.com/Philosophical-Writings-Beauvoir-Simone/dp/0252085930?&linkCode=ll1&tag=philosophybre-20&linkId=fba1f47701bc7cfaf0916d4b8c264883&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

            <p>Turning from biography to philosophy, and perhaps there’s no place better to start than with the 2021 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Philosophical-Writings-Beauvoir-Simone/dp/0252085930?&linkCode=ll1&tag=philosophybre-20&linkId=fba1f47701bc7cfaf0916d4b8c264883&language=en_US&ref_=as_li_ss_tl">Philosophical Writings</a>, edited by Margaret A. Simons.</p>

            <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Philosophical-Writings-Beauvoir-Simone/dp/0252085930?&linkCode=ll1&tag=philosophybre-20&linkId=fba1f47701bc7cfaf0916d4b8c264883&language=en_US&ref_=as_li_ss_tl">Philosophical Writings</a> is a collection of Beauvoir’s early philosophical essays, now translated into English for the first time, each excellently introduced and contextualized by modern Beauvoir scholars.</p>
            
            <p>Perhaps the standout piece is <i>Pyrrhus and Cineas</i>, a 1944 essay written two years before Sartre’s famous <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Existentialism-Humanism-Jean-Paul-Sartre-ebook/dp/B08H87G2WN?&linkCode=ll1&tag=philosophybre-20&linkId=6281e403a7f2f2b94c54d99759d94648&language=en_US&ref_=as_li_ss_tl">Existentialism is a Humanism</a>, which shows that Beauvoir’s philosophy does not echo existentialism, it very much <i>informs</i> it. In clear, direct, brilliant writing, Beauvoir critiques Sartre, and lays the groundwork for the ethics of existentialism.</p>

            <p>As an accessible introduction to Beauvoir’s broad philosophical project, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Philosophical-Writings-Beauvoir-Simone/dp/0252085930?&linkCode=ll1&tag=philosophybre-20&linkId=fba1f47701bc7cfaf0916d4b8c264883&language=en_US&ref_=as_li_ss_tl">Philosophical Writings</a> is a fantastic place to start.</p>


              <h2>3. The Ethics of Ambiguity, by Simone de Beauvoir</h2>
              <BookLink title="The Ethics of Ambiguity" author="Simone de Beauvoir" link="https://www.amazon.com/Ethics-Ambiguity-Simone-Beauvoir/dp/1504054229?&linkCode=ll1&tag=philosophybre-20&linkId=175bcdd5a78c9dd59173d9f1e61aa83c&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />

              <p>Following <i>Pyrrhus and Cineas</i>, Beauvoir continues her articulation of an ethics for existentialism in her brilliant 1947 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Ethics-Ambiguity-Simone-Beauvoir/dp/1504054229?&linkCode=ll1&tag=philosophybre-20&linkId=175bcdd5a78c9dd59173d9f1e61aa83c&language=en_US&ref_=as_li_ss_tl">The Ethics of Ambiguity</a>.</p>

            <p>In clear, accessible, insightful prose, Beauvoir again demonstrates her novel developments of existentialism away from Sartre, and adds detail and weight to her position that authentic individual freedom requires respect for the freedom of others.</p>

            <p>If you’re looking to understand Beauvoir’s key contributions to existential ethics, then <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Ethics-Ambiguity-Simone-Beauvoir/dp/1504054229?&linkCode=ll1&tag=philosophybre-20&linkId=175bcdd5a78c9dd59173d9f1e61aa83c&language=en_US&ref_=as_li_ss_tl">The Ethics of Ambiguity</a> is a great choice (it also features on my list of <Link to="/reading-lists/existentialism/">existentialism’s best books</Link>).</p>


              <h2>4. The Second Sex, by Simone de Beauvoir</h2>
              <BookLink title="The Second Sex" author="Simone de Beauvoir" link="https://www.amazon.com/Second-Sex-Simone-Beauvoir/dp/030727778X?&linkCode=ll1&tag=philosophybre-20&linkId=074b2433f165ea1c9c5985feaf9b4f1f&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

              <p>The book for which she is best known, Beauvoir’s 1949 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Second-Sex-Simone-Beauvoir/dp/030727778X?&linkCode=ll1&tag=philosophybre-20&linkId=074b2433f165ea1c9c5985feaf9b4f1f&language=en_US&ref_=as_li_ss_tl">The Second Sex</a> is the 20th century’s seminal account of how social roles for women are constructed and propagated.</p>

              <p>Beginning with a detailed, powerful survey of how women are viewed and treated, Beauvoir then opens her analysis with the famous line,</p>

              <blockquote><p>One is not born, but rather becomes, a woman.</p></blockquote>

              <p>From childhood, women are subject to mystification about their own freedom, Beauvoir writes:</p>
              
              <blockquote><p>It is difficult for men to measure the enormous extent of social discrimination that seems insignificant from the outside and whose moral and intellectual repercussions are so deep in woman that they appear to spring from an original nature.</p></blockquote>

              <p>Beauvoir’s analysis laid the intellectual groundwork for second-wave feminism, widening the scope of gender equality beyond property ownership and voting rights.</p>
              
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Second-Sex-Simone-Beauvoir/dp/030727778X?&linkCode=ll1&tag=philosophybre-20&linkId=074b2433f165ea1c9c5985feaf9b4f1f&language=en_US&ref_=as_li_ss_tl">The Second Sex</a> also includes some of Beauvoir’s most powerful writing on existentialism, rendering it essential for any aspiring scholar of Beauvoir, existential philosophy, or feminist theory (it also features on my list of <Link to="/reading-lists/political-philosophy/">political philosophy’s best books</Link>).</p>



              <h2>5. The Mandarins, by Simone de Beauvoir</h2>
              <BookLink title="The Mandarins" author="Simone de Beauvoir" link="https://www.amazon.com/Mandarins-Norton-Paperback-Fiction/dp/0393318834?&linkCode=ll1&tag=philosophybre-20&linkId=1e282cbe995208c51b5a7546bd27c32a&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />

              <p>Beauvoir didn’t just write essays and philosophical analyses, she also made significant contributions to literature.</p>
            
            <p>One of her most highly-regarded efforts is <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Mandarins-Norton-Paperback-Fiction/dp/0393318834?&linkCode=ll1&tag=philosophybre-20&linkId=1e282cbe995208c51b5a7546bd27c32a&language=en_US&ref_=as_li_ss_tl">The Mandarins</a>, a brilliant novel set in post-war Paris featuring thinly-disguised characterizations of Beauvoir’s intellectual circle, including Camus and Sartre (along with their political conflicts). <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Mandarins-Norton-Paperback-Fiction/dp/0393318834?&linkCode=ll1&tag=philosophybre-20&linkId=1e282cbe995208c51b5a7546bd27c32a&language=en_US&ref_=as_li_ss_tl">The Mandarins</a> won Beauvoir France’s highest literary prize, the <i>Prix Goncourt</i>.</p>

            <p>Special mention, too, must go to Beauvoir’s first novel, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/She-Came-Stay-Simone-Beauvoir/dp/0393318842?&linkCode=ll1&tag=philosophybre-20&linkId=4685af2a4e64d62e4bf604d72be96805&language=en_US&ref_=as_li_ss_tl">She Came to Stay</a>, a vibrant tale of love, jealousy, obsession, revenge — which is generally considered among the classics of 20th-century French literature.</p>



            <h2>6. A Very Easy Death: A Memoir, by Simone de Beauvoir</h2>
              <BookLink title="A Very Easy Death: A Memoir" author="Simone de Beauvoir" link="https://www.amazon.com/Very-Death-Pantheon-Modern-Writers/dp/0394728998?&linkCode=ll1&tag=philosophybre-20&linkId=68a38dcd4f5dee1e44822e8df6590f51&language=en_US&ref_=as_li_ss_tl" img={data.six.childImageSharp.gatsbyImageData} />

              <p>Beauvoir’s 1964 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Very-Death-Pantheon-Modern-Writers/dp/0394728998?&linkCode=ll1&tag=philosophybre-20&linkId=68a38dcd4f5dee1e44822e8df6590f51&language=en_US&ref_=as_li_ss_tl">A Very Easy Death</a> is her short, beautiful, and raw reflection on the death of her mother, with whom she had a difficult and complicated relationship (for the most part, her mother lived the kind of duty-bound life that Beauvoir picked apart in <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Second-Sex-Simone-Beauvoir/dp/030727778X?&linkCode=ll1&tag=philosophybre-20&linkId=074b2433f165ea1c9c5985feaf9b4f1f&language=en_US&ref_=as_li_ss_tl">The Second Sex</a>).</p>

            <p>In this devastating, brutally honest day-by-day account, Beauvoir describes the indignity of her mother’s suffering and treatment. She offers profound reflections on mortality, and important insights for how we might, in the end, be reconciled.</p>
            
 

            <h2>7. The Coming of Age, by Simone de Beauvoir</h2>
              <BookLink title="The Coming of Age" author="Simone de Beauvoir" link="https://www.amazon.com/Coming-Age-Simone-Beauvoir/dp/039331443X?&linkCode=ll1&tag=philosophybre-20&linkId=4acb2386ef4b04c3bd1577fb0b9eba84&language=en_US&ref_=as_li_ss_tl" img={data.seven.childImageSharp.gatsbyImageData} />

              <p>In her 1970 book <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Coming-Age-Simone-Beauvoir/dp/039331443X?&linkCode=ll1&tag=philosophybre-20&linkId=4acb2386ef4b04c3bd1577fb0b9eba84&language=en_US&ref_=as_li_ss_tl">The Coming of Age</a>, Beauvoir sets out to do for old age what she did for women with <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Second-Sex-Simone-Beauvoir/dp/030727778X?&linkCode=ll1&tag=philosophybre-20&linkId=074b2433f165ea1c9c5985feaf9b4f1f&language=en_US&ref_=as_li_ss_tl">The Second Sex</a>: add an authentic voice to challenge the dominant constructs and assumptions of society.</p>

              <p>Why must old people endure a tacit and increasingly explicit separation from younger communities? Beauvoir begins her investigations with a succinct cross-cultural analysis spanning thousands of years, but it is when she turns her analysis to the personal psychology of becoming old that her insights feel as fresh and urgent as ever. She writes:</p>

              <blockquote><p>Die early or grow old: there is no alternative… old age is the general fate, and when it seizes upon our own personal life we are dumbfounded… can I have become a different being while I still remain myself?</p></blockquote>

              <p>Pertinent for anyone who plans on becoming old, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Coming-Age-Simone-Beauvoir/dp/039331443X?&linkCode=ll1&tag=philosophybre-20&linkId=4acb2386ef4b04c3bd1577fb0b9eba84&language=en_US&ref_=as_li_ss_tl">The Coming of Age</a> finds an aging Beauvoir at the top of her game. You can read my overview of <Link to="/articles/simone-de-beauvoir-on-the-crisis-of-retirement-and-facing-old-age/">Beauvoir's arguments on aging, work, and retirement here</Link>.</p>
            
              
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
  title: file(relativePath: {eq: "beauvoir.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "beauvoir-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "beauvoir-writings.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "beauvoir-ethics.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "politics-beauvoir.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "beauvoir-mandarins.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "beauvoir-death.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "beauvoir-age.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList