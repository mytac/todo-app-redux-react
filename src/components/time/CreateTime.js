import React from 'react'
import PropTypes from 'prop-types'

import NormalText from '../Content/NormalText'
import './style.less'
// 24小时转换12进制
const timeFormatTransform=(time)=>time<13?`${time}am`:`${time%12}pm`

export default function CreateTime({time,style}) {

    return (
        <div className="time">
            <NormalText text={timeFormatTransform(time)} style={style}/>
        </div>
    )
}

CreateTime.propTypes = {
    time: PropTypes.string.isRequired
}

CreateTime.defaultProps={
    style:{
        fontSize:"20px",
        color:"#ccc"
    }
}