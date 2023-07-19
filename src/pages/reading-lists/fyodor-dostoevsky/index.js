import React from "react"
import { graphql, Link } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

import Seo from '../../../components/SEO'
import Layout from '../../../components/layout'
import { Navigation } from "../../../components/navigation"
import { ScrollProgressBar } from '../../../components/scrollProgressBar'
import TitleReadingList from '../../../components/titleReadingList'
import BookLink from '../../../components/bookLink'
import PostReadingList from "../../../components/postReadingList"
import CtaReadingList from "../../../components/ctaReadingList"
import BigSubscribe from "../../../components/bigSubscribe"
import Sidebar from "../../../components/sidebar"

const ReadingList = ({ data, location }) => {
  const imagePath = getSrc(data.title)
    return (
    <>
    <Seo title="Fyodor Dostoevsky Reading List – The Best 6 Books to Read" description="A curated reading list of the best books to get started with Fyodor Dostoevsky." image={imagePath} pathname={location.pathname} />
    <Layout>
    <Navigation />
        <ScrollProgressBar />
        {/*reading list title*/}
        <TitleReadingList title="Fyodor Dostoevsky" number="6" img={data.title.childImageSharp.gatsbyImageData} alt="Fyodor Dostoevsky" />
        
        {/*container for sidebar*/}
        <div id="container">
          
          {/*reading list content*/}
          <div id="break-start" className="page-center" style={{marginBottom: 48}}>

            <p><span className="big-letter">F</span>yodor Dostoevsky (1821-1881) was a Russian writer whose works greatly influenced literature and <Link to="/articles/what-is-existentialism-3-core-principles-of-existentialist-philosophy/">existentialism</Link>. Along with fellow 19th-century Russian author Leo Tolstoy, Dostoevsky is one of the most prominent literary figures in history, celebrated for his profound exploration of human psychology, morality, and the human condition.</p>

            <p>Dostoevsky stands at the intersection of literature and philosophy, wrestling with classic existential themes like suffering, guilt, freedom, responsibility, the existence of God, and the struggle for meaning. (To learn more about how such themes feature in existential philosophy generally, check out our <Link to="/articles/what-is-existentialism-3-core-principles-of-existentialist-philosophy/">short introduction to existentialism</Link>, as well as our <Link to="/reading-lists/existentialism/">reading list of existentialism’s best books</Link>).</p>
            
            <p>A genius observer of the human psyche, Dostoevsky’s characters are never merely ‘good’ or ‘bad’, but category-defying, flawed, contradictory — in other words, extremely well drawn and deeply human.</p> 
            
            <p>Philosophers and writers have been greatly inspired by Dostoevsky’s insights into the human condition. Friedrich Nietzsche, for instance, (see our <Link to="/reading-lists/friedrich-nietzsche/">reading list of Nietzsche’s best books here</Link>) wrote:</p>

            <blockquote><p>Dostoyevsky was the only psychologist from whom I had anything to learn: he belongs to the happiest windfalls of my life.</p></blockquote>

            <BigSubscribe />

            <p>This reading list consists of the best books for getting started with Fyodor Dostoevsky. After reading it, you’ll understand exactly why Dostoevsky is considered one of the greatest and most psychologically insightful writers in history.</p>

              

              <h2>1. Crime and Punishment, by Fyodor Dostoevsky</h2>
              <BookLink title="Crime and Punishment" author="Fyodor Dostoevsky" link="http://www.amazon.com/Punishment-Penguin-Classics-Fyodor-Dostoyevsky/dp/0140449132?&linkCode=ll1&tag=philosophybre-20&linkId=b0af1e213e4ec763520e95d077362e3f&language=en_US&ref_=as_li_ss_tl" img={data.one.childImageSharp.gatsbyImageData} />

              <p>Written over 11 frantic months and first published in 1866, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Punishment-Penguin-Classics-Fyodor-Dostoyevsky/dp/0140449132?&linkCode=ll1&tag=philosophybre-20&linkId=b0af1e213e4ec763520e95d077362e3f&language=en_US&ref_=as_li_ss_tl">Crime and Punishment</a> is Dostoevsky’s most famous book — and for good reason. This is arguably one of the most important novels ever written: its searing psychological depth changed perspectives on what novels could <i>do</i>.</p>
              <p>Over 720 magnificent pages, Dostoevsky tells the story of Raskolnikov, a destitute and desperate former student whose grappling with his own conscience makes for haunting, enthralling reading.</p>
              <p>Covering existential themes like suffering, guilt, and the possibility of meaningful redemption, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Punishment-Penguin-Classics-Fyodor-Dostoyevsky/dp/0140449132?&linkCode=ll1&tag=philosophybre-20&linkId=b0af1e213e4ec763520e95d077362e3f&language=en_US&ref_=as_li_ss_tl">Crime and Punishment</a> is simply a must read for anyone interested in Dostoevsky, philosophical literature, or literature generally.</p>

              <h2>2. Notes from Underground, by Fyodor Dostoevsky</h2>
              <BookLink title="Notes from Underground" author="Fyodor Dostoevsky" link="http://www.amazon.com/Underground-Vintage-Classics-Fyodor-Dostoevsky/dp/067973452X?&linkCode=ll1&tag=philosophybre-20&linkId=8561d74023a1dae1777cfc4aec6afc70&language=en_US&ref_=as_li_ss_tl" img={data.two.childImageSharp.gatsbyImageData} />

              <p>If you’re keen to get into Dostoevsky, but not sure about diving into one of his longer works straight away, then his 1864 novella <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Underground-Vintage-Classics-Fyodor-Dostoevsky/dp/067973452X?&linkCode=ll1&tag=philosophybre-20&linkId=8561d74023a1dae1777cfc4aec6afc70&language=en_US&ref_=as_li_ss_tl">Notes from Underground</a> is the perfect place to start.</p>
              <p>The unnamed narrator of <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Underground-Vintage-Classics-Fyodor-Dostoevsky/dp/067973452X?&linkCode=ll1&tag=philosophybre-20&linkId=8561d74023a1dae1777cfc4aec6afc70&language=en_US&ref_=as_li_ss_tl">Notes from Underground</a> is one of the most distinctive voices in literature, characterized by all the classic themes you expect to find in a work by Dostoevsky: isolation, suffering, and existential angst.</p>
              <p>A masterclass in exploring humanity’s irrational and self-contradictory nature, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Underground-Vintage-Classics-Fyodor-Dostoevsky/dp/067973452X?&linkCode=ll1&tag=philosophybre-20&linkId=8561d74023a1dae1777cfc4aec6afc70&language=en_US&ref_=as_li_ss_tl">Notes from Underground</a> belongs on the bookshelf of anyone interested in Dostoevsky.</p>


              <h2>3. The Brothers Karamazov, by Fyodor Dostoevsky</h2>
              <BookLink title="The Brothers Karamazov" author="Fyodor Dostoevsky" link="http://www.amazon.com/Brothers-Karamazov-Novel-Parts-Epilogue/dp/0140449248?&linkCode=ll1&tag=philosophybre-20&linkId=31e8067bf7127f2ca3a43e6f89f5273d&language=en_US&ref_=as_li_ss_tl" img={data.three.childImageSharp.gatsbyImageData} />

              <p>While <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Punishment-Penguin-Classics-Fyodor-Dostoyevsky/dp/0140449132?&linkCode=ll1&tag=philosophybre-20&linkId=b0af1e213e4ec763520e95d077362e3f&language=en_US&ref_=as_li_ss_tl">Crime and Punishment</a> is Dostoevsky’s most famous novel, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Brothers-Karamazov-Novel-Parts-Epilogue/dp/0140449248?&linkCode=ll1&tag=philosophybre-20&linkId=31e8067bf7127f2ca3a43e6f89f5273d&language=en_US&ref_=as_li_ss_tl">The Brothers Karamazov</a> is often touted as his masterpiece.</p>
              <p>Sigmund Freud described it as the “most magnificent novel ever written.” The writer Joyce Carol Oates, meanwhile, notes:</p>
              <blockquote><p>There is no writer who better demonstrates the contradictions and fluctuations of the creative mind than Dostoevsky, and nowhere more astonishingly than in The Brothers Karamazov.</p></blockquote>
              <p>First published in 1880, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Brothers-Karamazov-Novel-Parts-Epilogue/dp/0140449248?&linkCode=ll1&tag=philosophybre-20&linkId=31e8067bf7127f2ca3a43e6f89f5273d&language=en_US&ref_=as_li_ss_tl">The Brothers Karamazov</a> — packed with darkly wonderful prose — follows the lives of three brothers, each battling their own personal demons. One of its key themes is “if God does not exist, then everything is permitted.”</p>
              
              <p>Dostoevsky’s most sustained investigation into the depths of humanity and the meaning of life, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Brothers-Karamazov-Novel-Parts-Epilogue/dp/0140449248?&linkCode=ll1&tag=philosophybre-20&linkId=31e8067bf7127f2ca3a43e6f89f5273d&language=en_US&ref_=as_li_ss_tl">The Brothers Karamazov</a> is epic in length, scope, and reputation, rendering it necessary for any Dostoevsky collection.</p>


              <h2>4. The Idiot, by Fyodor Dostoevsky</h2>
              <BookLink title="The Idiot" author="Fyodor Dostoevsky" link="http://www.amazon.com/Idiot-Vintage-Classics-Fyodor-Dostoevsky/dp/0375702245?&linkCode=ll1&tag=philosophybre-20&linkId=8479775d2452333678e48c3ba2e576aa&language=en_US&ref_=as_li_ss_tl" img={data.four.childImageSharp.gatsbyImageData} />

              <p>While <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Punishment-Penguin-Classics-Fyodor-Dostoyevsky/dp/0140449132?&linkCode=ll1&tag=philosophybre-20&linkId=b0af1e213e4ec763520e95d077362e3f&language=en_US&ref_=as_li_ss_tl">Crime and Punishment</a> portrays the struggles of a guilty man, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Idiot-Vintage-Classics-Fyodor-Dostoevsky/dp/0375702245?&linkCode=ll1&tag=philosophybre-20&linkId=8479775d2452333678e48c3ba2e576aa&language=en_US&ref_=as_li_ss_tl">The Idiot</a> (written immediately after the former, and first published in 1869) portrays the struggles of a man of perfect innocence.</p>
              <p>Taken together, the two books thus form a brilliant critique of society from the perspectives of saint and sinner. In a civilization obsessed with money, power, and manipulation, how are we supposed to live?</p>
              <p>While not as famous as <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Punishment-Penguin-Classics-Fyodor-Dostoyevsky/dp/0140449132?&linkCode=ll1&tag=philosophybre-20&linkId=b0af1e213e4ec763520e95d077362e3f&language=en_US&ref_=as_li_ss_tl">Crime and Punishment</a>, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Idiot-Vintage-Classics-Fyodor-Dostoevsky/dp/0375702245?&linkCode=ll1&tag=philosophybre-20&linkId=8479775d2452333678e48c3ba2e576aa&language=en_US&ref_=as_li_ss_tl">The Idiot</a> is a wonderful companion to it, and contains some of Dostoevsky’s most lucid and moving prose.</p>


              <h2>5. Demons, by Fyodor Dostoevsky</h2>
              <BookLink title="Demons" author="Fyodor Dostoevsky" link="http://www.amazon.com/Demons-Novel-Three-Vintage-Classics/dp/0679734511?&linkCode=ll1&tag=philosophybre-20&linkId=9d5a85c493beeafd3f96932ff920090f&language=en_US&ref_=as_li_ss_tl" img={data.five.childImageSharp.gatsbyImageData} />

              <p>One of his more complex and challenging novels, Dostoevsky’s <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Demons-Novel-Three-Vintage-Classics/dp/0679734511?&linkCode=ll1&tag=philosophybre-20&linkId=9d5a85c493beeafd3f96932ff920090f&language=en_US&ref_=as_li_ss_tl">Demons</a> was inspired by the true story of a political murder that horrified Russia in 1869.</p> 
              <p>Dostoevsky ferociously satirizes the political ideology bubbling at the time, yet also manages to incorporate more universal themes on human nature, the existence of God, and ultimately (as always!) the meaning and purpose of life.</p>
              <p>While somewhat less accessible than some of the other novels on this list, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Demons-Novel-Three-Vintage-Classics/dp/0679734511?&linkCode=ll1&tag=philosophybre-20&linkId=9d5a85c493beeafd3f96932ff920090f&language=en_US&ref_=as_li_ss_tl">Demons</a> is nevertheless a deeply rewarding read for anyone interested in why Dostoevsky is recognized as one of the greatest writers of all time.</p>


              <h2>6. Notes from a Dead House, by Fyodor Dostoevsky</h2>
              <BookLink title="Notes from a Dead House" author="Fyodor Dostoevsky" link="http://www.amazon.com/Notes-Dead-House-Vintage-Classics/dp/0307949877?&linkCode=ll1&tag=philosophybre-20&linkId=bc41b46e49c150ddd2539953ac696229&language=en_US&ref_=as_li_ss_tl" img={data.six.childImageSharp.gatsbyImageData} />

              <p>In 1849, before writing any of his major works, Dostoevsky was sentenced to four years of hard labor in a Siberian prison camp for participating in a socialist discussion group.</p>
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Notes-Dead-House-Vintage-Classics/dp/0307949877?&linkCode=ll1&tag=philosophybre-20&linkId=bc41b46e49c150ddd2539953ac696229&language=en_US&ref_=as_li_ss_tl">Notes from a Dead House</a> (also translated as House of the Dead, and first published in 1861) is Dostoevsky’s personal memoir from that time, thinly disguised as a piece of fiction to elude government censors.</p>
              <p>Immediately before Siberia, Dostoevsky was subject to a mock execution: he and his fellow prisoners were lined up and told they would be shot. The trauma of this experience — lining up, believing it to be the end — infuses Dostoevsky’s prose with a fierce, desperate energy that went on to inform not just <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Notes-Dead-House-Vintage-Classics/dp/0307949877?&linkCode=ll1&tag=philosophybre-20&linkId=bc41b46e49c150ddd2539953ac696229&language=en_US&ref_=as_li_ss_tl">Notes from a Dead House</a> but all of Dostoevsky’s subsequent writing. (Dostoevsky specifically describes what he believed to be the last moments of his life, for instance, through his protagonist in <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Idiot-Vintage-Classics-Fyodor-Dostoevsky/dp/0375702245?&linkCode=ll1&tag=philosophybre-20&linkId=8479775d2452333678e48c3ba2e576aa&language=en_US&ref_=as_li_ss_tl">The Idiot</a>).</p>
              <p>Far from a relentlessly bleak lament on Dostoevsky’s terrible Siberian experiences, however, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Notes-Dead-House-Vintage-Classics/dp/0307949877?&linkCode=ll1&tag=philosophybre-20&linkId=bc41b46e49c150ddd2539953ac696229&language=en_US&ref_=as_li_ss_tl">Notes from a Dead House</a> is filled with gallows humor and meditations on human freedom. “The prisoner himself knows that he is a prisoner,” Dostoevsky writes, “but no brands, no fetters will make him forget that he is a human being.”</p>
              <p><a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Notes-Dead-House-Vintage-Classics/dp/0307949877?&linkCode=ll1&tag=philosophybre-20&linkId=bc41b46e49c150ddd2539953ac696229&language=en_US&ref_=as_li_ss_tl">Notes from a Dead House</a> is the book that relaunched Dostoevsky’s literary career following his imprisonment in Siberia, making him a celebrity in the creative salons of Saint Petersburg, and setting him up to write his major works.</p>
              <p>If you’re interested not just in Dostoevsky’s novels, but in the key events that shaped his life and writing, <a target="_blank" rel="noopener noreferrer sponsored" href="http://www.amazon.com/Notes-Dead-House-Vintage-Classics/dp/0307949877?&linkCode=ll1&tag=philosophybre-20&linkId=bc41b46e49c150ddd2539953ac696229&language=en_US&ref_=as_li_ss_tl">Notes from a Dead House</a> is for you.</p>

              <h2>Further reading</h2>
              <p>Are there any other books you think should be on this list? Let us know <a href="mailto:hello@philosophybreak.com">via email</a> or drop us a message on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">Twitter</a> or <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">Instagram</a>.</p>
              <CtaReadingList />
          </div>

          <Sidebar />

        </div>
        
        {/*post reading list*/}
        <PostReadingList />

    </Layout>
    </>
  )
}

export const query = graphql`{
  title: file(relativePath: {eq: "dostoevsky.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  one: file(relativePath: {eq: "dost-crim.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  two: file(relativePath: {eq: "dost-notes.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  three: file(relativePath: {eq: "dost-brothers.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  four: file(relativePath: {eq: "dost-idiot.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  five: file(relativePath: {eq: "dost-dem.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
  six: file(relativePath: {eq: "dost-house.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 230, layout: CONSTRAINED)
    }
  }
}
`

export default ReadingList