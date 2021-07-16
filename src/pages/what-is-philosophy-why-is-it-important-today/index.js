import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from "../../components/topTitle"
import { SubscriptionForm } from '../../components/subscriptionForm'
import { WindowHeightWrapper } from '../../components/windowHeightWrapper'
import PanelReadingList from '../../components/panelReadingList'
import PanelArticleList from "../../components/panelArticleList"
import { ScrollProgressBar } from "../../components/scrollProgressBar"
import WatermarkBreak from "../../components/watermarkBreak"
import PanelLBQ from "../../components/panelLBQ"
import MailchimpPopUp from "../../components/mailchimpPopUp"

const Page = ({ data, location }) => {
    const imagePath = getSrc(data.space)

    //change home page content based on time of day
    const myDate = new Date() //get device date
    const hrs = myDate.getHours() //get hours from date

    let pic = data.default.childImageSharp.gatsbyImageData // variable for image & set default

    if (hrs < 12) { //if morning
        pic = data.morning.childImageSharp.gatsbyImageData
    }
    else if (hrs >= 12 && hrs < 17) { //if afternoon
        pic = data.default.childImageSharp.gatsbyImageData
    }
    else if (hrs >= 17 && hrs < 24) { //if evening
        pic = data.evening.childImageSharp.gatsbyImageData
    }

    return (
    <>
    <Seo title="What is Philosophy, and Why is it Important Today?" description="Your quick guide to what philosophy involves, why exploring it could make a significant difference to your life, and next steps for learning about its essential ideas." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*page title*/}

        <WindowHeightWrapper className="title no-author">
          <GatsbyImage image={pic} className="title-img" alt="What is philosophy?" />
          <div className="darkener"></div>
          <div className="page-center title-center mid-width">
            <h1>What is Philosophy, and Why is it Important Today?</h1>
            <div className="separator"></div>       
            <p className="description">Your quick guide to what philosophy is and why it’s important today, how exploring it could make a significant difference to your life, and next steps for learning about its essential ideas.</p>
          </div>
          <p className="time break page-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="a" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#1aa9ff"/><stop offset="0.31" stop-color="#22acff"/><stop offset="0.44" stop-color="#37b4ff"/><stop offset="0.59" stop-color="#5ac1ff"/><stop offset="0.72" stop-color="#7cceff"/></linearGradient><linearGradient id="b" x1="131.91" y1="450.27" x2="377.59" y2="204.59" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#030810"/><stop offset="0.29" stop-color="#030a13"/><stop offset="0.5" stop-color="#02101c"/><stop offset="0.69" stop-color="#001a2c"/><stop offset="0.72" stop-color="#001d30"/></linearGradient></defs><circle cx="250" cy="250" r="250" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#a)"/><path d="M-121.5,179.5" stroke="#000" stroke-miterlimit="10"/><path d="M27.12,281" stroke="#000" stroke-miterlimit="10"/><path d="M453,343"/><path d="M-516.5,142.5" stroke="#000" stroke-miterlimit="10"/><path d="M38,325" fill="#fff"/><polygon points="27 316 108 219.58 148 284 250 103 363 247.69 391 197.72 475 299 27 316" fill="#fff"/><path d="M34,312l74-61.18L148,284,250,148.16,363,251l28-26,79,72c-.91,3.91-1.9,7.92-3,12-1.88,7-2.9,10.68-5,17-.08,0-1.16,3.07-1.24,3.11-32,85.32-114.27,146.05-210.76,146.05-98,0-181.41-62.69-212.25-150.16L34,312" fill="url(#b)"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#001d30" stroke-miterlimit="10" stroke-width="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#001d30" stroke-miterlimit="10" stroke-width="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#001d30" stroke-miterlimit="10" stroke-width="6"/></svg><AnchorLink href="#break-start" style={{ textDecoration: "none" }}><span className="bottom-blue-border">GET STARTED&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></p>  
        </WindowHeightWrapper>

        <div className="grey-background small-pad">
            <div className="page-center" id="break-start"> 
                <h5>Contents:</h5>
                <p><b>I.</b> <AnchorLink href="#section1">What is Philosophy? A Quick, Simple Definition</AnchorLink></p>
                <p><b>II.</b> <AnchorLink href="#section2">How Can Philosophy Improve Your Life and Mind?</AnchorLink></p>
                <p><b>III.</b> <AnchorLink href="#section3">What's the Point of Philosophy in Modern Times?</AnchorLink></p>
                <p><b>IV.</b> <AnchorLink href="#section4">Where's the Best Place to Learn More about Philosophy?</AnchorLink></p>
            </div>
        </div>


        {/*page content*/}
        <div className="page-center" id="break-start">
        
        <div id="section1">
            <h2>I. What is Philosophy? A Quick, Simple Definition</h2>
            <p><span className="big-letter">P</span>hilosophy generally refers to the study of <Link to="/lifes-big-questions/">deep, fundamental questions</Link> relating to core aspects of the human condition. These questions typically revolve around the <Link to="/reading-lists/metaphysics/">nature of existence</Link>, <Link to="/reading-lists/epistemology/">knowledge</Link>, <Link to="/reading-lists/consciousness/">consciousness</Link>, <Link to="/reading-lists/ethics-and-morality/">ethics</Link>, <Link to="/reading-lists/political-philosophy/">society</Link>, <Link to="/reading-lists/philosophy-of-language/">language</Link>, and more. They include:</p>
            <blockquote><p>What is the fundamental nature of reality? Why are we here? What happens when we die? What is the relationship between my mind and the world? How and why does consciousness arise? Do we have free will? Why is language meaningful? What’s the right thing to do? What does a just society look like?</p></blockquote>
            <p>(If you’re interested in exploring these topics further, check out our <Link to="/lifes-big-questions/">celebrated introductory philosophy course: Life’s Big Questions</Link>, which distills philosophy’s best answers to these questions from the last few millennia.)</p>
            <p>But beyond the study of such questions, philosophy can be defined more broadly as an <i>act</i>.</p>
            <p><i>To philosophize</i> means adopting a reflective stance and using our critical faculties to draw logical conclusions. Be it deciding who to vote for or what to have for dinner, whenever we engage in critical thinking — indeed, whenever we rationally weigh up arguments — we engage in philosophy.</p> 
            <p>If we philosophize about our everyday concerns long enough, stripping them down to their core, we get closer to the questions that have occupied the great philosophers throughout history.</p> 
            <p>‘Who should I vote for?’ becomes <Link to="/reading-lists/political-philosophy/">‘what does a just society look like?’</Link>; ‘what should I have for dinner?’ becomes <Link to="/reading-lists/ethics-and-morality/">‘what’s the right thing to do?’</Link>; boredom or feeling unfulfilled can lead to ‘how can I establish meaning?’ and, if you’re not careful, simply staring at patterns of light on a wall can lead to <Link to="/reading-lists/metaphysics/">‘what is the fundamental nature of reality?’</Link>, or <Link to="/articles/is-the-world-around-us-real/">‘is the world around me even real?’</Link> — or, more starkly, <Link to="/articles/why-does-anything-exist/">‘why does <i>anything</i> exist?’</Link></p>
            <p>Philosophy, then, is the proactive examination of the shifting tectonic plates upon which our thoughts and beliefs are constructed. It’s burrowing beyond the surface world of the everyday to question <i>what</i>, <i>how</i>, and <i>why</i> — to confront ourselves and reality at their most basic, general levels.</p>
            <p>As American philosopher Wilfred Sellars simply puts it:</p>
            <blockquote><p>The aim of philosophy is to understand how things in the broadest possible sense of the term hang together in the broadest possible sense of the term.</p></blockquote>
        </div>
        <div id="section2">
            <h2>II. How Can Philosophy Improve Your Life and Mind?</h2>
            <p><span class="big-letter">H</span>ere at <Link to="/about/">Philosophy Break</Link>, we believe philosophy is the antidote to a world saturated by information, and the more that people engage with philosophy, the more fulfilling their lives will be.</p>
            <p>The addictive nature of the digital world afflicts many of us. The relentless torrent of information saturates our attention spans. But life is finite, and the things we give attention to define our lives. It's crucial to break free from the turbulent current and come up for air.</p>
            <p>As Roman Stoic philosopher Seneca put it almost 2,000 years ago in his brilliant treatise, <Link to="/articles/seneca-on-coping-with-the-shortness-of-life/">On the Shortness of Life</Link>:</p>
            <blockquote><p>It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death’s final constraint to realize that it has passed away before we knew it was passing. So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it… Life is long if you know how to use it.</p></blockquote>
            <p>Streaming services hook us into one more episode; advertisements bombard us into submission; those of us with smartphones check them without thinking.</p>
            <p>But the compulsion to watch, to shop, to hit refresh on our newsfeeds — all of it can be reined in by contemplating the world around us, and our place within it.</p>
            <p>How can we best spend our lives on earth? What makes you happy? What gives you purpose?</p>
            <p>A lot of the anxieties and uncertainties we feel in our lives, from wondering if our occupations give us the meaning we need, to not being able to come to terms with death, are at root philosophical problems. And philosophers have confronted and had hugely insightful things to say about these problems for thousands of years.</p>
            <p>Critically engaging with the enduring wisdom of philosophy is a fantastic way to both inform ourselves about the problems inherent within the human condition, and also face up to those problems and calm our existential fears and anxieties.</p>
            <p>By engaging with the ideas of great thinkers throughout history, we're empowered to think for ourselves — be it on matters of meaning and existence, how to make a better world, or simply working out what's worth pursuing in life.</p>
            <p>For as Socrates, <Link to="/articles/socrates-on-what-we-know/">the infamous Ancient Greek martyr of philosophy</Link>, declared:</p> 
            <blockquote><p>The unexamined life is not worth living.</p></blockquote>
        </div>
        <div id="section3" className="small-pad-top">
            <h2>III. What's the Point of Philosophy in Modern Times?</h2>
            <p><span class="big-letter">T</span>he point of philosophy in modern times is the point philosophy has always had: to answer the fundamental questions that lie at the heart of the human condition.</p>
            <p>Philosophy plays a crucial role in this regard not just in personal study and exploration but formally in academia and modern research projects.</p>
            <p>It might be thought that some of the questions philosophy touches on, such as the <Link to="/reading-lists/metaphysics/">basic nature of the universe</Link>, or the <Link to="/reading-lists/consciousness/">emergence of consciousness</Link>, have been superseded by more specialist scientific subjects.</p>
            <p>For example, physicists are at the forefront of investigating the fundamental nature of reality. Likewise, neuroscientists are leading the way in unlocking the secrets of the brain. </p>
            <p>But philosophy is not here to compete with these brilliant, fascinating research projects, but to supplement, clarify, and even unify them.</p>
            <p>For instance, when physicists share their latest mathematical models that predict the behavior of matter, philosophers ask, “okay, so what does this behavior tell us about <Link to="/reading-lists/metaphysics/">the intrinsic nature of matter</Link> itself? What <i>are</i> subatomic particles, what <i>is</i> charge — and <Link to="/articles/why-does-anything-exist/">why does any of this stuff exist</Link> in the first place?”</p>
            <p>Equally, when neuroscientists make progress in mapping the brain, philosophers are on hand to digest the consequences the latest research has for our conceptions of <Link to="/reading-lists/consciousness/">consciousness</Link> and <Link to="/reading-lists/free-will/">free will</Link>.</p>
            <p>And, just as pertinently, while computer scientists continue to advance the sophistication of AI, philosophers discuss <Link to="/articles/what-happens-when-machines-become-smarter-than-people/">the implications an ever-growing machine intelligence has for society</Link>, and dissect the urgent <Link to="/reading-lists/ethics-and-morality/">ethical and moral</Link> concerns accompanying them.</p>
            <p>With its focus on argument and clarity, philosophy is particularly good at rooting out the assumptions and contradictions that lie at the core of commonsensical thinking, sharpening our insight into truth, and lending security to the foundations of knowledge in all areas of research — especially the sciences, operating as they do at the frontiers of what we know.</p> 
            <p>But beyond the clarification of knowledge, the greatest philosophy — like the greatest science — has enormous explanatory power that can transform how we see the world.</p> 
            <p>Just as Albert Einstein’s theory of relativity skewers our everyday notion of time, so <Link to="/reading-lists/friedrich-nietzsche/">Friedrich Nietzsche’s dissection of morality</Link> offers highly persuasive challenges to our everyday notions of ‘good’ and ‘evil’.</p> 
            <p>The world is uncertain, and the value of philosophy lies precisely in facing up to this uncertainty — and in finding footholds for knowledge and progress in spite of it. As Bertrand Russell summarizes in his <Link to="/articles/bertrand-russell-why-philosophy-matters/">wonderful exposition on why philosophy matters</Link>:</p>
            <blockquote><p>Philosophy is to be studied, not for the sake of any definite answers to its questions since no definite answers can, as a rule, be known to be true, but rather for the sake of the questions themselves; because these questions enlarge our conception of what is possible, enrich our intellectual imagination and diminish the dogmatic assurance which closes the mind against speculation; but above all because, through the greatness of the universe which philosophy contemplates, the mind also is rendered great, and becomes capable of that union with the universe which constitutes its highest good.</p></blockquote>
        </div>
        <div id="section4">
            <h2>IV. Where's the Best Place to Learn More about Philosophy?</h2>
            <p><span class="big-letter">I</span>f you're interested in learning more about philosophy, then you're in the right place. Philosophy Break wraps philosophy's best and most important insights and ideas in a modern package to break through the noise of everyday life, encourage critical thinking, and supplement a meaningful existence.</p>
            <p>Our celebrated introductory philosophy course, <Link to="/lifes-big-questions/">Life's Big Questions</Link>, distills philosophy's best answers to some of life's most troubling questions, taking you on a whirlwind five-day journey of reflection, understanding, and discovery. Here's the questions covered:</p>
            <blockquote><p>Why does anything exist?⁣ Is the world around us ‘real’?⁣ What makes us conscious?⁣ Do we have free will?⁣ How should we approach life?⁣</p></blockquote>
            <p>Each day over five days, you'll receive beautifully-packaged materials that distill philosophy's best answers to these questions from the last few millennia. Interested in learning more? <Link to="/lifes-big-questions/">Explore the course now</Link>.</p>
            <p>Want to stimulate your brain in just a few minutes? Check out our <Link to="/articles/">curiosity-sparking, knowledge-packed philosophy breaks</Link> — bite-size articles on interesting philosophical dilemmas.</p>
            <p>Some of our most popular breaks include the neuroscientific case for <Link to="/articles/free-will-illusion-sam-harris/">why we don't have free will</Link>; Friedrich Nietzsche on <Link to="/articles/dancing-with-nietzsche/">why there are no facts, only interpretations</Link>; Lucretius on <Link to="/articles/why-death-is-nothing-to-fear-lucretius-epicureanism/">why death is nothing to fear</Link>; Thomas Nagel on why <Link to="/articles/thomas-nagel-why-humor-best-stance-towards-life-absurdity/">humor is the best response to life's absurdity</Link>; and an explanation of <Link to="/articles/i-think-therefore-i-am-descartes-cogito-ergo-sum-explained/">Descartes' definitive “I think, therefore I am”</Link> statement.</p>
            <p>If you're looking to dive a little deeper, our reading list on <Link to="/reading-lists/introduction-to-philosophy/">the best introductions to philosophy</Link> is a brilliant place to start.</p>
            <p>We've also <Link to="/reading-lists/">curated reading lists</Link> on the best and most important works of particular philosophers and philosophical subjects, including on <Link to="/reading-lists/friedrich-nietzsche/">Friedrich Nietzsche</Link>, the <Link to="/reading-lists/history-of-western-philosophy/">history of Western philosophy</Link>, <Link to="/reading-lists/metaphysics/">metaphysics</Link>, <Link to="/reading-lists/epistemology/">epistemology</Link>, <Link to="/reading-lists/free-will/">free will</Link>, <Link to="/reading-lists/ethics-and-morality/">ethics and morality</Link>, <Link to="/reading-lists/political-philosophy/">political philosophy</Link>, the <Link to="/reading-lists/philosophy-of-language/">philosophy of language</Link>, and <Link to="/reading-lists/consciousness/">consciousness</Link>.</p>
            <p>Finally, for daily reminders to disrupt the noise and keep your mind curious, be sure to follow Philosophy Break on <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a>, and subscribe to weekly breaks via email below.</p>
            <p>By choosing to learn more about philosophy, a wonderful journey of self-discovery awaits you... have fun exploring!</p>
            <WatermarkBreak />
        </div>
        </div>

        <div id="post-article-height">
            <PanelArticleList />
            <PanelLBQ />
            <PanelReadingList />
            <SubscriptionForm />
        </div>
    </Layout>
    </>
    )
}

export const query = graphql`{
  default: file(relativePath: {eq: "philosophy-break.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  morning: file(relativePath: {eq: "morning.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  evening: file(relativePath: {eq: "evening.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  pb: file(relativePath: {eq: "philosophybreak.png"}) {
    childImageSharp {
      gatsbyImageData(width: 22, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`

export default Page