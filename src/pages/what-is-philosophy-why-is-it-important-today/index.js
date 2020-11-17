import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {useSpring, animated} from 'react-spring'

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import { SubscriptionForm } from '../../components/subscriptionForm'
import PanelReadingList from '../../components/panelReadingList'
import PanelArticleList from "../../components/panelArticleList"
import { WindowHeightWrapper } from "../../components/windowHeightWrapper"
import { ScrollProgressBar } from "../../components/scrollProgressBar"
import WatermarkBreak from "../../components/watermarkBreak"

export default ({ data, location }) => {
    const dropIn = useSpring({opacity: 1, marginTop: '0px', delay: 200, from: {opacity: 0, marginTop: '-50px'}})
    const fadeIn = useSpring({opacity: 1, delay: 1000, from: {opacity: 0}})

    return (
        <>
        <SEO title="What is Philosophy, and Why is it Important Today?" description="Your simple guide to what philosophy involves, why exploring it could make a significant difference to your life, and next steps for discovering its most insightful ideas." image={data.space.childImageSharp.fluid.src} pathname={location.pathname} />
        <Layout>
        <Navigation />
            <ScrollProgressBar />
            {/*page title*/}
            <WindowHeightWrapper className="pillar">
                <Img fluid={data.space.childImageSharp.fluid} fadeIn={false} loading="eager" alt="What is philosophy?" />
                <div className="darkener"></div>
                <animated.div style={dropIn} className="page-center text-center mid-width">
                    <h1 style={{color: "#fff"}}>What is Philosophy, and Why is it Important Today?</h1>
                    <div class="separator"></div>
                    <p className="large-grey-font" style={{color: "#fff"}}>Your quick guide to what philosophy involves, why exploring it could make a significant difference to your life, and next steps for learning about its essential ideas.</p>
                    <animated.p style={fadeIn} className="time break text-center"><AnchorLink href="#break-start" style={{ textDecoration: "none" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="eed70a5d-3465-468c-b304-842a4dc6abf4" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.35" stopColor="#1aa9ff"/><stop offset="0.44" stopColor="#22acff"/><stop offset="0.58" stopColor="#37b4ff"/><stop offset="0.75" stopColor="#5ac1ff"/><stop offset="0.89" stopColor="#7cceff"/></linearGradient></defs><title>Philosophy Break</title><g id="a694bf81-a4e3-4986-9301-cf65ad1fcac0" data-name="Layer 1"><path d="M250,499.5A249.5,249.5,0,0,1,73.58,73.58,249.5,249.5,0,1,1,426.42,426.42,247.84,247.84,0,0,1,250,499.5Z" fill="#fff"/><path d="M250,1A248.93,248.93,0,0,1,426.07,426.07a249,249,0,1,1-273-405.5A247.32,247.32,0,0,1,250,1m0-1C111.93,0,0,111.93,0,250S111.93,500,250,500,500,388.07,500,250,388.07,0,250,0Z" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#eed70a5d-3465-468c-b304-842a4dc6abf4)"/></g><g id="4dca974f-b6d8-4b4f-b13a-2551c52acb2b" data-name="Layer 3"><path d="M462,325l-1.24,3.94C428.79,414.27,346.49,475,250,475c-98,0-181.41-62.69-212.25-150.16L461,325"/></g><g id="1a30999d-582a-4788-8e9a-e662ea057375" data-name="Layer 2"><polygon points="38 325 103 225 152 281 250 112 346 221 377 182 469 306 38 325" fill="#fff"/></g><g id="93c33bb2-e13c-4346-ae21-ff33957a2372" data-name="Layer 4"><polyline points="38 326 108 250.66 152 278.91 250 148 346 221.46 377 208.28 469 306.22 462 326"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/></g></svg><span style={{color:"#fff"}} className="bottom-blue-border">GET STARTED&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></animated.p>
                </animated.div>
            </WindowHeightWrapper>
            {/*page content*/}
            <div className="grey-background small-pad">
            <div className="page-center text-center" id="break-start">
                <h5>Contents:</h5>
                <p><b>I.</b> <AnchorLink href="#section1">What is Philosophy? A Quick, Simple Definition</AnchorLink></p>
                <p><b>II.</b> <AnchorLink href="#section2">How Can Philosophy Improve Your Life and Mind?</AnchorLink></p>
                <p><b>III.</b> <AnchorLink href="#section3">What's the Point of Philosophy in Modern Times?</AnchorLink></p>
                <p><b>IV.</b> <AnchorLink href="#section4">Where's the Best Place to Learn More about Philosophy?</AnchorLink></p>
            </div>
            </div>
            <div id="section1" className="mid-pad">
            <div className="page-center" id="break-start">
                <p style={{marginTop:"0"}}><span className="big-letter section-head">I</span></p>
                <h2 className="text-center" style={{marginTop:"0"}}>What is Philosophy? A Quick, Simple Definition</h2>
                <div class="separator" style={{margin: "1.5em auto"}}></div>
                <p style={{marginTop: "2em"}}>Philosophy generally refers to the study of deep, fundamental questions relating to core aspects of the human condition.</p>
                <p>These questions typically revolve around the <Link to="/reading-lists/metaphysics/">nature of existence</Link>, <Link to="/reading-lists/epistemology/">knowledge</Link>, <Link to="/reading-lists/consciousness/">consciousness</Link>, <Link to="/reading-lists/ethics-and-morality/">ethics</Link>, <Link to="/reading-lists/political-philosophy/">society</Link>, <Link to="/reading-lists/philosophy-of-language/">language</Link>, and more. They include:</p>
                <blockquote><p>What is the fundamental nature of reality? Why are we here? What happens when we die? What is the relationship between my mind and the world? How and why does consciousness arise? Do we have free will? Why is language meaningful? What’s the right thing to do? What does a just society look like?</p></blockquote>
                <p>But beyond the formal study of such questions, philosophy can be defined more broadly as an <i>act</i>.</p>
                <p><i>To philosophize</i> means adopting a reflective stance and using our critical faculties to draw logical conclusions. Be it deciding who to vote for or what to have for dinner, whenever we engage in critical thinking — indeed, whenever we rationally weigh up arguments — we engage in philosophy.</p> 
                <p>If we philosophize about our everyday concerns long enough, stripping them down to their core, we get closer to the questions that have occupied the great philosophers throughout history.</p> 
                <p>‘Who should I vote for?’ becomes <Link to="/reading-lists/political-philosophy/">‘what does a just society look like?’</Link>; ‘what should I have for dinner?’ becomes <Link to="/reading-lists/ethics-and-morality/">‘what’s the right thing to do?’</Link>; boredom or feeling unfulfilled can lead to ‘how can I establish meaning?’ and, if you’re not careful, simply staring at patterns of light on a wall can lead to <Link to="/reading-lists/metaphysics/">‘what is the fundamental nature of reality?’</Link> — or, more dramatically, ‘why are we even <i>here</i>?’</p>
                <p>Philosophy, then, is the proactive examination of the shifting tectonic plates upon which our thoughts and beliefs are constructed. It’s burrowing beyond the surface world of the everyday to question <i>what</i>, <i>how</i>, and <i>why</i> — to confront ourselves and reality at their most basic, general levels.</p>
                <p>As American philosopher Wilfred Sellars simply puts it:</p>
                <blockquote><p>The aim of philosophy is to understand how things in the broadest possible sense of the term hang together in the broadest possible sense of the term.</p></blockquote>
            </div>
            </div>
            <div id="section2" className="darkradial-background mid-pad">
            <div className="page-center" id="break-start">
            <p style={{marginTop:"0"}}><span className="big-letter section-head">II</span></p>
                <h2 className="text-center" style={{marginTop:"0"}}>How Can Philosophy Improve Your Life and Mind?</h2>
                <div class="separator" style={{margin: "1.5em auto"}}></div>
                <p style={{marginTop: "2em"}}>Here at <Link to="/about/">Philosophy Break</Link>, we believe philosophy is the antidote to a world saturated by information, and that the more people engage with philosophy, the more fulfilling their lives will be.</p>
                <p>Indeed, the addictive nature of the digital world afflicts many of us. The relentless torrent of information saturates our attention spans. But life is finite, and the things we give attention to define our lives. It's crucial to break free from the turbulent current and come up for air.</p>
                <p>As Roman Stoic philosopher Seneca put it almost 2,000 years ago in his brilliant treatise, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0143036327/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0143036327&linkId=a6f00c95d12b6adb766f1a6e1b13d5fb">On the Shortness of Life</a>:</p>
                <blockquote><p>It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death’s final constraint to realize that it has passed away before we knew it was passing. So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it… Life is long if you know how to use it.</p></blockquote>
                <p>Streaming services hook us into one more episode; advertisements bombard us into submission; those of us with smartphones check them without thinking.</p>
                <p>But the compulsion to watch, to shop, to hit refresh on our newsfeeds — all of it can be reined in by contemplating the world around us, and our place within it.</p>
                <p>How can we best spend our lives on earth? What makes you happy? What gives you purpose?</p>
                <p>A lot of the anxieties and uncertainties we feel in our lives, from wondering if our careers give us the meaning we need, to not being able to come to terms with death, are at root philosophical problems. And philosophers have confronted and had hugely insightful things to say about these problems for thousands of years.</p>
                <p>Critically engaging with the enduring wisdom of philosophy is a fantastic way to both inform ourselves about the problems inherent within the human condition, and also face up to those problems and calm our existential fears and anxieties.</p>
                <p>By engaging with the ideas of great thinkers throughout history, we're empowered to think for ourselves — be it on matters of meaning and existence, how to make a better world, or simply working out what's worth pursuing in life.</p>
                <p>For as Socrates, <Link to="/articles/socrates-on-what-we-know/">the infamous Ancient Greek martyr of philosophy</Link>, declared:</p> 
                <blockquote><p>The unexamined life is not worth living.</p></blockquote>
            </div>
            </div>
            <div id="section3" className="mid-pad">
            <div className="page-center" id="break-start">
                <p style={{marginTop:"0"}}><span className="big-letter section-head">III</span></p>
                <h2 className="text-center" style={{marginTop:"0"}}>What's the Point of Philosophy in Modern Times?</h2>
                <div class="separator" style={{margin: "1.5em auto"}}></div>
                <p style={{marginTop: "2em"}}>The point of philosophy in modern times is the point philosophy has always had: to answer the fundamental questions that lie at the heart of the human condition.</p>
                <p>Philosophy plays a crucial role in this regard not just in personal study and exploration but formally in academia and modern research projects.</p>
                <p>It might be thought that some of the questions philosophy touches on, such as the <Link to="/reading-lists/metaphysics/">basic nature of the universe</Link>, or the <Link to="/reading-lists/consciousness/">emergence of consciousness</Link>, have been superseded by more specialist scientific subjects.</p>
                <p>For example, physicists are at the forefront of investigating the fundamental nature of reality. Likewise, neuroscientists are leading the way in unlocking the secrets of the brain. </p>
                <p>But philosophy is not here to compete with these brilliant, fascinating research projects, but to supplement, clarify, and even unify them.</p>
                <p>For instance, when physicists share their latest mathematical models that predict the behavior of matter, philosophers ask, “okay, so what does this behavior tell us about <Link to="/reading-lists/metaphysics/">the intrinsic nature of matter</Link> itself? What <i>are</i> subatomic particles, what <i>is</i> charge — and why does any of this stuff exist in the first place?”</p>
                <p>Equally, when neuroscientists make progress in mapping the brain, philosophers are on hand to digest the consequences the latest research has for our conceptions of <Link to="/reading-lists/consciousness/">consciousness</Link> and <Link to="/reading-lists/free-will/">free will</Link>.</p>
                <p>And, just as pertinently, while computer scientists continue to advance the sophistication of AI, philosophers discuss <Link to="/articles/what-happens-when-machines-become-smarter-than-people/">the implications an ever-growing machine intelligence has for society</Link>, and dissect the urgent <Link to="/reading-lists/ethics-and-morality/">ethical and moral</Link> concerns accompanying them.</p>
                <p>With its focus on argument and clarity, philosophy is particularly good at rooting out the assumptions and contradictions that lie at the core of commonsensical thinking, sharpening our insight into truth, and lending security to the foundations of knowledge in all areas of research — especially the sciences, operating as they do at the frontiers of what we know.</p> 
                <p>But beyond the clarification of knowledge, the greatest philosophy — like the greatest science — has enormous explanatory power that can transform how we see the world.</p> 
                <p>Just as Albert Einstein’s theory of relativity skewers our everyday notion of time, so <Link to="/reading-lists/friedrich-nietzsche/">Friedrich Nietzsche’s dissection of morality</Link> offers highly persuasive challenges to our everyday notions of ‘good’ and ‘evil’.</p> 
                <p>The world is uncertain, and the value of philosophy lies precisely in facing up to this uncertainty — and in finding footholds for knowledge and progress in spite of it. As Bertrand Russell summarizes in his <Link to="/articles/bertrand-russell-why-philosophy-matters/">wonderful exposition on why philosophy matters</Link>:</p>
                <blockquote><p>Philosophy is to be studied, not for the sake of any definite answers to its questions since no definite answers can, as a rule, be known to be true, but rather for the sake of the questions themselves; because these questions enlarge our conception of what is possible, enrich our intellectual imagination and diminish the dogmatic assurance which closes the mind against speculation; but above all because, through the greatness of the universe which philosophy contemplates, the mind also is rendered great, and becomes capable of that union with the universe which constitutes its highest good.</p></blockquote>
            </div>
            </div>
            <div id="section4" className="darkradial-background mid-pad" style={{paddingBottom: "0"}}>
            <div className="page-center" id="break-start">
            <p style={{marginTop:"0"}}><span className="big-letter section-head">IV</span></p>
                <h2 className="text-center" style={{marginTop:"0"}}>Where's the Best Place to Learn More about Philosophy?</h2>
                <div class="separator" style={{margin: "1.5em auto"}}></div>
                <p style={{marginTop: "2em"}}>If you're interested in learning more about philosophy, then you're in the right place.</p>
                <p>Philosophy Break wraps philosophy's best and most important insights and ideas in a modern package to break through the noise of everyday life, encourage critical thinking, and supplement a meaningful existence.</p>
                <p>Want to stimulate your brain in just a few minutes? Check out our <Link to="/articles/">curiosity-sparking, knowledge-packed philosophy breaks</Link> — bite-size articles on interesting philosophical dilemmas.</p>
                <p>Some of our most popular breaks include the neuroscientific case for <Link to="/articles/free-will-illusion-sam-harris/">why we don't have free will</Link>; Friedrich Nietzsche on <Link to="/articles/dancing-with-nietzsche/">why there are no facts, only interpretations</Link>; Lucretius on <Link to="/articles/why-death-is-nothing-to-fear-lucretius-epicureanism/">why death is nothing to fear</Link>; Thomas Nagel on why <Link to="/articles/thomas-nagel-why-humor-best-stance-towards-life-absurdity/">humor is the best response to life's absurdity</Link>; and an explanation of <Link to="/articles/i-think-therefore-i-am-descartes-cogito-ergo-sum-explained/">Descartes' definitive “I think, therefore I am”</Link> statement.</p>
                <p>If you're looking to dive a little deeper, our reading list on <Link to="/reading-lists/introduction-to-philosophy/">the best introductions to philosophy</Link> is a brilliant place to start.</p>
                <p>We've also <Link to="/reading-lists/">curated reading lists</Link> on the best and most important works of particular philosophers and philosophical subjects, including on <Link to="/reading-lists/friedrich-nietzsche/">Friedrich Nietzsche</Link>, the <Link to="/reading-lists/history-of-western-philosophy/">history of Western philosophy</Link>, <Link to="/reading-lists/metaphysics/">metaphysics</Link>, <Link to="/reading-lists/epistemology/">epistemology</Link>, <Link to="/reading-lists/free-will/">free will</Link>, <Link to="/reading-lists/ethics-and-morality/">ethics and morality</Link>, <Link to="/reading-lists/political-philosophy/">political philosophy</Link>, the <Link to="/reading-lists/philosophy-of-language/">philosophy of language</Link>, and <Link to="/reading-lists/consciousness/">consciousness</Link>.</p>
                <p>Finally, for daily reminders to disrupt the noise and keep your mind curious, be sure to <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">follow Philosophy Break on Instagram</a>, and subscribe to weekly breaks via email below.</p>
                <p>By choosing to learn more about philosophy, a wonderful journey of self-discovery awaits you... have fun exploring!</p>
                <WatermarkBreak />
            </div>
            </div>

            <div id="post-article-height">
                <PanelArticleList />
                <SubscriptionForm />
                <PanelReadingList />
            </div>
        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        space: file(relativePath: {eq: "space.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`