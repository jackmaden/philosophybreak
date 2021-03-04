import React from "react"
import { Helmet } from "react-helmet"

export default () => (
    <>
        {/*add mailchimp script for pop up (on articles & reading lists)*/}
        <Helmet> 
            <script id="mcjs">
                {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/6f4dbbebde3dd2a464df28ec3/f6066ffdce5ea9f0e24266c9f.js");`}
            </script>
        </Helmet>
    </>
)