import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage, getSrc } from "gatsby-plugin-image";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import { WindowHeightWrapper } from '../../components/windowHeightWrapper'
import { ScrollProgressBar } from "../../components/scrollProgressBar"
import PanelLBQ from "../../components/panelLBQ"

const Page = ({ data, location }) => {
    const imagePath = getSrc(data.default)
    return (
    <>
    <Seo title="Why Is Philosophy Important Today, and How Can It Improve Your Life?" description="Your quick guide to why philosophy is important today, as well as how it can improve your life." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*page title*/}

        <WindowHeightWrapper className="title">
          <GatsbyImage image={data.default.childImageSharp.gatsbyImageData} className="title-img featured-image-full" alt="Why is philosophy important?" loading="eager" />
          <div className="darkener"></div>
          <div className="page-center title-center mid-width">
            <h1>Why Is Philosophy Important Today, and How Can It Improve Your Life?</h1>
            <div className="separator"></div>       
            <p className="description">From clarity to tolerance: here’s your quick guide to why philosophy is important today, as well as how it can improve your life.</p>
            <div className="time" style={{position: "relative", zIndex: "1"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="a" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.23" stop-color="#1aa9ff"/><stop offset="0.31" stop-color="#22acff"/><stop offset="0.44" stop-color="#37b4ff"/><stop offset="0.59" stop-color="#5ac1ff"/><stop offset="0.72" stop-color="#7cceff"/></linearGradient><linearGradient id="b" x1="131.91" y1="450.27" x2="377.59" y2="204.59" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#030810"/><stop offset="0.29" stop-color="#030a13"/><stop offset="0.5" stop-color="#02101c"/><stop offset="0.69" stop-color="#001a2c"/><stop offset="0.72" stop-color="#001d30"/></linearGradient></defs><circle cx="250" cy="250" r="250" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#a)"/><path d="M-121.5,179.5" stroke="#000" stroke-miterlimit="10"/><path d="M27.12,281" stroke="#000" stroke-miterlimit="10"/><path d="M453,343"/><path d="M-516.5,142.5" stroke="#000" stroke-miterlimit="10"/><path d="M38,325" fill="#fff"/><polygon points="27 316 108 219.58 148 284 250 103 363 247.69 391 197.72 475 299 27 316" fill="#fff"/><path d="M34,312l74-61.18L148,284,250,148.16,363,251l28-26,79,72c-.91,3.91-1.9,7.92-3,12-1.88,7-2.9,10.68-5,17-.08,0-1.16,3.07-1.24,3.11-32,85.32-114.27,146.05-210.76,146.05-98,0-181.41-62.69-212.25-150.16L34,312" fill="url(#b)"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#001d30" stroke-miterlimit="10" stroke-width="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#001d30" stroke-miterlimit="10" stroke-width="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#001d30" stroke-miterlimit="10" stroke-width="6"/></svg>By <a href="https://twitter.com/jackmaden_" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: "#8c8c8c" }}>Jack Maden</a></div>
          </div>
          <p className="time break page-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg><AnchorLink href="#break-start" style={{ textDecoration: "none" }}><span className="bottom-blue-border">7 MIN BREAK&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></p>  
        </WindowHeightWrapper>

        {/*page content*/}
        <div className="page-center" id="break-start">
        
            <p><span className="big-letter">P</span>hilosophy essentially involves <i>thinking hard about life’s big questions</i>, including — as we discuss in our article on  <Link to="/what-is-philosophy-definition-4-core-branches/">what philosophy is, how it works, as well as its four core branches</Link> — why we are here, how we can know anything about the world, and what our lives are for.</p>

            <p>Here at Philosophy Break, we believe the practice of philosophy is the antidote to a world saturated by information, and the more that people engage with philosophy, the more fulfilling their lives will be.</p>

            <p>The addictive nature of the digital world, for instance, afflicts many of us. The relentless torrent of information saturates our attention spans. But life is finite, and the things we give attention to define our lives. It’s crucial to break free from the turbulent current and come up for air.</p>

            <p>As Roman Stoic philosopher Seneca put it almost 2,000 years ago in his brilliant treatise, <Link to="/articles/seneca-on-coping-with-the-shortness-of-life/">On the Shortness of Life</Link>:</p>

            <blockquote><p>It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death’s final constraint to realize that it has passed away before we knew it was passing. So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it… Life is long if you know how to use it.</p></blockquote>

            <p>Streaming services hook us into one more episode; advertisements bombard us into submission; those of us with smartphones check them without thinking.</p>

            <p>But the compulsion to watch, to shop, to hit refresh on our newsfeeds — all of it can be reined in by contemplating the world around us, and our place within it.</p>

            <p>How can we best spend our lives on earth? What makes you happy? What gives you purpose?</p>

            <figure className="gatsby-resp-image-figure big-image">
              <StaticImage src="../../images/socialscroll.jpg" alt="Social media scrolling" placeholder="blurred" layout="fullWidth" />
              <figcaption className="gatsby-resp-image-figcaption">Is the point of existence to scroll through social media?</figcaption>
            </figure>

            <p>A lot of the anxieties and uncertainties we feel in our lives, from wondering if our occupations give us the meaning we need, to not being able to come to terms with death, are at root philosophical problems. And philosophers have confronted and had hugely insightful things to say about these problems for thousands of years.</p>

            <p>Critically engaging with the enduring wisdom of philosophy is a fantastic way to both inform ourselves about the problems inherent within the human condition, and also face up to those problems and calm our existential fears and anxieties.</p>

            <p>By engaging with the ideas of great thinkers throughout history, we’re empowered to think for ourselves — be it on matters of meaning and existence, how to make a better world, or simply working out what’s worth pursuing in life.</p>

            <p>For as <Link to="/reading-lists/socrates/">Socrates</Link>, <Link to="/articles/socrates-on-what-we-know/">the famous ancient Greek martyr of philosophy</Link>, declared:</p> 
            <blockquote><p>The unexamined life is not worth living.</p></blockquote>

            <p>Philosophical contemplation is the starting gun that jolts us out of going through life as if we’re only going through the motions, living only according to the expectations of others, or living by norms we’ve never really thought about, let alone endorsed.</p>
            
            <p>Philosophy opens our eyes to the multitudinous ways we can spend our lives, engendering tolerance for those whose practices differ from our own, and reawakening a childlike wonder and appreciation for the sheer mystery and opportunity lying at the heart of existence.</p>            

            <h2>Why is philosophy important today?</h2>
            <p><span class="big-letter">P</span>hilosophy is sometimes considered outdated — a perception not helped by the subject’s apparent obsession with reaching back over thousands of years to consider the works of ancient bearded figures like <Link to="/articles/socrates-and-the-socratic-paradox-i-know-that-i-know-nothing/">Socrates</Link>, <Link to="/reading-lists/plato/">Plato</Link>, and <Link to="/reading-lists/aristotle/">Aristotle</Link>.</p>
            
            <p>But the point of philosophy in modern times remains the point philosophy has always had: to answer the fundamental questions that lie at the heart of the human condition.</p>

            <p>Philosophy plays a crucial role in this regard not just in personal study and exploration, but formally in academia and modern research projects. And, even as time mercilessly advances, it turns out ancient figures whose works have survived over millennia still have some of the most interesting things to say about our human predicament, making their wisdom worth studying generation after generation.</p>

            <figure className="gatsby-resp-image-figure big-image">
              <StaticImage src="../../images/death-of-socrates.jpg" alt="The Death of Socrates" placeholder="blurred" layout="fullWidth" />
              <figcaption className="gatsby-resp-image-figcaption"><i>The Death of Socrates</i>, a painting by Jacques-Louis David depicting <Link to="/articles/socrates-and-the-socratic-paradox-i-know-that-i-know-nothing/">ancient Greek philosopher Socrates</Link> about to drink hemlock in his jail cell, having been sentenced to death by the Athenian authorities for ‘corrupting the minds of the youth’ with his philosophical teachings.</figcaption>
            </figure>

            <p>Now, it might be thought that some of the questions philosophy touches on, such as the <Link to="/reading-lists/metaphysics/">basic nature of the universe</Link>, or the <Link to="/reading-lists/consciousness/">emergence of consciousness</Link>, have been superseded by more specialist scientific subjects.</p>

            <p>For example, physicists are at the forefront of investigating the fundamental nature of reality. Likewise, neuroscientists are leading the way in unlocking the secrets of the brain. </p>

            <p>But philosophy is not here to compete with these brilliant, fascinating research projects, but to supplement, clarify, and even unify them.</p>

            <p>For instance, when physicists share their latest mathematical models that predict the behavior of matter, philosophers ask, “okay, so what does this behavior tell us about the intrinsic nature of matter itself? What <i>is</i> matter? Is it physical, is it a manifestation of consciousness? — and <Link to="/articles/why-does-anything-exist/">why does any of this stuff exist</Link> in the first place?”</p>

            <p>Equally, when neuroscientists make progress in mapping the brain, philosophers are on hand to digest the consequences the latest research has for our conceptions of <Link to="/reading-lists/consciousness/">consciousness</Link> and <Link to="/reading-lists/free-will/">free will</Link>.</p>

            <p>And, just as pertinently, while computer scientists continue to advance the sophistication of AI, philosophers discuss <Link to="/articles/what-happens-when-machines-become-smarter-than-people/">the implications an ever-growing machine intelligence has for society</Link>, and dissect the urgent <Link to="/reading-lists/ethics-and-morality/">ethical and moral</Link> concerns accompanying them.</p>

            <p>With its focus on argument and clarity, philosophy is particularly good at rooting out the assumptions and contradictions that lie at the core of commonsensical thinking, sharpening our insight into truth, and lending security to the foundations of knowledge in all areas of research — especially the sciences, operating as they do at the frontiers of what we know.</p> 

            <h2>The Sleep of Reason Produces Monsters</h2>

            <p><span class="big-letter">T</span>he practice of philosophical reflection is not just important for progressing research, however: it is crucial for successfully navigating a world in which competing responsibilities, information, and forces pull us in various directions.</p> 

            <p>This is exactly what the Spanish painter and printmaker Francisco Goya understood when he produced his famous etching, <i>The Sleep of Reason Produces Monsters</i>, depicted below.</p>

            <figure className="gatsby-resp-image-figure" style={{margin: "2.2em 0 2em"}}>
              <StaticImage src="../../images/goya.jpg" alt="The Sleep of Reason Produces Monsters" placeholder="blurred" layout="fullWidth" />
              <figcaption className="gatsby-resp-image-figcaption">Created between 1797 and 1799 for the Diario de Madrid, <i>The Sleep of Reason Produces Monsters</i> is the 43rd of the 80 etchings making up the satirical Los Caprichos, and encapsulates Goya’s belief that many of humanity’s follies result from a ‘sleep of reason’ — a disengagement of our rational, critical faculties.</figcaption>
            </figure>

            <p>In his analysis of Goya’s etching, contemporary philosopher Simon Blackburn notes in his book <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0192854259/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192854259&linkId=aacd3717b10ac108a1e91a38ee9c8bd1">Think</a> that “there are always people telling us what we want, how they will provide it, and what we should believe”, forcefully continuing:</p>

            <blockquote><p>Convictions are infectious, and people can make others convinced of almost anything. We are typically ready to believe that <i>our</i> ways, <i>our</i> beliefs, <i>our</i> religions, <i>our</i> politics are better than theirs, or that <i>our</i> God-given rights trump theirs or that <i>our</i> interests require defensive or pre-emptive strikes against them. In the end, it is ideas for which people kill each other. It is because of ideas about what the others are like, or who we are, or what our interests or rights require, that we go to war, or oppress others with a good conscience, or even sometimes acquiesce in our own oppression by others.</p></blockquote>
            
            <p>With so much at stake, sleeps of reason must be countered to stop the dangerous spread of misinformation. Blackburn recommends philosophical awakening as the antidote:</p>
              
            <blockquote><p>Reflection enables us to step back, to see our perspective on a situation as perhaps distorted or blind, at the very least to see if there is argument for preferring our ways, or whether it is just subjective.</p></blockquote>
            
            <p>By deploying critical thinking and the rigor of philosophy, we are less likely to be duped or led by those who — intentionally or unintentionally — malform our thinking.</p> 
            
            <p>Blackburn’s advocacy for critical philosophical reflection can be paired with the full motto of Goya’s etching:</p> 
            
            <blockquote><p>Imagination abandoned by reason produces impossible monsters: united with her, she is the mother of the arts and the source of her wonders.</p></blockquote>

            <h2>Philosophy’s transformative power</h2>

            <p><span class="big-letter">B</span>eyond the clarification of knowledge, the greatest philosophy — like the greatest science — has enormous explanatory power that can transform how we see the world.</p> 

            <p>Just as Albert Einstein’s theory of relativity skewers our everyday notion of time, so <Link to="/reading-lists/friedrich-nietzsche/">Friedrich Nietzsche’s dissection of morality</Link> challenges our everyday notions of ‘good’ and ‘evil’, <Link to="/articles/john-lockes-empiricism-why-we-are-all-tabula-rasas-blank-slates/">John Locke’s analysis of color</Link> challenges our very idea of whether perception is reality, and <Link to="/articles/why-death-is-nothing-to-fear-lucretius-epicureanism/">Lucretius’s timeless reflection on death</Link> helps us cope with our mortality.</p> 

            <figure className="gatsby-resp-image-figure big-image">
              <StaticImage src="../../images/nietzsche-munch.jpeg" alt="Friedrich Nietzsche, by Edvard Munch" placeholder="blurred" layout="fullWidth" />
              <figcaption className="gatsby-resp-image-figcaption"><i>Portrait of Friedrich Nietzsche</i>, by Edvard Munch, c. 1906. The German philosopher Friedrich Nietzsche is among those whose works have the power to transform worldviews. We discuss his profound ideas in detail in our popular 6-day course, <Link to="/introduction-to-nietzsche/">Introduction to Nietzsche and His 5 Greatest Ideas</Link>.</figcaption>
            </figure>

            <p>The world is uncertain, and the value of philosophy lies precisely in facing up to this uncertainty — and in finding footholds for knowledge and progress in spite of it. As the 20th-century philosophical giant Bertrand Russell summarizes in his <Link to="/articles/bertrand-russell-why-philosophy-matters/">wonderful exposition on why philosophy matters</Link>:</p>

            <blockquote><p>Philosophy is to be studied, not for the sake of any definite answers to its questions since no definite answers can, as a rule, be known to be true, but rather for the sake of the questions themselves; because these questions enlarge our conception of what is possible, enrich our intellectual imagination and diminish the dogmatic assurance which closes the mind against speculation; but above all because, through the greatness of the universe which philosophy contemplates, the mind also is rendered great, and becomes capable of that union with the universe which constitutes its highest good.</p></blockquote>

            <h2>Discover philosophy’s greatest wisdom</h2>

            <p><span class="big-letter">I</span>f you’re interested in learning more about philosophy, our celebrated introductory philosophy course, <Link to="/lifes-big-questions/">Life’s Big Questions</Link>, distills philosophy’s best answers to some of life’s most troubling questions, taking you on a whirlwind five-day journey of reflection, understanding, and discovery. Here are the questions covered:</p>

            <blockquote><p>Why does anything exist?⁣ Is the world around us ‘real’?⁣ What makes us conscious?⁣ Do we have free will?⁣ How should we approach life?⁣</p></blockquote>

            <p>Enroll today, and each day over five days, you’ll receive beautifully-packaged materials that distill philosophy’s best answers to these questions from the last few millennia. Interested in learning more? <Link to="/lifes-big-questions/">Explore the course now</Link>.</p>

            <p>By choosing to learn more about philosophy, a wonderful journey of self-discovery awaits you... have fun exploring!</p>
            
            <div style={{marginBottom: 30}}>&nbsp;</div>

        </div>

        <div id="post-article-height">
            <PanelLBQ class="grey-background course" fill="#001d30" flexdirection="row-reverse" />
            <div style={{marginBottom: 30}}>&nbsp;</div>
        </div>
    </Layout>
    </>
    )
}

export const query = graphql`{
  default: file(relativePath: {eq: "whyphilosophyimportant.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`

export default Page