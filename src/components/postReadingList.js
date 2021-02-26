import React from "react"

import WatermarkBreak from "./watermarkBreak"
import { SubscriptionForm } from "./subscriptionForm"
import PanelArticleList from "./panelArticleList"
import PanelLBQ from "./panelLBQ"

export default () => (
    <>
        <WatermarkBreak />
        <div id="post-article-height">
            <PanelLBQ />
            <PanelArticleList />
            <SubscriptionForm />
        </div>
    </>
)