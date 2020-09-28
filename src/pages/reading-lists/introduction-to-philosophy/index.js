import React from "react"
import { graphql, Link } from "gatsby"

import SEO from '../../../components/SEO'
import Layout from '../../../components/layout'
import { Navigation } from "../../../components/navigation"
import { ScrollProgressBar } from '../../../components/scrollProgressBar'
import TitleReadingList from '../../../components/titleReadingList'
import BookLink from '../../../components/bookLink'
import CtaReadingList from "../../../components/ctaReadingList"
import PostReadingList from "../../../components/postReadingList"

export default ({ data, location }) => (
    <>
    <SEO title="An Introduction to Philosophy – The Top 4 Books to Read" description="A curated reading list of the best and most essential introductions to the fascinating subject of philosophy." image={data.title.childImageSharp.fluid.originalImg} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="An Introduction to Philosophy" number="4" img={data.title.childImageSharp.fluid} alt="Introduction to Philosophy" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">P</span>hilosophy literally means ‘love of wisdom’, but defining it beyond this becomes a little tricky. In a nutshell, philosophy concerns itself with deep, fundamental questions: from how best we should live our lives, to the basic nature of the worlds we live in. But within this nutshell resides a whole universe of feeling, reason, and meaning. Considering such mammoth subject matter, it's difficult to know where to start.</p>
            <p>But fear not! This reading list contains the best general introductions to philosophy. Each book discusses the enduring questions philosophers have tackled throughout history — questions you have probably wondered about yourself. You know the ones. Why are we here? What's the right thing to do? What's the meaning of life?</p>
            <p>The aim of philosophy is not necessarily to give you the answers to these questions, but rather to equip you with the right tools to perform your own investigation — and discover the answers for yourself. By introducing the approaches of philosophy's best minds, the books on this list set you on that path.</p>

            <h2>1. What Does It All Mean? By Thomas Nagel</h2>
            <p>Thomas Nagel is the brilliant contemporary philosopher behind <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1107604710/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107604710&linkId=1f732b4938e1eec1b5fabe47e91eaf5c">Mortal Questions</a> and <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0195056442/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195056442&linkId=280802512d39c50eabdfd0e9138ba158">The View From Nowhere</a>. Written in 1987, Nagel’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0195052161/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195052161&linkId=37e9c1b9904009913b6ab114bca378f7">What Does It All Mean?</a> is a lucid and accessible introduction to philosophy, setting forth the central problems of philosophical inquiry for beginners. A slim book at just over 100 pages, Nagel covers free will, right and wrong, death, language, the meaning of life and other core topics in clear, illuminating language that anyone interested in philosophy would strongly benefit from reading.</p>
            <BookLink title="What Does It All Mean?" author="Thomas Nagel" link="http://www.amazon.com/gp/product/0195052161/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195052161&linkId=37e9c1b9904009913b6ab114bca378f7" img={data.one.childImageSharp.fluid} />

            <h2>2. The Problems of Philosophy, by Bertrand Russell</h2>
            <p>Bertrand Russell was a towering figure of the 20th century. Though <Link to="/reading-lists/history-of-western-philosophy">The History of Western Philosophy</Link> is perhaps his better-known work for the general reader, Russell wrote <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1724202359/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1724202359&linkId=fe8466982d5b2c4a09e08c55e2888043">The Problems of Philosophy</a> in 1912 as a short, accessible introduction to the subject. He presents philosophy in engaging and relevant ways that ignite the curiosity of the reader. This book can be enjoyed in an evening, and — spoiler alert — you’ll never look at desks the same way again.</p>
            <BookLink title="The Problems of Philosophy" author="Bertrand Russell" link="http://www.amazon.com/gp/product/1724202359/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1724202359&linkId=fe8466982d5b2c4a09e08c55e2888043" img={data.two.childImageSharp.fluid} />

            <h2>3. Think: A Compelling Introduction to Philosophy, by Simon Blackburn</h2>
            <p>Published in 1999, this wonderfully-written book begins with contemporary philosopher Simon Blackburn's rallying cry for the study of philosophy, before diving into discussion of the key philosophical themes and thinkers throughout history. The most in-depth entry on this list, each chapter of <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0192854259/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192854259&linkId=aacd3717b10ac108a1e91a38ee9c8bd1">Think</a> acts as a self-contained guide on subjects ranging from skepticism and ethics, to self-identity and God. You can thus take it all in in bitesize chunks, issue by issue, chapter by chapter.</p>
            <BookLink title="Think: A Compelling Introduction to Philosophy" author="Simon Blackburn" link="http://www.amazon.com/gp/product/0192854259/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192854259&linkId=aacd3717b10ac108a1e91a38ee9c8bd1" img={data.three.childImageSharp.fluid} />

            <h2>4. Philosophy: The Basics, by Nigel Warburton</h2>
            <p>According to philosopher Stephen Law, “there is no better short introduction to philosophy” than Nigel Warburton’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0415693160/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415693160&linkId=6e061c28ecb96eb999ad0b09ed1b0ef9">Philosophy: The Basics</a>. First published in 1992, and now in its fifth edition, Warburton’s book gently eases the reader into the world of philosophy, touching all the big issues like God, science, art, and morality through easy-to-understand and powerful analogies. It’s the most accessible item on this list, and ideal for complete beginners.</p>
            <BookLink title="Philosophy: The Basics" author="Nigel Warburton" link="http://www.amazon.com/gp/product/0415693160/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415693160&linkId=6e061c28ecb96eb999ad0b09ed1b0ef9" img={data.four.childImageSharp.fluid} />
            
            <h2>Further reading</h2>
            <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">on Instagram</a>.</p>
            <CtaReadingList />
        </div>
        
        {/*post reading list*/}
        <PostReadingList />

    </Layout>
    </>
)

export const query = graphql`
    query {
        title: file(relativePath: {eq: "introduction.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        one: file(relativePath: {eq: "introductionnagel.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        two: file(relativePath: {eq: "introductionrussell.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        three: file(relativePath: {eq: "introductionblackburn.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        four: file(relativePath: {eq: "introductionwarburton.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        philosophybreak: file(relativePath: {eq: "philosophybreak.png"}) {
            childImageSharp {
                fluid(maxWidth: 22) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`