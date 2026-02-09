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
    <Seo title="Free Will Reading List – The Best 7 Books to Read" description="A curated reading list of the most essential books of and about free will, exploring whether our actions are free, pre-determined, or something in between." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Free Will" number="7" img={data.title.childImageSharp.gatsbyImageData} alt="Fruit and Book, by Juan Gris" />

        {/*container for sidebar*/}
        <div id="container">
          
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">A</span>re we free to do as we please? Or is the freedom of choice we feel in our day-to-day lives a mere illusion? Is every action and circumstance predetermined? Or can our wills transcend the past to actively shape the future? Does determinism, the theory that everything is determined by pre-existing causes, render our conceptions of free will and individual responsibility redundant? Or are such conceptions compatible with a deterministic world?</p> 
              <p>These types of questions form the basis of the philosophical quandary of free will. And the stakes are high: if it turns out we have no freedom in how we act, could we really blame people for bad behavior? Could we hold criminals to account, if they had no option but to act criminally? Would systems of <Link to="/reading-lists/ethics-and-morality/">ethics and morality</Link> have any justification at all?</p>
              <p>While there's increasing clamor from <Link to="/articles/free-will-illusion-sam-harris/">voices in neuroscience that free will is an illusion</Link>, rescuing our conception of free will from the onslaught of a deterministic universe has been a favored pastime of many a thinker throughout the history of philosophy. (Consider: <Link to="/articles/do-neurons-push-thoughts-around-or-do-thoughts-push-neurons-around/">do neurons push thoughts around? Or do thoughts push neurons around?</Link>) Indeed, a favorite answer to the free will debate for many philosophers, for instance, is <Link to="/articles/compatibilism-philosophys-favorite-answer-to-the-free-will-debate/">compatibilism</Link>, which suggests determinism and free will are in fact compatible...</p>

              <BigSubscribe />
              
              <p>This reading list is designed to give you a well-rounded view of all the contemporary problems, theories, and debates about free will. After consuming it, you’ll be much clearer about what free will refers to, as well as the extent to which we can be said to exercise it.</p>

              <h2>1. Free Will: A Very Short Introduction, by Thomas Pink</h2>
              <BookLink title="Free Will: A Very Short Introduction" author="Thomas Pink" link="http://www.amazon.com/gp/product/0192853589/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192853589&linkId=a49336936f20d446a9474d7193137a54" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Published in 2004, British philosopher Thomas Pink’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0192853589/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192853589&linkId=a49336936f20d446a9474d7193137a54">Free Will: A Very Short Introduction</a> is a fantastic starting place for anyone curious about the free will debate in philosophy.</p>
              <p>Pink lays out the core arguments in highly readable style, with one important note being that Pink himself is sympathetic to a position not held by the majority of philosophers, which may unsettle some readers.</p>
              <p>Coming in at an accessible 132 pages, this is a nice entry point to free will, outlining the history and major discussion points of the debate.</p>
              

              <h2>2. The Oxford Handbook of Free Will, by Robert Kane</h2>
              <BookLink title="The Oxford Handbook of Free Will" author="Robert Kane" link="http://www.amazon.com/gp/product/0195399692/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195399692&linkId=6dcaf1db876f56077cdb38013e894e90" img={data.two.childImageSharp.gatsbyImageData} />
              <p>If you’re after a one-stop shop for all things free will, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0195399692/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195399692&linkId=6dcaf1db876f56077cdb38013e894e90">The Oxford Handbook of Free Will</a>, edited by American philosopher Robert Kane and published in 2011.</p>
              <p>Consisting of twenty-eight essays by prominent international scholars discussing free will’s relation to subjects across physics, neuroscience, cognitive science, psychology, and empirical philosophy, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0195399692/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195399692&linkId=6dcaf1db876f56077cdb38013e894e90">The Oxford Handbook of Free Will</a> features the best short-form writings on free will from the past forty years, paying special attention to the latest research from the twenty-first century.</p>
              <p>At 664 pages, this collection is substantial — but you won’t need another.</p>
              

              <h2>3. A Contemporary Introduction to Free Will, by Robert Kane</h2>
              <BookLink title="A Contemporary Introduction to Free Will" author="Robert Kane" link="http://www.amazon.com/gp/product/019514970X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019514970X&linkId=fe641fac1d526da87dd835088f275cda" img={data.three.childImageSharp.gatsbyImageData} />
              <p>If you’d prefer a more in-depth, guided tour through free will's nefarious subject matter, Kane’s 2005 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/019514970X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019514970X&linkId=fe641fac1d526da87dd835088f275cda">A Contemporary Introduction to Free Will</a> is a brilliant choice.</p>
              <p>Accessible to those with no background in the subject, Kane’s book offers a concise introduction to the history of the problem of free will, before diving into contemporary debates between compatibilists, incompatibilists, and libertarian theories.</p>
              <p>The text is packed full of compelling examples and challenging thought experiments, and serves as an ideal introduction for anyone interested in free will.</p>
              

              <h2>4. Four Views on Free Will, by Fischer, Kane, Pereboom & Vargas</h2>
              <BookLink title="Four Views on Free Will" author="Fischer, Kane, Pereboom & Vargas" link="http://www.amazon.com/gp/product/1405134860/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405134860&linkId=015ec118a1988cf2bb90e7657db3ead1" img={data.four.childImageSharp.gatsbyImageData} />
              <p>In the fascinating 2007 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1405134860/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405134860&linkId=015ec118a1988cf2bb90e7657db3ead1">Four Views on Free Will</a>, four well-known philosophers — John Fischer, Robert Kane, Derk Pereboom, and Manuel Vargas — each outline their particular views on free will, before directly responding to each other in a lively and engaging exchange.</p>
              <p>Their views cover most of the major tenable positions on free will, so in reading <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1405134860/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405134860&linkId=015ec118a1988cf2bb90e7657db3ead1">Four Views on Free Will</a> and examining each view in turn, you’ll come away with a better idea as to where you stand yourself.</p>
              

              <h2>5. Freedom and Belief, by Galen Strawson</h2>
              <BookLink title="Freedom and Belief" author="Galen Strawson" link="http://www.amazon.com/gp/product/0199247501/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199247501&linkId=3d743a2970f356789bf7c673f16a5456" img={data.five.childImageSharp.gatsbyImageData} />
              <p>It’s time to eviscerate free will with a couple of no-nonsense, hardline reads. First up, Galen Strawson’s 1986 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199247501/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199247501&linkId=3d743a2970f356789bf7c673f16a5456">Freedom and Belief</a> forcefully puts the philosophical case for there being no such thing as free will or true moral responsibility.</p>
              <p>Strawon comprehensively examines the logic behind the freedom we feel in making choices, controversially concluding that whether determinism is true or not, ultimate freedom is logically impossible.</p>
              <p>An honest and challenging work, Strawson’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199247501/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199247501&linkId=3d743a2970f356789bf7c673f16a5456">Freedom and Belief</a> is a stimulating read for any student of free will.</p>
              

              <h2>6. Free Will, by Sam Harris</h2>
              <BookLink title="Free Will" author="Sam Harris" link="http://www.amazon.com/gp/product/1451683405/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1451683405&linkId=ed858b1d2e18cc510c2064e2c1703b40" img={data.six.childImageSharp.gatsbyImageData} />
              <p>Next up in the free will knockout is neuroscientist Sam Harris’s 2012 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1451683405/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1451683405&linkId=ed858b1d2e18cc510c2064e2c1703b40">Free Will</a>. Though not a staunch philosophical classic, in that Harris focuses largely on studies from neuroscience and commonsense views of free will (as opposed to digging into the philosophical literature around what freedom entails), <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1451683405/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1451683405&linkId=ed858b1d2e18cc510c2064e2c1703b40">Free Will</a> is hugely persuasive, entertaining, and can be read quite easily in one sitting.</p>
              <p>For anyone looking for a quick and dirty route into the free will debate, this is most certainly it — if you don’t come away near-convinced that free will is an illusion, you’ll be full of bluster as to why it’s not.</p>
              

              <h2>7. Elbow Room: The Varieties of Free Will Worth Wanting, by Daniel Dennett</h2>
              <BookLink title="Elbow Room: The Varieties of Free Will Worth Wanting" author="Daniel Dennett" link="http://www.amazon.com/gp/product/0262527790/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0262527790&linkId=41bd97951358542fc5a55eb376c3f605" img={data.seven.childImageSharp.gatsbyImageData} />
              <p>Can American philosopher Daniel Dennett rescue our conception of free will from the arguments of hardline deniers like Strawson and Harris? That’s certainly what he sets out to do in his 1984 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0262527790/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0262527790&linkId=41bd97951358542fc5a55eb376c3f605">Elbow Room: The Varieties of Free Will Worth Wanting</a>.</p>
              <p>A witty and engaging read, in this landmark book Dennett makes a powerful case for compatibilism, arguing that the varieties of free will that underwrite moral and artistic responsibility are not threatened by determinism nor the findings of neuroscience — but rather contextualized by them.</p>
              <p>Disentangling errors in common thinking around free will, Dennett arms his readers with powerful ways to conceptualize the nuances of the debate.</p>
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0262527790/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0262527790&linkId=41bd97951358542fc5a55eb376c3f605">Elbow Room: The Varieties of Free Will Worth Wanting</a> is an essential read for anyone interested in free will, and if you enjoy it, it’s worth checking out Dennett’s 2004 work, the fantastically lucid <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0142003840/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0142003840&linkId=b9f560d5a9ab92ab1b48402f55794a73">Freedom Evolves</a>, in which he attempts to demonstrate how human freedom is baked into our biology. (See my full list of <Link to="/reading-lists/daniel-dennett-best-books/">Dennett's best books here</Link>.)</p>


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
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "freewill-pink.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "freewill-handbook.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "freewill-kane.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "freewill-four.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "freewill-strawson.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "freewill-harris.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "freewill-dennett.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList