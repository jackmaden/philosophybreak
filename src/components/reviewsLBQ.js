import React, { useState } from "react";

export default function Reviews() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    }
    
    return (
        <div className="darkradial-background mid-pad" id="reviews">
            <div className="page-center">
                <h2>23 Course Reviews</h2>
                <div className="two-col align-top">
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Awesome</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Great content. Receiving one chapter each day is awesome. As someone who is not a native English speaker, I found the content easy to grasp which is something I really appreciate. The first and second chapters were my favorite because they discuss the most fundamental questions humans can ask, but all of the chapters were extremely interesting.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Ahmed K. on 2 August 2021</span></div>
                    </div>
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Perfect difficulty level</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Very good. Very well-written. Difficulty of the content is perfect for someone who might not be too familiar with philosophy so that is great too. Thank you!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Jonathon B. on 27 July 2021</span></div>
                    </div>
                </div>
                <div className="two-col align-top">
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great job to everybody involved</i></span></p>
                        <span style={{lineHeight: "1.3"}}>It was great! Course material is written in a very accessible way that will appeal to any reader. The questions selected are the right ones, and they are presented in a nicely woven sequence. I can appreciate how hard it is to synthesize philosophy texts into such an easy to understand and nicely written text, so great job. One chapter per day represented a manageable time commitment that always left me excited for the next day, and my favorite chapter was the last one on how we should approach life. Reading what other thinkers had to say about it was very enriching and brought home the point that there is no universal answer. Great job to everybody involved in creating this course!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Julien S. on 23 June 2021</span></div>
                    </div>
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very good introduction</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Very interesting content and delivered really thoughtfully. I enjoyed receiving one chapter per day and think it's a really good format for making what could be quite difficult content accessible and digestible. All the topics were stimulating but I especially enjoyed the discussion on free will. Determinism is quite terrifying! Overall a very good introduction to philosophy. Will certainly be recommending this course. Thank you!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sara B. on 15 June 2021</span></div>
                    </div>
                </div>
                <div className="two-col align-top">
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Really well put together</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Really well put together. A good resource to fill in gaps on a subject matter that I am interested in. Written in accessible language, the way more philosophy should be. Content was great & well laid out on my iPad. My favorite chapter was the 2nd chapter on if the world around us is ‘real’. It wove together Descartes, Berkeley, Locke, Hume, and Kant so well that it seemed the evolution was predestined.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Jared L. on 24 May 2021</span></div>
                    </div>
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Excellent series</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Very positive course experience. Love the format - really nice to have something to look forward to each day with the daily chapters. The themes are discussed in a way that stimulates your interest without overwhelming you with information. Overall an excellent series, and I am sure I will keep returning to the chapters and hopefully doing some of the suggested further reading now my interest has been roused.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Alan M. on 21 May 2021</span></div>
                    </div>
                </div>
                <div className="two-col align-top">
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great primer</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Very glad I found this resource, as philosophy has always interested me but I never get round to finishing the introductory books. I actually finished this as it was a concise and engaging primer on the main topics covered and I feel more motivated to do more reading now, so thanks!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Lynda F. on 12 May 2021</span></div>
                    </div>
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Fantastic starting point</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Great daily chapters. All fantastic starting points for learning more about each theme and all the different philosophers. Materials displayed well and the summary questions at the end were really effective for making me think more about the materials.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Carrie W. on 9 May 2021</span></div>
                    </div>
                </div>
                
                
                {/*load more reviews*/}
                <div id="load-more" className={isActive ? null : "show"}>
                    <div className="two-col align-top">
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Powerful - learned a great deal</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Really concise and effective. Powerful, actually - I learned a great deal. Loved the daily chapters, materials displayed really well. I really enjoyed this introduction to philosophy and would definitely want to take another of your courses.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Mart W. on 25 April 2021</span></div>
                        </div>
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Comprehensive and engaging</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I found this a very comprehensive introduction to philosophy, and it really left no question unanswered or deliberated, but was very engaging to consume - thanks! I'll definitely be recommending it.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Josh B. on 19 April 2021</span></div>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Just what I was looking for</i></span></p>
                            <span style={{lineHeight: "1.3"}}>This was the perfect scope and pacing for what I was looking for as an introduction to philosophy. I was thrown straight in to confront big issues and loved the daily chapters coming through to my inbox each day, which were fun and challenging reads. The questions and further reading at the end of each chapter were great too for making it all stick in my mind and giving me ideas for what to read next. Overall great intro to philosophy. Thanks very much!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Julie S. on 14 April 2021</span></div>
                        </div>
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Excellent materials</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Excellent materials, reading and recommendations sent to my inbox over the last week. Each chapter was stimulating and I feel I've learned a lot about philosophy and its history. I'd definitely recommend this course for anyone who like me was interested in philosophy but wasn't sure where to really start. </span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Rene G. on 12 April 2021</span></div>
                        </div>
                    </div>
                    <div className="two-col align-top">
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Definitely recommend!</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I really enjoyed this course. Just the right amount of material each day on philosophical questions I've always wondered about. Great further reading recommendations too. Thanks very much!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sam S. on 2 April 2021</span></div>
                        </div>
                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffe636"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Loved it</i></span></p>
                            <span style={{lineHeight: "1.3"}}>This was great, thanks. Each day I'd look forward so much to getting stuff through to my inbox and reading it all. Couldn't recommend this more highly as an efficient yet thorough introduction to philosophy!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Darcy T. on 22 March 2021</span></div>
                        </div>
                    </div>
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
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Tim D. on 19 February 2021</span></div>
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
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sophie D. on 18 February 2021</span></div>
                        </div>
                    </div>
                </div> 
                {/*end hide reviews*/}

                {/*toggle reviews*/}
                <div id="review-button" className={isActive ? null : "show" }>
                    <div className="mid-mar-top small-width text-center">
                        <button onClick={handleToggle} className="button primary" style={{background: "transparent", border: "none"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>Load More Reviews</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


