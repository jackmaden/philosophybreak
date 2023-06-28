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

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Ayn Rand Reading List – The Best 5 Books to Read" description="A curated reading list of the best books on and by the controversial 20th-century writer Ayn Rand." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Ayn Rand" number="5" img={data.title.childImageSharp.gatsbyImageData} imgposition="image-top" alt="Ayn Rand" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">A</span>yn Rand (1905 - 1982) is the pen name of Alice O’Connor, a Russian-born American writer and thinker. Early on in her career, Rand wrote short stories, plays, and screenplays, and in her later novels and essays went on to develop a philosophical system — which she named ‘Objectivism’ — which includes an <Link to="/reading-lists/epistemology/">epistemology</Link>, <Link to="/reading-lists/political-philosophy/">political philosophy</Link>, and a theory of art.</p>

            <p>Rand’s Objectivist movement had a number of devoted followers. Her relationship with philosophy, however, was (and remains) rather controversial in that only a limited number of professional philosophers took her work seriously. This is due to the somewhat polemical style of her writing, and her rather cursory dismissal of other thinkers of the time.</p> 
                
            <p>Rand’s perceived lack of methodical rigor and philosophical engagement means her ideas have been rejected by some critics as mere ‘pseudo-philosophy’. Consequently, her influence in philosophy has been rather limited — though her novels, despite mixed critical reviews, continue to attract readers.</p>

            <p>This reading list consists of the best books on and by Ayn Rand. After reading the books on this list, you’ll understand exactly why her ideas (and her presentation of them) continue to generate interest and controversy today. Let’s dive in!</p>

            <h2>1. Ayn Rand and the World She Made, by Anne Conover Heller</h2>
            <BookLink title="Ayn Rand and the World She Made" author="Anne Conover Heller" link="http://www.amazon.com/Ayn-Rand-World-She-Made/dp/0385513992?&linkCode=ll1&tag=philosophybre-20&linkId=33d48c6104a2d74ff845dc3e4ac78c67&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
            <p>Anne Conover Heller’s brilliant and important 2009 biography of Ayn Rand outlines Rand’s life and work in detail. Extremely well researched, Heller’s book tells the story all the way from Rand’s childhood in Russia to her successes in America. While laying bare some of the more controversial and strange events that punctuated Rand’s life, Heller lets readers make up their own mind and come to their own judgments about Rand’s character and work. Essential for contextualizing Rand and the impact she’s had, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Ayn-Rand-World-She-Made/dp/0385513992?&linkCode=ll1&tag=philosophybre-20&linkId=33d48c6104a2d74ff845dc3e4ac78c67&language=en_US&ref_=as_li_ss_tl">Ayn Rand and the World She Made</a> is a fantastic and highly recommended place to start for anyone interested in the polarizing figure of Ayn Rand. Both those who condemn her and those who celebrate her will find value in it.</p>
            

            <h2>2. The Fountainhead, by Ayn Rand</h2>
            <BookLink title="The Fountainhead" author="Ayn Rand" link="http://www.amazon.com/Fountainhead-Ayn-Rand/dp/0141188626?&linkCode=ll1&tag=philosophybre-20&linkId=a4e92427cb50eae1a28a9d52ff9d7aa5&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
            <p>Turning to Rand’s fiction, and where better to start than with the book often lauded as her first critical success? Published in 1943, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Fountainhead-Ayn-Rand/dp/0141188626?&linkCode=ll1&tag=philosophybre-20&linkId=a4e92427cb50eae1a28a9d52ff9d7aa5&language=en_US&ref_=as_li_ss_tl">The Fountainhead</a> tells the tale of gifted young architect Howard Roark as he seeks to defy conformist public opinion with his works. This provocative novel makes the philosophy that underpins it clear: Rand believes individual ego is the fountainhead of progress, and that nothing should be allowed to stand in its way.</p>
            
            <BigSubscribe />
            
            <h2>3. Atlas Shrugged, by Ayn Rand</h2>
            <BookLink title="Atlas Shrugged" author="Ayn Rand" link="http://www.amazon.com/Atlas-Shrugged-Ayn-Rand/dp/0452011876?&linkCode=ll1&tag=philosophybre-20&linkId=ba5fbf7ac92584ef9b8565abbc42ee62&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
            <p>Perhaps the most famous of her fiction, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Atlas-Shrugged-Ayn-Rand/dp/0452011876?&linkCode=ll1&tag=philosophybre-20&linkId=ba5fbf7ac92584ef9b8565abbc42ee62&language=en_US&ref_=as_li_ss_tl">Atlas Shrugged</a> is commonly perceived to be Rand’s magnum opus, and is the fullest expression of her Objectivist philosophy in fiction. At over 1,000 pages, it is also her longest. Rand imagines what would happen if the ‘brains’ of the world, society’s core individual innovators, went on strike, and tells most of the story — and conveys the bulk of her philosophical ideas — through very long dialogues between characters. Published in 1957, this is Rand’s major statement against the communism of Soviet Russia, and a full-blooded defense of capitalism and individualist values. It’s essential reading for anyone looking to fully immerse themselves in Rand’s worldview, though due to its length, not for the faint-hearted.</p>
            

            <h2>4. The Virtue of Selfishness, by Ayn Rand</h2>
            <BookLink title="The Virtue of Selfishness" author="Ayn Rand" link="http://www.amazon.com/Virtue-Selfishness-Fiftieth-Anniversary/dp/0451163931?&linkCode=ll1&tag=philosophybre-20&linkId=84f36b080fb968e3acc92ddd6ee63a74&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />
            <p>If you’d prefer to understand Rand’s worldview through her essays rather than her fiction, then <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Virtue-Selfishness-Fiftieth-Anniversary/dp/0451163931?&linkCode=ll1&tag=philosophybre-20&linkId=84f36b080fb968e3acc92ddd6ee63a74&language=en_US&ref_=as_li_ss_tl">The Virtue of Selfishness</a> is a good place to start. Published in 1964, this short collection of essays outlines the moral principles of Rand’s Objectivism, defending what you’d imagine from the collection’s title: selfishness. Rand asks why human beings need morality, and argues altruism is incompatible with human nature. For a quick route into Rand’s thinking, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Virtue-Selfishness-Fiftieth-Anniversary/dp/0451163931?&linkCode=ll1&tag=philosophybre-20&linkId=84f36b080fb968e3acc92ddd6ee63a74&language=en_US&ref_=as_li_ss_tl">The Virtue of Selfishness</a> is an effective read.</p>
            

            <h2>5. Philosophy: Who Needs It, by Ayn Rand</h2>
            <BookLink title="Philosophy: Who Needs It" author="Ayn Rand" link="http://www.amazon.com/Philosophy-Who-Needs-Ayn-Rand/dp/0451138937?&linkCode=ll1&tag=philosophybre-20&linkId=a74452b0cbf158001db77aa75102a4e1&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
            <p>While her 1967 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/dp/0452010306?&linkCode=ll1&tag=philosophybre-20&linkId=daab6c4a03267f82d75bfd4cc4bb3b00&language=en_US&ref_=as_li_ss_tl">Introduction to Objectivist Epistemology</a> focuses more prominently on another important component of her thinking (i.e. her <Link to="/reading-lists/epistemology/">epistemology</Link>), it is Rand’s final collection of essays, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Philosophy-Who-Needs-Ayn-Rand/dp/0451138937?&linkCode=ll1&tag=philosophybre-20&linkId=a74452b0cbf158001db77aa75102a4e1&language=en_US&ref_=as_li_ss_tl">Philosophy: Who Needs It</a>, that offers a broader, more accessible overview of her philosophical ideas. Published posthomously in 1982, the essays were Rand’s last word, and cover her provocative thoughts on issues ranging from education and morality to censorship, inflation, and philosophy generally. If you want to understand certain strands of contemporary American political thinking and ideology, some of their roots can be found in this book.</p>
            
            
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
  title: file(relativePath: {eq: "rand.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "rand-world.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "rand-fountainhead.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "rand-atlas.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "rand-selfish.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "rand-philosophy.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList