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
import MailchimpPopUp from "../../../components/mailchimpPopUp"

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Existentialism Reading List – The Top 8 Books to Read" description="A curated reading list of the best and most essential books of and about existentialism, including the writings of Sartre, Heidegger, and Kierkegaard." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Existentialism" number="8" img={data.title.childImageSharp.gatsbyImageData} alt="Existentialism books" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">W</span>hat is existence? What does it mean to exist as a human being? Having been ‘thrown’ into a universe apparently devoid of objective meaning, how can we live our lives authentically, when we didn’t even ask to exist in the first place? Do our existences matter? What should we do if they don’t?</p> 
            
            <p>These are, broadly, the questions that thinkers tagged with the term ‘existentialist’ — be they philosophers, authors, or artists — have set out to answer over the last 200 years or so of existentialist thought.</p>

            <p>Beyond pointing to such questions, defining existentialism is actually rather difficult, and mired in confusion.</p>

            <p>For instance, the 19th-century Dane <Link to="/articles/kierkegaard-on-why-busy-people-are-ridiculous/">Søren Kierkegaard</Link> is commonly regarded as the first existentialist philosopher, though he himself never used the term — and probably would have dismissed the label, had he been alive to do so. In fact, 20th-century philosophers Martin Heidegger and <Link to="/articles/absurdity-with-camus/">Albert Camus</Link> <i>did</i> dismiss the label during their lifetimes, despite being considered core to existentialist thought.</p>

            <p>‘Existentialism’ was explicitly adopted by the French philosopher Jean-Paul Sartre, who came to define the subject around his own works. Only then were earlier thinkers like Kierkegaard and <Link to="/reading-lists/friedrich-nietzsche/">Friedrich Nietzsche</Link> retrospectively recognized as precursors to the movement — with a number of Sartre’s contemporaries also lumped in under the term, regardless of whether they explicitly identified as such.</p>

            <p>Adding to the confusion, the term is not limited to philosophers, but has also been used to describe the work of novelists, playwrights, and artists — notably Fyodor Dostoevsky and Franz Kafka — making existentialism as much a general cultural movement as it is a specific philosophy.</p> 

            <h2>So what <i>is</i> existentialism, exactly?</h2>

            <p><span className="big-letter">T</span>he broader cultural use of the term ‘existentialist’ typically describes any thinker who places an emphasis on <i>individual lived experience</i> — particularly on the tension between the fact we are responsible for our choices, yet lack a clear framework for knowing if the decisions we make are the right ones, or if they even matter at all.</p>
            
            <p>This tension is generally accompanied by the suspicion that, beyond the everyday, there lies a deeper human need that natural science and traditional religions have not been able to fulfill. As such, existentialist works commonly feature themes like dread, boredom, anxiety, alienation, the absurd, freedom, commitment, nothingness, and what it really means to be an embodied being in an apparently uncaring, unknowable universe.</p>

            <p>The more formal philosophical side of existentialism, meanwhile, goes deeper, generally revolving around three key principles: phenomenology, freedom, and authenticity.</p>

            <div className="course-promo text-center">
                <h4>Philosophy in Your Twitter Feed</h4>
                <p className="small-grey-font">Follow Philosophy Break on Twitter to get philosophy's best questions, wisdom, and ideas directly in your Twitter feed.</p>
                <a target="_blank" rel="noopener noreferrer" className="button secondary" href="https://twitter.com/philosophybreak"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>Follow Philosophy Break</a>
            </div>

            <p>Phenomenology is a philosophical movement developed by Edmund Husserl in the early 20th century and later adapted by Heidegger and others. Phenomenologists are interested in examining the underlying structures of consciousness and experience, typically emphasizing the crucial importance of the <i>first-person perspective</i> in understanding ourselves and the world around us.</p>

            <p>For example, if we were to describe a bowl of fruit, typically we would describe distinct objects: a banana, an apple, some oranges, the bowl itself. Phenomenologists would encourage us to take a step back here: really, we see not objects but rather a unified multitude of shapes, textures, colors — that only <i>subsequently</i> we identify as a banana, an apple, and so forth. Additionally, our perceptions are not passive but ever-changing, flowing in time with our mode of consciousness, our moods, our memories and intentions.</p>
            
            <p>This intentional, first-person perspective is all too often stripped from our descriptions of the world, phenomenologists argue, when it is precisely in examining this intense, direct kind of experience that rich philosophical insight is to be found.</p>

            <p>So, reclaiming the first-person perspective in all its immediacy and complexity — and acknowledging how entangled this perspective is with the world we perceive — lies at the heart of phenomenology, and became a useful way of thinking about the world for existentialists like Sartre. <a target="_blank" rel="noopener noreferrer" href="https://plato.stanford.edu/entries/existentialism/">As philosophy professor Steven Crowell writes</a> in his summary of existentialist thought:</p>

            <blockquote>
              <p>The phenomenological approach gave philosophical shape to the basic existential insight that thinking about human existence requires new categories not found in the conceptual repertoire of ancient or modern thought; human beings can be understood neither as substances with fixed properties, nor as subjects interacting with a world of objects.</p>
            </blockquote>

            <p>If the principle of phenomenology gave existentialism its basic shape — i.e. a technique for getting at how things <i>really are</i>, going behind the stale categorizations of common sense and natural science to describe human existence for what it really is — then the principle of <i>freedom</i> gave existentialism its founding value. As contemporary philosopher Jonathan Webber argues in his 2018 work, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0198866763/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0198866763&linkId=20ef2ccc8c2cda700f9482b060858b4e">Rethinking Existentialism</a>:</p>

            <blockquote>
              <p>As originally defined by Simone de Beauvoir and Jean-Paul Sartre, existentialism is the ethical theory that we ought to treat the freedom at the core of human existence as intrinsically valuable and the foundation of all other values.</p>
            </blockquote>

            <p>The decisions we make are <i>ours</i>, existentialists argue. We bear total responsibility for who we are — and in a universe apparently devoid of direction, purpose, or meaning, this dizzying freedom is the source of much of our anxiety. (Of course, many neuroscientists and philosophers today disagree that we have such freedom, stating that <Link to="/articles/free-will-illusion-sam-harris/">free will is an illusion</Link>.)</p>
            
            <p>Finally, say existentialists, once we’ve acknowledged the importance of the first-person perspective, and recognized the ultimate freedom we have in our lived existence moment-to-moment, the stance we should adopt is one of <i>authenticity</i>. We should face up to who we are — including the fact that we are mortals who will one day die — and be true to it, refusing to bow down to anything that compromises our personal freedom or authenticity, be it external pressures, societal norms, or escapist pleasures.</p>

            <p>As Webber continues, the existentialism of Sartre and de Beauvoir begins with “eudaimonist arguments for the virtue of authenticity” and finally affirms “a categorical moral imperative of authenticity”.</p>
            
            <p>Yale professor Noreen Khawaja, meanwhile, in her work <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/B01NBG611K/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01NBG611K&linkId=38cffdee0e816a693095289fae1d474a">The Religion of Existence</a> confirms that “the idea of personal authenticity [is] at the center of existential thought.”</p>

            <p>In summary, then, while the popular conception of existentialism rather narrowly revolves around dread and angst in a meaningless universe, the formal philosophical movement is more holistic, and generally involves three core principles.</p>
            
            <p>Firstly, it involves a recognition of the foundational importance of the <i>phenomenological</i> first-person perspective. Secondly, it refers to an acknowledgement of the <i>freedom and responsibility</i> we have in our lived experience. And finally, it defends the idea that personal <i>authenticity</i> is our chief virtue, for it allows us to face up to who we are, live in harmony with the world, and thereby reduce our feelings of anxiety and alienation.</p>
            
            <p>This rather spiritual struggle takes place against the backdrop of an uncaring, Godless universe — one that we have been ‘thrown’ into and left to deal with ourselves — meaning that though many existentialists were atheists, their writing, as Khawaja puts it, “<i>feels</i> religious to its readers.”</p>

            <h2>Existentialism’s best books</h2>

            <p><span className="big-letter">T</span>his reading list puts together the top eight books of and about the philosophical movement of existentialism. It contains a mix of primary and secondary literature — from introductions and anthologies to the original texts of the deeply influential existentialist figureheads themselves.</p>







            <h2>1. At the Existentialist Café, by Sarah Bakewell</h2>
            <p>Published in 2016, Sarah Bakewell’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1590518896/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1590518896&linkId=367f584335defe8aa26e8c811cea229c">At the Existentialist Café</a> is a fantastic place to start for anyone with a budding interest in existentialism. With brilliant narrative storytelling, Bakewell outlines the intersecting lives and philosophies of key existentialist figures — from Sartre, de Beauvoir and Merleau-Ponty, to Husserl, Heidegger, and Camus. As well as lucidly introducing their thinking, Bakewell contextualizes it to the troubled times in which most core existentialist thinkers lived (i.e. immediately before, during, and after the Second World War), granting deep insight into why different strands of existentialism emerged the way they did. The 464 pages of <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1590518896/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1590518896&linkId=367f584335defe8aa26e8c811cea229c">At the Existentialist Café</a> fly by and are a joy to read, making this book a very nice entry point to existentialism.</p>
            <BookLink title="At the Existentialist Café" author="Sarah Bakewell" link="http://www.amazon.com/gp/product/1590518896/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1590518896&linkId=367f584335defe8aa26e8c811cea229c" img={data.one.childImageSharp.gatsbyImageData} />

            <h2>2. Existentialism from Dostoevsky to Sartre, by Walter Kaufmann</h2>
            <p>Walter Kaufmann was a 20th-century philosopher, poet, and renowned translator of Friedrich Nietzsche. In his 1956 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0452009308/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0452009308&linkId=a51b3051bf15e3ea4b6735b249f4f307">Existentialism from Dostoevsky to Sartre</a>, Kaufmann assembles extracts from key existentialist influencers and thinkers including Dostoevsky, Kierkegaard, Nietzsche, Rilke, Kafka, Ortega, Jaspers, Heidegger, Sartre, and Camus. Beyond the fantastic selected works, what makes this collection so invaluable is Kaufmann's excellent introductory essays that contextualize each extract. A classic anthology, this book belongs on the bookshelf of anyone interested in existentialism.</p>
            <BookLink title="Existentialism from Dostoevsky to Sartre" author="Walter Kaufmann" link="http://www.amazon.com/gp/product/0452009308/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0452009308&linkId=a51b3051bf15e3ea4b6735b249f4f307" img={data.two.childImageSharp.gatsbyImageData} />

            <h2>3. The Cambridge Companion to Existentialism, by Steven Crowell</h2>
            <p>If you’re seeking to complement <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0452009308/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0452009308&linkId=a51b3051bf15e3ea4b6735b249f4f307">Kaufmann's existentialist anthology</a> with some hardcore critical analysis, look no further than philosophy professor Steven Crowell’s <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0521732786/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521732786&linkId=f4184551c90e235c41e26b89ca515af4">The Cambridge Companion to Existentialism</a>, published in 2012. In this volume of original essays, Crowell brings together a team of distinguished commentators to discuss the ideas of Kierkegaard, Nietzsche, Heidegger, Sartre, Merleau-Ponty and de Beauvoir, showing how their focus on existence provides a compelling perspective on contemporary issues in moral psychology, philosophy of mind, language, and history. At 428 pages, this work of comprehensive analysis is for those looking to take their understanding of existentialism to the next level.</p>
            <BookLink title="The Cambridge Companion to Existentialism" author="Steven Crowell" link="http://www.amazon.com/gp/product/0521732786/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521732786&linkId=f4184551c90e235c41e26b89ca515af4" img={data.three.childImageSharp.gatsbyImageData} />

            <h2>4. Either/Or: A Fragment of Life, by Søren Kierkegaard</h2>
            <p>Turning from introductions and anthologies to primary existentialist texts, where better to start than with the philosopher often regarded as the precursor to the movement as a whole? In his 1843 epic <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140445773/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140445773&linkId=0c9928a088b3b5ab1a75ff897589fcec">Either/Or: A Fragment of Life</a>, the Danish philosopher Søren Kierkegaard discusses the search for a meaningful existence using the voice of two distinct characters. A fascinating work on duality, the book’s first section is written from the perspective of an aesthetic and rather callous young man named simply A; the second from the reasonable, ethical Judge Vilhelm. Kierkegaard invites us to explore subjects like boredom, romance, meaning, and culture from these two seemingly irreconcilable perspectives. In doing so, he writes some utterly heart-wrenching, deeply witty, and memorable prose. For anyone interested in the origins of existentialist thinking, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0140445773/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140445773&linkId=0c9928a088b3b5ab1a75ff897589fcec">Either/Or: A Fragment of Life</a> is a fantastic place to start.</p>
            <BookLink title="Either/Or: A Fragment of Life" author="Søren Kierkegaard" link="http://www.amazon.com/gp/product/0140445773/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140445773&linkId=0c9928a088b3b5ab1a75ff897589fcec" img={data.four.childImageSharp.gatsbyImageData} />

            <h2>5. Being and Nothingness, by Jean-Paul Sartre</h2>
            <p>Arguably the cornerstone of existentialist thinking, French philosopher Jean-Paul Sartre’s epic 1943 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0671867806/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0671867806&linkId=b0099f68e2d25fcb5bd68aca0f893a53">Being and Nothingness</a> — coming in at over 800 pages — is a dense, vivid, and challenging depiction of human existence, and the most explicit expression of existentialist philosophy on this list. If you’re seeking a less daunting introduction to Sartre’s ideas, a lecture he gave in 1945, published as the short text <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0300115466/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0300115466&linkId=48977e2babd7ccf367ff6392ae848c8e">Existentialism Is a Humanism</a>, is brilliantly accessible and articulate, and is the work that propelled Sartre into international stardom. His 1938 philosophical novel <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0811220303/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0811220303&linkId=c216d3dfc5377ca3c3205bd03066cebe">Nausea</a>, too, wonderfully communicates key existential themes of alienation, anxiety, and authenticity.</p>
            <BookLink title="Being and Nothingness" author="Jean-Paul Sartre" link="http://www.amazon.com/gp/product/0671867806/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0671867806&linkId=b0099f68e2d25fcb5bd68aca0f893a53" img={data.six.childImageSharp.gatsbyImageData} />

            <h2>6. The Ethics of Ambiguity, by Simone de Beauvoir</h2>
            <p>In her classic 1947 introduction to existentialist thinking, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1504054229/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1504054229&linkId=4e8a5f3765c670b8e5884fb6337e8f7d">The Ethics of Ambiguity</a>, French philosopher Simone de Beauvoir outlines her position in relation to Sartre and Merleau-Ponty and argues that in order to achieve true freedom, we must battle against the choices and activities of those who suppress it. The book that launched de Beauvoir’s feminist and existential philosophy, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/1504054229/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1504054229&linkId=4e8a5f3765c670b8e5884fb6337e8f7d">The Ethics of Ambiguity</a> is a concise yet thorough examination of existence and what it means to be human, and belongs on the bookshelf of anyone interested in existentialism.</p>
            <BookLink title="The Ethics of Ambiguity" author="Simone de Beauvoir" link="http://www.amazon.com/gp/product/1504054229/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1504054229&linkId=4e8a5f3765c670b8e5884fb6337e8f7d" img={data.seven.childImageSharp.gatsbyImageData} />

            <h2>7. Being and Time, by Martin Heidegger</h2>
            <p>Throughout the history of philosophy, argues the German philosopher Martin Heidegger, we’ve all massively missed something: we’ve never really contemplated what it means to exist, to <i>be</i>. The <Link to="/reading-lists/metaphysics/">philosophical branch of metaphysics</Link> has skimmed over this question, focusing instead on things like substance and the categories of our experience; but behind these things, says Heidegger, lies existence itself. <i>What do we mean</i> when we say something exists? With his landmark 1927 <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0061575593/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0061575593&linkId=9b6de9fcfa7f580421a8de925fa16d91">Being and Time</a>, Heidegger seeks to redress the balance by focusing like a laser, for hundreds of pages, on what it means to Be. What is the nature of our existence, as <i>we</i> experience it? Only by paying proper attention to this question, argues Heidegger, can we hope to get anywhere. Not for the faint hearted, this startling book has had a staggering influence on philosophy, art, literature, and existentialism since its publication — and deeply rewards those who tackle it.</p>
            <BookLink title="Being and Time" author="Martin Heidegger" link="http://www.amazon.com/gp/product/0061575593/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0061575593&linkId=9b6de9fcfa7f580421a8de925fa16d91" img={data.five.childImageSharp.gatsbyImageData} />

            <h2>8. The Myth of Sisyphus, by Albert Camus</h2>
            <p>Though the French thinker Albert Camus rejected the label ‘existentialist’, his writings are widely considered core to the existentialist tradition. His particular brand of existentialism, dubbed ‘absurdism’, explores how <Link to="/articles/absurdity-with-camus/">even in the face of the outrageous absurdity of the human condition</Link>, we can salvage meaning and happiness. In his hugely influential 1942 philosophical essay, <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0525564454/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0525564454&linkId=58906ec1aca7f5cb071dcaadf8a87e94">The Myth of Sisyphus</a>, Camus argues that the ultimate question human beings face is not whether there is a God or if certain actions are good or evil, but if life is even worth living. With lyrical eloquence, Camus recommends a path out of despair, affirming the value of personal existence, and the possibility of a life lived with dignity and authenticity. One of the seminal works of the 20th century, anyone interested in existentialism or indeed the meaning of life will not regret reading <a target="_blank" rel="noopener noreferrer" href="http://www.amazon.com/gp/product/0525564454/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0525564454&linkId=58906ec1aca7f5cb071dcaadf8a87e94">The Myth of Sisyphus</a>.</p>
            <BookLink title="The Myth of Sisyphus" author="Albert Camus" link="http://www.amazon.com/gp/product/0525564454/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0525564454&linkId=58906ec1aca7f5cb071dcaadf8a87e94" img={data.eight.childImageSharp.gatsbyImageData} />
            
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
  philosophybreak: file(relativePath: {eq: "philosophybreak.png"}) {
    childImageSharp {
      gatsbyImageData(width: 22, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList