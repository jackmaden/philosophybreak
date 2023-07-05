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
    <Seo title="Karl Marx Reading List – The Best 6 Books to Read" description="A curated reading list of the best books on and by the philosopher and economist Karl Marx." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Karl Marx" number="6" img={data.title.childImageSharp.gatsbyImageData} alt="Karl Marx" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

              <p><span className="big-letter">K</span>arl Marx (1818 - 1883) was a German philosopher and economist whose influence on the politics and ideas of the centuries following him was (and remains) profound. Marx’s original writings and analyses led to the <Link to="/reading-lists/political-philosophy/">political philosophy</Link> of Marxism, which in the years since Marx’s death has developed into a number of different strands and interpretations.</p>

              <p>Marx is perhaps best known for his sustained critique of capitalism and the concept of private property. Marx’s critique was based around the idea that, because the ruling classes (bourgeoisie) control the means of production, and the working classes (proletariat) must sell their time to service these means, class conflict is inevitable. As an alternative, Marx advocated for the common ownership of the means of production to establish a classless, communist society.</p>

              <p>This reading list consists of the best books on and by Karl Marx, as well as the Marxist political philosophy that followed. After reading the books on this list, you’ll understand exactly who Marx was, what Marxism is, and why both remain so influential today.
              </p>

              <h2>1. Marx: A Very Short Introduction, by Peter Singer</h2>
              <BookLink title="Marx: A Very Short Introduction" author="Peter Singer" link="http://www.amazon.com/Marx-Very-Short-Introduction-Introductions/dp/0198821077?&linkCode=ll1&tag=philosophybre-20&linkId=95e49060364c8c2224ca8b30df046612&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>Famed contemporary philosopher Peter Singer’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Marx-Very-Short-Introduction-Introductions/dp/0198821077?&linkCode=ll1&tag=philosophybre-20&linkId=95e49060364c8c2224ca8b30df046612&language=en_US&ref_=as_li_ss_tl">Marx: A Very Short Introduction</a> is a fantastic place to start for anyone with a budding interest in Karl Marx or Marxism generally. Considering the sheer breadth and depth of Marx’s thinking, Singer does an admirable job in providing an illuminating overview of his life and most important ideas – including those on alienation, historical materialism, and his economic theory. Singer also provides helpful background to contextualize Marx’s work, and makes clear why his influence continues to be so enduring. Coming in at an accessible 152 pages, this is a very nice entry point to Marx.</p>
              

              <h2>2. Why Marx Was Right, by Terry Eagleton</h2>
              <BookLink title="Why Marx Was Right" author="Terry Eagleton" link="http://www.amazon.com/Why-Marx-Right-Terry-Eagleton/dp/0300231067?&linkCode=ll1&tag=philosophybre-20&linkId=db0cfc6ee36e10ee118d0496e7de1bfb&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />
              <p>In his accessible 2011 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Why-Marx-Right-Terry-Eagleton/dp/0300231067?&linkCode=ll1&tag=philosophybre-20&linkId=db0cfc6ee36e10ee118d0496e7de1bfb&language=en_US&ref_=as_li_ss_tl">Why Marx Was Right</a>, popular literary theorist Terry Eagleton takes common criticisms of Marxism and shows why they are often based on misconceptions of what Marxism actually is, and aims to demonstrate how Marxist critiques of capitalism are as alive and relevant today as ever before. This book thus doubles as an introductory clarification on exactly what Marxism entails, as well as a deeper discussion of its most common critiques. Eagleton writes engagingly with wit and intelligence, making this a great addition to the bookshelf of anyone interested in learning more about Marx and Marxism.</p>

              <BigSubscribe />
              
              
              <h2>3. Karl Marx: Greatness and Illusion, by Gareth Stedman Jones</h2>
              <BookLink title="Karl Marx: Greatness and Illusion" author="Gareth Stedman Jones" link="http://www.amazon.com/Karl-Marx-Gareth-Stedman-Jones/dp/0674971612?&linkCode=ll1&tag=philosophybre-20&linkId=7a89404d275901ac2e5b730529ca6aee&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>If you’re seeking to dive a little deeper with your Marx scholarship, consider Gareth Stedman Jones’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Karl-Marx-Gareth-Stedman-Jones/dp/0674971612?&linkCode=ll1&tag=philosophybre-20&linkId=7a89404d275901ac2e5b730529ca6aee&language=en_US&ref_=as_li_ss_tl">Karl Marx: Greatness and Illusion</a>, first published in 2016. In this philosophical biography, Stedman Jones brings to life the tumultuous times that shaped Marx as a thinker, providing a thorough, dispassionate, very well-researched analysis of his life and work. <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Karl-Marx-Gareth-Stedman-Jones/dp/0674971612?&linkCode=ll1&tag=philosophybre-20&linkId=7a89404d275901ac2e5b730529ca6aee&language=en_US&ref_=as_li_ss_tl">Karl Marx: Greatness and Illusion</a> gives the reader full understanding of how Marx used the influence of thinkers like <Link to="/reading-lists/immanuel-kant/">Immanuel Kant</Link>, Hegel, and Feuerbach to fashion a political philosophy that left an unprecedented impact on the twentieth century. With its 768 pages packed full of insight, this book is a brilliant accompaniment for those seeking a deeper understanding of Marx’s life and work. (Special mention must also be made to Jonathon Sperber’s 2013 Marx biography, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Karl-Marx-A-Nineteenth-Century-Life/dp/B00COSOBU6?&linkCode=ll1&tag=philosophybre-20&linkId=bb2cf7977ecbcd433d439835a037c8c7&language=en_US&ref_=as_li_ss_tl">Karl Marx: A Nineteenth-Century Life</a>, which also does a fantastic job in contextualizing and humanizing the life Marx led, though perhaps doesn’t go as deep in its analysis of Marx’s philosophical ideas). </p>
              

              <h2>4. Main Currents of Marxism, by Leszek Kolakowski</h2>
              <BookLink title="Main Currents of Marxism" author="Leszek Kolakowski" link="http://www.amazon.com/Main-Currents-Marxism-Founders-Breakdown/dp/0393329437?&linkCode=ll1&tag=philosophybre-20&linkId=bca20e14e5eaa608d80c636d0607c312&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />
              <p>If you’re looking to understand not just Marx but all the subsequent strands of Marxist thought, look no further than renowned philosopher Leszek Kolakowski’s epic 1976 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Main-Currents-Marxism-Founders-Breakdown/dp/0393329437?&linkCode=ll1&tag=philosophybre-20&linkId=bca20e14e5eaa608d80c636d0607c312&language=en_US&ref_=as_li_ss_tl">Main Currents of Marxism</a>, consisting of three volumes that investigate the entire history of Marx and Marxism (‘The Founders’, ‘The Golden Age’, and ‘The Breakdown’). This brilliant book is rightly recognized as one of the most important scholarly works on Marxism ever written, analyzing its origins, structure, and posthumous development with nuance and precision. At 1,312 pages, this wonderfully-researched history of Marxism is a beast — but you won’t need another.</p>
              

              <h2>5. The Communist Manifesto, by Karl Marx and Friedrich Engels</h2>
              <BookLink title="The Communist Manifesto" author="Karl Marx and Friedrich Engels" link="http://www.amazon.com/Communist-Manifesto-Penguin-Classics/dp/0140447571?&linkCode=ll1&tag=philosophybre-20&linkId=a65df6ba737406a67b2896291be51856&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />
              <p>Turning from introductions to primary texts, where better to start than with the book that cemented Marx’s name into human history? Published on the eve of the 1848 European revolutions, Marx and Engels’ short yet forceful <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Communist-Manifesto-Penguin-Classics/dp/0140447571?&linkCode=ll1&tag=philosophybre-20&linkId=a65df6ba737406a67b2896291be51856&language=en_US&ref_=as_li_ss_tl">The Communist Manifesto</a> closes with the following infamous lines: “Let the ruling classes tremble at a Communistic revolution. The proletarians have nothing to lose but their chains. They have a world to win.” This powerful work distills Marx and Engels’ economic principles, and whether you agree or disagree with their arguments, their passionate writing makes for an engaging, accessible read — and is essential for students of Marx and Marxism. </p>
              

              <h2>6. Das Kapital, by Karl Marx</h2>
              <BookLink title="Das Kapital" author="Karl Marx" link="http://www.amazon.com/Capital-Critique-Political-Economy-Classics/dp/0140445684?&linkCode=ll1&tag=philosophybre-20&linkId=fe095c562e5a0e8480dbf00fcd32a9dd&language=en_US&ref_=as_li_ss_tl" img={data.six.childImageSharp.gatsbyImageData} />
              <p>The more thorough, complex, and detailed blueprint for Marxist thinking, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Capital-Critique-Political-Economy-Classics/dp/0140445684?&linkCode=ll1&tag=philosophybre-20&linkId=fe095c562e5a0e8480dbf00fcd32a9dd&language=en_US&ref_=as_li_ss_tl">Das Kapital</a> is Marx’s 1867 magnum opus. He builds out a sustained critique of capitalism and private property, and asserts his vision for a system of common ownership of the means of production — a communist society built around the maxim, “from each according to his ability, to each according to his need.” One of the most important works of political philosophy in history, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Capital-Critique-Political-Economy-Classics/dp/0140445684?&linkCode=ll1&tag=philosophybre-20&linkId=fe095c562e5a0e8480dbf00fcd32a9dd&language=en_US&ref_=as_li_ss_tl">Das Kapital</a> consists of multiple volumes. This particular edition covers the first volume, and belongs on the bookshelf of any aspiring Marx scholar.</p>
              
              
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
  title: file(relativePath: {eq: "marx.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "marx-singer.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "marx-eagle.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "marx-stedman.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "marx-main.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "marx-communist.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "marx-kapital.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList