import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"

import Seo from '../../../components/SEO'
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
    <Seo title="Friedrich Nietzsche – The Best 7 Books to Read" description="A curated reading list of the most essential books of and about the philosopher Friedrich Nietzsche." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Friedrich Nietzsche" number="7" img={data.title.childImageSharp.gatsbyImageData} alt="Friedrich Nietzsche" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">F</span>riedrich Nietzsche was a 19th-century German philosopher who, though hardly read during his own (sane) lifetime, has become a dominant intellectual force in today’s popular culture. Known and regularly quoted for his dazzling and often controversial turns of phrase (like <Link to="/articles/god-is-dead-nietzsche-famous-statement-explained/">his declaration that God is dead</Link>, for instance, or his vision of the <Link to="/articles/ubermensch-explained-the-meaning-of-nietzsches-superman/">Übermensch</Link>, or any other of the <Link to="/articles/nietzsche-quotes-97-of-his-cleverest-statements/">97 clever Nietzsche quotations we’ve collated here</Link>), Nietzsche’s reputation in the English-speaking world is now arguably the highest it’s ever been, and his place in philosophy’s canon looks assured.</p> 
            <p>However, it wasn’t always this way: after suffering a mental breakdown in 1889, Nietzsche and his works came under the care of his sister, Elisabeth Förster-Nietzsche, who was a bigoted anti-Semite. Elisabeth warped Nietzsche’s unfinished works into a bloodthirsty call to arms for nationalist Germany, which ultimately became the blueprint for Hitler and his 'superior' Aryan race. For a long time, therefore, Nietzsche’s ideas were synonymous with those of Nazism.</p>
            <p>Thankfully, the truth of Elisabeth’s tampering emerged — as did letters and earlier works evidencing Nietzsche’s fierce opposition to nationalism and anti-Semitism — and his character has since been reformed and his ideas reexamined. Even enjoying a resurgence in popularity, however, Nietzsche’s philosophy remains commonly misunderstood, misread, and misappropriated by those from all over the political and philosophical spectrum.</p>
            <div className="course-promo text-center">
                <h4>Introduction to Nietzsche and His 5 Greatest Ideas: Bite-size Course</h4>
                <p><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                <p className="small-grey-font">Learn everything you need to know about Friedrich Nietzsche in just six days. Our introductory course distills Nietzsche’s best and most misunderstood ideas, from God is dead to the Übermensch.</p>
                <Link className="button secondary" to="/introduction-to-nietzsche/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Learn More about Course</Link>
            </div>
            <p>So what <i>were</i> Nietzsche’s views, exactly? Well, that is <Link to="/articles/dancing-with-nietzsche/">still up for debate</Link>. Nietzsche is unusual among philosophers in that he doesn’t really tell us what he thinks. Rather, he confronts a number of our assumptions about the world, particularly about morality and religion, in ferocious and sometimes hilarious fashion. He doesn’t teach us ‘what’ to think so much as ‘how’ — for, as he puts it in one of many famous aphorisms, “There are no facts, only interpretations.”</p>
            <p>This reading list consists of the best and most essential books for those looking to understand more about Nietzsche and his fascinating philosophy. It contains a mix of both primary and secondary literature, for although Nietzsche’s words always make for a brilliantly entertaining read themselves, they are most powerful when contextualized by scholars whose life's work has been dedicated to understanding him.</p>


            <h2>1. I Am Dynamite! By Sue Prideaux</h2>
            <p>This is the biography on Nietzsche we've been waiting for. Winner of The Times Biography of the year in 2019, Sue Prideaux's <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1524760838/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1524760838&linkId=386bfcb97dde91eb6f8fb6f89827e9f3">I Am Dynamite!</a> is a vividly compelling, myth-shattering portrait of one of history's most misunderstood philosophers. Prideaux illuminates all the events that shaped Nietzsche's thinking, as well as his heart-breaking descent into madness.</p>
            <BookLink title="I Am Dynamite!" author="Sue Prideaux" link="http://www.amazon.com/gp/product/1524760838/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1524760838&linkId=386bfcb97dde91eb6f8fb6f89827e9f3" img={data.one.childImageSharp.gatsbyImageData} />

            <h2>2. Introduction to Nietzsche and His 5 Greatest Ideas, by Philosophy Break</h2>
              <p>If you're looking beyond biography for a deeper introduction to Nietzsche's actual philosophy, then the 2022 <Link to="/introduction-to-nietzsche/">Introduction to Nietzsche and His 5 Greatest Ideas</Link> is designed to help you learn everything you need to know about the brilliant philosopher in just six days. Distilling Nietzsche's best and most misunderstood ideas, from God is dead to the Übermensch, this bite-size course delivers materials direct to your inbox, and is accessible forever from any device. Of course, we're a little biased, as we produced this one — but if you're seeking to understand the fundamentals of Nietzsche's best ideas, have clarity on exactly what he was trying to say, and discover why he is so influential, then <Link to="/introduction-to-nietzsche/">Introduction to Nietzsche and His 5 Greatest Ideas</Link> gets rave reviews, and might be just what you're looking for!</p>
              <div className="article white">
                <Link to="/introduction-to-nietzsche/">
                      <GatsbyImage
                          image={data.two.childImageSharp.gatsbyImageData}
                          alt="Introduction to Nietzsche and His 5 Greatest Ideas" />
                      <div className="article-info">
                          <h2>Introduction to Nietzsche and His 5 Greatest Ideas</h2>
                          <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BY PHILOSOPHY BREAK</p>
                          <p style={{margin: "0 0 3px"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                          <Link to="/introduction-to-nietzsche/" className="primary button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>Learn More</Link>
                      </div>
                  </Link>
              </div>

            <h2>3. Beyond Good & Evil, by Friedrich Nietzsche</h2>
            <p>In his 1886 work <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0679724656/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0679724656&linkId=f0d74bfafd967a488c12126c2dccb975">Beyond Good & Evil</a>, Nietzsche attempts to sum up his own philosophy — making it an ideal starting point for those looking to delve into Nietzsche's actual writings. Writing with his trademark flair, sharpness, and sheer profundity, Nietzsche explores themes recurrent throughout his work: the origins and nature of morality, the failures and dangers of objective thinking, as well as how we can overcome mediocrity and suffering and become who we truly are. </p>
            <BookLink title="Beyond Good & Evil" author="Friedrich Nietzsche" link="http://www.amazon.com/gp/product/0679724656/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0679724656&linkId=f0d74bfafd967a488c12126c2dccb975" img={data.three.childImageSharp.gatsbyImageData} />

            <h2>4. On the Genealogy of Morals, by Friedrich Nietzsche</h2>
            <p>Published shortly after <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0679724656/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0679724656&linkId=f0d74bfafd967a488c12126c2dccb975">Beyond Good & Evil</a> in 1887, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54">On the Genealogy of Morals</a> is arguably Nietzsche's masterpiece. In it, Nietzsche develops and explains ideas only cryptically explored in earlier works, laying out his thoughts in an accessible, highly readable tripartite essay form. This is the culmination of Nietzsche's thinking as prose, exploring goodness, 'evil', guilt, bad conscience, as well as ascetic ideals and the purpose of life. For anyone interested in Nietzsche, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54">On the Genealogy of Morals</a> is worth digesting and re-reading again and again.</p>
            <BookLink title="On the Genealogy of Morals" author="Friedrich Nietzsche" link="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54" img={data.four.childImageSharp.gatsbyImageData} />

            <h2>5. Thus Spoke Zarathustra, by Friedrich Nietzsche</h2>
            <p>If <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54">On the Genealogy of Morals</a> is the culmination of Nietzsche's thought as prose, then his 1885 philosophical novel <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140441182/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140441182&linkId=463ca60c2eea3d8021001814ba19d397">Thus Spoke Zarathustra</a> is the culmination of his thought as poetry. Considered by Nietzsche himself to be his magnum opus, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140441182/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140441182&linkId=463ca60c2eea3d8021001814ba19d397">Thus Spoke Zarathustra</a> lightheartedly imitates the New Testament in style, and chronicles the fictitious travels of a prophet named Zarathustra, who descends from solitude in the mountains (the parallels here to Nietzsche's own life are not, some scholars suspect, accidental) to tell the world that God is dead, but that we shouldn't worry: humanity can become the divine successor, if only we let go of piety and restraint and embrace passion, chaos, and freedom. Not for the faint-hearted, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140441182/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140441182&linkId=463ca60c2eea3d8021001814ba19d397">Thus Spoke Zarathustra</a> is a dense, challenging, deeply rewarding read.</p>
            <BookLink title="Thus Spoke Zarathustra" author="Friedrich Nietzsche" link="http://www.amazon.com/gp/product/0140441182/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140441182&linkId=463ca60c2eea3d8021001814ba19d397" img={data.five.childImageSharp.gatsbyImageData} />

            <h2>6. Nietzsche on Morality, by Brian Leiter</h2>
            <p>Both an introduction to and a sustained commentary on Nietzsche's moral philosophy, Brian Leiter's 2002 book <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0415856809/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415856809&linkId=68b2ac0ddf0e2895539d4da9330fbf64">Nietzsche on Morality</a> has become one of the most widely used and debated secondary sources on Nietzsche over the past two decades. Focusing on morality but touching on related topics too, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0415856809/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415856809&linkId=68b2ac0ddf0e2895539d4da9330fbf64">Nietzsche on Morality</a> is a fantastic overview and critique for anyone interested in Nietzsche's philosophy.</p>
            <BookLink title="Nietzsche on Morality" author="Brian Leiter" link="http://www.amazon.com/gp/product/0415856809/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415856809&linkId=68b2ac0ddf0e2895539d4da9330fbf64" img={data.six.childImageSharp.gatsbyImageData} />

            <h2>7. Nietzsche on Truth and Philosophy, by Maudemarie Clark</h2>
            <p>Maudemarie Clark's 1990 book <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521348501/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521348501&linkId=6834df0ef0997d7d3aba541abb472383">Nietzsche on Truth and Philosophy</a> treats Nietzsche like an actual philosopher — difficult to do with a thinker who resisted categorization so vehemently — engaging dialectically, argumentatively, and systematically with Nietzsche's views on truth, knowledge, and morality. It's the most academic treatment of Nietzsche on this list, but rewards the reader with deep excavations and interpretations of his thinking.</p>
            <BookLink title="Nietzsche on Truth and Philosophy" author="Maudemarie Clark" link="http://www.amazon.com/gp/product/0521348501/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521348501&linkId=6834df0ef0997d7d3aba541abb472383" img={data.seven.childImageSharp.gatsbyImageData} />
            
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
  title: file(relativePath: {eq: "nietzsche.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "nietzsche-dynamite.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "intro-to-nietzsche-chap1-full.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
  three: file(relativePath: {eq: "nietzsche-beyondgoodevil.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "nietzsche-genealogy.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "nietzsche-zarathustra.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "nietzsche-morality.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "nietzsche-truth.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList