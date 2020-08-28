import React from "react"
import {useSpring, animated} from 'react-spring'

export default props => {
    const dropIn = useSpring({opacity: 1, bottom: '0px', from: {opacity: 0, position: 'relative', bottom: '50px'}})
    return (
        <>
        <animated.div className="page-center top-title text-center" style={dropIn}>
                <h1>{props.title}</h1>
                <div className="separator"></div>
                <p className="large-grey-font mid-width">{props.subtitle}</p>
        </animated.div>
        </>
    )
}