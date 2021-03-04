import React from "react"
import { Helmet } from "react-helmet"

import "./layout.css"
import Footer from "./footer"

require('typeface-spectral')
require('typeface-public-sans')

export default ({ children }) => (
    <>
        {/*mailchimp script*/}
        <Helmet> 
            <script id="mcjs">
                {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/6f4dbbebde3dd2a464df28ec3/f6066ffdce5ea9f0e24266c9f.js");`}
            </script>
        </Helmet>
        {children}
        <Footer />
    </>
)