import React from "react"

export class SubscriptionForm extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    render () {
        return (
            <div id="mc_embed_signup">
                <div className="page-center">
                    <form action="https://philosophybreak.us19.list-manage.com/subscribe/post?u=6f4dbbebde3dd2a464df28ec3&amp;id=48d478eebf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                        <input type="email" placeholder="Email address" ref={this.input} name="EMAIL" required/>
                        <input type="submit" value="✉  Subscribe" name="subscribe"/>
                    </form>
                    <p>Treat yourself to Philosophy Breaks direct to your inbox. Weekly emails. No spam. Unsubscribe any time.</p>
                </div>
            </div>
        )
    }
}   