import React from 'react'
import propTypes from 'prop-types'
import './style.less'
const NormalText=({text,fontSize,color})=>(
    <div className="normal-text" style={{fontSize,color}}>{text}</div>
)

export default NormalText;

NormalText.propTypes={
    text:propTypes.string.isRequired
}
NormalText.defaultProps={
    fontSize:'32px',
    color:'#333333'
}