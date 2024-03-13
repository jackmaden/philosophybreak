import React from "react"

import PanelArticleList from "./panelArticleList"
import WelcomeEmailPanel from "./welcomeEmailPanel"
import AboutAuthor from "./aboutAuthor"
import Footer from "./footer"

const PostReadingList = () => (
    <>
        <div id="post-article-height">
            <AboutAuthor />
            <WelcomeEmailPanel />
            <PanelArticleList />
            <Footer />
        </div>
    </>
)

export default PostReadingList