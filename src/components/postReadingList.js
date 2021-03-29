import React from "react"

import WatermarkBreak from "./watermarkBreak"
import { SubscriptionForm } from "./subscriptionForm"
import PanelArticleList from "./panelArticleList"
import PanelLBQ from "./panelLBQ"

const PostReadingList = () => (
    <>
        <WatermarkBreak />
        <div id="post-article-height">
            <PanelLBQ />
            <PanelArticleList />
            <SubscriptionForm />
        </div>
    </>
)

export default PostReadingList