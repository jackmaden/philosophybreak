import React from "react"
import {useSpring, animated} from 'react-spring'

export default props => {
    const dropIn = useSpring({opacity: 1, bottom: '0px', from: {opacity: 0, position: 'relative', bottom: '50px'}})
    const fadeIn = useSpring({opacity: 1, left: '0px', delay: 400, from: {opacity: 0, position: 'relative', left: '50px'}})
    return (
        <>
        <div className="page-center top-title">
            <animated.div style={dropIn}>
                <h1>{props.title}</h1>
                <div className="separator"></div>
            </animated.div>
            <animated.div style={fadeIn} id="break-start">
                <p className="large-grey-font">{props.subtitle}</p>
            </animated.div>
        </div>
        </>
    )
}