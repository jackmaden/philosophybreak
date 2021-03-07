import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import Checkout from "../../components/checkout"

export default ({ data, location }) => {
    return (
        <>
        <SEO title="Introduction to Philosophy Course: Life’s Big Questions" description="This introductory course distills philosophy’s best answers to some of life's most troubling questions in less than a week, taking you on a whirlwind journey of reflection, understanding, and discovery." pathname={location.pathname} />
        <Layout>
        <NavigationSimple/>
            {/*page title*/}
            <div className="top-title darkradial-background" id="top">
                <div className="two-col page-center">
                    <div>
                        <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>5-DAY COURSE</span><div className="separator course"></div>
                        <h1>Introduction to Philosophy Course: Life’s Big Questions</h1>
                        <p style={{marginBottom: 0}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <AnchorLink href="#reviews" className="white-underline" style={{fontSize: "16px"}}>(9 reviews)</AnchorLink></p>
                        <p className="spectral">This introductory course distills philosophy's best answers to some of life's most troubling questions, taking you on a whirlwind journey of reflection, understanding, and discovery.</p>
                        <Checkout />
                        <AnchorLink className="no-hover" href="#look-inside"><button className="button primary" style={{background: "transparent", border: "solid #fff 2px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>Look Inside</button></AnchorLink>
                    </div>
                    <div>
                        <Img fluid={data.about.childImageSharp.fluid} fadeIn={false} loading="eager" alt="Life's Big Questions" />
                        <p className="small-grey-font text-center" style={{fontSize: "16px"}}><i>Course materials are delivered direct to your inbox over five days, and accessible forever from any device.</i></p>
                    </div>
                </div>
            </div>
            {/*Chapters*/}
            <div className="large-pad darkradial-background">
                <div className="text-center page-center">
                    <h2 id="look-inside">Quickly understand philosophy’s best answers to some of life’s most troubling questions</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font mid-width">Each day over five days, you'll receive beautifully-packaged materials that distill philosophy's best wisdom from the last two millennia, as well as guided reflections and curated further reading.</p>
                </div>
                <div className="mid-mar">
                    <div className="two-col big-2-col page-center row-reverse">
                        <div>
                            <h3 className="flex-end"><span className="spectral big-letter">1</span><span>Why Does Anything Exist?</span></h3>
                            <p className="small-grey-font">On day one of Life's Big Questions, we'll consider why there is something rather than nothing. If God created the universe, why does God exist? If the Big Bang caused the universe, what set the preconditions for the Big Bang? Chapter #1 features answers from philosophical titans like Leibniz and Spinoza, as well as contemporary quantum physicists and thinkers like Lawrence Krauss and Derek Parfit. Want a sneak peek? <Link to="/articles/why-does-anything-exist/">Read an extract from this chapter here.</Link></p>
                        </div>
                        <div>
                        <Img fluid={data.chapter1.childImageSharp.fluid} alt="Why Does Anything Exist?" />
                        </div>
                    </div>
                </div>
                <div className="mid-mar">
                    <div className="two-col big-2-col row-reverse page-center">
                        <div>
                            <h3 className="flex-end"><span className="spectral big-letter">2</span><span>Is the World Around Us ‘Real’?</span></h3>
                            <p className="small-grey-font">On day two of Life's Big Questions, we'll inspect the extent to which the world around us reflects ‘reality’. Do our senses deceive us about what's really there? Can we ever <i>prove</i> that we're not all brains in vats? To face up to these questions, Chapter #2 draws on the approaches of philosophical giants Descartes, Locke, Berkeley, Hume, and Kant. Interested in what's inside? <Link to="/articles/is-the-world-around-us-real/">Read an extract from this chapter here.</Link></p>
                        </div>
                        <div>
                        <Img fluid={data.chapter2.childImageSharp.fluid} alt="Is the World Around Us ‘Real’?" />
                        </div>
                    </div>
                </div>
                <div className="mid-mar">
                    <div className="two-col big-2-col row-reverse page-center">
                        <div>
                            <h3 className="flex-end"><span className="spectral big-letter">3</span><span>What Makes Us Conscious?</span></h3>
                            <p className="small-grey-font">Are feelings and experiences something <i>different</i> from our brains, or <i>are</i> they our brains? Do they happen <i>in addition to</i> all the physical processes in our brains, or are they <i>identical</i> to them? On day three, we'll consider the mystery of consciousness, featuring discussions from contemporary philosophers of mind like Thomas Nagel and David Chalmers.</p>
                        </div>
                        <div>
                        <Img fluid={data.chapter3.childImageSharp.fluid} alt="What Makes Us Conscious?" />
                        </div>
                    </div>
                </div>
                <div className="mid-mar">
                    <div className="two-col big-2-col row-reverse page-center">
                        <div>
                            <h3 className="flex-end"><span className="spectral big-letter">4</span><span>Do We Have Free Will?</span></h3>
                            <p className="small-grey-font">If we live in a world governed by cause and effect, and these causal chains stretch back to the beginning of the universe, where does human agency fit in? Is the freedom we feel in our actions simply an illusion? On day four, we'll investigate the strange problem of free will, drawing from philosophical greats like Schopenhauer to contemporary neuroscientists and thinkers like Sam Harris and Daniel Dennett.</p>
                        </div>
                        <div>
                        <Img fluid={data.chapter4.childImageSharp.fluid} alt="Do We Have Free Will?" />
                        </div>
                    </div>
                </div>
                <div className="mid-mar">
                    <div className="two-col big-2-col row-reverse page-center">
                        <div>
                            <h3 className="flex-end"><span className="spectral big-letter">5</span><span>How Should We Approach Life?</span></h3>
                            <p className="small-grey-font">On the fifth and final day of Life's Big Questions, we'll turn from theorizing about the nature of existence and begin to unpack the practical consequences for how we should live our lives. We'll ask if there's a <i>right</i> way to live, and consider answers from philosophical favorites Nietzsche, Camus, Lucretius — and consider the three main ethical systems for how we should treat other people.</p>
                        </div>
                        <div>
                        <Img fluid={data.chapter5.childImageSharp.fluid} alt="How Should We Approach Life?" />
                        </div>
                    </div>
                </div>
                <div className="page-center small-pad mid-width text-center">
                    <h2 className="small-mar">Start Answering Life’s Big Questions Today</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Enroll today, and by this time next week, you'll understand philosophy's top wisdom, have clarity on exactly which topics interest you, and know the best further reading for continuing your philosophical journey.</p>
                    <div className="small-width"><Checkout /></div>
                </div>
            </div>
            
            {/*Reviews*/}
            <div className="darkradial-background small-pad" id="reviews">
                <div className="page-center">
                    <h2>Course Reviews</h2>
                    <div className="two-col align-top">
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Brilliant introduction</i></span></p>
                            <span style={{lineHeight: "1.3"}}>A brilliant introduction to philosophy, covering thoughts from the greatest thinkers over the last few millennia on questions that continue to rattle minds today. This course is excellent for anyone who has an interest in philosophy, but didn't get to study it at university. I personally have read some books on philosophy, and this course helped solidify some ideas and introduced me to others. Equally, if you haven't read any philosophy, this is the place I wish I had started.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Mark H. on 20 February 2021</span></div>
                        </div>
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Highly recommend</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Would highly recommend this if you're interested in some of life's ‘big questions’ or want an introduction to philosophy without having to wade through heavy reference books… the chapters are a well-written, easy-to-read but comprehensive and insightful synopsis of the thoughts of some of history's greatest philosophers. The course poses lots of questions at appropriate points that engaged me to think more about things that, though interesting and meaningful, are often pushed to the back of our minds due to the short-termist and relatively trivial focus of most of our daily lives. Dip your toe into these philosophical waters, you won't regret it!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>John M. on 20 February 2021</span></div>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very informative</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I found this course so refreshing as it is written in an easy to understand style, and raises stimulating questions at the end of each chapter. The philosophy book recommendations are also very well researched and informative. I would encourage anyone with an interest in the ‘big questions’ to sign up to this course.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Jill P. on 20 February 2021</span></div>
                        </div>
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great intro</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I loved philosophy break on Instagram and had read some of the articles but wanted to take the next step. This was perfect because I could read it in my own time and felt I was on a journey toward something great. I feel enlightened and it's led me to explore some of the topics in more detail. A great intro to philosophy. Would recommend.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Florence R. on 19 February 2021</span></div>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Beautiful content</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Great content packaged in beautiful, compelling chapters that are very interesting and easy to consume. Thanks!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sian Y. on 19 February 2021</span></div>
                        </div>
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>My brain hurts</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Some of the stuff in this course seriously blew my mind! These are such interesting questions and the answers are challenging but presented in really easy-to-understand and engaging ways. Great course thank you.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Carter T. on 19 February 2021</span></div>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Challenging but fascinating</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I was looking for something to extend my understanding beyond casual google searches and occasional journal articles. I found the course challenging, but feel much more confident to approach more complex philosophical texts now. Thank you.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Tim on 19 February 2021</span></div>
                        </div>
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great stuff</i></span></p>
                            <span style={{lineHeight: "1.3"}}>This was such a great way to consider the ‘big questions’. Quicker and easier to read than a book because it's broken down into daily chapters, but just as eye-opening. Great stuff Philosophy Break!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>George N. on 18 February 2021</span></div>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Perfect introduction</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Loved this course! I've always had an interest in philosophy but the big books scare me a bit, so this course was the perfect way to ease me in. It was still challenging... but I could take it at my own pace after it arrived straight into my inbox and I could go back any time to revisit content that challenged me. Can't wait for the next course. Thank you Philosophy Break!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sophie on 18 February 2021</span></div>
                        </div>
                        <div className="small-mar">
                        </div>
                    </div>
                    <div className="large-pad mid-width text-center">
                        <h2 className="small-mar">Learn Philosophy's Best Answers in Less than a Week</h2>
                        <div className="separator"></div>
                        <p className="small-grey-font">Enroll today, and by this time next week, you'll understand philosophy's top wisdom, have clarity on exactly which topics interest you, and know the best further reading for continuing your philosophical journey.</p>
                        <div className="small-width"><Checkout /></div>
                    </div>
                </div>
            </div>
            {/*FAQ*/}
            <div className="darkradial-background small-pad">
                <div className="page-center">
                    <h2>Frequently Asked Questions</h2>
                    <div className="two-col align-top small-mar">
                        <div>
                            <h4>Who is this course for?</h4>
                            <p className="small-grey-font">This is for anyone curious about why we are here, the nature of existence, and how we should spend our lives. You may have read some philosophy, or you may have never engaged with the subject before: either way, we've distilled philosophy's best answers so you can quickly approach life's nagging questions and anxieties in an accessible, organized fashion, and efficiently learn some of the best wisdom from history.</p>
                        </div>
                        <div>
                            <h4>How long does it take to do the course?</h4>
                            <p className="small-grey-font">The course is delivered over five days, with a new question considered each day. Each day's materials take about 30 minutes to read through, with an extra fifteen or so minutes recommended for reflection. You have access to course materials forever, so don't worry if you miss a day — you can take the course at your own pace.</p>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div>
                            <h4>How is the course delivered?</h4>
                            <p className="small-grey-font">Course materials are delivered directly to your email inbox each day over five days. They are optimized for easy reading on any device — be it desktop, laptop, tablet, or mobile — and are even printable, so you can consume them however you like.</p>
                        </div>
                        <div>
                            <h4>What if I miss a day?</h4>
                            <p className="small-grey-font">If over the five days of the course you miss a day, don't worry — you'll have access to course materials forever, and can come back to anything at any time and take everything at your own pace. </p>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div>
                            <h4>Who wrote the course?</h4>
                            <p className="small-grey-font">This course is brought to you by Philosophy Break, a self-funded social enterprise dedicated to getting more people engaged with philosophy. Course content is put together by the founder of Philosophy Break, <a target="_blank" href="/about">Jack Maden</a>, who holds a master's degree in philosophy from the University of Southampton. Having obtained great value from philosophy at postgraduate level, Jack wanted to make the subject's riches accessible to a wider general audience, and created Philosophy Break in 2018. This course is the result of years of refinement and tweaking to make philosophy's profound and important wisdom as relevant, interesting, and engaging to today's digital world as possible.</p>
                        </div>
                        <div>
                            <h4>Where do profits from the course go?</h4>
                            <p className="small-grey-font">Philosophy Break is a self-funded social enterprise, so we put all proceeds straight back into funding our mission of engaging more people with philosophy. By purchasing a course, you help support us on that mission.</p>
                            <p className="small-grey-font">Have a question not answered here? Simply <a href="mailto:hello@philosophybreak.com">drop us an email</a>, and we'll be happy to answer!</p>
                        </div>
                    </div>
                    <div className="large-pad mid-width text-center">
                        <h2 className="small-mar">It's Time to Begin Your Philosophical Journey</h2>
                        <div className="separator"></div>
                        <p className="small-grey-font">Enroll today, and by this time next week, you'll understand philosophy's top wisdom, have clarity on exactly which topics interest you, and know the best further reading for continuing your philosophical journey.</p>
                        <div className="small-width">
                            <Checkout />
                            <AnchorLink className="no-hover" href="#top"><button className="button primary" style={{background: "transparent", border: "solid #fff 2px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>Back to Top</button></AnchorLink>
                        </div>
                    </div>
                    <div className="small-pad"></div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export const query = graphql`
    query {
        about: file(relativePath: {eq: "Chapter1-full.png"}) {
            childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        chapter1: file(relativePath: {eq: "Chapter1-t.png"}) {
            childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        chapter2: file(relativePath: {eq: "Chapter2-t.png"}) {
            childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        chapter3: file(relativePath: {eq: "Chapter3-t.png"}) {
            childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        chapter4: file(relativePath: {eq: "Chapter4-t.png"}) {
            childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        chapter5: file(relativePath: {eq: "Chapter5-t.png"}) {
            childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`