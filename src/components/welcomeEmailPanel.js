import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import { WelcomeEmailForm } from "./welcomeEmailForm";

const WelcomeEmailPanel = () => (   
            <div className="darkradial-background mid-pad">
                <div className="two-col big-2-col row-reverse page-center">
                    <div className="mobile-center">
                    <span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg>WEEKLY EMAILS</span><div className="separator course wider mobile-center-margin"></div>
                        <h3 className="medium-big">Get one mind-opening philosophical idea distilled to your inbox every Sunday (free)</h3>
                        <StaticImage className="desktop-no-display" src="../images/weekly-break.png" alt="Philosophy Basics" placeholder="blurred" layout="fullWidth" />
                        <p className="large-grey-font" style={{marginBottom: 0}}>From the Buddha to Nietzsche: join 9,000+ subscribers enjoying a nugget of profundity from the great philosophers every Sunday:</p>
                        <WelcomeEmailForm />
                        <p className="tiny-mar-top no-mar-bottom review-font"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <span style={{fontSize: "14px"}}>(50+ reviews for Philosophy Break). Unsubscribe any time.</span></p>
                    </div>
                    <div className="mobile-no-display">
                        <StaticImage src="../images/weekly-break.png" alt="Philosophy Basics" placeholder="blurred" layout="fullWidth" />
                    </div>
                </div>
            </div>
        )

export default WelcomeEmailPanel