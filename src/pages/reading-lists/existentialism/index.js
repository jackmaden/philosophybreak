import React from "react"
import { graphql, Link } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

import Seo from '../../../components/SEO'
import Layout from '../../../components/layout'
import { Navigation } from "../../../components/navigation"
import { ScrollProgressBar } from '../../../components/scrollProgressBar'
import TitleReadingList from '../../../components/titleReadingList'
import BookLink from '../../../components/bookLink'
import CtaReadingList from "../../../components/ctaReadingList"
import PostReadingList from "../../../components/postReadingList"

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Existentialism Reading List – The Best 8 Books to Read" description="A curated reading list of the most essential books of and about existentialism, including the writings of Sartre, Heidegger, and Kierkegaard." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Existentialism" number="8" img={data.title.childImageSharp.gatsbyImageData} alt="Existentialism books" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">W</span>hat is existence? What does it mean to exist as a human being? Having been ‘thrown’ into a universe apparently devoid of objective meaning, how can we live our lives authentically, when we didn’t even ask to exist in the first place? Do our existences matter? What should we do if they don’t?</p> 
            
            <p>These are, broadly, the questions that thinkers tagged with the term ‘existentialist’ — be they philosophers, authors, or artists — have set out to answer over the last 200 years or so of existentialist thought.</p>

            <p>Before diving into existentialism’s best books, if you’re interested in quickly learning more about existentialism generally, check out our brief <Link to="/articles/what-is-existentialism-3-core-principles-of-existentialist-philosophy/">introduction to existentialist philosophy</Link>, in which we outline its three core principles. </p>

            <div className="course-promo darkradial-background text-center">
                <h4>Philosophies for Living: the Ultimate Guide to Enriching Your Personal Philosophy</h4>
                <p className="review-font"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> (50+ reviews)</p>
                <p className="small-grey-font">Enhance your approach to life by exploring 7 of the world’s wisest and most influential philosophies for living — including Buddhism, Stoicism, and Existentialism.</p>
                <Link className="button primary" href="/philosophies-for-living/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Sign Up Now</Link>
            </div>

            <p>Otherwise, this reading list puts together the top eight books of and about the philosophical movement of existentialism. It contains a mix of primary and secondary literature — from introductions and anthologies to the original texts of the deeply influential existentialist figureheads themselves. Let’s jump in!</p>

            <h2>1. At the Existentialist Café, by Sarah Bakewell</h2>
            <BookLink title="At the Existentialist Café" author="Sarah Bakewell" link="http://www.amazon.com/gp/product/1590518896/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1590518896&linkId=367f584335defe8aa26e8c811cea229c" img={data.one.childImageSharp.gatsbyImageData} />
            <p>Published in 2016, Sarah Bakewell’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1590518896/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1590518896&linkId=367f584335defe8aa26e8c811cea229c">At the Existentialist Café</a> is a fantastic place to start for anyone with a budding interest in existentialism. With brilliant narrative storytelling, Bakewell outlines the intersecting lives and philosophies of key existentialist figures — from Sartre, de Beauvoir and Merleau-Ponty, to Husserl, Heidegger, and <Link to="/reading-lists/albert-camus/">Camus</Link> . As well as lucidly introducing their thinking, Bakewell contextualizes it to the troubled times in which most core existentialist thinkers lived (i.e. immediately before, during, and after the Second World War), granting deep insight into why different strands of existentialism emerged the way they did. The 464 pages of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1590518896/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1590518896&linkId=367f584335defe8aa26e8c811cea229c">At the Existentialist Café</a> fly by and are a joy to read, making this book a very nice entry point to existentialism.</p>
            

            <h2>2. Existentialism from Dostoevsky to Sartre, by Walter Kaufmann</h2>
            <BookLink title="Existentialism from Dostoevsky to Sartre" author="Walter Kaufmann" link="http://www.amazon.com/gp/product/0452009308/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0452009308&linkId=a51b3051bf15e3ea4b6735b249f4f307" img={data.two.childImageSharp.gatsbyImageData} />
            <p>Walter Kaufmann was a 20th-century philosopher, poet, and renowned translator of Friedrich Nietzsche. In his 1956 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0452009308/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0452009308&linkId=a51b3051bf15e3ea4b6735b249f4f307">Existentialism from Dostoevsky to Sartre</a>, Kaufmann assembles extracts from key existentialist influencers and thinkers including Dostoevsky, Kierkegaard, Nietzsche, Rilke, Kafka, Ortega, Jaspers, Heidegger, Sartre, and Camus. Beyond the fantastic selected works, what makes this collection so invaluable is Kaufmann's excellent introductory essays that contextualize each extract. A classic anthology, this book belongs on the bookshelf of anyone interested in existentialism.</p>
            

            <h2>3. The Cambridge Companion to Existentialism, by Steven Crowell</h2>
            <BookLink title="The Cambridge Companion to Existentialism" author="Steven Crowell" link="http://www.amazon.com/gp/product/0521732786/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521732786&linkId=f4184551c90e235c41e26b89ca515af4" img={data.three.childImageSharp.gatsbyImageData} />
            <p>If you’re seeking to complement <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0452009308/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0452009308&linkId=a51b3051bf15e3ea4b6735b249f4f307">Kaufmann's existentialist anthology</a> with some hardcore critical analysis, look no further than philosophy professor Steven Crowell’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521732786/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521732786&linkId=f4184551c90e235c41e26b89ca515af4">The Cambridge Companion to Existentialism</a>, published in 2012. In this volume of original essays, Crowell brings together a team of distinguished commentators to discuss the ideas of Kierkegaard, Nietzsche, Heidegger, Sartre, Merleau-Ponty and de Beauvoir, showing how their focus on existence provides a compelling perspective on contemporary issues in moral psychology, philosophy of mind, language, and history. At 428 pages, this work of comprehensive analysis is for those looking to take their understanding of existentialism to the next level.</p>
            

            <h2>4. Either/Or: A Fragment of Life, by Søren Kierkegaard</h2>
            <BookLink title="Either/Or: A Fragment of Life" author="Søren Kierkegaard" link="http://www.amazon.com/gp/product/0140445773/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140445773&linkId=0c9928a088b3b5ab1a75ff897589fcec" img={data.four.childImageSharp.gatsbyImageData} />
            <p>Turning from introductions and anthologies to primary existentialist texts, where better to start than with the philosopher often regarded as the precursor to the movement as a whole? In his 1843 epic <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140445773/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140445773&linkId=0c9928a088b3b5ab1a75ff897589fcec">Either/Or: A Fragment of Life</a>, the Danish philosopher <Link to="/articles/kierkegaard-on-finding-the-meaning-of-life/">Søren Kierkegaard discusses the search for a meaningful existence</Link> using the voice of two distinct characters. A fascinating work on duality, the book’s first section is written from the perspective of an aesthetic and rather callous young man named simply A; the second from the reasonable, ethical Judge Vilhelm. Kierkegaard invites us to explore subjects like boredom, romance, meaning, and culture from these two seemingly irreconcilable perspectives. In doing so, he writes some utterly heart-wrenching, deeply witty, and memorable prose. For anyone interested in the origins of existentialist thinking, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140445773/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140445773&linkId=0c9928a088b3b5ab1a75ff897589fcec">Either/Or: A Fragment of Life</a> is a fantastic place to start.</p>
            

            <h2>5. Being and Nothingness, by Jean-Paul Sartre</h2>
            <BookLink title="Being and Nothingness" author="Jean-Paul Sartre" link="http://www.amazon.com/gp/product/0671867806/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0671867806&linkId=b0099f68e2d25fcb5bd68aca0f893a53" img={data.six.childImageSharp.gatsbyImageData} />
            <p>Arguably the cornerstone of existentialist thinking, French philosopher Jean-Paul Sartre’s epic 1943 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0671867806/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0671867806&linkId=b0099f68e2d25fcb5bd68aca0f893a53">Being and Nothingness</a> — coming in at over 800 pages — is a dense, vivid, and challenging depiction of human existence, and the most explicit expression of existentialist philosophy on this list. If you’re seeking a less daunting introduction to Sartre’s ideas, a lecture he gave in 1945, published as the short text <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0300115466/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0300115466&linkId=48977e2babd7ccf367ff6392ae848c8e">Existentialism Is a Humanism</a>, is brilliantly accessible and articulate, and is the work that propelled Sartre into international stardom. His 1938 philosophical novel <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0811220303/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0811220303&linkId=c216d3dfc5377ca3c3205bd03066cebe">Nausea</a>, too, wonderfully communicates key existential themes of alienation, anxiety, and authenticity.</p>
            

            <h2>6. The Ethics of Ambiguity, by Simone de Beauvoir</h2>
            <BookLink title="The Ethics of Ambiguity" author="Simone de Beauvoir" link="http://www.amazon.com/gp/product/1504054229/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1504054229&linkId=4e8a5f3765c670b8e5884fb6337e8f7d" img={data.seven.childImageSharp.gatsbyImageData} />
            <p>In her classic 1947 introduction to existentialist thinking, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1504054229/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1504054229&linkId=4e8a5f3765c670b8e5884fb6337e8f7d">The Ethics of Ambiguity</a>, French philosopher Simone de Beauvoir outlines her position in relation to Sartre and Merleau-Ponty and argues that in order to achieve true freedom, we must battle against the choices and activities of those who suppress it. The book that launched de Beauvoir’s feminist and existential philosophy, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1504054229/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1504054229&linkId=4e8a5f3765c670b8e5884fb6337e8f7d">The Ethics of Ambiguity</a> is a concise yet thorough examination of existence and what it means to be human, and belongs on the bookshelf of anyone interested in existentialism.</p>
            

            <h2>7. Being and Time, by Martin Heidegger</h2>
            <BookLink title="Being and Time" author="Martin Heidegger" link="http://www.amazon.com/gp/product/0061575593/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0061575593&linkId=9b6de9fcfa7f580421a8de925fa16d91" img={data.five.childImageSharp.gatsbyImageData} />
            <p>Throughout the history of philosophy, argues the German philosopher Martin Heidegger, we’ve all massively missed something: we’ve never really contemplated what it means to exist, to <i>be</i>. The <Link to="/reading-lists/metaphysics/">philosophical branch of metaphysics</Link> has skimmed over this question, focusing instead on things like substance and the categories of our experience; but behind these things, says Heidegger, lies existence itself. <i>What do we mean</i> when we say something exists? With his landmark 1927 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0061575593/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0061575593&linkId=9b6de9fcfa7f580421a8de925fa16d91">Being and Time</a>, Heidegger seeks to redress the balance by focusing like a laser, for hundreds of pages, on what it means to Be. What is the nature of our existence, as <i>we</i> experience it? Only by paying proper attention to this question, argues Heidegger, can we hope to get anywhere. Not for the faint hearted, this startling book has had a staggering influence on philosophy, art, literature, and existentialism since its publication — and deeply rewards those who tackle it.</p>
            

            <h2>8. The Myth of Sisyphus, by Albert Camus</h2>
            <BookLink title="The Myth of Sisyphus" author="Albert Camus" link="http://www.amazon.com/gp/product/0525564454/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0525564454&linkId=58906ec1aca7f5cb071dcaadf8a87e94" img={data.eight.childImageSharp.gatsbyImageData} />
            <p>Though the French thinker <Link to="/reading-lists/albert-camus/">Albert Camus</Link> rejected the label ‘existentialist’, his writings are widely considered core to the existentialist tradition. His particular brand of existentialism, dubbed ‘absurdism’, explores how <Link to="/articles/absurdity-with-camus/">even in the face of the outrageous absurdity of the human condition</Link>, we can salvage meaning and happiness. In his hugely influential 1942 philosophical essay, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0525564454/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0525564454&linkId=58906ec1aca7f5cb071dcaadf8a87e94">The Myth of Sisyphus</a>, Camus argues that the ultimate question human beings face is not whether there is a God or if certain actions are good or evil, but if life is even worth living. With lyrical eloquence, Camus recommends a path out of despair, affirming the value of personal existence, and the possibility of a life lived with dignity and authenticity. One of the seminal works of the 20th century, anyone interested in existentialism or indeed the meaning of life will not regret reading <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0525564454/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0525564454&linkId=58906ec1aca7f5cb071dcaadf8a87e94">The Myth of Sisyphus</a>.</p>
            
            
            <h2>Further reading</h2>
            <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> or <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram</a>.</p>
            <CtaReadingList />
        </div>
        
        {/*post reading list*/}
        <PostReadingList />

    </Layout>
    </>
  )
}

export const query = graphql`{
  title: file(relativePath: {eq: "existentialism.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "existentialism-bakewell.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "existentialism-kaufman.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "existentialism-cambridge.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "existentialism-kierkegaard.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "metaphysics-heidegger.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "existentialism-sartre.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  seven: file(relativePath: {eq: "existentialism-beauvoir.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  eight: file(relativePath: {eq: "existentialism-camus.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList