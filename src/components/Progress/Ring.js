import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

const handleRatioToDeg=(ratio)=>{
    const half=(ratio-0)*180
    return ratio<0.5
        ? {innerDeg:half, outerDeg:(180-half)}
        : {innerDeg:(0-half), outerDeg:(half-180)}
}

const transformStyle=(deg)=>({
    transform: `rotate(${deg}deg)`
})

export default function ProgressRing({ratio}){
    ratio=ratio<1?ratio:1
    const {innerDeg,outerDeg}=handleRatioToDeg(ratio)
    return(
        <div className="progress-ring">
            <div className="outer-circle" style={transformStyle(outerDeg)}/>
            <div className="inner-circle" style={transformStyle(innerDeg)}/>
            <div className="empty-circle"/>
        </div>
    )
}

ProgressRing.propTypes={
    ratio:PropTypes.number.isRequired
}