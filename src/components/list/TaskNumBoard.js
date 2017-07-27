import React,{Component} from 'react'
import PropTypes from 'prop-types'

const TaskNumBoard=({num,name})=>(
    <div className="processNum">
       <span className="task-num">{num}</span>
        <br/>
        <span className="task-type">{name}</span>
    </div>
)

export default TaskNumBoard

TaskNumBoard.propTypes={
    num:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}