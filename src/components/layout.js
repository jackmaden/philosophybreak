import React from "react"

import { Script } from "gatsby"

import "./layout.css"

require('typeface-spectral')
require('typeface-public-sans')

const Layout = ({ children }) => (
    <>
        
        {/*MEDIAVINE*/}
        <Script type="text/javascript" data-noptimize="1" data-cfasync="false" src="//scripts.mediavine.com/tags/philosophy-break.js" />

        {/*CONVERTKIT FORM - put this here in the head to hopefully make convertkit forms show the success message rather than redirecting*/}
        <Script src="https://f.convertkit.com/ckjs/ck.6.js" />

        {children}
    </>
)

export default Layout