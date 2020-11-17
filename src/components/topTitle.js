import React from "react"
import {useSpring, animated} from 'react-spring'

export default props => {
    const dropIn = useSpring({opacity: 1, bottom: '0px', from: {opacity: 0, position: 'relative', bottom: '50px'}})
    return (
        <>
        <div className={props.class + " top-title text-center"}> {/*class prop is for background on about page*/}
            <animated.div className="page-center" style={dropIn}>
                <h1 className="mid-width">{props.title}</h1>
                <div className="separator"></div>
                <p className="large-grey-font mid-width">{props.subtitle}</p>
            </animated.div>
        </div>
        </>
    )
}