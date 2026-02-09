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
    <Seo title="Hannah Arendt Reading List – The Best 6 Books to Read" description="A curated reading list of the most essential books by Hannah Arendt, including The Origins of Totalitarianism, The Human Condition, and more." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Hannah Arendt" number="6" img={data.title.childImageSharp.gatsbyImageData} alt="Fruit and Book, by Juan Gris" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              
              <p><span className="big-letter">B</span>orn in 1906, German-born American philosopher Hannah Arendt is widely considered to be one of the most important political thinkers of the 20th century. Her many books and articles have had a lasting influence on <Link to="/reading-lists/political-philosophy/">political theory</Link> and philosophy.</p>

              <p>Beyond <Link to="/articles/hannah-arendt-on-the-human-condition-productivity-will-replace-meaning/">Arendt’s brilliantly original critique of the human condition</Link>, she is perhaps most famous for her coining of the phrase, the ‘banality of evil’. As I explore in my short <Link to="/articles/hannah-arendt-on-standing-up-to-the-banality-of-evil/">explainer piece on the ‘banality of evil’</Link>, Arendt argues that evil does not have the Satan-like, villainous appearance we might typically associate it with.</p>
              <p>Rather, evil is perpetuated when immoral principles become normalized over time by unthinking people. Evil becomes commonplace; it becomes the everyday. Ordinary people — going about their everyday lives — become complicit actors in systems that perpetuate evil.</p>

              <p>Early on in her academic life, Arendt was a student of the German philosopher Martin Heidegger, with whom she had a two-year love affair.</p>
              <p>Heidegger infamously joined the Nazi party in the years leading up to World War Two. Arendt cut ties with Heidegger, fled an increasingly hostile Berlin (as a Jewish woman, she’d already been targeted by the Gestapo), and settled in France for seven years.</p>

              <BigSubscribe />
              
              <p>As the war began to spread across Europe, in 1941 Arendt moved again to the USA, where she lived the rest of her life engaged in various academic and journalistic posts, dedicating much of her work to the rigorous analysis of totalitarian systems.</p>

              <p><Link to="/articles/hannah-arendt-5-insights-into-totalitarianism/">Arendt’s analysis of totalitarianism</Link> was in part motivated by seeking to understand how someone as intelligent as Heidegger (among other German philosophers of the period) could succumb to Nazi propaganda. Her rich body of work in this area is lauded as some of the most perceptive in the field, and is regularly drawn on today by those looking to analyze the techniques and mechanisms of totalitarianism.</p> 

              <p>This reading list contains the best books written by and about Hannah Arendt. After reading the books on this list, you’ll understand exactly why this brilliant, fascinating philosopher is considered to be one of the most important political thinkers of the 20th century. 
              </p>

              
              <h2>1. Hannah Arendt (Critical Lives), by Samantha Hill</h2>
              <BookLink title="Hannah Arendt (Critical Lives)" author="Samantha Hill" link="http://www.amazon.com/Hannah-Arendt-Critical-Lives-Samantha/dp/1789143799?&linkCode=ll1&tag=philosophybre-20&linkId=f7cf4991a7b5cf80b9a09dec1175ed48&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>For a clear and concise primer that introduces Arendt’s works in the context of her life, Samantha Hill’s new biography <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Hannah-Arendt-Critical-Lives-Samantha/dp/1789143799?&linkCode=ll1&tag=philosophybre-20&linkId=f7cf4991a7b5cf80b9a09dec1175ed48&language=en_US&ref_=as_li_ss_tl">Hannah Arendt (Critical Lives)</a> is a fantastic place to start. Hill writes with exceptional clarity, conveying total mastery of Arendt’s texts.</p>
              <p>While Elisabeth Young-Brehl’s highly-acclaimed 1982 biography <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Hannah-Arendt-Love-World-Second/dp/0300105886?&linkCode=ll1&tag=philosophybre-20&linkId=b0ff1476465251ff978fdbb53a26fdd7&language=en_US&ref_=as_li_ss_tl">Hannah Arendt: For Love of the World</a> offers a longer introduction to Arendt and her work, Hill’s 2021 book arguably provides more lucidity, effortlessly weaving together biographical detail, archival documents, extracts from Arendt’s work, and correspondence with other thinkers of the time.</p>
              

              <h2>2. The Cambridge Companion to Hannah Arendt, by Dana Villa</h2>
              <BookLink title="The Cambridge Companion to Hannah Arendt" author="Dana Villa" link="http://www.amazon.com/Cambridge-Companion-Hannah-Companions-Philosophy/dp/0521645719?&linkCode=ll1&tag=philosophybre-20&linkId=37af025550e10ab032789360257dd37e&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>Edited by Dana Villa, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Hannah-Companions-Philosophy/dp/0521645719?&linkCode=ll1&tag=philosophybre-20&linkId=37af025550e10ab032789360257dd37e&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Hannah Arendt</a> is a collection of highly illuminating academic essays on various aspects of Arendt’s thought. The essays cover ground from Arendt’s views on totalitarianism and her idea of the <Link to="/articles/hannah-arendt-on-standing-up-to-the-banality-of-evil/">banality of evil</Link>, to her final reflections on judgment and the life of the mind.</p>
              <p>A brilliant and deeply thoughtful collection, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Cambridge-Companion-Hannah-Companions-Philosophy/dp/0521645719?&linkCode=ll1&tag=philosophybre-20&linkId=37af025550e10ab032789360257dd37e&language=en_US&ref_=as_li_ss_tl">The Cambridge Companion to Hannah Arendt</a> belongs on the bookshelf of any aspiring Arendt scholar.</p>
              

              <h2>3. The Origins of Totalitarianism, by Hannah Arendt</h2>
              <BookLink title="The Origins of Totalitarianism" author="Hannah Arendt" link="http://www.amazon.com/Origins-Totalitarianism-Hannah-Arendt/dp/0156701537?&linkCode=ll1&tag=philosophybre-20&linkId=d6fbb6fe72aeb1890c75bfc94d725741&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>Exploring the institutions, operations, and techniques of totalitarian movements, Arendt’s 1951 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Origins-Totalitarianism-Hannah-Arendt/dp/0156701537?&linkCode=ll1&tag=philosophybre-20&linkId=d6fbb6fe72aeb1890c75bfc94d725741&language=en_US&ref_=as_li_ss_tl">The Origins of Totalitarianism</a> (her first major work, which also features as an essential book on our <Link to="/reading-lists/political-philosophy/">political philosophy reading list</Link>) focuses on two genuine forms of totalitarian government in our recent history — Nazi Germany and Stalinist Russia — which she shrewdly establishes as two sides of the same coin, rather than opposing philosophies of Right and Left.</p>
              <p>Covering the role of propaganda, the use of fear, and the nature of isolation and loneliness as preconditions for totalitarian rule — the insights in Arendt’s tour de force are as piercing and relevant today as ever before, rendering <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Origins-Totalitarianism-Hannah-Arendt/dp/0156701537?&linkCode=ll1&tag=philosophybre-20&linkId=d6fbb6fe72aeb1890c75bfc94d725741&language=en_US&ref_=as_li_ss_tl">The Origins of Totalitarianism</a> utterly essential for anyone interested in political philosophy and its real-world application.</p>
              

              <h2>4. The Human Condition, by Hannah Arendt</h2>
              <BookLink title="The Human Condition" author="Hannah Arendt" link="http://www.amazon.com/Human-Condition-Second-Hannah-Arendt/dp/022658660X?&linkCode=ll1&tag=philosophybre-20&linkId=7321cdd3b81c6cde4ac4db11edb875f2&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Arendt’s 1958 work <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Human-Condition-Second-Hannah-Arendt/dp/022658660X?&linkCode=ll1&tag=philosophybre-20&linkId=7321cdd3b81c6cde4ac4db11edb875f2&language=en_US&ref_=as_li_ss_tl">The Human Condition</a> examines exactly what you’d expect from the title: the state of modern humanity. In her brilliantly novel critique, <Link to="/articles/hannah-arendt-on-the-human-condition-productivity-will-replace-meaning/">Arendt suggests society will become stuck in accelerating cycles of labor and consumption</Link>. Free human action will be replaced by instrumentalization, and meaning will be replaced by productivity…</p>
              <p>Packed full of startlingly original insights, the problems Arendt identified then — diminishing agency and political freedom, the dangers of unsupervised technological advancement — continue to confront us today, making this magnificent work as timely as ever.</p>
              <p>A classic in social theory, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Human-Condition-Second-Hannah-Arendt/dp/022658660X?&linkCode=ll1&tag=philosophybre-20&linkId=7321cdd3b81c6cde4ac4db11edb875f2&language=en_US&ref_=as_li_ss_tl">The Human Condition</a> is a must-read for anyone interested in Arendt.</p>
              

              <h2>5. Eichmann in Jerusalem: A Report on the Banality of Evil, by Hannah Arendt</h2>
              <BookLink title="Eichmann in Jerusalem: A Report on the Banality of Evil" author="Hannah Arendt" link="http://www.amazon.com/Eichmann-Jerusalem-Banality-Penguin-Classics/dp/0143039881?&linkCode=ll1&tag=philosophybre-20&linkId=e3f3ed28ab1f9d2bb743074f89af80d7&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
              <p>For one of her journalistic postings, Arendt covered the trial of Nazi war criminal Adolf Eichmann. In her report for The New Yorker, and later published in her 1963 book <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Eichmann-Jerusalem-Banality-Penguin-Classics/dp/0143039881?&linkCode=ll1&tag=philosophybre-20&linkId=e3f3ed28ab1f9d2bb743074f89af80d7&language=en_US&ref_=as_li_ss_tl">Eichmann in Jerusalem: A Report on the Banality of Evil</a>, Arendt expressed how disturbed she was by Eichmann — but for reasons that might not be expected.</p>
              <p>Far from the monster she thought he’d be, Eichmann was instead a rather bland, “terrifyingly normal” bureaucrat. He carried out his murderous role with calm efficiency not due to an abhorrent, warped mindset, but because he’d absorbed the principles of the Nazi regime so unquestionably, he simply wanted to further his career and climb its ladders of power.</p>
              <p>Eichmann embodied “the dilemma between the unspeakable horror of the deeds and the undeniable ludicrousness of the man who perpetrated them.” His actions were defined not so much by thought, but by the <i>absence</i> of thought — convincing Arendt of the <Link to="/articles/hannah-arendt-on-standing-up-to-the-banality-of-evil/">‘banality of evil.’</Link></p>
              <p>A controversial and fascinating work, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Eichmann-Jerusalem-Banality-Penguin-Classics/dp/0143039881?&linkCode=ll1&tag=philosophybre-20&linkId=e3f3ed28ab1f9d2bb743074f89af80d7&language=en_US&ref_=as_li_ss_tl">Eichmann in Jerusalem: A Report on the Banality of Evil</a> is an essential book for those interested in understanding more about Arendt’s views on how something like the Holocaust could happen.</p>
              

              <h2>6. Thinking Without a Banister: Essays in Understanding, by Hannah Arendt</h2>
              <BookLink title="Thinking Without a Banister: Essays in Understanding" author="Hannah Arendt" link="http://www.amazon.com/Thinking-Without-Banister-Understanding-1953-1975/dp/0805211659?&linkCode=ll1&tag=philosophybre-20&linkId=063cc1d9f52d6289eb6c0a36c7cd69be&language=en_US&ref_=as_li_ss_tl" img={data.six.childImageSharp.gatsbyImageData} />
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Thinking-Without-Banister-Understanding-1953-1975/dp/0805211659?&linkCode=ll1&tag=philosophybre-20&linkId=063cc1d9f52d6289eb6c0a36c7cd69be&language=en_US&ref_=as_li_ss_tl">Thinking Without a Banister: Essays in Understanding</a> is a collection of essays, letters, and unpublished writings Arendt wrote from 1953 until her death in 1975.</p>
              <p>The title of the collection refers to Arendt’s description of her experience of thinking, an activity in which she partook subversively without any of the traditional religious, political, or philosophical pillars of support.</p>
              <p>Containing a thoughtful mix of Arendt’s views, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Thinking-Without-Banister-Understanding-1953-1975/dp/0805211659?&linkCode=ll1&tag=philosophybre-20&linkId=063cc1d9f52d6289eb6c0a36c7cd69be&language=en_US&ref_=as_li_ss_tl">Thinking Without a Banister: Essays in Understanding</a> provides a wonderful overview of the great philosopher’s ideas.</p>
              
              
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
  title: file(relativePath: {eq: "rl2.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, quality: 100)
    }
  }
  one: file(relativePath: {eq: "arendt-bio.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "arendt-companion.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "arendt-total.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "arendt-human.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "arendt-banality.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "arendt-thinking.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList