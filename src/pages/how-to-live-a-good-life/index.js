import React from "react"
import { graphql, Script } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import { CheckoutPFL } from "../../components/checkoutPFL"
import Reviews from "../../components/reviewsLBQ"
import ReviewsStarsLBQ from "../../components/reviewsStarsLBQ"
import ReviewsLatestPFL from "../../components/reviewsLatestPFL"

const Page = ({ data, location }) => {

    const imagePath = getSrc(data.pfl)
    const chap1 = getSrc(data.chapter1)
    const chap2 = getSrc(data.chapter2)
    const chap3 = getSrc(data.chapter3)
    const chap4 = getSrc(data.chapter4)
    const chap5 = getSrc(data.chapter5)
    const chap6 = getSrc(data.chapter6)
    const chap7 = getSrc(data.chapter7)
    const welcome = getSrc(data.welcome)
    
    return (
    <>
    <Seo title="How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)" description="Discover practical wisdom from 7 of the world’s most influential philosophies — including Stoicism, Buddhism, and Existentialism — to help you find meaning, purpose, and live a good life." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple/>

         
         

        {/*page title*/}
        <div className="top-title darkradial-background course" id="top">
            <div className="two-col page-center">
                <div>
                    <p className="verified no-mar-top">NEW!</p><span className="tag time new"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>COURSE & COMMUNITY</span><div className="separator course new pfl"></div>
                    <h1 id="pfl">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</h1>
                    <p className="spectral">Unlock instant access to 56 concise, self-paced lessons on Stoicism, Existentialism, Buddhism and beyond (accessible forever from any device):</p>
                    <div className="mobile-center">
                        <CheckoutPFL />
                        <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="How to Live a Good Life" loading="eager" className="desktop-no-display tiny-mar-top-important" />
                    <p className="small-grey-font smaller text-center desktop-no-display" style={{marginTop: "-12px"}}><i>Course materials are hosted on our online learning platform, Philosophy Break Academy, and are accessible forever from any device.</i></p>
                        
                     </div>
                </div>
                <div className="mobile-no-display">
                    <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="How to Live a Good Life" loading="eager" />
                    <p className="small-grey-font smaller text-center" style={{marginTop: "-12px"}}><i>Course materials are hosted on our online learning platform,<br/>Philosophy Break Academy, and are accessible forever from any device.</i></p>
                </div>
            </div>
            {/*latest reviews*/}
            <div className="small-pad">
                <div className="page-center text-center">
                    <h4 style={{fontWeight: "700"}} className="no-mar-bottom">Latest Course Reviews:</h4>
                    <ReviewsLatestPFL />
                    <p className="no-mar-bottom"><AnchorLink href="#reviews" className="white-underline" style={{fontSize: "16px"}}>See All Reviews</AnchorLink></p>
                </div>
            </div>
        </div>

        <div className="grey-background">
            {/*pain points and benefits*/}
            <div className="page-center mid-pad-top small-pad-bottom">
                <div className="text-center">
                    <h3 className="small-mar">Does this sound like you?</h3><svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                    <div className="mid-width">
                        <h4 className="small-mar">You’re a thoughtful person striving for a meaningful and fulfilling life, but are put off by shallow self-help tactics</h4>
                        <svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                        <h4 className="small-mar">You’re keen to understand what the best philosophical wisdom says about how to live a good life, but don’t have time to wade through all the books and secondary literature</h4>
                        <svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                        <h4 className="small-mar">You want the nuance, but don’t want to invest thousands in academia</h4>
                        <svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                    </div>
                    <h3 className="small-mar">We understand completely</h3>
                    <p className="spectral mid-width mid-mar-bottom">That’s why we’ve designed this course to offer clarity and nuance, without demanding huge time, effort, or cost commitments:</p>
                </div>
                    <div className="three-col align-top text-center">
                        <div>
                            <h5><span style={{"color": "#36b4ff"}}>➤</span> Quick, effortless insight</h5>
                            <p className="small-grey-font smaller">Your time is precious. Unlock rich understanding of philosophy’s greatest wisdom in hours rather than years.</p>
                        </div>
                        <div>
                            <h5><span style={{"color": "#36b4ff"}}>➤</span> Cut through the noise</h5>
                            <p className="small-grey-font smaller">No filler; no fluff. See exactly what the wisest and most influential philosophies say about how to live a good life.</p>
                        </div>
                        <div>
                            <h5><span style={{"color": "#36b4ff"}}>➤</span> Enrich your life</h5>
                            <p className="small-grey-font smaller">Appreciate precisely why philosophy routinely changes people’s perspectives, and will perhaps change your own.</p>
                        </div>
                    </div>
            </div>
        
            <div className="page-center mobile-center mid-pad">
                <h3 className="text-center">50+ reviews for our courses:</h3>
                <ReviewsStarsLBQ />
            </div>
            </div>
        
            {/*Chapters*/}
            <div id="look-inside"  className="small-pad grey-background">
            <div className="page-center">
                <h2 className="text-center">Discover how the great philosophers think you can live a happy, meaningful life, with instant access to:</h2>
                <div className="four-col mobile-center small-pad no-pad-desktop">
                    <div className="small-mar-top">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 56 concise lessons</h5>
                        <p className="small-grey-font">56 self-paced lessons organized into 7 succinct chapters (each chapter is a 60-min read).</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 7 philosophies</h5>
                        <p className="small-grey-font">Crystal clear insight into 7 crucial global philosophies, distilling millennia of wisdom.</p>
                    </div>
                    <div className="small-mar-top">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 7 reading lists</h5>
                        <p className="small-grey-font">7 curated reading lists for effective further exploration of each philosophy covered.</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 8 guided discussions</h5>
                        <p className="small-grey-font">Community-driven reflections on each philosophy, plus a final summary discussion.</p>
                    </div>
                </div>
            </div>
            <div className="small-mar no-mar-top-desktop">
                <div className="two-col big-2-col page-center row-reverse small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">1</span><span>Aristotle: achieving excellence <i>(8 lessons)</i></span></h3>
                        <p className="large-grey-font">If you want to achieve excellence and happiness in all that you do, Aristotle has some common-sense advice that will help. Chapter 1 distills his deeply influential philosophy across 8 lessons.</p>
                    </div>
                    <div className="mid-mar-top-desktop"> 
                        <a href={chap1} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                            <GatsbyImage image={data.chapter1.childImageSharp.gatsbyImageData} alt="Why Does Anything Exist?" />
                            <p className="image-caption-tap right">↗ Chapter 1 (8 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-normal-mob-end-desk"><span className="spectral big-letter">2</span><span>Epicureanism: living for pleasure <i>(7 lessons)</i></span></h3>
                        <p className="large-grey-font">If relaxing and cultivating a tranquil mind are more your thing, Epicurus will be your guide. Chapter 2 outlines Epicureanism's simple yet profound recipe for happiness across 7 lessons.</p>
                    </div>
                    <div className="mid-mar-top-desktop"> 
                    <a href={chap2} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter2.childImageSharp.gatsbyImageData}
                        alt="Is the World Around Us ‘Real’?" />
                        <p className="image-caption-tap right">↗ Chapter 2 (7 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">3</span><span>Stoicism: beating anxiety <i>(8 lessons)</i></span></h3>
                        <p className="large-grey-font">If you are anxious about the future, and often worry about things that are out of your control, the Stoics may help you reframe your concerns. Chapter 3 concisely packages their practical wisdom across 8 lessons.</p>
                    </div>
                    <div className="mid-mar-top-desktop"> 
                    <a href={chap3} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter3.childImageSharp.gatsbyImageData}
                        alt="What Makes Us Conscious?" />
                        <p className="image-caption-tap right">↗ Chapter 3 (8 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">4</span><span>Buddhism: ending suffering <i>(9 lessons)</i></span></h3>
                        <p className="large-grey-font">If everyday life leaves you with a faint buzz of dissatisfaction and you're not sure why, the Buddha may provide some insight. Chapter 4 sheds light on the Buddhist path to enlightenment across 9 lessons.</p>
                    </div>
                    <div className="mid-mar-top-desktop"> 
                    <a href={chap4} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter4.childImageSharp.gatsbyImageData}
                        alt="Do We Have Free Will?" />
                        <p className="image-caption-tap right">↗ Chapter 4 (9 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-normal-mob-end-desk"><span className="spectral big-letter">5</span><span>Confucianism: growing morally <i>(8 lessons)</i></span></h3>
                        <p className="large-grey-font">If you want to find ways to feel more connected to the important people in your life, and promote the moral growth of all, Confucius has some ideas. Chapter 5 shows why Confucianism was the dominant way of life in China for millennia across 8 lessons.</p>
                    </div>
                    <div className="mid-mar-top-desktop"> 
                    <a href={chap5} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter5.childImageSharp.gatsbyImageData}
                        alt="How Should We Approach Life?" />
                        <p className="image-caption-tap right">↗ Chapter 5 (8 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-normal-mob-end-desk"><span className="spectral big-letter">6</span><span>Existentialism: overcoming nihilism <i>(9 lessons)</i></span></h3>
                        <p className="large-grey-font">If you feel like life is meaningless and all your projects ultimately lack purpose, you might find some relief in existentialism. Chapter 6 distills the philosophies of Jean-Paul Sartre, Simone de Beauvoir, Albert Camus, Nietzsche, Kierkegaard, and more across 9 lessons.</p>
                    </div>
                    <div className="mid-mar-top-desktop"> 
                    <a href={chap6} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter6.childImageSharp.gatsbyImageData}
                        alt="How Should We Approach Life?" />
                        <p className="image-caption-tap right">↗ Chapter 6 (9 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-normal-mob-end-desk"><span className="spectral big-letter">7</span><span>Effective Altruism: doing good better <i>(7 lessons)</i></span></h3>
                        <p className="large-grey-font">If you are sold on the idea of doing good in the world, but feel powerless about making any kind of difference on the global stage, effective altruism might be the framework you’re looking for. Chapter 7 investigates this powerful, yet increasingly controversial, approach to the good life across 7 lessons.</p>
                    </div>
                    <div className="mid-mar-top-desktop"> 
                    <a href={chap7} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter7.childImageSharp.gatsbyImageData}
                        alt="How Should We Approach Life?" />
                        <p className="image-caption-tap right">↗ Chapter 7 (7 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="large-mar">
                <div className="two-col page-center">
                    <div>
                        <h3>Course materials are hosted on our online learning platform, Philosophy Break Academy, and are accessible from any device</h3>
                        <p className="large-grey-font">Philosophy Break Academy is your interactive learning and community space for all things philosophy, where you can take self-paced courses, track your progress, and discuss materials with other members. By purchasing this course, you unlock <b><i>lifetime access</i></b> to Philosophy Break Academy.</p>
                    </div>
                    <div>
                    <a href={welcome} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.welcome.childImageSharp.gatsbyImageData}
                        alt="Philosophy Break Academy" />
                        <p className="image-caption-tap right">↗ Welcome to the Academy. Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            

        </div>

        <div className="darkradial-background">
            <div className="mid-pad page-center text-center">
                <div className="mid-width">
                    <h2>Go from Being Curious about Philosophy to Harnessing Its Most Powerful Ideas</h2>
                    <div className="separator"></div>
                    <p className="spectral">Start now, and by this time next week, you’ll understand philosophy’s top practical wisdom, enjoy a philosophically-enriched view on the world, and know the best next steps for continuing your journey.</p> 
                    <div className="small-width"><CheckoutPFL /></div>
                </div>
            </div>
        </div>

        {/*Reviews*/}
        <div className="grey-background small-pad-mob-mid-pad-desk">
            <Reviews bg="grey-background" title="Reviews for Other Philosophy Break Courses" toggle="secondary" />
        </div>

        <div className="darkradial-background">
            <div className="mid-pad page-center text-center">
                <div className="mid-width">
                    <h2>Understand Exactly How the Great Philosophers Think You Can Live a Good Life</h2>
                    <div className="separator"></div>
                    <p className="spectral">Start now, and by this time next week, you’ll understand philosophy’s top practical wisdom, enjoy a philosophically-enriched view on the world, and know the best next steps for continuing your journey.</p> 
                    <div className="small-width"><CheckoutPFL /></div>
                </div>
            </div>
        </div>

        <div className="grey-background small-pad-mob-mid-pad-desk">
        
            <div id="faq" className="page-center mid-pad">
                <h2>Frequently Asked Questions</h2>
                <div className="two-col align-top small-mar">
                    <div>
                        <h4>Who is this course for?</h4>
                        <p className="small-grey-font">This course is for anyone striving to live a happy, meaningful life and curious about what the best philosophical wisdom has to say about the subject. You may have read some philosophy, or you may have never engaged with the subject before: either way, we’ve distilled seven of the world’s wisest and most important philosophical approaches so you can reflect on and enrich your own personal philosophy in accessible, organized fashion, and efficiently learn and discuss some of the best wisdom from history.</p>
                    </div>
                    <div>
                        <h4>How long does it take to do the course?</h4>
                        <p className="small-grey-font">The course is broken into seven distinct chapters, each of which takes about 60 minutes to read through. We recommend reading a maximum of one or two chapters per day to let each philosophy sink in. At the end of each chapter, we also present questions to reflect on and a space for community discussion. So, with daily reading, the course may take a week or so to complete. You have access to course materials forever, so don’t worry if you miss a day — you can take the course at your own pace.</p>
                    </div>
                </div>
                <div className="two-col align-top">
                    <div>
                        <h4>How is the course delivered?</h4>
                        <p className="small-grey-font">Course materials are hosted on our online learning and community platform, Philosophy Break Academy. They are optimized for easy reading on any device — be it desktop, laptop, tablet, or mobile — and are even printable, so you can consume them however you like.</p>
                    </div>
                    <div>
                        <h4>Can I take the course on mobile?</h4>
                        <p className="small-grey-font">Yes, course materials are optimized for easy reading on any device, and you can also download an app-version of our online learning platform, Philosophy Break Academy, so that you can keep on learning even when you’re on the move.</p>
                    </div>
                </div>
                <div className="two-col align-top">
                    <div>
                        <h4>Who created the course?</h4>
                        <p className="small-grey-font">This course is brought to you by Philosophy Break, a self-funded social enterprise dedicated to getting more people engaged with philosophy. Course content is put together by the founder of Philosophy Break, <a target="_blank" href="/about">Jack Maden</a>, who received an MA in Philosophy from the University of Southampton in 2014, and has been producing educational resources and writing about philosophy ever since. Having obtained great value researching philosophy at postgraduate level, Jack wanted to share the subject’s riches with a wider audience, and created Philosophy Break in 2018. This course is the result of years of research and refinement to make philosophy’s profound and important wisdom as relevant, interesting, and engaging to today’s digital world as possible.</p>
                    </div>
                    <div>
                        <h4>Where do profits from the course go?</h4>
                        <p className="small-grey-font">Philosophy Break is a self-funded social enterprise, so we put all proceeds straight back into funding our mission of engaging more people with philosophy. By purchasing a course, you help support us on that mission.</p>
                        <p className="small-grey-font">Have a question not answered here? Simply <a href="mailto:hello@philosophybreak.com">drop us an email</a>, and we’ll be happy to answer!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="darkradial-background mid-pad">
            <div className="mid-width page-center text-center">
                <h2 className="small-mar">It’s Time to Begin Your Philosophical Journey</h2>
                <div className="separator"></div>
                <p className="small-grey-font">Start now, and by this time next week, you’ll understand philosophy’s top practical wisdom, enjoy a philosophically-enriched view on the world, and know the best next steps for continuing your journey.</p>
                <div className="small-width">
                    <CheckoutPFL />
                    <div className="large-mar-top">
                        <AnchorLink className="no-hover" href="#top"><button className="button primary" style={{background: "transparent", border: "none", boxShadow: "none"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>Back to Top</button></AnchorLink>
                    </div>
                </div>
            </div>
            <div className="small-pad"></div>
        </div>


        <Script id="purchase-parity" src='https://cdn.paritydeals.com/banner.js' />

    </Layout>
    </>
    )
}

export const query = graphql`{
  pfl: file(relativePath: {eq: "how-to-live-a-good-life-seo.png"}) {
    childImageSharp {
        gatsbyImageData(width: 1200, quality: 100, layout: CONSTRAINED)
    }
  }
  about: file(relativePath: {eq: "how-to-live-a-good-life.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
  chapter1: file(relativePath: {eq: "1-aristotle.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: CONSTRAINED)
    }
  }
  chapter2: file(relativePath: {eq: "2-epicureanism.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter3: file(relativePath: {eq: "3-stoicism.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter4: file(relativePath: {eq: "4-buddhism.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter5: file(relativePath: {eq: "5-confucianism.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter6: file(relativePath: {eq: "6-existentialism.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter7: file(relativePath: {eq: "7-effective-altruism.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  welcome: file(relativePath: {eq: "academy-welcome.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
}
`

export default Page