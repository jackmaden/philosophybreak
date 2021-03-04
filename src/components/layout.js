import React from "react"

import "./layout.css"
import Footer from "./footer"

require('typeface-spectral')
require('typeface-public-sans')

export default ({ children }) => (
    <>
        {children}
        <Footer />
    </>
)