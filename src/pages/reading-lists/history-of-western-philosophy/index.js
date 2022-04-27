import React from "react"
import { graphql } from "gatsby"
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
    <Seo title="The History of Western Philosophy – The Best 5 Books to Read" description="A curated reading list of the most essential books on the history of Western philosophy." image={imagePath} pathname={location.pathname} />
    <MailchimpPopUp />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="The History of Western Philosophy" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Western Philosophy" />
        
        {/*reading list content*/}
        <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">R</span>eading a book on the history of Western philosophy in its entirety might seem foreboding – but imagine writing one! Thankfully, a number of authors have stepped up to the Herculean task, providing us with a complete overview of how Western philosophy has unfolded over the last two and a half thousand years.</p>
            <p>The following reading list contains the best of such books. With each, you'll be taken on an illuminating journey from the pre-Socratic philosophers of Ancient Greece, through medieval times and the ideas of the Enlightenment, right up to the analytic and continental philosophy of today. Fasten your seat belts!</p>

            <h2>1. The History of Western Philosophy, by Bertrand Russell</h2>
            <p>Where better to start on the history of Western philosophy than with the perspective of one of the subject's greats? Bertrand Russell was a towering figure in 20th-century thought. Originally published in 1945, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0671201581/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0671201581&linkId=7f9e5b8a5812d027ddd5c31d266aca87">The History of Western Philosophy</a> is Russell's brilliant, if slightly biased, look back at all prominent thinkers that came before him. It's a very accessible and enjoyable read.</p>
            <BookLink title="The History of Western Philosophy" author="Bertrand Russell" link="http://www.amazon.com/gp/product/0671201581/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0671201581&linkId=7f9e5b8a5812d027ddd5c31d266aca87" img={data.one.childImageSharp.gatsbyImageData} />

            <h2>2. A New History of Western Philosophy, by Anthony Kenny</h2>
            <p>Anthony Kenny, a highly thought of philosopher in his own right, is the first person since Russell to attempt a complete, single-authored history of Western philosophy. <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/gp/product/0631201327/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0631201327&linkId=90456aeb8e19235364653210179e838b">A New History of Western Philosophy</a>, first published in 2007, is epic in scope and lauded as one of the strongest and best-researched introductions to the subject. Kenny combines rich biographical context with academic rigour to create a wonderfully lucid account of philosophy's development. It's an essential book to have on the shelf for anyone interested in philosophy.</p>
            <BookLink title="A New History of Western Philosophy" author="Anthony Kenny" link="http://www.amazon.com/gp/product/0199656495/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199656495&linkId=446f947fc36e3824faaf4492714deaf4" img={data.two.childImageSharp.gatsbyImageData} />

            <h2>3. A Brief History of Western Philosophy, by Anthony Kenny</h2>
            <p>It's that man Kenny again! Slightly less epic than his New History, Anthony Kenny's <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0199656495/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0199656495&linkId=446f947fc36e3824faaf4492714deaf4">A Brief History of Western Philosophy</a>, published in 1996, is no less enlightening. If you're looking for a more manageable read on Western philosophy's history that still covers all the bases in thoughtful fashion, this is the book for you.</p>
            <BookLink title="A Brief History of Western Philosophy" author="Anthony Kenny" link="http://www.amazon.com/gp/product/0631201327/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0631201327&linkId=90456aeb8e19235364653210179e838b" img={data.three.childImageSharp.gatsbyImageData} />

            <h2>4. The Columbia History of Western Philosophy, by Richard Popkin</h2>
            <p>You might think assembling 63 separate scholars to contribute toward a complete history of Western philosophy would lead to a mess of conflicting styles, interpretations, and opinions. Not so: enter Richard Popkin. In <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/0231101295/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0231101295&linkId=336fc18d9c0d561aae0fdaec5b65ddff">The Columbia History of Western Philosophy</a>, published in 2006, Popkin weaves the contributions together with impressive editorial skill, providing a single compelling narrative. The end result is another essential for the bookshelf.</p>
            <BookLink title="The Columbia History of Western Philosophy" author="Richard Popkin" link="http://www.amazon.com/gp/product/0231101295/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0231101295&linkId=336fc18d9c0d561aae0fdaec5b65ddff" img={data.four.childImageSharp.gatsbyImageData} />

            <h2>5. The Great Philosophers: An Introduction to Western Philosophy, by Bryan Magee</h2>
            <p>A little lighter than other entries on this list, Bryan Magee's <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/gp/product/019289322X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019289322X&linkId=582829b6ab8e2814e7c66f3f6b6526a5">The Great Philosophers: An Introduction to Western Philosophy</a>, published in 1987, is a must for two reasons. Firstly, it offers an exciting account of Western philosophy's greatest thinkers. Secondly, it does so through interviews with some of the most important philosophers of the late 20th century, granting insight into their thoughts, ideas, and personalities too. This approach leads to a thoroughly engaging overview for anyone interested in Western philosophy.</p>
            <BookLink title="The Great Philosophers: An Introduction to Western Philosophy" author="Bryan Magee" link="http://www.amazon.com/gp/product/019289322X/ref=as_li_tl?ie=UTF8&tag=philosophybre-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=019289322X&linkId=582829b6ab8e2814e7c66f3f6b6526a5" img={data.five.childImageSharp.gatsbyImageData} />
            
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
  title: file(relativePath: {eq: "whistorylist.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "whistoryrussell.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "whistorykennynew.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "whistorykennybrief.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "whistorycolumbia.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "whistorymagee.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList