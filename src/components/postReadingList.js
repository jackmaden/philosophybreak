import React from "react"

import SubscriptionForm from "./subscriptionForm"
import PanelArticleList from "./panelArticleList"
import WelcomeEmailPanel from "./welcomeEmailPanel"
import AboutAuthor from "./aboutAuthor"

const PostReadingList = () => (
    <>
        <div id="post-article-height">
            <AboutAuthor />
            <WelcomeEmailPanel />
            <PanelArticleList />
            <SubscriptionForm />
        </div>
    </>
)

export default PostReadingList