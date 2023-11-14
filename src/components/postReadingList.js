import React from "react"

import PanelArticleList from "./panelArticleList"
import WelcomeEmailPanel from "./welcomeEmailPanel"
import AboutAuthor from "./aboutAuthor"

const PostReadingList = () => (
    <>
        <div id="post-article-height">
            <AboutAuthor />
            <WelcomeEmailPanel />
            <PanelArticleList />
        </div>
    </>
)

export default PostReadingList