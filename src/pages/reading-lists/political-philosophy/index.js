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
    <SEO title="Political Philosophy Reading List – The Top 14 Books to Read" description="A curated reading list of the best and most essential books of and about political philosophy, including the writings of Niccolò Machiavelli, Thomas Hobbes, and Karl Marx." image={data.title.childImageSharp.fluid.src} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Political Philosophy" number="14" img={data.title.childImageSharp.fluid} alt="Political Philosophy" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">W</span>hat does a just society look like? What gives states legitimacy, and what level of authority should sovereign powers wield? What’s the best way to organize people? What purpose should society serve, if any?  <Link to="/articles/hannah-arendt-on-standing-up-to-the-banality-of-evil/">Where does tyranny or evil come from</Link>, and how can its emergence be stopped? Are we born with inherent human rights? If so, what are they? If not, what rights should be enshrined in law and why?</p>

            <p>These are just a few of the questions tackled in political philosophy, a branch of philosophy related to <Link to="/reading-lists/ethics-and-morality/">ethics and morality</Link> but centered more specifically around questions concerning justice, property, authority, liberty, and rights at structural and systemic levels.</p> 

            <p>From introductions and anthologies to grand political treatises from individual thinkers, this reading list is designed to provide you with a well-rounded view of the most important political contributions from philosophers down the ages. While there are many more books that could appear on this list, those featured should serve as representatives of particular strands of political thought, and gateways to further exploration.
            </p>

            <h2>1. An Introduction to Political Philosophy, by Jonathan Wolff</h2>
            <p>First published in 1996 and now in its third edition, Jonathan Wolff’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0199658013/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199658013&linkId=3e75aca73cb8d6b78e2996c132f9a1e6">An Introduction to Political Philosophy</a> is a fantastic starting place for anyone curious about political philosophy. Wolff discusses all the core positions in political philosophy with conversational yet wonderfully enlightening prose, investigating answers to questions around power, liberty, and justice. At an accessible 250 pages, this is a very nice entry point to political philosophy.</p>
            <BookLink title="An Introduction to Political Philosophy" author="Jonathan Wolff" link="http://www.amazon.com/gp/product/0199658013/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199658013&linkId=3e75aca73cb8d6b78e2996c132f9a1e6" img={data.one.childImageSharp.fluid} />

            <h2>2. Justice: What’s the Right Thing to Do? By Michael J. Sandel</h2>
            <p>Based on his legendary Harvard course, Michael J. Sandel’s 2008 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0374532508/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0374532508&linkId=366c35d1ab6ddb6964933ff6d038f696">Justice: What’s the Right Thing to Do?</a> introduces readers to the philosophical concepts that lurk beneath contemporary conflicts in politics and beyond. While Sandel discusses core approaches to <Link to="/reading-lists/ethics-and-morality/">ethics and morality</Link>, he structures the conversation around contemporary political and societal concerns, touching on such issues as affirmative action, same-sex marriage, physician-assisted suicide, abortion, national service, the moral limits of markets, and more. For anyone interested in the ideologies and thinking that drive many of today’s most contentious issues, this is a hugely informative and entertaining read.</p>
            <BookLink title="Justice: What’s the Right Thing to Do?" author="Michael J. Sandel" link="http://www.amazon.com/gp/product/0374532508/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0374532508&linkId=366c35d1ab6ddb6964933ff6d038f696" img={data.two.childImageSharp.fluid} />

            <h2>3. Arguing About Political Philosophy, by Matt Zwolinski</h2>
            <p>If you’re looking for a one-stop shop for all things political philosophy, look no further than Matt Zwolinkski’s epic 2009 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0415535824/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415535824&linkId=4c3660fc58faab12a2d075c9d46ace0c">Arguing About Political Philosophy</a>. Its 740 pages contain extracts of the most important political contributions from philosopher’s past and present, ranging from classic thinkers such as Hobbes and Rousseau, through to more contemporary figures like Robert Nozick and G.A. Cohen. Brilliantly organized and featuring helpful contextual commentaries, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0415535824/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415535824&linkId=4c3660fc58faab12a2d075c9d46ace0c">Arguing About Political Philosophy</a> is an essential addition for any serious student of political philosophy.</p>
            <BookLink title="Arguing About Political Philosophy" author="Matt Zwolinski" link="http://www.amazon.com/gp/product/0415535824/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415535824&linkId=4c3660fc58faab12a2d075c9d46ace0c" img={data.three.childImageSharp.fluid} />

            <h2>4. Republic, by Plato</h2>
            <p>Turning from introductions and anthologies to primary texts, where better to start than with a discussion of political philosophy that, though over two thousand years old, is one of the subject’s finest works and still drives discussion today? In his <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0872201368/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872201368&linkId=ab526722b79e2898d068d1febf19b3b2">Republic</a>, Ancient Greek philosopher Plato sets out to answer the question, ‘what is justice?’ — and in doing so not only provides wonderful commentary around the meaning of justice itself, but also shares his vision for how an ideal society could achieve it. And guess what? Plato’s ideal society is governed not through popularly democratic means but by authoritarian philosopher kings. Enlightening and controversial to this day, Plato's <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0872201368/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872201368&linkId=ab526722b79e2898d068d1febf19b3b2">Republic</a> is an essential text for anyone interested in the foundations and development of political thinking in Western society.</p>
            <BookLink title="Republic" author="Plato" link="http://www.amazon.com/gp/product/0872201368/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872201368&linkId=ab526722b79e2898d068d1febf19b3b2" img={data.four.childImageSharp.fluid} />

            <h2>5. The Prince, by Niccolò Machiavelli</h2>
            <p>It’s all well and good discussing justice and building ideal societies, but how do you actually get your hands on power? Niccolò Machiavelli's <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140449159/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449159&linkId=15c693ea85f8de374b0dd9d883bce5b5">The Prince</a> shocked Europe upon its 1532 publication. Intended as a ruthless manual for aspiring rulers, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140449159/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449159&linkId=15c693ea85f8de374b0dd9d883bce5b5">The Prince</a> abandons conventional notions of morality and justice yet remains packed full of incredible insights into human psychology. For those who want a peek behind all the grandstanding and lofty language of political philosophy, Machiavelli’s short, sharp work provides piercing commentary as to how the show actually runs — and is as relevant today as five centuries ago.</p>
            <BookLink title="The Prince" author="Niccolò Machiavelli" link="http://www.amazon.com/gp/product/0140449159/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449159&linkId=15c693ea85f8de374b0dd9d883bce5b5" img={data.five.childImageSharp.fluid} />

            <h2>6. Leviathan, by Thomas Hobbes</h2>
            <p>“The life of man is solitary, poor, nasty, brutish, and short” — so writes English philosopher Thomas Hobbes in his monumental 1651 epic, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0872201775/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872201775&linkId=d8221572159a6dbbcfd2971585763f18">Leviathan</a>. One of the earliest and most influential examples of social contract theory, Hobbes seeks to legitimize sovereign power by demonstrating that conflict among individuals is inevitable, and that peace can only be achieved if individuals give up certain freedoms to a central power (in Hobbes' case, the monarchy) in exchange for certain benefits, such as protection. A difficult, challenging, yet masterly work, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0872201775/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872201775&linkId=d8221572159a6dbbcfd2971585763f18">Leviathan</a>’s endurance over centuries of intense critique indicates its power as a political work, and renders it an essential read for committed students of political philosophy.</p>
            <BookLink title="Leviathan" author="Thomas Hobbes" link="http://www.amazon.com/gp/product/0872201775/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0872201775&linkId=d8221572159a6dbbcfd2971585763f18" img={data.six.childImageSharp.fluid} />

            <h2>7. Second Treatise of Government, by John Locke</h2>
            <p>The influence of John Locke’s 1689 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0486424642/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486424642&linkId=dfa7ae0d2efd4cc9a965866ed9a19c4e">Second Treatise of Government</a> can be observed simply by examining the constitutions of any democratically-elected government today. Widely regarded as <i>the</i> foundational text of modern liberalism, in this short work Locke asserts that we are all born equal and endowed with natural rights and freedoms, and that governments can never be considered legitimate unless they have the consent of the people. This particular edition also features Locke’s Letter Concerning Toleration, published in the same year, that aimed to end Christianity's wars of religion and called for the separation of church and state.</p>
            <BookLink title="Second Treatise of Government" author="John Locke" link="http://www.amazon.com/gp/product/0486424642/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486424642&linkId=dfa7ae0d2efd4cc9a965866ed9a19c4e" img={data.seven.childImageSharp.fluid} />

            <h2>8. Narrative of the Life of Frederick Douglass, by Frederick Douglass</h2>
            <p>Frederick Douglass’s 1845 autobiography <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0486284999/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486284999&linkId=96de0fc546cda5ef6aa4edf6f6f169ad">Narrative of the Life of Frederick Douglass</a> differs from the other books on this list in that it doesn’t necessarily put forward or critique a general or abstract political system, but rather uses first-person storytelling to focus like a laser on a particular political issue: slavery. A former slave himself, in this vivid memoir Frederick Douglass recalls his experiences and advocates for civil rights with blazing intensity. Highly influential in the eventual abolition of slavery in the USA, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0486284999/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486284999&linkId=96de0fc546cda5ef6aa4edf6f6f169ad">Narrative of the Life of Frederick Douglass</a> brings key tenets of liberal political philosophy to life, and belongs on the bookshelf of anyone interested in how impassioned writing has the power to transform the political landscape.</p>
            <BookLink title="Narrative of the Life of Frederick Douglass" author="Frederick Douglass" link="http://www.amazon.com/gp/product/0486284999/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0486284999&linkId=96de0fc546cda5ef6aa4edf6f6f169ad" img={data.fourteen.childImageSharp.fluid} />

            <h2>9. Das Kapital, by Karl Marx</h2>
            <p>Would a list of the most important works in political philosophy be complete without featuring the creator of one of the most influential political theories of all time? The blueprint for Marxist thinking, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/145388632X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=145388632X&linkId=e787e2b98d768cc3fb12954260c0e13d">Das Kapital</a> is Karl Marx's 1867 magnum opus, in which he builds out his sustained critique of capitalism and private property, and asserts his vision for a system of common ownership of the means of production — a communist society built around the maxim, “from each according to his ability, to each according to his need.” Love him or loathe him, understanding the development of global political philosophy would not be possible without studying Karl Marx.</p>
            <BookLink title="Das Kapital" author="Karl Marx" link="http://www.amazon.com/gp/product/145388632X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=145388632X&linkId=e787e2b98d768cc3fb12954260c0e13d" img={data.eight.childImageSharp.fluid} />

            <h2>10. The Open Society and Its Enemies, by Karl Popper</h2>
            <p>Austrian-British philosopher Karl Popper’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0415610214/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415610214&linkId=a2d7f3a34eae95fc6b22bbd99c44c85a">The Open Society and Its Enemies</a>, first published in 1945, is famous for skewering the politics of two highly-regarded philosophers who also appear on this list, Plato and Marx. After reading Popper’s devastating critiques of each thinker, it is difficult to return to their political ideas with confidence. However, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0415610214/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415610214&linkId=a2d7f3a34eae95fc6b22bbd99c44c85a">The Open Society and Its Enemies</a> should not only be thought of as a successful negative work: Popper also posits one of the most profound conceptions and defences of democracy ever written, arguing that only if criticism is allowed to flourish in society can progress be made. Popper’s entertaining and accessible style, as well as his lucid consideration of other significant political thinkers, makes this a highly recommended read.</p>
            <BookLink title="The Open Society and Its Enemies" author="Karl Popper" link="http://www.amazon.com/gp/product/0415610214/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0415610214&linkId=a2d7f3a34eae95fc6b22bbd99c44c85a" img={data.nine.childImageSharp.fluid} />
            
            <h2>11. The Second Sex, by Simone de Beauvoir</h2>
            <p>The works listed so far have all been written by — and mostly <i>for</i> — men. In the development of modern Western societies, women were largely excluded from the political arena in both literal and theoretical terms until great thinkers like English philosopher Mary Wollstonecraft began making waves with powerful works like her 1792 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/B086Y5MP19/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B086Y5MP19&linkId=dcbe64a932b964fa14ef77c47c519747">A Vindication of the Rights of Woman</a>, in which she challenged the dominant narrative that women shouldn’t receive a rational education. While Wollstonecraft and others sowed the seeds for the ‘first wave’ of feminist philosophy and activism, French existentialist Simone de Beauvoir’s 1949 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/030727778X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=030727778X&linkId=9ce86319e788dda05f381207ceabe726">The Second Sex</a> marks the starting point of second-wave feminism, whereby the aim is to achieve gender equality beyond voting rights. Beauvoir dissects how “one is not born, but rather becomes, a woman” — shining a light on the negative fallout and injustices of stereotyped gender expectations. Required reading for anyone who believes in the equality of the sexes, the central messages of <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/030727778X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=030727778X&linkId=9ce86319e788dda05f381207ceabe726">The Second Sex</a> are as important today as they were for the housewives of the forties and fifties.</p>
            <BookLink title="The Second Sex" author="Simone de Beauvoir" link="http://www.amazon.com/gp/product/030727778X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=030727778X&linkId=9ce86319e788dda05f381207ceabe726" img={data.ten.childImageSharp.fluid} />
            
            <h2>12. The Origins of Totalitarianism, by Hannah Arendt</h2>
            <p>After the disastrous ideological experiments of the 20th century, German-born American political philosopher Hannah Arendt diagnoses where it all went wrong. Exploring the institutions, operations, and techniques of totalitarian movements, Arendt’s 1951 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0156701537/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0156701537&linkId=7ac4269bfc9bf734ae4a3b2a105c8292">The Origins of Totalitarianism</a> focuses on two genuine forms of totalitarian government in our recent history — Nazi Germany and Stalinist Russia — which she shrewdly establishes as two sides of the same coin, rather than opposing philosophies of Right and Left. Covering the role of propaganda, the use of fear, and the nature of isolation and loneliness as preconditions for totalitarian rule — the insights in Arendt’s tour de force are as piercing and relevant today as ever before, rendering <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0156701537/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0156701537&linkId=7ac4269bfc9bf734ae4a3b2a105c8292">The Origins of Totalitarianism</a> utterly essential for anyone interested in political philosophy and its real-world application.</p>
            <BookLink title="The Origins of Totalitarianism" author="Hannah Arendt" link="http://www.amazon.com/gp/product/0156701537/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0156701537&linkId=7ac4269bfc9bf734ae4a3b2a105c8292" img={data.eleven.childImageSharp.fluid} />

            <h2>13. A Theory of Justice, by John Rawls</h2>
            <p>Since its 1971 publication, John Rawls’ <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0674000781/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0674000781&linkId=fcaf217689eb497cbcb91435aa7fdb23">A Theory of Justice</a> has quickly established itself as a classic of political philosophy. Rawls takes as his starting place the idea of the “veil of ignorance”. Essentially, imagine you had no idea where you’d end up in society. You could be rich or poor, healthy or sick. Now, what rules or laws would you agree to before entering society at this random place? Rawls argues most people would agree to basic healthcare, fairness, and so on — and uses this as his basis for his “justice as fairness” social contract whereby the state has an integral role to play in the lives of its citizens, which he builds upon in detail throughout this brilliant and significant work. On the syllabus of most if not all contemporary political philosophy courses, Rawls’ <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0674000781/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0674000781&linkId=fcaf217689eb497cbcb91435aa7fdb23">A Theory of Justice</a> is an essential read.</p>
            <BookLink title="A Theory of Justice" author="John Rawls" link="http://www.amazon.com/gp/product/0674000781/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0674000781&linkId=fcaf217689eb497cbcb91435aa7fdb23" img={data.twelve.childImageSharp.fluid} />

            <h2>14. Anarchy, State, and Utopia, by Robert Nozick</h2>
            <p>Published just three years after Rawls’ <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0674000781/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0674000781&linkId=fcaf217689eb497cbcb91435aa7fdb23">A Theory of Justice</a>, Robert Nozick lays out a substantially different political vision in his electrifying 1974 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0465051006/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0465051006&linkId=9df3bf5291c28f440a369e4049b3956a">Anarchy, State, and Utopia</a>. Regarded now as a foundational text in classical libertarian thought, Nozick provokes the reader with a series of mind-bending, powerful, and often very funny thought experiments on seemingly everyday assumptions we make about political philosophy. In contrast to Rawls, Nozick advocates for an extremely minimal state, arguing anything beyond the “narrow functions of protection against force, theft, fraud, enforcement of contracts” violates individual human rights. <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0465051006/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0465051006&linkId=9df3bf5291c28f440a369e4049b3956a">Anarchy, State, and Utopia</a> is a brilliant discussion of some of the most contentious issues in contemporary political theory that anyone interested in political philosophy would benefit from reading.</p>
            <BookLink title="Anarchy, State, and Utopia" author="Robert Nozick" link="http://www.amazon.com/gp/product/0465051006/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0465051006&linkId=9df3bf5291c28f440a369e4049b3956a" img={data.thirteen.childImageSharp.fluid} />
            
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
        title: file(relativePath: {eq: "politics.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        one: file(relativePath: {eq: "politics-wolff.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        two: file(relativePath: {eq: "politics-justice.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        three: file(relativePath: {eq: "politics-arguing.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        four: file(relativePath: {eq: "politics-plato.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        five: file(relativePath: {eq: "politics-prince.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        six: file(relativePath: {eq: "politics-hobbes.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        seven: file(relativePath: {eq: "politics-locke.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        eight: file(relativePath: {eq: "politics-marx.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        nine: file(relativePath: {eq: "politics-popper.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        ten: file(relativePath: {eq: "politics-beauvoir.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        eleven: file(relativePath: {eq: "politics-arendt.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        twelve: file(relativePath: {eq: "politics-rawls.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        thirteen: file(relativePath: {eq: "politics-nozick.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 230) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        fourteen: file(relativePath: {eq: "politics-douglas.jpg"}) {
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