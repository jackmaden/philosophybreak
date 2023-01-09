import React from "react"

const TopTitle = props => (
        <>
        <div className={props.class + " top-title text-center"}> {/*class prop is for background on about page*/}
            <div className="page-center">
                <h1>{props.title}</h1>
                <div className="separator"></div>
                <h2 className="large-grey-font mid-width">{props.subtitle}</h2>
            </div>
        </div>
        </>
    )

export default TopTitle