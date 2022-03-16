import React from "react"

import WatermarkBreak from "./watermarkBreak"
import SubscriptionForm from "./subscriptionForm"
import PanelArticleList from "./panelArticleList"
import PanelLBQ from "./panelLBQ"
import PanelNietzsche from "./panelNietzsche"

const PostReadingList = () => (
    <>
        <WatermarkBreak />
        <div id="post-article-height">
            <PanelNietzsche />
            <PanelLBQ />
            <PanelArticleList />
            <SubscriptionForm />
        </div>
    </>
)

export default PostReadingList