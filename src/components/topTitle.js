import React from "react"
import {useSpring, animated} from 'react-spring'

export default props => {
    const dropIn = useSpring({opacity: 1, left: '0px', delay: 200, from: {opacity: 0, position: 'relative', left: '40px'}})
    return (
        <>
        <div className="page-center top-title">
            <animated.div style={dropIn}>
                <h1>{props.title}</h1>
                <div className="separator"></div>
            </animated.div>
        </div>
        </>
    )
}