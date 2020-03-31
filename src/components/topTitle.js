import React from "react"
import {useSpring, animated} from 'react-spring'

export default props => {
    const dropIn = useSpring({opacity: 1, bottom: '0px', from: {opacity: 0, position: 'relative', bottom: '50px'}})
    return (
        <>
        <animated.div className="page-center top-title" style={dropIn}>
            <div >
                <h1>{props.title}</h1>
                <div className="separator"></div>
            </div>
            <div id="break-start">
                <p className="large-grey-font">{props.subtitle}</p>
            </div>
        </animated.div>
        </>
    )
}