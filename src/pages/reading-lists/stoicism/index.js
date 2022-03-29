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
    <Seo title="Stoicism Reading List – The Best 5 Books to Read" description="A curated reading list of the most essential books of and about Stoic philosophy, including the writings of Epictetus, Seneca, and Marcus Aurelius." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Stoicism" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Stoicism books" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">F</span>or a philosophy founded almost 2,500 years ago by the ancient Greek philosopher Zeno of Citium, Stoicism is seemingly all the rage. Nuggets of Stoic wisdom dating back to ancient Greco-Roman times — particularly featuring Stoic philosophers Epictetus, Seneca, and Marcus Aurelius — float round the internet and chime with millions across social media.</p>

            <p>This is likely due to how fantastically practical much Stoic wisdom can be. Unlike other philosophy — which, tragically, as a general subject is often perceived to be outdated or pointless (<Link to="/philosophy-basics/">here’s our counter-argument as to why philosophy in today’s world is actually as relevant and important as ever</Link>) — Stoicism cuts right to the heart of our day-to-day attitudes and behaviors, and its core principles are distilled in many famous natty aphorisms and quotations.</p> 

            <p>For example, consider this from Marcus Aurelius:</p>

            <blockquote><p>You have power over your mind — not outside events. Realize this, and you will find strength.</p></blockquote>

            <p>Or this, from Epictetus:</p>

            <blockquote><p>It's not what happens to you, but how you react to it that matters.</p></blockquote> 

            <p>Or <Link to="/articles/seneca-on-coping-with-the-shortness-of-life/">Seneca on the shortness of life</Link>:</p>

            <blockquote><p>It is not that we have a short time to live, but that we waste a lot of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death's final constraint to realize that it has passed away before we knew it was passing. So it is: we are not given a short life but we make it short, and we are not ill-supplied but wasteful of it… life is long if you know how to use it.</p></blockquote>

            <p>Very nice quotations — all lifted from the books below. But beyond these practical nuggets of wisdom encouraging us to stay calm and focus on what’s within our own control (and regulate our attitudes to anything outside that control), Stoicism is a fully-fledged, holistic value system that can be adopted as a philosophy for all aspects of life.</p> 

            <p>If you’re looking to explore Stoicism further, this reading list contains the best and most accessible introductory books on the subject, as well as the most important primary texts from the great Stoic thinkers themselves. Let’s dive in!</p>

            <h2>1. How to Be a Stoic, by Massimo Pigliucci</h2>
            <p>Published in 2017, Massimo Pigliucci’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1541644530/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1541644530&linkId=6c8e27c041ce2dfd795d00afba1fad86">How to Be a Stoic</a> is a fantastic place to start for anyone with a budding interest in Stoicism. Pigliucci introduces Stoicism with clear, concise language and guides the reader through its core tenets with compelling imaginary conversations with Epictetus, one of the most influential Stoics of all time. With this accessible format, Pigliucci transposes ancient Stoic wisdom into the 21st century, unlocking practical wisdom for problems we face today, making <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/1541644530/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1541644530&linkId=6c8e27c041ce2dfd795d00afba1fad86">How to Be a Stoic</a> a very nice entry point to Stoicism.</p>
            <BookLink title="How to Be a Stoic" author="Massimo Pigliucci" link="http://www.amazon.com/gp/product/1541644530/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1541644530&linkId=6c8e27c041ce2dfd795d00afba1fad86" img={data.one.childImageSharp.gatsbyImageData} />

            <h2>2. Cambridge Companion to the Stoics, by Brad Inwood</h2>
            <p>If you’re seeking a more hardcore critical analysis of all things Stoicism, look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521779855/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521779855&linkId=7757c486b08f31177696189922568a47">The Cambridge Companion to the Stoics</a>, published in 1999. This collection of essays from contemporary academics, edited by Brad Inwood, explores the history and influence of Stoicism, and offers a rigorous dissection of its central ideas. Ideal for those looking to take the next step in their engagement with Stoicism, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0521779855/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521779855&linkId=7757c486b08f31177696189922568a47">The Cambridge Companion to the Stoics</a> is a challenging tome of deep value, and belongs on the bookshelf of any aspiring Stoic scholar.</p>
            <BookLink title="Cambridge Companion to the Stoics" author="Brad Inwood" link="http://www.amazon.com/gp/product/0521779855/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0521779855&linkId=7757c486b08f31177696189922568a47" img={data.two.childImageSharp.gatsbyImageData} />

            <h2>3. Discourses and Selected Writings, by Epictetus</h2>
            <p>Turning from introductions to primary Stoic texts, where better to start than with the work of the philosopher whose no-nonsense practical wisdom set the foundations for much of the Stoic philosophy that followed? Former slave turned philosophical teacher, the Greek Stoic Epictetus ran a school in Nicopolis in the early second century AD, the lessons of which were eagerly recorded by Arrian, Epictetus’s most famous pupil. These recordings have been celebrated throughout the ages as a wonderful guide to the ethics of Stoicism and moral self-improvement, tackling questions on mortality, fear, illness, family, friendship, love, freedom, and how to live a good life. The potentially life-changing wisdom contained in Epictetus’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449469/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449469&linkId=73e3249fb0aa7e242c68e9de1623d07c">Discourses and Selected Writings</a> is as relevant, accessible, and enlightening today as it was 2,000 years ago, making this wonderful book absolutely essential for any student of Stoicism.</p>
            <BookLink title="Discourses and Selected Writings" author="Epictetus" link="http://www.amazon.com/gp/product/0140449469/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449469&linkId=73e3249fb0aa7e242c68e9de1623d07c" img={data.three.childImageSharp.gatsbyImageData} />

            <h2>4. Letters from a Stoic, by Seneca</h2>
            <p>While the Roman statesman and dramatist Seneca advocated calmness and moderation through his Stoic philosophy, his life (from 4 BC to 65 AD) was punctuated by major upheaval. ⁣In 41 AD, following a political dispute, Seneca was exiled to the island of Corsica by the emperor Claudius, but was allowed to return in 49 AD to become a tutor to Nero. When Nero became emperor, Seneca became his advisor.⁣ Seneca’s influence over Nero declined with time, and in 65 AD Seneca was forced to take his own life for alleged complicity to assassinate Nero — an accusation of which he was likely to have been innocent. These events may seem remote from the 21st century, but there is much to learn from the wit, intelligence, and courage with which Seneca faced them. Supremely accessible, reading <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140442103/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140442103&linkId=53524be7bd4e91403113c3e5494786ac">Letters from a Stoic</a> — a collection of letters Seneca wrote throughout his lifetime — is like having exclusive access to a deep, beautiful well of profound, practical wisdom addressed directly to you. If you’re interested in Stoicism, your bookshelf will not be complete without Seneca.</p>
            <BookLink title="Letters from a Stoic" author="Seneca" link="http://www.amazon.com/gp/product/0140442103/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140442103&linkId=53524be7bd4e91403113c3e5494786ac" img={data.four.childImageSharp.gatsbyImageData} />

            <h2>5. Meditations, by Marcus Aurelius</h2>
            <p>The last of the big three Stoic names discussed in this list of the best books on Stoicism, and arguably the most well known, Marcus Aurelius is a titan of the Stoic tradition. Roman emperor from 161 to 180 AD, Aurelius reigned during a time of many significant military conflicts, as well as the Antonine Plague, a pandemic that devastated the population of the Roman Empire, causing the deaths of five million people. Despite these difficult events — or perhaps because of them — the philosophy Aurelius advocated is one of calmness and serenity. His <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449337/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449337&linkId=c10bdf039a0f73844cab3ab9510ec53e">Meditations</a>, a collection of his personal reflections written without any intention of publication, are a significant source of the modern understanding of ancient Stoic philosophy, and have been praised by countless writers, philosophers, monarchs and politicians in the centuries since the great man’s death. Containing profound lessons on how to deal with hardship and live a good life, Aurelius’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0140449337/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449337&linkId=c10bdf039a0f73844cab3ab9510ec53e">Meditations</a> is simply an essential read for anyone interested in Stoicism.</p>
            <BookLink title="Meditations" author="Marcus Aurelius" link="http://www.amazon.com/gp/product/0140449337/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0140449337&linkId=c10bdf039a0f73844cab3ab9510ec53e" img={data.five.childImageSharp.gatsbyImageData} />
            
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
  title: file(relativePath: {eq: "stoicism.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "stoicism-massimo.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "stoicism-cambridge.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "stoicism-epictetus.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "stoicism-seneca.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "stoicism-marcus.jpg"}) {
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