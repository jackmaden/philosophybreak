import React, { useState } from "react";

export default function Reviews(props) {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    }
    
    return (
        <div className={props.bg + " mid-pad"} id="reviews">
            <div className="page-center">
                <h2>{props.title}</h2>
                
                <div className="two-col wrap align-top">

                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Wonderful</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Wonderful! So clear and inviting to use. Just the right level of challenge. Felt like I was really learning. My favorite chapter was the one on Consciousness - what is it? I wonder about this all the time and its connection to why do we do the (stupid, destructive, cruel) things we do. Thank you for doing this, Jack. In the fall I’ll start an MA program on social and public policy at SUNY Empire State U, and now I’m wondering, does SUNY ESU have a philosophy program?  Your work, Jack, is such a gift. Again, thank you.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Mary T. on 8 July 2024</span></div>
                    </div>
                    
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Clear and concise</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Fun and enjoyable. Clear and concise. Easy to navigate. Easy to get involved in discussion. Free will was my favorite chapter. Very relevant subject for which philosophy has a great deal to contribute.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Roger M. on 7 July 2024</span></div>
                    </div>
                    
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Really enjoyed</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Just completed Life's Big Questions, which I really enjoyed reading. Thank you so much for putting it together. It really improved my understanding of so many points, particularly the chapters on Is Life real and free will.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Asad B. on 22 March 2024</span></div>
                    </div>
                    
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Fascinating</i></span></p>
                        <span style={{lineHeight: "1.3"}}>I really enjoyed the challenge of debate. Hearing different viewpoints and the reasons for forming them and, although quite intense at times, I thought the way the course was presented was excellent. The views and ideas of each philosopher was laid out in a very absorbable format and I feel I have a better understanding of each of their approaches to life's big questions - even if I had different ones! The content was fascinating, not always easy to understand but that has to be more about my own abilities and newness to some of the ideas. The way that the material was presented ensured a good beginning to my eventual understanding. Yes, it did cover everything I was expecting - and more.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Lilith R. on 18 December 2023</span></div>
                    </div>
                    
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very good</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Very good indeed. The course was well covered and varied, and I found all 5 chapters easy to follow, well presented and explaining various ideas and opinions. I’m unfamiliar with modern philosophers so was glad to make their acquaintance. The chapter on free will was my favourite as in the past there were endless heated debates about this at our local Zen group! I’m very glad I discovered your website by chance on the internet.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Jennifer S. on 28 September 2023</span></div>
                    </div>
                    
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great intro</i></span></p>
                        <span style={{lineHeight: "1.3"}}>A great overview and motivating for further study. Course delivery worked great - one-a-day was just right and I was left excited for the next day's delivery. I liked the way the context was set and particularly liked the fact that guidance was given - major topics, easy explanation of each. Overall a great intro to get started and I particularly appreciate the recommended reading lists for each, too.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Antony H. on 4 June 2023</span></div>
                    </div>
                    
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great</i></span></p>
                        <span style={{lineHeight: "1.3"}}>The course is a very well-written, interesting overview of the main ideas in philosophy. It’s a concise, yet not superficial, exploration of the big questions, written in a way that challenges you to reframe your understanding on life. It looked great on desktop and phone. I enjoyed all the chapters, but the Descartes and Matrix one was my favorite (#2?). I love the exploration of how we come to know ourselves and whether or not we can trust our own inputs. Thanks for this - it was great!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Terence B. on 10 March 2023</span></div>
                    </div>
                    
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Endlessly fascinating</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Awesome, endlessly fascinating course experience. Each day I was looking forward to getting the new chapter in my email. The content was very interesting and easy to understand, and made me want to dive deeper into the topics. My favorite chapter was chapter 5: 'How should we approach life?'. It was so fascinating that after reading it I was reflecting for like 2 hours!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Alex K. on 18 December 2022</span></div>
                    </div>
                    
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very good starting point</i></span></p>
                        <span style={{lineHeight: "1.3"}}>I really enjoyed reading the material. It is easy to understand, entertaining and thought-provoking and has given me some new approaches that I’ll continue to think about. I really appreciate that you deliver an overview of those fundamental topics that to me seems academically founded (different approaches/ideas are introduced and compared) and at the same time the reading is quite brief. That is very efficient but gives the reader some trust that a field has been viewed from the most important angles. I think this leaves me in a very good starting point when it comes to categorizing future information. I also find the conclusion motivating and positive, that there’s a good life ahead. The first and last chapters were my favorites. I find the question 'why is there anything at all?' is a mind blower. And the last chapter (especially about absurdity) relates to that. Thanks!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Mario H. on 26 November 2022</span></div>
                    </div>
                    
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Wonderful introduction</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Wonderful, clear, concise, and very informative. This is a great introductory course, exactly what I was looking for in general and enough depth to inspire further investigations. Receiving one chapter a day was good, I took my time and read them at my optimum leisure. My favorite chapter started as my least favorite: Free Will. It's really easy to take this subject personally, but it made me think of what 'Free Will' really means in language and conversations as well as what 'Destiny' and 'Fate' have come to 'mean'. I also really enjoy the reading lists at the end of the chapters and have taken up a few suggestions. Thanks!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Matt J. on 16 September 2022</span></div>
                    </div>
                
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Brilliant primers</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Brilliant primers on all the major topics of philosophy. I wasn't entirely sure what to expect but the content provides a ton of value, it's all brilliantly written and delivered and covers so much. Highly recommend if you're at all interested in philosophy.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Rebecca L. on 7 August 2022</span></div>
                    </div>

                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Thoroughly enjoyed</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Great! All content was very well written and easily digestible. Thoroughly enjoyed throughout. Free will was my favorite chapter, due to my personal interest in the subject, but all chapters were both interesting and easy to comprehend.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Niall C on 24 July 2022</span></div>
                    </div>

                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very good</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Very good. After completing the course I am now planning to start a serious study of philosophy. The materials displayed well on all my devices and the content is very interesting - I was able to follow even though English is not my first language. My favorite chapter was Chapter 2 - considering we perceive a 'photo' of reality, rather than reality itself, was a real breakthrough.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Luca G. on 19 June 2022</span></div>
                    </div>

                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Stimulating</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Excellent course, very well thought out and written. Receiving one chapter per day was stimulating and course content displayed well on my device. My favorite chapter was ethics and morality because the practical focus appealed to me, but the whole course was most interesting.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Robert J. on 21 April 2022</span></div>
                    </div>

                    
                    


                </div>
                
                
                
                
                {/*load more reviews*/}
                <div id="load-more" className={isActive ? null : "show"}>

                    <div className="two-col wrap align-top">

                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Fantastic</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Fantastic! Loved the delivery of one chapter per day and the content was fascinating. I didn’t know much about philosophy going into this, and some things like consciousness I didn’t realize had such a philosophical component. Really interesting, and I’d highly recommend the course. Thanks!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Bernie L. on 11 March 2022</span></div>
                    </div>
                        
                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Really good</i></span></p>
                        <span style={{lineHeight: "1.3"}}>I had a really good course experience, thanks. Good portion size of information each day, really easy to read, and really informative and interesting - cuts through a lot of waffle. Would recommend for anyone interested in philosophy.</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Phoebe T. on 9 February 2022</span></div>
                    </div>

                    <div className="small-mar">
                        <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Truly enjoyed</i></span></p>
                        <span style={{lineHeight: "1.3"}}>Excellent course experience! Good pace and length of reads, combined with very well written content. Complexities are shared in a digestible manner. The reading lists are a great addition. I truly enjoyed every chapter. Thanks!</span>
                        <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Tomas R. on 27 January 2022</span></div>
                    </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very good</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Very good course experience. Well paced, and covered a very large area. Content was interesting and easy to read. It very nicely covered the promised topics. My favorite chapter was chapter five on ways of approaching life. It gave a great framework for further exploring what is important in life.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Chris J. on 15 January 2022</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Excellent</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Excellent course experience. All the content was interesting, but my favorite chapter was chapter four on free will.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Amaro H. on 11 January 2022</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Brilliant</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Brilliant topics, well written and well delivered. Loved all the chapters. Overall a really good experience, thanks. </span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Philippa M. on 10 January 2022</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Enjoyable & contemplative</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Excellent course. An enjoyable, contemplative read. The bite-sized portions allowed me to digest the information, and the content was very interesting and easy to understand — a good survey of philosophical ideas with references to books for digging deeper. I especially enjoyed the chapter on free will. As a financial planner, I’m trying to balance cognitive biases with behavioral change. This chapter provides good food for thought in how I approach my practice. Overall, great work.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>David H. on 17 November 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Loved it</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Thank you very much for giving me something to look forward to each day with the daily chapters — I loved it! Very refreshing to read something this clear and direct about how the great philosophers have approached some of the most difficult and enduring questions we can ask. Some truly interesting ideas I hadn’t encountered before. Thanks!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Marie L. on 4 October 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Awesome</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Great content. Receiving one chapter each day is awesome. As someone who is not a native English speaker, I found the content easy to grasp which is something I really appreciate. The first and second chapters were my favorite because they discuss the most fundamental questions humans can ask, but all of the chapters were extremely interesting.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Ahmed K. on 2 September 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Perfect difficulty level</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Very good. Very well-written. Difficulty of the content is perfect for someone who might not be too familiar with philosophy so that is great too. Thank you!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Jonathon B. on 27 August 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great job to everybody involved</i></span></p>
                            <span style={{lineHeight: "1.3"}}>It was great! Course material is written in a very accessible way that will appeal to any reader. The questions selected are the right ones, and they are presented in a nicely woven sequence. I can appreciate how hard it is to synthesize philosophy texts into such an easy to understand and nicely written text, so great job. One chapter per day represented a manageable time commitment that always left me excited for the next day, and my favorite chapter was the last one on how we should approach life. Reading what other thinkers had to say about it was very enriching and brought home the point that there is no universal answer. Great job to everybody involved in creating this course!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Julien S. on 23 July 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very good introduction</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Very interesting content and delivered really thoughtfully. I enjoyed receiving one chapter per day and think it’s a really good format for making what could be quite difficult content accessible and digestible. All the topics were stimulating but I especially enjoyed the discussion on free will. Determinism is quite terrifying! Overall a very good introduction to philosophy. Will certainly be recommending this course. Thank you!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sara B. on 15 June 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Really well put together</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Really well put together. A good resource to fill in gaps on a subject matter that I am interested in. Written in accessible language, the way more philosophy should be. Content was great & well laid out on my iPad. My favorite chapter was the 2nd chapter on if the world around us is ‘real’. It wove together Descartes, Berkeley, Locke, Hume, and Kant so well that it seemed the evolution was predestined.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Jared L. on 24 May 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Excellent series</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Very positive course experience. Love the format - really nice to have something to look forward to each day with the daily chapters. The themes are discussed in a way that stimulates your interest without overwhelming you with information. Overall an excellent series, and I am sure I will keep returning to the chapters and hopefully doing some of the suggested further reading now my interest has been roused.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Alan M. on 21 May 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great primer</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Very glad I found this resource, as philosophy has always interested me but I never get round to finishing the introductory books. I actually finished this as it was a concise and engaging primer on the main topics covered and I feel more motivated to do more reading now, so thanks!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Lynda F. on 12 May 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Fantastic starting point</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Great daily chapters. All fantastic starting points for learning more about each theme and all the different philosophers. Materials displayed well and the summary questions at the end were really effective for making me think more about the materials.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Carrie W. on 9 May 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Powerful - learned a great deal</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Really concise and effective. Powerful, actually - I learned a great deal. Loved the daily chapters, materials displayed really well. I really enjoyed this introduction to philosophy and would definitely want to take another of your courses.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Mart W. on 25 April 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Comprehensive and engaging</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I found this a very comprehensive introduction to philosophy, and it really left no question unanswered or deliberated, but was very engaging to consume - thanks! I’ll definitely be recommending it.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Josh B. on 19 April 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Just what I was looking for</i></span></p>
                            <span style={{lineHeight: "1.3"}}>This was the perfect scope and pacing for what I was looking for as an introduction to philosophy. I was thrown straight in to confront big issues and loved the daily chapters coming through to my inbox each day, which were fun and challenging reads. The questions and further reading at the end of each chapter were great too for making it all stick in my mind and giving me ideas for what to read next. Overall great intro to philosophy. Thanks very much!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Julie S. on 14 April 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Excellent materials</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Excellent materials, reading and recommendations sent to my inbox over the last week. Each chapter was stimulating and I feel I’ve learned a lot about philosophy and its history. I’d definitely recommend this course for anyone who like me was interested in philosophy but wasn’t sure where to really start. </span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Rene G. on 12 April 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Definitely recommend!</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I really enjoyed this course. Just the right amount of material each day on philosophical questions I’ve always wondered about. Great further reading recommendations too. Thanks very much!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sam S. on 2 April 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Loved it</i></span></p>
                            <span style={{lineHeight: "1.3"}}>This was great, thanks. Each day I’d look forward so much to getting stuff through to my inbox and reading it all. Couldn’t recommend this more highly as an efficient yet thorough introduction to philosophy!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Darcy T. on 22 March 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Brilliant introduction</i></span></p>
                            <span style={{lineHeight: "1.3"}}>A brilliant introduction to philosophy, covering thoughts from the greatest thinkers over the last few millennia on questions that continue to rattle minds today. This course is excellent for anyone who has an interest in philosophy, but didn’t get to study it at university. I personally have read some books on philosophy, and this course helped solidify some ideas and introduced me to others. Equally, if you haven’t read any philosophy, this is the place I wish I had started.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Mark H. on 20 February 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Highly recommend</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Would highly recommend this if you’re interested in some of life’s ‘big questions’ or want an introduction to philosophy without having to wade through heavy reference books… the chapters are a well-written, easy-to-read but comprehensive and insightful synopsis of the thoughts of some of history’s greatest philosophers. The course poses lots of questions at appropriate points that engaged me to think more about things that, though interesting and meaningful, are often pushed to the back of our minds due to the short-termist and relatively trivial focus of most of our daily lives. Dip your toe into these philosophical waters, you won’t regret it!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>John M. on 20 February 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Very informative</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I found this course so refreshing as it is written in an easy to understand style, and raises stimulating questions at the end of each chapter. The philosophy book recommendations are also very well researched and informative. I would encourage anyone with an interest in the ‘big questions’ to sign up to this course.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Jill P. on 20 February 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great intro</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I loved philosophy break on Instagram and had read some of the articles but wanted to take the next step. This was perfect because I could read it in my own time and felt I was on a journey toward something great. I feel enlightened and it’s led me to explore some of the topics in more detail. A great intro to philosophy. Would recommend.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Florence R. on 19 February 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Beautiful content</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Great content packaged in beautiful, compelling chapters that are very interesting and easy to consume. Thanks!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Sian Y. on 19 February 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>My brain hurts</i></span></p>
                            <span style={{lineHeight: "1.3"}}>Some of the stuff in this course seriously blew my mind! These are such interesting questions and the answers are challenging but presented in really easy-to-understand and engaging ways. Great course thank you.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Carter T. on 19 February 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Challenging but fascinating</i></span></p>
                            <span style={{lineHeight: "1.3"}}>I was looking for something to extend my understanding beyond casual google searches and occasional journal articles. I found the course challenging, but feel much more confident to approach more complex philosophical texts now. Thank you.</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>Tim D. on 19 February 2021</span></div>
                        </div>

                        <div className="small-mar">
                            <p style={{marginBottom: "0.5em"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>&nbsp;&nbsp;<span><i>Great stuff</i></span></p>
                            <span style={{lineHeight: "1.3"}}>This was such a great way to consider the ‘big questions’. Quicker and easier to read than a book because it’s broken down into daily chapters, but just as eye-opening. Great stuff Philosophy Break!</span>
                            <div><p className="verified">VERIFIED BUYER</p>&nbsp;&nbsp;<span style={{color: "#737d88"}}>George N. on 18 February 2021</span></div>
                        </div>

                    </div>
                </div> 
                {/*end hide reviews*/}

                {/*toggle reviews*/}
                <div id="review-button" className={isActive ? null : "show" }>
                    <div className="mid-mar-top small-width text-center">
                        <button onClick={handleToggle} className={"button " + props.toggle} style={{background: "transparent", color: "#001d30", border: "none", boxShadow: "none"}}><svg style={{fill: "#0096e8"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>Load More Reviews</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


