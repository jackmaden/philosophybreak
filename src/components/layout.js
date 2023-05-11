import React from "react"
import { Helmet } from "react-helmet"

import "./layout.css"
import Footer from "./footer"

require('typeface-spectral')
require('typeface-public-sans')

const Layout = ({ children }) => (
    <>
        {/*cookie banner*/}
        <Helmet>
            <script type="text/javascript" src="https://app.termly.io/embed.min.js" data-auto-block="off" data-website-uuid="9e6e8835-b3fb-4631-b74a-0755bf89b753"></script>
        </Helmet>
        {children}
        <Footer />
    </>
)

export default Layout