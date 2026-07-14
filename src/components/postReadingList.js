import React from "react"

import PanelArticleList from "./panelArticleList"
import WelcomeEmailPanel from "./welcomeEmailPanel"
import AboutAuthor from "./aboutAuthor"
import Footer from "./footer"
import PanelTPP from "./panelTPP"

const PostReadingList = () => (
    <>
        <div id="post-article-height">
            <AboutAuthor />
            <WelcomeEmailPanel />
            <PanelArticleList />
            <PanelTPP />
            <Footer />
        </div>
    </>
)

export default PostReadingList