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
    <Seo title="Ethics and Morality Reading List – The Best 9 Books to Read" description="A curated reading list of the most essential books of and about ethics and morality, including the writings of Aristotle, Immanuel Kant, and Peter Singer." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Ethics and Morality" number="9" img={data.title.childImageSharp.gatsbyImageData} alt="Ethics and Morality" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">I</span>s it ever permissible to tell a lie, to steal something, to intentionally hurt or even kill someone? If not, why not? What’s the right thing to do, and <i>what makes it</i> right? What do we mean by ‘good’? What do we mean by ‘evil’? What do we owe to each other as humans? What do we owe to non-human life? What’s the justification for any moral belief, and <Link to="/articles/where-do-morals-come-from">where do morals come from</Link>? Are ethical systems culture-dependent, or are there some rules that transcend culture — or even transcend species?</p> 

            <p>All these questions and more form the basis of ethics and morality, a core branch of philosophical study throughout the history of recorded human thought.</p> 

            <p>Most of us feel we have some sort of internal moral compass, or at least a sense of what’s fair and unfair; but acknowledging we’re morally sensitive tends to be where consensus in ethics ends and controversy begins. Indeed, arguing about right and wrong and morally judging people is a favored pastime not just of philosophers but of most human beings.</p>

            <BigSubscribe />

            <p>This reading list is designed to give you a complete view of how different thinkers in philosophy have thought about good, evil, and everything in between.</p>
            
            <p>From introductory texts and anthologies, through to important primary works from the philosophical greats themselves — after consuming this list, you’ll have much more clarity about core moral arguments and ethical systems, and be able to make measured, informed contributions to even the most heated of contemporary debates. Let’s dive in!</p>

            <h2>1. Ethics: The Fundamentals, by Julia Driver</h2>
            <BookLink title="Ethics: The Fundamentals" author="Julia Driver" link="http://www.amazon.com/gp/product/1405111542/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405111542&linkId=281149ff3cad37ca449cd37dc25bf2f8" img={data.one.childImageSharp.gatsbyImageData} />
            <p>Published in 2006, Julia Driver’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1405111542/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1405111542&linkId=281149ff3cad37ca449cd37dc25bf2f8">Ethics: The Fundamentals</a> is a very good starting place for anyone curious about ethics and morality. In highly readable, thoughtful style, Driver introduces a number of key ethical systems, including virtue ethics, Kantian ethics, divine command theory, and feminist ethics. Packed with real-life examples and coming in at an accessible 192 pages, this is a brilliant introduction to the major movements within ethics and morality.</p>
            

            <h2>2. Being Good: A Short Introduction to Ethics, by Simon Blackburn</h2>
            <BookLink title="Being Good: A Short Introduction to Ethics" author="Simon Blackburn" link="http://www.amazon.com/gp/product/0192853775/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192853775&linkId=c3065d61167d02e5529e3707bf79cf4d" img={data.two.childImageSharp.gatsbyImageData} />
            <p>Simon Blackburn, author of the best-selling general introduction to philosophy, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0192854259/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192854259&linkId=aacd3717b10ac108a1e91a38ee9c8bd1">Think</a> (which features on our <Link to="/reading-lists/introduction-to-philosophy">introduction to philosophy reading list</Link>), writes with admirable clear-headedness in his 2003 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0192853775/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192853775&linkId=c3065d61167d02e5529e3707bf79cf4d">Being Good: A Short Introduction to Ethics</a>. Blackburn largely focuses his 172-page introduction around <i>problems</i> within ethics, from our status as moral beings to the foundations of moral judgements. This is a good primer for anyone interested in the complex issues inherent within the study of morality.</p>
            

            <h2>3. Ethics: History, Theory, and Contemporary Issues, by Steven Cahn & Peter Markie</h2>
            <BookLink title="Ethics: History, Theory, and Contemporary Issues" author="Steven Cahn & Peter Markie" link="http://www.amazon.com/gp/product/0190949554/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0190949554&linkId=60ea349c68bfc052dec8f71ceb5717b0" img={data.three.childImageSharp.gatsbyImageData} />
            <p>If you’re looking for a one-stop shop for all things ethics and morality, look no further than Steven Cahn and Peter Markie’s 1998 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0190949554/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0190949554&linkId=60ea349c68bfc052dec8f71ceb5717b0">Ethics: History, Theory, and Contemporary Issues</a>. Spanning 2,500 years of ethical theory, this epic 976-page collection features extracts from the best moral thinkers past and present. Cahn and Markie’s helpful contextual notes, concise introductions, and brilliant organization throughout make this anthology an essential addition for serious students of ethics and morality.</p>
            

            <h2>4. The Nicomachean Ethics, by Aristotle</h2>
            <BookLink title="The Nicomachean Ethics" author="Aristotle" link="http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9" img={data.four.childImageSharp.gatsbyImageData} />
            <p>Turning from introductions and anthologies to primary ethical texts, where better to start than with a discussion of morality that, though over two thousand years old, is one of the subject’s finest works and still drives discussion today? In <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9">The Nicomachean Ethics</a>, ancient Greek philosopher <Link to="/reading-lists/aristotle/">Aristotle’s</Link> guiding question is: what is the best thing for a human being? His answer is <i>eudaimonia</i>, which is variously translated from Greek as ‘well-being’, ‘happiness’, ‘blessedness’, and in the context of the virtue ethics Aristotle endorsed, ‘human flourishing’. <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199213615/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199213615&linkId=f18186fee7d024481a9574760906cea9">The Nicomachean Ethics</a> is Aristotle’s exploration into how we can achieve <i>eudaimonia</i> by living well. It’s an essential text for anyone interested in the foundations and development of ethical thinking in Western society.</p>
            

            <h2>5. Groundwork of the Metaphysics of Morals, by Immanuel Kant</h2>
            <BookLink title="Groundwork of the Metaphysics of Morals" author="Immanuel Kant" link="http://www.amazon.com/gp/product/1107401062/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107401062&linkId=7f15e4461c5be9d2444502008378c025" img={data.five.childImageSharp.gatsbyImageData} />
            <p>Another kingpin of the philosophical tradition, <Link to="/reading-lists/immanuel-kant/">Immanuel Kant</Link> lays out his monumentally influential ethical vision in the 1785 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1107401062/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107401062&linkId=7f15e4461c5be9d2444502008378c025">Groundwork of the Metaphysics of Morals</a>. Kant argues that human beings are ends in themselves, never to be used by anyone merely as a means, and that morality is rooted in and justified by reason. Kant’s deontological or ‘duty-based’ ethical system is still defended by many thinkers today, and this is the best book with which to explore it. If you’re interested in ethics, this brilliant, difficult book belongs on your bookshelf!</p>
            

            <h2>6. Utilitarianism, by John Stuart Mill</h2>
            <BookLink title="Utilitarianism" author="John Stuart Mill" link="http://www.amazon.com/gp/product/087220605X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=087220605X&linkId=8d2a5df647af6763f200f1cf7b20d765" img={data.six.childImageSharp.gatsbyImageData} />
            <p>Aristotle’s virtue ethics, Kant’s duty-based ethics — it would be unforgivable if we didn’t mention Jeremy Bentham’s utilitarianism (‘the greatest happiness for the greatest number’) as another foundational moral system in Western thinking. While Bentham is the well-known figurehead of the movement, the basis of utilitarian thinking is actually laid out most powerfully in John Stuart Mill’s 1861 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/087220605X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=087220605X&linkId=8d2a5df647af6763f200f1cf7b20d765">Utilitarianism</a>, an absolutely classic exposition and defence of the widely-held moral position. This particular edition also contains Mill’s 1868 speech on capital punishment, which is a fantastically stimulating read.</p>
            

            <h2>7. On the Genealogy of Morals, by Friedrich Nietzsche</h2>
            <BookLink title="On the Genealogy of Morals" author="Friedrich Nietzsche" link="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54" img={data.seven.childImageSharp.gatsbyImageData} />
            <p>Unlike other philosophers on this list, <Link to="/reading-lists/friedrich-nietzsche">German philosopher Friedrich Nietzsche</Link> was not so interested in prescribing an explicit ‘one size fits all’ moral system, rather he was committed to understanding the history of Western moral thinking, and diagnosing exactly what’s wrong with it. In his 1887 masterwork, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54">On the Genealogy of Morals</a>, Nietzsche explosively critiques all moral systems that came before him and drags the reader out of any preconceptions about what constitutes ‘good’, ‘evil’, ‘bad conscience’, as well as ascetic ideals and the purpose of life. Nietzsche proposes a total ‘revaluation of values’, arguing all moral philosophy since <Link to="/reading-lists/socrates/">Socrates</Link> has been the morality of the weak, and that if human civilization is to progress we must embrace impulses that cohere with saying ‘yes’ to life, impulses which differ for each individual. A hugely entertaining and challenging read, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54">On the Genealogy of Morals</a> is highly recommended for anyone interested in dwelling on where moral systems comes from, and how they should evolve.</p>
            

            <h2>8. Practical Ethics, by Peter Singer</h2>
            <BookLink title="Practical Ethics" author="Peter Singer" link="http://www.amazon.com/gp/product/0521707684/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521707684&linkId=e32ae115c392a16ce2b3660553185bd5" img={data.eight.childImageSharp.gatsbyImageData} />
            <p>Is it ethical to buy luxuries when others do not have enough to eat? Should we buy meat from intensively reared animals? If your carbon footprint is above the global average, are you doing something immoral? These questions and more are lucidly addressed in moral philosopher Peter Singer’s hugely popular introduction to applied ethics, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521707684/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521707684&linkId=e32ae115c392a16ce2b3660553185bd5">Practical Ethics</a>. Singer provokes readers by carrying out seemingly commonsensical moral arguments to their sometimes disturbing conclusions, and shows the errors in much of our thinking about right and wrong. First published in 1979, the text is now in its third edition — its enduring popularity and slick style make it an ideal text for anyone interested in dwelling on contemporary moral issues.</p>
            

            <h2>9. What We Owe to Each Other, by T. M. Scanlon</h2>
            <BookLink title="What We Owe to Each Other" author="T. M. Scanlon" link="http://www.amazon.com/gp/product/067400423X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=067400423X&linkId=16e599c69b51cb7bee6ae6dc69849c4c" img={data.nine.childImageSharp.gatsbyImageData} />
            <p>Published in 1998, American philosopher T. M. Scanlon’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/067400423X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=067400423X&linkId=16e599c69b51cb7bee6ae6dc69849c4c">What We Owe to Each Other</a> has quickly established itself as a modern classic of moral philosophy. Within 432 thought-provoking pages, Scanlon outlines his contractualist view of ethics, in which he states that thinking about right and wrong means thinking about what we do in terms that could be justified to others and that could not be reasonably rejected. A scrupulous and relentlessly exacting read, this is a fine example of how to write about moral philosophy for any aspiring student of the subject.</p>
            

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
  title: file(relativePath: {eq: "ethics.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "ethics-driver.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "ethics-simon.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "ethics-history.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "ethics-aristotle.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "ethics-kant.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "ethics-jsm.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "nietzsche-genealogy.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  eight: file(relativePath: {eq: "ethics-singer.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  nine: file(relativePath: {eq: "ethics-scanlon.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList