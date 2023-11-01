import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { WelcomeEmailForm } from "./welcomeEmailForm"

const BigSubscribe = () => (   
    <div className="course-promo darkradial-background subscribe text-center" style={{paddingTop: "28px"}}>
        <StaticImage src="../images/weekly-break.png" alt="weekly emails from Philosophy Break" placeholder="blurred" objectFit="contain" />
        <h4 style={{marginTop: "0.5em"}}>Get one mind-opening philosophical idea delivered to your inbox every Sunday (free):</h4>
        <WelcomeEmailForm />
        <p className="tiny-mar-top no-mar-bottom review-font">Join 6,000+ subscribers enjoying one nugget of profundity per week. Unsubscribe any time. </p>
    </div>
)

export default BigSubscribe