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
    <SEO title="Friedrich Nietzsche – The Top 7 Books to Read" description="A curated reading list of the best and most essential books of and about the philosopher Friedrich Nietzsche." image={data.title.childImageSharp.fluid.src} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Friedrich Nietzsche" number="7" img={data.title.childImageSharp.fluid} alt="Friedrich Nietzsche" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">F</span>riedrich Nietzsche was a 19th-century German philosopher who, though hardly read during his own (sane) lifetime, has become a dominant intellectual force in today’s popular culture. Known and regularly quoted for his dazzling and often controversial turns of phrase, Nietzsche’s reputation in the English-speaking world is now arguably the highest it’s ever been, and his place in philosophy’s canon looks assured.</p> 
            <p>However, it wasn’t always this way: after suffering a mental breakdown in 1889, Nietzsche and his works came under the care of his sister, Elisabeth Förster-Nietzsche, who was a bigoted anti-Semite. Elisabeth warped Nietzsche’s unfinished works into a bloodthirsty call to arms for nationalist Germany, which ultimately became the blueprint for Hitler and his 'superior' Aryan race. For a long time, therefore, Nietzsche’s ideas were synonymous with those of Nazism.</p>
            <p>Thankfully, the truth of Elisabeth’s tampering emerged — as did letters and earlier works evidencing Nietzsche’s fierce opposition to nationalism and anti-Semitism — and his character has since been reformed and his ideas reexamined. Even enjoying a resurgence in popularity, however, Nietzsche’s philosophy remains commonly misunderstood, misread, and misappropriated by those seeking to vindicate a worldview not unlike that of Nazism.</p>
            <p>So what <i>were</i> Nietzsche’s views, exactly? Well, that is <Link to="/articles/dancing-with-nietzsche">still up for debate</Link>. Nietzsche is unusual among philosophers in that he doesn’t really tell us what he thinks. Rather, he confronts a number of our assumptions about the world, particularly about morality and religion, in ferocious and sometimes hilarious fashion. He doesn’t teach us ‘what’ to think so much as ‘how’ — for, as he puts it in one of many famous aphorisms, “There are no facts, only interpretations.”</p>
            <p>This reading list consists of the best and most essential books for those looking to understand more about Nietzsche and his fascinating philosophy. It contains a mix of both primary and secondary literature, for although Nietzsche’s words always make for a brilliantly entertaining read themselves, they are most powerful when contextualized by scholars whose life's work has been dedicated to understanding him.</p>


            <h2>1. I Am Dynamite! By Sue Prideaux</h2>
            <p>This is the biography on Nietzsche we've been waiting for. Winner of The Times Biography of the year in 2019, Sue Prideaux's <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1524760838/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1524760838&linkId=386bfcb97dde91eb6f8fb6f89827e9f3">I Am Dynamite!</a> is a vividly compelling, myth-shattering portrait of one of history's most misunderstood philosophers. Prideaux illuminates all the events that shaped Nietzsche's thinking, as well as his heart-breaking descent into madness, and introduces the key components of his philosophy. It's a great place to start for anyone looking to get a well-rounded understanding of Nietzsche's life and work.</p>
            <BookLink title="I Am Dynamite!" author="Sue Prideaux" link="http://www.amazon.com/gp/product/1524760838/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1524760838&linkId=386bfcb97dde91eb6f8fb6f89827e9f3" img={data.one.childImageSharp.fluid} />

            <h2>2. Hiking With Nietzsche, by John Kaag</h2>
            <p>John Kaag's beautifully written 2018 book <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1783784946/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1783784946&linkId=353683d669ca540bf4bf144d3e4bbea0">Hiking with Nietzsche</a> combines Kaag's personal philosophical journey with Nietzsche's. Kaag retreads the very same steps Nietzsche took through the Swiss peaks above Sils Maria where he thought up many of his ideas, intimately reflecting on how Nietzsche's philosophy relates to us in the twenty-first century, and exploring the key drivers and consequences of his thinking.</p>
            <BookLink title="Hiking With Nietzsche" author="John Kaag" link="http://www.amazon.com/gp/product/1783784946/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1783784946&linkId=353683d669ca540bf4bf144d3e4bbea0" img={data.two.childImageSharp.fluid} />

            <h2>3. Beyond Good & Evil, by Friedrich Nietzsche</h2>
            <p>In his 1886 work <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0679724656/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0679724656&linkId=f0d74bfafd967a488c12126c2dccb975">Beyond Good & Evil</a>, Nietzsche attempts to sum up his own philosophy — making it an ideal starting point for those looking to delve into Nietzsche's actual writings. Writing with his trademark flair, sharpness, and sheer profundity, Nietzsche explores themes recurrent throughout his work: the origins and nature of morality, the failures and dangers of objective thinking, as well as how we can overcome mediocrity and suffering and become who we truly are. </p>
            <BookLink title="Beyond Good & Evil" author="Friedrich Nietzsche" link="http://www.amazon.com/gp/product/0679724656/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0679724656&linkId=f0d74bfafd967a488c12126c2dccb975" img={data.three.childImageSharp.fluid} />

            <h2>4. On the Genealogy of Morals, by Friedrich Nietzsche</h2>
            <p>Published shortly after <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0679724656/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0679724656&linkId=f0d74bfafd967a488c12126c2dccb975">Beyond Good & Evil</a> in 1887, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54">On the Genealogy of Morals</a> is arguably Nietzsche's masterpiece. In it, Nietzsche develops and explains ideas only cryptically explored in earlier works, laying out his thoughts in an accessible, highly readable tripartite essay form. This is the culmination of Nietzsche's thinking as prose, exploring goodness, 'evil', guilt, bad conscience, as well as ascetic ideals and the purpose of life. For anyone interested in Nietzsche, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54">On the Genealogy of Morals</a> is worth digesting and re-reading again and again.</p>
            <BookLink title="On the Genealogy of Morals" author="Friedrich Nietzsche" link="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54" img={data.four.childImageSharp.fluid} />

            <h2>5. Thus Spoke Zarathustra, by Friedrich Nietzsche</h2>
            <p>If <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0141195371/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0141195371&linkId=823bb4eb6e1b8494f4960f18490a2d54">On the Genealogy of Morals</a> is the culmination of Nietzsche's thought as prose, then his 1885 philosophical novel <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140441182/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140441182&linkId=463ca60c2eea3d8021001814ba19d397">Thus Spoke Zarathustra</a> is the culmination of his thought as poetry. Considered by Nietzsche himself to be his magnum opus, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140441182/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140441182&linkId=463ca60c2eea3d8021001814ba19d397">Thus Spoke Zarathustra</a> lightheartedly imitates the New Testament in style, and chronicles the fictitious travels of a prophet named Zarathustra, who descends from solitude in the mountains (the parallels here to Nietzsche's own life are not, some scholars suspect, accidental) to tell the world that God is dead, but that we shouldn't worry: humanity can become the divine successor, if only we let go of piety and restraint and embrace passion, chaos, and freedom. Not for the faint-hearted, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140441182/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140441182&linkId=463ca60c2eea3d8021001814ba19d397">Thus Spoke Zarathustra</a> is a dense, challenging, deeply rewarding read.</p>
            <BookLink title="Thus Spoke Zarathustra" author="Friedrich Nietzsche" link="http://www.amazon.com/gp/product/0140441182/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140441182&linkId=463ca60c2eea3d8021001814ba19d397" img={data.five.childImageSharp.fluid} />

            <h2>6. Nietzsche on Morality, by Brian Leiter</h2>
            <p>Both an introduction to and a sustained commentary on Nietzsche's moral philosophy, Brian Leiter's 2002 book <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0415856809/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415856809&linkId=68b2ac0ddf0e2895539d4da9330fbf64">Nietzsche on Morality</a> has become one of the most widely used and debated secondary sources on Nietzsche over the past two decades. Focusing on morality but touching on related topics too, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0415856809/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415856809&linkId=68b2ac0ddf0e2895539d4da9330fbf64">Nietzsche on Morality</a> is a fantastic overview and critique for anyone interested in Nietzsche's philosophy.</p>
            <BookLink title="Nietzsche on Morality" author="Brian Leiter" link="http://www.amazon.com/gp/product/0415856809/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415856809&linkId=68b2ac0ddf0e2895539d4da9330fbf64" img={data.six.childImageSharp.fluid} />

            <h2>7. Nietzsche on Truth and Philosophy, by Maudemarie Clark</h2>
            <p>Maudemarie Clark's 1990 book <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0521348501/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521348501&linkId=6834df0ef0997d7d3aba541abb472383">Nietzsche on Truth and Philosophy</a> treats Nietzsche like an actual philosopher — difficult to do with a thinker who resisted categorization so vehemently — engaging dialectically, argumentatively, and systematically with Nietzsche's views on truth, knowledge, and morality. It's the most rigorous and philosophical treatment of Nietzsche on this list, but rewards the reader with deep excavations and interpretations of his thinking.</p>
            <BookLink title="Nietzsche on Truth and Philosophy" author="Maudemarie Clark" link="http://www.amazon.com/gp/product/0521348501/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521348501&linkId=6834df0ef0997d7d3aba541abb472383" img={data.seven.childImageSharp.fluid} />
            
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
        title: file(relativePath: {eq: "nietzsche.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 480) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        one: file(relativePath: {eq: "nietzsche-dynamite.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        two: file(relativePath: {eq: "nietzsche-hiking.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        three: file(relativePath: {eq: "nietzsche-beyondgoodevil.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        four: file(relativePath: {eq: "nietzsche-genealogy.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        five: file(relativePath: {eq: "nietzsche-zarathustra.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        six: file(relativePath: {eq: "nietzsche-morality.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        seven: file(relativePath: {eq: "nietzsche-truth.jpg"}) {
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