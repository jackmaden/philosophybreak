import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage, getSrc } from "gatsby-plugin-image"

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
    <Seo title="Friedrich Nietzsche – The Best 9 Books to Read" description="A curated reading list of the best and most essential books of and about the philosopher Friedrich Nietzsche." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Friedrich Nietzsche" number="9" img={data.title.childImageSharp.gatsbyImageData} alt="Friedrich Nietzsche" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
              <p><span className="big-letter">F</span>riedrich Nietzsche (1844-1900) was a 19th-century German philosopher who, though hardly read during his own (sane) lifetime, has become a dominant intellectual force in today’s popular culture.</p>
              <p>Perhaps best known for his proclamation that <Link to="/articles/god-is-dead-nietzsche-famous-statement-explained/">God is dead</Link>, along with his critique of conventional morality and religion, Nietzsche is remembered for his attempt to establish what he called a ‘revaluation of all values’, and is celebrated for his brilliant, provocative aphorisms and idea-packed prose (which includes, for instance, his vision of the <Link to="/articles/ubermensch-explained-the-meaning-of-nietzsches-superman/">Übermensch</Link>, his distinction between the <Link to="/articles/apollonian-and-dionysian-nietzsche-on-art-and-the-psyche/">Apollonian and Dionysian</Link>, his presentation of <Link to="/articles/eternal-recurrence-what-did-nietzsche-really-mean/">the eternal recurrence</Link>, <Link to="/articles/amor-fati-the-stoics-and-nietzsche-different-takes-on-loving-fate/"><i>amor fati</i></Link>, what it means to <Link to="/articles/nietzsche-on-what-finding-yourself-actually-means/">find yourself</Link>, his famous passage on <Link to="/articles/nietzsche-on-friends-growing-apart/">friends growing apart</Link>, and all of the <Link to="/articles/nietzsche-quotes-97-of-his-cleverest-statements/">97 clever Nietzsche passages and quotations we’ve collated here</Link>).</p>
              <p>Accordingly, Nietzsche’s reputation in the English-speaking world is now arguably the highest it’s ever been, and his place in philosophy’s canon looks assured.</p> 
              <p>However, it wasn’t always this way. After suffering a mental breakdown in 1889 from which he never recovered, Nietzsche (and his works) came under the care of his sister, Elisabeth Förster-Nietzsche, who was a bigoted anti-Semite.</p>
             
              
              <p>Elisabeth warped Nietzsche’s unpublished notebooks and unfinished works (now collected in <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Will-Power-Friedrich-Nietzsche/dp/0394704371?&linkCode=ll1&tag=philosophybre-20&linkId=d7ce8382ac1582954aa02260793ebe24&language=en_US&ref_=as_li_ss_tl">The Will to Power</a>) into a bloodthirsty call to arms for nationalist Germany, which aligned to the blueprint for Hitler’s ‘superior’ Aryan race.</p>
              <p>For a long time, therefore, Nietzsche’s ideas were synonymous with those of Nazism.</p>
              <p>Thankfully, the truth of Elisabeth’s tampering emerged — as did letters and earlier works evidencing Nietzsche’s fierce opposition to nationalism and antisemitism.</p>

              <p>Following the Nazi defeat in World War II, efforts were made to sanitize Nietzsche’s name, not least by the philosopher, translator, and poet Walter Kaufmann.</p>
              <p>Kaufmann recognized that Nietzsche was majorly misunderstood in the English-speaking world, and set out on a long-term campaign to not only provide new English translations of all of Nietzsche’s works, but also guide readers in better understanding the profundity of his ideas.</p>

              <p>(For more on the key events of Nietzsche’s life and legacy, including his tragic descent into insanity, see our overview of <Link to="/articles/friedrich-nietzsches-life-insanity-and-legacy/">Nietzsche’s life, insanity, and legacy</Link>, which places his philosophy in the context of his life and illness, ultimately suggesting that Nietzsche’s task in both his personal life and his wider philosophy were one and the same: to <Link to="/articles/nietzsche-on-why-suffering-is-necessary-for-greatness/">find meaning in suffering</Link>, to make recovery more predominant than resentment, and to establish a solution to the problem of nihilism.)</p>

              <BigSubscribe />

              <p>Even enjoying a resurgence in popularity, however, Nietzsche’s philosophy remains commonly misunderstood, misread, and misappropriated by those from all over the political and philosophical spectrum, who wish to elevate their particular cause with the power of his rhetoric.</p>

              <p>With a range of thinking so widespread, and a style of writing so stunningly and wickedly provocative, it is perhaps no surprise that Nietzsche’s iconoclastic, hammering utterances — designed to jolt people out of presuppositions — can be so grossly taken out of context.</p>
              <p>Here is a thinker who not only changes his mind on key topics throughout his active philosophical period, but who at times suggests he doesn’t <i>want</i> to be understood, not to be purposefully oblique, but because he thinks his readers are not yet <i>ready</i> for what he has to say.</p>

              <h2>The difficulties of reading Nietzsche</h2>
              <p><span className="big-letter">G</span>etting into Nietzsche, then — i.e. really understanding and appreciating his philosophy, rather than just a few of his most famous quotations — can be somewhat of a challenge.</p>
              
              <p>For, far from helping his readers by clearly laying out his ideas in rigid, structured form, Nietzsche prefers to challenge us by scattering his great ideas across his works — often offering only hints and winks about what he truly thinks, and occasionally contradicting himself or reevaluating earlier ideas.</p>

              <p>Nietzsche also primarily adopts an aphoristic writing style — presenting us with a numbered sequence of rather disconnected sentences and paragraphs across a whole range of different subjects, sometimes held together by a particular theme, sometimes not.</p>

              <p>There may be a paragraph from an 1881 work that aligns to something he then expands on in an 1887 work, for example.</p>

              <p>Nietzsche also writes in such a way whereby he assumes you’ve read <i>everything</i> he’s ever written — as well as every major Western thinker from the ancient pre-Socratic Greeks onwards.</p>
              
              <h2>Which is the best Nietzsche book to start with?</h2>
              <p><span className="big-letter">G</span>iven the quirks involved in reading him, selecting a ‘first’ Nietzsche book can be tricky. While they all contain diamonds, and while his writing style is always stunningly engaging, there is perhaps no ‘single’ work of his that stands out as an easy gateway to his ideas.</p>

              <p>That said, some are certainly better candidates than others.</p>

              <p>As we discuss below, his 1889 work <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nietzsche-Anti-Christ-Twilight-Cambridge-Philosophy/dp/0521016886?&linkCode=ll1&tag=philosophybre-20&linkId=87e4680fa2bf9969e82dc6acca3a2266&language=en_US&ref_=as_li_ss_tl">Twilight of the Idols</a>, for instance, is often recommended as a better starting point than most, for Nietzsche attempts to offer short summaries of his mature philosophy.</p>

              <p>The 1887 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl">On the Genealogy of Morals</a>, too, can be a more accessible first read than others, in that Nietzsche foregoes his aphoristic style for the production of three longer-form essays, making for a more conventional initial reading experience (though, for first-time Nietzsche readers, understanding the subject matter will most definitely be a challenge without the assistance of some secondary literature, the best of which we outline below).</p>

              <p>Perhaps the worst route into Nietzsche’s thinking, meanwhile, is the one most commonly taken: starting with his most famous book, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140441182?&linkCode=ll1&tag=philosophybre-20&linkId=e08afd371adcb4ca929948fef1ea6124&language=en_US&ref_=as_li_ss_tl">Thus Spoke Zarathustra</a>, written between 1883 and 1885.</p>

              <p>While <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140441182?&linkCode=ll1&tag=philosophybre-20&linkId=e08afd371adcb4ca929948fef1ea6124&language=en_US&ref_=as_li_ss_tl">Thus Spoke Zarathustra</a> is a stunning literary achievement, it is not the best way to learn about Nietzsche’s ideas, for it is more a densely cryptic expression of them in poetic, lyrical form.</p>

              <p>Another common approach is to start with Nietzsche’s first book, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Birth-Tragedy-Spirit-Penguin-Classics/dp/0140433392?&linkCode=ll1&tag=philosophybre-20&linkId=46b3fb5ce95f795e09b414d683d49a59&language=en_US&ref_=as_li_ss_tl">The Birth of Tragedy</a> — but this is also not recommended.</p>

              <p>While the germ for many of his later ideas can be found in <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Birth-Tragedy-Spirit-Penguin-Classics/dp/0140433392?&linkCode=ll1&tag=philosophybre-20&linkId=46b3fb5ce95f795e09b414d683d49a59&language=en_US&ref_=as_li_ss_tl">The Birth of Tragedy</a>, on the whole it is not representative of his most important contributions to philosophy, for Nietzsche’s style and ideas develop considerably in his later works.</p>

              <h2>Nietzsche: the best 9 books to read</h2>
              <p><span className="big-letter">T</span>aking into account all of the above, the below reading list consists of the best and most essential books for those looking to understand more about Nietzsche and his fascinating philosophy.</p>

              <p>It contains a mix of both primary and secondary literature, for although Nietzsche’s words always make for a brilliantly entertaining read themselves, tying together Nietzsche’s ideas — scattered as they are across his works — can be a real challenge.</p>

              <p>Indeed, if you’re interested in learning about Nietzsche as a first-time reader of his books, the power of his ideas is more accessible when contextualized by scholars whose life’s work has been dedicated to understanding him.</p>

              <p>Without further ado, let’s dive in!</p>


              <h2>1. I Am Dynamite! By Sue Prideaux</h2>
              <BookLink title="I Am Dynamite!" author="Sue Prideaux" link="https://www.amazon.com/gp/product/1524760838?&linkCode=ll1&tag=philosophybre-20&linkId=204ef4746077ca583ef2f4d3ae9c2cae&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />
              <p>This is the biography on Nietzsche we’ve been waiting for. Winner of The Times Biography of the year in 2019, Sue Prideaux’s <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/1524760838?&linkCode=ll1&tag=philosophybre-20&linkId=204ef4746077ca583ef2f4d3ae9c2cae&language=en_US&ref_=as_li_ss_tl">I Am Dynamite!</a> is a vividly compelling, myth-shattering portrait of one of history’s most misunderstood philosophers.</p>
              <p>Prideaux illuminates all the events that shaped Nietzsche’s thinking, his key relationships — including those with the composer Richard Wagner and psychoanalyst Lou Salomé — as well as his heart-breaking descent into madness.</p>
              <p>If you want to understand how the life Nietzsche lived led to the production of his philosophy, this is the biography for you.</p>

              <h2>2. Nietzsche on Morality, by Brian Leiter</h2>
              <BookLink title="Nietzsche on Morality" author="Brian Leiter" link="https://www.amazon.com/gp/product/0415856809?&linkCode=ll1&tag=philosophybre-20&linkId=5cbc396eb4628bfcf933d56bbf42cba1&language=en_US&ref_=as_li_ss_tl" img={data.six.childImageSharp.gatsbyImageData} />
              <p>Both an introduction to and a sustained commentary on Nietzsche’s moral philosophy, Brian Leiter’s 2002 book <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0415856809?&linkCode=ll1&tag=philosophybre-20&linkId=5cbc396eb4628bfcf933d56bbf42cba1&language=en_US&ref_=as_li_ss_tl">Nietzsche on Morality</a> has become one of the most widely used and debated secondary sources on Nietzsche over the past two decades.</p>
              <p>Focusing on morality but touching on related topics too, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0415856809?&linkCode=ll1&tag=philosophybre-20&linkId=5cbc396eb4628bfcf933d56bbf42cba1&language=en_US&ref_=as_li_ss_tl">Nietzsche on Morality</a> is a solid overview and critique for anyone interested in Nietzsche’s philosophy.</p>

              <h2>3. The Oxford Handbook of Nietzsche, by Ken Gemes and John Richardson</h2>
              <BookLink title="The Oxford Handbook of Nietzsche" author="Ken Gemes & John Richardson" link="https://www.amazon.com/Oxford-Handbook-Nietzsche-Handbooks/dp/019877673X?&linkCode=ll1&tag=philosophybre-20&linkId=535964c8a683cfcfed370493ee33effa&language=en_US&ref_=as_li_ss_tl" img={data.seven.childImageSharp.gatsbyImageData} />

              <p>For an insight into just how lively, productive, and diverse the contemporary Nietzsche scholarship scene is, look no further than the 2013 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Oxford-Handbook-Nietzsche-Handbooks/dp/019877673X?&linkCode=ll1&tag=philosophybre-20&linkId=535964c8a683cfcfed370493ee33effa&language=en_US&ref_=as_li_ss_tl">Oxford Handbook of Nietzsche</a>, edited by Ken Gemes and John Richardson.</p>

              <p>This brilliant collection brings together 32 essays from leading Nietzsche scholars, covering virtually every aspect of Nietzsche’s thought — from his epistemology and metaphysics, to his value theory and metaethics.</p>

              <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Oxford-Handbook-Nietzsche-Handbooks/dp/019877673X?&linkCode=ll1&tag=philosophybre-20&linkId=535964c8a683cfcfed370493ee33effa&language=en_US&ref_=as_li_ss_tl">The Oxford Handbook of Nietzsche</a> is the most academic treatment of Nietzsche on this list, but rewards the reader with deep excavations and interpretations of his thinking.</p>

              <p>Each essay sheds new light on the great philosopher, making this an essential book for Nietzsche die-hards.</p>

              <h2>4. Introduction to Nietzsche and His 5 Greatest Ideas, by Philosophy Break</h2>
              <div className="article white">
                  <Link to="/introduction-to-nietzsche/">
                        <StaticImage src="../../../images/Nietzsche-promo.png" alt="Introduction to Nietzsche and His 5 Greatest Ideas" placeholder="blurred" />
                        <div className="article-info">
                            <h4>Your Myth-Busting Guide to Nietzsche & His 5 Greatest Ideas</h4>
                            <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BY PHILOSOPHY BREAK</p>
                            <p style={{margin: "0 0 3px"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span><span style={{fontSize: '12px'}}> (100+ reviews)</span></p>
                            <Link to="/introduction-to-nietzsche/" className="primary button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>Get Instant Access</Link>
                        </div>
                    </Link>
                </div>
                <p>If you’re looking for a modern, accessible, engaging introduction to Nietzsche’s philosophy with none of the nuance sacrificed, then the 2026 <Link to="/introduction-to-nietzsche/">Introduction to Nietzsche and His 5 Greatest Ideas</Link> is designed to help you learn everything you need to know about the brilliant philosopher in 42 self-paced, myth-busting lessons.</p>
                <p>This concise online guide is instantly accessible from any device, distills Nietzsche’s best and most misunderstood ideas (from God is dead to the Übermensch), and allows you to discuss Nietzsche and philosophy with other members (join 500+ active members inside).</p>
                <p>Of course, we’re a little biased, as we produced this one — but if you’re seeking to understand the fundamentals of Nietzsche’s best ideas, have clarity on exactly what he was trying to say across his many works, and discover why he is so influential, then <Link to="/introduction-to-nietzsche/">Introduction to Nietzsche and His 5 Greatest Ideas</Link> gets rave reviews (one reader describes it as “the best introduction to Nietzsche I’ve come across”), and might be just what you’re looking for!</p>

              <h2>5. Twilight of the Idols, by Friedrich Nietzsche</h2>
              <BookLink title="Twilight of the Idols" author="Friedrich Nietzsche" link="https://www.amazon.com/Nietzsche-Anti-Christ-Twilight-Cambridge-Philosophy/dp/0521016886?&linkCode=ll1&tag=philosophybre-20&linkId=87e4680fa2bf9969e82dc6acca3a2266&language=en_US&ref_=as_li_ss_tl" img={data.eight.childImageSharp.gatsbyImageData} />

              <p>Turning from secondary literature to Nietzsche’s primary works, the question, of course, is <i>where to start</i>.</p>
              
              <p>Well, as we discussed above, though one of his later works, Nietzsche’s 1889 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nietzsche-Anti-Christ-Twilight-Cambridge-Philosophy/dp/0521016886?&linkCode=ll1&tag=philosophybre-20&linkId=87e4680fa2bf9969e82dc6acca3a2266&language=en_US&ref_=as_li_ss_tl">Twilight of the Idols</a> offers one of the best gateways into Nietzsche’s philosophy as a whole.</p>

              <p>By no means ‘easy’ (secondary literature, including the previous entries on this list, is highly recommended for first-time Nietzsche readers), <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nietzsche-Anti-Christ-Twilight-Cambridge-Philosophy/dp/0521016886?&linkCode=ll1&tag=philosophybre-20&linkId=87e4680fa2bf9969e82dc6acca3a2266&language=en_US&ref_=as_li_ss_tl">Twilight of the Idols</a> nevertheless provides a better starting point than many of Nietzsche’s other works, for he was attempting to write a concise summary of some of the main ideas of his mature philosophy.</p>

              <p>Not only that, but <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nietzsche-Anti-Christ-Twilight-Cambridge-Philosophy/dp/0521016886?&linkCode=ll1&tag=philosophybre-20&linkId=87e4680fa2bf9969e82dc6acca3a2266&language=en_US&ref_=as_li_ss_tl">Twilight of the Idols</a> contains some fantastic and hilarious passages, it’s a good introduction to Nietzsche’s aphoristic style, and it’s rather short (i.e. less than 100 pages, compared to the 500+ pages of some of Nietzsche’s earlier works).</p>

              <p>This particular edition also features an updated, 21st-century translation by Judith Norman, and bundles in some introductory scholarly essays, as well as Nietzsche’s <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nietzsche-Anti-Christ-Twilight-Cambridge-Philosophy/dp/0521016886?&linkCode=ll1&tag=philosophybre-20&linkId=87e4680fa2bf9969e82dc6acca3a2266&language=en_US&ref_=as_li_ss_tl">Anti-Christ</a> — another great late work, in which Nietzsche offers his most scathing attack on Christianity — and <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nietzsche-Anti-Christ-Twilight-Cambridge-Philosophy/dp/0521016886?&linkCode=ll1&tag=philosophybre-20&linkId=87e4680fa2bf9969e82dc6acca3a2266&language=en_US&ref_=as_li_ss_tl">Ecce Homo</a>, his mania-afflicted autobiography which isn’t a good starting point, but a fascinating read nonetheless.</p>

              <p>If you’re looking for your ‘first’ Nietzsche book, this bundled edition of <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Nietzsche-Anti-Christ-Twilight-Cambridge-Philosophy/dp/0521016886?&linkCode=ll1&tag=philosophybre-20&linkId=87e4680fa2bf9969e82dc6acca3a2266&language=en_US&ref_=as_li_ss_tl">Twilight of the Idols</a> is a better, more accessible option than most, and will give you a feel for the great philosopher’s general ideas and approach.</p>

              <h2>6. The Gay Science, by Friedrich Nietzsche</h2>
              <BookLink title="The Gay Science" author="Friedrich Nietzsche" link="https://www.amazon.com/Gay-Science-Prelude-Rhymes-Appendix/dp/0394719859?&linkCode=ll1&tag=philosophybre-20&linkId=3c4dafed47ee00e7a6b9e9cfe65378e9&language=en_US&ref_=as_li_ss_tl" img={data.nine.childImageSharp.gatsbyImageData} />
              <p>Nietzsche’s early-middle works — <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Human-All-Too-Spirits-Revised/dp/0803283687?&linkCode=ll1&tag=philosophybre-20&linkId=0b44aea23ad08af64e0b581d3141cdad&language=en_US&ref_=as_li_ss_tl">Human, All Too Human</a>, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Daybreak-Thoughts-Prejudices-Cambridge-Philosophy/dp/0521599636?&linkCode=ll1&tag=philosophybre-20&linkId=8b7424375dc038acace05d69269b4713&language=en_US&ref_=as_li_ss_tl">Daybreak</a>, and <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Gay-Science-Prelude-Rhymes-Appendix/dp/0394719859?&linkCode=ll1&tag=philosophybre-20&linkId=3c4dafed47ee00e7a6b9e9cfe65378e9&language=en_US&ref_=as_li_ss_tl">The Gay Science</a> — are hugely significant for the development of his thinking, and the brilliantly rich aphorisms that make them up contain much of the intellectual raw material that form his later ideas.</p>

              <p>Though they are rather long (<a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Human-All-Too-Spirits-Revised/dp/0803283687?&linkCode=ll1&tag=philosophybre-20&linkId=0b44aea23ad08af64e0b581d3141cdad&language=en_US&ref_=as_li_ss_tl">Human, All Too Human</a> is over 500 pages), all are worth reading at some point; but if you’re seeking an accessible representative from this important era, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Gay-Science-Prelude-Rhymes-Appendix/dp/0394719859?&linkCode=ll1&tag=philosophybre-20&linkId=3c4dafed47ee00e7a6b9e9cfe65378e9&language=en_US&ref_=as_li_ss_tl">The Gay Science</a> is a good choice.</p>

              <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Gay-Science-Prelude-Rhymes-Appendix/dp/0394719859?&linkCode=ll1&tag=philosophybre-20&linkId=3c4dafed47ee00e7a6b9e9cfe65378e9&language=en_US&ref_=as_li_ss_tl">The Gay Science</a> is where Nietzsche first mentions his ideas of the <Link to="/articles/god-is-dead-nietzsche-famous-statement-explained/">death of God</Link>, the <Link to="/articles/eternal-recurrence-what-did-nietzsche-really-mean/">eternal recurrence</Link>, and the higher man — and seeing them in this early form sets one up nicely to better understand Nietzsche’s later works, like <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0679724656?&linkCode=ll1&tag=philosophybre-20&linkId=5ecc29f1c46a78a5417cf851de9c9757&language=en_US&ref_=as_li_ss_tl">Beyond Good & Evil</a>, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl">On the Genealogy of Morals</a>, and <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140441182?&linkCode=ll1&tag=philosophybre-20&linkId=e08afd371adcb4ca929948fef1ea6124&language=en_US&ref_=as_li_ss_tl">Thus Spoke Zarathustra</a>.</p>

              <h2>7. Beyond Good & Evil, by Friedrich Nietzsche</h2>
              <BookLink title="Beyond Good & Evil" author="Friedrich Nietzsche" link="https://www.amazon.com/gp/product/0679724656?&linkCode=ll1&tag=philosophybre-20&linkId=5ecc29f1c46a78a5417cf851de9c9757&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />
              <p>Nietzsche’s 1886 book <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0679724656?&linkCode=ll1&tag=philosophybre-20&linkId=5ecc29f1c46a78a5417cf851de9c9757&language=en_US&ref_=as_li_ss_tl">Beyond Good & Evil</a> is a rich, wide-ranging work in which he explores all the themes for which he is best known: the origins and nature of morality, the will to power, the failures and dangers of objective thinking, the vapidity of modernity, the shortcomings of ‘reason’, the short-sightedness and wrongheadedness of previous philosophers (including Socrates, Kant, Schopenhauer, and many others), as well as how we can overcome mediocrity and suffering and become who we truly are.</p>

              <p>Along with his next book, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl">On the Genealogy of Morals</a>, contemporary scholars increasingly recognize <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0679724656?&linkCode=ll1&tag=philosophybre-20&linkId=5ecc29f1c46a78a5417cf851de9c9757&language=en_US&ref_=as_li_ss_tl">Beyond Good & Evil</a> as perhaps Nietzsche’s most important and enduring contribution to philosophy.</p>

              <p>Though challenging in places, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0679724656?&linkCode=ll1&tag=philosophybre-20&linkId=5ecc29f1c46a78a5417cf851de9c9757&language=en_US&ref_=as_li_ss_tl">Beyond Good & Evil</a> is nevertheless incredibly rewarding once you’ve got a few of the Nietzsche fundamentals under your belt — and you can dip around various aphorisms and sections to ease your reading experience.</p>

              <h2>8. On the Genealogy of Morals, by Friedrich Nietzsche</h2>
              <BookLink title="On the Genealogy of Morals" author="Friedrich Nietzsche" link="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

              <p>Foregoing his usual aphoristic style, in his 1887 <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl">On the Genealogy of Morals</a>  Nietzsche adopts a tripartite essay form, perhaps making for a more conventional and connected reading experience than that of some of his other works.</p>

              <p>That said, it remains a dense, difficult, often bamboozling challenge: <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl">On the Genealogy of Morals</a> is Nietzsche’s most sustained critique of conventional morality and religion, where he introduces and discusses a diverse collection of novel ideas, including the slave revolt in morality, ‘master’ morality, and the ascetic ideal.</p>

              <p>Among the most studied of Nietzsche’s works today, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl">On the Genealogy of Morals</a> stands alongside <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0679724656?&linkCode=ll1&tag=philosophybre-20&linkId=5ecc29f1c46a78a5417cf851de9c9757&language=en_US&ref_=as_li_ss_tl">Beyond Good & Evil</a>, of which it was planned as an accompaniment, as his philosophical masterpiece.</p>

              <p>Indeed, if <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0679724656?&linkCode=ll1&tag=philosophybre-20&linkId=5ecc29f1c46a78a5417cf851de9c9757&language=en_US&ref_=as_li_ss_tl">Beyond Good & Evil</a> is the culmination of Nietzsche’s philosophy in his trademark aphoristic style, then <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl">On the Genealogy of Morals</a> is the culmination of his philosophy in essay form.</p>

              <p>If you’re interested in Nietzsche, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl">On the Genealogy of Morals</a>  belongs on your bookshelf (though some secondary literature would be very handy in helping you fully digest and appreciate it). </p>
              

              <h2>9. Thus Spoke Zarathustra, by Friedrich Nietzsche</h2>
              <BookLink title="Thus Spoke Zarathustra" author="Friedrich Nietzsche" link="https://www.amazon.com/gp/product/0140441182?&linkCode=ll1&tag=philosophybre-20&linkId=e08afd371adcb4ca929948fef1ea6124&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />

              <p>If <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0679724656?&linkCode=ll1&tag=philosophybre-20&linkId=5ecc29f1c46a78a5417cf851de9c9757&language=en_US&ref_=as_li_ss_tl">Beyond Good & Evil</a> and <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0141195371?&linkCode=ll1&tag=philosophybre-20&linkId=5ec5912e78e9d6bbdff90712b3dca5ea&language=en_US&ref_=as_li_ss_tl">On the Genealogy of Morals</a> are the culmination of Nietzsche’s philosophy as prose, then <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140441182?&linkCode=ll1&tag=philosophybre-20&linkId=e08afd371adcb4ca929948fef1ea6124&language=en_US&ref_=as_li_ss_tl">Thus Spoke Zarathustra</a> is the culmination of Nietzsche’s philosophy as poetry.</p>

              <p>Written between 1883 and 1885, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140441182?&linkCode=ll1&tag=philosophybre-20&linkId=e08afd371adcb4ca929948fef1ea6124&language=en_US&ref_=as_li_ss_tl">Thus Spoke Zarathustra</a> is a densely lyrical, epic prose-poem that Nietzsche regarded as his most important philosophical contribution (while some scholars agree with this judgment, many see it more as a literary achievement, with his philosophy better expressed elsewhere).</p>

              <p>Aping the New Testament in style, it follows the journey of a prophet named Zarathustra who comes down from the mountains to share his “philosophy of the future” (the parallels with Nietzsche’s own life are not, one might suspect, accidental).</p>

              <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140441182?&linkCode=ll1&tag=philosophybre-20&linkId=e08afd371adcb4ca929948fef1ea6124&language=en_US&ref_=as_li_ss_tl">Thus Spoke Zarathustra</a> is a challenging read and widely open to interpretation, with the key theme being that we must overcome all past value systems and cultivate self-affirmation — a theme embodied by Nietzsche’s character of the <Link to="/articles/ubermensch-explained-the-meaning-of-nietzsches-superman/">Übermensch</Link>, as well as his idea of the <Link to="/articles/eternal-recurrence-what-did-nietzsche-really-mean/">eternal recurrence</Link>.</p>

              <p>While definitely not the best place to start, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0140441182?&linkCode=ll1&tag=philosophybre-20&linkId=e08afd371adcb4ca929948fef1ea6124&language=en_US&ref_=as_li_ss_tl">Thus Spoke Zarathustra</a> is one of Nietzsche’s most famous works for good reason: its audacity, uniqueness, and style make it Nietzsche’s supreme literary achievement.</p>
                            
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
  seven: file(relativePath: {eq: "nietzsche-oxford.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  eight: file(relativePath: {eq: "nietzsche-twilight.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  nine: file(relativePath: {eq: "gayscience.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList