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
    <Seo title="Buddhist Philosophy Reading List – The Best 6 Books to Read" description="A curated reading list of the best and most essential books of and about Buddhist philosophy." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Buddhist Philosophy" number="6" img={data.title.childImageSharp.gatsbyImageData} alt="Buddhist Philosophy" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>

            <p><span className="big-letter">B</span>uddhism is a philosophical tradition based on the teachings of Siddhartha Gautama, a prince who lived in ancient India around 500 BCE (exact dates vary). It’s thought the Buddha’s teachings were originally transmitted orally, and only written down in the 1st century BCE in Sri Lanka, with further Buddhist branches spreading throughout India, China, Tibet, Japan, and South-East Asia.</p>  

            <p>Encompassing as it does a variety of traditions, beliefs, and spiritual practices, Buddhism can be viewed as both a religion and a philosophy. However, unlike some other religions, its original philosophical teachings are not (necessarily) grounded in any appeals to ‘supernatural’ elements like a creator God or gods, resulting in the emergence of secular Buddhist movements that engender keen philosophical engagement.</p> 

            <p>The teachings of the Buddha — especially the ‘Four Noble Truths’ and the concept of <Link to="/articles/anatman-buddhist-doctrine-of-no-self-why-you-do-not-really-exist/">anātman (no-self)</Link> — have fascinated thinkers for thousands of years, and offer a rich framework for facing up to life and suffering. While perhaps best known for its advocation of practices like meditation, and while many different schools and doctrines have grown up around its original teachings, the core of Buddhist philosophy has much to offer on a broad range of topics, from <Link to="/reading-lists/metaphysics/">metaphysics</Link> to <Link to="/reading-lists/ethics-and-morality/">ethics</Link>.</p>

            <div className="course-promo darkradial-background text-center">
                <h4>Philosophies for Living: the Ultimate Guide to Enriching Your Personal Philosophy</h4>
                <p className="review-font"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> (50+ reviews)</p>
                <p className="small-grey-font">Enhance your approach to life by exploring 7 of the world’s wisest and most influential philosophies for living — including Buddhism, Stoicism, and Existentialism.</p>
                <Link className="button primary" href="/philosophies-for-living/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>Sign Up Now</Link>
            </div>

            <p>This reading list focuses on the best introductions to Buddhist philosophy in general, from anthologies to essential Buddhist texts. After reading some of the books on this list, you’ll understand exactly why this great tradition continues to boast over 500 million followers around the world today. Let’s dive in!</p>

            <h2>1. What the Buddha Taught, by Walpola Rahula</h2>
            <p>Originally published in 1959, Sri Lankan Buddhist monk Walpola Rahula’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/What-Buddha-Taught-Expanded-Dhammapada/dp/0802130313?&linkCode=ll1&tag=philosophybre-20&linkId=b5d88632657f90adc759c4271a34d706&language=en_US&ref_=as_li_ss_tl">What the Buddha Taught</a> is a classic introduction to Buddhism still widely read and celebrated today. Clearly and concisely covering the Buddha’s core teachings, and drawing from original Buddhist texts, Rahula’s work is a fantastic place to start for anyone with a budding interest in the subject. Coming in at an accessible 151 pages, this is a very nice entry point to Buddhist philosophy.</p>
            <BookLink title="What the Buddha Taught" author="Walpola Rahula" link="http://www.amazon.com/What-Buddha-Taught-Expanded-Dhammapada/dp/0802130313?&linkCode=ll1&tag=philosophybre-20&linkId=b5d88632657f90adc759c4271a34d706&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

            <h2>2. The Heart of the Buddha’s Teaching, by Thich Nhat Hanh</h2>
            <p>For a more recent and slightly more in-depth introduction to the development and core tenets of Buddhist philosophy, look no further than Thich Nhat Hanh’s 1999 <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Heart-Buddhas-Teaching-Transforming-Liberation/dp/0767903692?&linkCode=ll1&tag=philosophybre-20&linkId=cb1338b01cf20e5fc6618c946629ad14&language=en_US&ref_=as_li_ss_tl">The Heart of the Buddha’s Teaching</a>. Thich Nhat Hanh was a Buddhist Zen master heralded around the world as a fantastic Buddhist advocate and communicator. His brilliant introduction covers the Four Noble Truths, the Noble Eightfold Path, and much more. At 304 pages, this slightly longer introduction to Buddhism comes highly recommended.</p>
            <BookLink title="The Heart of the Buddha’s Teaching" author="Thich Nhat Hanh" link="http://www.amazon.com/Heart-Buddhas-Teaching-Transforming-Liberation/dp/0767903692?&linkCode=ll1&tag=philosophybre-20&linkId=cb1338b01cf20e5fc6618c946629ad14&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

            <h2>3. Why Buddhism is True, by Robert Wright</h2>
            <p>For an even more recent introduction to Buddhist philosophy — an introduction that is written very much from a Western secularist perspective — consider American author Robert Wright’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Why-Buddhism-True-Philosophy-Enlightenment/dp/1439195463?&linkCode=ll1&tag=philosophybre-20&linkId=d70187f94bf95dfa5361294cfe2500b3&language=en_US&ref_=as_li_ss_tl">Why Buddhism is True</a>, published in 2017. Weaving in his own personal story and anecdotes, Wright attempts to show how key Buddhist teachings and practices are compatible with — and even backed by — the latest learnings from cognitive science and evolutionary psychology. If you’re seeking a highly readable, engaging introduction to Buddhism from a Western secularist perspective, Wright’s book is for you.</p>
            <BookLink title="Why Buddhism is True" author="Robert Wright" link="http://www.amazon.com/Why-Buddhism-True-Philosophy-Enlightenment/dp/1439195463?&linkCode=ll1&tag=philosophybre-20&linkId=d70187f94bf95dfa5361294cfe2500b3&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />

            <h2>4. The Dhammapada, translated by Eknath Easwaran</h2>
            <p>Turning from introductions to primary Buddhist texts and commentaries, where better to start than with one of the most accessible collections of aphorisms and verses attributed to the Buddha himself? Commonly thought of as the ‘handbook’ of original Buddhist teachings, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Dhammapada-Easwarans-Classics-Indian-Spirituality/dp/1586380206?&linkCode=ll1&tag=philosophybre-20&linkId=e1f8cbec4394321cf33f30d83fb864ec&language=en_US&ref_=as_li_ss_tl">The Dhammapada</a> — here translated, contextualized, and introduced by the famed Indian-born spiritual teacher Eknath Easwaran — presents powerful verses recorded by direct disciples of the Buddha, covering core Buddhist ideas in poetic language. If you’re interested in Buddhist philosophy, this beautiful work belongs on your bookshelf.</p>
            <BookLink title="The Dhammapada" author="Eknath Easwaran" link="http://www.amazon.com/Dhammapada-Easwarans-Classics-Indian-Spirituality/dp/1586380206?&linkCode=ll1&tag=philosophybre-20&linkId=e1f8cbec4394321cf33f30d83fb864ec&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

            <h2>5. In the Buddha’s Words, by Bhikkhu Bodhi</h2>
            <p>For a more in-depth collection of the Buddha’s original teachings, complete with detailed contextualization and commentary (as well as a foreword from the Dalai Lama), look no further than Bhikkhu Bodhi’s brilliant <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Buddhas-Words-Anthology-Discourses-Teachings/dp/0861714911?&linkCode=ll1&tag=philosophybre-20&linkId=c3d25e83fbffabc2fdf7173ebb6f848e&language=en_US&ref_=as_li_ss_tl">In the Buddha’s Words</a>. This anthology presents thoughtfully curated selections from the Pali Canon of Buddhist philosophy, as well as clear translations of the Buddha’s original teachings. It’s an essential addition for any aspiring student of Buddhist philosophy.</p>
            <BookLink title="In the Buddha’s Words" author="Bhikkhu Bodhi" link="http://www.amazon.com/Buddhas-Words-Anthology-Discourses-Teachings/dp/0861714911?&linkCode=ll1&tag=philosophybre-20&linkId=c3d25e83fbffabc2fdf7173ebb6f848e&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />

            <h2>6. Buddhist Philosophy: Essential Readings, by William Edelglass</h2>
            <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Buddhist-Philosophy-Essential-William-Edelglass/dp/0195328175?&linkCode=ll1&tag=philosophybre-20&linkId=b796320839c15a7c10a84bf56405c729&language=en_US&ref_=as_li_ss_tl">Buddhist Philosophy: Essential Readings</a>, edited by William Edelglass and Jay Garfield, is the most philosophically rigorous presentation of and commentary on Buddhism on this list. Aimed at those interested in the connections between Western philosophy and Buddhism, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Buddhist-Philosophy-Essential-William-Edelglass/dp/0195328175?&linkCode=ll1&tag=philosophybre-20&linkId=b796320839c15a7c10a84bf56405c729&language=en_US&ref_=as_li_ss_tl">Buddhist Philosophy: Essential Readings</a> consists of academic essays on how various selections of Buddhist literature align to <Link to="/reading-lists/metaphysics/">metaphysics</Link>, <Link to="/reading-lists/epistemology/">epistemology</Link>, <Link to="/reading-lists/philosophy-of-language/">philosophy of language</Link>, <Link to="/reading-lists/consciousness/">philosophy of mind</Link>, and <Link to="/reading-lists/ethics-and-morality/">ethics</Link>. More demanding than other works on this list, this book nevertheless deeply rewards attentive reading.</p>
            <BookLink title="Buddhist Philosophy: Essential Readings" author="William Edelglass" link="http://www.amazon.com/Buddhist-Philosophy-Essential-William-Edelglass/dp/0195328175?&linkCode=ll1&tag=philosophybre-20&linkId=b796320839c15a7c10a84bf56405c729&language=en_US&ref_=as_li_ss_tl" img={data.six.childImageSharp.gatsbyImageData} />

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
  title: file(relativePath: {eq: "buddhism.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "buddhism-taught.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "buddhism-nhat.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "buddhism-wright.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "buddhism-eknath.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "buddhism-words.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "buddhist-philosophy.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList