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
    <Seo title="Albert Camus Reading List – The Best 5 Books to Read" description="A curated reading list of the most essential books by Albert Camus, including The Myth of Sisyphus, The Stranger, and more." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Albert Camus" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Albert Camus" />
        
        {/*container for sidebar*/}
        <div id="container">
            
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">A</span>lbert Camus was a French thinker who, while associated with the 20th-century <Link to="/reading-lists/existentialism/">existentialist movement</Link> in philosophy, never accepted ‘existentialist’ as an appropriate description of nor label for his works.</p> 
              
              <p>Camus has instead come to be thought of as an ‘absurdist’, focusing as he does on exposing the absurd nature of the human condition (for more on absurdism, see our short explainer piece on <Link to="/articles/absurdity-with-camus/">how Camus defines absurdity</Link>, as well as <Link to="/articles/thomas-nagel-why-humor-best-stance-towards-life-absurdity/">Thomas Nagel’s critique of Camus’ position</Link>). </p>

              <p>Regardless of the label we use to describe him, there is no question that Camus and his ideas — exploring themes of nihilism, alienation, and the search for meaning — have been deeply influential in the decades since the French writer’s untimely death in 1960.</p>    

              <p>This reading list consists of the best books by Albert Camus. After reading the books listed, you’ll understand exactly why this great thinker was awarded the 1957 Nobel Prize in Literature at the age of just 44 (the second-youngest recpient ever).</p> 
              
              <p>Let’s dive in!</p>

              
              <h2>1. The Myth of Sisyphus, by Albert Camus</h2>
              <BookLink title="The Myth of Sisyphus" author="Albert Camus" link="http://www.amazon.com/Myth-Sisyphus-Vintage-International/dp/0525564454?&linkCode=ll1&tag=philosophybre-20&linkId=aa09a46074b4beeac970a20aac8dd1f2&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Camus’ famous 1942 essay <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Myth-Sisyphus-Vintage-International/dp/0525564454?&linkCode=ll1&tag=philosophybre-20&linkId=aa09a46074b4beeac970a20aac8dd1f2&language=en_US&ref_=as_li_ss_tl">The Myth of Sisyphus</a> is his rallying cry for coping with life in an absurd universe devoid of meaning.</p>
              <p>Camus compares our existential situation to that of Sisyphus, the unlucky protagonist in the ancient Greek myth who is condemned for all eternity to push a boulder up a mountain, only for it to roll back down when it reaches the top.</p>
              <p>However, despite the absurdity and apparent pointlessness of this situation, Camus argues that by facing up to it squarely and ridding ourselves of comforting myths or delusions, we can find ways to be happy and live lives full of beauty and meaning (more on this in our short explainer piece on <Link to="/articles/absurdity-with-camus/">Camus and absurdity</Link>).</p>
              <p>The <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Myth-Sisyphus-Vintage-International/dp/0525564454?&linkCode=ll1&tag=philosophybre-20&linkId=aa09a46074b4beeac970a20aac8dd1f2&language=en_US&ref_=as_li_ss_tl">Myth of Sisyphus</a> has been a hugely influential essay, and is a great place to start if you’re interested in learning more about Camus’ philosophical ideas.</p>

              <h2>2. The Stranger, by Albert Camus</h2>
              <BookLink title="The Stranger" author="Albert Camus" link="http://www.amazon.com/Stranger-Albert-Camus/dp/0679720200?&linkCode=ll1&tag=philosophybre-20&linkId=b8d84f9723ddd197f1acb77526bbf345&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>Perhaps Camus’ most famous work of fiction, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Stranger-Albert-Camus/dp/0679720200?&linkCode=ll1&tag=philosophybre-20&linkId=b8d84f9723ddd197f1acb77526bbf345&language=en_US&ref_=as_li_ss_tl">The Stranger</a> (1942) explores the absurdist themes developed in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Myth-Sisyphus-Vintage-International/dp/0525564454?&linkCode=ll1&tag=philosophybre-20&linkId=aa09a46074b4beeac970a20aac8dd1f2&language=en_US&ref_=as_li_ss_tl">The Myth of Sisyphus</a> through the story of Meursault, a French settler living in Algeria.</p>
              <p>Seemingly detached from the society in which he participates, Meursault becomes involved in a series of senseless events through which Camus explores (in his own words) “the nakedness of man faced with the absurd.”</p>
              <p>Considered a classic of 20th-century literature, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Stranger-Albert-Camus/dp/0679720200?&linkCode=ll1&tag=philosophybre-20&linkId=b8d84f9723ddd197f1acb77526bbf345&language=en_US&ref_=as_li_ss_tl">The Stranger</a> is a must-read for anyone interested in Camus or absurdism generally.</p>
              
              <BigSubscribe />

              <h2>3. The Plague, by Albert Camus</h2>
              <BookLink title="The Plague" author="Albert Camus" link="http://www.amazon.com/Plague-Albert-Camus/dp/0679720219?&linkCode=ll1&tag=philosophybre-20&linkId=c48515945cfdb59f19936829491d0818&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>“What we learn in times of pestilence: that there are more things to admire in men than to despise.” In his novel <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Plague-Albert-Camus/dp/0679720219?&linkCode=ll1&tag=philosophybre-20&linkId=c48515945cfdb59f19936829491d0818&language=en_US&ref_=as_li_ss_tl">The Plague</a>, Camus tells the story of a plague sweeping the French Algerian city of Oran, and frames the various ways in which the townspeople respond.</p>
              <p>Some resign themselves, some seek to blame others, and some resist. A big hit upon its publication in 1947, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Plague-Albert-Camus/dp/0679720219?&linkCode=ll1&tag=philosophybre-20&linkId=c48515945cfdb59f19936829491d0818&language=en_US&ref_=as_li_ss_tl">The Plague</a> is in part Camus’ allegory for the Nazi occupration of France, and explores the full spectrum of emotions and coping mechanisms on show when people are faced with the precariousness of their existence.</p>
              <p>Apt too for the times we lived through with Covid-19, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Plague-Albert-Camus/dp/0679720219?&linkCode=ll1&tag=philosophybre-20&linkId=c48515945cfdb59f19936829491d0818&language=en_US&ref_=as_li_ss_tl">The Plague</a> is a brilliant read for those interested in learning more about Camus’ ideas.</p>
              

              <h2>4. The Rebel, by Albert Camus</h2>
              <BookLink title="The Rebel" author="Albert Camus" link="http://www.amazon.com/Rebel-Essay-Man-Revolt/dp/0679733841?&linkCode=ll1&tag=philosophybre-20&linkId=c94797d7fffc9f15da0848ad0a3c2b12&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />
              <p>Back to non-fiction, and <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Rebel-Essay-Man-Revolt/dp/0679733841?&linkCode=ll1&tag=philosophybre-20&linkId=c94797d7fffc9f15da0848ad0a3c2b12&language=en_US&ref_=as_li_ss_tl">The Rebel</a> — a book-length essay published in 1951 — is Camus’ most academic work. In it, Camus explores the historical, political, and literary influences that shape our world and values.</p>
              <p>Examining our urge to revolt and laying out his philosophical ideas with force, he declares that “real generosity towards the future lies in giving all to the present, and the task that’s before us is to transcend nihilism and to imbue meaning back into the world. But the challenge is that few of us know that that’s what we’re supposed to be doing.”</p>
              <p>A denser read than his other works, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Rebel-Essay-Man-Revolt/dp/0679733841?&linkCode=ll1&tag=philosophybre-20&linkId=c94797d7fffc9f15da0848ad0a3c2b12&language=en_US&ref_=as_li_ss_tl">The Rebel</a> belongs on the bookshelf of anyone interested in exploring Camus’ philosophical ideas more deeply.</p>
              

              <h2>5. The Fall, by Albert Camus</h2>
              <BookLink title="The Fall" author="Albert Camus" link="http://www.amazon.com/Fall-Albert-Camus/dp/0679720227?&linkCode=ll1&tag=philosophybre-20&linkId=b99f3d176c805ff99b4f16b189164347&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
              <p>First published in 1956, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Fall-Albert-Camus/dp/0679720227?&linkCode=ll1&tag=philosophybre-20&linkId=b99f3d176c805ff99b4f16b189164347&language=en_US&ref_=as_li_ss_tl">The Fall</a> is Camus’ last complete work of fiction before his untimely death in 1960.</p>
              <p>Consisting of a series of dramatic monologues, the protagonist in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Fall-Albert-Camus/dp/0679720227?&linkCode=ll1&tag=philosophybre-20&linkId=b99f3d176c805ff99b4f16b189164347&language=en_US&ref_=as_li_ss_tl">The Fall</a> reflects on his life to a stranger, touching on typical Camus themes like nihilism, the hollowness of existence, and absurdity.</p>
              <p>Brilliantly written and emphasizing the responsibility we each have for shaping and lending meaning to our existences, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Fall-Albert-Camus/dp/0679720227?&linkCode=ll1&tag=philosophybre-20&linkId=b99f3d176c805ff99b4f16b189164347&language=en_US&ref_=as_li_ss_tl">The Fall</a> is a must-read for anyone curious about Camus.</p>
              
              
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
  title: file(relativePath: {eq: "camus.webp"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "camus-myth.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "camus-stranger.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "camus-plague.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "camus-rebel.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "camus-fall.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList