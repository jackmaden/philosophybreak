import React from "react"

import "./layout.css"
import { Navigation } from "./navigation"
import Footer from "./footer"

require('typeface-spectral')

export default ({ children }) => (
    <div>
        <Navigation />
            {children}
        <Footer />
    </div>
)