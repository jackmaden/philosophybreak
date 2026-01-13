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
import BigSubscribe from "../../../components/bigSubscribe"
import Sidebar from "../../../components/sidebar"

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Henry David Thoreau Reading List – The Best 5 Books to Read" description="A curated reading list of the most essential books on and by Henry David Thoreau." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Henry David Thoreau" number="5" img={data.title.childImageSharp.gatsbyImageData} alt="Henry David Thoreau books" />
        
        {/*container for sidebar*/}
        <div id="container">

          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>
            <p><span className="big-letter">H</span>enry David Thoreau (1817 - 1862) was an American writer, philosopher, and naturalist perhaps best known for exiling himself to a shack in the woods for two years in Concord, Massachusetts, and producing his famous 1854 book, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/0199538069?&linkCode=ll1&tag=philosophybre-20&linkId=b62a1da62168eb739b2378f057473c1d&language=en_US&ref_=as_li_ss_tl">Walden</a>.</p>

            <p>Why did he do so? Well, as he puts it:</p>

            <blockquote><p>I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.</p></blockquote>

            <p>Influenced by fellow philosopher, his friend and mentor Ralph Waldo Emerson, who owned the portion of woodland in which Thoreau built his shack (see my list of <Link to="/reading-lists/ralph-waldo-emerson-best-books/">Emerson’s best books here</Link>), Thoreau set out to meditate on life, society, and the role of the individual. He wrote that:</p>

            <blockquote><p>The mass of men lead lives of quiet desperation.</p></blockquote>

            <p>Thoreau sought an antidote to this desperation. How can we live lives of freedom and purpose? How can we participate in society while maintaining our individuality? How can we live in a way that is true to ourselves?</p>

            <p>Thoreau’s answers to these questions emphasized the importance of getting out into the natural world, and of our need to each establish meaning and purpose <i>individually</i>.</p>

            <p>As the 19th-century Danish philosopher <Link to="/articles/kierkegaard-on-finding-the-meaning-of-life/">Kierkegaard also argues when discussing the meaning of life</Link>, we will not find fulfillment in objectivity or conformity, Thoreau thinks; we must maintain our subjectivity, acknowledge our individuality, and answer the questions life poses <i>for ourselves</i>.</p>

            <p>Thoreau’s work greatly informed <i>Transcendentalism</i>, a 19th-century philosophical movement spearheaded by Emerson and Margaret Fuller that believes in the inherent goodness — even divinity — of nature and humanity.</p>

            <p>Within this picture, Transcendentalists see society as a corrupting force, as a conspiracy against individuality.</p>

            <p>They believe — as set out with masterful prose in <Link to="/articles/ralph-waldo-emerson-self-reliance-summary-and-pdf-become-your-own-person/">Emerson’s famous essay on self-reliance</Link> — that we are at our best when we are left to our own devices in nature, when we are <i>self-reliant</i>; and that cooperation and morality come naturally, and need not be legislated by the state.</p>

            <p>If the practices of the state come into conflict with our own conscience, Transcendentalists thus advise us to prioritize the needs of our own conscience.</p>

            <p>And, as we discuss below, in his 1849 essay <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Civil-Disobedience-Henry-David-Thoreau/dp/1619490927?&linkCode=ll1&tag=philosophybre-20&linkId=70bf7c9c66423631756257876ad74550&language=en_US&ref_=as_li_ss_tl ">Civil Disobedience</a>, Thoreau presents his hugely influential framework for how we might do so: by maintaining our individual dignity while protesting against the state in non-violent fashion.</p>

            <BigSubscribe />

            <p>Though he confronts some of the most difficult aspects of the human condition, Thoreau’s prose contains a powerful clarity of thought that few have matched before or since.</p>

            <p>This reading list attempts to capture that clarity of thought by presenting the best books on and by Henry David Thoreau.</p>

            <p>After reading some of the books on this list, you’ll understand why this great American writer has been so influential over the last 150 years, and why his work continues to be celebrated today.</p>

            <p>Let’s dive in!</p>


              <h2>1. Walden, by Henry David Thoreau</h2>
              <BookLink title="Walden" author="Henry David Thoreau" link="https://www.amazon.com/dp/0199538069?&linkCode=ll1&tag=philosophybre-20&linkId=b62a1da62168eb739b2378f057473c1d&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

              <p>Of course, where better to start?</p>

              <p>Thoreau originally went to Walden Pond to write his first book, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Concord-Merrimack-Rivers-Penguin-Classics/dp/0140434429?&linkCode=ll1&tag=philosophybre-20&linkId=fde5f9760881fca53a627353210a69e1&language=en_US&ref_=as_li_ss_tl">A Week on the Concord and Merrimack Rivers</a>, in memory of his brother, who passed away very young, and to whom Thoreau was very close.</p>

              <p>The book we now know and love as <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/0199538069?&linkCode=ll1&tag=philosophybre-20&linkId=b62a1da62168eb739b2378f057473c1d&language=en_US&ref_=as_li_ss_tl">Walden</a> emerges from Thoreau’s initial journal entries upon arriving in the woods.</p>

              <p>Though he was not totally isolated during the two years he spent at Walden Pond — he received visitors, and went home for Sunday dinners — Thoreau created enough space between himself and civilization to expertly dissect the extent to which conformity infects our individuality.</p>

              <p>It is this incisive dissection that imbues <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/0199538069?&linkCode=ll1&tag=philosophybre-20&linkId=b62a1da62168eb739b2378f057473c1d&language=en_US&ref_=as_li_ss_tl">Walden</a> with its power: Thoreau meditates beautifully on the power of the natural world, his role within it, and the nefarious ways in which society and the accumulation of wealth alienates us from nature, each other, and ourselves.</p>

              <p>If you’re looking for an insight into Thoreau’s Transcendentalist, naturalist, beautiful view on the world, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/0199538069?&linkCode=ll1&tag=philosophybre-20&linkId=b62a1da62168eb739b2378f057473c1d&language=en_US&ref_=as_li_ss_tl">Walden</a> is the perfect gateway, and belongs on your bookshelf.</p>
              

              <h2>2. Civil Disobedience, by Henry David Thoreau</h2>
              <BookLink title="Civil Disobedience" author="Henry David Thoreau" link="https://www.amazon.com/Civil-Disobedience-Henry-David-Thoreau/dp/1619490927?&linkCode=ll1&tag=philosophybre-20&linkId=70bf7c9c66423631756257876ad74550&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

              <p>Fueled by his outrage at slavery and the American-Mexican war, Thoreau’s essay <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Civil-Disobedience-Henry-David-Thoreau/dp/1619490927?&linkCode=ll1&tag=philosophybre-20&linkId=70bf7c9c66423631756257876ad74550&language=en_US&ref_=as_li_ss_tl ">Civil Disobedience</a> calls for all citizens to value their own conscience above anything legislated by law, and has been highly influential since its publication in 1849.</p>

              <p>Thoreau was aghast that his tax dollars were being used to fund activities — slavery and war — that he vehemently disagreed with.</p>

              <p>Unable to square his financial contribution with his own conscience, he thus stopped paying his taxes, and spent time in prison for doing so.</p>

              <p>For Thoreau, going to prison was a better outcome — a <i>freer</i> outcome — than acting against his own conscience.</p>

              <p>This episode in Thoreau’s life is a prime example of the non-violent protest he champions throughout <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Civil-Disobedience-Henry-David-Thoreau/dp/1619490927?&linkCode=ll1&tag=philosophybre-20&linkId=70bf7c9c66423631756257876ad74550&language=en_US&ref_=as_li_ss_tl ">Civil Disobedience</a>, and his method inspired later figures like Mahatma Gandhi and Martin Luther King Jr.</p>

              <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Civil-Disobedience-Henry-David-Thoreau/dp/1619490927?&linkCode=ll1&tag=philosophybre-20&linkId=70bf7c9c66423631756257876ad74550&language=en_US&ref_=as_li_ss_tl ">Civil Disobedience</a> begins with the famous statement,</p>

              <blockquote><p>That government is best which governs least.</p></blockquote>

              <p>But here Thoreau is actually quoting from the masthead of the libertarian publication <i>U.S. Democratic Review</i>.</p>
              
              <p>He goes on to expand this position, not necessarily calling for no government, but calling for <i>better</i> government — he wants the government to focus on what it is good at, like building infrastructure, and not infiltrate the moral sphere.</p>

              <p>For, in the realms of morality and living a good life, Thoreau argues, it is <i>self-governance</i> that must take precedence.</p>

              <p>If you’re interested in how Thoreau reconciles his emphasis on individual autonomy with participation in collective society — and in reading an essay that has had huge political influence in the years since it was written — <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Civil-Disobedience-Henry-David-Thoreau/dp/1619490927?&linkCode=ll1&tag=philosophybre-20&linkId=70bf7c9c66423631756257876ad74550&language=en_US&ref_=as_li_ss_tl ">Civil Disobedience</a> is for you.</p>


              <h2>3. The Journal of Henry David Thoreau, by Henry David Thoreau</h2>
              <BookLink title="The Journal of Henry David Thoreau" author="Henry David Thoreau" link="https://www.amazon.com/Journal-Thoreau-1837-1861-Review-Classics/dp/159017321X?&linkCode=ll1&tag=philosophybre-20&linkId=032b02218fd811eedd4c9430f893179e&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />

              <p>As we discussed above, Thoreau’s <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/0199538069?&linkCode=ll1&tag=philosophybre-20&linkId=b62a1da62168eb739b2378f057473c1d&language=en_US&ref_=as_li_ss_tl">Walden</a> emerged from his initial journal entries.</p>

              <p>Fans of <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/0199538069?&linkCode=ll1&tag=philosophybre-20&linkId=b62a1da62168eb739b2378f057473c1d&language=en_US&ref_=as_li_ss_tl">Walden</a>, then: rejoice, for Thoreau kept a journal all his life — and the same strong narrative voice speaks from these pages.</p>

              <p>We get an insight into Thoreau’s day-to-day existence (which involves a wonderful amount of walking in nature), his sensitivity to the beauty of the natural world, his passion for ecology and plantlife, and of course his nuanced insights into the ways in which society corrupts the purity of natural human life.</p>

              <p>This edition of <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Journal-Thoreau-1837-1861-Review-Classics/dp/159017321X?&linkCode=ll1&tag=philosophybre-20&linkId=032b02218fd811eedd4c9430f893179e&language=en_US&ref_=as_li_ss_tl">The Journal of Henry David Thoreau</a>, edited by Damion Searls, condenses Thoreau’s original 25,000+ pages of journal entries into a single, 700-page volume.</p>

              <p>With his selections, Searls does a fantastic job in giving an overall impression of Thoreau’s life and thought, and provides brilliant contextual analysis along the way.</p>

              <p>While perhaps not the best starting point on this list, if you enjoy <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/0199538069?&linkCode=ll1&tag=philosophybre-20&linkId=b62a1da62168eb739b2378f057473c1d&language=en_US&ref_=as_li_ss_tl">Walden</a>, you’ll love <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Journal-Thoreau-1837-1861-Review-Classics/dp/159017321X?&linkCode=ll1&tag=philosophybre-20&linkId=032b02218fd811eedd4c9430f893179e&language=en_US&ref_=as_li_ss_tl">The Journal of Henry David Thoreau</a>.</p>


              <h2>4. The Portable Thoreau, by Henry David Thoreau</h2>
              <BookLink title="The Portable Thoreau" author="Henry David Thoreau" link="https://www.amazon.com/Portable-Thoreau-Penguin-Classics/dp/0143106503?&linkCode=ll1&tag=philosophybre-20&linkId=e5dc7b0787339bc1dabfe2323cdbbd07&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

              <p>If you’re seeking a one-stop shop for Thoreau’s work, then look no further than <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Portable-Thoreau-Penguin-Classics/dp/0143106503?&linkCode=ll1&tag=philosophybre-20&linkId=e5dc7b0787339bc1dabfe2323cdbbd07&language=en_US&ref_=as_li_ss_tl">The Portable Thoreau</a>, an excellent collection of Thoreau’s best works, edited by Jeffrey S. Cramer.</p>

              <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Portable-Thoreau-Penguin-Classics/dp/0143106503?&linkCode=ll1&tag=philosophybre-20&linkId=e5dc7b0787339bc1dabfe2323cdbbd07&language=en_US&ref_=as_li_ss_tl">The Portable Thoreau</a> contains the full text of <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/0199538069?&linkCode=ll1&tag=philosophybre-20&linkId=b62a1da62168eb739b2378f057473c1d&language=en_US&ref_=as_li_ss_tl">Walden</a>, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Civil-Disobedience-Henry-David-Thoreau/dp/1619490927?&linkCode=ll1&tag=philosophybre-20&linkId=70bf7c9c66423631756257876ad74550&language=en_US&ref_=as_li_ss_tl ">Civil Disobedience</a>, as well as some of his most thoughtful and celebrated essays, including <i>Walking</i>, <i>The Last Days of John Brown</i>, and <i>Life Without Principle</i>.</p>

              <p>It also contains extracts from his journal, as well as his books <i>The Maine Woods</i>, in which he recounts the interior and exterior discoveries from three separate visits, and <i>Cape Cod</i>, where he reports his reflections while walking along the Massachusetts coastline.</p>

              <p><a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/Portable-Thoreau-Penguin-Classics/dp/0143106503?&linkCode=ll1&tag=philosophybre-20&linkId=e5dc7b0787339bc1dabfe2323cdbbd07&language=en_US&ref_=as_li_ss_tl">The Portable Thoreau</a> also treats us to 18 of Thoreau’s poems, as well as a scholarly introduction, biographical sketch, and epilogue.</p>

              <p>If you’re looking to get into Thoreau’s work, this edition is a great option.</p>


              <h2>5. Henry David Thoreau: A Life, by Laura Dassow Walls</h2>
              <BookLink title="Henry David Thoreau: A Life" author="Laura Dassow Walls" link="https://www.amazon.com/dp/022634469X?&linkCode=ll1&tag=philosophybre-20&linkId=423414af23a8ebb8863c56cebb6578d5&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />

              <p>If you’re looking to learn more about the life Thoreau lived and the events that shaped his work, Laura Dassow Walls’s <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/022634469X?&linkCode=ll1&tag=philosophybre-20&linkId=423414af23a8ebb8863c56cebb6578d5&language=en_US&ref_=as_li_ss_tl">Henry David Thoreau: A Life</a> is a luminous biography, excellently researched and engagingly written.</p>

              <p>Walls charts Thoreau’s fascinating life from cradle to grave, and provides exceptional contextual detail throughout — including the untimely death of his brother, his days as a Harvard student, his association with the Transcendentalism and intellectual circle of Ralph Waldo Emerson, his radical politics, his environmentalism, and what his brilliant prose says about America then and now.</p> 

              <p>Walls writes,</p>

              <blockquote><p>The Thoreau I sought was not in any book, so I wrote this one.</p></blockquote>

              <p>Indeed, <a target="_blank" rel="noopener noreferrer sponsored" href="https://www.amazon.com/dp/022634469X?&linkCode=ll1&tag=philosophybre-20&linkId=423414af23a8ebb8863c56cebb6578d5&language=en_US&ref_=as_li_ss_tl">Henry David Thoreau: A Life</a> is a masterly tribute to the life and work of one of America’s greatest thinkers.</p>
              
              <p>If you like Thoreau, this brilliant biography will only enrich and deepen your appreciation of his work.</p>
              
              <h2>Further reading</h2>
              <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> or <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram</a>.</p>
              <CtaReadingList />
          </div>

          {/*sidebar*/}
          <Sidebar />

        </div>
        
        {/*post reading list*/}
        <PostReadingList />

    </Layout>
    </>
  )
}

export const query = graphql`{
  title: file(relativePath: {eq: "thoreau.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "thoreau-walden.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "thoreau-civil.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "thoreau-journal.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "thoreau-portable.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "thoreau-bio.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList