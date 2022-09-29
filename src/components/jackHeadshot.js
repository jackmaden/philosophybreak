import React from "react"
import { StaticImage } from "gatsby-plugin-image";

const JackHeadshot = () => (   
    <div className="advisory" style={{"justify-content":"center", "margin-top": "2em"}}>
        <div className="member" style={{width:"150px"}}>
            <StaticImage src="../images/jackmaden.jpg" alt="Jack Maden" placeholder="blurred" width={300} />
            <p><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jackmaden_">Jack Maden</a><span class="small-grey-font" style={{"line-height" : "1.3"}}>Founder<br/>Philosophy Break</span></p>
        </div>
    </div>
        )

export default JackHeadshot


