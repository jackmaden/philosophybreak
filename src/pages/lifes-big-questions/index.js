import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import { CheckoutLBQ } from "../../components/checkoutLBQ"
import Reviews from "../../components/reviewsLBQ"
import ReviewsLatestLBQ from "../../components/reviewsLatestLBQ"
import ReviewsStarsLBQ from "../../components/reviewsStarsLBQ"

const Page = ({ data, location }) => {
    
    const imagePath = getSrc(data.lbq)
    const chap1 = getSrc(data.chapter1)
    const chap2 = getSrc(data.chapter2)
    const chap3 = getSrc(data.chapter3)
    const chap4 = getSrc(data.chapter4)
    const chap5 = getSrc(data.chapter5)

    return (
    <>
    <Seo title="Life’s Big Questions: Introduction to Philosophy Course" description="This introductory course distills philosophy’s best answers to some of life’s most troubling questions in less than a week, taking you on a whirlwind journey of reflection, understanding, and discovery." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple/>
        
         
         

        {/*page title*/}
        <div className="top-title darkradial-background course" id="top">
            <div className="two-col big-2-col page-center">
                <div>
                    <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>5-DAY COURSE</span><div className="separator course"></div>
                    <h1 id="lbq">Unlock Philosophy’s Best Answers to Life’s Big Questions (with Just 1 Concise, 30-min Read per Day)</h1>
                    <p className="spectral">Discovering philosophy’s top wisdom has never been simpler. Each day for the next 5 days, you’ll receive a value-packed, 30-minute read (accessible forever from any device) distilling the great philosophers’ best answers to life’s big questions. Start enriching your mind now.</p>
                    <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="Life’s Big Questions" loading="eager" className="desktop-no-display tiny-mar-top-important" />
                    <div className="mobile-center">
                        <CheckoutLBQ />
                    </div>
                </div>
                <div className="mobile-no-display">
                    <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="Life’s Big Questions" loading="eager" />
                </div>
            </div>
            {/*latest reviews*/}
            <div className="small-pad">
                <div className="page-center text-center">
                    <h4 style={{fontWeight: "700"}} className="no-mar-bottom">Latest Course Reviews:</h4>
                    <ReviewsLatestLBQ />
                    <p className="no-mar-bottom"><AnchorLink href="#reviews" className="white-underline" style={{fontSize: "16px"}}>See All Reviews</AnchorLink></p>
                </div>
            </div>
            {/*pain points and benefits*/}
            <div className="page-center small-pad">
                <div className="text-center">
                    <h3 className="small-mar">Does this sound like you?</h3><svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                    <div className="mid-width">
                        <h4 className="small-mar">You’re intrigued by philosophy, but don’t know where to start</h4>
                        <svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                        <h4 className="small-mar">You’d love to discover and understand philosophy’s top answers to life’s big questions, but don’t have time to wade through all the books and secondary literature</h4>
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
                            <p className="small-grey-font smaller">No filler; no fluff. See exactly what the great philosophers say about why anything exists, how we should live, and more.</p>
                        </div>
                        <div>
                            <h5><span style={{"color": "#36b4ff"}}>➤</span> Enrich your life</h5>
                            <p className="small-grey-font smaller">Appreciate precisely why philosophy routinely changes people’s perspectives, and will perhaps change your own.</p>
                        </div>
                    </div>
            </div>

        
            <div className="page-center mobile-center">
                <ReviewsStarsLBQ />
            </div>
            <div className="page-center small-pad mid-width text-center">
                <h2 className="small-mar">Learn Thousands of Years of Philosophy with Just 30 Minutes of Reading per Day</h2>
                <div className="separator"></div>
                <p className="small-grey-font">Start now, and by this time next week, you’ll understand philosophy’s top wisdom, have clarity on exactly which topics interest you, and know the best next steps for continuing your philosophical journey.</p>
                <div className="small-width"><CheckoutLBQ /></div>
            </div>
            
        </div>


        {/*Chapters*/}
        <div id="look-inside" className="small-pad darkradial-background no-pad-bottom-desktop">
            <div className="page-center">
                <h2 className="text-center">What You Get Delivered to Your Inbox Over 5 Days:</h2>
                <div className="four-col mobile-center small-pad no-pad-desktop">
                    <div className="small-mar-top">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> Distilled wisdom</h5>
                        <p className="small-grey-font">Crystal clear insight into how the great philosophers have answered life’s big questions.</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 5 concise chapters</h5>
                        <p className="small-grey-font">One succinct chapter (30-minute read) for each core topic, distilling millennia of wisdom.</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 5 guided reflections</h5>
                        <p className="small-grey-font">Five sets of questions and reflections to round out each day’s philosophizing.</p>
                    </div>
                    <div className="small-mar-top">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 5 reading lists</h5>
                        <p className="small-grey-font">Five curated reading lists for effective further exploration of each topic covered.</p>
                    </div>
                </div>
            </div>
            <div className="small-mar no-mar-top-desktop">
                <div className="two-col big-2-col page-center row-reverse small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">1</span><span>Why Does Anything Exist?</span></h3>
                        <p className="small-grey-font">On day one of Life’s Big Questions, we’ll consider why there is something rather than nothing. If God created the universe, why does God exist? If the Big Bang caused the universe, what set the preconditions for the Big Bang? Chapter #1 features answers from philosophical titans like Leibniz and Spinoza, as well as contemporary quantum physicists and thinkers like Lawrence Krauss and Derek Parfit. Want a sneak peek? <Link to="/articles/why-does-anything-exist/">Read an extract from this chapter here.</Link></p>
                    </div>
                    <div>
                        <a href={chap1} className="no-hover no-decoration" target="_blank" rel="noreferrer">
                            <GatsbyImage image={data.chapter1.childImageSharp.gatsbyImageData} alt="Why Does Anything Exist?" />
                            <p className="image-caption-tap">↗ Chapter 1 (37 pages). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">2</span><span>Is the World Around Us ‘Real’?</span></h3>
                        <p className="small-grey-font">On day two of Life’s Big Questions, we’ll inspect the extent to which the world around us reflects ‘reality’. Do our senses deceive us about what’s really there? Can we ever <i>prove</i> that we’re not all brains in vats? To face up to these questions, Chapter #2 draws on the approaches of philosophical giants Descartes, Locke, Berkeley, Hume, and Kant. Interested in what’s inside? <Link to="/articles/is-the-world-around-us-real/">Read an extract from this chapter here.</Link></p>
                    </div>
                    <div>
                    <a href={chap2} className="no-hover no-decoration" target="_blank" rel="noreferrer">
                    <GatsbyImage
                        image={data.chapter2.childImageSharp.gatsbyImageData}
                        alt="Is the World Around Us ‘Real’?" />
                        <p className="image-caption-tap">↗ Chapter 2 (59 pages). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">3</span><span>What Makes Us Conscious?</span></h3>
                        <p className="small-grey-font">Are feelings and experiences something <i>different</i> from our brains, or <i>are</i> they our brains? Do they happen <i>in addition to</i> all the physical processes in our brains, or are they <i>identical</i> to them? On day three, we’ll consider the mystery of consciousness, featuring discussions from contemporary philosophers of mind like Thomas Nagel and David Chalmers.</p>
                    </div>
                    <div>
                    <a href={chap3} className="no-hover no-decoration" target="_blank" rel="noreferrer">
                    <GatsbyImage
                        image={data.chapter3.childImageSharp.gatsbyImageData}
                        alt="What Makes Us Conscious?" />
                        <p className="image-caption-tap">↗ Chapter 3 (41 pages). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">4</span><span>Do We Have Free Will?</span></h3>
                        <p className="small-grey-font">If we live in a world governed by cause and effect, and these causal chains stretch back to the beginning of the universe, where does human agency fit in? Is the freedom we feel in our actions simply an illusion? On day four, we’ll investigate the strange problem of free will, drawing from philosophical greats like Schopenhauer to contemporary neuroscientists and thinkers like Sam Harris and Daniel Dennett.</p>
                    </div>
                    <div>
                    <a href={chap4} className="no-hover no-decoration" target="_blank" rel="noreferrer">
                    <GatsbyImage
                        image={data.chapter4.childImageSharp.gatsbyImageData}
                        alt="Do We Have Free Will?" />
                        <p className="image-caption-tap">↗ Chapter 4 (49 pages). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">5</span><span>How Should We Approach Life?</span></h3>
                        <p className="small-grey-font">On the fifth and final day of Life’s Big Questions, we’ll turn from theorizing about the nature of existence and begin to unpack the practical consequences for how we should live our lives. We’ll ask if there’s a <i>right</i> way to live, and consider answers from philosophical favorites Nietzsche, Camus, Lucretius — and consider the three main ethical systems for how we should treat other people.</p>
                    </div>
                    <div>
                    <a href={chap5} className="no-hover no-decoration" target="_blank" rel="noreferrer">
                    <GatsbyImage
                        image={data.chapter5.childImageSharp.gatsbyImageData}
                        alt="How Should We Approach Life?" />
                        <p className="image-caption-tap">↗ Chapter 5 (59 pages). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="page-center small-pad mid-width text-center">
                <h2 className="small-mar">Treat Yourself: a One-off Investment for a Lifetime of Philosophical Wisdom</h2>
                <div className="separator"></div>
                <p className="small-grey-font">Start now, and by this time next week, you’ll understand philosophy’s top wisdom, have clarity on exactly which topics interest you, and know the best next steps for continuing your philosophical journey.</p>
                <div className="small-width"><CheckoutLBQ /></div>
            </div>
        </div>
        
        {/*Reviews*/}
        <Reviews bg="darkradial-background" title="40 Course Reviews" toggle="primary" />

        
        <div className="darkradial-background small-pad">
            <div className="page-center">
                <div className="large-pad-bottom mid-width text-center">
                    <h2 className="small-mar">You Deserve It: Indulge Your Interest in Philosophy Today</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Start now, and by this time next week, you’ll understand philosophy’s top wisdom, have clarity on exactly which topics interest you, and know the best next steps for continuing your philosophical journey.</p>
                    <div className="small-width"><CheckoutLBQ /></div>
                </div>

            {/*FAQ*/}
                <div id="faq">
                    <h2 className="mid-mar-top">Frequently Asked Questions</h2>
                    <div className="two-col align-top small-mar">
                        <div>
                            <h4>Who is this course for?</h4>
                            <p className="small-grey-font">This is for anyone curious about why we are here, the nature of existence, and how we should spend our lives. You may have read some philosophy, or you may have never engaged with the subject before: either way, we’ve distilled philosophy’s best answers so you can quickly approach life’s nagging questions and anxieties in an accessible, organized fashion, and efficiently learn some of the best wisdom from history.</p>
                        </div>
                        <div>
                            <h4>How long does it take to do the course?</h4>
                            <p className="small-grey-font">The course is delivered over five days, with a new question considered each day. Each day’s materials take about 30 minutes to read through, with an extra ten minutes or so recommended for reflection. You have access to course materials forever, so don’t worry if you miss a day — you can take the course at your own pace.</p>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div>
                            <h4>How is the course delivered?</h4>
                            <p className="small-grey-font">Course materials are delivered directly to your email inbox each day over five days. They are optimized for easy reading on any device — be it desktop, laptop, tablet, or mobile — and are even printable, so you can consume them however you like.</p>
                        </div>
                        <div>
                            <h4>What if I miss a day?</h4>
                            <p className="small-grey-font">If over the five days of the course you miss a day, don’t worry — you’ll have access to course materials forever, and can come back to anything at any time and take everything at your own pace. </p>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div>
                            <h4>Who created the course?</h4>
                            <p className="small-grey-font">This course is brought to you by Philosophy Break, a self-funded social enterprise dedicated to getting more people engaged with philosophy. Course content is put together by the founder of Philosophy Break, <a target="_blank" href="/about/">Jack Maden</a>, who received an MA in Philosophy from the University of Southampton in 2014, and has been producing educational resources and writing about philosophy ever since. Having obtained great value researching philosophy at postgraduate level, Jack wanted to share the subject’s riches with a wider audience, and created Philosophy Break in 2018. This course is the result of years of research and refinement to make philosophy’s profound and important wisdom as relevant, interesting, and engaging to today’s digital world as possible.</p>
                        </div>
                        <div>
                            <h4>Where do profits from the course go?</h4>
                            <p className="small-grey-font">Philosophy Break is a self-funded social enterprise, so we put all proceeds straight back into funding our mission of engaging more people with philosophy. By purchasing a course, you help support us on that mission.</p>
                            <p className="small-grey-font">Have a question not answered here? Simply <a href="mailto:hello@philosophybreak.com">drop us an email</a>, and we’ll be happy to answer!</p>
                        </div>
                    </div>
                    <div className="large-pad mid-width text-center">
                        <h2 className="small-mar">It’s Time to Begin Your Philosophical Journey</h2>
                        <div className="separator"></div>
                        <p className="small-grey-font">Start now, and by this time next week, you’ll understand philosophy’s top wisdom, have clarity on exactly which topics interest you, and know the best next steps for continuing your philosophical journey.</p>
                        <div className="small-width">
                            <CheckoutLBQ />
                            <div className="large-mar-top">
                                <AnchorLink className="no-hover" href="#top"><button className="button primary" style={{background: "transparent", border: "none", boxShadow: "none"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>Back to Top</button></AnchorLink>
                            </div>
                        </div>
                    </div>
                    <div className="small-pad"></div>
                </div>
            </div>
        </div>    

    </Layout>
    </>
    )
}

export const query = graphql`{
  lbq: file(relativePath: {eq: "Lifes-Big-Questions-Course.jpg"}) {
    childImageSharp {
        gatsbyImageData(width: 1200, quality: 90, layout: CONSTRAINED)
    }
  }
  about: file(relativePath: {eq: "LBQallChapters.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
  chapter1: file(relativePath: {eq: "Chapter1-t.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: CONSTRAINED)
    }
  }
  chapter2: file(relativePath: {eq: "Chapter2-t.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter3: file(relativePath: {eq: "Chapter3-t.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter4: file(relativePath: {eq: "Chapter4-t.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter5: file(relativePath: {eq: "Chapter5-t.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
}
`

export default Page