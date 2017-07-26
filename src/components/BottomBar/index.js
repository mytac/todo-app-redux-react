import React from 'react'
import PropTypes from 'prop-types'
import './style.less'
export default function BottomBar({num}){
    return(
        <div className="bottom-bar">
            <div className="title">COMPLETED</div>
            <div className="round">{10}</div>
        </div>
    )
}