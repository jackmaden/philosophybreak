import React from "react"

import { CoursePromoForm } from "./coursePromoForm"

const PanelPFL = props => (
        <div className={props.class + " mid-pad coursepanel"}>
            <div className="page-center text-center">
                <div className="mid-width small-pad-bottom">
                    <p className="verified no-mar-top">COMING SOON</p><br/><span className="tag time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fff" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>COURSE & COMMUNITY</span><div className="separator course chapter"></div>
                    <h1 id="pfl">Philosophies for Living: the Ultimate Guide to Choosing Your Personal Philosophy</h1>
                    <p className="spectral">Find meaning, purpose, and become a better you by exploring 7 of the world’s most influential philosophies for living — including Stoicism, Buddhism, and Existentialism. Register your interest now:</p> 
                    <CoursePromoForm />
                </div>
            </div>
        </div>     
)

PanelPFL.defaultProps = {
  class: "darkradial-background",
  flexdirection: "row",
  fill: "#fff",
}

export default PanelPFL