import React from "react"

import "./layout.css"
import Footer from "./footer"

require('typeface-spectral')
require('typeface-public-sans')

const Layout = ({ children }) => (
    <>
        {children}
        <Footer />
    </>
)

export default Layout