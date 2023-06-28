import React from "react"

import WatermarkBreak from "./watermarkBreak"
import SubscriptionForm from "./subscriptionForm"
import PanelArticleList from "./panelArticleList"
import WelcomeEmailPanel from "./welcomeEmailPanel"

const PostReadingList = () => (
    <>
        <WatermarkBreak />
        <div id="post-article-height">
            <WelcomeEmailPanel />
            <PanelArticleList />
            <SubscriptionForm />
        </div>
    </>
)

export default PostReadingList