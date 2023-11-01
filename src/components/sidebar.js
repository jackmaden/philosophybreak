import React from "react"

import { WelcomeEmailForm } from "./welcomeEmailForm"

const Sidebar = () => (   
        <div id="sidebar">
            <div id="sidebar-subscribe" className="text-center darkradial-background small-mar-bottom" style={{marginTop: '5px'}}>
                <h5>Get one mind-opening philosophical idea distilled to your inbox every Sunday (free):</h5>
                <WelcomeEmailForm />
                <p className="tiny-mar-top no-mar-bottom review-font">Join 6,000+ subscribers enjoying one nugget of profundity per week. Unsubscribe any time. </p>
            </div>
        </div>
)

export default Sidebar