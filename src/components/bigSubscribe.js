import React from "react"

import { WelcomeEmailForm } from "./welcomeEmailForm"

const BigSubscribe = () => (   
    <div className="course-promo darkradial-background subscribe text-center" style={{paddingTop: "28px"}}>
        <h4 style={{marginTop: "0.5em"}}>In one concise email each Sunday, I break down a famous idea from philosophy. You get the distillation straight to your inbox:</h4>
        <WelcomeEmailForm />
        <p className="tiny-mar-top no-mar-bottom review-font">💭 One short philosophical email each Sunday. Unsubscribe any time.</p>
    </div>
)

export default BigSubscribe