import React from "react"
import { StaticImage } from "gatsby-plugin-image";

const JackHeadshot = () => (   
    <div className="advisory" style={{justifyContent:"center", marginTop: "2em"}}>
        <div className="member" style={{width:"150px"}}>
            <StaticImage src="../images/jackmaden.jpg" alt="Jack Maden" placeholder="blurred" width={300} />
            <p>Jack Maden<span className="small-grey-font" style={{lineHeight: "1.3"}}>Founder<br/>Philosophy Break</span></p>
        </div>
    </div>
        )

export default JackHeadshot


