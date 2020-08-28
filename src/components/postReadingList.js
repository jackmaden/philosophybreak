import React from "react"

import WatermarkBreak from "./watermarkBreak"
import { SubscriptionForm } from "./subscriptionForm"
import PanelArticleList from "./panelArticleList"
import PanelAboutUs from "./panelAboutUs"

export default () => (
    <>
        <WatermarkBreak />
        <div id="post-article-height">
            <SubscriptionForm />
            <PanelArticleList />
            <PanelAboutUs />
        </div>
    </>
)