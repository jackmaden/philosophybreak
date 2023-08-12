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
    <Seo title="What is Philosophy? Definition, How it Works, and 4 Core Branches" description="Your quick guide to exactly what philosophy is, how philosophers make progress, as well as the subject’s four core branches." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*page title*/}

        <WindowHeightWrapper className="title">
          <GatsbyImage image={data.default.childImageSharp.gatsbyImageData} className="title-img" alt="What is philosophy?" loading="eager" />
          <div className="darkener"></div>
          <div className="page-center title-center mid-width">
            <h1>What is Philosophy? Definition, How it Works, and 4 Core Branches</h1>
            <div className="separator"></div>       
            <p className="description">Your quick guide to exactly what philosophy is, how philosophers make progress, as well as the subject’s four core branches.</p>
            <div className="time" style={{position: "relative", zIndex: "1"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="a" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.23" stopColor="#1aa9ff"/><stop offset="0.31" stopColor="#22acff"/><stop offset="0.44" stopColor="#37b4ff"/><stop offset="0.59" stopColor="#5ac1ff"/><stop offset="0.72" stopColor="#7cceff"/></linearGradient><linearGradient id="b" x1="131.91" y1="450.27" x2="377.59" y2="204.59" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#030810"/><stop offset="0.29" stopColor="#030a13"/><stop offset="0.5" stopColor="#02101c"/><stop offset="0.69" stopColor="#001a2c"/><stop offset="0.72" stopColor="#001d30"/></linearGradient></defs><circle cx="250" cy="250" r="250" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#a)"/><path d="M-121.5,179.5" stroke="#000" strokeMiterlimit="10"/><path d="M27.12,281" stroke="#000" strokeMiterlimit="10"/><path d="M453,343"/><path d="M-516.5,142.5" stroke="#000" strokeMiterlimit="10"/><path d="M38,325" fill="#fff"/><polygon points="27 316 108 219.58 148 284 250 103 363 247.69 391 197.72 475 299 27 316" fill="#fff"/><path d="M34,312l74-61.18L148,284,250,148.16,363,251l28-26,79,72c-.91,3.91-1.9,7.92-3,12-1.88,7-2.9,10.68-5,17-.08,0-1.16,3.07-1.24,3.11-32,85.32-114.27,146.05-210.76,146.05-98,0-181.41-62.69-212.25-150.16L34,312" fill="url(#b)"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#001d30" strokeMiterlimit="10" strokeWidth="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#001d30" strokeMiterlimit="10" strokeWidth="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#001d30" strokeMiterlimit="10" strokeWidth="6"/></svg>By <a href="https://twitter.com/jackmaden_" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: "#8c8c8c" }}>Jack Maden</a></div>
          </div>
          <p className="time break page-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg><AnchorLink href="#break-start" style={{ textDecoration: "none" }}><span className="bottom-blue-border">9 MIN BREAK&nbsp;&nbsp;<svg className="bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span></AnchorLink></p>  
        </WindowHeightWrapper>

        {/*page content*/}
        <div className="page-center" id="break-start">

            <p><span className="big-letter">W</span>hy are we here, and what are our lives for? Why does anything exist, and why does it exist as it does? Is there a ‘right’ way to spend existence, or are all standards of right and wrong relative?</p> 
            <p>Such questions typically lurk in the background of our day-to-day lives. We may remember dwelling on them more attentively in childhood — for <Link to="/articles/why-children-make-great-philosophers-interview-with-scott-hershovitz/">children are life’s most serious philosophers</Link> — and asking an endless chain of ‘whys’ after every inadequate explanation an adult offered. But as life and responsibilities began to get in the way, the questions may have started to fade…</p>
            <p>But then along comes a book, a song, or a life event that brings all the questions roaring back: what is life about? What is it all <i>for?</i></p>
            <p>And it’s in this fertile territory that our inner philosophers roam, for philosophy doesn’t neglect the seemingly unanswerable, background questions of existence, but wrestles them — kicking and screaming — into the foreground.</p> 
            <p>Philosophy is essentially about recapturing and channeling the existential curiosity that comes so naturally in childhood, and formalizing it into a full-blown subject of inquiry.</p>

            <h2>What does philosophy mean?</h2>
            <p><span className="big-letter">T</span>he word ‘philosophy’ literally means ‘love of wisdom’, and this etymology is apt, for as a subject philosophy generally refers to the study of deep, fundamental questions (like those we opened with) relating to core aspects of the human condition. These questions typically revolve around the <Link to="/reading-lists/metaphysics/">nature of existence</Link>, <Link to="/reading-lists/epistemology/">knowledge</Link>, <Link to="/reading-lists/consciousness/">consciousness</Link>, <Link to="/reading-lists/ethics-and-morality/">ethics</Link>, <Link to="/reading-lists/political-philosophy/">society</Link>, <Link to="/reading-lists/philosophy-of-language/">language</Link>, and more.</p>
            <p>Facing up to such questions has been a central part of the intellectual histories of civilizations the world over. Here are some more:</p>
            <blockquote><p>What is the fundamental nature of reality? Why are we here? What happens when we die? What is the relationship between my mind and the world? How and why does consciousness arise? Do we have free will? Why is language meaningful? What’s the right thing to do? What does a just society look like?</p></blockquote>
            <p>Philosophical contemplation may not always provide final answers, but it can make it easier to live authentically in the face of the questions.⁣</p>
            <p>Beyond the study of such fundamental questions, philosophy can be defined more broadly as an <i>act</i>.</p> 
            <p><i>To philosophize</i> means adopting a critical stance and using reason to draw logical conclusions. Be it deciding who to vote for or what to have for dinner, whenever we engage in critical thinking — whenever we rationally weigh up arguments — we engage in philosophy.</p> 

            <figure className="gatsby-resp-image-figure big-image">
              <StaticImage src="../../images/the-thinker.jpg" alt="The Thinker" placeholder="blurred" layout="fullWidth" />
              <figcaption className="gatsby-resp-image-figcaption">“The Thinker”, by Auguste Rodin, wondering what he should have for dinner...</figcaption>
            </figure>

            <p>If we philosophize about our everyday concerns long enough, stripping them down to their core, we get closer to the questions that have occupied the great philosophers throughout history.</p> 
            <p>‘Who should I vote for?’ becomes <Link to="/reading-lists/political-philosophy/">‘what does a just society look like?’</Link>; ‘what should I have for dinner?’ becomes <Link to="/reading-lists/ethics-and-morality/">‘what’s the right thing to do?’</Link>; boredom or feeling unfulfilled can lead to ‘how can I establish meaning?’ and, if you’re not careful, simply staring at patterns of light on a wall can lead to <Link to="/reading-lists/metaphysics/">‘what is the fundamental nature of reality?’</Link>, or <Link to="/articles/is-the-world-around-us-real/">‘is the world around me even real?’</Link> — or, more starkly, <Link to="/articles/why-does-anything-exist/">‘why does <i>anything</i> exist?’</Link></p>
            <p>Philosophy, then, is the proactive examination of the shifting tectonic plates upon which our thoughts and beliefs are constructed. It’s burrowing beyond the surface world of the everyday to question <i>what</i>, <i>how</i>, and <i>why</i> — to confront ourselves and reality at their most basic, general levels.</p>
            <p>As American philosopher Wilfred Sellars simply puts it:</p>
            <blockquote><p>The aim of philosophy is to understand how things in the broadest possible sense of the term hang together in the broadest possible sense of the term.</p></blockquote>

            <h2>How is philosophy done?</h2>

            <p><span className="big-letter">C</span>onsidering such difficult, fuzzy subject matter, we might wonder how philosophers get anything done. How does philosophy make progress? How do philosophers decide what’s accurate and inaccurate?</p> 

            <p>Well, it essentially comes down to <i>thinking hard about thinking</i>, and separating out the sound thinking from the erroneous thinking. As the philosopher Thomas Nagel puts it in his book, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0195052161/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195052161&linkId=37e9c1b9904009913b6ab114bca378f7">What Does It All Mean?</a>:</p> 

            <blockquote><p>Philosophy is different from science and from mathematics. Unlike science it doesn’t rely on experiments or observation, but only on thought. And unlike mathematics it has no formal methods of proof. It is done just by asking questions, arguing, trying out ideas and thinking of possible arguments against them, and wondering how our concepts really work.</p></blockquote> 

            <p>The philosopher Simon Blackburn agrees, describing philosophy in his book <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0192854259/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0192854259&linkId=aacd3717b10ac108a1e91a38ee9c8bd1">Think</a> as <i>conceptual engineering</i>. Just as the engineer studies the structure of material things, so the philosopher — through careful and imaginative thinking — studies the structure of thought. Blackburn writes:</p>

            <blockquote><p>Understanding the structure involves seeing how parts function and how they interconnect. It means knowing what would happen for better or worse if changes were made. This is what we aim at when we investigate the structures that shape our view of the world. Our concepts or ideas form the mental housing in which we live. We may end up proud of the structures we have built. Or we may believe that they need dismantling and starting afresh.</p></blockquote> 

            <p>Our ideas and concepts are the lenses through which we see the world, and as Blackburn puts it, “in philosophy the lens is itself the topic of study.”</p>

            <h2>How can we think clearly about thinking?</h2>

            <p><span className="big-letter">I</span>n order to separate good thinking from bad thinking, philosophy essentially runs on what philosophers call ‘arguments’, i.e. chains of reasoning that support certain conclusions.</p> 

            <p>There are a whole host of ways in which arguments can be presented and structured. They can be informal, like persuading a friend to go to a certain restaurant, or a politician arguing for a particular policy; or they can be <i>formalized</i>, whereby individual premises are clearly and logically presented to support a specific conclusion.</p> 

            <p>Judging the truth of an argument usually comes down to two things: the validity of its form, and the soundness of its premises. For example, consider the following formalized argument:</p>

            <blockquote><p>Premise 1: All humans are mortal.<br/><br/>
            Premise 2: Simone de Beauvoir is a human.<br/><br/>
            Conclusion: Therefore, Simone de Beauvoir is mortal.</p></blockquote>

            <p>This argument is ‘valid’ in that its form (in this case a <i>syllogism</i>, a type of deductive reasoning) is of satisfactory structure: the conclusion naturally ‘follows’ from the premises.</p> 

            <p>Moreover, the argument is ‘sound’ in that, not only is its form valid, but its premises are both true. If a valid argument has true premises, then its conclusion must be true. The argument above, concluding that Simone de Beauvoir is mortal, is thus an effective one.</p> 

            <figure className="gatsby-resp-image-figure big-image">
              <StaticImage src="../../images/SimonedeBeauvoir.jpeg" alt="Simone de Beauvoir" placeholder="blurred" layout="fullWidth" />
              <figcaption className="gatsby-resp-image-figcaption">The French existentialist philosopher, Simone de Beauvoir (1908 - 1986): a confirmed mortal.</figcaption>
            </figure>

            <p>Philosophers spend a lot of time analyzing arguments, inspecting them for so-called ‘fallacies’ i.e. faulty or unsound reasoning.</p>
            
            <p>A logical fallacy that politicians are often guilty of, for instance, is a form of <i>ad hominem</i> (Latin for ‘to the person’), whereby the speaker attacks the character or motive of the person making an argument, rather than the premises or structure of the argument itself, in order to undermine the person’s conclusion.</p> 

            <p>Given arguments are often cloaked in this kind of persuasive and emotive rhetoric, philosophers must be on guard to get to the core of what someone putting forward an argument or counterargument is really saying, and to see whether the structure of their argument is valid, or their premises sound.</p> 

            <h2>So, philosophy just rests on ‘arguments’?</h2>

            <p><span className="big-letter">C</span>ompared to the grand instruments of modern science, the humble arguments of philosophers may not seem a very impressive toolkit. But, when you think about it, it is upon such deployments of reason that all human knowledge is built.</p>

            <p>The ability to formulate and respond to rational arguments is — arguably — among humanity’s most powerful intellectual abilities. The <Link to="/reading-lists/aristotle/">ancient Greek philosopher Aristotle</Link>, for instance, believed it is our sensitivity to reason that separates us from other animals, famously describing humanity as ‘the rational animal’.</p>

            <p>What’s more, the philosopher David Chalmers in his book <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Reality-Virtual-Worlds-Problems-Philosophy/dp/0393635805/?&_encoding=UTF8&tag=philosophybre-20&linkCode=ur2&linkId=e89b64f78674bd147addddf58c949ed0&camp=1789&creative=9325">Reality+</a> suggests general philosophical inquiry is a precursor to the birth of more specialized disciplines: before the creation of any new specific field, philosophical curiosity and probing usually comes first.</p> 

            <p>Isaac Newton, for instance, considered himself a philosopher, and worked on philosophical questions about space and time. He made considerable progress in answering these questions, and as a result a new science of physics emerged. Chalmers argues something similar happened with economics, sociology, psychology, modern logic, formal semantics, and more: “All were founded or cofounded by philosophers who got clear enough on some central questions to help spin off a new discipline.” Chalmers continues:</p> 

            <blockquote><p>In effect, philosophy is an incubator for other disciplines. When philosophers figure out a method for rigorously addressing a philosophical question, we spin that method off and call it a new field.</p></blockquote>

            <p>And, because philosophy has been so successful over the centuries at spawning new specialized fields, Chalmers notes that “what’s now left in philosophy is a basket of hard questions that people are still figuring out. That’s why philosophers disagree as much as they do.”</p>

            <h2>The 4 core branches of philosophy</h2>

            <p><span className="big-letter">W</span>hile philosophical inquiry can be (and has been) applied to virtually any subject, one traditional picture organizes philosophy into four core branches. These are the branches of <i><Link to="/reading-lists/epistemology/">epistemology</Link></i> (the study of knowledge), <i><Link to="/articles/metaphysics-what-is-it-why-is-it-important-today/">metaphysics</Link></i> (the study of reality), <i>value theory</i> (the study of <Link to="/reading-lists/ethics-and-morality/">ethics</Link> and values), and <i>logic</i> (the study of correct reasoning).</p> 

            <p>The picture can be formulated differently. The branch of value theory, for instance, could be split into separate branches of aesthetics (the study of beauty) and ethics (the study of morality). Alternatively, instead of branches, topics could be listed as several instances of ‘Philosophy of X’, like ‘Philosophy of Mind’, <Link to="/reading-lists/philosophy-of-language/">‘Philosophy of Language’</Link>, ‘Philosophy of Science’, <Link to="/reading-lists/political-philosophy/">‘Political Philosophy’</Link>, and so on.</p> 

            <p>However, the four core branches of epistemology, metaphysics, value theory, and logic offer a fairly good representation of what philosophers are mostly concerned with. Here are some typical questions that sit within each branch:</p>

            <p><b>1. Epistemology, the study of knowledge:</b> ​​What is knowledge? What makes knowledge possible? <Link to="/articles/john-lockes-empiricism-why-we-are-all-tabula-rasas-blank-slates/">Are we born with innate knowledge</Link>, or is knowledge only acquired through sensory experience? <Link to="/articles/is-the-world-around-us-real/">Is the world around us ‘real’</Link>, i.e. is perception reality? <Link to="/articles/i-think-therefore-i-am-descartes-cogito-ergo-sum-explained/">Are our experiences of the world trustworthy?</Link> Is the potential of human knowledge unlimited? Or is it curtailed by our sensory apparatus and brainpower? (To learn more about these questions, view our <Link to="/reading-lists/epistemology/">epistemology reading list</Link>).</p>

            <figure className="gatsby-resp-image-figure big-image">
              <StaticImage src="../../images/simulation.jpeg" alt="Are we living in a simulation?" placeholder="blurred" layout="fullWidth" />
              <figcaption className="gatsby-resp-image-figcaption">Can we ever know for certain if the world we perceive is actually reality, rather than, say, a computer simulation? This question has both an epistemological element (i.e. what we can know), and a metaphysical element (i.e. what the fundamental nature of reality is).</figcaption>
            </figure>

            <p><b>2. Metaphysics, the study of reality:</b> What is the fundamental nature of reality? What is time? What is space? Is there a God? Do numbers exist? What makes a person a person? What is causation, and can there be such a thing as a ‘first cause’? <Link to="/articles/free-will-illusion-sam-harris/">Do we have free will?</Link> Why is reality like it is? <Link to="/reading-lists/consciousness/">What is consciousness?</Link> What does it mean for something to exist? <Link to="/articles/why-does-anything-exist/">Why does anything exist?</Link> (To learn more about these questions, view our <Link to="/reading-lists/metaphysics/">metaphysics reading list)</Link>.</p>

            <p><b>3. Value Theory, the study of ethics and values:</b> What is good? What is bad? Is it ever permissible to tell a lie, to steal something, to intentionally hurt or even kill someone? If not, why not? What’s the right thing to do, and what <i>makes</i> it right? What do we owe to each other as humans? What do we owe to non-human life? What’s the justification for any moral belief, and <Link to="/articles/where-do-morals-come-from/">where do morals come from?</Link> What is beauty? Is it in the eye of the beholder, or are there objective standards for aesthetic quality? (To learn more about the questions on ethics, view our <Link to="/reading-lists/ethics-and-morality/">ethics and morality reading list</Link>).</p> 

            <p><b>4. Logic, the study of correct reasoning:</b> How do you prove that a model of logic is correct? How do you prove that a logical proof is correct? How did nature produce logic? Is logical reasoning the best kind of reasoning everywhere in the universe? Can language be reduced to logic, and is the language of logic coherent? (To learn more about how logic relates to language, view our <Link to="/reading-lists/philosophy-of-language/">philosophy of language reading list</Link>).</p>

            <h2>Who does philosophy?</h2>

            <p><span className="big-letter">A</span>s we’ve seen, the concerns of philosophy are both deep and wide-ranging. There may be some areas that interest you, there may be others you find a little dry* (*cough, logic, cough).</p>

            <p>Either way, philosophers have been studying the difficult questions mentioned above for thousands of years. The ancient Greek philosophers <Link to="/reading-lists/socrates/">Socrates</Link>, <Link to="/reading-lists/plato/">Plato</Link>, and <Link to="/reading-lists/aristotle/">Aristotle</Link> are the major foundational figures of so-called ‘Western’ philosophy — so much so that, as the 20th-century philosopher Alfred North Whitehead once noted, “the safest general characterization of the European philosophical tradition is that it consists merely as a series of footnotes to Plato.”</p>

            <figure className="gatsby-resp-image-figure big-image">
              <StaticImage src="../../images/plato-aristotle.png" alt="Plato and Aristotle" placeholder="blurred" layout="fullWidth" />
              <figcaption className="gatsby-resp-image-figcaption">Ancient Greek philosophers Plato (left) and Aristotle (right): foundational figures in Western thought.</figcaption>
            </figure>

            <p>‘Eastern’ philosophy, meanwhile, includes the traditions of thinkers from China, India, Japan, Persia, and more; while ‘African’ philosophy comprises the long and storied tradition of philosophy on the African continent.</p>

            <p>The various traditions of philosophy have different styles, and within the traditions there are myriad branches and movements, making any kind of categorization very limited in its usefulness.</p>

            <p>The key point is that anyone who thinks hard about the human condition, anyone who seeks to increase the accuracy of their thinking, anyone curious about why we are here and what our lives are for — any such person can be said to be <i>doing philosophy</i>. And some people throughout history have been especially brilliant at doing it, and have thus been raised to the status of ‘great philosophers’.</p>

            <p>From the aforementioned ancient Greeks <Link to="/articles/socrates-and-the-socratic-paradox-i-know-that-i-know-nothing/">Socrates</Link>, <Link to="/reading-lists/plato/">Plato</Link>, and <Link to="/reading-lists/aristotle/">Aristotle</Link>, as well as the <Link to="/reading-lists/stoicism/">Stoics</Link> and ancient Chinese philosophers like Laozi and <Link to="/reading-lists/confucius/">Confucius</Link>, to the great North African philosopher Saint Augustine, and the birth of modern Western philosophy with <Link to="/articles/i-think-therefore-i-am-descartes-cogito-ergo-sum-explained/">René Descartes</Link>; from the famous Enlightenment thinkers of <Link to="/reading-lists/john-locke/">John Locke</Link>, <Link to="/articles/george-berkeley-subjective-idealism-the-world-is-in-our-minds/">George Berkeley</Link>, David Hume, and <Link to="/reading-lists/immanuel-kant/">Immanuel Kant</Link>, through to <Link to="/reading-lists/friedrich-nietzsche/">Friedrich Nietzsche</Link>, and the subsequent <Link to="/articles/what-is-existentialism-3-core-principles-of-existentialist-philosophy/  ">existentialism</Link> of the 20th century spearheaded by Jean-Paul Sartre and Simone de Beauvoir; and from the post-war <Link to="/articles/hannah-arendt-on-standing-up-to-the-banality-of-evil/">moral and political insights of thinkers like Hannah Arendt</Link>, to modern figures like <Link to="/articles/what-happens-when-machines-become-smarter-than-people/">Daniel Dennett tackling consciousness and AI</Link> — there are too many philosophical greats to mention here. But what they all have in common is that they had and have profoundly original and insightful things to say about some of humanity’s deepest shared problems: they offer timeless wisdom we could all seriously benefit from digesting.</p>

            <p>For, indeed, there is comfort in the thought that people from all over the globe, at all points in human history, have grappled with the very same questions — and shared the same bewilderment with existence — as we do today. Why are we here? What are our lives for? How can we know anything about the world? Though their roots are ancient, the problems of philosophy are as alive and nourishing as ever before.</p>

            <h2>Continue learning</h2>
            <p><span className="big-letter">I</span>f you’re interested in learning more about philosophy, check out our follow-up piece, <Link to="/why-is-philosophy-important-today/">Why Is Philosophy Important Today, and How Can It Improve Your Life?</Link>, as well as our bite-size <Link to="/lifes-big-questions/">Life’s Big Questions course</Link>, which distills the great philosophers’ answers to some of life’s most difficult and enduring questions: Why does anything exist? Is perception reality? What is consciousness? Do we have free will? How should we spend our lives?</p>
            
            <p><Link to="/lifes-big-questions/">Learn more and enroll in our Life’s Big Questions course today</Link>, and by this time next week, you’ll understand philosophy’s best answers to these questions, have clarity on exactly which topics interest you, and know the best further reading for continuing your philosophical journey.</p>

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
  default: file(relativePath: {eq: "what-is-philosophy.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`

export default Page