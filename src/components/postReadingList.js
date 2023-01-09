import React from "react"

import WatermarkBreak from "./watermarkBreak"
import SubscriptionForm from "./subscriptionForm"
import PanelArticleList from "./panelArticleList"
import PanelLBQ from "./panelLBQ"
import PanelPFL from "./panelPFL"
import PanelNietzsche from "./panelNietzsche"

const PostReadingList = () => (
    <>
        <WatermarkBreak />
        <div id="post-article-height">
            <PanelPFL />
            <PanelNietzsche flexdirection="row" />
            <PanelLBQ flexdirection="row-reverse" />
            <PanelArticleList />
            <SubscriptionForm />
        </div>
    </>
)

export default PostReadingList