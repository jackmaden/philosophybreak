import React from "react"
import { graphql, Link, Script } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { Navigation } from "../../components/navigation"
import TopTitle from '../../components/topTitle'
import BannerReadingList from '../../components/bannerReadingList'
import BookLink from '../../components/bookLink'
import WatermarkBreak from "../../components/watermarkBreak"
import WelcomeEmailPanel from "../../components/welcomeEmailPanel"
import Footer from "../../components/footer"


const Page = ({ data, location }) => {
    return (
    <>
    <Seo title="Best Philosophy Books – Essential Philosophy Reading Lists by Subject" description="We've compiled reading lists of the most essential, compelling, and accessible works and books of particular philosophers and philosophical subjects." pathname={location.pathname} />

    {/* convertkit desktop pop up form*/}
    <Script data-uid="9d4c23bf77" src="https://philosophybreak.ck.page/9d4c23bf77/index.js" />

    <Layout>
    <Navigation bg="light-bg" />

      {/*page background color*/}
      <div className="grey-background">

            {/*page title*/}
            <TopTitle title="The Best Philosophy Books" subtitle="Explore our curated reading lists of the best and most important philosophy books, organized by subject and philosopher." />
            <div className="page-center">
              <div className="button-pair small-pad-bottom">
                
                <AnchorLink href="#subject" className="button primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>Explore by Subject</AnchorLink>
                <AnchorLink href="#philosopher" className="button secondary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>Explore by Philosopher</AnchorLink>
              </div>
            </div>
            
            
            {/*page content*/}
            <div className="page-center">

            <div className="two-col align-top spectral">
            <div>
                <p><span className="big-letter">P</span>hilosophy is a vast subject that cannot be practically broken down into a single reading list. We’ve organized philosophy’s best books both by subject — from core branches like <Link to="/reading-lists/metaphysics/">metaphysics</Link>, <Link to="/reading-lists/epistemology/">epistemology</Link>, and <Link to="/reading-lists/ethics-and-morality/">ethics</Link>, to particular movements like <Link to="/reading-lists/existentialism/">existentialism</Link> and <Link to="/reading-lists/stoicism/">Stoicism</Link> — as well as by individual philosophers, from <Link to="/reading-lists/socrates/">Socrates</Link> and <Link to="/reading-lists/confucius/">Confucius</Link>, to <Link to="/reading-lists/friedrich-nietzsche/">Friedrich Nietzsche</Link> and <Link to="/reading-lists/hannah-arendt/">Hannah Arendt</Link>.</p>
                
            </div>
            <div>
                <p>If you’re not sure where to start, try our reading list on the <Link to="/reading-lists/introduction-to-philosophy/">best introductions to philosophy</Link>, which is ideal for those seeking a broad overview. Otherwise, take your pick from the lists below.</p>
                <p>Will you chart the <Link to="/reading-lists/history-of-western-philosophy/">history of Western philosophy</Link>? Will you learn about the <Link to="/reading-lists/philosophy-of-language/">philosophy of language</Link>? Will you investigate the mystery of <Link to="/reading-lists/free-will/">free will</Link>? The choice is (not) yours!</p>

            </div>
        </div>
              
              <div class="mid-pad-top text-center">
              <h2 id="subject">Philosophical Subjects</h2>
              <div class="separator"></div>
              </div>
            
                <BannerReadingList title="An Introduction to Philosophy" number="6" link="/reading-lists/introduction-to-philosophy/" img={data.introduction.childImageSharp.gatsbyImageData} alt="introduction to philosophy reading list" />
                
                <BannerReadingList title="The History of Western Philosophy" number="5" link="/reading-lists/history-of-western-philosophy/" img={data.whistorylist.childImageSharp.gatsbyImageData} alt="history of western philosophy reading list" />

                <BannerReadingList title="Metaphysics" number="10" link="/reading-lists/metaphysics/" img={data.metaphysics.childImageSharp.gatsbyImageData} alt="metaphysics reading list" />

                <BannerReadingList title="Epistemology" number="9" link="/reading-lists/epistemology/" img={data.epistemology.childImageSharp.gatsbyImageData} alt="epistemology reading list" />

                <BannerReadingList title="Ethics and Morality" number="10" link="/reading-lists/ethics-and-morality/" img={data.ethics.childImageSharp.gatsbyImageData} alt="ethics and morality reading list" />

                <BannerReadingList title="Consciousness" number="5" link="/reading-lists/consciousness/" img={data.consciousnesslist.childImageSharp.gatsbyImageData} alt="consciousness reading list" />

                <BannerReadingList title="Free Will" number="7" link="/reading-lists/free-will/" img={data.freewill.childImageSharp.gatsbyImageData} alt="free will reading list" />

                <BannerReadingList title="Political Philosophy" number="14" link="/reading-lists/political-philosophy/" img={data.politics.childImageSharp.gatsbyImageData} alt="political philosophy reading list" />

                <BannerReadingList title="Philosophy of Language" number="7" link="/reading-lists/philosophy-of-language/" img={data.language.childImageSharp.gatsbyImageData} alt="philosophy of language reading list" />

                <BannerReadingList title="Buddhist Philosophy" number="7" link="/reading-lists/buddhist-philosophy/" img={data.buddhism.childImageSharp.gatsbyImageData} alt="buddhist philosophy reading list" />

                <BannerReadingList title="Confucianism" number="6" link="/reading-lists/confucius/" img={data.confucius.childImageSharp.gatsbyImageData} alt="Confucius reading list" />
                
                <BannerReadingList title="Epicureanism" number="6" link="/reading-lists/epicureanism/" img={data.epicureanism.childImageSharp.gatsbyImageData} alt="epicureanism reading list" />
                
                <BannerReadingList title="Stoicism" number="6" link="/reading-lists/stoicism/" img={data.stoicism.childImageSharp.gatsbyImageData} alt="stoicism reading list" />

                <BannerReadingList title="Marxism" number="6" link="/reading-lists/karl-marx/" img={data.marx.childImageSharp.gatsbyImageData} alt="Marxism reading list" />

                <BannerReadingList title="Existentialism" number="9" link="/reading-lists/existentialism/" img={data.existentialism.childImageSharp.gatsbyImageData} alt="Existentialism reading list" />

                
                </div>
                

                

              <div className="page-center">

                <div class="large-pad-top text-center">
                  <h2 id="philosopher">Individual Philosophers</h2>
                  <div class="separator"></div>
                </div>

                <BannerReadingList title="Socrates" number="6" link="/reading-lists/socrates/" img={data.socrates.childImageSharp.gatsbyImageData} alt="socrates reading list" />
                
                <BannerReadingList title="Plato" number="6" link="/reading-lists/plato/" img={data.plato.childImageSharp.gatsbyImageData} alt="plato reading list" />

                <BannerReadingList title="Aristotle" number="9" link="/reading-lists/aristotle/" img={data.aristotle.childImageSharp.gatsbyImageData} alt="aristotle reading list" />

                <BannerReadingList title="Epicurus" number="6" link="/reading-lists/epicureanism/" img={data.epicureanism.childImageSharp.gatsbyImageData} alt="epicureanism reading list" />

                <BannerReadingList title="Confucius" number="6" link="/reading-lists/confucius/" img={data.confucius.childImageSharp.gatsbyImageData} alt="Confucius reading list" />

                <BannerReadingList title="The Buddha" number="7" link="/reading-lists/buddhist-philosophy/" img={data.buddhism.childImageSharp.gatsbyImageData} alt="buddhist philosophy reading list" />

                <BannerReadingList title="Marcus Aurelius" number="5" link="/reading-lists/marcus-aurelius-best-books/" img={data.marcus.childImageSharp.gatsbyImageData} alt="marcus aurelius reading list" />

                <BannerReadingList title="Machiavelli" number="5" link="/reading-lists/machiavelli/" img={data.machiavelli.childImageSharp.gatsbyImageData} alt="Machiavelli reading list" />
                
                <BannerReadingList title="John Locke" number="5" link="/reading-lists/john-locke/" img={data.locke.childImageSharp.gatsbyImageData} alt="John Locke reading list" />
                
                <BannerReadingList title="Voltaire" number="5" link="/reading-lists/voltaire/" img={data.voltaire.childImageSharp.gatsbyImageData} alt="Voltaire reading list" />
                
                <BannerReadingList title="Immanuel Kant" number="6" link="/reading-lists/immanuel-kant/" img={data.kant.childImageSharp.gatsbyImageData} alt="Immanuel Kant reading list" />
                
                <BannerReadingList title="Ralph Waldo Emerson" number="5" link="/reading-lists/ralph-waldo-emerson-best-books/" img={data.emerson.childImageSharp.gatsbyImageData} alt="Søren Kierkegaard reading list" />
                
                <BannerReadingList title="Søren Kierkegaard" number="6" link="/reading-lists/soren-kierkegaard-best-books/" img={data.kierk.childImageSharp.gatsbyImageData} alt="Søren Kierkegaard reading list" />

                <BannerReadingList title="Henry David Thoreau" number="5" link="/reading-lists/henry-david-thoreau-best-books/" img={data.thoreau.childImageSharp.gatsbyImageData} alt="Henry David Thoreau reading list" />
                
                <BannerReadingList title="Karl Marx" number="6" link="/reading-lists/karl-marx/" img={data.marx.childImageSharp.gatsbyImageData} alt="Karl Marx reading list" />

                <BannerReadingList title="Fyodor Dostoevsky" number="6" link="/reading-lists/fyodor-dostoevsky-best-books/" img={data.dost.childImageSharp.gatsbyImageData} alt="Fyodor Dostoevsky reading list" />

                <BannerReadingList title="Leo Tolstoy" number="5" link="/reading-lists/leo-tolstoy-best-books/" img={data.tolstoy.childImageSharp.gatsbyImageData} alt="Leo Tolstoy reading list" />
                
                <BannerReadingList title="Friedrich Nietzsche" number="9" link="/reading-lists/friedrich-nietzsche/" img={data.nietzsche.childImageSharp.gatsbyImageData} alt="Friedrich Nietzsche reading list" />

                <BannerReadingList title="Hannah Arendt" number="6" link="/reading-lists/hannah-arendt/" img={data.arendt.childImageSharp.gatsbyImageData} alt="Hannah Arendt reading list" />

                <BannerReadingList title="Ayn Rand" number="5" link="/reading-lists/ayn-rand/" img={data.rand.childImageSharp.gatsbyImageData} alt="Ayn Rand reading list" />

                <BannerReadingList title="Simone de Beauvoir" number="7" link="/reading-lists/simone-de-beauvoir-best-books/" img={data.beauvoir.childImageSharp.gatsbyImageData} alt="Simone de Beauvoir reading list" />
                
                <BannerReadingList title="Albert Camus" number="5" link="/reading-lists/albert-camus/" img={data.camus.childImageSharp.gatsbyImageData} alt="Albert Camus reading list" />

                <BannerReadingList title="Alan Watts" number="5" link="/reading-lists/alan-watts/" img={data.watts.childImageSharp.gatsbyImageData} alt="Alan Watts reading list" />

                <BannerReadingList title="Daniel Dennett" number="5" link="/reading-lists/daniel-dennett-best-books/" img={data.dennett.childImageSharp.gatsbyImageData} alt="Daniel Dennett reading list" />
                

                <div class="large-pad-top text-center">
                  <h2 id="philosopher">Philosophy’s Best Books</h2>
                  <div class="separator"></div>
                </div>
              </div>

              <div class="mid-width spectral page-center">
                <div>
                  <p><span className="big-letter">T</span>he reading lists above are assembled from hundreds of hours of research, and we’re reviewing and adding new ones all the time. If there’s a particular subject or philosopher you’d like covered, let us know on <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram here</a>, on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter here</a>, or <a href="mailto:hello@philosophybreak.com">via email here</a>, and we’ll add it to our production queue.</p>
                </div>
                <div>
                  <p>In the meantime, out of all the philosophical reading lists presented above, we’ve selected three of our overall favorite philosophy books to get you started, any of which are sure to whet your appetite and set you on the right path to learning more. Happy philosophizing!</p>
                </div>
              </div>

                <div id="break-start" class="page-center">
                  <p className="small-pad-top"><b>Three of our overall favorite philosophy books to get you started:</b></p>
                  <h2 style={{marginTop: "1.2em"}}>1. What Does It All Mean? By Thomas Nagel</h2>
                  <BookLink title="What Does It All Mean?" author="Thomas Nagel" link="http://www.amazon.com/gp/product/0195052161/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195052161&linkId=37e9c1b9904009913b6ab114bca378f7" img={data.one.childImageSharp.gatsbyImageData} />
                  <p>Thomas Nagel is the brilliant contemporary philosopher behind <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1107604710/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1107604710&linkId=1f732b4938e1eec1b5fabe47e91eaf5c">Mortal Questions</a> and <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0195056442/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195056442&linkId=280802512d39c50eabdfd0e9138ba158">The View From Nowhere</a>. Written in 1987, Nagel’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0195052161/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0195052161&linkId=37e9c1b9904009913b6ab114bca378f7">What Does It All Mean?</a> is a lucid and accessible introduction to philosophy, setting forth the central problems of philosophical inquiry for beginners.</p>
                  <p>A slim book at just over 100 pages, Nagel covers free will, right and wrong, death, language, the meaning of life and other core topics in clear, illuminating language that anyone interested in philosophy would strongly benefit from reading.</p>
                  <h2>2. Life’s Big Questions, by Philosophy Break</h2>
                  <div className="article white">
                      <Link to="/lifes-big-questions/">
                          <GatsbyImage
                              image={data.lbq.childImageSharp.gatsbyImageData}
                              alt="Introduction to Philosophy: Life’s Big Questions" />
                          <div className="article-info">
                              <h4>Life’s Big Questions: Your Concise Guide to Philosophy’s Most Important Wisdom</h4>
                              <p className="time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BY PHILOSOPHY BREAK</p>
                              <p style={{margin: "0 0 3px"}}><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                              <Link to="/lifes-big-questions/" className="primary button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>Learn More</Link>
                          </div>
                      </Link>
                  </div>
                  <p><Link to="/lifes-big-questions/">Life’s Big Questions</Link> distills philosophy’s best answers to some of life’s most troubling questions. Why does anything exist? Is the world around us ‘real’? What makes us conscious? Do we have free will? How should we approach life Packed full of wisdom from the greatest philosophical minds of the last few millennia, this concise online guide is designed to quickly equip you with philosophy’s most important insights.</p>
                  <p>Of course, we’re a little biased, as we produced this one — but if you’re seeking to understand the fundamentals of philosophy, and obtain a solid grounding for exactly where you can go to learn more, <Link to="/lifes-big-questions/">Life’s Big Questions</Link> gets rave reviews, and might be just what you’re looking for!</p>
                  <h2>3. The Last Days of Socrates, by Plato</h2>
                  <BookLink title="The Last Days of Socrates" author="Plato" link="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec" img={data.three.childImageSharp.gatsbyImageData} />
                  <p>Where better to start than with a tome still routinely adored and studied by undergraduate philosophy students to this day?</p>
                  <p>Plato’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec">The Last Days of Socrates</a> includes four superb dialogues — Euthyphro, Apology, Crito, and Phaedo — that cover the trial and death of Socrates in 399 BCE.</p>
                  <p>Serving as an ideal introduction to Plato’s style and the dialogue form generally, the works in this collection are among Plato’s earliest and record Socrates debating the nature of piety, justice, death, and the immortality of the soul in brilliant, highly-charged prose.</p>
                  <p>Hugely entertaining and wise — a collection to defy anyone who thinks philosophy is boring or stuffy — <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449280/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449280&linkId=043e78a2b8873d9b6291b1567c6e52ec">The Last Days of Socrates</a> belongs on the bookshelf of anyone interested in Plato, Socrates, or philosophy generally.</p>
                

            <div class="small-pad text-center">
              <AnchorLink className="no-hover" href="#subject"><button className="button primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>Back to All Reading Lists</button></AnchorLink>

            </div>


                </div>

              
            
        
            <WatermarkBreak />
        {/*end page background color*/}
        </div>

        {/*post-reading list content*/}


        <WelcomeEmailPanel />

        <Footer />
    </Layout>
    </>
    )
}

export const query = graphql`{
  about: file(relativePath: {eq: "reading-lists.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
    }
  }
  introduction: file(relativePath: {eq: "introduction.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  consciousnesslist: file(relativePath: {eq: "consciousness-list.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  whistorylist: file(relativePath: {eq: "whistorylist.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  nietzsche: file(relativePath: {eq: "nietzsche.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  metaphysics: file(relativePath: {eq: "metaphysics.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  epistemology: file(relativePath: {eq: "epistemology.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  freewill: file(relativePath: {eq: "freewill.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  ethics: file(relativePath: {eq: "ethics.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  politics: file(relativePath: {eq: "politics.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  language: file(relativePath: {eq: "language.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  existentialism: file(relativePath: {eq: "existentialism.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  epicureanism: file(relativePath: {eq: "epicureanism.webp"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  stoicism: file(relativePath: {eq: "stoicism.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  marcus: file(relativePath: {eq: "marcus-aurelius.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  plato: file(relativePath: {eq: "plato.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  aristotle: file(relativePath: {eq: "aristotle.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  camus: file(relativePath: {eq: "camus.webp"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  arendt: file(relativePath: {eq: "hannah-arendt.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  socrates: file(relativePath: {eq: "socrates.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  kant: file(relativePath: {eq: "kant.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  locke: file(relativePath: {eq: "locke.webp"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  buddhism: file(relativePath: {eq: "buddhism.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  confucius: file(relativePath: {eq: "confucius.webp"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  rand: file(relativePath: {eq: "rand.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  watts: file(relativePath: {eq: "watts.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  kierk: file(relativePath: {eq: "Kierkegaard.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  thoreau: file(relativePath: {eq: "thoreau.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  marx: file(relativePath: {eq: "marx.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  dennett: file(relativePath: {eq: "Dennett.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  dost: file(relativePath: {eq: "dostoevsky.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  tolstoy: file(relativePath: {eq: "tolstoy.webp"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  voltaire: file(relativePath: {eq: "voltaire.webp"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  beauvoir: file(relativePath: {eq: "beauvoir.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  machiavelli: file(relativePath: {eq: "machiavelli.jpeg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  emerson: file(relativePath: {eq: "ralph-waldo.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 480, layout: CONSTRAINED)
    }
  }
  one: file(relativePath: {eq: "introductionnagel.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  lbq: file(relativePath: {eq: "LBQ-promo.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
  three: file(relativePath: {eq: "plato-lastdays.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  philosophybreak: file(relativePath: {eq: "philosophybreak.png"}) {
    childImageSharp {
      gatsbyImageData(width: 22, layout: CONSTRAINED)
    }
  }
}
`

export default Page