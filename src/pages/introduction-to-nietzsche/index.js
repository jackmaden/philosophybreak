import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import { CheckoutNietzsche } from "../../components/checkoutNietzsche"
import ReviewsLatestNietzsche from "../../components/reviewsLatestNietzsche"
import ReviewsStarsNietzsche from "../../components/reviewsStarsNietzsche"
import FooterSimple from "../../components/footerSimple"

const Page = ({ data, location }) => {
    
    const imagePath = getSrc(data.lbq)
    const chap1 = getSrc(data.chapter1)
    const chap2 = getSrc(data.chapter2)
    const chap3 = getSrc(data.chapter3)
    const chap4 = getSrc(data.chapter4)
    const chap5 = getSrc(data.chapter5)
    const chap6 = getSrc(data.chapter6)
    const welcome = getSrc(data.welcome)

    return (
    <>
    <Seo title="Introduction to Nietzsche Course: His 5 Greatest Ideas" description="Learn everything you need to know about Friedrich Nietzsche with our concise online guide. This introductory course distills Nietzsche’s best and most misunderstood ideas, from God is dead to the Übermensch." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple />
    

        {/*page title*/}
        <div className="top-title darkradial-background course" id="top">
            <div className="two-col page-center">
                <div>
                <p className="verified no-mar-top">NEW!</p><span className="tag time new"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>COURSE & COMMUNITY</span><div className="separator course new pfl"></div>
                    <h1 id="pfl">Introduction to Nietzsche: Your Myth-Busting Guide to His 5 Greatest Ideas</h1>
                    <p className="spectral">Unlock instant access to 42 concise, self-paced lessons on Nietzsche’s fascinating yet much-misunderstood philosophy. Join 500+ members inside:</p>
                    <div className="mobile-center">
                        <CheckoutNietzsche />
                        <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="Introduction to Nietzsche" loading="eager" className="desktop-no-display tiny-mar-top-important" />
                        <p className="small-grey-font smaller text-center desktop-no-display" style={{marginTop: "-12px"}}><i>Course materials are hosted on our online learning platform, Philosophy Break Academy, and are accessible forever from any device.</i></p>
                    </div>
                </div>
                <div className="mobile-no-display">
                    <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="Introduction to Nietzsche" loading="eager" />
                    <p className="small-grey-font smaller text-center" style={{marginTop: "-12px"}}><i>Course materials are hosted on our online learning platform, Philosophy Break Academy, and are accessible forever from any device.</i></p>
                </div>
            </div>
            {/*latest reviews*/}
            <div className="small-pad">
                <div className="page-center text-center">
                    <h4 style={{fontWeight: "700"}} className="no-mar-bottom">Latest Course Reviews:</h4>
                    <ReviewsLatestNietzsche />
                    <p className="no-mar-bottom"><AnchorLink href="#reviews" className="white-underline" style={{fontSize: "16px"}}>See All Reviews</AnchorLink></p>
                </div>
            </div>
        </div>
        <div className="grey-background">
            {/*pain points & benefits*/}
            <div className="page-center mid-pad-top small-pad-bottom">
                <div className="text-center">
                    <h3 className="small-mar">Does this sound like you?</h3><svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                    <div className="mid-width">
                        <h4 className="small-mar">You’re intrigued by Nietzsche, but don’t know where to start</h4>
                        <svg style={{"width": "24px", "height": "24px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#36b4ff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                        <h4 className="small-mar">You’d love to have expert understanding of his philosophy, but don’t have time to wade through all the books and secondary literature</h4>
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
                            <p className="small-grey-font smaller">Your time is precious. Unlock rich understanding of Nietzsche’s greatest ideas in days rather than months.</p>
                        </div>
                        <div>
                            <h5><span style={{"color": "#36b4ff"}}>➤</span> Cut through the noise</h5>
                            <p className="small-grey-font smaller">No more misunderstandings. See what Nietzsche actually means by God is Dead, slave morality, the Übermensch, and more.</p>
                        </div>
                        <div>
                            <h5><span style={{"color": "#36b4ff"}}>➤</span> Enrich your life</h5>
                            <p className="small-grey-font smaller">Appreciate exactly why Nietzsche routinely changes people’s perspectives, and will perhaps change your own.</p>
                        </div>
                    </div>
            </div>

            <div className="page-center mobile-center mid-pad">
            <h3 className="text-center">100+ reviews for our courses:</h3>
                <ReviewsStarsNietzsche />
            </div>

        </div>
        {/*Chapters*/}
        <div id="look-inside"  className="grey-background small-pad">
            <div className="page-center">
                <h2 className="text-center">Go from being curious about Nietzsche to understanding his most profound ideas, with instant access to: </h2>
                <div className="four-col mobile-center small-pad no-pad-desktop">
                    <div className="small-mar-top">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 42 concise lessons</h5>
                        <p className="small-grey-font">42 self-paced lessons organized into 6 succinct chapters (each chapter is a 40-min read).</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> Modern scholarship</h5>
                        <p className="small-grey-font">Distillations of the latest scholarship on Nietzsche for each topic covered.</p>
                    </div>
                    <div className="small-mar-top">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 6 reading lists</h5>
                        <p className="small-grey-font">Six curated reading lists for effective further exploration of Nietzsche’s great ideas.</p>
                    </div>
                    <div className="small-mar">
                        <h5><span style={{"color": "#36b4ff"}}>➤</span> 7 guided discussions</h5>
                        <p className="small-grey-font">Community-driven reflections on each chapter, plus a final summary discussion.</p>
                    </div>
                    
                </div>
            </div>
            <div className="small-mar no-mar-top-desktop">
                <div className="two-col big-2-col page-center row-reverse small-top-mar">
                    <div>
                        <h3 className="flex-end"><span className="spectral big-letter">1</span><span>Life, Work, and Legacy <i>(7 lessons)</i></span></h3>
                        <p className="spectral">Who was Friedrich Nietzsche? What life did he lead that led him to have the ideas that he did? In Chapter 1 we set the scene and contextualize what’s to come by looking at Nietzsche the man, his influences, and outline all of his major works and chronology.</p>
                    </div>
                    <div className="mid-mar-top-desktop"> {/*introducing mid-mar on image due to slightly taller screen monitor design on the nietzsche course - now added to other courses too*/}
                    <a href={chap1} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter1.childImageSharp.gatsbyImageData}
                        alt="Nietzsche’s Life, Work, and Legacy" />
                        <p className="image-caption-tap right">↗ Chapter 1 (7 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse small-top-mar">
                    <div>
                        <h3 className="flex-normal-mob-end-desk"><span className="spectral big-letter">2</span><span>The Apollonian & Dionysian <i>(6 lessons)</i></span></h3>
                        <p className="spectral">In Chapter 2 we start digging deeper into Nietzsche’s core ideas. We begin with his early distinction between the Apollonian and Dionysian, which acts not only as a supremely illuminating way to consider life and art, but also as a precursor to his later ideas.</p>
                    </div>
                    <div className="mid-mar-top-desktop">
                    <a href={chap2} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter2.childImageSharp.gatsbyImageData}
                        alt="The Apollonian & Dionysian" />
                        <p className="image-caption-tap right">↗ Chapter 2 (6 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse small-top-mar">
                    <div>
                        <h3 className="flex-normal-mob-end-desk"><span className="spectral big-letter">3</span><span>Perspectivism <i>(6 lessons)</i></span></h3>
                        <p className="spectral">Do human beings have access to objective truth? Chapter 3 considers Nietzsche’s fascinating theory of perspectivism, a highly sophisticated account of what truth is and how we can access it — an account that continues to excite scholars today.</p>
                    </div>
                    <div className="mid-mar-top-desktop">
                    <a href={chap3} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter3.childImageSharp.gatsbyImageData}
                        alt="Nietzsche’s Perspectivism" />
                        <p className="image-caption-tap right">↗ Chapter 3 (6 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse small-top-mar">
                    <div>
                        <h3 className="flex-normal-mob-end-desk"><span className="spectral big-letter">4</span><span>Master & Slave Morality <i>(8 lessons)</i></span></h3>
                        <p className="spectral">Where do morals come from? Nietzsche’s profound contribution to answering this question is discussed in Chapter 4, where we assess his takedown of traditional values like altruism, as well as his concepts of the ascetic ideal, master morality, and slave morality.</p>
                    </div>
                    <div className="mid-mar-top-desktop">
                    <a href={chap4} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter4.childImageSharp.gatsbyImageData}
                        alt="Master & Slave Morality" />
                        <p className="image-caption-tap right">↗ Chapter 4 (8 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse small-top-mar">
                    <div>
                        <h3 className="flex-normal-mob-end-desk"><span className="spectral big-letter">5</span><span>God is Dead, the Eternal Recurrence, & the Übermensch</span></h3>
                        <p className="spectral">What should we value in a Godless world — and why? Nietzsche’s attempt to provide a ‘revaluation of values’ is discussed in Chapter 5, where we consider his famous ideas that God is Dead, the eternal recurrence, and the Übermensch (superman).</p>
                    </div>
                    <div className="mid-mar-top-desktop">
                    <a href={chap5} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter5.childImageSharp.gatsbyImageData}
                        alt="God is Dead & the Übermensch" />
                        <p className="image-caption-tap right">↗ Chapter 5 (7 lessons). Tap to enlarge.</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="small-mar">
                <div className="two-col big-2-col page-center row-reverse small-top-mar">
                    <div>
                        <h3 className="flex-normal-mob-end-desk"><span className="spectral big-letter">6</span><span>The Will to Power <i>(8 lessons)</i></span></h3>
                        <p className="spectral">Is there a unified system that underpins Nietzsche’s thought? Well, the ‘will to power’ is a good candidate. Chapter 6 discusses how the will to power plays a crucial role throughout Nietzsche’s writings, and summarizes where scholars stand on it today.</p>
                    </div>
                    <div className="mid-mar-top-desktop">
                    <a href={chap6} className="no-hover no-decoration" target="_blank" rel="noreferrer nofollow">
                    <GatsbyImage
                        image={data.chapter6.childImageSharp.gatsbyImageData}
                        alt="The Will to Power" />
                        <p className="image-caption-tap right">↗ Chapter 6 (8 lessons). Tap to enlarge.</p>
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
                    <a href={welcome} className="no-hover no-decoration" target="_blank" rel="noreferrer">
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
            <div className="page-center mid-pad text-center">
                <div className="mid-width">
                    <h2 className="small-mar">Understand Why Nietzsche Changes Perspectives, and Will Perhaps Change Your Own</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Start now, and by this time next week, you’ll understand Nietzsche’s best ideas, have clarity on exactly what he was trying to say, and know the best next steps for continuing your philosophical journey.</p>
                    <div className="small-width"><CheckoutNietzsche /></div>
                </div>
            </div>
        </div>
        
        <div className="grey-background small-pad-mob-mid-pad-desk">
            {/*Reviews - create component when over 10 (copy LBQ one)*/}
            <div className="grey-background no-hover mid-pad" id="reviews">
                <div className="page-center">
                    <h2>Course Reviews</h2>
                    <div className="two-col wrap align-top">
                        
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Amazing</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Amazing - so much help in understanding Nietzsche so I can attempt to finish my college paper. I struggled to understand him and his reasoning but with this it helped bring it full circle for me. Thank you! Delivery of the course was perfect and easy to manage. Keep up the good work! It's most appreciated and I shared your site with my fellow college students as well as my daughter's college friends!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Deborah W. on 17 November 2025</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very interesting</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Content was very interesting, easy to digest and still encouraging to reflect and find out more. It was also a way to refresh the basics I already had and an opportunity to reflect again about it.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sabine V. on 18 December 2024</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Best explanation I've seen</i></span></p>
                            <span style={{lineHeight: "1.3"}}>An exceptionally good course. I have been studying philosophy independently for about 10 years, this came as a bi-product of studying Christian history. This is the best Nietzsche explanation I have seen. You have a great skill in being able to express a complex subject with clarity and ease. I found it a great 'pulling together' of all I thought I knew, and the course delivery was perfect. God is Dead was my favorite chapter, but I loved them all. Keep creating work like this and I will always subscribe. Thank you for all the work you put into this.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Robert N. on 10 August 2024</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Exceptional</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Exceptional. It was the perfect level and content for me. I signed up because during an interview Douglas Murray referenced Nietzsche and said something like, "One must be very careful with Nietzsche." I didn't know what he meant but I believe I understand now. The very first chapter hooked me with all the biographical details which made me even more interested in his work. I looked forward to receiving each new chapter which displayed perfectly on my laptop. I ordered several of the books you recommended from Amazon. Thank you very much.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Stacey L. on 15 June 2024</span></div>
                        </div>
                        
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Amazing</i></span></p>
                            <span style={{lineHeight: "1.3"}}>This course is amazing! You can agree or not with Nietzsche’s views, but the professionalism, the methodology, the clarity, and deepness of the investigation is really comprehensive. I totally advise philosophy fans to do this course.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Elsa V. on 6 December 2023</span></div>
                        </div>
                        
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very informative</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Very good and informative. Written with easy and comprehensible language. Enjoyed throughout - every line of the course was a delight. Keep doing what you're doing!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Milad A. on 24 November 2023</span></div>
                        </div>
                        
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Excellent</i></span></p>
                            <span style={{lineHeight: "1.3"}}>The course was interesting and challenging and exceeded my expectations. The content was excellent, stimulating, and well written. A lot of depth was shared on each topic. I read each chapter on the day it arrived. One reading is just the beginning. I'll be taking notes on each chapter that will require spending time with the text. Ch. 5 was my favorite. The 3 topics are key to understanding Nietzsche. There is much to learn from this great thinker. Thank you for the opportunities.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Robert J. on 19 July 2023</span></div>
                        </div>
                        
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Great course experience, content was clear and simple to read. Loved the way the course was delivered and the writing was informative, interesting, and easy to understand. My favorite chapter was the final one on the will to power, I thought it brought everything together very nicely. Thanks for creating such an accessible course on Nietzsche!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Julien S. on 22 March 2023</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Please make more</i></span></p>
                            <span style={{lineHeight: "1.3"}}>It was really good. Honestly, there are things I thought I knew but turns out I had completely misunderstood from the books and the course helped me to figure out what I was missing. The content was very easy to understand and didactic, covering everything I was hoping for, and the difficulty of material was very well balanced. Please make more!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Joaquim N. on 16 March 2023</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Excellent</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Excellent. Well written and an enjoyable read on my iPhone. I found the content very interesting. It’s been over 30 years since I took a course on Nietzsche - great to revisit the material at a later life stage and new perspective. My favorite chapter was the one on perspectivism.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>David U. on 11 March 2023</span></div>
                        </div>
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very good</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Very good course experience. The daily chapters worked very well - one a day allowed me to pace my reading, and the course content was very good, with concepts clearly explained and easy to follow.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Brian P. on 27 February 2023</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Exactly what I hoped for</i></span></p>
                            <span style={{lineHeight: "1.3"}}>The length and depth of the course was exactly what I hoped for. (My only exposure to Nietzsche was in reading Will Durant’s Story of Philosophy in high school - in the 1970s!) The content was well organized and let the reader see how Nietzsche developed his ideas over time. Placing his work in the context of his health issues was tremendously important. The writing was easy to understand and covered everything I expected it to (based on what little I already knew about Nietzsche) and more. All chapters were good, interesting, and engaging, but my favorite was #4, Master and Slave morality, which really resonated with me.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Chuck M. on 25 February 2023</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Brilliant</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Brilliant course, very well researched and written. Cleared up a lot of uncertainty I had about Nietzsche, having tried and failed to get into his books! Really enjoyed the daily chapters and would recommend for anyone interested in but not sure where to start with Nietzsche.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Marie L. on 19 February 2023</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great survey of Nietzsche</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Great survey of Nietzsche’s thought. Covered everything I wanted to know. Made Nietzsche’s works really easy to understand, and I appreciated the references to all the ongoing scholarship on Nietzsche too. Thanks!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Andy G. on 18 February 2023</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Clears it all up</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Very good. There are many, many misunderstandings of Nietzsche out there, and this course helped clear it all up for me! All the chapters are great but I actually found the fifth on Nietzsche’s more positive philosophy to be the most inspiring.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Lesh W. on 13 February 2023</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Brilliant introduction</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Brilliant introduction to Nietzsche. I tried reading Beyond Good and Evil years ago and found it interesting but knew most of it was going over my head. This course breaks it all down brilliantly and makes very difficult / unclear material very easy to understand, introducing lots of different scholarly perspectives and interpretations of what Nietzsche is saying. Highly recommend.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sophie D. on 11 February 2023</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="darkradial-background">
            <div className="page-center mid-pad text-center">
                <div className="mid-width">
                    <h2 className="small-mar">Go from Being Curious to Finally Understanding Nietzsche’s Philosophy</h2>
                    <div className="separator"></div>
                    <p className="small-grey-font">Start now, and by this time next week, you’ll understand Nietzsche’s best ideas, have clarity on exactly what he was trying to say, and know the best next steps for continuing your philosophical journey.</p>
                    <div className="small-width"><CheckoutNietzsche /></div>
                </div>
            </div>
        </div>



        <div className="grey-background small-pad-mob-mid-pad-desk">      

            {/*FAQ*/}
            <div id="faq" className="page-center mid-pad">
                <h2>Frequently Asked Questions</h2>
                <div className="two-col align-top small-mar">
                    <div>
                        <h4>Who is this course for?</h4>
                        <p className="small-grey-font">This is for anyone curious about the philosophy of Friedrich Nietzsche. You may have read some of Nietzsche’s work, or you may have never engaged with him before: either way, we’ve distilled the leading modern scholarship of his best ideas so you can quickly discover who he was, efficiently learn what he was trying to say, and clearly understand why his startling, provocative philosophy still carries so much influence.</p>
                    </div>
                    <div>
                        <h4>How long does it take to do the course?</h4>
                        <p className="small-grey-font">The course is broken into six distinct chapters, each of which takes about 40 minutes to read through. We recommend reading a maximum of one or two chapters per day to let each idea sink in. At the end of each chapter, we also present questions to reflect on and a space for community discussion. So, with daily reading, the course may take a week or so to complete. You have access to course materials forever, so don’t worry if you miss a day — you can take the course at your own pace.</p>
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
                        <p className="small-grey-font">This course is brought to you by Philosophy Break, a self-funded social enterprise dedicated to getting more people engaged with philosophy. Course content is put together by the founder of Philosophy Break, <a target="_blank" href="/about/">Jack Maden</a>, who received an MA in Philosophy from the University of Southampton in 2014, and has been producing educational resources and writing about philosophy ever since. Having obtained great value researching philosophy at postgraduate level, Jack wanted to share the subject’s riches with a wider audience, and created Philosophy Break in 2018. This course is the result of years of research and refinement to make Nietzsche’s profound and important wisdom as relevant, interesting, and engaging to today’s digital world as possible.</p>
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
                <p className="small-grey-font">Start now, and by this time next week, you’ll understand Nietzsche’s best ideas, have clarity on exactly what he was trying to say, and know the best next steps for continuing your philosophical journey.</p>
                <div className="small-width">
                    <CheckoutNietzsche />
                    <div className="large-mar-top">
                        <AnchorLink className="no-hover" href="#top"><button className="button primary" style={{background: "transparent", border: "none", boxShadow: "none"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>Back to Top</button></AnchorLink>
                    </div>
                </div>
            </div>
            <div className="small-pad"></div>
        </div>
            
    <FooterSimple />

    </Layout>
    </>
    )
}

export const query = graphql`{
  lbq: file(relativePath: {eq: "nietzsche-seo.jpg"}) {
    childImageSharp {
        gatsbyImageData(width: 1200, quality: 90, layout: CONSTRAINED)
    }
  }
  about: file(relativePath: {eq: "Nietzsche-promo.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
  chapter1: file(relativePath: {eq: "Nietzsche-ch1.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter2: file(relativePath: {eq: "Nietzsche-ch2.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter3: file(relativePath: {eq: "Nietzsche-ch3.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter4: file(relativePath: {eq: "Nietzsche-ch4.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter5: file(relativePath: {eq: "Nietzsche-ch5.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: CONSTRAINED)
    }
  }
  chapter6: file(relativePath: {eq: "Nietzsche-ch6.png"}) {
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