import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Seo from '../../components/SEO'
import Layout from '../../components/layout'
import { NavigationSimple } from "../../components/navigationSimple"
import Footer from "../../components/footer";

const Page = ({ data, location }) => {

    const imagePath = getSrc(data.seo)

    return (
    <>
    <Seo title="The Philosophy Prescription: Lessons from Big Thinkers for Every Stage of Life, by Jack Maden" description="The Philosophy Prescription invites you to join the millennia-spanning philosophical community on a shared search for answers." image={imagePath} pathname={location.pathname} />
    <Layout>
    <NavigationSimple bg="light-bg" />

         {/*page title*/}
         <div id="top" className="top-title grey-background home">
          <div className="two-col massive-1-col page-center">
            <div>
              <GatsbyImage
                image={data.home.childImageSharp.gatsbyImageData} className="tpp-margin"
                alt="The Philosophy Prescription, by Jack Maden" loading="eager" />
            </div>
            <div>
            <p className="verified no-mar-top">NEW!</p><span className="tag time new" style={{color: "#001d30"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"></path></svg>BOOK</span><div className="separator course new book"></div>
            <h1 id="smaller">The Philosophy Prescription: Lessons from Big Thinkers for Every Stage of Life</h1>
            <div className="small-mar book-review">By Jack Maden | Released 3rd September 2026</div>
            <p className="small-grey-font"><b>How might philosophy actually inform our lives?</b> <i>The Philosophy Prescription</i> matches key ideas from ancient and contemporary thinkers to sixteen common life stages. From being someone’s child and experiencing first love, to navigating friendships, families, careers, money, memory, <i>ennui</i>, grief, and impermanence: whatever you’re facing in life, here you’ll find remedies from thousands of years of philosophical thought to challenge, reframe, and enrich your perspective.</p>
            <a target="_blank" rel="noopener noreferrer" className="button primary full-width top-icon-align" href="https://www.penguin.co.uk/books/471237/the-philosophy-prescription-by-maden-jack/9781911742005">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>Order via Penguin Random House</a>
            <AnchorLink className="no-hover" href="#extract"><button className="button secondary full-width top-icon-align"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"/></svg>Explore Contents & Read Extract</button></AnchorLink>
            </div>
            
          </div>
          {/*testimonial*/}
          <div className="grey-background small-pad mid-pad-bottom">
            <div className="page-center text-center">
                <h5 className="heading-lines">“You didn’t ask to be born, but now you’re here, you have questions - about relationships, work, aging, illness, death, and how to live. In <i>The Philosophy Prescription</i>, Jack Maden draws on the insights of philosophers throughout history to answer existential questions and encourage us to ask them. <b>A wonderfully accessible, wide-ranging introduction to philosophy as a guide for life.</b>”</h5><div className="small-mar-top book-review">— Professor Kieran Setiya, author of <i>Life is Hard: How Philosophy Can Help Us Find Our Way</i></div>
                <div className="separator" style={{margin: "54px auto"}}></div>
                <h5 className="heading-lines">“This is a truly welcome addition to the popular-philosophy genre: <b>deep, wise and wide in range</b>, yet both <b>accessible and strikingly relevant</b> in what it draws from the rich tradition of philosophy's insights into life and its challenges. <b>Greatly to be recommended.</b>”</h5><div className="small-mar-top book-review">— Professor A. C. Grayling, author of <i>The History of Philosophy</i></div>          
                <div className="separator" style={{margin: "54px auto"}}></div>
                <h5 className="heading-lines">“Written with <b>bright energy, accessible and full of insight</b>, this book will serve anyone wanting to engage philosophically with the human life cycle and their place within it. This book cleverly connects ideas of philosophers from different historical periods and traditions, to shed light on the arch of life.”</h5><div className="small-mar-top book-review">— Havi Carel, <i>Professor of Philosophy, University of Bristol</i></div>
                <div className="separator" style={{margin: "54px auto"}}></div>
                <h5 className="heading-lines">“A primer on the best thoughts - and best questions - humanity has ever had. <b>An engaging read, full of wisdom. You'll revisit it over and over again.</b>”</h5><div className="small-mar-top book-review">— Professor Scott Hershovitz, author of <i>Nasty, Brutish and Short: Adventures in Philosophy With Kids</i></div>
                <div className="separator" style={{margin: "54px auto"}}></div>
                <h5 className="heading-lines">“<i>The Philosophy Prescription</i> proves that philosophy isn't for stuffy academics in ivory towers and woolly cardigans - it's for everyone. <b>Maden has a rare talent for being able to translate huge and complex ideas into something we can all understand and apply to our lives.</b> In here you'll find ancient wisdom from the titans of the philosophical canon alongside curious tidbits from the dusty obscura at the back of the bookshop. <b>Every page offers something to think about, something to try, or something to take into the rest of your day. An utter gem of a book - wise, warm, and quietly life-changing.</b>”</h5><div className="small-mar-top book-review">— Jonny Thomson, author of <i>Mini Philosophy</i></div>
                
                
            </div>
          </div>
        </div>

        {/*CONTENTS*/}

        <div className="large-pad">
        

          <div className="page-center small-pad-top">
              <h3>Contents of <i>The Philosophy Prescription</i>:</h3>  
            {/*<div className="two-col mid-mar book-contents" style={{alignItems: 'flex-start'}}>
              <div>*/}
              <div className="book-contents large-mar-top">
                <div id="break-start" className="page-center">
                  <p><i>Introduction</i></p>
                  <h4>THE BEGINNING</h4>
                  <p>1. Arriving with Fresh Eyes<span>ft. Bryan Magee, Rachel Carson, Scott Hershovitz,
Socrates, and Bertrand Russell</span></p>
                  <p>2. Being Someone's Child<span>ft. Confucius, Jane English, and Brynn Welch</span></p>
                  <p>3. Learning to be Good<span>ft. Jeremy Bentham, Immanuel Kant, and
Virtue Ethicists</span></p>
                  <p>4. Trying to Make Friends<span>ft. Aristotle, Epicurus, Arthur Schopenhauer,
and Iris Murdoch</span></p>
                  <p>5. Falling in Love<span>ft. Plato, Erich Fromm, and Simone de Beauvoir</span></p>
                  <p>6. Wondering What to Do<span>ft. Ruth Chang, Friedrich Nietzsche, and Daoism</span></p>
                  <h4>THE MIDDLE</h4>
                  <p>7. Working a Job<span>ft. Elizabeth Anderson, Hannah Arendt, and
Byung-Chul Han</span></p>
                  <p>8. Worrying about Money<span>ft. Epicurus, Seneca, Martha Nussbaum, and
Ubuntu Philosophy</span></p>
                  <p>9. Deciding Whether to Have Children<span>ft. David Benatar and Laurie Ann Paul</span></p>
          
              
                <p>10. Changing the World<span>ft. Peter Singer, Arne Næss, Simone Weil,
and the Stoics</span></p>
                  <p>11. Hitting a Midlife Crisis<span>ft. Albert Camus, Thomas Nagel, Susan Wolf,
and Kieran Setiya</span></p>
                <h4>THE END</h4>
                <p>12. Losing Someone Dear<span>ft. St. Augustine, the Stoics, Zhuangzi, and
Michael Cholbi</span></p>
                <p>13. Handling Retirement<span>ft. Simone de Beauvoir, Aristotle, and Bertrand
Russell</span></p>
                <p>14. Reflecting on the Past<span>ft. Galen Strawson, Thich Nhat Hanh, and
William B. Irvine</span></p>
                <p>15. Living with Illness<span>ft. Havi Carel, Maurice Merleau-Ponty, and
Epictetus</span></p>
                <p>16. Facing Impermanence<span>ft. Martin Heidegger, Lucretius, Kenko, and
Montaigne</span></p>
                <p><i>Afterword: Living Philosophy</i></p>
                <p><i>Further Reading</i></p>
                <p><i>Acknowledgements</i></p>
                <p><i>Notes</i></p>
              </div>
              </div>
          </div>

        </div>

        {/*EXTRACT*/}

        <div className="large-pad-bottom" id="extract">
          <div className="page-center">
            <h3>Extract from the introduction of <i>The Philosophy Prescription</i>:</h3>
            <p></p>
          </div>
          <div className="page-center book-format small-pad-top" id="break-start">
            <h2 className="main">INTRODUCTION</h2>
            <p className="mid-pad-top large-pad-bottom book-quote"><i>“You think your pain and your heartbreak are unprecedented in the history of the world, but then you read.”</i><br/><span style={{fontSize: '0.95rem', letterSpacing: 1.1}}>JAMES BALDWIN</span></p>
              <p style={{textIndent: 0}}>When faced with life’s most difficult existential questions and
milestones, we often feel alone. <i>Who am I? What should I value?
Why should I go on?</i></p>
<p>While they <i>feel</i> personal, however, many of the anxieties,
disappointments, and uncertainties in our lives – from wondering if our occupations give us the meaning we need, to not
being able to come to terms with death – are in fact universal.
And philosophers have had incredibly insightful things to say
about our shared existential problems for thousands of years.</p>
<p>This book is a collection of those insights, distilled and
organised according to life’s common stages and challenges.
It’s the result of a decade spent excavating nuggets of wisdom
from philosophy’s 2,500-year written history – work I’ve treasured doing as the founder of Philosophy Break, an online
social enterprise dedicated to making philosophy accessible.
That you’ve picked up this book and begun reading these
words suggests you’re someone who strives to live a happy,
meaningful, and fulfilling life; and, if so, I can assure you that
you’re in good company here. My hope is that the thinkers within these pages will offer you something useful, enlightening, or at least thought-provoking, no matter who or where
you are in life, nor your prior exposure to philosophy.</p>
<p>My own route to the remedies of philosophy was more
of a route <i>back</i>. Close to a decade ago, when I was in my late
twenties, I found myself unfulfilled by my career in tech, frustrated by the perceived shallowness of daily life, and generally
feeling adrift in the world. Having received great satisfaction
from studying philosophy to master’s level at university, I
thought re-engaging with the subject might help me address
the bubbling existential angst I’d been feeling in the years
since graduation. I set about re-reading the greats, researching new work, and – in the gaps around my day job – writing
about my philosophical (re)discoveries online. Maybe the
ideas I found particularly resonant would do something for
others, too. Whether I was presenting seventeenth-century
thinker Baruch Spinoza on why anything exists, or the existentialist Simone de Beauvoir on what makes for true love,
I sought to offer short, reflective ‘philosophy breaks’: small
clearings in which to rest, catch our breath, and wonder at
being alive.</p>
<p>To my delight, the project struck a chord. Fast forward
to today, and Philosophy Break (philosophybreak.com) now
attracts millions of visits annually. Thanks to weekly discussions with the Philosophy Break community, some of whose
brilliant contributions feature throughout this book, my
own existential angst has quietened, for I have never felt so
engaged and connected to life and humanity. It’s not so much
the answers, but the shared <i>search</i> for answers, that is most
affirming and gratifying.</p>
<p><i>The Philosophy Prescription</i> is a celebration of that shared search: of the ongoing, millennia-spanning conversation
between beings who find themselves inexplicably <i>here</i>, breathing oxygen on a gigantic rock. The ultimate prescription of
philosophy, in my view, is that it encourages each of us to participate in this conversation. With its direct, unashamed focus
on the oft-unacknowledged strangeness of everyday life, it
assures us that <i>none of us are alone</i> with our unspoken concerns.
Billions of us are here together with no clear consensus on
why anything exists, no universally approved manual for what
to do <i>while</i> we exist, and a generally mute denial about our
own upcoming non-existence. Philosophy is simply the space
where we commit to an honest dialogue about this situation.
It’s the good-faith attempt to cut to the heart of the matter
at hand. We don’t have to only dare talk about our existential curiosities and discomforts after a few drinks, or late at
night, or at moments of crisis. Nor do we have to surrender
to dogma, convention, or nihilism. An entire intellectual tradition awaits us: we can navigate our love lives with the ancient
Greek philosopher Plato (Chapter 5); we can unpick the
meaninglessness of our careers with twentieth-century thinker
Hannah Arendt (Chapter 7); and we can work through our
fear of death with classical Japanese sage Kenko (Chapter 16).</p>
<p>After all, as the Roman philosopher Seneca put it almost
2,000 years ago, ‘It is not that we have a short time to live,
but that we waste much of it.’ Philosophy can be the starting
gun to jolt us out of passing through life as if we’re only going
through the motions, living only according to the expectations of others, or by norms we’ve never really scrutinised,
let alone endorsed. Hearing our own half-formed thoughts
echoed in the words and arguments of famous thinkers can
be a powerful tonic.</p>
<p>I remember how emboldened I felt, for instance, reading
twentieth-century French thinker Albert Camus’s articulation of the daily grind. ‘Rising, streetcar, four hours in the
office or the factory, meal, streetcar, four hours of work, meal,
sleep, and Monday Tuesday Wednesday Thursday Friday and
Saturday according to the same rhythm – this path is easily
followed most of the time,’ Camus observes. ‘But one day the
“why” arises and everything begins in that weariness tinged
with amazement.’ Hunched in the tube each morning and
evening, I <i>was</i> weary and amazed. Was there a grander point
to existence I’d failed to grasp? In Chapter 11, we’ll explore
Camus’s famous response: that we must perpetually rebel
against life’s apparent meaninglessness. ‘The realisation that
life is absurd cannot be an end,’ he assures us, ‘but only a
beginning . . .’</p>
<p>I recall, too, when a few years later I was unsure what to do
at a major crossroads in my life and career, how the philosopher Laurie Ann Paul provided me with a lightbulb moment.
If you cannot know the ‘best’ path forward with a major life
decision, Paul advises in her 2014 work <i>Transformative Experience</i>, it’s often because there <i>isn’t</i> a best path: there are simply
different paths, which you’ll adapt to as you live them. All
else being equal, rather than exhausting yourself on yet more
research, cost–benefit analyses, and guesses at your future
happiness, the most rational approach is to opt for the path
you’re most interested in discovering. Paul’s influential framework eased my anxiety around plunging into the unknown,
leaving my career to pursue Philosophy Break full-time. In
Chapter 9, we’ll see how Paul applies it to the transformative
decision whether to have a child.</p>
<p>And today, whenever I feel powerless or at the mercy of global events, I bring to mind the no-nonsense advice of the
ancient Stoic philosopher Epictetus. In the <i>Enchiridion</i>, which
we’ll explore in Chapter 15, Epictetus suggests that the surest
method for an untroubled mind is to work out what we can
and can’t change, focus on the former, and reconcile ourselves
to the latter. By attaching our well-being not to wider circumstances, but to the quality of our ongoing individual contributions, we’ll be living the good life, and nobody can stop us
from doing so.</p>
<p>These brief examples only hint at the countless ways in
which wisdom from the great philosophers has enriched my
life over the years. Though I haven’t always been successful in
applying their lessons, I feel incredibly fortunate that my education in philosophy has granted me access to such a dream
team of teachers, ready to guide me at any time.</p>
<p>My hope with <i>The Philosophy Prescription</i> is that by offering
a tasting menu of the nourishment served by great thinkers
across history, more people might discover, enjoy, and benefit
from philosophy’s neglected yet empowering value. We
can liberate trapped worries and concerns from our minds
through the revelation that, somewhere, at some point in
time, from a culture like or unlike our own, a human being
shared those exact same worries and concerns, and dedicated
their intellectual life to making sense of them. Sometimes
their arguments and theories will resonate deeply, sometimes
they won’t chime with our own experience; but the cathartic
element, I think, lies in engaging at all. While they might not
always provide answers, philosophers can at least be relied
upon to elucidate what clear thinking might look like around
a particular topic. They can nudge us in the right direction.
They can get the discussion moving. They can make us feel part of a shared search, rather than isolated and alone with
our concerns.</p>
<p>There is no set guidebook for existence, but there is
comfort in simply knowing there are others out there who
have gone through all this, too. By engaging with how big
thinkers across time and culture have been as unsettled, bewildered, and determined to find answers as we are, we can
transform alienating worries into sources of union. Private,
gnawing doubts might reveal themselves to be wellsprings of
solidarity. We can become active participants in the compassionate, curious, millennia-spanning community that’s simply
here, trying to make sense of it all.</p>
<h2>WHAT YOU’LL ENCOUNTER IN THIS BOOK</h2>
<p style={{textIndent: 0}}>Academic philosophy tends to break the subject into four
major branches: epistemology (what we can know), metaphysics (the nature of reality), value theory (ethics and aesthetics), and logic (the study of correct reasoning). Here I offer a
slightly different route into the discipline, connecting philosophical ideas to some of the common phases of a human
life. Engaging with the ideas through this lens might help us
tap into and revitalise our broader personal philosophies –
because, crucially, whether we’re conscious of it or not, we
each already <i>have</i> a philosophy for life.</p>
<p>Our personal philosophies may have been shaped by
our families, cultures, religions, or perhaps we’ve formed
and affirmed them ourselves. Wherever they came from,
and regardless of how much we actively reflect on them,
we all have sets of explanations, values, and principles that underpin everything we do: from the careers we choose, to
the people we like and dislike; from the politicians we vote for,
to the pursuits that fill our free time; from the way we love,
to the way we mourn. Given their fundamental importance,
the question is: <i>are our personal philosophies working for us?</i> Are
they justified? Do we need to better define them? Are there
any enhancements we could make that would equip us to live
more meaningful, more fulfilling, more connected lives?</p>
<p><i>To philosophise</i> means adopting a critical stance and using
reason to draw conclusions. It means, for any given argument
or theory, we identify its premises, consider whether those
premises are sound, and judge the conclusion accordingly.
And this critical process is something we can apply not only
to academic topics, but to the background arguments of the
philosophies that drive our everyday lives. Philosophy can be
thought of as an <i>attitude</i>, and cultivating this attitude – this
open-minded spirit of inquiry – is the overarching prescription of this book.</p>
<p>Socrates, one of the founding figures of Western philosophy, declared that ‘the unexamined life is not worth living’5
and that life’s task is to <i>know thyself</i>. Later ancient Greek
­ thinkers – including Zeno, the founder of Stoicism, and
­ Epicurus – took on these principles to show us that through
careful and proper use of reason, we can demonstrate that
many of our common anxieties are baseless. Philosophical
inquiry can be used <i>therapeutically</i>, to relieve ourselves of false
beliefs, pointless fear, and much unnecessary suffering.</p>
<p><i>The Philosophy Prescription</i> is inspired by this ancient
therapeutic principle: that in the face of life’s challenges,
thinking philosophically can bring clarity, relief, or at least
a fresh perspective. My key additional premise is that, wonderfully, <i>we don’t have to get on with this thinking on our
own.</i> Great minds have tested the water for us. We can draw
upon this millennia-spanning community not to magically
solve our problems, but to guide, empower, and test our
thinking. In our mission to refine our personal philosophies,
we can bag ourselves a head start.</p>
<p>Each chapter of this book is a collection of such head starts,
distilling the perspectives of different thinkers – some old,
some new; some famous, some lesser-known – on a common
stage or challenge of life. My goal is not to promise a quick
fix, nor to offer an exhaustive account of the brilliant work
philosophers have done and continue to do across different
domains, but simply to introduce ideas that might deepen,
challenge, or fill in the gaps of our own living philosophies:
to offer not conversation-enders, but starters and enhancers.
While there are many more beautiful and enlightening ideas
I could have featured, and even more that await my discovery,
I hope this book will provide you with some enriching discoveries of your own.</p>
<h2>HOW TO APPROACH THE CHAPTERS</h2>
<p style={{textIndent: 0}}>While the chapters of this book are structured according to
some of the common phases of a human life, that doesn’t
mean you have to approach the topics in order. After all, they
don’t necessarily occur in the order presented! It’s not just
people in their later years who can become consumed by
Reflecting on the Past (Chapter 14), for example, and it’s not
just young people who are Falling in Love (Chapter 5). If you
are particularly invested in a certain challenge or stage – say, Trying to Make Friends (Chapter 4), Working a Job (Chapter
7), or Handling Retirement (Chapter 13) – you are free to
turn straight there.</p>
<p>However, I recommend beginning with Chapter 1,
Arriving with Fresh Eyes. It’s more introductory in nature,
reflecting on the wonder and curiosity of early childhood
to get us in the philosophical mood, and prime us for the
remainder of the book. Beyond Chapter 1, the chapters settle
into a consistent pattern, each outlining a problem or challenge, and then exploring how a few philosophers and philosophical movements might approach it. Given their more self-contained nature, you can approach them in the order
presented, or in whichever order most appeals to you. I hope
you’ll find something valuable or interesting in each; and if
you do, I suggest further reading for each chapter at the end
of the book.</p>
<p>For now, though, let us begin at the beginning. Out of
nowhere, we arrive into existence, and we arrive as natural
philosophers: curious about the world, confounded by what
we find, ready to ask ‘why’ as soon as we can . . .</p>
<div className="large-pad-top text-center">
  <div className="text-center" style={{width: '40%', display: 'inline-block'}}><GatsbyImage
                image={data.home.childImageSharp.gatsbyImageData}
                alt="The Philosophy Prescription, by Jack Maden" loading="eager" /></div>
<h3 className="small-mar">Want to continue reading <i>The Philosophy Prescription?</i></h3>
<a target="_blank" rel="noopener noreferrer" className="button primary full-width top-icon-align" href="https://www.penguin.co.uk/books/471237/the-philosophy-prescription-by-maden-jack/9781911742005">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>Order via Penguin Random House</a>
            <AnchorLink className="no-hover" href="#top"><button className="button secondary full-width top-icon-align"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/></svg>Back to Top</button></AnchorLink>

</div>
          </div>
        </div>
       



      <Footer />
        
    </Layout>
    </>
    )
}

export const query = graphql`{
    home: file(relativePath: {eq: "tpp-penguin.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
    }
    seo: file(relativePath: {eq: "tpp-peng-seo.jpg"}) {
      childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, placeholder: BLURRED)
      }
  }
}
`

export default Page