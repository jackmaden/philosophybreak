import React from "react"
import { Helmet } from "react-helmet"

import "./layout.css"

require('typeface-spectral')
require('typeface-public-sans')

const Layout = ({ children }) => (
    <>
        
        <Helmet>
            {/*cookie banner COMMENTED OUT FOR NOW WHILE I BUILD MY OWN
            <script async type="text/javascript" src="https://app.termly.io/embed.min.js" data-auto-block="off" data-website-uuid="9e6e8835-b3fb-4631-b74a-0755bf89b753"></script>*/}

            {/*MEDIAVINE*/}
            <script type="text/javascript" async="async" data-noptimize="1" data-cfasync="false" src="//scripts.mediavine.com/tags/philosophy-break.js" />

            {/*SPARKLOOP*/}
            <script async src="https://js.sparkloop.app/team_6e16a193d55e.js" data-sparkloop />

            {/*CONVERTKIT FORM - put this here in the head to hopefully make convertkit forms show the success message rather than redirecting*/}
            <script async src="https://f.convertkit.com/ckjs/ck.6.js" />

        </Helmet>
        {children}
    </>
)

export default Layout