import React from "react"

const TopTitle = props => (
        <>
        <div className={props.class + " top-title text-center"}> {/*class prop is for background on about page*/}
            <div className="page-center">
                <h1 className="mid-width">{props.title}</h1>
                <div className="separator"></div>
                <p className="large-grey-font mid-width">{props.subtitle}</p>
            </div>
        </div>
        </>
    )

export default TopTitle