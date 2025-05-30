import React from "react"
import { Link } from "gatsby"

export class HomeSubscriptionForm extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    render () {
        return (
            <div id="mc_embed_signup" className="small-pad-top">
                <form style={{marginBottom: "1em"}} action="https://philosophybreak.us19.list-manage.com/subscribe/post?u=6f4dbbebde3dd2a464df28ec3&amp;id=48d478eebf&amp;f_id=0083aae4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                    <input type="email" placeholder="Your Email Address..." ref={this.input} name="EMAIL" required/>
                    {/* hidden tags add the Philosophy Basics tag in MC */}
                	<input type="hidden" name="tags" value="4995664" />
                    <button className="button primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>Send Me Lesson #1</button>
                </form>
                <p className="tiny-mar-top"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <span style={{fontSize: "14px"}}>(100+ reviews for <Link to="/courses/">our courses</Link>). Unsubscribe any time.</span></p>
            </div>
        )
    }
}