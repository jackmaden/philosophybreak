import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"

import SEO from '../../../components/SEO'
import Layout from '../../../components/layout'
import { Navigation } from "../../../components/navigation"
import { ScrollProgressBar } from '../../../components/scrollProgressBar'
import TitleReadingList from '../../../components/titleReadingList'
import BookLink from '../../../components/bookLink'
import CtaReadingList from "../../../components/ctaReadingList"
import PostReadingList from "../../../components/postReadingList"
import MailchimpPopUp from "../../../components/mailchimpPopUp"

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
      <>
      <SEO title="An Introduction to Philosophy – The Top 5 Books to Read" description="A curated reading list of the best and most essential introductions to the fascinating subject of philosophy." image={imagePath} pathname={location.pathname} />
      <MailchimpPopUp />
      <Layout>
      <Navigation />
          <ScrollProgressBar />
          {/*reading list title*/}
          <TitleReadingList title="An Introduction to Philosophy" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Introduction to Philosophy" />
          
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">P</span>hilosophy literally means ‘love of wisdom’, but defining it beyond this becomes a little tricky (for a fuller exploration, see <Link to="/what-is-philosophy-why-is-it-important-today/">our quick guide to what philosophy is and why it's important today</Link>). In a nutshell, philosophy concerns itself with deep, fundamental questions: from how best we should live our lives, to the basic nature of the worlds we live in. But within this nutshell resides a whole universe of feeling, reason, and meaning. Considering such mammoth subject matter, it's difficult to know where to start.</p>
              <p>But fear not! This reading list contains the best general introductions to philosophy. Each book discusses the enduring questions philosophers have tackled throughout history — questions you have probably wondered about yourself. You know the ones. Why are we here? What's the right thing to do? What's the meaning of life?</p>
              <p>The aim of philosophy is not necessarily to give you the answers to these questions, but rather to equip you with the right tools to perform your own investigation — and discover the answers for yourself. By introducing the approaches of philosophy's best minds, the books on this list set you on that path.</p>

              <h2>1. What Does It All Mean? By Thomas Nagel</h2>
              <p>Thomas Nagel is the brilliant contemporary philosopher behind <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1107604710/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107604710&linkId=1f732b4938e1eec1b5fabe47e91eaf5c">Mortal Questions</a> and <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0195056442/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195056442&linkId=280802512d39c50eabdfd0e9138ba158">The View From Nowhere</a>. Written in 1987, Nagel’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0195052161/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195052161&linkId=37e9c1b9904009913b6ab114bca378f7">What Does It All Mean?</a> is a lucid and accessible introduction to philosophy, setting forth the central problems of philosophical inquiry for beginners. A slim book at just over 100 pages, Nagel covers free will, right and wrong, death, language, the meaning of life and other core topics in clear, illuminating language that anyone interested in philosophy would strongly benefit from reading.</p>
              <BookLink title="What Does It All Mean?" author="Thomas Nagel" link="http://www.amazon.com/gp/product/0195052161/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195052161&linkId=37e9c1b9904009913b6ab114bca378f7" img={data.one.childImageSharp.gatsbyImageData} />

              <h2>2. Life’s Big Questions, by Philosophy Break</h2>
              <p><Link to="/lifes-big-questions/">Life's Big Questions</Link> distills philosophy's best answers to some of life's most troubling questions, taking you on a whirlwind journey of reflection, understanding, and discovery. Why does anything exist? Is the world around us ‘real’? What makes us conscious? Do we have free will? How should we approach life? Packed full of wisdom from the greatest philosophical minds of the last few millennia, reading materials are delivered direct to your inbox over five days, accessible forever from any device. Of course, we're a little biased, as we produced this one — but if you're seeking to understand the fundamentals of philosophy, and obtain a solid grounding for exactly where you can go to learn more, <Link to="/lifes-big-questions/">Life's Big Questions</Link> gets rave reviews, and might be just what you're looking for!</p>
              <div className="article white">
                  <Link to="/lifes-big-questions/">
                      <GatsbyImage
                          image={data.lbq.childImageSharp.gatsbyImageData}
                          alt="Introduction to Philosophy: Life’s Big Questions" />
                      <div className="article-info">
                          <h2>Introduction to Philosophy: Life’s Big Questions</h2>
                          <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BY PHILOSOPHY BREAK</p>
                          <Link to="/lifes-big-questions/" className="primary button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>Learn More</Link>
                      </div>
                  </Link>
              </div>

              <h2>3. The Problems of Philosophy, by Bertrand Russell</h2>
              <p>Bertrand Russell was a towering figure of the 20th century. Though <Link to="/reading-lists/history-of-western-philosophy">The History of Western Philosophy</Link> is perhaps his better-known work for the general reader, Russell wrote <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1724202359/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1724202359&linkId=fe8466982d5b2c4a09e08c55e2888043">The Problems of Philosophy</a> in 1912 as a short, accessible introduction to the subject. He presents philosophy in engaging and relevant ways that ignite the curiosity of the reader. This book can be enjoyed in an evening, and — spoiler alert — you’ll never look at tables the same way again.</p>
              <BookLink title="The Problems of Philosophy" author="Bertrand Russell" link="http://www.amazon.com/gp/product/1724202359/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1724202359&linkId=fe8466982d5b2c4a09e08c55e2888043" img={data.two.childImageSharp.gatsbyImageData} />

              <h2>4. Think: A Compelling Introduction to Philosophy, by Simon Blackburn</h2>
              <p>Published in 1999, this wonderfully-written book begins with contemporary philosopher Simon Blackburn's rallying cry for the study of philosophy, before diving into discussion of the key philosophical themes and thinkers throughout history. The most in-depth entry on this list, each chapter of <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0192854259/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192854259&linkId=aacd3717b10ac108a1e91a38ee9c8bd1">Think</a> acts as a self-contained guide on subjects ranging from skepticism and ethics, to self-identity and God. You can thus take it all in in bitesize chunks, issue by issue, chapter by chapter.</p>
              <BookLink title="Think: A Compelling Introduction to Philosophy" author="Simon Blackburn" link="http://www.amazon.com/gp/product/0192854259/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192854259&linkId=aacd3717b10ac108a1e91a38ee9c8bd1" img={data.three.childImageSharp.gatsbyImageData} />

              <h2>5. Philosophy: The Basics, by Nigel Warburton</h2>
              <p>Nigel Warburton’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0415693160/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415693160&linkId=6e061c28ecb96eb999ad0b09ed1b0ef9">Philosophy: The Basics</a> is ideal for a general overview of the main arguments in philosophy. First published in 1992, and now in its fifth edition, Warburton’s book gently eases the reader into the world of philosophy, touching all the big issues like God, science, art, and morality through easy-to-understand and powerful analogies.</p>
              <BookLink title="Philosophy: The Basics" author="Nigel Warburton" link="http://www.amazon.com/gp/product/0415693160/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415693160&linkId=6e061c28ecb96eb999ad0b09ed1b0ef9" img={data.four.childImageSharp.gatsbyImageData} />
              
              <h2>Further reading</h2>
              <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">on Instagram</a>.</p>
              <CtaReadingList />
          </div>
          
          {/*post reading list*/}
          <PostReadingList />

      </Layout>
      </>
  )
}

export const query = graphql`{
  title: file(relativePath: {eq: "introduction.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "introductionnagel.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  lbq: file(relativePath: {eq: "Chapter1-full.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
  two: file(relativePath: {eq: "introductionrussell.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "introductionblackburn.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "introductionwarburton.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  philosophybreak: file(relativePath: {eq: "philosophybreak.png"}) {
    childImageSharp {
      gatsbyImageData(width: 22, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList