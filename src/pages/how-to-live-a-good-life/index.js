import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import { CoursePromoForm } from "../../components/coursePromoForm"
import ReviewsStarsLBQ from "../../components/reviewsStarsLBQ"

const Page = ({ data, location }) => {

    const imagePath = getSrc(data.pfl)
    const chap1 = getSrc(data.chapter1)
    const chap2 = getSrc(data.chapter2)
    const chap3 = getSrc(data.chapter3)
    const chap4 = getSrc(data.chapter4)
    const chap5 = getSrc(data.chapter5)
    const chap6 = getSrc(data.chapter6)
    const chap7 = getSrc(data.chapter7)
    
    return (
    <>
    <Seo title="How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)" description="Discover practical wisdom from 7 of the world’s most influential philosophies — including Stoicism, Buddhism, and Existentialism — to help you find meaning, purpose, and live a good life." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple/>

        {/*DISABLE MEDIAVINE ADS*/}
        <div id="mediavine-settings" data-blocklist-all="1" ></div>

        {/*page title*/}
        <div className="top-title darkradial-background course" id="top">
            <div className="two-col page-center">
                <div>
                    <p className="verified no-mar-top">NEW!</p><span className="tag time new"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>COURSE & COMMUNITY</span><div className="separator course new pfl"></div>
                    <h1 id="pfl">How to Live a Good Life (According to 7 of the World’s Wisest Philosophies)</h1>
                    <p className="spectral">Enhance your approach to life by exploring 7 of the world’s wisest and most influential philosophies for living — including Stoicism, Existentialism, Buddhism, and beyond.</p>
                    <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="How to Live a Good Life" loading="eager" className="desktop-no-display tiny-mar-top-important" />
                    <p className="small-grey-font smaller text-center no-mar-top-mob desktop-no-display" style={{marginTop: "-12px"}}><i>You'll unlock instant access to Philosophy Break Academy, our interactive online learning & community space (accessible via web or app).</i></p>
                    <div className="mobile-center">
                        <AnchorLink className="no-hover" href="#form"><button className="button primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>Register Interest & Get Discount</button></AnchorLink>
                        <p className="no-mar-top"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <span style={{fontSize: "14px"}}>(50+ reviews for our courses)</span></p>
                        
                        
                     </div>
                </div>
                <div className="mobile-no-display">
                    <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="Life’s Big Questions" loading="eager" />
                    <p className="small-grey-font smaller text-center no-mar-top-mob" style={{marginTop: "-12px"}}><i>You'll unlock instant access to Philosophy Break Academy, our interactive online learning & community space (accessible via web or app).</i></p>
                </div>
            </div>
        </div>

        <div className="grey-background">
            {/*pain points and benefits*/}
            <div className="page-center mid-pad">
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
                <h2 className="mid-pad-bottom text-center">Discover and compare how the great philosophers think you can live a happier, more fulfilling life:</h2>
            </div>
            <div className="small-mar no-mar-top-desktop">
                <div className="two-col big-2-col page-center row-reverse small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">1</span><span>Aristotle</span></h3>
                        <p className="large-grey-font">If you want to achieve excellence and happiness in all that you do, Aristotle has some common-sense advice that will help. Chapter 1 distills his deeply influential philosophy.</p>
                    </div>
                    <div>
                        <a href={chap1} className="no-hover no-decoration" target="_blank" rel="noreferrer">
                            <GatsbyImage image={data.chapter1.childImageSharp.gatsbyImageData} alt="Why Does Anything Exist?" />
                            <p className="image-caption-tap right">↗ Chapter 1 (8 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col row-reverse page-center small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">2</span><span>Epicureanism</span></h3>
                        <p className="large-grey-font">If relaxing and cultivating a tranquil mind are more your thing, Epicurus will be your guide. Chapter 2 outlines Epicureanism's simple yet profound recipe for happiness.</p>
                    </div>
                    <div>
                    <a href={chap2} className="no-hover no-decoration" target="_blank" rel="noreferrer">
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
                        <h3 className="flex-end"><span className="spectral big-letter">3</span><span>Stoicism</span></h3>
                        <p className="large-grey-font">If you are anxious about the future, and often worry about things that are out of your control, the Stoics may help you reframe your concerns. Chapter 3 concisely packages their practical wisdom.</p>
                    </div>
                    <div>
                    <a href={chap3} className="no-hover no-decoration" target="_blank" rel="noreferrer">
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
                        <h3 className="flex-end"><span className="spectral big-letter">4</span><span>Buddhism</span></h3>
                        <p className="large-grey-font">If everyday life leaves you with a faint buzz of dissatisfaction and you're not sure why, the Buddha may provide some insight. Chapter 4 sheds light on the rich solutions of Buddhist philosophy.</p>
                    </div>
                    <div>
                    <a href={chap4} className="no-hover no-decoration" target="_blank" rel="noreferrer">
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
                        <h3 className="flex-end"><span className="spectral big-letter">5</span><span>Confucianism</span></h3>
                        <p className="large-grey-font">If you want to find ways to feel more connected to the important people in your life, and promote the moral growth of all, Confucius has some ideas. Chapter 5 shows why Confucianism was China's dominant way of life for millennia.</p>
                    </div>
                    <div>
                    <a href={chap5} className="no-hover no-decoration" target="_blank" rel="noreferrer">
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
                        <h3 className="flex-end"><span className="spectral big-letter">6</span><span>Existentialism</span></h3>
                        <p className="large-grey-font">If you feel like life is meaningless and all your projects ultimately lack purpose, you might find some relief in existentialism. Chapter 6 distills the philosophies of Jean-Paul Sartre, Simone de Beauvoir, Albert Camus, Nietzsche, Kierkegaard, and more.</p>
                    </div>
                    <div>
                    <a href={chap6} className="no-hover no-decoration" target="_blank" rel="noreferrer">
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
                        <h3 className="flex-end"><span className="spectral big-letter">7</span><span>Effective Altruism</span></h3>
                        <p className="large-grey-font">If you are sold on the idea of doing good in the world, but feel powerless about making any kind of difference on the global stage, effective altruism might be the framework you’re looking for. Chapter 7 investigates this powerful, yet increasingly controversial, approach to the good life.</p>
                    </div>
                    <div>
                    <a href={chap7} className="no-hover no-decoration" target="_blank" rel="noreferrer">
                    <GatsbyImage
                        image={data.chapter7.childImageSharp.gatsbyImageData}
                        alt="How Should We Approach Life?" />
                        <p className="image-caption-tap right">↗ Chapter 7 (7 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mid-pad page-center">
                <h2 className="text-center">What You'll Get Instant Access To:</h2>
                <div className="four-col mobile-center small-pad no-pad-desktop">
                    <div className="small-mar-top">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> Philosophy Break Academy</h5>
                        <p className="small-grey-font">Your own interactive learning space, offering crystal clear guidance and progress tracking.</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 7 concise chapters</h5>
                        <p className="small-grey-font">One succinct chapter (60-min read) on each philosophy, distilling millennia of wisdom.</p>
                    </div>
                    <div className="small-mar-top">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 7 reading lists</h5>
                        <p className="small-grey-font">Seven curated reading lists for effective further exploration of each philosophy covered.</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 8 guided discussions</h5>
                        <p className="small-grey-font">Community-driven reflections on each philosophy, and a final summary discussion.</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="darkradial-background">

        <div id="form" className="mid-pad page-center text-center">
                <div className="mid-width small-pad-bottom">
                    <p className="verified no-mar-top">LAUNCHING 21 JUNE</p><br/><span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>COURSE & COMMUNITY</span><div className="separator course chapter"></div>
                    <h2>Register Now to Stay Notified and Secure a Launch Discount</h2>
                    <p className="spectral">Enhance your approach to life by exploring 7 of the world’s wisest and most influential philosophies for living — including Stoicism, Buddhism, and Existentialism. Register your interest now:</p> 
                    
                    <CoursePromoForm />
                </div>
            </div>

        </div>


        
        
        {/*Reviews
        <Reviews bg="darkradial-background" title="37 Course Reviews" toggle="primary" />

        
        <div className="darkradial-background small-pad">
            <div className="page-center">
                <div className="large-pad-bottom mid-width text-center">
                    <h2 className="small-mar">You Deserve It: Indulge Your Interest in Philosophy Today</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Start now, and by this time next week, you’ll understand philosophy’s top wisdom, have clarity on exactly which topics interest you, and know the best next steps for continuing your philosophical journey.</p>
                    <div className="small-width"><CheckoutLBQ /></div>
                </div>
            */}
            {/*FAQ
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
                            <p className="small-grey-font">This course is brought to you by Philosophy Break, a self-funded social enterprise dedicated to getting more people engaged with philosophy. Course content is put together by the founder of Philosophy Break, <a target="_blank" href="/about">Jack Maden</a>, who received an MA in Philosophy from the University of Southampton in 2014, and has been producing educational resources and writing about philosophy ever since. Having obtained great value researching philosophy at postgraduate level, Jack wanted to share the subject’s riches with a wider audience, and created Philosophy Break in 2018. This course is the result of years of research and refinement to make philosophy’s profound and important wisdom as relevant, interesting, and engaging to today’s digital world as possible.</p>
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
        </div>*/}
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
}
`

export default Page