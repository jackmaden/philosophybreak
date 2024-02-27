import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { WelcomeEmailForm } from "./welcomeEmailForm"

const BigSubscribe = () => (   
    <div className="course-promo darkradial-background subscribe text-center" style={{paddingTop: "28px"}}>
        <StaticImage src="../images/weekly-break.png" alt="weekly emails from Philosophy Break" placeholder="blurred" objectFit="contain" />
        <h4 style={{marginTop: "0.5em"}}>From the Buddha to Nietzsche: join 10,000+ subscribers enjoying my free Sunday Breakdown</h4>
        <p className="small-grey-font no-mar-bottom">In one concise email each Sunday, I break down a famous idea from philosophy. You get the distillation straight to your inbox.</p>
        <WelcomeEmailForm />
        <p className="tiny-mar-top no-mar-bottom review-font">💭 One short philosophical email each Sunday. Unsubscribe any time.</p>
    </div>
)

export default BigSubscribe