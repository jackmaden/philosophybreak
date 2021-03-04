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
import MailchimpPopUp from "../../../components/mailchimpPopUp"

export default ({ data, location }) => (
    <>
    <SEO title="Metaphysics Reading List – The Top 10 Books to Read" description="A curated reading list of the best and most essential books of and about metaphysics, including the writings of Aristotle, Spinoza, and Immanuel Kant." image={data.title.childImageSharp.fluid.src} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Metaphysics" number="10" img={data.title.childImageSharp.fluid} alt="Metaphysics" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">W</span>hat is the fundamental nature of reality? What is time? What is space? Is there a God? What is change? Why is reality like it is? These are just a few of the questions posed by the oft-derided, mind-melting realm of metaphysics. As 18th-century German philosopher Immanuel Kant puts it:</p> 
            <blockquote>
                <p>Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck.</p>
            </blockquote>
            <p>So what <i>is</i> metaphysics, exactly? Like most metaphysical questions, that’s not an easy one to answer. We might think based on the word itself that it refers to some ‘meta’ version of physics, but that's not quite accurate. 'Metaphysics' was actually coined by Andronicus of Rhodes, a bibliographer of Aristotle’s work in the first century BC. Andronicus was looking to categorize the works that came after Aristotle’s writings on ‘Physics’, and thus simply grouped them with the title ‘After Physics’ — or, ‘Metaphysics’. </p>
            <p>Putting its rather arbitrary etymological origins to one side, we can say the word ‘metaphysics’ refers to the exploration of basic issues around substance, existence, causality, determinism, possibility, and nothingness — all of which are discussed by Aristotle in those initial writings grouped by Andronicus, but also by philosophers throughout history. To borrow American philosopher Wilfrid Sellars famous definition of philosophy, the aim of metaphysics is essentially... </p>
            <blockquote>
                <p>to understand how things in the broadest possible sense of the term hang together in the broadest possible sense of the term.</p>
            </blockquote>
            <p>Of course, there is overlap with physics — and we might think that actually physicists, driven by scientific data and experiment, are much better placed to ponder questions on the fundamental nature of reality than metaphysicians, who depend on armchair reasoning and deductive logic to construct their theories.</p>
            <p>But, arguably, when it comes to reality, there are questions that go beyond physics’ scope — and it’s here where metaphysicians reside, restless in their creaking upholstery.</p>
            <p>A quick, dirty, and by no means foolproof way to distinguish metaphysics from physics is as follows: physics concerns the ‘how’ of reality, metaphysics concerns the ‘what’ and the ‘why’.</p> <p>For example, physicists may investigate the charge of a particle. A metaphysician asks what <i>is</i> charge, and what <i>is</i> a particle? A physicist may investigate the origins of the universe and theorize about its fundamental laws; a metaphysician asks <i>why</i> the universe exists — and <i>why</i> its laws obtain the way they do. A physicist uses mathematics to express theory; a metaphysician asks what numbers are. Indeed, ontology — the study of being or what it means for something to exist — has been a key battleground for metaphysicians throughout the ages.</p>
            <p>Physicists may very well ask these questions too; but when they do so, they are being metaphysicians. At root, many scientific and philosophical problems — including <Link to="/reading-lists/free-will/">free will</Link>, <Link to="/reading-lists/consciousness/">consciousness</Link>, and the mind / body dilemma — are metaphysical in nature.</p>
            <p>Exploring such abstract, evidence-resistant questions might seem pointless. Why argue about things we may never have an answer to? Why spill oceans of ink over things so far removed from everyday life?</p>
            <p>But defenders of metaphysics would state that it’s only by running up against the limitations of our language, by attempting to be clear-sighted at the hazy frontiers of our knowledge, that we can inch-by-inch, foot-by-foot, make progress. And besides: dwelling on the <i>actuality</i> behind life is interesting, and good for the soul. <Link to="/articles/bertrand-russell-why-philosophy-matters/">As Bertrand Russell puts it</Link> about philosophy generally, in a quotation that could readily be used to defend the study of metaphysics specifically:</p>
            <blockquote>
                <p>Philosophy is to be studied, not for the sake of any definite answers to its questions since no definite answers can, as a rule, be known to be true, but rather for the sake of the questions themselves; because these questions enlarge our conception of what is possible, enrich our intellectual imagination and diminish the dogmatic assurance which closes the mind against speculation; but above all because, through the greatness of the universe which philosophy contemplates, the mind also is rendered great, and becomes capable of that union with the universe which constitutes its highest good.</p>
            </blockquote>
            <p>If you’re ready to explore the murky yet fascinating world of metaphysics further, we’ve assembled the best books about the subject, ranging from accessible and introductory surveys of the field, to stone-cold metaphysical classics from philosophers down the ages.</p>
            <p>Enough preamble — bring on the books!</p>


            <h2>1. Metaphysics: A Very Short Introduction, by Stephen Mumford</h2>
            <p>Published in 2012, British philosopher Stephen Mumford’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0199657122/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199657122&linkId=1da27249a864b2272832270abdc1d20a">Metaphysics: A Very Short Introduction</a> is a fantastic place to start for anyone with a budding interest in metaphysics. Mumford gets right to the heart of the matter — discussing time, substance, emergentism, and more — providing a clear and simple path through the development of metaphysical thought in the Western tradition. Coming in at an accessible 128 pages, this is a very nice entry point to metaphysics.</p>
            <BookLink title="Metaphysics: A Very Short Introduction" author="Stephen Mumford" link="http://www.amazon.com/gp/product/0199657122/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199657122&linkId=1da27249a864b2272832270abdc1d20a" img={data.one.childImageSharp.fluid} />

            <h2>2. Metaphysics: An Introduction to Contemporary Debates and Their History, by Anna Marmodoro</h2>
            <p>Anna Marmodoro holds the Chair of Metaphysics in the Department of Philosophy at Durham University, and in her 2019 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/B07PWHJNQ4/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07PWHJNQ4&linkId=a264c1b6bbcacd559b1c3500c5a2fd8e">Metaphysics: An Introduction to Contemporary Debates and Their History</a> she teams up with philosopher Erasmus Mayr to introduce the central issues in metaphysics. Discussing substance, properties, modality and essence, causality, determinism and free will, Marmodoro and Mayr outline the latest theories and arguments in the field, while drawing on extensive references to philosophy’s history. At 232 pages, this is a more in-depth introduction to metaphysics that engagingly presents all sides of the debates.</p>
            <BookLink title="Metaphysics: An Introduction to Contemporary Debates and Their History" author="Anna Marmodoro" link="http://www.amazon.com/gp/product/B07PWHJNQ4/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07PWHJNQ4&linkId=a264c1b6bbcacd559b1c3500c5a2fd8e" img={data.two.childImageSharp.fluid} />

            <h2>3. Metaphysics: A Guide and Anthology, by Tim Crane</h2>
            <p>If you’re seeking a one-stop shop for all things metaphysics, look no further than philosopher Tim Crane’s epic <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0199261970/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199261970&linkId=89a1a445813858d647b14db9cfa19618">Metaphysics: A Guide and Anthology</a>, published in 2004. Crane provides an expertly organized collection of fifty-four of the best metaphysical writings from philosophers old and new, structured into ten sections: God, idealism and realism, being, universals and particulars, necessity and contingency, causation, space and time, identity, mind and body, and free will and determinism. The best thing? Crane offers a substantial general introduction, as well as detailed introductions to each section to guide readers through them. At just under 800 pages, this anthology’s a beast — but you won’t need another.</p>
            <BookLink title="Metaphysics: A Guide and Anthology" author="Tim Crane" link="http://www.amazon.com/gp/product/0199261970/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199261970&linkId=89a1a445813858d647b14db9cfa19618" img={data.three.childImageSharp.fluid} />

            <h2>4. The Metaphysics, by Aristotle</h2>
            <p>Turning from introductions and anthologies to primary metaphysical texts, where better to start than with the book from which the subject derives its name? Aristotle’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994">The Metaphysics</a>, written over two thousand years ago, is considered one of the greatest philosophical works of all time. At the heart of the book lie three questions. Firstly, what is existence, and what sorts of things exist in the world? Secondly, how can things continue to exist, and yet undergo the change we see about us in the natural world? And lastly, how can this world be understood? Aristotle’s fascinating answers to these questions set in motion two millennia of debate from thinkers all over the globe, making <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994">The Metaphysics</a> an essential addition.</p>
            <BookLink title="The Metaphysics" author="Aristotle" link="http://www.amazon.com/gp/product/0140446192/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140446192&linkId=c2cd9cc6abb3448df7a7b247e77ef994" img={data.four.childImageSharp.fluid} />

            <h2>5. Meditations on First Philosophy, by René Descartes</h2>
            <p>René Descartes’s 1641 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1107665736/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107665736&linkId=60e77f9fd4ff3c655b9bed5f1eac5124">Meditations on First Philosophy</a> is perceived to mark the beginning of modern philosophy in the Western tradition, and is still carefully studied in undergraduate philosophy classes as a foundational text to this day. No wonder: in highly accessible, confessional style, Descartes manages to articulate some of the most troubling philosophical problems we face — all in under 100 pages. Descartes's <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1107665736/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107665736&linkId=60e77f9fd4ff3c655b9bed5f1eac5124">Meditations on First Philosophy</a> is often judged to be a work of epistemology, and it does indeed feature on our <Link to="/reading-lists/epistemology">epistemology reading list</Link>; but what Descartes set out to do with this work was establish proofs for the existence of God, as well as for the substance duality of body and soul. This is very much a work of metaphysics as much as it is epistemology, and its ease of digestion renders it essential to this list.</p>
            <BookLink title="Meditations on First Philosophy" author="René Descartes" link="http://www.amazon.com/gp/product/1107665736/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107665736&linkId=60e77f9fd4ff3c655b9bed5f1eac5124" img={data.five.childImageSharp.fluid} />

            <h2>6. Ethics, by Spinoza</h2>
            <p>It’s said that anyone who reads Spinoza’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140435719/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140435719&linkId=40b9b0a44d0cbd360115ad7e2861c3bd">Ethics</a> the first time will enjoy it — but when they read it a second, third, and fourth time, they will forever be in love not just with Spinoza but with all things philosophy. Published shortly after his death in 1677, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140435719/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140435719&linkId=40b9b0a44d0cbd360115ad7e2861c3bd">Ethics</a> is Spinoza's greatest work — a fully cohesive philosophical system that strives to provide a metaphysical basis for reality, upon which we can comprehend the meaning of an ethical life. It is a wonderful example of genius at work.</p>
            <BookLink title="Ethics" author="Spinoza" link="http://www.amazon.com/gp/product/0140435719/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140435719&linkId=40b9b0a44d0cbd360115ad7e2861c3bd" img={data.six.childImageSharp.fluid} />

            <h2>7. An Enquiry Concerning Human Understanding, by David Hume</h2>
            <p>Following the metaphysical works of wonder so far listed, Scottish philosopher David Hume gives us a much-needed jolt from grand metaphysical systems with his definitive statement on what he saw as the ‘superstition’ of false metaphysics and religion: “If we take in our hand any volume; of divinity or school metaphysics, for instance; let us ask, Does it contain any abstract reasoning concerning quantity or number? No. Does it contain any experimental reasoning concerning matter of fact and existence? No. Commit it then to the flames: for it can contain nothing but sophistry and illusion.” A favorite of empiricists everywhere, Hume’s 1748 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0199549907/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199549907&linkId=eb8de3c3263f36cd332e4d18b0cd6665">An Enquiry Concerning Human Understanding</a> pulls no punches in its skepticism of thinking apparently untethered from the ‘real’ world. Like Descartes’s Meditations, Hume’s Enquiry straddles the line between both <Link to="/reading-lists/metaphysics">epistemology</Link> and metaphysics, and is included here as it serves not only as a core text, but as a fantastic introduction to philosophy as a whole.</p>
            <BookLink title="An Enquiry Concerning Human Understanding" author="David Hume" link="http://www.amazon.com/gp/product/0199549907/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199549907&linkId=eb8de3c3263f36cd332e4d18b0cd6665" img={data.seven.childImageSharp.fluid} />

            <h2>8. Prolegomena to Any Future Metaphysics, by Immanuel Kant</h2>
            <p>Immanuel Kant wrote his 1783 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0872205932/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872205932&linkId=c2281161b0ac2ae92f2fd300c7538ca0">Prolegomena to Any Future Metaphysics</a> after being disappointed with the reception of his masterwork, <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/product/0140447474/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140447474&linkId=51fb5062b0477e5f7841f91e58584003">Critique of Pure Reason</a>, which he blamed (not incorrectly) on the fact that no one really understood it. In the Prolegomena, therefore, Kant attempts to distill the Critique’s core themes into a more readable form (more readable but still very much Kant, of course). Kant seeks to fuse the rationalist systems of thinkers like Spinoza with the empiricism of skeptics like Hume, and in doing so builds one of the most intuitive, intelligent, and influential metaphysical systems in history. Though he himself derided many writings on the subject, no bookshelf on metaphysics is complete without Kant.</p>
            <BookLink title="Prolegomena to Any Future Metaphysics" author="Immanuel Kant" link="http://www.amazon.com/gp/product/0872205932/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872205932&linkId=c2281161b0ac2ae92f2fd300c7538ca0" img={data.eight.childImageSharp.fluid} />

            <h2>9. Being and Time, by Martin Heidegger</h2>
            <p>Hold your horses, says Martin Heidegger: we’ve all massively missed something. Aristotle led us up the garden path. He created all these metaphysical problems that everyone argues about, when really the <i>actual</i> problem has been <i>ontology</i>, the question of being — and everyone’s skimmed over it! With his landmark 1927 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0061575593/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0061575593&linkId=9b6de9fcfa7f580421a8de925fa16d91">Being and Time</a>, Heidegger seeks to redress the balance by focusing like a laser, for hundreds of pages, on what it means to Be. What is the nature of our existence, as <i>we</i> experience it? Only by paying proper attention to this question, argues Heidegger, can we hope to get anywhere. Not for the faint hearted, this startling book has had a staggering influence on philosophy, art, literature, and existentialism since its publication — and deeply rewards those who tackle it.</p>
            <BookLink title="Being and Time" author="Martin Heidegger" link="http://www.amazon.com/gp/product/0061575593/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0061575593&linkId=9b6de9fcfa7f580421a8de925fa16d91" img={data.nine.childImageSharp.fluid} />

            <h2>10. Sameness and Substance Renewed, by David Wiggins</h2>
            <p>A classic of contemporary metaphysics, David Wiggins’s 2001 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0521456193/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521456193&linkId=76ea2339d23842cb3607254189cb816c">Sameness and Substance Renewed</a> brings us kicking and screaming into the 21st century by... discussing substance, properties, modality, determinism, and the usual suspects in the line up of metaphysical conundrums. In all seriousness, this important book proves metaphysics has as much relevance today as it ever has, and will appeal to a wide range of readers in metaphysics, philosophical logic, and analytic philosophy.</p>
            <BookLink title="Sameness and Substance Renewed" author="David Wiggins" link="http://www.amazon.com/gp/product/0521456193/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521456193&linkId=76ea2339d23842cb3607254189cb816c" img={data.ten.childImageSharp.fluid} />
            
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
        title: file(relativePath: {eq: "metaphysics.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        one: file(relativePath: {eq: "metaphysics-shortintro.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        two: file(relativePath: {eq: "metaphysics-history.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        three: file(relativePath: {eq: "metaphysics-anthology.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        four: file(relativePath: {eq: "metaphysics-aristotle.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        five: file(relativePath: {eq: "metaphysics-descartes.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        six: file(relativePath: {eq: "metaphysics-spinoza.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        seven: file(relativePath: {eq: "metaphysics-hume.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        eight: file(relativePath: {eq: "metaphysics-kant.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        nine: file(relativePath: {eq: "metaphysics-heidegger.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        ten: file(relativePath: {eq: "metaphysics-wiggins.jpg"}) {
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