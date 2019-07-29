import React from "react"

import "./layout.css"
import { Navigation } from "./navigation"
import Footer from "./footer"

require('typeface-spectral')
require('typeface-public-sans')

export default ({ children }) => (
    <div>
        <Navigation />
            {children}
        <Footer />
    </div>
)