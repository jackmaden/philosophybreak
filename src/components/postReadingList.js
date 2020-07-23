import React from "react"

import WatermarkBreak from "./watermarkBreak"
import { SubscriptionForm } from "./subscriptionForm"
import PanelArticleList from "./panelArticleList"
import PanelAboutUs from "./panelAboutUs"
import PanelInstagram from "./panelInstagram"

export default () => (
    <>
        <WatermarkBreak />
        <div id="post-article-height">
            <SubscriptionForm />
            <PanelInstagram />
            <PanelArticleList />
            <PanelAboutUs />
        </div>
    </>
)