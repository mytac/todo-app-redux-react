import React,{Component} from 'react'

const TaskNumBoard=({num,name})=>(
    <div className="processNum">
       <span className="task-num">{num}</span>
       <span className="task-num">23</span>
        <br/>
        <span className="task-type">{name}</span>
        <span className="task-type">Personal</span>
    </div>
)

export default TaskNumBoard